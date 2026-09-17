import React from 'react';
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

function Ullal() {
  React.useEffect(() => {
    document.title = "Asthitva Rooftop | Premium Event Venue | Ullal, Bengaluru";
  }, []);

  const galleryImages = [
    { src: '/images/ullal/rooftop_0.jpg', className: 'gallery-large' },
    { src: '/images/ullal/rooftop_1.jpg', className: 'gallery-standard' },
    { src: '/images/ullal/rooftop_2.jpg', className: 'gallery-tall' },
    { src: '/images/ullal/rooftop_3.jpg', className: 'gallery-wide' },
    { src: '/images/ullal/rooftop_4.jpg', className: 'gallery-standard' },
    { src: '/images/ullal/rooftop_5.jpg', className: 'gallery-standard' }
  ];

  const venuesData = [
    {
      id: 1,
      title: 'Upto 250 guest | Asthitva Rooftop Venue',
      tagline: 'Serene rooftop escape blending lush greenery, ambient lighting, and open skies.',
      capacity: 'Upto 250 guest',
      image: '/images/ullal/rooftop_1.jpg', 
      videoSrc: '/images/ullal/video/rooftop-compressed.mp4', 
      detailLink: '#venue1-detail',
    }
  ];

  return (
    <div className="app">
      <Navbar logoText="Asthitva Rooftop" topBarText="Premium event venue at Ullal" phone="+91 81470 95583" />
      <Header title="Asthitva Rooftop @ Ullal" bgImage="/images/ullal/rooftop_0.jpg" />
      <main>
        <div style={{ textAlign: 'center', margin: '3rem 0 1rem 0' }}>
          <h2 className="section-title" style={{ whiteSpace: 'nowrap' }}>Our Premier Venues</h2>
        </div>

        {/* --- Venue 1 Section --- */}
        <section style={{ marginBottom: '4rem' }}>
          <VenueVideo venue={venuesData[0]} hideVideoText={true} />
          <VenueDetail venueId="venue1" venueName="Asthitva Rooftop Venue" page="ullal" />
          <div id="venue1-gallery">
            <Gallery 
              venueName="venue1" 
              images={galleryImages}
              driveLink="https://photos.google.com/share/AF1QipPuAOb2rr6bwtYhCULODG_LQ4Cf9k-hDpgP9MvH1uKpKDFb60zaitGhL7lJDDOg5Q?key=Z21XWWRDUE4zbzI3YzNTUnZmWm12MWFFNTNxS19B"
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
      <FAQ page="ullal" />
      <Footer page="ullal" />
      <FloatingChat />
    </div>
  );
}

export default Ullal;
