import React, { useState } from 'react';
import './Venues.css';

const Venues = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const venues = [
    {
      id: 1,
      title: 'Venue 1',
      tagline: 'Beautiful open venue with 11500 sq ft of carpet area',
      capacity: 'Upto 600 guests',
      dining: 'Separate section with 130 seating at once',
      image: '/images/IMG20251212184424.jpg',
      videoId: 'FH85MIyHZVs',
      scrollTo: '#venue1-gallery',
    },
    {
      id: 2,
      title: 'Venue 2',
      tagline: 'Elegant space with roof, moon lights and open sides',
      capacity: 'Upto 300 guests',
      dining: 'Upto 60 but can be expanded',
      image: '/images/IMG20251212184540.jpg',
      videoId: 'dgWdi3zOOPY',
      scrollTo: '#venue2-gallery',
    }
  ];

  const handlePlay = (id) => {
    setActiveVideo(id);
  };

  return (
    <section id="venues" className="section venues-section">
      <h2 className="section-title">Our Premier Venues</h2>
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
              <div className="venue-details">
                <div className="venue-detail-row">
                  <span className="detail-label">Venue Capacity:</span>
                  <span className="detail-value">{venue.capacity}</span>
                </div>
                <div className="venue-detail-row">
                  <span className="detail-label">Dining Capacity:</span>
                  <span className="detail-value">{venue.dining}</span>
                </div>
              </div>
              <a href={venue.scrollTo} className="venue-see-more">
                See More <span className="arrow">↓</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Venues;
