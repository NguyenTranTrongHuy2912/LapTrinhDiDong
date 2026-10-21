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

function TourItem({ tour, compact = false, onPress, onToggleFavorite }: TourItemProps) {
  const seatsLow = tour.seats <= 3;

  return (
    <TouchableOpacity
      style={[styles.card, compact && styles.cardCompact]}
      onPress={() => onPress(tour)}
    >
      <Image
        source={{ uri: tour.image }}
        style={[styles.image, compact && styles.imageCompact]}
      />

      <View style={[styles.info, compact && styles.infoCompact]}>
        <Text style={styles.name} numberOfLines={compact ? 1 : undefined}>
          {tour.name}
        </Text>
        {!compact && <Text>{tour.city}</Text>}
        {!compact && <Text>📅 {formatDate(tour.departure)} · {tour.days} ngày</Text>}
        <Text style={styles.price}>{formatPrice(tour.price)}</Text>
        {!compact && (
          <Text style={seatsLow && styles.red}>{getSeatLabel(tour.seats)}</Text>
        )}
      </View>

      <TouchableOpacity
        testID="fav-btn"
        style={compact && styles.favCompact}
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
  cardCompact: {
    flexDirection: 'column',
    width: 160,
    padding: 0,
    borderBottomWidth: 0,
  },
  image: { width: 90, height: 90, borderRadius: 8 },
  imageCompact: { width: '100%', height: undefined, aspectRatio: 4 / 3 },
  info: { flex: 1, marginHorizontal: 12 },
  infoCompact: { flex: 0, marginHorizontal: 0, marginTop: 6 },
  name: { fontSize: 16, fontWeight: '600' },
  price: { fontWeight: '700' },
  red: { color: 'red' },
  heart: { fontSize: 24, color: 'red' },
  favCompact: { position: 'absolute', top: 6, right: 6 },
});
