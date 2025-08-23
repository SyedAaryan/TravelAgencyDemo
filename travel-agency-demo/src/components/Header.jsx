import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onBookNowClick }) => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="logo">Wanderlust Adventures</Link>
        <ul className="nav-links">
          <li><Link to="/">Destinations</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><a href="#" className="btn-cta" onClick={onBookNowClick}>Book Now</a></li>
        </ul>
        <div className="menu-toggle">
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;