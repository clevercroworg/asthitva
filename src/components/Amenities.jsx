import React from 'react';
import './Amenities.css';

const Amenities = ({ venueName }) => {
  const amenities = [
    { 
      id: 1, 
      name: 'Climate Control', 
      desc: 'AC & Non-AC spaces tailored to your comfort.',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l-3 3m3-3l3 3M5.25 7.5L3 9.75l2.25 2.25m13.5-4.5L21 9.75l-2.25 2.25M5.25 16.5L3 14.25l2.25-2.25m13.5 4.5L21 14.25l-2.25-2.25" /></svg>
    },
    { 
      id: 2, 
      name: 'Ambient Lighting', 
      desc: 'Custom general and decorative lighting.',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.496 1.508 1.333 1.508 2.316v.192" /></svg>
    },
    { 
      id: 3, 
      name: '100% Power Backup', 
      desc: 'Uninterrupted celebrations guaranteed.',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
    },
    { 
      id: 4, 
      name: 'Ample Parking', 
      desc: 'Spacious and secure parking for all guests.',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
    },
  ];

  return (
    <section className="section amenities-split-section">
      <div className="amenities-split-container">
        
        <div className="amenities-image-side">
          <img src="/images/teak-meadows/IMG20251212184603.jpg" alt={`${venueName} Decoration`} className="amenities-main-img" />
          <div className="amenities-image-frame"></div>
        </div>

        <div className="amenities-content-side">
          <div className="amenities-header">
            <span className="overline">Exquisite Details</span>
            <h2 className="section-title">Inclusions & Amenities</h2>
            <p className="amenities-intro">We provide everything you need to make your special day seamless.</p>
          </div>
          
          <div className="amenities-list">
            {amenities.map(item => (
              <div key={item.id} className="amenity-list-item">
                <div className="amenity-icon-wrapper">
                  {item.icon}
                </div>
                <div className="amenity-content">
                  <h4 className="amenity-title">{item.name}</h4>
                  <p className="amenity-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Amenities;
