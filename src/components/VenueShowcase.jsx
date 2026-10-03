import React from 'react';
import './VenueShowcase.css';

const VenueShowcase = ({ venues, activeVenue, onSelectVenue }) => {
  return (
    <section className="venue-showcase-section">
      <div className="venue-showcase-header">
        <span className="venue-showcase-overline">Choose Your Space</span>
        <h2 className="section-title">Our Premier Venues</h2>
        <p className="venue-showcase-subtitle">
          Compare our two distinct spaces below. Select either venue to explore its full video tour, detailed specs & photo gallery.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="venue-showcase-container">
        <div className="venue-showcase-grid">
          {venues.map((venue) => {
            const isSelected = activeVenue === venue.id;
            return (
              <div 
                key={venue.id}
                className={`showcase-card ${isSelected ? 'is-selected' : ''}`}
                onClick={() => onSelectVenue(venue.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { 
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectVenue(venue.id);
                  }
                }}
                aria-label={`Select ${venue.title}`}
              >
                {/* Media Container */}
                <div className="showcase-card-media">
                  <img src={venue.image} alt={venue.name || venue.title} className="showcase-card-img" />
                  <div className="showcase-card-overlay"></div>
                  
                  {/* Badges on Image */}
                  <div className="showcase-badge-top-left">
                    <span className="showcase-venue-badge">{venue.tag || venue.title}</span>
                  </div>

                  <div className="showcase-badge-top-right">
                    <span className="showcase-capacity-pill">👥 {venue.capacity}</span>
                  </div>

                  {/* Active Indicator on Image */}
                  {isSelected && (
                    <div className="showcase-selected-pill">
                      <span>✓ Selected Space</span>
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

                  {/* Feature Highlights Pills */}
                  {venue.highlights && (
                    <div className="showcase-highlights-pills">
                      {venue.highlights.map((highlight, i) => (
                        <span key={i} className="showcase-feature-pill">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action CTA */}
                  <div className="showcase-card-action">
                    <button 
                      type="button"
                      className={`showcase-action-btn ${isSelected ? 'btn-active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectVenue(venue.id);
                        const el = document.getElementById('venue-deepdive-section');
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                    >
                      {isSelected ? '✓ Viewing Details Below' : 'Explore Details & Video →'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="showcase-mobile-hint">
          <span className="swipe-hint-icon">👉</span> Swipe sideways to compare both venues
        </div>
      </div>
    </section>
  );
};

export default VenueShowcase;
