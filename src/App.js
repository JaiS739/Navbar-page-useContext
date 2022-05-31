import logo from "./logo.svg";
import "./App.css";
import useReducer from "react";
import Navbar from "./component/Navbar";
import Body from "./component/Body";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <>
      <div className="App">
        <CartProvider>
          <AuthProvider>
            <Navbar />

            <Body />
          </AuthProvider>
        </CartProvider>
      </div>
    </>
  );
}

export default App;
