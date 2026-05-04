import React from 'react';
import './Venues.css';

const Venues = () => {
  const venues = [
    {
      id: 1,
      title: 'Asthitva Teak Meadows - Venue 1',
      description: 'Elegant open-air space surrounded by teak trees, perfect for large gatherings and evening receptions. Experience the warmth of nature combined with premium hospitality.',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Asthitva Teak Meadows - Venue 2',
      description: 'A beautifully structured semi-indoor setting with modern amenities. Ideal for intimate ceremonies and daytime events requiring a blend of comfort and natural beauty.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop',
    }
  ];

  return (
    <section id="venues" className="section venues-section">
      <h2 className="section-title">Our Premier Venues</h2>
      <div className="venues-grid">
        {venues.map((venue) => (
          <div key={venue.id} className="venue-card-side">
            <div className="venue-video-wrapper">
              <img src={venue.image} alt={venue.title} className="venue-thumbnail" />
              <div className="video-overlay">
                <button className="glass-play-btn">
                  <span className="play-triangle"></span>
                </button>
              </div>
              <div className="video-duration">02:45</div>
            </div>
            <div className="venue-info-side">
              <h3 className="venue-title-side">{venue.title}</h3>
              <p className="venue-desc-side">{venue.description}</p>
              <div className="venue-footer-side">
                <a href="#contact" className="btn-explore">Explore <span className="arrow">→</span></a>
                <span className="venue-capacity">Up to 800 guests</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Venues;
