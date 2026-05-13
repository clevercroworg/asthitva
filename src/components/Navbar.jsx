import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ logoText = "Teak Meadows", topBarText = "Premium event venue at Magadi Road" }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`top-bar ${scrolled ? 'hidden' : ''}`}>
        <span>{topBarText}</span>
      </div>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">{logoText}</Link>
        
        {/* Desktop nav links */}
        <ul className="nav-links">
          <li><Link to="/muddainapalya">Muddainapalya</Link></li>
          <li><Link to="/ullal">Ullal</Link></li>
          <li><Link to="/rrnagar">RR Nagar</Link></li>
          <li><Link to="/magadi-road">Magadi Road</Link></li>
          <li><a href="tel:+918904768299" className="nav-cta">📞 89047 68299</a></li>
        </ul>

        {/* Mobile phone button */}
        <a href="tel:+918904768299" className="mobile-phone-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          +91 89047 68299
        </a>
      </div>
      </nav>
    </>
  );
};

export default Navbar;
