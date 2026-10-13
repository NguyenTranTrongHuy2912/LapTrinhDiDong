import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
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
    alert(
      `${tour.name}\nKhởi hành: ${formatDate(tour.departure)}\nSố ngày: ${tour.days}\nGiá: ${formatPrice(tour.price)}`
    );
  };

  const toggleFavorite = (id: string, next: boolean) => {
    setTours((prev) => prev.map((t) => (t.id === id ? { ...t, isFavorite: next } : t)));
  };

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
  loading: { marginTop: 40 },
  sectionHeader: {
    backgroundColor: '#e8f0fe',
    fontSize: 17,
    fontWeight: '700',
    padding: 10,
  },
});
