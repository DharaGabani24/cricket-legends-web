import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    gsap.to('.preloader__progress', {
      width: '100%',
      duration: 1.5,
      ease: 'power2.out',
      onComplete: () => {
        gsap.to('.preloader', {
          opacity: 0,
          duration: 0.5,
          delay: 0.2,
          onComplete: onComplete
        });
      }
    });
  }, [onComplete]);

  return (
    <div className="preloader">
      <div className="preloader__text">GODS OF CRICKET</div>
      <div className="preloader__bar">
        <div className="preloader__progress"></div>
      </div>
    </div>
  );
};

export default Preloader;
