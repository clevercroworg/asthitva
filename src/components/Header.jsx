import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header animate-fade-in">
      <div className="header-overlay"></div>
      <div className="header-content">
        <h1 className="header-title">
          Asthitva <span className="header-highlight">Teak Meadows</span>
        </h1>
        <p className="header-subtitle">An Elegant Space for Your Most Memorable Moments</p>
      </div>
    </header>
  );
};

export default Header;
