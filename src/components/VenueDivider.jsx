import React from 'react';
import './VenueDivider.css';

const VenueDivider = ({ title, id }) => {
  return (
    <div className="venue-divider" id={id}>
      <div className="venue-divider-inner">
        <span className="divider-line"></span>
        <h2 className="divider-title">{title}</h2>
        <span className="divider-line"></span>
      </div>
    </div>
  );
};

export default VenueDivider;
