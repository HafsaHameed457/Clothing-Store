import React from "react";
import CategoryItem from "../category-item/category-item";
import "./category.scss";
const CategoryDesk = (props) => {
  const { categories } = props;
  return (
    <div className="categories">
      {categories.map((category) => (
        <CategoryItem
          id={category.id}
          imgUrl={category.imgUrl}
          title={category.title}
        />
      ))}
    </div>
  );
};

export default CategoryDesk;
