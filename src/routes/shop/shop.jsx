import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../contexts/productContext";
import ProductCard from "../../components/Product_Card/product-card";
import "./shop.styles.scss";
const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
