import React from 'react';
import './Header.css';

const Header = ({ title = "Asthitva Teak Meadows", bgImage }) => {
  const style = bgImage ? { backgroundImage: `url("${bgImage}")` } : {};
  
  return (
    <header className="header-title-section" style={style}>
      <div className="header-title-content animate-fade-in">
        <h1 className="header-main-title">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
