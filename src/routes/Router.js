import * as React from "react";
import { useRoutes } from "react-router-dom";

import ShoppingLayout from "./../layout/ShoppingLayout";
import Category from "./../features/category/Category";
import Create from "./../features/create/Create";
import Favorite from "./../features/favorites/Favorite";

import Items from "./../features/items/Items";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <ShoppingLayout />,
      children: [
        {
          path: "/categories",
          element: <Category />,
        },
        {
          path: "/create",
          element: <Create />,
        },
        {
          path: "/favorites",
          element: <Favorite />,
        },
      ],
    },
  ]);
}
