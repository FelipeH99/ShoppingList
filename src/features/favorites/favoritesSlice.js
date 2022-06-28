import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Category from "../category/Category";

const initialState = {
  categories: [],
};

export const favoriteSlice = createSlice({
  name: "categories",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addFavorite: (state, action) => {
      state.categories.push(action.payload);
    },
  },
});

export const { addFavorite } = favoriteSlice.actions;

export const selectCategories = (state) => state.categories.categories;

export default favoriteSlice.reducer;
