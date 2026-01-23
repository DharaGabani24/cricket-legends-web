import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GallerySlide from './GallerySlide';
import './Gallery.css';

gsap.registerPlugin(ScrollTrigger);

const slidesData = [
  {
    image: '/img/cric2.jpg',
    label: 'Iconic Venue',
    title: "LORD'S",
    subtitle: 'London, England'
  },
  {
    image: '/img/cric4.webp',
    label: 'The Colosseum',
    title: 'EDEN',
    subtitle: 'Kolkata, India'
  },
  {
    image: '/img/cric8.webp',
    label: 'Historic Ground',
    title: 'MCG',
    subtitle: 'Melbourne, Australia'
  },
  {
    image: '/img/cric6.jpeg',
    label: 'Classic Arena',
    title: 'THE OVAL',
    subtitle: 'London, England'
  }
];

const Gallery = () => {
  const galleryRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    const container = containerRef.current;

    if (gallery && container) {
      const slides = container.querySelectorAll('.gallery__slide');
      const totalScroll = (slides.length - 1) * window.innerWidth;

      gsap.to(container, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: gallery,
          start: 'top top',
          end: () => `+=${totalScroll}`,
          pin: true,
          scrub: 1,
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={galleryRef} className="gallery" id="stadiums">
      <div ref={containerRef} className="gallery__container">
        {slidesData.map((slide, index) => (
          <GallerySlide 
            key={index}
            image={slide.image}
            label={slide.label}
            title={slide.title}
            subtitle={slide.subtitle}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
