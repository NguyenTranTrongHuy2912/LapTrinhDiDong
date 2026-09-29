import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type Movie = {
    id: string;
    title: string;
    genre: string;
    year: number;
    rating: number;
    poster: string;
    isShowing: boolean;
};

export type MovieCardProps = {
    movie: Movie;
    layout?: 'row' | 'tile';
    onSelect: (id: string) => void;
};

const MovieCard = ({ movie, layout = 'row', onSelect }: MovieCardProps) => {
    const isTile = layout === 'tile';
    const rating = `⭐ ${Number(movie.rating).toFixed(1)}`;

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onSelect(movie.id)}
            style={[styles.card, isTile && styles.cardTile]}
        >
            {/* Poster */}
            <View style={[styles.posterWrapper, isTile && styles.posterWrapperTile]}>
                <Image
                    source={{ uri: movie.poster }}
                    style={[styles.poster, isTile && styles.posterTile]}
                    resizeMode="cover"
                />

                {/* Tile */}
                {isTile && (
                    <View style={styles.ratingBadge}>
                        <Text style={styles.ratingBadgeText}>{rating}</Text>
                    </View>
                )}
            </View>

            {/* Thông tin */}
            <View style={[styles.info, isTile && styles.infoTile]}>
                <Text style={styles.title} numberOfLines={isTile ? 1 : 2}>
                    {movie.title}
                </Text>

                {/* Row */}
                {!isTile && (
                    <>
                        <Text style={styles.detail}>
                            {movie.genre} • {movie.year}
                        </Text>
                        <Text style={styles.detail}>{rating}</Text>
                    </>
                )}

                <Text style={styles.detail}>
                    Đang chiếu: {movie.isShowing ? '✅' : '❌'}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default React.memo(MovieCard);

const styles = StyleSheet.create({
    // ----- Card -----
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#eee',
    },
    cardTile: {
        flexDirection: 'column',
        width: '48%', 
        padding: 8,
    },

    // Poster
    posterWrapper: {
        width: 70,
        height: 100,
    },
    posterWrapperTile: {
        width: '100%',
        height: undefined,
        aspectRatio: 2 / 3,
    },
    poster: {
        width: 70,
        height: 100,
        borderRadius: 6,
        backgroundColor: '#ddd',
    },
    posterTile: {
        width: '100%',
        height: '100%',
    },

    // Rating badge (tile)
    ratingBadge: {
        position: 'absolute',
        top: 6,
        left: 6,
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    ratingBadgeText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
    },

    // Info
    info: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'center',
    },
    infoTile: {
        flexShrink: 0,
        marginLeft: 0,
        marginTop: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    detail: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
});