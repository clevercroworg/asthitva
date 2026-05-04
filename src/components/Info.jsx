import React from 'react';
import './Info.css';

const Info = ({ venueName }) => {
  return (
    <section className="section info-map-section">
      <div className="info-map-container">
        
        <div className="info-map-left">
          <div className="info-map-header">
            <span className="overline">Find Us</span>
            <h2 className="section-title info-map-title">Location</h2>
          </div>
          
          <div className="info-details-grid">
            <div className="info-detail-item">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
              </div>
              <div>
                <h4>Address</h4>
                <p>63/1, Kachohalli Main Road, Opp. HP Petrol Pump</p>
                <p>Kempegowdanagar, Byadarahalli</p>
                <p>Bengaluru, Karnataka 560091</p>
              </div>
            </div>

            <div className="info-detail-item">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h4>Event Timings</h4>
                <p>Day Event: 9:00 AM – 4:00 PM</p>
                <p>Night Event: 5:00 PM – 12:00 AM</p>
              </div>
            </div>

            <div className="info-detail-item">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              </div>
              <div>
                <h4>Contact</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
          </div>

          <a 
            href="https://maps.app.goo.gl/asthitva-teak-meadows" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-gold-solid info-directions-btn"
          >
            Get Directions <span>→</span>
          </a>
        </div>

        <div className="info-map-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.45!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzAwLjAiTiA3N8KwMjcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${venueName} Location Map`}
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Info;
