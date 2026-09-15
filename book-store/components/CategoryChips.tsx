import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CATEGORIES = [
    'Văn học', 'Kinh tế', 'Thiếu nhi',
    'Truyện tranh', 'Ngoại ngữ', 'Lịch sử'
];

const CategoryChips = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {CATEGORIES.map((item, index) => (
                    <View key={index} style={styles.chip}>
                        <Text>{item}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

export default CategoryChips

const styles = StyleSheet.create({
    wrapper: {
        padding: 16,
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        backgroundColor: '#f5f5f5',
        padding: 16,
        borderWidth: 2,
        borderColor: '#b3b3ff',
        borderStyle: 'dashed',

    },
    chip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'indigo',
        backgroundColor: '#ffffff',
    }
})