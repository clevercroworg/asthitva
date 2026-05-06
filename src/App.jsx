import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Venues from './components/Venues';
import VenueDetail from './components/VenueDetail';
import Gallery from './components/Gallery';
import Info from './components/Info';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';
import VenueCTA from './components/VenueCTA';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <main>
        {/* Venue Selection Overview */}
        <Venues />

        {/* Venue 1 Detail Section */}
        <VenueDetail venueId="venue1" venueName="Venue 1" />
        {/* Venue 1 Gallery */}
        <div id="venue1-gallery">
          <Gallery 
            venueName="venue1" 
            driveLink="https://photos.app.goo.gl/1A7UFvi9FdaLYPLr5"
          />
        </div>
        <VenueCTA venueName="Venue 1" phoneNumber1="+91 89047 68299" phoneNumber2="+91 9513765355" />

        {/* Venue 2 Detail Section */}
        <VenueDetail venueId="venue2" venueName="Venue 2" />
        {/* Venue 2 Gallery */}
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
