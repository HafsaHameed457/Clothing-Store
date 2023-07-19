import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import "./cart-dropdown.styles.scss";
import { useDispatch } from "react-redux";
import Button from "../button/button";

import React from "react";

import CartItem from "../cart-item/cart-item";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCartItem } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
const CartDropDown = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItem);
  const goToCheckout = () => {
    navigate("/checkout");
    return dispatch(setIsCartOpen(false));
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckout}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropDown;
