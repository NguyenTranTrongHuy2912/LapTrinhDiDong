import { memo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { formatDate, formatPrice, getSeatLabel } from '../utils/tour';

export type Tour = {
  id: string;
  name: string;
  city: string;
  days: number;
  price: number;
  seats: number;
  departure: string;
  image: string;
  isFavorite: boolean;
};

export type TourItemProps = {
  tour: Tour;
  compact?: boolean;
  onPress: (tour: Tour) => void;
  onToggleFavorite: (id: string, next: boolean) => void;
};

function TourItem({ tour, onPress, onToggleFavorite }: TourItemProps) {
  const seatsLow = tour.seats <= 3;

  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(tour)}>
      <Image source={{ uri: tour.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{tour.name}</Text>
        <Text>{tour.city}</Text>
        <Text>📅 {formatDate(tour.departure)} · {tour.days} ngày</Text>
        <Text style={styles.price}>{formatPrice(tour.price)}</Text>
        <Text style={seatsLow && styles.red}>{getSeatLabel(tour.seats)}</Text>
      </View>

      <TouchableOpacity
        testID="fav-btn"
        onPress={() => onToggleFavorite(tour.id, !tour.isFavorite)}
      >
        <Text style={styles.heart}>{tour.isFavorite ? '♥' : '♡'}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default memo(TourItem);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  image: { width: 90, height: 90, borderRadius: 8 },
  info: { flex: 1, marginHorizontal: 12 },
  name: { fontSize: 16, fontWeight: '600' },
  price: { fontWeight: '700' },
  red: { color: 'red' },
  heart: { fontSize: 24, color: 'red' },
});
