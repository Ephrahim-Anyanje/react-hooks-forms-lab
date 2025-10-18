import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import itemsData from "../data/items";
import { v4 as uuid } from "uuid";

function App() {
  const [items, setItems] = useState(itemsData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleAddItem(newItem) {
    setItems([...items, { ...newItem, id: uuid() }]);
  }

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header onDarkModeClick={handleDarkModeClick} isDarkMode={isDarkMode} />
      <ShoppingList items={items} onItemFormSubmit={handleAddItem} />
    </div>
  );
}

export default App;
