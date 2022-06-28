import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Items from "./features/items/Items";
import Categories from "./features/category/Category";
import Router from "./routes/Router"

function App() {
  
  return (
    <Router/>
  );
}

export default App;
