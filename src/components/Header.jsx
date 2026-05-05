import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-title-section">
      <div className="header-title-content animate-fade-in">
        <div className="header-decorative-line"></div>
        <h1 className="header-main-title">Asthitva Teak Meadows</h1>
        <p className="header-tagline">Premium event venue at Magadi Road, Bengaluru</p>
        <div className="header-decorative-line"></div>
      </div>
    </header>
  );
};

export default Header;
