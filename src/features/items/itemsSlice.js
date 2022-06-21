import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from "./counterAPI";

const initialState = {
  items: [{ name: "feli", image: "https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/509ffcfb512056e813c9070a614fbf77/6/4/64809_10.jpg" , category: 'farmacia'}],
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = itemsSlice.actions;

export const selectItems = (state) => state.items.items;

export default itemsSlice.reducer;
