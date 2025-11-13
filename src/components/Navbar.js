import React, { useState, useEffect } from "react";

export default function Navbar({ cartCount, openCart }) {
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#2B1B15]/80 backdrop-blur-lg shadow-lg"
          : "bg-[#2B1B15]"
      }`}
    >
      {/* INCREASED NAVBAR HEIGHT HERE — py-6 */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-3xl font-extrabold text-white tracking-wide">
          Café 4080
        </h1>

        {/* NAV LINKS */}
        <div className="flex items-center gap-10 text-lg font-medium">

          {/* Reusable link class with underline animation */}
          <a
            href="/"
            className="relative text-white pb-1 
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
            after:bg-[#C29A72] after:transition-all after:duration-300
            hover:after:w-full"
          >
            Home
          </a>

          <a
            href="/menu"
            className="relative text-white pb-1 
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
            after:bg-[#C29A72] after:transition-all after:duration-300
            hover:after:w-full"
          >
            Menu
          </a>

          <a
            href="/about"
            className="relative text-white pb-1 
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
            after:bg-[#C29A72] after:transition-all after:duration-300
            hover:after:w-full"
          >
            About
          </a>

          <a
            href="/contact"
            className="relative text-white pb-1 
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
            after:bg-[#C29A72] after:transition-all after:duration-300
            hover:after:w-full"
          >
            Contact
          </a>
        </div>

        {/* CART ICON */}
        <div
          onClick={openCart}
          className="relative cursor-pointer hover:opacity-80 transition"
        >
          <span className="text-3xl text-white">🛒</span>

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 shadow">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
