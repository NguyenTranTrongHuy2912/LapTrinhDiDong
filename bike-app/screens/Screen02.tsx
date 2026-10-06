import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ProductCard from '../components/ProductCard'

const Screen02 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>The world's Best Bike</Text>
            <View style={styles.tags}>
                <TouchableOpacity activeOpacity={0.5} style={styles.tag}><Text style={styles.text2}>All</Text></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.tag}><Text style={styles.text3}>Roadbike</Text></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.tag}><Text style={styles.text3}>Mountain</Text></TouchableOpacity>
            </View>
            <View style={styles.products}>

                <TouchableOpacity activeOpacity={0.5}><ProductCard imageUrl={require('../assets/blue.png')} title="Pinarello" price={1500} /></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}><ProductCard imageUrl={require('../assets/red1.png')} title="Pina Mountai" price={1700} /></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}><ProductCard imageUrl={require('../assets/purple.png')} title="Pina Bike" price={1500} /></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}><ProductCard imageUrl={require('../assets/red2.png')} title="Pinarello" price={1900} /></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}><ProductCard imageUrl={require('../assets/purple.png')} title="Pinarello" price={2700} /></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}><ProductCard imageUrl={require('../assets/red1.png')} title="Pinarello" price={1350} /></TouchableOpacity>
            </View>

        </View>
    )
}

export default Screen02

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    text1: {
        fontSize: 25,
        fontFamily: 'Ubuntu',
        fontWeight: 'bold',
        color: '#E94141',
        margin: 20,
        paddingLeft: 5,
    },
    tags: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
        paddingLeft: 5,
        paddingRight: 5,
    },
    text2: {
        fontSize: 20,
        fontFamily: 'VT323',
        color: '#E94141',
    },
    text3: {
        fontSize: 20,
        fontFamily: 'VT323',
        color: '#000000',
    },
    tag: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        padding: 2,
        width: '28%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E94141',
    },
    products: {
        marginTop: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    }
})