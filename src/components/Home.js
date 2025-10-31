import React from 'react';
import '../css/base.css';
import '../css/hero.css';
import '../css/drinks.css';
import coffee1 from '../images/coffee-1630935.jpg';
import iced from '../images/iced-coffee-social.jpg';
import latte from '../images/latte.jpg';
import heroVideo from '../videos/Coffee_pouring_video.mp4';

function Home() {
  return (
    <>
      <section className="hero">
        <video autoPlay muted loop playsInline id="heroVideo">
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-content">
          <h1 id="greeting">The Art of a Perfect Pour</h1>
          <p>Savor every note, every aroma — your moment of calm begins here at Café 4080.</p>
          <a href="#menu" className="btn">Explore Our Menu</a>
        </div>
      </section>

      <section className="featured-drinks">
        <h2>Our Featured Drinks</h2>
        <p className="intro-text">
          From smooth classics to bold brews, discover Café 4080’s signature drinks — each cup crafted to perfection and designed to make every sip unforgettable.
        </p>

        <div className="drinks-container">
          <div className="drink">
            <img src={coffee1} alt="Classic Latte" />
            <div className="drink-info">
              <h3>Classic Latte</h3>
              <p>
                Simple, elegant, and endlessly comforting. Our Classic Latte combines rich espresso with steamed milk and a silky microfoam top.
                Every sip offers a smooth balance of bold and mellow — a timeless favorite that never goes out of style.
              </p>
              <p className="ingredients"><em>Ingredients:</em> espresso, steamed milk, microfoam.</p>
              <button className="order-btn">Order Now</button>
            </div>
          </div>

          <div className="drink">
            <img src={iced} alt="Vietnamese Iced Latte" />
            <div className="drink-info">
              <h3>Vietnamese Iced Latte</h3>
              <p>
                Sweetened with authentic condensed milk and poured over ice, our Vietnamese Iced Latte is a refreshing twist on tradition.
                It’s creamy, bold, and lightly caramelized — the perfect pick-me-up for warm days or afternoon energy boosts.
              </p>
              <p className="ingredients"><em>Ingredients:</em> espresso, sweetened condensed milk, ice.</p>
              <button className="order-btn">Order Now</button>
            </div>
          </div>

          <div className="drink">
            <img src={latte} alt="Classic Cappuccino" />
            <div className="drink-info">
              <h3>Classic Cappuccino</h3>
              <p>
                Bold espresso, velvety steamed milk, and a cloud of frothy foam come together for our Classic Cappuccino.
                Lightly dusted with cocoa powder, it’s rich and airy in perfect harmony — an artful pour that celebrates coffee’s purest form.
              </p>
              <p className="ingredients"><em>Ingredients:</em> espresso, steamed milk, foam, cocoa dust.</p>
              <button className="order-btn">Order Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
