import React from 'react';
import './VenueDetail.css';

const VenueDetail = ({ venueId, venueName }) => {
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

  return (
    <section id={`${venueId}-detail`} className="venue-detail-section">
      <div className="venue-detail-container">
        <div className="venue-detail-header">
          <span className="overline">Explore</span>
          <h2 className="section-title venue-detail-title">{venueName}</h2>
        </div>

        <div className="venue-sections-content">
          {/* Timing & Cost Section */}
          <div className="venue-section-block">
            <h3 className="venue-section-heading">{data.timing.title}</h3>
            <div className="timing-cost-container">
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

          {/* Capacity Section */}
          <div className="venue-section-block">
            <h3 className="venue-section-heading">Capacity & Space</h3>
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
                  <div className="capacity-detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="capacity-detail-content">
                    <h4>Dining Capacity</h4>
                    <p>{data.capacity.dining}</p>
                  </div>
                </div>
                <div className="capacity-detail-card">
                  <div className="capacity-detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                  </div>
                  <div className="capacity-detail-content">
                    <h4>Space Area</h4>
                    <p>{data.capacity.carpet}</p>
                  </div>
                </div>
                <div className="capacity-detail-card">
                  <div className="capacity-detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21" />
                    </svg>
                  </div>
                  <div className="capacity-detail-content">
                    <h4>Dining Seating</h4>
                    <p>{data.capacity.diningSeating}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inclusions Section */}
          <div className="venue-section-block">
            <h3 className="venue-section-heading">Included Amenities</h3>
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
        </div>
      </div>
    </section>
  );
};

export default VenueDetail;
