import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="navbar-logo">Asthitva</a>
        <ul className="nav-links">
          <li><a href="#venues">Venues</a></li>
          <li><a href="#amenities">Amenities</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact" className="nav-cta">Book Now</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
