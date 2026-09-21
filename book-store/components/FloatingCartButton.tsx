import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

type FloatingCartButtonProps = {
  itemCount?: number;
}

const FloatingCartButton = ({ itemCount = 4 }: FloatingCartButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8}>
      <Text style={styles.buttonText}>Giỏ hàng</Text>
      
      {itemCount > 0 && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{itemCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

export default FloatingCartButton

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    width: 64,
    height: 64, 
    borderRadius: 32, 
    backgroundColor: '#5b7cfa', 
    justifyContent: 'center',
    alignItems: 'center',
    

  },
  buttonText: {
    color: '#000', // Chữ màu đen giống thiết kế[cite: 3]
    fontSize: 12,
    fontWeight: 'bold',
  },
  badgeContainer: {
    position: 'absolute',
    top: -2,    // Neo lên sát viền trên
    right: -4,  // Đẩy lệch ra ngoài viền phải một chút
    backgroundColor: '#e74c3c', // Nền đỏ nổi bật[cite: 3]
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    minWidth: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: 'white', // Chữ màu trắng[cite: 3]
    fontSize: 12,
    fontWeight: 'bold',
  },
})