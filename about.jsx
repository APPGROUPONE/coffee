// src/pages/About.jsx
import React, { useEffect } from "react";
import "./About.css";
import pour1 from "../assets/videos/pour1.mp4";
import pour2 from "../assets/videos/pour2.mp4";
import pour3 from "../assets/videos/pour3.mp4";
import pour4 from "../assets/videos/pour4.mp4";

const About = () => {
  useEffect(() => {
    const scenes = document.querySelectorAll(".scroll-scene");

    const activateScene = () => {
      const triggerPoint = window.innerHeight * 0.6;
      scenes.forEach((scene) => {
        const rect = scene.getBoundingClientRect();
        const inView = rect.top < triggerPoint && rect.bottom > triggerPoint;
        scene.classList.toggle("active", inView);
      });
    };

    window.addEventListener("scroll", activateScene);
    window.addEventListener("load", activateScene);

    return () => {
      window.removeEventListener("scroll", activateScene);
      window.removeEventListener("load", activateScene);
    };
  }, []);

  return (
    <main className="about-page">
      {/* === Scene 1 === */}
      <section className="scroll-scene">
        <video src={pour1} autoPlay muted loop playsInline />
        <div className="overlay">
          <h2>It all starts with a single pour...</h2>
        </div>
      </section>

      <div className="divider"></div>

      {/* === Scene 2 === */}
      <section className="scroll-scene">
        <video src={pour2} autoPlay muted loop playsInline />
        <div className="overlay">
          <h2>Crafted by hand, perfected with passion.</h2>
        </div>
      </section>

      <div className="divider"></div>

      {/* === Scene 3 === */}
      <section className="scroll-scene">
        <video src={pour3} autoPlay muted loop playsInline />
        <div className="overlay">
          <h2>Every cup tells our story.</h2>
        </div>
      </section>

      <div className="divider"></div>

      {/* === Scene 4 === */}
      <section className="scroll-scene">
        <video src={pour4} autoPlay muted loop playsInline />
        <div className="overlay">
          <h2>Welcome to Café 4080.</h2>
        </div>
      </section>
    </main>
  );
};

export default About;
