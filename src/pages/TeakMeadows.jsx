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

function TeakMeadows() {
  const [activeVenue, setActiveVenue] = React.useState(1);

  React.useEffect(() => {
    document.title = "Asthitva Teak Meadows | Premium Event Venue | Magadi Road, Bengaluru";
  }, []);

  const venuesData = [
    {
      id: 1,
      title: 'Venue 1',
      name: 'Venue 1 — Premium Open Lawn',
      typeBadge: 'Open Lawn',
      tag: 'Venue 1',
      tagline: 'Grand spaces and timeless celebrations with an expansive celebration lawn.',
      capacity: 'Up to 800 Guests',
      image: '/images/teak-meadows/venue-1-cover.jpeg',
      videoId: 'FH85MIyHZVs',
      detailLink: '#venue1-detail',
    },
    {
      id: 2,
      title: 'Venue 2',
      name: 'Venue 2 — Covered Space & Lawn',
      typeBadge: 'Covered & Lawn',
      tag: 'Venue 2',
      tagline: 'Elegant space with roof, moon lights, ambient lighting, and open sides.',
      capacity: 'Up to 600 Guests',
      image: '/images/teak-meadows/venue-2/IMG_3553.jpg',
      videoId: 'dgWdi3zOOPY',
      detailLink: '#venue2-detail',
    }
  ];

  return (
    <div className="app">
      <Navbar logoText="Teak Meadows" topBarText="Premium event venue at Magadi Road" phone="+91 89047 68299" />
      <Header 
        title="Asthitva Teak Meadows @ Magadi Road" 
        bgImage="/images/teak-meadows/header.jpeg"
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
            <VenueDetail venueId="venue1" venueName="Venue 1" page="teakmeadows" />
            <div id="venue1-gallery">
              <Gallery 
                venueName="venue1" 
                images={[
                  { src: '/images/teak-meadows/venue-1-cover.jpeg', className: 'gallery-standard' },
                  { src: '/images/teak-meadows/latest/covered-hall-lit.jpg', className: 'gallery-standard' },
                  { src: '/images/teak-meadows/latest/water-pathway.jpg', className: 'gallery-standard' },
                  { src: '/images/teak-meadows/latest/fairy-umbrellas.jpg', className: 'gallery-standard' },
                  { src: '/images/teak-meadows/latest/mandap-night.jpg', className: 'gallery-standard' },
                  { src: '/images/teak-meadows/latest/entrance-arch.jpg', className: 'gallery-standard' },
                  { src: '/images/teak-meadows/latest/wedding-stage.jpg', className: 'gallery-standard' }
                ]}
                driveLink="https://photos.app.goo.gl/1A7UFvi9FdaLYPLr5"
              />
            </div>
          </section>
        )}

        {/* --- Venue 2 Section --- */}
        {activeVenue === 2 && (
          <section className="venue-detail-block" style={{ marginBottom: '4rem' }}>
            <VenueVideo venue={venuesData[1]} />
            <VenueDetail venueId="venue2" venueName="Venue 2" page="teakmeadows" />
            <div id="venue2-gallery">
              <Gallery 
                venueName="venue2" 
                images={[
                  { src: '/images/teak-meadows/venue-2/IMG_3553.jpg', className: 'gallery-standard' },
                  { src: '/images/teak-meadows/venue-2/IMG_3554.jpg', className: 'gallery-standard' },
                  { src: '/images/teak-meadows/venue-2/IMG_3560.jpg', className: 'gallery-standard' },
                  { src: '/images/teak-meadows/venue-2/IMG20251212192041.jpg', className: 'gallery-standard' },
                  { src: '/images/teak-meadows/venue-2/IMG20251212192142.jpg', className: 'gallery-standard' },
                  { src: '/images/teak-meadows/venue-2/DJI_0054.JPG', className: 'gallery-standard' }
                ]}
                driveLink="https://photos.google.com/share/AF1QipMwYSsmnBCGUZQWYMYjgZAdVtYbEibB8StGyTP_Jpc5kW-5YssYNNj5J2_J5oaGLg?key=azh2dG02anBPSzVOSndWc2I3aFlWUHM2akU2dFpn"
              />
            </div>
          </section>
        )}

        {/* Location & Google Map */}
        <Info page="teakmeadows" />

        {/* Testimonials */}
        <Testimonials />

        {/* Final CTA */}
        <CTA page="teakmeadows" />
      </main>
      <FAQ page="teakmeadows" />
      <Footer />
      <FloatingChat />
    </div>
  );
}

export default TeakMeadows;
