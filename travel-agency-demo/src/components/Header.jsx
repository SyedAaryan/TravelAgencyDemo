import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <a href="#" className="logo">Wanderlust Adventures</a>
        <ul className="nav-links">
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#" className="btn-cta">Book Now</a></li>
        </ul>
        <div className="menu-toggle">
          <i className="fas fa-bars"></i>
        </div>
      </nav>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Your Journey Begins Here</h1>
          <p>Explore breathtaking destinations and create unforgettable memories with us.</p>
        </div>
      </section>
    </header>
  );
};

export default Header;