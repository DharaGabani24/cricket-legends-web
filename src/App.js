import React, { useState } from 'react';
import {
  Preloader,
  Navbar,
  Hero,
  Story,
  Features,
  // Gallery,
  Stats,
  CTA,
  Footer
} from './components';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div className="App">
      {/* Preloader */}
      {loading && <Preloader onComplete={handleLoadingComplete} />}

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section - GTA VI Style Effect */}
        <Hero />
        {/* Story Section */}
        <Story />

        {/* Features Section */}
        <Features />


        {/* Horizontal Gallery */}
        {/* <Gallery /> */}

        {/* Stats Section */}
        <Stats />

        {/* Call to Action */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
