import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type BookCardProps = {
  id: string,
  title: string,
  author: string,
  price: number,
  imageUrl?: string
}

const BookCard = ({ title, author, price, imageUrl }: BookCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.cover_image}>
        {imageUrl ? (
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <Text style={{ textAlign: 'center', marginTop: 40, fontSize: 12 }}>Ảnh Bìa</Text>
        )}
      </View>
      <View style={styles.information}>
        <Text numberOfLines={2} style={styles.titleText}>{title}</Text>
        <Text>{author}</Text>
        <Text style={styles.priceText}>{price} đ</Text>
      </View>
    </View>
  )
}

export default BookCard

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    backgroundColor: '#f5f5f5',
    padding: 10,
    gap: 10
  },
  cover_image: {
    height: 110,
    width: 80,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
  information: {
    flex: 1,
    height: 110,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16
  },
  priceText: {
    color: 'green',
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    height: '100%',
  },
})