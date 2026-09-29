import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

// Danh sách 4 màu: mã màu để vẽ ô vuông + ảnh điện thoại tương ứng
const colors = [
    { hex: '#bfc3c4', image: require('../assets/vs_silver.png') },
    { hex: '#E03123', image: require('../assets/vs_red.png') },
    { hex: '#000000', image: require('../assets/vs_black.png') },
    { hex: '#2A4794', image: require('../assets/vs_blue.png') },
]

const Screen2 = ({ route }: any) => {
    const navigation = useNavigation<any>()
    const [image, setImage] = useState(route.params?.image)

    useEffect(() => {
        if (route.params?.image) {
            setImage(route.params.image)
        }
    }, [route.params?.image])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={image} style={styles.thumb} resizeMode="contain" />
                <Text style={styles.title}>Điện Thoại Vsmart Joy 3{'\n'}Hàng chính hãng</Text>
            </View>

            <View style={styles.body}>
                <Text style={styles.label}>Chọn một màu bên dưới:</Text>

                <View style={styles.swatches}>
                    {colors.map(item => (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => setImage(item.image)}
                            style={[
                                styles.swatch,
                                { backgroundColor: item.hex },
                                image === item.image && styles.swatchSelected,
                            ]}
                        />
                    ))}
                </View>

                <TouchableOpacity
                    style={styles.doneButton}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Screen1', { image })}
                >
                    <Text style={styles.doneText}>XONG</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Screen2

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFFFFF' },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: '#FFFFFF',
        height: 110,
    },
    thumb: { width: 70, height: 90, marginRight: 12 },
    title: { flex: 1, fontSize: 13, color: '#000' },
    body: {
        flex: 1,
        backgroundColor: '#C4C4C4',
        paddingHorizontal: 12,
        paddingTop: 10,
        paddingBottom: 20,
    },
    label: { fontSize: 14, color: '#000', marginBottom: 12 },
    swatches: { flex: 1, alignItems: 'center' },
    swatch: {
        width: 90,
        height: 75,
        marginBottom: 12,
        borderWidth: 2,
        borderColor: 'transparent',
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
    },
    swatchSelected: { borderColor: '#5468C0' },
    doneButton: {
        backgroundColor: '#5468C0',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#B0284A',
        paddingVertical: 12,
        alignItems: 'center',
    },
    doneText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
})
