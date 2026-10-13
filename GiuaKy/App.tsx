import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TourItem, { Tour } from './components/TourItem';
import { formatDate, formatPrice, groupByCity } from './utils/tour';

const API_URL = 'https://6abb6234b2118ed7abb86df1.mockapi.io/tours';

export default function App() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTours(data))
      .catch(() => setTours([]))
      .finally(() => setLoading(false));
  }, []);

  const showDetail = (tour: Tour) => {
    Alert.alert(
      tour.name,
      `Khởi hành: ${formatDate(tour.departure)}\nSố ngày: ${tour.days}\nGiá: ${formatPrice(tour.price)}`,
    );
  };

  const setFavorite = (id: string, value: boolean) => {
    setTours((prev) => prev.map((t) => (t.id === id ? { ...t, isFavorite: value } : t)));
  };

  const toggleFavorite = async (id: string, next: boolean) => {
    setFavorite(id, next); // cập nhật ngay, không chờ API

    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isFavorite: next }),
      });
      if (!res.ok) throw new Error('PUT failed');
    } catch {
      setFavorite(id, !next); // lỗi thì hoàn tác
      Alert.alert('Lỗi', 'Không thể cập nhật yêu thích. Vui lòng thử lại.');
      alert('Không thể cập nhật yêu thích. Vui lòng thử lại.');
    }
  };

  const favorites = tours.filter((t) => t.isFavorite);

  const favoriteHeader = (
    <View style={styles.favSection}>
      <Text style={styles.favTitle}>Tour yêu thích ({favorites.length})</Text>
      {favorites.length === 0 ? (
        <Text style={styles.favEmpty}>Chưa có tour yêu thích</Text>
      ) : (
        <FlatList
          data={favorites}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          contentContainerStyle={styles.favList}
          renderItem={({ item }) => (
            <TourItem
              tour={item}
              compact
              onPress={showDetail}
              onToggleFavorite={toggleFavorite}
            />
          )}
        />
      )}
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Tour Việt</Text>
          <Text style={styles.student}>23671451 – Nguyễn Trần Trọng Huy</Text>
          <TextInput
            style={styles.input}
            placeholder="Tìm tour theo tên..."
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {loading ? (
          <ActivityIndicator size="large" style={styles.loading} />
        ) : (
          <SectionList
            sections={groupByCity(tours)}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={favoriteHeader}
            stickySectionHeadersEnabled
            renderSectionHeader={({ section }) => (
              <Text style={styles.sectionHeader}>
                {section.title} · {section.data.length} tour
              </Text>
            )}
            renderItem={({ item }) => (
              <TourItem tour={item} onPress={showDetail} onToggleFavorite={toggleFavorite} />
            )}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  title: { fontSize: 28, fontWeight: '700' },
  student: { fontSize: 16, marginVertical: 8 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  favSection: { paddingVertical: 12 },
  favTitle: { fontSize: 18, fontWeight: '700', paddingHorizontal: 16, marginBottom: 8 },
  favEmpty: { paddingHorizontal: 16, color: '#666' },
  favList: { paddingHorizontal: 16 },
  loading: { marginTop: 40 },
  sectionHeader: {
    backgroundColor: '#e8f0fe',
    fontSize: 17,
    fontWeight: '700',
    padding: 10,
  },
});
