import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FeatureCard from './FeatureCard';
import './Features.css';

gsap.registerPlugin(ScrollTrigger);

const featuresData = [
  {
    icon: '🏏',
    title: 'PRECISION BATTING',
    description: 'Over 100 authentic shots with revolutionary timing mechanics. Every stroke feels real.'
  },
  {
    icon: '⚡',
    title: 'DYNAMIC BOWLING',
    description: 'Real physics simulation for swing, spin, and seam. Weather affects every delivery.'
  },
  {
    icon: '🏆',
    title: 'CAREER MODE',
    description: 'Rise from domestic cricket to international stardom. Build your legacy.'
  },
  {
    icon: '🌐',
    title: 'ONLINE LEAGUES',
    description: 'Compete globally in ranked tournaments. Form clubs and dominate.'
  },
  {
    icon: '🌤️',
    title: 'LIVE CONDITIONS',
    description: 'Real-time weather and pitch degradation. No two matches play alike.'
  },
  {
    icon: '🏟️',
    title: 'ICONIC STADIUMS',
    description: '50+ legendary venues from Lord\'s to MCG, recreated in stunning detail.'
  }
];

const Features = () => {
  useEffect(() => {
    gsap.utils.toArray('.feature-card').forEach((card, i) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        delay: i * 0.1
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="section features" id="features">
      <div className="section__header">
        <span className="section__label">Game Features</span>
        <h2 className="section__title">NEXT GENERATION CRICKET</h2>
      </div>

      <div className="features__grid">
        {featuresData.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
