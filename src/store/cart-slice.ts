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

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<InventoryItem>) {

    },
    removeFromCart(state, action: PayloadAction<string>) {

    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions;