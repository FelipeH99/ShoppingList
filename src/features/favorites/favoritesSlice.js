import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [{ name: "farmacia" }, { name: "Comida" }],
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
  },
});

export const { addCategory } = categorySlice.actions;

export const selectCategories = (state) => state.categories.categories;

export default categorySlice.reducer;
