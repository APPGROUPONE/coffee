import React, { useState } from "react";
import "../css/base.css";
import "../css/drinks.css";

// 🔽 Import all local images (all lowercase filenames)
import espressoImg from "../images/espresso.jpg";
import cappuccinoImg from "../images/cappuccino.jpg";
import latteImg from "../images/latte.jpg";
import macchiatoImg from "../images/macchiato.jpg";
import mochaImg from "../images/mocha.jpg";

import icedAmericanoImg from "../images/icedamericano.jpg";
import coldBrewImg from "../images/coldbrew.jpg";
import icedLatteImg from "../images/icedlatte.jpg";
import caramelIcedCoffeeImg from "../images/caramelicedcoffee.jpg";
import frappuccinoImg from "../images/frappuccino.jpg";

import greenTeaImg from "../images/greentea.jpg";
import masalaChaiImg from "../images/masalachai.jpg";
import lemonGingerTeaImg from "../images/lemongingertea.jpg";
import icedHibiscusTeaImg from "../images/icedhibiscustea.jpg";
import mintTeaImg from "../images/minttea.jpg";

import croissantImg from "../images/croissant.jpg";
import blueberryMuffinImg from "../images/blueberrymuffin.jpg";
import chickenSandwichImg from "../images/chickensandwich.jpg";
import veggieWrapImg from "../images/veggiewrap.jpg";
import cookiesImg from "../images/cookies.jpg";

function Menu() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const menuSections = [
    {
      title: "Hot Coffees",
      items: [
        { name: "Espresso", description: "Rich, intense shot of pure coffee.", price: "KSh 200", img: espressoImg },
        { name: "Cappuccino", description: "Espresso with steamed milk and thick foam.", price: "KSh 300", img: cappuccinoImg },
        { name: "Café Latte", description: "Smooth espresso blended with steamed milk.", price: "KSh 320", img: latteImg },
        { name: "Macchiato", description: "Espresso topped with a small dollop of milk foam.", price: "KSh 280", img: macchiatoImg },
        { name: "Mocha", description: "Espresso, chocolate, and steamed milk with whipped cream.", price: "KSh 350", img: mochaImg },
      ],
    },
    {
      title: "Iced & Cold Coffees",
      items: [
        { name: "Iced Americano", description: "Espresso mixed with cold water and ice.", price: "KSh 250", img: icedAmericanoImg },
        { name: "Cold Brew", description: "Slow-steeped coffee for a naturally sweet flavor.", price: "KSh 320", img: coldBrewImg },
        { name: "Iced Latte", description: "Cold espresso with chilled milk and ice cubes.", price: "KSh 300", img: icedLatteImg },
        { name: "Caramel Iced Coffee", description: "Sweet caramel syrup with cold espresso and milk.", price: "KSh 340", img: caramelIcedCoffeeImg },
        { name: "Frappuccino", description: "Blended coffee ice drink topped with whipped cream.", price: "KSh 400", img: frappuccinoImg },
      ],
    },
    {
      title: "Teas & Infusions",
      items: [
        { name: "Green Tea", description: "Lightly brewed, antioxidant-rich, calming.", price: "KSh 200", img: greenTeaImg },
        { name: "Masala Chai", description: "Spiced Kenyan black tea with milk and herbs.", price: "KSh 250", img: masalaChaiImg },
        { name: "Lemon Ginger Tea", description: "Refreshing and soothing herbal tea.", price: "KSh 220", img: lemonGingerTeaImg },
        { name: "Iced Hibiscus Tea", description: "Tart, floral, and served cold.", price: "KSh 260", img: icedHibiscusTeaImg },
        { name: "Mint Tea", description: "Hot infusion of mint leaves and honey.", price: "KSh 240", img: mintTeaImg },
      ],
    },
    {
      title: "Finger Foods",
      items: [
        { name: "Croissant", description: "Flaky buttery French pastry.", price: "KSh 200", img: croissantImg },
        { name: "Blueberry Muffin", description: "Soft muffin packed with fresh blueberries.", price: "KSh 250", img: blueberryMuffinImg },
        { name: "Chicken Sandwich", description: "Grilled chicken with lettuce and mayo.", price: "KSh 450", img: chickenSandwichImg },
        { name: "Veggie Wrap", description: "Fresh vegetables in a soft tortilla wrap.", price: "KSh 400", img: veggieWrapImg },
        { name: "Cookies (2 pcs)", description: "Soft baked chocolate chip cookies.", price: "KSh 180", img: cookiesImg },
      ],
    },
  ];

  return (
    <section className="menu-section">
      <div className="menu-container">
        {menuSections.map((section, index) => (
          <div key={index} className="menu-category">
            <h3>{section.title}</h3>
            <div className="menu-items">
              {section.items.map((item, i) => (
                <div className="menu-item" key={i}>
                  <img src={item.img} alt={item.name} className="menu-img" />
                  <div className="menu-item-details">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <div className="menu-bottom">
                      <span className="price">{item.price}</span>
                      <button
                        className="order-btn"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Cart Sidebar */}
      <div className="cart-sidebar">
        <h4>Your Order</h4>
        {cart.length === 0 ? (
          <p>No items yet.</p>
        ) : (
          <ul>
            {cart.map((item, i) => (
              <li key={i}>
                {item.name} <span>{item.price}</span>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <p className="total">
            Total:{" "}
            <strong>
              KSh{" "}
              {cart
                .reduce(
                  (sum, item) => sum + parseInt(item.price.replace("KSh ", "")),
                  0
                )
                .toLocaleString()}
            </strong>
          </p>
        )}
      </div>
    </section>
  );
}

export default Menu;
