import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container simplified-footer">
        <div className="footer-brand">
          <h3>Teak Meadows</h3>
          <p>By Asthitva @ Magadi Road, Bengaluru</p>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📍 63/1, Kachohalli Road, Opp. HP Petrol Bunk, Kempegowda Nagar, Byadarahalli, Bengaluru 560091</p>
          <div className="footer-phones">
            <p>📞 <a href="tel:+918904768299">+91 89047 68299</a></p>
            <p>📞 <a href="tel:+919513765355">+91 9513765355</a></p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Asthitva Teak Meadows. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
