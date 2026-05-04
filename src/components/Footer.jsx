import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Asthitva</h3>
          <p>Teak Meadows @ Magadi Road</p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#venues">Venues</a></li>
            <li><a href="#amenities">Amenities</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📍 Sriramanahalli, Magadi Road, Bengaluru</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@asthitvameadows.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Asthitva Teak Meadows. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
