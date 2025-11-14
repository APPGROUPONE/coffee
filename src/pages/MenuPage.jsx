import React, { useState } from "react";
/* ----------------------------
   IMPORT IMAGES (based on your folder)
   ---------------------------- */
import cappuccinoImg from "../images/cappuccino.jpg";
import cafelatteImg from "../images/cafelatte.jpg";
import macchiatoImg from "../images/macchiato.jpg";
import espressoImg from "../images/espresso.jpg";
import latteImg from "../images/latte.jpg";
import mochaImg from "../images/mocha.jpg";
import coldbrewImg from "../images/coldbrew.jpg";          
import icedAmericanoImg from "../images/icedamericano.jpg";
import frappuccinoImg from "../images/frappuccino.jpg";
import caramelIcedImg from "../images/caramelicedcoffee.jpg";

import greenteaImg from "../images/greentea.jpg";
import mintteaImg from "../images/minttea.jpg";
import masalaChaiImg from "../images/masalachai.jpg";
import icedHibiscusImg from "../images/icedhibiscustea.jpg";
import lemonGingerImg from "../images/lemongingertea.jpg";

import cookiesImg from "../images/cookies.jpg";
import croissantImg from "../images/croissant.jpg";
import blueberryMuffinImg from "../images/blueberrymuffin.jpg";

import chickenSandwichImg from "../images/chickensandwich.jpg";
import veggieWrapImg from "../images/veggiewrap.jpg";

/* ----------------------------
   MENU DATA (with categories)
   ---------------------------- */
const menuItems = [
  // Coffee
  { id: "c1", name: "Cappuccino", price: 350, category: "Coffee", image: cappuccinoImg },
  { id: "c2", name: "Cafe Latte", price: 380, category: "Coffee", image: cafelatteImg },
  { id: "c3", name: "Macchiato", price: 360, category: "Coffee", image: macchiatoImg },
  { id: "c4", name: "Espresso", price: 300, category: "Coffee", image: espressoImg },
  { id: "c5", name: "Latte", price: 380, category: "Coffee", image: latteImg },
  { id: "c6", name: "Mocha", price: 420, category: "Coffee", image: mochaImg },

  // Iced Coffee
  { id: "i1", name: "Iced Americano", price: 320, category: "Iced Coffee", image: icedAmericanoImg },
  { id: "i2", name: "Frappuccino", price: 450, category: "Iced Coffee", image: frappuccinoImg },
  { id: "i3", name: "Cold Brew", price: 390, category: "Iced Coffee", image: coldbrewImg },
  { id: "i4", name: "Caramel Iced Coffee", price: 420, category: "Iced Coffee", image: caramelIcedImg },

  // Tea
  { id: "t1", name: "Green Tea", price: 250, category: "Tea", image: greenteaImg },
  { id: "t2", name: "Mint Tea", price: 260, category: "Tea", image: mintteaImg },
  { id: "t3", name: "Masala Chai", price: 280, category: "Tea", image: masalaChaiImg },
  { id: "t4", name: "Iced Hibiscus Tea", price: 300, category: "Tea", image: icedHibiscusImg },
  { id: "t5", name: "Lemon Ginger Tea", price: 270, category: "Tea", image: lemonGingerImg },

  // Pastries
  { id: "p1", name: "Cookies", price: 150, category: "Pastries", image: cookiesImg },
  { id: "p2", name: "Croissant", price: 200, category: "Pastries", image: croissantImg },
  { id: "p3", name: "Blueberry Muffin", price: 180, category: "Pastries", image: blueberryMuffinImg },

  // Food
  { id: "f1", name: "Chicken Sandwich", price: 520, category: "Food", image: chickenSandwichImg },
  { id: "f2", name: "Veggie Wrap", price: 480, category: "Food", image: veggieWrapImg },
];

/* ----------------------------
   CATEGORY TABS
   ---------------------------- */
const categories = ["All", "Coffee", "Iced Coffee", "Tea", "Pastries", "Food"];

/* ----------------------------
   MAIN COMPONENT
   ---------------------------- */
export default function MenuPage({ cart, setCart, cartOpen, setCartOpen }) {
 const [selected, setSelected] = useState(null);
  const [active, setActive] = useState("All");
// ADD TO CART FUNCTION
const addToCart = (item) => {
  setSelected(null); // CLOSE THE MODAL
  setCartOpen(true); // open cart when adding item

  setCart((prev) => {
    const existing = prev.find((p) => p.id === item.id);
    if (existing) {
      return prev.map((p) =>
        p.id === item.id ? { ...p, qty: p.qty + 1 } : p
      );
    } else {
      return [...prev, { ...item, qty: 1 }];
    }
  });
};
  const filtered =
    active === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === active);

  return (
    <div className="fade-page pt-28 px-6 p-6 max-w-7xl mx-auto mt-24 bg-gradient-to-b from-orange-50 to-white min-h-screen pb-20">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold mb-6 text-center">Our Menu</h1>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 justify-center mb-8 bg-white/70 backdrop-blur-sm p-4 rounded-2xl shadow">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full font-medium transition ${active === cat
                ? "bg-orange-500 text-white shadow-lg"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {filtered.map((item, index) => (
          <article
            key={item.id}
            onClick={() => setSelected(item)}
            style={{ animationDelay: `${index * 0.15}s` }}
            className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 animate-fadeSlideUp"
          >
            {/* Image */}
            <div className="relative w-full h-44 bg-gray-100 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover" />

              {/* PRICE BADGE */}
              <span className="absolute top-2 right-2 bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                Ksh {item.price}
              </span>
            </div>

            {/* Information */}
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1">{item.name}</h2>

              <div className="flex gap-3 mt-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(item);
                  } }
                  className="flex-1 bg-orange-600 text-white py-2 rounded-xl font-medium hover:bg-orange-700 transition-all"
                >
                  Add
                </button>
                <button className="w-10 h-10 rounded-xl border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition">
                  ♥
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      {/* ITEM DETAILS MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeSlideUp"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full mx-4 animate-fadeSlideUp"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            {/* Image */}
            <img
              src={selected.image}
              alt={selected.name}
              className="w-full h-60 object-cover rounded-xl mb-4" />

            {/* Title */}
            <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>

            {/* Price */}
            <p className="text-orange-600 font-bold text-xl mb-3">
              Ksh {selected.price}
            </p>

            {/* Description */}
            <p className="text-gray-600 mb-6">
              A delicious {selected.name.toLowerCase()} made with quality ingredients
              and crafted to perfection. Enjoy it hot, iced, or however you prefer.
            </p>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(selected)}
              className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
      {/* CART SIDEBAR */}
      {cartOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          onClick={() => setCartOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl p-5 overflow-y-auto animate-fadeSlideUp z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

            {/* Cart Items */}
            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between mb-4 border-b pb-3"
                >
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      Ksh {item.price} × {item.qty}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCart((prev) => prev
                        .map((p) => p.id === item.id
                          ? { ...p, qty: p.qty - 1 }
                          : p
                        )
                        .filter((p) => p.qty > 0)
                      )}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>

                    <button
                      onClick={() => setCart((prev) => prev.map((p) => p.id === item.id ? { ...p, qty: p.qty + 1 } : p
                      )
                      )}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}

            {/* TOTAL */}
            {cart.length > 0 && (
              <div className="mt-6 border-t pt-4">
                <h3 className="text-xl font-bold">
                  Total:{" "}
                  Ksh{" "}
                  {cart.reduce((sum, item) => sum + item.price * item.qty, 0)}
                </h3>

                <button
                  className="w-full bg-orange-600 text-white py-3 rounded-xl mt-4 hover:bg-orange-700 transition"
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
