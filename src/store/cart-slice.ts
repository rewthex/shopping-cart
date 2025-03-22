import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InventoryItem } from "./inventory-slice";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  rating: { rate: number; count: number };
  description: string;
  category: string;
  image: string;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<InventoryItem>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items.splice(itemIndex, 1);
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart } = cartSlice.actions;
