import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Navbar component
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <Link className="navbar-brand" to="/">
      Home 
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            Roster
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/discover"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/discover" className="nav-link">
            Events
          </Link>
        </li>  
      </ul>
    </div>
  </nav>
);

export default Navbar;
