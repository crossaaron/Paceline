import React from "react";
import "./Navbar.css";

// Navbar component
const Navbar = props => (
  <nav className="navbar navbar-dark">
    BUTTONS GO HERE
    <div className="navbar navbar-dark">
      <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div
          className="navbar navbar-inverse navbar-fixed-top"
          role="navigation"
        >
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
    </div>
  </nav>
);

export default Navbar;
