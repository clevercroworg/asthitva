import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
    </Routes>
  );
}

export default App;
