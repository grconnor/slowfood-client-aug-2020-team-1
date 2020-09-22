import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav id="navbar" className="ui fixed inverted menu">
      <div className="ui container">
        <Link id="header" className="header item" to="/">
          Slowfood pizzeria
        </Link>
        <div className="right menu">
          <NavLink
            id="menu-tab"
            className="ui item"
            activateStyle={{ frontWeight: "bold" }}
            to="/products"
          >
            Menu
          </NavLink>
          <NavLink
            id="contact-tab"
            className="ui item"
            activateStyle={{ frontWeight: "bold" }}
            to="/Contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
