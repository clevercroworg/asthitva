import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import VenueVideo from '../components/VenueVideo';
import VenueDetail from '../components/VenueDetail';
import Gallery from '../components/Gallery';
import Info from '../components/Info';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';

function RRNagar() {
  const venuesData = [
    {
      id: 1,
      title: 'Venue 1',
      tagline: 'Thoughtfully designed event venue offering a spacious, well-maintained setting.',
      capacity: 'Upto 800 guest',
      image: '/images/rr-nagar/venue-1/1.webp', 
      videoSrc: '/images/rr-nagar/venue-1/venue-1-compressed.mp4', 
      detailLink: '#venue1-detail',
    },
    {
      id: 2,
      title: 'Venue 2',
      tagline: 'Elegant space with roof, moon lights and open sides.',
      capacity: 'Upto 500 guest',
      image: '/images/rr-nagar/venue-1/4.webp', 
      videoSrc: '/images/rr-nagar/venue-2/venue-2-compressed.mp4', 
      detailLink: '#venue2-detail',
    }
  ];

  return (
    <div className="app">
      <Navbar logoText="RR Nagar" topBarText="Premium event venue at RR Nagar" />
      <Header title="Asthitva @ RR Nagar" />
      <main>
        <div style={{ textAlign: 'center', margin: '3rem 0 1rem 0' }}>
          <h2 className="section-title" style={{ whiteSpace: 'nowrap' }}>Our Premier Venues</h2>
        </div>

        {/* --- Venue 1 Section --- */}
        <section style={{ marginBottom: '4rem' }}>
          <VenueVideo venue={venuesData[0]} />
          <VenueDetail venueId="venue1" venueName="Venue 1" page="rrnagar" />
          <div id="venue1-gallery">
            <Gallery 
              venueName="venue1" 
              images={[
                { src: '/images/rr-nagar/venue-1/1.webp', className: 'gallery-standard' },
                { src: '/images/rr-nagar/venue-1/2.webp', className: 'gallery-standard' },
                { src: '/images/rr-nagar/venue-1/3.webp', className: 'gallery-standard' },
                { src: '/images/rr-nagar/venue-1/4.webp', className: 'gallery-standard' },
                { src: '/images/rr-nagar/venue-1/5.webp', className: 'gallery-standard' },
                { src: '/images/rr-nagar/venue-1/6.webp', className: 'gallery-standard' },
              ]}
              driveLink="https://photos.app.goo.gl/1A7UFvi9FdaLYPLr5"
            />
          </div>
        </section>

        <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '2rem auto', width: '80%' }} />

        {/* --- Venue 2 Section --- */}
        <section style={{ marginBottom: '4rem' }}>
          <VenueVideo venue={venuesData[1]} />
          <VenueDetail venueId="venue2" venueName="Venue 2" page="rrnagar" />
          <div id="venue2-gallery">
            <Gallery 
              venueName="venue2" 
              driveLink="https://photos.app.goo.gl/1A7UFvi9FdaLYPLr5"
            />
          </div>
        </section>

        {/* Location & Google Map */}
        <Info page="rrnagar" />

        {/* Testimonials */}
        <Testimonials />

        {/* Final CTA */}
        <CTA page="rrnagar" />
      </main>
      <Footer page="rrnagar" />
      <FloatingChat />
    </div>
  );
}

export default RRNagar;
