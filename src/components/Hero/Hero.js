import React from "react";
import "./Hero.css";
import heroImage from "../../assets/hero-image.png";
import asosScreenshot from "../../assets/asos-screenshot.png";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="heading">
        <h1>
          NIKE AND ADIDAS <span className="yellow">CLOTHING</span> STORE
        </h1>
      </div>
      <div className="below-hero-heading">
        <div className="asos">
          <h3>All Items from Asos. View full store below:</h3>
          <div className="screenshot">
            <img src={asosScreenshot} alt="asos screenshot" />
            <a href="https://www.asos.com" target="_blank" rel='noreferrer' className="screenshot-overlay">
              <h3>Asos.com</h3>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="nike jacket" />
        </div>
        <NavLink className="button" to="/products">
          Start Shopping!
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
