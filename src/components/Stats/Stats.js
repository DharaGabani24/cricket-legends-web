import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StatItem from './StatItem';
import './Stats.css';

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { value: '50+', label: 'STADIUMS' },
  { value: '300+', label: 'PLAYERS' },
  { value: '16', label: 'NATIONAL TEAMS' },
  { value: '∞', label: 'POSSIBILITIES' }
];

const Stats = () => {
  useEffect(() => {
    gsap.utils.toArray('.stat').forEach((stat, i) => {
      gsap.from(stat, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: stat,
          start: 'top 85%',
        },
        delay: i * 0.1
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="section stats">
      <div className="section__header">
        <span className="section__label">By The Numbers</span>
        <h2 className="section__title">THE SCALE OF LEGENDS</h2>
      </div>

      <div className="stats__grid">
        {statsData.map((stat, index) => (
          <StatItem 
            key={index}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;
