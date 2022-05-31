import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Cart = () => {
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      Cart
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
};

export default Cart;
