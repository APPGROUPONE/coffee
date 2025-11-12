import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <h1>Coffee Bliss ☕</h1>
      </div>

      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className={location.pathname === "/menu" ? "active" : ""}
            >
              Menu
            </Link>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
