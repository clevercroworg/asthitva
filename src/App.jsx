import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Venues from './components/Venues';
import VenueDetail from './components/VenueDetail';
import Info from './components/Info';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

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

        {/* Venue 2 Detail Section */}
        <VenueDetail venueId="venue2" venueName="Venue 2" />

        {/* Location & Google Map */}
        <Info />

        {/* Testimonials */}
        <Testimonials />

        {/* Final CTA */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
