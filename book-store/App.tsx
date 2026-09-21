
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import BookCard from './components/BookCard';
import CategoryChips from './components/CategoryChips';
import BookGrid from './components/BookGrid';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <CategoryChips></CategoryChips>

      <ScrollView style={styles.contentArea}>
         {/* <View style={styles.listContainer}>
          <BookCard
            id='1'
            title="Sách 1"
            author="Nguyễn Văn A"
            price={150000}
            imageUrl="https://picsum.photos/id/1010/80/110"
          />
          <BookCard
            id='2'
            title="Sách 2"
            author="Nguyễn Văn A"
            price={350000}
            imageUrl="https://picsum.photos/id/1011/80/110"
          />
          <BookCard
            id='3'
            title="Sách 3"
            author="Nguyễn Văn A"
            price={85000}
            imageUrl="https://picsum.photos/id/1003/80/110"
          />
          <BookCard
            id='4'
            title="Sách 4"
            author="Nguyễn Văn A"
            price={79000}
            imageUrl="https://picsum.photos/id/1004/80/110"
          />
          <BookCard
            id='5'
            title="Sách 5"
            author="Nguyễn Văn A"
            price={120000}
            imageUrl="https://picsum.photos/id/1005/80/110"
          />
        </View> */}
        <BookGrid></BookGrid>

       
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentArea: {
    flex: 1,
    backgroundColor: '#e9ecef',
  },
  listContainer: {
    padding: 16,
    gap: 15,
  }
});
