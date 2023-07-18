import React from "react";
import { Routes, Route } from "react-router-dom";
import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/categories-preview";
import Category from "../category/category";
import { CategoriesProvider } from "../../contexts/categoriesContext";
const Shop = () => {
  return (
    <CategoriesProvider>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </CategoriesProvider>
  );
};

export default Shop;
