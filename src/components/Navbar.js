import React from 'react';
import '../css/navbar.css';
import logoInverse from '../images/4080inverselogo.png';
import logoCafe from '../images/4080cafelogo.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logoInverse} alt="Cafe 4080 Logo" className="logo-default" />
        <img src={logoCafe} alt="Cafe 4080 Logo Hover" className="logo-hover" />
      </div>

      <nav>
        <ul>
          <li><a href="/" className="active">Home</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#menu">Menu</a></li>
          <li><a href="/#shop">Shop</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="nav-icons">
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
        </div>
    </div>
  );
}

export default Navbar;
