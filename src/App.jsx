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
        <Gallery />
        <Amenities />
        <Info />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
