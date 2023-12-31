import React from "react";
import "./button.styles.scss";
const Button_types_classes = {
  google: "google-sign-in",
  inverted: "inverted",
};
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${Button_types_classes[buttonType]} `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
