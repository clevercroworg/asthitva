import React, { useEffect, useRef, useState } from 'react';
import './VenueShowcase.css';

const VenueShowcase = ({ venues, activeVenue, onSelectVenue }) => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const cardRefs = useRef({});
  const [carouselVenue, setCarouselVenue] = useState(typeof activeVenue === 'number' ? activeVenue : 1);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const interactionTimerRef = useRef(null);

  // Sync carousel with activeVenue if activeVenue changes externally (e.g. user clicked bottom switcher tab)
  useEffect(() => {
    if (typeof activeVenue === 'number') {
      setCarouselVenue(activeVenue);
    }
  }, [activeVenue]);

  // Pause auto-rotation temporarily during user interactions
  const pauseAutoPlayTemporarily = () => {
    setIsUserInteracting(true);
    if (interactionTimerRef.current) {
      clearTimeout(interactionTimerRef.current);
    }
    interactionTimerRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 6000);
  };

  useEffect(() => {
    return () => {
      if (interactionTimerRef.current) {
        clearTimeout(interactionTimerRef.current);
      }
    };
  }, []);

  // Track viewport visibility with IntersectionObserver:
  // If user scrolls down to video/gallery/nearby sections, pause timer completely so no actions occur off-screen!
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-switch ONLY the showcase cards every 2 seconds (never touching the bottom section)
  useEffect(() => {
    if (isUserInteracting || !isInView) return;

    const timer = setInterval(() => {
      setCarouselVenue((prev) => (prev === 1 ? 2 : 1));
    }, 2000);

    return () => clearInterval(timer);
  }, [isUserInteracting, isInView]);

  // Smoothly center the active carousel card on mobile WITHOUT pulling the window scroll
  useEffect(() => {
    const container = gridRef.current;
    const activeCard = cardRefs.current[carouselVenue];
    if (container && activeCard && window.innerWidth <= 768) {
      const cardRect = activeCard.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const relativeLeft = cardRect.left - containerRect.left + container.scrollLeft;
      const targetLeft = relativeLeft - (container.clientWidth - activeCard.clientWidth) / 2;
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: 'smooth'
      });
    }
  }, [carouselVenue]);

  const handleCardClick = (venueId) => {
    pauseAutoPlayTemporarily();
    setCarouselVenue(venueId);
    onSelectVenue(venueId);
  };

  const handleExploreClick = (venueId, e) => {
    e.stopPropagation();
    pauseAutoPlayTemporarily();
    setCarouselVenue(venueId);
    onSelectVenue(venueId);
    const el = document.getElementById('venue-deepdive-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    pauseAutoPlayTemporarily();
    setCarouselVenue(1);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    pauseAutoPlayTemporarily();
    setCarouselVenue(2);
  };

  const handleDotClick = (venueId, e) => {
    e.stopPropagation();
    pauseAutoPlayTemporarily();
    setCarouselVenue(venueId);
  };

  return (
    <section className="venue-showcase-section" ref={sectionRef}>
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
        onMouseEnter={pauseAutoPlayTemporarily}
        onMouseLeave={() => setIsUserInteracting(false)}
        onTouchStart={pauseAutoPlayTemporarily}
        onTouchEnd={pauseAutoPlayTemporarily}
      >
        <div className="venue-showcase-grid" ref={gridRef}>
          {venues.map((venue) => {
            const isCarouselActive = carouselVenue === venue.id;
            const isDetailsActive = activeVenue === venue.id;
            return (
              <div 
                key={venue.id}
                ref={(el) => (cardRefs.current[venue.id] = el)}
                className={`showcase-card ${isCarouselActive ? 'is-selected' : ''}`}
                onClick={() => handleCardClick(venue.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { 
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(venue.id);
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
                  {isCarouselActive && (
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
                      className={`showcase-action-btn ${isDetailsActive ? 'btn-active' : ''}`}
                      onClick={(e) => handleExploreClick(venue.id, e)}
                    >
                      {isDetailsActive ? 'Viewing Details Below' : 'Explore Details & Video →'}
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
            className={`showcase-nav-arrow ${carouselVenue === 1 ? 'arrow-active' : ''}`}
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
                className={`showcase-dot ${carouselVenue === v.id ? 'active' : ''}`}
                onClick={(e) => handleDotClick(v.id, e)}
                title={v.title}
              />
            ))}
          </div>

          <button 
            type="button" 
            className={`showcase-nav-arrow ${carouselVenue === 2 ? 'arrow-active' : ''}`}
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
