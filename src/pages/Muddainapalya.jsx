import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import VenueVideo from '../components/VenueVideo';
import VenueDetail from '../components/VenueDetail';
import Gallery from '../components/Gallery';
import Info from '../components/Info';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';

import VenueShowcase from '../components/VenueShowcase';

function Muddainapalya() {
  const [activeVenue, setActiveVenue] = React.useState(1);

  React.useEffect(() => {
    document.title = "Asthitva The Venue | Premium Event Venue | Muddainapalya, Bengaluru";
  }, []);

  const venuesData = [
    {
      id: 1,
      title: 'Venue 1',
      name: 'Venue 1 — Open Lawn Space',
      typeBadge: 'Open Lawn',
      tag: 'Venue 1',
      tagline: 'Asthitva The Venue open celebration lawn under the open sky with spacious banquet dining.',
      capacity: 'Up to 600 Guests',
      image: '/images/muddainapalya/venue-1/1.jpg', 
      videoSrc: '/images/muddainapalya/video/venue1-compressed.mp4', 
      detailLink: '#venue1-detail',
    },
    {
      id: 2,
      title: 'Venue 2',
      name: 'Venue 2 — Covered Hall Space',
      typeBadge: 'Covered Hall',
      tag: 'Venue 2',
      tagline: 'Weather-proof elegant space with romantic moon lights, ambient chandeliers, and open-air breeze.',
      capacity: 'Up to 300 Guests',
      image: '/images/muddainapalya/venue-2/1.webp', 
      videoId: 'tmMSkUJJ478', 
      detailLink: '#venue2-detail',
    }
  ];

  return (
    <div className="app">
      <Navbar logoText="The Venue" topBarText="Premium event venue at Muddayanapalya" phone="+91 89047 68299" />
      <Header title="Asthitva The Venue @ Muddainapalya" />
      <main>
        {/* Dual Venue Comparison Showcase (Option 2) */}
        <VenueShowcase 
          venues={venuesData} 
          activeVenue={activeVenue} 
          onSelectVenue={setActiveVenue} 
        />

        {/* Deep-Dive Interactive Switcher */}
        <div id="venue-deepdive-section" className="venue-deepdive-header">
          <div className="venue-switcher-bar">
            <button 
              type="button"
              className={`venue-switcher-tab ${activeVenue === 1 ? 'active' : ''}`}
              onClick={() => setActiveVenue(1)}
              aria-label="View Venue 1 Details"
            >
              Venue 1 Details
            </button>
            <button 
              type="button"
              className={`venue-switcher-tab ${activeVenue === 2 ? 'active' : ''}`}
              onClick={() => setActiveVenue(2)}
              aria-label="View Venue 2 Details"
            >
              Venue 2 Details
            </button>
            <button 
              type="button"
              className={`venue-switcher-tab ${activeVenue === 'all' ? 'active' : ''}`}
              onClick={() => setActiveVenue('all')}
              aria-label="View Both Venues"
            >
              View Both
            </button>
          </div>
        </div>

        {/* --- Venue 1 Section --- */}
        {(activeVenue === 1 || activeVenue === 'all') && (
          <section className="venue-detail-block" style={{ marginBottom: '4rem' }}>
            {activeVenue === 'all' && (
              <div style={{ textAlign: 'center', margin: '2rem 0 1.5rem' }}>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-dark)', fontFamily: 'var(--font-heading)' }}>
                  Venue 1 — Open Lawn Space
                </h3>
              </div>
            )}
            <VenueVideo venue={venuesData[0]} />
            <VenueDetail venueId="venue1" venueName="Venue 1" page="muddainapalya" />
            <div id="venue1-gallery">
              <Gallery 
                venueName="venue1" 
                images={[
                  { src: '/images/muddainapalya/venue-1/1.jpg', className: 'gallery-standard' },
                  { src: '/images/muddainapalya/venue-1/2.jpg', className: 'gallery-standard' },
                  { src: '/images/muddainapalya/venue-1/3.jpg', className: 'gallery-standard' },
                  { src: '/images/muddainapalya/venue-1/4.jpg', className: 'gallery-standard' },
                  { src: '/images/muddainapalya/venue-1/5.jpg', className: 'gallery-standard' },
                  { src: '/images/muddainapalya/venue-1/6.jpg', className: 'gallery-standard' },
                ]}
                driveLink="https://photos.google.com/share/AF1QipOOAh-lNItpGORkT7HFWHqQdmeYr9a_-KBHM6qOD5hsTpa2XakPVNQMT6aVePTloQ?key=Z0dTcFY0ejRlZEZpbXdIdzBwcXZCTG16V2g2cEt3"
              />
            </div>
          </section>
        )}

        {activeVenue === 'all' && (
          <hr style={{ border: 'none', borderTop: '1px solid #e8dfd5', margin: '3rem auto', width: '80%' }} />
        )}

        {/* --- Venue 2 Section --- */}
        {(activeVenue === 2 || activeVenue === 'all') && (
          <section className="venue-detail-block" style={{ marginBottom: '4rem' }}>
            {activeVenue === 'all' && (
              <div style={{ textAlign: 'center', margin: '2rem 0 1.5rem' }}>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-dark)', fontFamily: 'var(--font-heading)' }}>
                  Venue 2 — Covered Hall Space
                </h3>
              </div>
            )}
            <VenueVideo venue={venuesData[1]} />
            <VenueDetail venueId="venue2" venueName="Venue 2" page="muddainapalya" />
            <div id="venue2-gallery">
              <Gallery 
                venueName="venue2" 
                images={[
                  { src: '/images/muddainapalya/venue-2/1.webp', className: 'gallery-standard' },
                  { src: '/images/muddainapalya/venue-2/2.webp', className: 'gallery-standard' },
                  { src: '/images/muddainapalya/venue-2/3.webp', className: 'gallery-standard' },
                  { src: '/images/muddainapalya/venue-2/4.webp', className: 'gallery-standard' },
                  { src: '/images/muddainapalya/venue-2/5.webp', className: 'gallery-standard' },
                  { src: '/images/muddainapalya/venue-2/6.webp', className: 'gallery-standard' },
                ]}
                driveLink="https://photos.app.goo.gl/TbZNPXAroLN5x1DK8"
              />
            </div>
          </section>
        )}

        {/* Location & Google Map */}
        <Info page="muddainapalya" />

        {/* Testimonials */}
        <Testimonials />

        {/* Final CTA */}
        <CTA page="muddainapalya" />
      </main>
      <FAQ page="muddainapalya" />
      <Footer page="muddainapalya" />
      <FloatingChat />
    </div>
  );
}

export default Muddainapalya;
