import "./category.styles.scss";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { useSelector } from "react-redux";
import ProductCard from "../../components/Product_Card/product-card";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  const { category } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
