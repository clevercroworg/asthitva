import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Teak Meadows</h3>
          <p>By Asthitva @ Magadi Road, Bengaluru</p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#venues">Venues</a></li>
            <li><a href="#venue1-detail">Venue 1</a></li>
            <li><a href="#venue2-detail">Venue 2</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Book Now</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📍 63/1, Kachohalli Road, Opp. HP Petrol Bunk, Kempegowda Nagar, Byadarahalli, Bengaluru 560091</p>
          <p>📞 <a href="tel:+918904768299">+91 89047 68299</a></p>
          <p>📞 <a href="tel:+919513765355">+91 9513765355</a></p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Asthitva Teak Meadows. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
