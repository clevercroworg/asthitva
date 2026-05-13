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
                    src={`https://www.youtube.com/embed/${venue.videoId}?autoplay=1&rel=0&playsinline=1`} 
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

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Venues;
