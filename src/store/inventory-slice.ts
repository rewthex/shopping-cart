import {
  type PayloadAction,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export type InventoryItem = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type InventoryState = {
  inventory: InventoryItem[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: InventoryState = {
  inventory: [],
  status: "idle",
  error: null,
};

export const fetchInventory = createAsyncThunk<InventoryItem[]>(
  "inventory/fetchInventory",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    if (!response.ok) {
      throw new Error("Failed to fetch inventory");
    }
    const data = await response.json();

    return data;
  }
);

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInventory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchInventory.fulfilled,
        (state, action: PayloadAction<InventoryItem[]>) => {
          state.status = "succeeded";
          state.inventory = action.payload;
        }
      )
      .addCase(fetchInventory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default inventorySlice.reducer;
