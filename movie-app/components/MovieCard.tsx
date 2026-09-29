import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

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

const MovieCard = ({ movie, layout, onSelect}: MovieCardProps) => {
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