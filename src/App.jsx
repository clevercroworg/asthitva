import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Venues from './components/Venues';
import Gallery from './components/Gallery';
import Amenities from './components/Amenities';
import Info from './components/Info';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <main>
        <Venues />

        {/* Venue 1 Sections */}
        <Gallery 
          venueName="Venue 1" 
          driveLink="https://photos.app.goo.gl/1A7UFvi9FdaLYPLr5"
        />
        <Amenities venueName="Venue 1" />
        <Info venueName="Venue 1" />

        {/* Venue 2 Sections */}
        <Gallery 
          venueName="Venue 2" 
          driveLink="https://photos.app.goo.gl/1A7UFvi9FdaLYPLr5"
        />
        <Amenities venueName="Venue 2" />
        <Info venueName="Venue 2" />

        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
