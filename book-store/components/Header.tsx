import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';


const Header = () => {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Image source={require('../assets/logo.jpg')} style={{ width: 150, height: 45 }} />
                </View>
            </View>
            <View style={styles.searchbar}>
                <Pressable onPress={() => { console.log('Clicked') }}>
                    <FontAwesome name="search" size={24} color="white" />
                </Pressable>
                <Pressable onPress={() => { console.log('Clicked') }}>
                    <FontAwesome name="shopping-cart" size={24} color="white" />
                </Pressable>

            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        height: 56,
        width: '100%',
        backgroundColor: '#165364',
    },
    searchbar: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
    }
})