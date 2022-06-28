import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from "./counterAPI";

const initialState = {
  items: [{ name: "feli", image: "https://http2.mlstatic.com/D_Q_NP_713265-MLU44535181857_012021-AC.webp" , category: 'farmacia'}],
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
