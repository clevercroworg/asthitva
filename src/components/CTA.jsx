import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section id="contact" className="section cta-premium-section">
      <div className="cta-premium-overlay"></div>
      <div className="cta-premium-container">
        <h2 className="cta-premium-title">Begin Your Journey With Us</h2>
        <p className="cta-premium-subtitle">Experience the perfect blend of nature and luxury. Schedule a personalized venue tour and let us bring your vision to life.</p>
        
        <div className="cta-premium-actions">
          <a href="tel:+919876543210" className="btn-gold-solid">
            <span className="icon">📞</span> +91 98765 43210
          </a>
          <button className="btn-gold-outline">
            Request a Custom Quote
          </button>
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
