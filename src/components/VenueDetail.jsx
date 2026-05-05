import React, { useState } from 'react';
import './VenueDetail.css';

const VenueDetail = ({ venueId, venueName }) => {
  const [activeTab, setActiveTab] = useState('capacity');

  const venueData = {
    venue1: {
      tagline: 'Beautiful open venue with 11500 sq ft of carpet area',
      capacity: {
        venue: 'Up to 800 guests',
        dining: 'Up to 200',
        carpet: '11,500 sq ft carpet area',
        diningSeating: 'Separate dining section with 130 seating at once',
      },
      inclusions: [
        { name: 'All Furniture with Fabric', icon: 'chair' },
        { name: '2 Fully Furnished Rooms', icon: 'room' },
        { name: 'General Lighting & Decorative Lighting', icon: 'light' },
        { name: 'Power Back Up', icon: 'power' },
      ],
      timing: {
        title: 'Introductory Price',
        slots: [
          { label: 'Day (6 AM – 3 PM)', price: '₹70,000 + GST' },
          { label: 'Eve (3 PM – 12 AM)', price: '₹75,000 + GST' },
        ],
      },
    },
    venue2: {
      tagline: 'Elegant space with roof, moon lights and open sides',
      capacity: {
        venue: 'Up to 500 guests',
        dining: 'Up to 120',
        carpet: 'Elegant space with roof and open sides',
        diningSeating: 'Dining for up to 60 guests, expandable',
      },
      inclusions: [
        { name: 'All Furniture with Fabric', icon: 'chair' },
        { name: '2 Fully Furnished Rooms', icon: 'room' },
        { name: 'General Lighting & Decorative Lighting', icon: 'light' },
        { name: 'Power Back Up', icon: 'power' },
      ],
      timing: {
        title: 'Introductory Price',
        slots: [
          { label: 'Day (6 AM – 3 PM)', price: '₹60,000 + GST' },
          { label: 'Eve (3 PM – 12 AM)', price: '₹65,000 + GST' },
        ],
      },
    },
  };

  const data = venueData[venueId];

  const icons = {
    chair: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10V6a2 2 0 012-2h10a2 2 0 012 2v4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 14a2 2 0 012-2h14a2 2 0 012 2v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 16v4m12-4v4" />
      </svg>
    ),
    room: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
      </svg>
    ),
    light: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.496 1.508 1.333 1.508 2.316V18" />
      </svg>
    ),
    power: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  };

  const tabs = [
    { id: 'capacity', label: 'Capacity' },
    { id: 'inclusions', label: 'Inclusions' },
    { id: 'timing', label: 'Timing & Cost' },
  ];

  return (
    <section id={`${venueId}-detail`} className="venue-detail-section">
      <div className="venue-detail-container">
        <div className="venue-detail-header">
          <span className="overline">Explore</span>
          <h2 className="section-title venue-detail-title">{venueName}</h2>
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
          {/* Capacity Tab (DEFAULT) */}
          {activeTab === 'capacity' && (
            <div className="tab-panel animate-fade-in">
              <div className="capacity-showcase">
                <div className="capacity-main-card">
                  <div className="capacity-icon-circle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <h3 className="capacity-big-number">{data.capacity.venue}</h3>
                  <p className="capacity-label">Venue Capacity</p>
                </div>
                <div className="capacity-details-grid">
                  <div className="capacity-detail-card">
                    <h4>🍽️ Dining Capacity</h4>
                    <p>{data.capacity.dining}</p>
                  </div>
                  <div className="capacity-detail-card">
                    <h4>📐 Space</h4>
                    <p>{data.capacity.carpet}</p>
                  </div>
                  <div className="capacity-detail-card full-width">
                    <h4>🪑 Dining Seating</h4>
                    <p>{data.capacity.diningSeating}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Inclusions Tab */}
          {activeTab === 'inclusions' && (
            <div className="tab-panel animate-fade-in">
              <div className="inclusions-grid">
                {data.inclusions.map((item, idx) => (
                  <div key={idx} className="inclusion-card">
                    <div className="inclusion-icon">
                      {icons[item.icon]}
                    </div>
                    <p className="inclusion-name">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Timing & Cost Tab */}
          {activeTab === 'timing' && (
            <div className="tab-panel animate-fade-in">
              <div className="timing-cost-container">
                <h3 className="timing-cost-title">{data.timing.title}</h3>
                <div className="timing-slots">
                  {data.timing.slots.map((slot, idx) => (
                    <div key={idx} className="timing-slot-card">
                      <div className="slot-icon">{idx === 0 ? '☀️' : '🌙'}</div>
                      <div className="slot-info">
                        <p className="slot-label">{slot.label}</p>
                        <p className="slot-price">{slot.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
