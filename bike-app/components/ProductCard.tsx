import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type BikeProps = {
    imageUrl?: ImageSourcePropType,
    title: string,
    price: number,
}

const ProductCard = ({ imageUrl, title, price }: BikeProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.heart}>♡</TouchableOpacity>
            <Image source={imageUrl} resizeMode="contain" style={styles.pic} />
            <Text style={styles.title} numberOfLines={2}>{title}</Text>
            <Text style={styles.price2}><Text style={styles.price1}>$</Text>{price}</Text>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48%',
        padding: 10,
    },
    heart :{
        position: 'absolute',
        top: 1,
        left: 10,
        fontSize: 30,
        color: '#E94141',
    },
    pic: {
        width: 135,
        height: 127,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontFamily: 'VT323',
        color: '#000000',
        marginTop: 5,
    },
    price1:{
        fontSize: 20,
        fontFamily: 'Voltaire',
        fontWeight: 'bold',
        color: '#F7BA83',
        marginTop: 5,
    },
    price2: {
        fontSize: 20,
        fontFamily: 'Voltaire',
        color: '#000000',
        marginTop: 5,
    }
})