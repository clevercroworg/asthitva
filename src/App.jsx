import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TeakMeadows from './pages/TeakMeadows';
import Muddainapalya from './pages/Muddainapalya';
import Ullal from './pages/Ullal';
import RRNagar from './pages/RRNagar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TeakMeadows />} />
      <Route path="/muddainapalya" element={<Muddainapalya />} />
      <Route path="/ullal" element={<Ullal />} />
      <Route path="/rrnagar" element={<RRNagar />} />
    </Routes>
  );
}

export default App;
