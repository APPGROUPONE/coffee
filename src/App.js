import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MenuPage from "./pages/MenuPage";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

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
    </Router>
  );
}

export default App;
