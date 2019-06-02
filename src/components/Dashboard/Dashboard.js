import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Dashboard.scss";

class DashBoard extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="NavBar">
          <div className="nav-left">
            <i className="material-icons">account_balance</i>

            <div className="search-bar">
              <i className="material-icons">search</i>
              <input type="search" placeholder="Search" />
            </div>
          </div>
          <div className="nav-links">
            <NavLink to="">Home</NavLink>
            <NavLink to="">Notifications</NavLink>
            <NavLink to="">Account</NavLink>
          </div>
        </nav>
        <main>
          <div className="LineGraph">LineGraph</div>
        </main>
      </React.Fragment>
    );
  }
}

export default DashBoard;
