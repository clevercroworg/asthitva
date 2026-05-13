import React from 'react';
import './Header.css';

const Header = ({ title = "Asthitva Teak Meadows" }) => {
  return (
    <header className="header-title-section">
      <div className="header-title-content animate-fade-in">
        <h1 className="header-main-title">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
