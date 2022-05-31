import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Wishlist from "./Wishlist";
const Navbar = () => {
  const { isAuthorised, login, logout } = useContext(AuthContext);
  return (
    <div>
      Navbar
      <button
        onClick={() => {
          if (isAuthorised) {
            logout();
          } else {
            login("R", "Z");
          }
        }}
      >
        {isAuthorised ? "logout" : "login"}
      </button>
      <Wishlist />
    </div>
  );
};

export default Navbar;
