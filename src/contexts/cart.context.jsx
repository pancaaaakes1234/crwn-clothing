import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOPen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOPen] = useState(false);
  const value = { isCartOpen, setIsCartOPen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
