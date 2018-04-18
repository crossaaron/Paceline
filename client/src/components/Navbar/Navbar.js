import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// Navbar component
const Navbar = props => (


      <div className="navbar navbar-fixed-top ">
        <div className="container justify-content-center">
          <div className="navbar-header">

            <Link className="navbar-brand" to="/"

            // className={
            //         window.location.pathname === "/"
            //           ? "nav-link active"
            //           : "nav-link"
            //       }
            >
              Home
            </Link>
            <Link className="navbar-brand" to="/roster"

            // className={
            //         window.location.pathname === "/"
            //           ? "nav-link active"
            //           : "nav-link"
            //       }
            >
              Roster
            </Link>
            <Link className="navbar-brand" to="/events"

            // className={
            //         window.location.pathname === "/"
            //           ? "nav-link active"
            //           : "nav-link"
            //       }

                  >
              Events
            </Link>
          </div>
        </div>
      </div>


);

export default Navbar;
