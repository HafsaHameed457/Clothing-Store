import { ReactComponent as Logo } from "../../007 crown.svg";
import React from "react";
import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./nav.styles.scss";

const Nav = () => {
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
          <Link className="nav-links" to="/signin">
            SignIn
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
