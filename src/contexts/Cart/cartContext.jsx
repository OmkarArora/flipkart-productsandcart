import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [{ cart, savedForLater, appState }, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      savedForLater: [],
      appState: "success",
    }
  );

  const value = { cart, savedForLater, appState, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
