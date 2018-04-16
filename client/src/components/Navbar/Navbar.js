import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// Navbar component
const Navbar = props => (
  <nav>
    <div className="navbar navbar-fixed-top" role="navigation">
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            {/* <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#collapse"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button> */}
            <Link id="navbar-brand" className="navbar-brand" to="/">
              HOME
            </Link>
            <Link id="navbar-brand" className="navbar-brand" to="/roster">
              ROSTER
            </Link>
            <Link id="navbar-brand" className="navbar-brand" to="/events">
              EVENTS
            </Link>
          </div>
          <div className="navbar-collapse collapse" id="collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/roster"
                  className={
                    window.location.pathname === "/roster"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Roster
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className={
                    window.location.pathname === "/events"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
