import React from "react";

import { Routes, Route } from "react-router-dom";

import "./shop.styles.scss";

import { useEffect } from "react";

import { getCategoriesandCollection } from "../../utlis/firebase.utlis";

import { setCategories } from "../../store/categories/categories.action";

import CategoriesPreview from "../categories-preview/categories-preview";

import Category from "../category/category";

import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getcategories = async () => {
      const categoriesArray = await getCategoriesandCollection("categories");
      console.log(categoriesArray);
      dispatch(setCategories(categoriesArray));
    };
    getcategories();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
