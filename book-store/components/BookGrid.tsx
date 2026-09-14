import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BOOKS = [
    { id: '1', title: 'Sách 1', author: 'Nguyễn Văn A', price: 150000, imageUrl: 'https://picsum.photos/id/1010/80/110' },
    { id: '2', title: 'Sách 2', author: 'Nguyễn Văn A', price: 350000, imageUrl: 'https://picsum.photos/id/1011/80/110' },
    { id: '3', title: 'Sách 3', author: 'Nguyễn Văn A', price: 85000, imageUrl: 'https://picsum.photos/id/1003/80/110' },
    { id: '4', title: 'Sách 4', author: 'Nguyễn Văn A', price: 79000, imageUrl: 'https://picsum.photos/id/1004/80/110' },
    { id: '5', title: 'Sách 5', author: 'Nguyễn Văn A', price: 120000, imageUrl: 'https://picsum.photos/id/1005/80/110' },
];

const BookGrid = () => {
    return (
        <View style={styles.container}>
            {BOOKS.map((item) => (
                <View key={item.id} style={styles.item}>

                    <View style={styles.imagePlaceholder}>
                        {item.imageUrl ? (
                            <Image
                                source={{ uri: item.imageUrl }}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        ) : (
                            <Text style={styles.imageText}>Ảnh Bìa</Text>
                        )}
                    </View>

                    <View style={styles.info}>
                        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                        {/* Bạn có thể dùng .toLocaleString('vi-VN') để thêm dấu chấm phân cách hàng nghìn cho đẹp */}
                        <Text style={styles.price}>{item.price.toLocaleString('vi-VN')} đ</Text>
                    </View>

                </View>
            ))}
        </View>
    );
}

export default BookGrid

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#f8f9fa',
    },
    item: {
        width: '48%',
        marginBottom: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    imagePlaceholder: {
        width: '100%',
        aspectRatio: 3 / 4,
        backgroundColor: '#d3d3d3',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageText: {
        color: '#333',
        fontWeight: '600',
    },
    info: {
        padding: 8,
        borderTopWidth: 1,
        borderColor: '#e0e0e0',
        backgroundColor: '#e8f5e9',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 4,
        textAlign: 'center',
    },
    price: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
})