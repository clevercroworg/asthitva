import React, { useState } from 'react';
import './VenueDetail.css';

const VenueDetail = ({ venueId, venueName, venueData }) => {
  const [activeTab, setActiveTab] = useState('inclusions');

  const defaultData = {
    venue1: {
      inclusions: [
        { name: 'Climate Control', desc: 'AC & Non-AC spaces tailored to your comfort.' },
        { name: 'Ambient Lighting', desc: 'Custom general and decorative lighting setup.' },
        { name: '100% Power Backup', desc: 'Uninterrupted celebrations guaranteed.' },
        { name: 'Ample Parking', desc: 'Spacious and secure parking for all guests.' },
        { name: 'Stage & Sound System', desc: 'Professional audio-visual setup included.' },
        { name: 'Bridal Room', desc: 'Private, well-furnished bridal preparation room.' },
      ],
      capacity: {
        venue: 'Up to 800 guests',
        carpet: '11,500 sq ft carpet area',
        dining: 'Up to 200 Sqft dining area',
        diningSeating: 'Separate dining section with 130 seating at once',
      },
      timing: {
        day: { label: 'Day Event', time: '9:00 AM – 4:00 PM' },
        night: { label: 'Night Event', time: '5:00 PM – 12:00 AM' },
      },
      schedule: [
        { item: 'Day Event Package', note: 'Contact for pricing' },
        { item: 'Night Event Package', note: 'Contact for pricing' },
        { item: 'Full Day Package', note: 'Contact for pricing' },
        { item: 'Decoration (Optional)', note: 'As per requirement' },
        { item: 'Catering (Optional)', note: 'In-house & external options' },
      ],
      gallery: [
        { src: '/images/IMG20251212184424.jpg' },
        { src: '/images/IMG20251212184445.jpg' },
        { src: '/images/IMG20251212184459.jpg' },
      ],
      driveLink: 'https://photos.app.goo.gl/1A7UFvi9FdaLYPLr5',
    },
    venue2: {
      inclusions: [
        { name: 'Roof Coverage', desc: 'Covered roof with open sides for natural ventilation.' },
        { name: 'Moon Lighting', desc: 'Beautiful ambient moon lights for evening events.' },
        { name: '100% Power Backup', desc: 'Uninterrupted celebrations guaranteed.' },
        { name: 'Ample Parking', desc: 'Spacious and secure parking for all guests.' },
        { name: 'Sound System', desc: 'Professional audio setup included.' },
        { name: 'Bridal Room', desc: 'Private preparation room available.' },
      ],
      capacity: {
        venue: 'Up to 500 guests',
        carpet: 'Elegant space with roof and open sides',
        dining: 'Up to 120 Sqft dining area',
        diningSeating: 'Dining for up to 60 guests, expandable',
      },
      timing: {
        day: { label: 'Day Event', time: '9:00 AM – 4:00 PM' },
        night: { label: 'Night Event', time: '5:00 PM – 12:00 AM' },
      },
      schedule: [
        { item: 'Day Event Package', note: 'Contact for pricing' },
        { item: 'Night Event Package', note: 'Contact for pricing' },
        { item: 'Full Day Package', note: 'Contact for pricing' },
        { item: 'Decoration (Optional)', note: 'As per requirement' },
        { item: 'Catering (Optional)', note: 'In-house & external options' },
      ],
      gallery: [
        { src: '/images/IMG20251212184510.jpg' },
        { src: '/images/IMG20251212184523.jpg' },
        { src: '/images/IMG20251212184540.jpg' },
      ],
      driveLink: 'https://photos.app.goo.gl/1A7UFvi9FdaLYPLr5',
    },
  };

  const data = venueData || defaultData[venueId] || defaultData.venue1;

  const tabs = [
    { id: 'inclusions', label: 'Inclusions' },
    { id: 'capacity', label: 'Capacity & Dining' },
    { id: 'timing', label: 'Timing' },
    { id: 'schedule', label: 'Schedule & Cost' },
    { id: 'gallery', label: 'Gallery' },
  ];

  return (
    <section id={`${venueId}-detail`} className="venue-detail-section">
      <div className="venue-detail-container">
        <div className="venue-detail-header">
          <span className="overline">Explore</span>
          <h2 className="section-title venue-detail-title">{venueName} — Details</h2>
        </div>

        <div className="venue-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`venue-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="venue-tab-content">
          {/* Inclusions Tab */}
          {activeTab === 'inclusions' && (
            <div className="tab-panel animate-fade-in">
              <div className="inclusions-grid">
                {data.inclusions.map((item, idx) => (
                  <div key={idx} className="inclusion-card">
                    <div className="inclusion-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Capacity & Dining Tab */}
          {activeTab === 'capacity' && (
            <div className="tab-panel animate-fade-in">
              <div className="capacity-grid">
                <div className="capacity-card highlight">
                  <div className="capacity-number">{data.capacity.venue}</div>
                  <p>Venue Capacity</p>
                </div>
                <div className="capacity-card">
                  <div className="capacity-number">{data.capacity.dining}</div>
                  <p>Dining Area</p>
                </div>
                <div className="capacity-card">
                  <div className="capacity-detail">{data.capacity.carpet}</div>
                  <p>Space Details</p>
                </div>
                <div className="capacity-card">
                  <div className="capacity-detail">{data.capacity.diningSeating}</div>
                  <p>Dining Seating</p>
                </div>
              </div>
            </div>
          )}

          {/* Timing Tab */}
          {activeTab === 'timing' && (
            <div className="tab-panel animate-fade-in">
              <div className="timing-grid">
                <div className="timing-card">
                  <div className="timing-icon">🌅</div>
                  <h4>{data.timing.day.label}</h4>
                  <p className="timing-value">{data.timing.day.time}</p>
                </div>
                <div className="timing-card">
                  <div className="timing-icon">🌙</div>
                  <h4>{data.timing.night.label}</h4>
                  <p className="timing-value">{data.timing.night.time}</p>
                </div>
              </div>
            </div>
          )}

          {/* Schedule & Cost Tab */}
          {activeTab === 'schedule' && (
            <div className="tab-panel animate-fade-in">
              <div className="schedule-list">
                {data.schedule.map((item, idx) => (
                  <div key={idx} className="schedule-row">
                    <span className="schedule-item">{item.item}</span>
                    <span className="schedule-dots"></span>
                    <span className="schedule-note">{item.note}</span>
                  </div>
                ))}
              </div>
              <div className="schedule-cta">
                <p>For detailed pricing, contact us directly.</p>
                <a href="tel:+918904768299" className="btn-venue-book" style={{ marginTop: '1rem' }}>
                  📞 Call for Pricing
                </a>
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div className="tab-panel animate-fade-in">
              <div className="venue-gallery-grid">
                {data.gallery.map((img, idx) => (
                  <div key={idx} className="venue-gallery-item">
                    <img src={img.src} alt={`${venueName} photo ${idx + 1}`} />
                  </div>
                ))}
              </div>
              {data.driveLink && (
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                  <a
                    href={data.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-venue-learn"
                  >
                    See Full Gallery →
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Book Now CTA at bottom */}
        <div className="venue-detail-cta">
          <p>Ready to book {venueName}?</p>
          <div className="venue-detail-cta-actions">
            <a href="tel:+918904768299" className="btn-venue-book">
              📞 +91 89047 68299
            </a>
            <a href="tel:+919513765355" className="btn-venue-learn">
              📞 +91 9513765355
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueDetail;
