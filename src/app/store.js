import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../features/items/itemsSlice";
import catReducer from "../features/category/categoriesSlice";
import favreducer from "../features/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    categories: catReducer,
    favorites: favreducer,
  },
});
