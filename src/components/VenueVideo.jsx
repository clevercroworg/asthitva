import React, { useState } from 'react';
import './Venues.css'; // Reuse existing styles or create new ones

const VenueVideo = ({ venue }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="venues-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '1000px', margin: '0 auto 2rem auto' }}>
      <div className="venue-card-side">
        <div className="venue-video-wrapper">
          {isPlaying ? (
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
              <div className="video-overlay" onClick={handlePlay}>
                <button className="glass-play-btn">
                  <span className="play-triangle"></span>
                </button>
              </div>
              <div className="video-duration">▶ Play Video</div>
            </>
          )}
        </div>
        <div className="venue-info-side">
          <h3 className="venue-title-side">{venue.title} VIDEO</h3>
          <p className="venue-tagline">{venue.tagline}</p>

        </div>
      </div>
    </div>
  );
};

export default VenueVideo;
