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

function RRNagar() {
  const [activeVenue, setActiveVenue] = React.useState(1);

  React.useEffect(() => {
    document.title = "Asthitva RR Nagar | Premium Event Venue | RR Nagar, Bengaluru";
  }, []);

  const venuesData = [
    {
      id: 1,
      title: 'Venue 1',
      name: 'Venue 1 — Premium Open Lawn',
      typeBadge: 'Open Lawn',
      tag: 'Venue 1',
      tagline: 'A spacious outdoor venue for grand celebrations with dedicated dining space.',
      capacity: 'Up to 700 Guests',
      image: '/images/rr-nagar/venue-1/video-cover.jpeg', 
      videoSrc: '/images/rr-nagar/venue-1/venue-1-compressed.mp4', 
      detailLink: '#venue1-detail',
    },
    {
      id: 2,
      title: 'Venue 2',
      name: 'Venue 2 — Open Lawn & Covered Space',
      typeBadge: 'Covered & Lawn',
      tag: 'Venue 2',
      tagline: 'Elegant space with roof, romantic moon lights, ambient lighting, and open sides.',
      capacity: 'Up to 700 Guests',
      image: '/images/rr-nagar/venue-2/video-cover.jpeg', 
      videoSrc: '/images/rr-nagar/venue-2/venue-2-compressed.mp4', 
      detailLink: '#venue2-detail',
    }
  ];

  return (
    <div className="app">
      <Navbar logoText="RR Nagar" topBarText="Premium event venue at RR Nagar" phone="+91 95354 15379" />
      <Header 
        title="Asthitva The Venue @ RR Nagar" 
        bgImage="/images/rr-nagar/header.jpeg" 
        bgPosition="center 60%" 
      />
      <main>
        {/* Dual Venue Comparison Showcase */}
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
          </div>
        </div>

        {/* --- Venue 1 Section --- */}
        {activeVenue === 1 && (
          <section className="venue-detail-block" style={{ marginBottom: '4rem' }}>
            <VenueVideo venue={venuesData[0]} />
            <VenueDetail venueId="venue1" venueName="Venue 1" page="rrnagar" />
            <div id="venue1-gallery">
              <Gallery 
                venueName="venue1" 
                images={[
                  { src: '/images/rr-nagar/venue-1/video-cover.jpeg', className: 'gallery-standard' },
                  { src: '/images/rr-nagar/venue-1/1.webp', className: 'gallery-standard' },
                  { src: '/images/rr-nagar/venue-1/2.webp', className: 'gallery-standard' },
                  { src: '/images/rr-nagar/venue-1/3.webp', className: 'gallery-standard' },
                  { src: '/images/rr-nagar/venue-1/4.webp', className: 'gallery-standard' },
                  { src: '/images/rr-nagar/venue-1/5.webp', className: 'gallery-standard' },
                  { src: '/images/rr-nagar/venue-1/6.webp', className: 'gallery-standard' },
                ]}
                driveLink="https://photos.app.goo.gl/9LwkrESXUCECMN917"
              />
            </div>
          </section>
        )}

        {/* --- Venue 2 Section --- */}
        {activeVenue === 2 && (
          <section className="venue-detail-block" style={{ marginBottom: '4rem' }}>
            <VenueVideo venue={venuesData[1]} />
            <VenueDetail venueId="venue2" venueName="Venue 2" page="rrnagar" />
            <div id="venue2-gallery">
              <Gallery 
                venueName="venue2" 
                images={[
                  { src: '/images/rr-nagar/venue-2/video-cover.jpeg', className: 'gallery-standard' },
                  { src: '/images/rr-nagar/venue-2/1.webp', className: 'gallery-standard' },
                  { src: '/images/rr-nagar/venue-2/2.webp', className: 'gallery-standard' },
                  { src: '/images/rr-nagar/venue-2/3.webp', className: 'gallery-standard' },
                  { src: '/images/rr-nagar/venue-2/4.webp', className: 'gallery-standard' },
                  { src: '/images/rr-nagar/venue-2/5.webp', className: 'gallery-standard' },
                  { src: '/images/rr-nagar/venue-2/6.webp', className: 'gallery-standard' },
                ]}
                driveLink="https://photos.app.goo.gl/qVCoZbtaBefgkJBcA"
              />
            </div>
          </section>
        )}

        {/* Location & Google Map */}
        <Info page="rrnagar" />

        {/* Testimonials */}
        <Testimonials />

        {/* Final CTA */}
        <CTA page="rrnagar" />
      </main>
      <FAQ page="rrnagar" />
      <Footer page="rrnagar" />
      <FloatingChat />
    </div>
  );
}

export default RRNagar;
