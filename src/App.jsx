import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import TeakMeadows from './pages/TeakMeadows';
import Muddainapalya from './pages/Muddainapalya';
import Ullal from './pages/Ullal';
import RRNagar from './pages/RRNagar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/magadi-road" element={<TeakMeadows />} />
      <Route path="/muddainapalya" element={<Muddainapalya />} />
      <Route path="/ullal" element={<Ullal />} />
      <Route path="/rrnagar" element={<RRNagar />} />

      {/* Redirects for old URLs */}
      <Route path="/muddainapalya-asthitva-the-venue" element={<Navigate replace to="/muddainapalya" />} />
      <Route path="/muddainapalya-asthitva-the-venue/*" element={<Navigate replace to="/muddainapalya" />} />
      <Route path="/asthitva-terrace-garden" element={<Navigate replace to="/ullal" />} />
      <Route path="/asthitva-terrace-garden/*" element={<Navigate replace to="/ullal" />} />
      <Route path="/rr-nagar-asthitva-the-venue" element={<Navigate replace to="/rrnagar" />} />
      <Route path="/rr-nagar-asthitva-the-venue/*" element={<Navigate replace to="/rrnagar" />} />
      <Route path="/asthitva-teak-meadows" element={<Navigate replace to="/magadi-road" />} />
      <Route path="/asthitva-teak-meadows/*" element={<Navigate replace to="/magadi-road" />} />
      <Route path="/asthitva-cozy-corner" element={<Navigate replace to="/" />} />
      <Route path="/asthitva-cozy-corner/*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default App;
