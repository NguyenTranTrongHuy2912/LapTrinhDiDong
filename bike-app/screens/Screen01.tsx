import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Screen01 = () => {
    const navigation = useNavigation<any>()
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>A premium online store for sporter and their stylish choice</Text>
            <Image source={require('../assets/blue.png')} style={{ width: 292, height: 270, marginTop: 20 }} />
            <Text style={styles.text2}>POWER BIKE SHOP</Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textbtn}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Screen01

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1: {
        fontSize: 20,
        fontFamily: 'VT323',
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        margin: 20,
    },
    text2: {
        fontSize: 25,
        fontFamily: 'VT323',
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#E94141',
        borderRadius: 25,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        marginTop: 20,
    },
    textbtn: {
        fontSize: 15,
        fontFamily: 'VT323',
        fontWeight: 'bold',
        color: '#FEFEFE',
        textAlign: 'center',
    }
})