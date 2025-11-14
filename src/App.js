import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MenuPage from "./pages/MenuPage";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
const [showButton, setShowButton] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowButton(window.scrollY > 300);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <Router>
      <Navbar
        cartCount={cart.length}
        openCart={() => setCartOpen(true)}
      />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/menu"
          element={
            <MenuPage
              cart={cart}
              setCart={setCart}
              cartOpen={cartOpen}
              setCartOpen={setCartOpen}
            />
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {showButton && (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-6 right-6 bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-full shadow-xl text-lg transition-all duration-300 z-50"
  >
    ↑
  </button>
)}
    </Router>
  );
}

export default App;
