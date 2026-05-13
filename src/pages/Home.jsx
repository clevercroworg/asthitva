import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';
import './Home.css';

const venues = [
  {
    key: 'teakmeadows',
    name: 'Asthitva Teak Meadows',
    location: 'Magadi Road',
    capacity: 'Up to 800 Guests',
    image: '/images/teak-meadows/IMG20251212184424.jpg',
    path: '/magadi-road',
    tag: '2 Venues',
  },
  {
    key: 'muddainapalya',
    name: 'Asthitva The Venue',
    location: 'Muddainapalya',
    capacity: 'Up to 600 Guests',
    image: '/images/muddainapalya/venue-1/1.jpg',
    path: '/muddainapalya',
    tag: '2 Venues',
  },
  {
    key: 'ullal',
    name: 'Asthitva Terrace Garden',
    location: 'Ullal',
    capacity: 'Up to 250 Guests',
    image: '/images/teak-meadows/IMG20251212184603.jpg',
    path: '/ullal',
    tag: '1 Venue',
  },
  {
    key: 'rrnagar',
    name: 'Asthitva The Venue',
    location: 'RR Nagar',
    capacity: 'Up to 800 Guests',
    image: '/images/rr-nagar/venue-1/1.webp',
    path: '/rrnagar',
    tag: '2 Venues',
  },
];

const testimonials = [
  {
    id: 1,
    text: "We celebrated our wedding at Asthitva and it was beyond our dreams. The decor, space, and team were all absolutely perfect.",
    author: "Priya & Karthik",
    event: "Wedding Reception",
    rating: 5,
  },
  {
    id: 2,
    text: "Beautiful venue with great ambience. The greenery and open-air setup made our event truly memorable for all our guests.",
    author: "Rajesh M.",
    event: "Family Celebration",
    rating: 5,
  },
  {
    id: 3,
    text: "Professional management and a stunning venue. We hosted a corporate event here and everything was flawless from start to finish.",
    author: "Sneha K.",
    event: "Corporate Event",
    rating: 5,
  },
];

function Home() {
  return (
    <div className="home-page">
      {/* Minimal Navbar */}
      <nav className="home-nav">
        <div className="home-nav-container">
          <Link to="/" className="home-nav-logo">Asthitva</Link>
          <a href="tel:+918904768299" className="home-nav-call">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span>+91 89047 68299</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-overlay"></div>
        <div className="home-hero-content">
          <span className="home-hero-overline">Premium Event Venues in Bengaluru</span>
          <h1 className="home-hero-title">Asthitva</h1>
          <p className="home-hero-tagline">Where Every Celebration Finds Its Perfect Space</p>
          <div className="home-hero-stats">
            <div className="home-stat">
              <span className="home-stat-number">4</span>
              <span className="home-stat-label">Locations</span>
            </div>
            <div className="home-stat-divider"></div>
            <div className="home-stat">
              <span className="home-stat-number">7</span>
              <span className="home-stat-label">Venues</span>
            </div>
            <div className="home-stat-divider"></div>
            <div className="home-stat">
              <span className="home-stat-number">1000+</span>
              <span className="home-stat-label">Events Hosted</span>
            </div>
          </div>
          <a href="#venues" className="home-hero-cta">Explore Our Venues</a>
        </div>
      </section>

      {/* Venues Section */}
      <section id="venues" className="home-venues-section">
        <div className="home-venues-header">
          <span className="overline">Our Locations</span>
          <h2 className="section-title">Choose Your Venue</h2>
          <p className="home-venues-sub">Every Asthitva venue is crafted to make your celebrations unforgettable. Pick a location that suits your vision.</p>
        </div>

        <div className="home-venues-grid">
          {venues.map((v) => (
            <Link to={v.path} key={v.key} className="home-venue-card">
              <div className="home-venue-img-wrap">
                <img src={v.image} alt={v.name} className="home-venue-img" />
                <div className="home-venue-tag">{v.tag}</div>
              </div>
              <div className="home-venue-info">
                <h3 className="home-venue-name">{v.name}</h3>
                <p className="home-venue-location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {v.location}, Bengaluru
                </p>
                <p className="home-venue-capacity">{v.capacity}</p>
                <span className="home-venue-cta">View Venue →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="home-testimonials-section">
        <div className="home-testimonials-container">
          <span className="overline" style={{ display: 'block', textAlign: 'center' }}>What Our Guests Say</span>
          <h2 className="section-title">Trusted By Hundreds</h2>

          <div className="home-testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.id} className="home-testimonial-card">
                <div className="home-testimonial-stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="home-star">★</span>
                  ))}
                </div>
                <p className="home-testimonial-text">"{t.text}"</p>
                <div className="home-testimonial-footer">
                  <div className="home-testimonial-avatar">{t.author.charAt(0)}</div>
                  <div>
                    <p className="home-testimonial-author">{t.author}</p>
                    <p className="home-testimonial-event">{t.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer page="home" />
      <FloatingChat />
    </div>
  );
}

export default Home;
