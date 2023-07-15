import React from "react";
import "./categories.styles.scss";
import { Link } from "react-router-dom";
const CategoryItem = (props) => {
  const { id, imgUrl, title } = props;
  return (
    <div className="category" key={id}>
      <div
        className="bg-img"
        alt="no img"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      />

      <div className="category_body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
