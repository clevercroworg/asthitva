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

function Ullal() {
  const venuesData = [
    {
      id: 1,
      title: 'Upto 250 guest | Terrace Garden Venue',
      tagline: 'Serene rooftop escape blending lush greenery, ambient lighting, and open skies.',
      capacity: 'Upto 250 guest',
      image: '/images/ullal/venue-1/1.jpg', 
      videoId: 'FH85MIyHZVs', 
      detailLink: '#venue1-detail',
    }
  ];

  return (
    <div className="app">
      <Navbar logoText="Ullal" topBarText="Premium event venue at Ullal" />
      <Header title="Asthitva Terrace Garden @ Ullal" />
      <main>
        <div style={{ textAlign: 'center', margin: '3rem 0 1rem 0' }}>
          <h2 className="section-title" style={{ whiteSpace: 'nowrap' }}>Our Premier Venues</h2>
        </div>

        {/* --- Venue 1 Section --- */}
        <section style={{ marginBottom: '4rem' }}>
          <VenueVideo venue={venuesData[0]} hideVideoText={true} />
          <VenueDetail venueId="venue1" venueName="Terrace Garden Venue" page="ullal" />
          <div id="venue1-gallery">
            <Gallery 
              venueName="venue1" 
              driveLink="#" // Placeholder
            />
          </div>
        </section>

        {/* Location & Google Map */}
        <Info page="ullal" />

        {/* Testimonials */}
        <Testimonials />

        {/* Final CTA */}
        <CTA page="ullal" />
      </main>
      <Footer page="ullal" />
      <FloatingChat />
    </div>
  );
}

export default Ullal;
