import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import itemsReducer from "../features/items/itemsSlice";
import catReducer from '../features/category/categoriesSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    items: itemsReducer,
    categories: catReducer,
    favorites: counterReducer,
  },
});
