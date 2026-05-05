import React, { useState } from 'react';
import './Venues.css';

const Venues = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const venues = [
    {
      id: 1,
      title: 'Venue 1',
      tagline: 'Open venue with 11500 sq ft of carpet area',
      capacity: 'Up to 800 guests',
      image: '/images/IMG20251212184424.jpg',
      videoId: 'FH85MIyHZVs',
      detailLink: '#venue1-detail',
    },
    {
      id: 2,
      title: 'Venue 2',
      tagline: 'Elegant space with roof, moon lights and open sides',
      capacity: 'Up to 500 guests',
      image: '/images/IMG20251212184540.jpg',
      videoId: 'dgWdi3zOOPY',
      detailLink: '#venue2-detail',
    }
  ];

  const handlePlay = (id) => {
    setActiveVideo(id);
  };

  return (
    <section id="venues" className="venues-section">
      <div className="venues-inner">
        <h2 className="section-title" style={{ whiteSpace: 'nowrap' }}>Our Premier Venues</h2>
        <div className="venues-grid">
          {venues.map((venue) => (
            <div key={venue.id} className="venue-card-side">
              <div className="venue-video-wrapper">
                {activeVideo === venue.id ? (
                  <iframe 
                    className="venue-iframe"
                    src={`https://www.youtube.com/embed/${venue.videoId}?autoplay=1&rel=0`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                ) : (
                  <>
                    <img src={venue.image} alt={venue.title} className="venue-thumbnail" />
                    <div className="video-overlay" onClick={() => handlePlay(venue.id)}>
                      <button className="glass-play-btn">
                        <span className="play-triangle"></span>
                      </button>
                    </div>
                    <div className="video-duration">▶ Play Video</div>
                  </>
                )}
              </div>
              <div className="venue-info-side">
                <h3 className="venue-title-side">{venue.title}</h3>
                <p className="venue-tagline">{venue.tagline}</p>
                <div className="venue-capacity-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                  <span>{venue.capacity}</span>
                </div>
                <div className="venue-card-actions">
                  <a href={venue.detailLink} className="btn-venue-learn">
                    Learn More <span className="arrow">↓</span>
                  </a>
                  <a href="tel:+918904768299" className="btn-venue-book">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Venues;
