import { createContext, useState } from "react";

export const CartItemContext = createContext({
  item: [],
  setItem: () => {},
});

export const CartItemProvider = ({ children }) => {
  const [item, setItem] = useState([]);
  const value = { item, setItem };
  return (
    <CartItemContext.Provider value={value}>
      {children}
    </CartItemContext.Provider>
  );
};
