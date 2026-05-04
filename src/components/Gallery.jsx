import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop', className: 'gallery-large' },
    { src: 'https://images.unsplash.com/photo-1522413452208-996ff3f3e740?q=80&w=2070&auto=format&fit=crop', className: 'gallery-standard' },
    { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop', className: 'gallery-tall' },
    { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop', className: 'gallery-wide' },
    { src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop', className: 'gallery-standard' }
  ];

  return (
    <section id="gallery" className="section gallery-section">
      <div className="gallery-header">
        <h2 className="section-title">A Glimpse of Elegance</h2>
        <p className="section-subtitle">Moments captured in our beautiful spaces</p>
      </div>
      <div className="gallery-masonry">
        {images.map((item, index) => (
          <div key={index} className={`gallery-item ${item.className}`}>
            <img src={item.src} alt={`Gallery image ${index + 1}`} />
            <div className="gallery-overlay">
              <span className="plus-icon">+</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
