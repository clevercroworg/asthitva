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

        {/* Venue 2 Detail Section */}
        <VenueDetail venueId="venue2" venueName="Venue 2" />
        {/* Venue 2 Gallery */}
        <div id="venue2-gallery">
          <Gallery 
            venueName="venue2" 
            driveLink="https://photos.app.goo.gl/1A7UFvi9FdaLYPLr5"
          />
        </div>

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
