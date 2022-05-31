import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Cart from "./Cart";
const Product = () => {
  //   const condition = true;
  const { isAuthorised } = useContext(AuthContext);
  return (
    <div>
      Product:{isAuthorised ? "loggedIN" : " loggedOUT"}
      <Cart />
    </div>
  );
};

export default Product;
