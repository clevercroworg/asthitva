import { useEffect } from 'react';
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

function FortView() {
  useEffect(() => {
    document.title = "Asthitva Fort View | 3 Venues (Coming Soon) | Electronic City, Bengaluru";

    let metaDescriptionEl = document.querySelector('meta[name="description"]');
    if (!metaDescriptionEl) {
      metaDescriptionEl = document.createElement('meta');
      metaDescriptionEl.name = 'description';
      document.head.appendChild(metaDescriptionEl);
    }
    metaDescriptionEl.content = "Discover Asthitva Fort View near Electronic City / Hulimangala, Bengaluru. A grand 3-venue destination featuring celebration lawns, dining pavilions, and dedicated parking. Coming Soon!";

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.rel = 'canonical';
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.href = "https://asthitva.in/fort-view";
  }, []);

  const galleryImages = [
    { src: '/images/fort-view/hero.webp', className: 'gallery-large' },
    { src: '/images/fort-view/masterplan.webp', className: 'gallery-wide' },
    { src: '/images/fort-view/elevation.webp', className: 'gallery-tall' },
    { src: '/images/fort-view/render-full.webp', className: 'gallery-large' },
  ];

  const venuesData = [
    {
      id: 1,
      title: 'Asthitva Fort View (3 Venues Complex)',
      tagline: 'A premier 3-venue celebration destination with grand lawns, covered dining pavilions, and expansive parking.',
      capacity: 'Up to 1,500 Guests (Combined Across 3 Venues)',
      image: '/images/fort-view/hero.webp',
      detailLink: '#venue1-detail',
    }
  ];

  return (
    <div className="app">
      <Navbar 
        logoText="Fort View" 
        topBarText="Coming Soon — 3 Venues Complex near Electronic City" 
        phone="+91 89047 68299" 
      />
      <Header 
        title="Asthitva Fort View — 3 Venues" 
        bgImage="/images/fort-view/hero.webp" 
      />
      
      <main>
        <div style={{ textAlign: 'center', margin: '3rem 0 1rem 0' }}>
          <span className="overline" style={{ 
            color: 'var(--primary)', 
            fontWeight: 700, 
            letterSpacing: '0.15em', 
            textTransform: 'uppercase',
            background: 'var(--primary-ultra-light)',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '0.85rem'
          }}>
            Grand Launch • Coming Soon
          </span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>Architectural Masterplan & Venues</h2>
          <p style={{ color: '#666', maxWidth: '650px', margin: '0.5rem auto 2rem auto', fontSize: '1rem', lineHeight: '1.6' }}>
            Sprawling celebration complex featuring 3 distinct venue zones, dedicated dining pavilions, bridal suites, and a massive parking area.
          </p>
        </div>

        {/* --- Venue Section --- */}
        <section style={{ marginBottom: '4rem' }}>
          <VenueVideo venue={venuesData[0]} hideVideoText={true} />
          <VenueDetail venueId="venue1" venueName="Asthitva Fort View" page="fortview" />
          <div id="venue1-detail"></div>
          <div id="venue1-gallery">
            <Gallery 
              venueName="Asthitva Fort View" 
              images={galleryImages}
              driveLink="https://www.google.com/maps?q=12.8361246,77.6327969&z=17&hl=en"
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
