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

function LaBendicion() {
  useEffect(() => {
    document.title = "Asthitva La Bendicion | Premium Event Venue | Sahakar Nagar, Bengaluru";

    let metaDescriptionEl = document.querySelector('meta[name="description"]');
    if (!metaDescriptionEl) {
      metaDescriptionEl = document.createElement('meta');
      metaDescriptionEl.name = 'description';
      document.head.appendChild(metaDescriptionEl);
    }
    metaDescriptionEl.content = "Discover Asthitva La Bendicion at Sahakar Nagar / Kodigehalli, Bengaluru. A charming semi-outdoor venue with warm ambient lighting, perfect for weddings, receptions, parties, and celebrations.";

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.rel = 'canonical';
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.href = "https://asthitva.in/sahakar-nagar";
  }, []);

  const galleryImages = [
    { src: '/images/la-bendicion/gallery-1.webp', className: 'gallery-standard' },
    { src: '/images/la-bendicion/gallery-2.webp', className: 'gallery-standard' },
    { src: '/images/la-bendicion/gallery-3.webp', className: 'gallery-standard' },
    { src: '/images/la-bendicion/gallery-4.webp', className: 'gallery-standard' },
    { src: '/images/la-bendicion/gallery-5.webp', className: 'gallery-standard' },
    { src: '/images/la-bendicion/gallery-6.webp', className: 'gallery-standard' },
  ];

  const venuesData = [
    {
      id: 1,
      title: 'Asthitva La Bendicion Venue',
      name: 'Asthitva La Bendicion — Celebration Space',
      typeBadge: 'Semi-Outdoor Venue',
      tag: 'Premier Venue',
      tagline: 'Charming semi-outdoor venue blending warm ambient lighting, elegant structures, and lush greenery.',
      capacity: 'Up to 600 Guests',
      image: '/images/la-bendicion/gallery-4.webp',
      videoSrc: '/images/la-bendicion/video/venue-compressed.mp4',
      objectFit: 'contain',
      detailLink: '#venue1-detail',
    }
  ];

  return (
    <div className="app">
      <Navbar 
        logoText="La Bendicion" 
        topBarText="Premium event venue at Sahakar Nagar" 
        phone="+91 89047 68299" 
      />
      <Header 
        title="Asthitva La Bendicion @ Sahakar Nagar" 
        bgImage="/images/la-bendicion/1.webp" 
        bgPosition="center 60%"
      />
      
      <main>
        <div style={{ textAlign: 'center', margin: '3rem 0 1rem 0' }}>
          <h2 className="section-title">Our Premier Venue</h2>
        </div>

        {/* --- Venue Section --- */}
        <section style={{ marginBottom: '4rem' }}>
          <VenueVideo venue={venuesData[0]} />
          <VenueDetail venueId="venue1" venueName="Asthitva La Bendicion" page="labendicion" />
          <div id="venue1-detail"></div>
          <div id="venue1-gallery">
            <Gallery 
              venueName="Asthitva La Bendicion" 
              images={galleryImages}
              driveLink="https://photos.app.goo.gl/YZMFYbD7D1duPNPz8"
            />
          </div>
        </section>

        {/* Location & Google Map */}
        <Info page="labendicion" />

        {/* Testimonials */}
        <Testimonials />

        {/* Final CTA */}
        <CTA page="labendicion" />
      </main>

      <FAQ page="labendicion" />
      <Footer page="labendicion" />
      <FloatingChat />
    </div>
  );
}

export default LaBendicion;
