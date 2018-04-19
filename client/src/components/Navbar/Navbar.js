import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// Navbar component
const Navbar = props => (

        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <Link className="navbar-brand" to="#"><i className="fas fa-bicycle fa-2x"></i></Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">

            <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/Roster">Roster</Link>
            </li>

            <li className="nav-item">
            <Link class="nav-link" to="/Events">Events</Link>
            </li>

          </ul>
        </div>
    </nav>

);

export default Navbar;




