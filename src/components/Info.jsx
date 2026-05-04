import React from 'react';
import './Info.css';

const Info = () => {
  return (
    <section className="section info-premium-section">
      <div className="info-bg-image"></div>
      <div className="info-premium-overlay"></div>
      <div className="info-premium-container">
        
        <div className="info-elegant-card location-card">
          <div className="info-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
          </div>
          <div className="info-text-content">
            <h3 className="info-title">Location</h3>
            <p className="info-highlight">Asthitva Teak Meadows</p>
            <p>Sriramanahalli, Karnataka</p>
            <p>Magadi Road, Bengaluru, 562130</p>
            <a href="#" className="direction-link-premium">Get Directions <span className="arrow">→</span></a>
          </div>
        </div>

        <div className="info-elegant-card timing-card">
          <div className="info-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div className="info-text-content">
            <h3 className="info-title">Timing and Cost</h3>
            <p className="info-highlight">Available Slots:</p>
            <div className="timing-slots">
              <div className="slot">
                <span>Day Event:</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div className="slot">
                <span>Night Event:</span>
                <span>5:00 PM - 12:00 AM</span>
              </div>
            </div>
            <p className="contact-note-premium">Please contact us for customized pricing details.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Info;
