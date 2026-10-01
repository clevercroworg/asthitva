import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';
import FAQ from '../components/FAQ';
import './Home.css';

const venues = [
  {
    key: 'teakmeadows',
    name: 'Asthitva Teak Meadows',
    location: 'Magadi Road',
    capacity: '2 Venues • Up to 800 Guests',
    image: '/images/teak-meadows/IMG20251212184424.jpg',
    path: '/magadi-road',
    tag: '2 Venues',
  },
  {
    key: 'muddainapalya',
    name: 'Asthitva The Venue',
    location: 'Muddainapalya',
    capacity: '2 Venues • Up to 600 Guests',
    image: '/images/muddainapalya/venue-1/1.jpg',
    path: '/muddainapalya',
    tag: '2 Venues',
  },
  {
    key: 'ullal',
    name: 'Asthitva Rooftop',
    location: 'Ullal',
    capacity: 'Up to 250 Guests',
    image: '/images/ullal/rooftop_0.jpg',
    path: '/ullal',
    tag: '1 Venue',
  },
  {
    key: 'rrnagar',
    name: 'Asthitva RR Nagar',
    location: 'RR Nagar',
    capacity: '2 Venues • Up to 700 Guests',
    image: '/images/rr-nagar/venue-1/video-thumbnail.webp',
    path: '/rrnagar',
    tag: '2 Venues',
  },
  {
    key: 'labendicion',
    name: 'Asthitva La Bendicion',
    location: 'Sahakar Nagar',
    capacity: 'Up to 600 Guests',
    image: '/images/la-bendicion/1.webp',
    path: '/la-bendicion',
    tag: '1 Venue',
  },
  {
    key: 'fortview',
    name: 'Asthitva Fort View',
    location: 'Near Electronic City',
    capacity: '3 Venues • Up to 1500 Guests',
    image: '/images/fort-view/1.webp',
    path: '/fort-view',
    tag: '3 Venues • Coming Soon',
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
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    document.title = "Asthitva — Premium Event Venues | Bengaluru";

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-page">
      {/* Minimal Navbar (Reveals on scroll) */}
      <nav className={`home-nav ${scrolled ? 'visible' : ''}`}>
        <div className="home-nav-container">
          <Link to="/" className="home-nav-logo">Asthitva</Link>
          <a href="tel:+918904768299" className="home-nav-call" aria-label="Call +91 89047 68299">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
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
              <span className="home-stat-number">6</span>
              <span className="home-stat-label">Locations</span>
            </div>
            <div className="home-stat-divider"></div>
            <div className="home-stat">
              <span className="home-stat-number">11</span>
              <span className="home-stat-label">Venues</span>
            </div>
            <div className="home-stat-divider"></div>
            <div className="home-stat">
              <span className="home-stat-number">1000+</span>
              <span className="home-stat-label">Celebrations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section id="venues" className="home-venues-section">
        <div className="home-venues-header">
          <span className="overline">Our Locations</span>
          <h2 className="section-title">Choose Your Venue</h2>
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

      {/* FAQs */}
      <FAQ page="home" />

      {/* Footer */}
      <Footer page="home" />
      <FloatingChat />
    </div>
  );
}

export default Home;
