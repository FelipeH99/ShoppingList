import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Items from "./features/items/Items";
import Categories from "./features/category/Category";

function App() {
  return (
    <div className="App">
      <header className="Shopping-List">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Categories></Categories>
      </header>
    </div>
  );
}

export default App;
