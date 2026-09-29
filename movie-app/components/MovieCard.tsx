import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// b.	Component hiển thị: poster (Image, lấy từ movie.poster), tên phim, thể loại (genre), năm (year), điểm đánh giá dạng "⭐ 8.5" (1 chữ số thập phân) và trạng thái ✅/❌.
// c.	Bọc ngoài bằng TouchableOpacity; khi nhấn gọi onSelect(movie.id) → hiển thị Alert tên phim.

type Movie = {
    id: string;
    title: string;
    genre: string;
    year: number;
    rating: number;
    poster: string;
    isShowing: boolean;
};

type MovieCardProps = {
    movie: Movie,
    layout?: 'row' | 'tile',
    onSelect: (id: string) => void,
};

const MovieCard = ({ movie, layout='row', onSelect}: MovieCardProps) => {
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <View>
                <Image source={{uri: movie.poster}}/>
            </View>
        </TouchableOpacity >
    )
}

export default MovieCard

const styles = StyleSheet.create({})