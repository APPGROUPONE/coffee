import React from 'react';
import '../css/footer.css';
import logoCafe from '../images/4080cafelogo.png';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={logoCafe} alt="Cafe 4080 Logo" className="logo" />
          <p className="tagline">Where every cup tells a story</p>
          <p>Crafting exceptional coffee experiences since 2020. Join us for artisan brews and warm conversations.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">i</a>
            <a href="#" aria-label="Twitter">t</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="#">Menu</a>
          <a href="#">About Us</a>
          <a href="#">Events</a>
          <a href="#">Catering</a>
          <a href="#">Gift Cards</a>
          <a href="#">Careers</a>
        </div>

        <div className="footer-section">
          <h3>Opening Hours</h3>
          <div className="hours-item"><span>Monday - Friday</span><span>7:00 AM - 8:00 PM</span></div>
          <div className="hours-item"><span>Saturday</span><span>8:00 AM - 9:00 PM</span></div>
          <div className="hours-item"><span>Sunday</span><span>8:00 AM - 6:00 PM</span></div>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>4080 Coffee Lane<br/>Downtown District<br/>City, State 12345</p>
          <p>Phone: (555) 408-0800</p>
          <p>Email: hello@cafe4080.com</p>
        </div>
      </div>

      <link href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap" rel="stylesheet" />
      <div className="footer-bottom">
        <p>&copy; 2025 Cafe 4080. All rights reserved. | Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
}

export default Footer;
