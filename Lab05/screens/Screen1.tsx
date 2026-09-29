import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { StaticScreenProps, useNavigation } from '@react-navigation/native'
import { ColorKey, PHONE_COLORS } from './Screen2'

type Props = StaticScreenProps<{ color?: ColorKey } | undefined>

const Screen1 = ({ route }: Props) => {
  const navigation = useNavigation<any>()
  const [selectedColor, setSelectedColor] = useState<ColorKey>('blue')

  // Khi Screen2 trả về màu mới (qua params) -> cập nhật lại state
  useEffect(() => {
    const color = route.params?.color
    if (color) {
      setSelectedColor(color)
    }
  }, [route.params?.color])

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Ảnh sản phẩm - đổi theo màu đã chọn */}
        <Image
          source={PHONE_COLORS[selectedColor].image}
          style={styles.productImage}
          resizeMode="contain"
        />

        <Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

        <View style={styles.ratingRow}>
          <View style={styles.stars}>
            {[1, 2, 3, 4, 5].map(i => (
              <Text key={i} style={styles.star}>
                ★
              </Text>
            ))}
          </View>
          <Text style={styles.reviewText}>(Xem 828 đánh giá)</Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.price}>1.790.000 đ</Text>
          <Text style={styles.oldPrice}>1.790.000 đ</Text>
        </View>

        <View style={styles.guaranteeRow}>
          <Text style={styles.guaranteeText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <View style={styles.helpCircle}>
            <Text style={styles.helpText}>?</Text>
          </View>
        </View>

        {/* Bấm để sang Screen2, truyền màu hiện tại */}
        <TouchableOpacity
          style={styles.colorButton}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Screen2', { color: selectedColor })}
        >
          <Text style={styles.colorButtonText}>4 MÀU-CHỌN MÀU</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.buyButton} activeOpacity={0.8}>
          <Text style={styles.buyButtonText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { paddingHorizontal: 16, paddingTop: 16 },
  productImage: { width: '100%', height: 260, marginBottom: 12 },
  title: { fontSize: 13, color: '#000', marginBottom: 10 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  stars: { flexDirection: 'row', marginRight: 14 },
  star: { fontSize: 26, color: '#E6E650', marginRight: 2 },
  reviewText: { fontSize: 13, color: '#000' },
  priceRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  price: { fontSize: 15, fontWeight: 'bold', color: '#000', marginRight: 30 },
  oldPrice: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  guaranteeRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 18 },
  guaranteeText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#EE0A0A',
    marginRight: 14,
  },
  helpCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helpText: { fontSize: 12, color: '#000' },
  colorButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
  },
  colorButtonText: { flex: 1, textAlign: 'center', fontSize: 14, color: '#000' },
  arrow: { fontSize: 18, color: '#000' },
  footer: { paddingHorizontal: 16, paddingBottom: 24, paddingTop: 12 },
  buyButton: {
    backgroundColor: '#E53935',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
})
