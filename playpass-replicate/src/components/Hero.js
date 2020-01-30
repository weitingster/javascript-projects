import React from 'react';
import heroImage from '../image/hero-splash.2598968e.jpg'

function Hero() {
    return (
      <div className="hero-section section">
        <div className="hero-image-container">
          <img src={heroImage} alt="Kids and parents" />
        </div>
        <div className="container-text">
          <h1>Discover their new favourite activity</h1>
          <p>PlayPass makes it easy to find and book kids activities from newborn to 12 years old</p>
          <button>Browse 100+ Activities</button>
        </div>
      </div>
    )
}

export default Hero
