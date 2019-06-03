import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="nav-left">
        <div className="logo">
          <i className="material-icons">account_balance</i>
          <h3>dieBörse</h3>
        </div>
        <div className="search-bar">
          <i className="material-icons">search</i>
          <input type="search" placeholder="Search" />
        </div>
      </div>
      <div className="nav-links">
        <NavLink activeClassName="active" to="/">
          <span>Home</span>
        </NavLink>
        <NavLink activeClassName="active" to="/notifications">
          <span>Notifications</span>
        </NavLink>
        <NavLink activeClassName="active" to="/account">
          <span>Account</span>
        </NavLink>
      </div>
    </nav>
  );
};
