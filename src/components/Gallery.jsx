import React, { useState } from 'react';
import './Gallery.css';

const Gallery = ({ venueName, images, driveLink }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const defaultImages = [
    { src: '/images/IMG20251212184424.jpg', className: 'gallery-large' },
    { src: '/images/IMG20251212184445.jpg', className: 'gallery-standard' },
    { src: '/images/IMG20251212184459.jpg', className: 'gallery-tall' },
    { src: '/images/IMG20251212184510.jpg', className: 'gallery-wide' },
    { src: '/images/IMG20251212184523.jpg', className: 'gallery-standard' },
    { src: '/images/IMG20251212184540.jpg', className: 'gallery-standard' }
  ];

  const displayImages = images || defaultImages;

  return (
    <section id={`${venueName.toLowerCase().replace(' ', '')}-gallery`} className="section gallery-section">
      <div className="gallery-header">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">Moments captured in our beautiful spaces</p>
      </div>
      <div className="gallery-masonry">
        {displayImages.map((item, index) => (
          <div key={index} className={`gallery-item ${item.className}`} onClick={() => setSelectedImage(item.src)}>
            <img src={item.src} alt={`${venueName} image ${index + 1}`} />
            <div className="gallery-overlay">
              <span className="plus-icon">+</span>
            </div>
          </div>
        ))}
      </div>
      
      {driveLink && (
        <div className="gallery-actions" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a 
            href={driveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-gold-solid"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
          >
            See More in Gallery <span>→</span>
          </a>
        </div>
      )}

      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <button className="gallery-modal-close" onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}>&times;</button>
          <img src={selectedImage} alt="Fullscreen View" className="gallery-modal-image" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
};

export default Gallery;
