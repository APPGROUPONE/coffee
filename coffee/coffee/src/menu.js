import React from 'react';
import './menu.css'; // this links your CSS file

function Menu() {
  return (
    <div>
      <header>
        <h1><i className="fas fa-coffee"></i> Brew Haven Coffee Shop</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div className="menu-container">
        <div className="menu-header">
          <h1>Our Delicious Menu</h1>
          <p>Indulge in our handcrafted coffees and tasty bites. Freshly brewed with passion!</p>
        </div>

        {/* Coffee Category */}
        <div className="category">
          <h2><i className="fas fa-mug-hot"></i> Coffee</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <img src="images/espresso.jpg" alt="Espresso" />
              <h3>Espresso</h3>
              <p>A bold, concentrated shot of coffee, perfect for a quick energy boost.</p>
              <p className="price">$3.50</p>
              <button className="add-to-cart-btn"><i className="fas fa-cart-plus"></i> Add to Cart</button>
            </div>

            <div className="menu-item">
              <img src="images/latte.jpg" alt="latte" />
              <h3>Latte</h3>
              <p>Smooth espresso blended with steamed milk and a touch of foam.</p>
              <p className="price">$4.75</p>
              <button className="add-to-cart-btn"><i className="fas fa-cart-plus"></i> Add to Cart</button>
            </div>

            <div className="menu-item">
              <img src="images/cappuccino.jpg" alt="Cappuccino" />
              <h3>Cappuccino</h3>
              <p>Espresso topped with equal parts steamed milk and frothy foam.</p>
              <p className="price">$4.50</p>
              <button className="add-to-cart-btn"><i className="fas fa-cart-plus"></i> Add to Cart</button>
            </div>

            <div className="menu-item">
              <img src="images/mocha.jpg" alt="Mocha" />
              <h3>Mocha</h3>
              <p>Rich espresso mixed with chocolate syrup and topped with whipped cream.</p>
              <p className="price">$5.00</p>
              <button className="add-to-cart-btn"><i className="fas fa-cart-plus"></i> Add to Cart</button>
            </div>
          </div>
        </div>

        {/* Food Category */}
        <div className="category">
          <h2><i className="fas fa-utensils"></i> Food</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <img src="images/croissant.jpg" alt="Croissant" />
              <h3>Croissant</h3>
              <p>Buttery, flaky pastry that's perfect alongside your coffee.</p>
              <p className="price">$2.50</p>
              <button className="add-to-cart-btn"><i className="fas fa-cart-plus"></i> Add to Cart</button>
            </div>

            <div className="menu-item">
              <img src="images/muffin.jpg" alt="Blueberry Muffin" />
              <h3>Blueberry Muffin</h3>
              <p>Soft and moist muffin bursting with fresh blueberries.</p>
              <p className="price">$3.00</p>
              <button className="add-to-cart-btn"><i className="fas fa-cart-plus"></i> Add to Cart</button>
            </div>

            <div className="menu-item">
              <img src="images/sandwich.jpg" alt="Chicken Sandwich" />
              <h3>Chicken Sandwich</h3>
              <p>Grilled chicken with veggies on toasted bread—satisfying and delicious.</p>
              <p className="price">$7.50</p>
              <button className="add-to-cart-btn"><i className="fas fa-cart-plus"></i> Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>&copy; 2025 Brew Haven Coffee Shop. All rights reserved.</p>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#">Contact Us</a>
      </footer>
    </div>
  );
}

export default Menu;
