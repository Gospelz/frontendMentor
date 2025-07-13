import React from "react";
import { createContext, useContext } from "react";
import type { ReactNode } from "react";

interface ShopContextType {
  backendUrl: string;
}
export const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);
interface ShopContextProviderProps {
  children: ReactNode;
}
const ShopContextProvider: React.FC<ShopContextProviderProps> = (props) => {
  const backendUrl = "https://backendmentor-2.onrender.com";
  const Value: ShopContextType = {
    backendUrl,
  };

  return (
    <ShopContext.Provider value={Value}>{props.children}</ShopContext.Provider>
  );
};
export const useShopContext = () => {
  return useContext(ShopContext);
};
export default ShopContextProvider;
