import React from 'react';
import './VenueDetail.css'; // Reusing the same CSS classes for now

const VenueCTA = ({ venueName, phoneNumber1, phoneNumber2 }) => {
  return (
    <div className="venue-detail-section" style={{ paddingTop: '2rem', paddingBottom: '4rem', borderTop: 'none', background: 'transparent' }}>
      <div className="venue-detail-container">
        <div className="venue-detail-cta-box" style={{ marginTop: '0' }}>
          <div className="cta-box-content">
            <h3 className="cta-box-title">Book {venueName}</h3>
          </div>
          <div className="cta-box-actions">
            <a href={`tel:${phoneNumber1.replace(/\s+/g, '')}`} className="btn-cta-primary">
              <span className="icon">📞</span> {phoneNumber1}
            </a>
            {phoneNumber2 && (
              <a href={`tel:${phoneNumber2.replace(/\s+/g, '')}`} className="btn-cta-secondary-dark">
                <span className="icon">📞</span> {phoneNumber2}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueCTA;
