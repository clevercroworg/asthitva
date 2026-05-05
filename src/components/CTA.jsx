import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section id="contact" className="section cta-premium-section">
      <div className="cta-premium-overlay"></div>
      <div className="cta-premium-container">
        <h2 className="cta-premium-title">Plan Your Event at Asthitva Teak Meadows</h2>
        <p className="cta-premium-subtitle">Call now to check availability and pricing.</p>
        
        <div className="cta-premium-actions">
          <a href="tel:+918904768299" className="btn-cta-primary">
            <span className="icon">📞</span> +91 89047 68299
          </a>
          <a href="tel:+919513765355" className="btn-cta-secondary">
            <span className="icon">📞</span> +91 9513765355
          </a>
        </div>
        
        <div className="cta-premium-footer">
          <span className="decorative-line"></span>
          <p>We look forward to hosting your most memorable moments.</p>
          <span className="decorative-line"></span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
