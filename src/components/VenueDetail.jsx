import React from 'react';
import './VenueDetail.css';

const VenueDetail = ({ venueId, venueName, page = 'teakmeadows' }) => {
  const venueData = {
    venue1: {
      tagline: 'Grand spaces and timeless celebrations with a premium open lawn',
      capacity: {
        venue: 'Up to 800 Guests (Floating)',
        dining: '200 Guests (Seating)',
        carpet: 'Premium Open Lawn',
        diningSeating: '200 Guests',
      },
      inclusions: [
        { name: '2 Fully Furnished Rooms', icon: 'room' },
        { name: 'All Furniture with Fabric', icon: 'chair' },
        { name: 'Ample Parking Available', icon: 'parking' },
        { name: 'General & Decorative Lighting', icon: 'light' },
        { name: '100% Power Backup', icon: 'power' },
        { name: 'Outside Catering & Decorators Allowed', icon: 'chair' },
      ],
      timing: {
        title: 'Timing and Cost',
        slots: [
          { label: 'Day (6 AM – 3 PM)', price: '₹70,000 + GST' },
          { label: 'Evening (3:30 PM – 12 AM)', price: '₹75,000 + GST' },
          { label: '18 Hours (6 AM – 12 AM)', price: '₹1,10,000 + GST' },
          { label: '24 Hours (3 PM – 3 PM)', price: '₹1,30,000 + GST' },
        ],
      },
    },
    venue2: {
      tagline: 'Grand spaces and timeless celebrations with elegant covered space & lawn',
      capacity: {
        venue: 'Up to 600 Guests (Floating)',
        dining: '120 Guests (Seating)',
        carpet: 'Premium Open Lawn',
        diningSeating: '120 Guests',
      },
      inclusions: [
        { name: '2 Fully Furnished Rooms', icon: 'room' },
        { name: 'All Furniture with Fabric', icon: 'chair' },
        { name: 'Ample Parking Available', icon: 'parking' },
        { name: 'General & Decorative Lighting', icon: 'light' },
        { name: '100% Power Backup', icon: 'power' },
        { name: 'Outside Catering & Decorators Allowed', icon: 'chair' },
      ],
      timing: {
        title: 'Timing and Cost',
        slots: [
          { label: 'Day (6 AM – 3 PM)', price: '₹60,000 + GST' },
          { label: 'Evening (3:30 PM – 12 AM)', price: '₹65,000 + GST' },
          { label: '18 Hours (6 AM – 12 AM)', price: '₹1,00,000 + GST' },
          { label: '24 Hours (3 PM – 3 PM)', price: '₹1,25,000 + GST' },
        ],
      },
    },
  };
  const muddainapalyaData = {
    venue1: {
      tagline: 'Beautiful open venue with expansive lawn and celebration area',
      capacity: {
        venue: '600 Guests (Floating)',
        dining: '120 Guests (Seating)',
      },
      inclusions: [
        { name: '2 Guest rooms', icon: 'room' },
        { name: "All furniture's with fabric", icon: 'chair' },
        { name: 'General Lighting & Decorative Lighting', icon: 'light' },
        { name: 'Power Backup', icon: 'power' },
        { name: 'Car Parking (100)', icon: 'parking' },
        { name: 'Speaker with Mic', icon: 'audio' },
      ],
      timing: {
        title: 'Timing and Cost',
        slots: [
          { label: 'Day (6 AM – 3 PM)', price: '₹60,000 + GST' },
          { label: 'Evening (3:30 PM – 12 AM)', price: '₹75,000 + GST' },
          { label: '18 Hours (6 AM – 12 AM)', price: '₹1,00,000 + GST' },
          { label: '24 Hours (3 PM – 3 PM)', price: '₹1,25,000 + GST' },
        ],
      },
    },
    venue2: {
      tagline: 'Elegant Space with roof, moon lights and open sides',
      capacity: {
        venue: '300 Guests (Floating)',
        dining: '60 Guests (Seating)',
      },
      inclusions: [
        { name: '2 Guest rooms', icon: 'room' },
        { name: "All furniture's with fabric", icon: 'chair' },
        { name: 'General Lighting & Decorative Lighting', icon: 'light' },
        { name: 'Power Backup', icon: 'power' },
        { name: 'Car Parking (100)', icon: 'parking' },
        { name: 'Speaker with Mic', icon: 'audio' },
      ],
      timing: {
        title: 'Timing and Cost',
        slots: [
          { label: 'Day (6 AM – 3 PM)', price: '₹50,000 + GST' },
          { label: 'Evening (3:30 PM – 12 AM)', price: '₹55,000 + GST' },
          { label: '18 Hours (6 AM – 12 AM)', price: '₹90,000 + GST' },
          { label: '24 Hours (3 PM – 3 PM)', price: '₹1,00,000 + GST' },
        ],
      },
    },
  };

  const ullalData = {
    venue1: {
      tagline: 'An elegant rooftop venue with soft moon lighting and open-air sides',
      capacity: {
        venue: 'Up to 250 Guests (Floating)',
        dining: '90 Guests (Dining)',
        carpet: 'Rooftop venue',
        diningSeating: 'Flexible',
      },
      inclusions: [
        { name: '2 Fully Furnished Rooms', icon: 'room' },
        { name: 'All Furniture with Fabric', icon: 'chair' },
        { name: 'General & Decorative Lighting', icon: 'light' },
        { name: '100% Power Backup', icon: 'power' },
        { name: 'Speaker with Mic / Audio', icon: 'audio' },
        { name: 'Dedicated Parking Space', icon: 'parking' },
      ],
      timing: {
        title: 'Timing and Cost',
        slots: [
          { label: 'Day (6 AM – 3 PM)', price: '₹50,000 + GST' },
          { label: 'Evening (3:30 PM – 12 AM)', price: '₹55,000 + GST' },
          { label: '18 Hours (6 AM – 12 AM)', price: '₹80,000 + GST' },
          { label: '24 Hours (3 PM – 3 PM)', price: '₹1,00,000 + GST' },
        ],
      },
    },
  };

  const rrNagarData = {
    venue1: {
      tagline: 'A spacious outdoor venue for grand celebrations',
      capacity: {
        venue: 'Up to 700 Guests (Floating)',
        dining: '190 Guests (Dining at once)',
        carpet: 'Premium Open Lawn',
        diningSeating: '190 Guests',
      },
      inclusions: [
        { name: '2 Fully Furnished Rooms', icon: 'room' },
        { name: 'All Furniture with Fabric', icon: 'chair' },
        { name: 'Ample Parking Facility', icon: 'parking' },
        { name: 'General & Decorative Lighting', icon: 'light' },
        { name: '100% Power Backup', icon: 'power' },
        { name: 'Outside Catering & Decorators Allowed', icon: 'chair' },
      ],
      timing: {
        title: 'Timing and Cost',
        slots: [
          { label: 'Day (6 AM – 3 PM)', price: '₹70,000 + GST' },
          { label: 'Evening (3:30 PM – 12 AM)', price: '₹75,000 + GST' },
          { label: '18 Hours (6 AM – 12 AM)', price: '₹1,10,000 + GST' },
          { label: '24 Hours (3 PM – 3 PM)', price: '₹1,30,000 + GST' },
        ],
      },
    },
    venue2: {
      tagline: 'Premium open lawn event space for every celebration',
      capacity: {
        venue: 'Up to 700 Guests (Floating)',
        dining: '170 Guests (Dining at once)',
        carpet: 'Premium Open Lawn',
        diningSeating: '170 Guests',
      },
      inclusions: [
        { name: '2 Fully Furnished Rooms', icon: 'room' },
        { name: 'All Furniture with Fabric', icon: 'chair' },
        { name: 'Ample Parking Available', icon: 'parking' },
        { name: 'General & Decorative Lighting', icon: 'light' },
        { name: '100% Power Backup', icon: 'power' },
        { name: 'Outside Catering & Decorators Allowed', icon: 'chair' },
      ],
      timing: {
        title: 'Timing and Cost',
        slots: [
          { label: 'Day (6 AM – 3 PM)', price: '₹75,000 + GST' },
          { label: 'Evening (3 PM – 10 PM)', price: '₹80,000 + GST' },
          { label: '18 Hours (6 AM – 12 AM)', price: '₹1,20,000 + GST' },
          { label: '24 Hours (6 AM – 6 AM)', price: '₹1,40,000 + GST' },
        ],
      },
    },
  };

  const laBendicionData = {
    venue1: {
      tagline: 'Charming semi-outdoor venue with warm ambient lighting, elegant structures, and lush greenery',
      capacity: {
        venue: 'Up to 600 Guests (Floating)',
        dining: '150 Guests (Dining)',
        carpet: 'Spacious celebration space with covered roofing',
        diningSeating: '150 Guests',
      },
      inclusions: [
        { name: '2 Fully Furnished Rooms', icon: 'room' },
        { name: 'All Furniture with Fabric', icon: 'chair' },
        { name: 'General & Decorative Lighting', icon: 'light' },
        { name: '100% Power Backup', icon: 'power' },
        { name: 'Outside Catering & Decorators Allowed', icon: 'chair' },
        { name: 'Ample Parking Available', icon: 'parking' },
      ],
      timing: {
        title: 'Timing and Cost',
        slots: [
          { label: 'Day (6 AM – 3 PM)', price: '₹70,000 + GST' },
          { label: 'Evening (3:30 PM – 12 AM)', price: '₹75,000 + GST' },
          { label: '18 Hours (6 AM – 12 AM)', price: '₹1,00,000 + GST' },
          { label: '24 Hours (3 PM – 3 PM)', price: '₹1,25,000 + GST' },
        ],
      },
    },
  };

  const fortViewData = {
    venue1: {
      tagline: '3 Distinct Venues with Sprawling Party Lawns, Dining Pavilions & Expansive Parking',
      capacity: {
        venue: 'Up to 1,500 Guests (Across 3 Venues)',
        dining: '400 - 600 Guests (Seating)',
        carpet: 'Sprawling Celebration Complex (Lawn + Covered)',
        diningSeating: 'Dedicated Banquet & Dining Areas',
      },
      inclusions: [
        { name: '3 Distinct Event Venues', icon: 'chair' },
        { name: '2 Furnished Bridal & Groom Suites', icon: 'room' },
        { name: 'Warm Ambient & Decorative Lighting', icon: 'light' },
        { name: '100% Power Back Up', icon: 'power' },
        { name: 'Outside Catering & Decorators Allowed', icon: 'chair' },
        { name: 'Expansive Parking Area', icon: 'parking' },
      ],
      timing: {
        title: 'Timing and Cost',
        slots: [
          { label: 'Day (6 AM – 3 PM)', price: 'Inquire for Offers' },
          { label: 'Evening (3:30 PM – 12 AM)', price: 'Inquire for Offers' },
          { label: '18 Hours (6 AM – 12 AM)', price: 'Inquire for Offers' },
          { label: '24 Hours (3 PM – 3 PM)', price: 'Inquire for Offers' },
        ],
      },
    },
  };

  const data = page === 'muddainapalya'
    ? muddainapalyaData[venueId]
    : page === 'ullal'
    ? ullalData[venueId]
    : page === 'rrnagar'
    ? rrNagarData[venueId]
    : (page === 'labendicion' || page === 'la-bendicion')
    ? laBendicionData[venueId]
    : (page === 'fortview' || page === 'fort-view')
    ? fortViewData[venueId]
    : venueData[venueId];

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
    audio: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
    ac: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
      </svg>
    ),
    canopy: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    activity: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    stage: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    parking: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.215-9.126M3.375 14.25h17.25m-17.25 0V9.75a2.25 2.25 0 012.25-2.25h11.25a2.25 2.25 0 012.25 2.25v4.5" />
      </svg>
    ),
  };

  const isMuddainapalya = page === 'muddainapalya';
  const isCompactLayout = true;

  return (
    <section id={`${venueId}-detail`} className={`venue-detail-section ${isCompactLayout ? 'compact-layout' : ''}`}>
      <div className="venue-detail-container">
        {!isCompactLayout && (
          <div className="venue-detail-header">
            <span className="overline">Explore</span>
            <h2 className="section-title venue-detail-title">{venueName}</h2>
          </div>
        )}

        <div className="venue-sections-content">
          {/* Timing & Cost Section */}
          <div className="venue-section-block">
            <h3 className="venue-section-heading">{data.timing.title}</h3>
            <div className={`timing-cost-container ${isCompactLayout ? 'compact-timing' : ''}`}>
              <div className={`timing-slots ${isCompactLayout ? 'compact-slots' : ''}`}>
                {data.timing.slots.map((slot, idx) => (
                  <div key={idx} className={`timing-slot-card ${isCompactLayout ? 'compact' : ''}`}>
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
            <h3 className="venue-section-heading">Capacity</h3>
            <div className={`capacity-showcase ${isCompactLayout ? 'compact-two-col' : ''}`}>
              <div className="capacity-detail-card highlighted">
                <div className="capacity-detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <div className="capacity-detail-content">
                  <h4>Floating Capacity</h4>
                  <p>{data.capacity.venue}</p>
                </div>
              </div>

              <div className="capacity-detail-card highlighted">
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
            </div>
          </div>

          {/* Inclusions Section */}
          <div className="venue-section-block">
            <h3 className="venue-section-heading">Included Amenities</h3>
            <div className={`inclusions-grid ${isCompactLayout ? 'compact-inclusions' : ''}`}>
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
