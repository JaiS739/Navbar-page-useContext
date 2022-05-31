import React, { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //   const [selectedItem, setSelectedItem] = useState([]);
  const [count, setCount] = useState(0);

  const addToCart = () => {
    setCount(count + 1);
  };

  return (
    <CartContext.Provider value={{ count, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// --> using children here means that we want to make it accessible to all

//--> now i can use this value "value={{ count, setCount }}" anywhere with the help of useContext hook
