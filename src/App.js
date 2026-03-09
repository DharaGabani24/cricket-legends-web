
// ///


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {
  Preloader,
  Navbar,
  Hero,
  Story,
  Features,
} from './components';

import Privacy from './pages/Privacy';
import CookiePolicy from './pages/CookiePolicy';
import CookieSettings from './pages/CookieSettings';
import Legal from './pages/Legal';
import Corporate from './pages/Corporate';
import ScrollToTop from './components/ScrollToTop';


function AppContent() {
  const [loading, setLoading] = useState(true);
  const routeLocation = useLocation();

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  const isHomePage = routeLocation.pathname === '/';

  return (
    <div className="App">
      {loading && isHomePage && <Preloader onComplete={handleLoadingComplete} />}

      {isHomePage && <Navbar visible={!loading} />}

      <ScrollToTop />


      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Story />
            </>
          } />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/cookie-settings" element={<CookieSettings />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
