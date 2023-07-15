import React from "react";
import { createContext, useState } from "react";
import Products from "../shopdata.json";

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState(Products);
  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
