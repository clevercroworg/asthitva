import React, { useEffect, useRef, useState } from 'react';
import './VenueShowcase.css';

const VenueShowcase = ({ venues, activeVenue, onSelectVenue }) => {
  const gridRef = useRef(null);
  const cardRefs = useRef({});
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  // Auto-switch between Venue 1 and Venue 2 every 2 seconds
  useEffect(() => {
    if (isUserInteracting) return;

    const timer = setInterval(() => {
      onSelectVenue((prev) => (prev === 1 ? 2 : 1));
    }, 2000);

    return () => clearInterval(timer);
  }, [isUserInteracting, onSelectVenue]);

  // Smoothly align the active card into center on mobile viewport
  useEffect(() => {
    if (gridRef.current && cardRefs.current[activeVenue]) {
      const activeCard = cardRefs.current[activeVenue];
      if (window.innerWidth <= 768 && activeCard) {
        activeCard.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeVenue]);

  const handleManualSelect = (venueId) => {
    setIsUserInteracting(true);
    onSelectVenue(venueId);
    // Resume auto-rotation after 6 seconds of inactivity
    setTimeout(() => {
      setIsUserInteracting(false);
    }, 6000);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    handleManualSelect(1);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    handleManualSelect(2);
  };

  return (
    <section className="venue-showcase-section">
      <div className="venue-showcase-header">
        <span className="venue-showcase-overline">Choose Your Space</span>
        <h2 className="section-title">Our Premier Venues</h2>
        <p className="venue-showcase-subtitle">
          Compare our two distinct spaces below. Select either venue to explore its full video tour, detailed specs & photo gallery.
        </p>
      </div>

      {/* Comparison Grid & Controls */}
      <div 
        className="venue-showcase-container"
        onMouseEnter={() => setIsUserInteracting(true)}
        onMouseLeave={() => setIsUserInteracting(false)}
      >
        <div className="venue-showcase-grid" ref={gridRef}>
          {venues.map((venue) => {
            const isSelected = activeVenue === venue.id;
            return (
              <div 
                key={venue.id}
                ref={(el) => (cardRefs.current[venue.id] = el)}
                className={`showcase-card ${isSelected ? 'is-selected' : ''}`}
                onClick={() => handleManualSelect(venue.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { 
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleManualSelect(venue.id);
                  }
                }}
                aria-label={`Select ${venue.title}`}
              >
                {/* Media Container */}
                <div className="showcase-card-media">
                  <img src={venue.image} alt={venue.name || venue.title} className="showcase-card-img" />
                  <div className="showcase-card-overlay"></div>
                  
                  {/* Badges on Image (Clean, No Emojis) */}
                  <div className="showcase-badge-top-left">
                    <span className="showcase-venue-badge">{venue.tag || venue.title}</span>
                  </div>

                  <div className="showcase-badge-top-right">
                    <span className="showcase-capacity-pill">{venue.capacity}</span>
                  </div>

                  {/* Active Indicator on Image */}
                  {isSelected && (
                    <div className="showcase-selected-pill">
                      <span>Selected Space</span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="showcase-card-body">
                  <div className="showcase-card-title-row">
                    <h3 className="showcase-card-title">{venue.name || venue.title}</h3>
                    {venue.typeBadge && (
                      <span className="showcase-card-type">{venue.typeBadge}</span>
                    )}
                  </div>

                  <p className="showcase-card-desc">{venue.tagline}</p>

                  {/* Action CTA */}
                  <div className="showcase-card-action">
                    <button 
                      type="button"
                      className={`showcase-action-btn ${isSelected ? 'btn-active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleManualSelect(venue.id);
                        const el = document.getElementById('venue-deepdive-section');
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                    >
                      {isSelected ? 'Viewing Details Below' : 'Explore Details & Video →'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Navigation Arrows & Auto-change Indicator */}
        <div className="showcase-mobile-nav">
          <button 
            type="button" 
            className={`showcase-nav-arrow ${activeVenue === 1 ? 'arrow-active' : ''}`}
            onClick={handlePrev}
            aria-label="Previous Venue"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="showcase-dots-indicator">
            {venues.map((v) => (
              <span 
                key={v.id} 
                className={`showcase-dot ${activeVenue === v.id ? 'active' : ''}`}
                onClick={() => handleManualSelect(v.id)}
                title={v.title}
              />
            ))}
          </div>

          <button 
            type="button" 
            className={`showcase-nav-arrow ${activeVenue === 2 ? 'arrow-active' : ''}`}
            onClick={handleNext}
            aria-label="Next Venue"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VenueShowcase;
