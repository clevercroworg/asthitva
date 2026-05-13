import React from 'react';
import './CTA.css';

const CTA = ({ page = 'teakmeadows' }) => {
  const isMuddainapalya = page === 'muddainapalya';
  const isUllal = page === 'ullal';
  const isRRNagar = page === 'rrnagar';

  return (
    <section id="contact" className="cta-premium-section">
      <div className="cta-premium-overlay"></div>
      <div className="cta-premium-container">
        <h2 className="cta-premium-title">
          {isMuddainapalya || isUllal || isRRNagar ? "Plan Your Event With Us" : "Plan Your Event at Asthitva Teak Meadows"}
        </h2>
        <p className="cta-premium-subtitle">
          {isMuddainapalya || isUllal || isRRNagar ? "Reach out to check availability, schedule a venue visit, or get a personalized quote." : "Call now to check availability and pricing."}
        </p>
        
        <div className="cta-premium-actions">
          {isUllal || isRRNagar ? (
            <a href="tel:+919535415379" className="btn-cta-primary">
              <span className="icon">📞</span> +91 9535415379
            </a>
          ) : (
            <>
              <a href="tel:+918904768299" className="btn-cta-primary">
                <span className="icon">📞</span> +91 89047 68299
              </a>
              {isMuddainapalya && (
                <a href="tel:+919535415379" className="btn-cta-primary" style={{ marginLeft: '1rem' }}>
                  <span className="icon">📞</span> +91 9535415379
                </a>
              )}
            </>
          )}
        </div>
        
        <div className="cta-premium-footer">
          <span className="decorative-line"></span>
          <p>{isUllal || isRRNagar ? "Better yet, see us in person!" : "We look forward to hosting your most memorable moments."}</p>
          <span className="decorative-line"></span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
