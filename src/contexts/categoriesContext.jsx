import React from "react";
import { createContext, useState, useEffect } from "react";

import { getCategoriesandCollection } from "../utlis/firebase.utlis";

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  useEffect(() => {
    const getcategories = async () => {
      const categories = await getCategoriesandCollection();
      console.log(categories);
      setCategories(categories);
    };
    getcategories();
  }, []);
  const [categories, setCategories] = useState({});
  const value = { categories };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
