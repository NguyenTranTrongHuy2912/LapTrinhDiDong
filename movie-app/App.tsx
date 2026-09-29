import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Platform,
  RefreshControl,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MovieCard, { Movie } from './components/MovieCard';

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [isTile, setIsTile] = useState(false);
  const url = 'https://6abb6234b2118ed7abb86df1.mockapi.io/movie';

  const loadMovies = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error('Lỗi: ', err))
      .finally(() => {
        setLoading(false);
        setRefreshing(false);
      });
  };

  useEffect(loadMovies, []);

  const onRefresh = () => {
    setRefreshing(true);
    loadMovies();
  };

  const handleSelect = useCallback(
    (id: string) => {
      const movie = movies.find((m) => m.id === id);
      if (!movie) return;
      if (Platform.OS === 'web') window.alert(movie.title);
      else Alert.alert('Phim đã chọn', movie.title);
    },
    [movies]
  );

  const numColumns = isTile ? 2 : 1;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.appname}>Movie App</Text>
          <View style={styles.switchWrapper}>
            <Text style={styles.switchLabel}>Dạng lưới</Text>
            <Switch value={isTile} onValueChange={setIsTile} />
          </View>
        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="blue" />
            <Text style={styles.loadingText}>Đang tải dữ liệu...</Text>
          </View>
        ) : (
          <FlatList
            key={String(numColumns)}
            numColumns={numColumns}
            data={movies}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <MovieCard
                movie={item}
                layout={isTile ? 'tile' : 'row'}
                onSelect={handleSelect}
              />
            )}
            columnWrapperStyle={isTile ? styles.columnWrapper : undefined} // d.
            contentContainerStyle={styles.listContainer}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
          />
        )}

        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  titleContainer: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  appname: { fontSize: 20 },
  switchWrapper: {
    position: 'absolute',
    right: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: { fontSize: 12, marginRight: 4 },
  loadingContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  loadingText: { marginTop: 10, fontSize: 14, color: '#666' },
  listContainer: { padding: 12 },
  columnWrapper: {
    justifyContent: 'space-between', // d. khoảng cách giữa 2 cột
  },
});