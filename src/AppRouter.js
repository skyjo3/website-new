// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Header from './Header';
import About from './pages/About';
import Projects from './pages/Projects';
import More from './pages/More';

import PhotoClockDetail from './pages/projects/PhotoClockDetail'

// <Route path="/projects/chronoscope" element={<ChronoscopeDetail />} />
      // <Route path="/projects/crescendo" element={<CrescendoDetail />} />
      // <Route path="/projects/womany" element={<WomanyDetail />} />
      // <Route path="/projects/quologue" element={<QuologueDetail />} />
      // <Route path="/projects/mental-map" element={<MentalMapDetail />} />
      // <Route path="/projects/olo" element={<OloDetail />} />
      // <Route path="/projects/olly" element={<OllyDetail />} />
      // <Route path="/projects/slow-game" element={<SlowGameDetail />} />

const AppRouter = () => (
  <Router basename="/website-new">
    <Header />
    <Routes>
      <Route path="/" element={<About />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route path="/projects/photoclock" element={<PhotoClockDetail />} />
      
      <Route exact path="/more" element={<More />} />
      <Route path="*" element={<Navigate to="/" />} /> {/* Catch-all route */}
    </Routes>
  </Router>
);

export default AppRouter;
