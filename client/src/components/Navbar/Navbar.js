import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// Navbar component
const Navbar = props => (
  <nav className="navbar navbar-dark">
    <div className="navbar navbar-dark">
      <div className="navbar navbar-fixed-top" role="navigation">
        <div className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link id="navbar-brand" className="navbar-brand" to="/">
                Paceline Team Manager
              </Link>
            </div >
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
                </li>
                <li>
                  <Link to="" className={window.location.pathname === "/roster" ? "nav-link active" : "nav-link"}>Roster</Link>
                </li>
                <li>
                  <Link to="" className={window.location.pathname === "/events" ? "nav-link active" : "nav-link"}>Events</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

);

export default Navbar;
