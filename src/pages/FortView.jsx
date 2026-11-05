import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import VenueDetail from '../components/VenueDetail';
import Gallery from '../components/Gallery';
import Info from '../components/Info';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';
import VenueShowcase from '../components/VenueShowcase';

function FortView() {
  const [activeVenue, setActiveVenue] = useState(1);

  useEffect(() => {
    document.title = "Asthitva Fort View | 3 Venues (Coming Soon) | Electronic City, Bengaluru";

    let metaDescriptionEl = document.querySelector('meta[name="description"]');
    if (!metaDescriptionEl) {
      metaDescriptionEl = document.createElement('meta');
      metaDescriptionEl.name = 'description';
      document.head.appendChild(metaDescriptionEl);
    }
    metaDescriptionEl.content = "Discover Asthitva Fort View near Electronic City / Hulimangala, Bengaluru. Three event spaces — Venue 1, Venue 2 and Pool View — for weddings, receptions, parties and celebrations. Coming Soon!";

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.rel = 'canonical';
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.href = "https://asthitva.in/electronic-city";
  }, []);

  // Placeholder photos until the venue photos and Google Photos links are shared
  const venuesData = [
    {
      id: 1,
      title: 'Venue 1',
      name: 'Venue 1',
      tag: 'Venue 1',
      tagline: 'Grand celebration venue at Asthitva Fort View.',
      capacity: 'Up to 600 Guests',
      image: '/images/fort-view/1.webp',
      venueId: 'venue1',
      gallery: [{ src: '/images/fort-view/1.webp', className: 'gallery-standard' }],
      driveLink: null,
    },
    {
      id: 2,
      title: 'Venue 2',
      name: 'Venue 2',
      tag: 'Venue 2',
      tagline: 'Elegant celebration venue at Asthitva Fort View.',
      capacity: 'Up to 300 Guests',
      image: '/images/fort-view/2.webp',
      venueId: 'venue2',
      gallery: [{ src: '/images/fort-view/2.webp', className: 'gallery-standard' }],
      driveLink: null,
    },
    {
      id: 3,
      title: 'Pool View',
      name: 'Pool View',
      tag: 'Pool View',
      tagline: 'Poolside celebration space at Asthitva Fort View.',
      capacity: 'Up to 100 Guests',
      image: '/images/fort-view/3.webp',
      venueId: 'poolview',
      gallery: [{ src: '/images/fort-view/3.webp', className: 'gallery-standard' }],
      driveLink: null,
    },
  ];

  const active = venuesData.find((v) => v.id === activeVenue);

  return (
    <div className="app">
      <Navbar 
        logoText="Fort View" 
        topBarText="Coming Soon — Electronic City" 
        phone="+91 89047 68299" 
      />
      <Header 
        title="Asthitva Fort View @ Electronic City" 
        bgImage="/images/fort-view/3.webp" 
      />
      
      <main>
        {/* Venue 1 / Venue 2 / Pool View Showcase */}
        <VenueShowcase 
          venues={venuesData} 
          activeVenue={activeVenue} 
          onSelectVenue={setActiveVenue} 
        />

        {/* Deep-Dive Interactive Switcher */}
        <div id="venue-deepdive-section" className="venue-deepdive-header">
          <div className="venue-switcher-bar">
            {venuesData.map((v) => (
              <button 
                key={v.id}
                type="button"
                className={`venue-switcher-tab ${activeVenue === v.id ? 'active' : ''}`}
                onClick={() => setActiveVenue(v.id)}
                aria-label={`View ${v.title} Details`}
              >
                {v.title} Details
              </button>
            ))}
          </div>
        </div>

        {/* --- Active Venue Section --- */}
        <section key={active.id} className="venue-detail-block" style={{ marginBottom: '4rem' }}>
          <VenueDetail venueId={active.venueId} venueName={active.title} page="fortview" />
          <div id={`${active.venueId}-gallery`}>
            <Gallery 
              venueName={active.venueId} 
              images={active.gallery}
              driveLink={active.driveLink}
            />
          </div>
        </section>

        {/* Location & Google Map */}
        <Info page="fortview" />

        {/* Testimonials */}
        <Testimonials />

        {/* Final CTA */}
        <CTA page="fortview" />
      </main>

      <FAQ page="fortview" />
      <Footer page="fortview" />
      <FloatingChat />
    </div>
  );
}

export default FortView;
