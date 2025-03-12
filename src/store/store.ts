import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "./inventory-slice"; 
import cartReducer from "./cart-slice"


export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    cart: cartReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;