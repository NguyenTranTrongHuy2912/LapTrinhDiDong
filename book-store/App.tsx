
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import BookCard from './components/BookCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView style={styles.contentArea}>
        <View style={styles.listContainer}>
          <BookCard
            title="Sách 1"
            author="Nguyễn Văn A"
            price={150000}
            imageUrl="https://picsum.photos/id/1010/80/110"
          />
          <BookCard
            title="Sách 2"
            author="Nguyễn Văn A"
            price={350000}
            imageUrl="https://picsum.photos/id/1011/80/110"
          />
          <BookCard
            title="Sách 3"
            author="Nguyễn Văn A"
            price={85000}
            imageUrl="https://picsum.photos/id/1003/80/110"
          />
          <BookCard
            title="Sách 4"
            author="Nguyễn Văn A"
            price={79000}
            imageUrl="https://picsum.photos/id/1004/80/110"
          />
          <BookCard
            title="Sách 5"
            author="Nguyễn Văn A"
            price={120000}
            imageUrl="https://picsum.photos/id/1005/80/110"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Chiếm toàn bộ màn hình điện thoại
    backgroundColor: '#ffffff',
    // Dòng dưới giúp UI không bị đè vào thanh trạng thái (tai thỏ, pin, sóng...) trên Android
    // paddingTop: StatusBar.currentHeight || 0, 
  },
  contentArea: {
    flex: 1, 
    backgroundColor: '#e9ecef', // Màu nền phụ để dễ phân biệt vùng content
  },
  listContainer: {
    padding: 16,
    gap: 15, // Tạo khoảng cách giữa các Book Card xếp chồng lên nhau
  }
});
