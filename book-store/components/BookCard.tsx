import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

type BookCardProps = {
  id?: string, 
  title: string,
  author?: string,
  price: number,
  imageUrl?: string,
  variant?: 'list' | 'grid'
}

const BookCard = ({ title, author, price, imageUrl, variant = 'list' }: BookCardProps) => {
  const isGrid = variant === 'grid';

  return (
    <View style={[styles.container, isGrid ? styles.gridContainer : styles.listContainer]}>
      <View style={[styles.cover_image, isGrid ? styles.gridImageContainer : styles.listImageContainer]}>
        {imageUrl ? (
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imageText}>Ảnh Bìa</Text>
          </View>
        )}
      </View>

      <View style={[styles.information, isGrid ? styles.gridInfo : styles.listInfo]}>
        <Text numberOfLines={isGrid ? 1 : 2} style={[styles.titleText, isGrid && styles.textCenter]}>
          {title}
        </Text>

        {!isGrid && <Text>{author}</Text>}

        <Text style={[styles.priceText, isGrid && styles.textCenter]}>
          {price.toLocaleString('vi-VN')} đ
        </Text>
      </View>
    </View>
  )
}

export default BookCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  // --- STYLE CHO LIST ---
  listContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    backgroundColor: '#f5f5f5',
    padding: 10,
    gap: 10,
  },
  listImageContainer: {
    height: 110,
    width: 80,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  listInfo: {
    flex: 1,
    height: 110,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  // --- STYLE CHO GRID ---
  gridContainer: {
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  gridImageContainer: {
    width: '100%',
    aspectRatio: 2/3,
    backgroundColor: '#d3d3d3',
  },
  gridInfo: {
    padding: 8,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#e8f5e9',
    justifyContent: 'center',
  },

  // --- THUỘC TÍNH CHUNG ---
  image: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    fontSize: 12,
    color: '#666',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  priceText: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 14,
  },
  textCenter: {
    textAlign: 'center',
  },
  cover_image: {
    backgroundColor: '#ccc',
    overflow: 'hidden',
  },
  information: {
    flex: 1,
    height: 110,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
})