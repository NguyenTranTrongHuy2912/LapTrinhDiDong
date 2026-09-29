import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { StaticScreenProps, useNavigation } from '@react-navigation/native'

export type ColorKey = 'silver' | 'red' | 'black' | 'blue'

export const PHONE_COLORS: Record<
    ColorKey,
    { label: string; hex: string; image: any }
> = {
    silver: {
        label: 'Bạc',
        hex: '#C5F1FB',
        image: require('../assets/vs_silver.png'),
    },
    red: {
        label: 'Đỏ',
        hex: '#E03123',
        image: require('../assets/vs_red.png'),
    },
    black: {
        label: 'Đen',
        hex: '#000000',
        image: require('../assets/vs_black.png'),
    },
    blue: {
        label: 'Xanh',
        hex: '#2A4794',
        image: require('../assets/vs_blue.png'),
    },
}

const COLOR_KEYS = Object.keys(PHONE_COLORS) as ColorKey[]

type Props = StaticScreenProps<{ color: ColorKey }>

const Screen2 = ({ route }: Props) => {
    const navigation = useNavigation<any>()
    const [selectedColor, setSelectedColor] = useState<ColorKey>(
        route.params?.color,
    )

    // Đồng bộ lại nếu params thay đổi
    useEffect(() => {
        setSelectedColor(route.params.color)
    }, [route.params.color])

    // Bấm XONG: quay về Screen1 và gửi màu đã chọn
    const handleDone = () => {
        navigation.navigate('Screen1', { color: selectedColor })
    }

    return (
        <View style={styles.container}>
            {/* Phần đầu: ảnh + tên sản phẩm */}
            <View style={styles.header}>
                <Image
                    source={PHONE_COLORS[selectedColor].image}
                    style={styles.thumb}
                    resizeMode="contain"
                />
                <Text style={styles.title}>
                    Điện Thoại Vsmart Joy 3{'\n'}Hàng chính hãng
                </Text>
            </View>

            {/* Phần chọn màu */}
            <View style={styles.body}>
                <Text style={styles.label}>Chọn một màu bên dưới:</Text>

                <View style={styles.swatches}>
                    {COLOR_KEYS.map(key => (
                        <TouchableOpacity
                            key={key}
                            activeOpacity={0.8}
                            onPress={() => setSelectedColor(key)}
                            style={[
                                styles.swatch,
                                { backgroundColor: PHONE_COLORS[key].hex },
                                selectedColor === key && styles.swatchSelected,
                            ]}
                        />
                    ))}
                </View>

                <TouchableOpacity
                    style={styles.doneButton}
                    activeOpacity={0.8}
                    onPress={handleDone}
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
