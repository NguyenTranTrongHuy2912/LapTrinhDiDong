import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    totalAmount: number;
    totalPrice: number;
}

const initialState: CartState = {
    items: [],
    totalAmount: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const itemToAdd = action.payload;
            const existingItem = state.items.find((item) => item.id === itemToAdd.id);

            if (existingItem) {
                existingItem.quantity += itemToAdd.quantity;
            } else {
                state.items.push(itemToAdd);
            }

            state.totalAmount += itemToAdd.quantity;
            state.totalPrice += itemToAdd.price * itemToAdd.quantity;
        },

        removeFromCart: (state, action: PayloadAction<string>) => {
            const existingItemIndex = state.items.findIndex((item) => item.id === action.payload);

            if (existingItemIndex !== -1) {
                const existingItem = state.items[existingItemIndex];
                state.totalAmount -= existingItem.quantity;
                state.totalPrice -= existingItem.price * existingItem.quantity;
                state.items.splice(existingItemIndex, 1);
            }
        },

        updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem) {
                if (quantity <= 0) {
                    state.totalAmount -= existingItem.quantity;
                    state.totalPrice -= existingItem.price * existingItem.quantity;
                    state.items = state.items.filter((item) => item.id !== id);
                } else {
                    const quantityDifference = quantity - existingItem.quantity;
                    state.totalAmount += quantityDifference;
                    state.totalPrice += existingItem.price * quantityDifference;
                    existingItem.quantity = quantity;
                }
            }
        },

        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
            state.totalPrice = 0;
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;