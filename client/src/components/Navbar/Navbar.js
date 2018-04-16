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
<<<<<<< HEAD
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a id="navbar-brand" className="navbar-brand" href="/">
                APP NAME HERE
              </a>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className="active">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/roster">Roster</a>
                </li>
                <li>
                  <a href="">Schedule</a>
                </li>
                <li>
                  <a href="">Stats</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
=======
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
>>>>>>> master
    </div>
  </nav>
);

export default Navbar;
