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

function Muddainapalya() {
  const venuesData = [
    {
      id: 1,
      title: 'Venue 1',
      tagline: 'Asthitva The Venue at Muddainapalya open venue space',
      capacity: 'Upto 600 guest',
      image: '/images/muddainapalya/venue-1/1.jpg', 
      videoSrc: '/images/muddainapalya/video/venue1-compressed.mp4', 
      detailLink: '#venue1-detail',
    },
    {
      id: 2,
      title: 'Venue 2',
      tagline: 'Elegant space with roof, moon lights and open sides',
      capacity: 'Upto 300 guest',
      image: '/images/muddainapalya/venue-2/1.jpg', 
      videoId: 'dgWdi3zOOPY', 
      detailLink: '#venue2-detail',
    }
  ];

  return (
    <div className="app">
      <Navbar logoText="Muddainapalya" topBarText="Premium event venue at Muddayanapalya" />
      <Header title="Asthitva The Venue @ Muddainapalya" />
      <main>
        <div style={{ textAlign: 'center', margin: '3rem 0 1rem 0' }}>
          <h2 className="section-title" style={{ whiteSpace: 'nowrap' }}>Our Premier Venues</h2>
        </div>

        {/* --- Venue 1 Section --- */}
        <section style={{ marginBottom: '4rem' }}>
          <VenueVideo venue={venuesData[0]} />
          <VenueDetail venueId="venue1" venueName="Venue 1" page="muddainapalya" />
          <div id="venue1-gallery">
            <Gallery 
              venueName="venue1" 
              images={[
                { src: '/images/muddainapalya/venue-1/1.jpg', className: 'gallery-standard' },
                { src: '/images/muddainapalya/venue-1/2.jpg', className: 'gallery-standard' },
                { src: '/images/muddainapalya/venue-1/3.jpg', className: 'gallery-standard' },
                { src: '/images/muddainapalya/venue-1/4.jpg', className: 'gallery-standard' },
                { src: '/images/muddainapalya/venue-1/5.jpg', className: 'gallery-standard' },
                { src: '/images/muddainapalya/venue-1/6.jpg', className: 'gallery-standard' },
              ]}
              driveLink="https://photos.google.com/share/AF1QipOOAh-lNItpGORkT7HFWHqQdmeYr9a_-KBHM6qOD5hsTpa2XakPVNQMT6aVePTloQ?key=Z0dTcFY0ejRlZEZpbXdIdzBwcXZCTG16V2g2cEt3"
            />
          </div>
        </section>

        <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '2rem auto', width: '80%' }} />

        {/* --- Venue 2 Section --- */}
        <section style={{ marginBottom: '4rem' }}>
          <VenueVideo venue={venuesData[1]} />
          <VenueDetail venueId="venue2" venueName="Venue 2" page="muddainapalya" />
          <div id="venue2-gallery">
            <Gallery 
              venueName="venue2" 
              images={[
                { src: '/images/muddainapalya/venue-2/1.jpg', className: 'gallery-standard' },
                { src: '/images/muddainapalya/venue-2/2.jpg', className: 'gallery-standard' },
                { src: '/images/muddainapalya/venue-2/3.jpg', className: 'gallery-standard' },
                { src: '/images/muddainapalya/venue-2/4.jpg', className: 'gallery-standard' },
                { src: '/images/muddainapalya/venue-2/5.jpg', className: 'gallery-standard' },
                { src: '/images/muddainapalya/venue-2/6.jpg', className: 'gallery-standard' },
              ]}
              driveLink="https://photos.google.com/share/AF1QipOOAh-lNItpGORkT7HFWHqQdmeYr9a_-KBHM6qOD5hsTpa2XakPVNQMT6aVePTloQ?key=Z0dTcFY0ejRlZEZpbXdIdzBwcXZCTG16V2g2cEt3"
            />
          </div>
        </section>

        {/* Location & Google Map */}
        <Info page="muddainapalya" />

        {/* Testimonials */}
        <Testimonials />

        {/* Final CTA */}
        <CTA page="muddainapalya" />
      </main>
      <Footer page="muddainapalya" />
      <FloatingChat />
    </div>
  );
}

export default Muddainapalya;
