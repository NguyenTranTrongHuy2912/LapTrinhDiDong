import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Touchable, TouchableOpacity } from 'react-native';
import MovieCard from './components/MovieCard';

type Movie = {
  id: string;
  title: string;
  genre: string;
  year: number;
  rating: number;
  poster: string;
  isShowing: boolean;
};


export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const url = 'https://6abb6234b2118ed7abb86df1.mockapi.io/movie';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Lỗi: ", err));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.appname}>Movie App</Text>
      </View>
      {/* <MovieCard></MovieCard> */}
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <TouchableOpacity onPress={()=>{alert(item.title)} }>
              <Text style={styles.movieTitle}>{item.title}</Text>
              <Text style={styles.movieDetails}>Rating: {item.rating}</Text>
              <Text style={styles.movieDetails}>Dang chieu: {item.isShowing ? '✅' : '❌'}</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  titleContainer: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  appname: {
    fontSize: 20,
  },
  listContainer: {
    padding: 16,
  },
  movieItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  movieDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
