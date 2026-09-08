import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type BookCardProps = {
    title: string,
    author: string,
    price: number,
    imageUrl?: string
}

const BookCard = ({title, author, price, imageUrl}:BookCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.cover_image}>
        <Text>Anh Bia</Text>
      </View>
      <View style={styles.information}>
        <Text>Ten Sach</Text>
        <Text>Tac gia</Text>
        <Text>Gia</Text>
      </View>
    </View>
  )
}

export default BookCard

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor:'red',
        padding:5,
        gap: 10
    },
    cover_image:{
        height: 110,
        width: 80,
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderRadius: 5,
    },
    information:{
        flex: 1,
        flexDirection: 'column',
        gap: 5,
        justifyContent: 'space-around'
        
    }

})