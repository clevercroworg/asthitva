import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import VenueVideo from './components/VenueVideo';
import VenueDetail from './components/VenueDetail';
import Gallery from './components/Gallery';
import Info from './components/Info';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';
import VenueCTA from './components/VenueCTA';

function App() {
  const venuesData = [
    {
      id: 1,
      title: 'Venue 1',
      tagline: 'Open venue with 11500 sq ft of carpet area',
      capacity: 'Up to 800 guests',
      image: '/images/IMG20251212184424.jpg',
      videoId: 'FH85MIyHZVs',
      detailLink: '#venue1-detail',
    },
    {
      id: 2,
      title: 'Venue 2',
      tagline: 'Elegant space with roof, moon lights and open sides',
      capacity: 'Up to 500 guests',
      image: '/images/IMG20251212184540.jpg',
      videoId: 'dgWdi3zOOPY',
      detailLink: '#venue2-detail',
    }
  ];

  return (
    <div className="app">
      <Navbar />
      <Header />
      <main>
        <div style={{ textAlign: 'center', margin: '3rem 0 1rem 0' }}>
          <h2 className="section-title" style={{ whiteSpace: 'nowrap' }}>Our Premier Venues</h2>
        </div>

        {/* --- Venue 1 Section --- */}
        <section style={{ marginBottom: '4rem' }}>
          <VenueVideo venue={venuesData[0]} />
          <VenueDetail venueId="venue1" venueName="Venue 1" />
          <div id="venue1-gallery">
            <Gallery 
              venueName="venue1" 
              driveLink="https://photos.app.goo.gl/1A7UFvi9FdaLYPLr5"
            />
          </div>
          <VenueCTA venueName="Venue 1" phoneNumber1="+91 89047 68299" phoneNumber2="+91 9513765355" />
        </section>

        <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '2rem auto', width: '80%' }} />

        {/* --- Venue 2 Section --- */}
        <section style={{ marginBottom: '4rem' }}>
          <VenueVideo venue={venuesData[1]} />
          <VenueDetail venueId="venue2" venueName="Venue 2" />
          <div id="venue2-gallery">
            <Gallery 
              venueName="venue2" 
              images={[
                { src: '/images/venue-2/IMG_3553.jpg', className: 'gallery-standard' },
                { src: '/images/venue-2/IMG_3554.jpg', className: 'gallery-standard' },
                { src: '/images/venue-2/IMG_3560.jpg', className: 'gallery-standard' },
                { src: '/images/venue-2/IMG20251212192041.jpg', className: 'gallery-standard' },
                { src: '/images/venue-2/IMG20251212192142.jpg', className: 'gallery-standard' },
                { src: '/images/venue-2/DJI_0054.JPG', className: 'gallery-standard' }
              ]}
              driveLink="https://photos.google.com/share/AF1QipMwYSsmnBCGUZQWYMYjgZAdVtYbEibB8StGyTP_Jpc5kW-5YssYNNj5J2_J5oaGLg?key=azh2dG02anBPSzVOSndWc2I3aFlWUHM2akU2dFpn"
            />
          </div>
          <VenueCTA venueName="Venue 2" phoneNumber1="+91 89047 68299" phoneNumber2="+91 9513765355" />
        </section>

        {/* Location & Google Map */}
        <Info />

        {/* Testimonials */}
        <Testimonials />

        {/* Final CTA */}
        <CTA />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
}

export default App;
