import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [{ cart, appState }, dispatch] = useReducer(cartReducer, {
    cart: [],
    appState: "success",
  });

  const value = { cart, appState, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
