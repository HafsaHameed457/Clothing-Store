import { ReactComponent as Logo } from "../../assets/crown.svg";
import React from "react";
import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import "./nav.styles.scss";

import { signOutAuth } from "../../utlis/firebase.utlis";

import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.select";
const Nav = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-links" to="/shop">
            Shop
          </Link>
          {console.log(currentUser)}
          {currentUser ? (
            <span className="nav-links" onClick={signOutAuth}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-links" to="/auth">
              SignIn
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
