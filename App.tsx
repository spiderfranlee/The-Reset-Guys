import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.tsx';
import RoomsPage from './components/RoomsPage.tsx';
import ROICalculator from './components/ROICalculator.tsx';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rooms" element={<RoomsPage />} />
      <Route path="/roi" element={<ROICalculator />} />
    </Routes>
  );
}

export default App;