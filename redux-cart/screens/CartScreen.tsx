import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, updateQuantity, clearCart } from "..//store/cartSlice";
import { RootState } from "../store";

const SAMPLE_PRODUCTS = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 60 },
];

export default function CartScreen() {
  const dispatch = useDispatch();
  const [nextIndex, setNextIndex] = useState(0);

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleAddProduct = () => {
    dispatch(addToCart(SAMPLE_PRODUCTS[nextIndex]));
    setNextIndex((nextIndex + 1) % SAMPLE_PRODUCTS.length);
  };

  const handleRemoveProduct = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Giỏ Hàng</Text>

      {/* Danh sách sản phẩm */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text style={styles.empty}>Giỏ hàng trống</Text>}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>${item.price}</Text>
            </View>

            <View style={styles.quantityBox}>
              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() => handleUpdateQuantity(item.id, item.quantity - 1)}
              >
                <Text style={styles.qtyText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.quantity}>{item.quantity}</Text>

              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() => handleUpdateQuantity(item.id, item.quantity + 1)}
              >
                <Text style={styles.qtyText}>+</Text>
              </TouchableOpacity>
            </View>

            {/* Nút xóa */}
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => handleRemoveProduct(item.id)}
            >
              <Text style={styles.removeText}>Xóa</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* 2 nút chính: Thêm sản phẩm, Xóa giỏ */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
          <Text style={styles.buttonText}>+ Thêm Sản Phẩm</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => dispatch(clearCart())}
        >
          <Text style={styles.buttonText}>🗑️ Xóa Giỏ</Text>
        </TouchableOpacity>
      </View>

      {/* Tổng tiền */}
      <View style={styles.totalBox}>
        <Text style={styles.totalText}>Tổng: ${totalPrice}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  empty: {
    textAlign: "center",
    color: "#888",
    marginTop: 24,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  quantityBox: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 8,
  },
  qtyButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  removeButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "#ffe5e5",
    borderRadius: 6,
  },
  removeText: {
    color: "#d00",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  addButton: {
    flex: 1,
    backgroundColor: "#2e7d32",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginRight: 8,
  },
  clearButton: {
    flex: 1,
    backgroundColor: "#c62828",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  totalBox: {
    marginTop: 16,
    padding: 12,
    borderTopWidth: 1,
    borderColor: "#ddd",
    alignItems: "flex-end",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
