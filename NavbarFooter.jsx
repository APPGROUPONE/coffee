import React from 'react';
import { Link } from 'react-router-dom';

// Navbar Component
export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="images/4080inverselogo.png" alt="Cafe 4080 Logo" className="logo-default" />
        <img src="images/4080cafelogo.png" alt="Cafe 4080 Logo Hover" className="logo-hover" />
      </div>

      <nav>
        <ul>
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="nav-icons">
        <div className="icon profile-icon">
          <img src="images/profile_icon_light.png" className="light" alt="Profile" />
          <img src="images/profile_icon_brown.png" className="brown" alt="Profile Hover" />
        </div>

        <div className="icon cart-icon">
          <img src="images/shopping_bag_icon_light.png" className="light" alt="Cart" />
          <img src="images/shopping_bag_icon_brown.png" className="brown" alt="Cart Hover" />
        </div>
      </div>
    </header>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-section">
          <img src="images/4080cafelogo.png" alt="Cafe 4080 Logo" className="logo" />
          <p className="tagline">Where every cup tells a story</p>
          <p>Crafting exceptional coffee experiences since 2020. Join us for artisan brews and warm conversations.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">i</a>
            <a href="#" aria-label="Twitter">t</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="#">Menu</a>
          <a href="#">About Us</a>
          <a href="#">Events</a>
          <a href="#">Catering</a>
          <a href="#">Gift Cards</a>
          <a href="#">Careers</a>
        </div>

        {/* Opening Hours */}
        <div className="footer-section">
          <h3>Opening Hours</h3>
          <div className="hours-item">
            <span>Monday - Friday</span>
            <span>7:00 AM - 8:00 PM</span>
          </div>
          <div className="hours-item">
            <span>Saturday</span>
            <span>8:00 AM - 9:00 PM</span>
          </div>
          <div className="hours-item">
            <span>Sunday</span>
            <span>8:00 AM - 6:00 PM</span>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>4080 Coffee Lane<br />Downtown <br />Nairobi, 00100</p>
          <p>Phone: +254 12345678</p>
          <p>Email: hello@cafe4080.ke</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Cafe 4080. All rights reserved. | Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};
