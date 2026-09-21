import { StyleSheet, View } from 'react-native';
import React from 'react';
import BookCard from './BookCard'; // Import BookCard đã nâng cấp

const BOOKS = [
  { id: '1', title: 'Sách 1', author: 'Nguyễn Văn A', price: 150000, imageUrl: 'https://picsum.photos/id/1010/400/600', discount: '20%' },
  { id: '2', title: 'Sách 2', author: 'Nguyễn Văn A', price: 350000, imageUrl: 'https://picsum.photos/id/1011/400/600', discount: '15%' },
  { id: '3', title: 'Sách 3', author: 'Nguyễn Văn A', price: 85000, imageUrl: 'https://picsum.photos/id/1003/400/600', discount: '10%' },
  { id: '4', title: 'Sách 4', author: 'Nguyễn Văn A', price: 79000, imageUrl: 'https://picsum.photos/id/1004/400/600', discount: '5%' },
  { id: '5', title: 'Sách 5', author: 'Nguyễn Văn A', price: 129000, imageUrl: 'https://picsum.photos/id/1009/400/600', discount: '25%' },
];

const BookGrid = () => {
  return (
    <View style={styles.container}>
      {BOOKS.map((item) => (
        <View key={item.id} style={styles.gridItem}>
          <BookCard 
            id={item.id}
            title={item.title}
            author={item.author}
            price={item.price}
            imageUrl={item.imageUrl}
            variant="grid"
            discount={item.discount}
          />
        </View>
      ))}
    </View>
  );
};

export default BookGrid;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '4%',
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  gridItem: {
    width: '48%',
    marginBottom: 16,
  }
});