
//1
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Story.css';

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const containerRef = useRef(null);
  
  // Section 1: Intro text
  const introRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphWrapperRef = useRef(null);
  const paragraphDimRef = useRef(null);
  const paragraphBrightRef = useRef(null);
  
  // Section 2: Full screen image with character info
  const characterRef = useRef(null);
  const charBgRef = useRef(null);
  const charNameRef = useRef(null);
  const charQuoteRef = useRef(null);
  const charDescRef = useRef(null);
  const charImg2Ref = useRef(null);
  
  // Section 3: Image grid
  const galleryRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // ========================================
      // SECTION 1: INTRO TEXT ANIMATION
      // ========================================
      
      const intro = introRef.current;
      const title = titleRef.current;
      const paragraphWrapper = paragraphWrapperRef.current;
      const paragraphDim = paragraphDimRef.current;
      const paragraphBright = paragraphBrightRef.current;
      
      // Set initial states
      gsap.set(title, { opacity: 0, y: 40 });
      gsap.set(paragraphBright, { clipPath: 'inset(100% 0% 0% 0%)' });
      
      // Create intro timeline
      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: intro,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          pin: true,
          // markers: true, // Uncomment to debug
        }
      });
      
      // Title fades in
      introTl.to(title, {
        opacity: 1,
        y: 0,
        duration: 0.1,
        ease: 'none'
      }, 0);
      
      // Paragraph color wipe from bottom to top
      introTl.to(paragraphBright, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.4,
        ease: 'none'
      }, 0.05);
      
      // Small pulse effect
      introTl.to(paragraphWrapper, {
        scale: 0.98,
        duration: 0.05,
        ease: 'none'
      }, 0.50);
      
      introTl.to(paragraphWrapper, {
        scale: 1,
        duration: 0.05,
        ease: 'none'
      }, 0.55);
      
      // Exit: fade out and move up
      introTl.to([title, paragraphWrapper], {
        opacity: 0,
        y: -80,
        duration: 0.25,
        ease: 'none'
      }, 0.70);
      
      // ========================================
      // SECTION 2: CHARACTER WITH FULL SCREEN IMAGE
      // ========================================
      
      const character = characterRef.current;
      const charBg = charBgRef.current;
      const charName = charNameRef.current;
      const charQuote = charQuoteRef.current;
      const charDesc = charDescRef.current;
      const charImg2 = charImg2Ref.current;
      
      // Initial states //
      gsap.set(charBg, { opacity: 0, scale: 1 });
      gsap.set(charName, { opacity: 0, y: 80 });
      gsap.set(charQuote, { opacity: 0, y: 50 });
      gsap.set(charDesc, { opacity: 0, y: 40 });
      gsap.set(charImg2, { opacity: 0, x: 60, scale: 0.9 });
      
      // Character timeline
      const charTl = gsap.timeline({
        scrollTrigger: {
          trigger: character,
          start: 'top top',
          end: '+=300%',
          scrub: 1,
          pin: true,
          // markers: true,
        }
      });
      
      // Background fades in with zoom
      charTl.to(charBg, {
        opacity: 1,
        scale: 1.1,
        duration: 0.2,
        ease: 'none'
      }, 0);
      
      // Continue zoom slightly
      charTl.to(charBg, {
        scale: 1.3,
        duration: 0.4,
        ease: 'none'
      }, 0.15);
      
      // Name enters
      charTl.to(charName, {
        opacity: 1,
        y: 0,
        duration: 0.12,
        ease: 'none'
      }, 0.25);
      
      // Quote enters
      charTl.to(charQuote, {
        opacity: 1,
        y: 0,
        duration: 0.12,
        ease: 'none'
      }, 0.32);
      
      // Second image enters
      charTl.to(charImg2, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.15,
        ease: 'none'
      }, 0.38);
      
      // Description enters
      charTl.to(charDesc, {
        opacity: 1,
        y: 0,
        duration: 0.12,
        ease: 'none'
      }, 0.45);
      
      // Parallax movement
      charTl.to(charBg, {
        y: -60,
        duration: 0.25,
        ease: 'none'
      }, 0.55);
      
      charTl.to(charImg2, {
        y: -40,
        duration: 0.25,
        ease: 'none'
      }, 0.55);
      
      // Exit
      charTl.to([charName, charQuote, charDesc], {
        opacity: 0,
        y: -40,
        duration: 0.12,
        ease: 'none'
      }, 0.82);
      
      charTl.to(charImg2, {
        opacity: 0,
        duration: 0.12,
        ease: 'none'
      }, 0.85);
      
      charTl.to(charBg, {
        opacity: 0,
        duration: 0.15,
        ease: 'none'
      }, 0.88);
      
      // ========================================
      // SECTION 3: IMAGE GALLERY
      // ========================================
      
      const gallery = galleryRef.current;
      const img1 = img1Ref.current;
      const img2 = img2Ref.current;
      const img3 = img3Ref.current;
      const img4 = img4Ref.current;
      
      // Initial states
      gsap.set(img1, { opacity: 0, y: 60, scale: 1.05 });
      gsap.set(img2, { opacity: 0, y: 80, scale: 1.05 });
      gsap.set(img3, { opacity: 0, y: 100, scale: 1.05 });
      gsap.set(img4, { opacity: 0, y: 120, scale: 1.05 });
      
      // Gallery timeline
      const galleryTl = gsap.timeline({
        scrollTrigger: {
          trigger: gallery,
          start: 'top top',
          end: '+=250%',
          scrub: 1,
          pin: true,
          // markers: true,
        }
      });
      
      // Staggered image reveals
      galleryTl.to(img1, {
        opacity: 1, y: 0, scale: 1,
        duration: 0.15, ease: 'none'
      }, 0);
      
      galleryTl.to(img2, {
        opacity: 1, y: 0, scale: 1,
        duration: 0.15, ease: 'none'
      }, 0.10);
      
      galleryTl.to(img3, {
        opacity: 1, y: 0, scale: 1,
        duration: 0.15, ease: 'none'
      }, 0.22);
      
      galleryTl.to(img4, {
        opacity: 1, y: 0, scale: 1,
        duration: 0.15, ease: 'none'
      }, 0.34);
      
      // Parallax
      galleryTl.to(img1, { y: -30, duration: 0.3, ease: 'none' }, 0.45);
      galleryTl.to(img2, { y: -50, duration: 0.3, ease: 'none' }, 0.45);
      galleryTl.to(img3, { y: -20, duration: 0.3, ease: 'none' }, 0.50);
      galleryTl.to(img4, { y: -40, duration: 0.3, ease: 'none' }, 0.50);
      
      // Exit
      galleryTl.to([img1, img2, img3, img4], {
        opacity: 0,
        scale: 0.95,
        duration: 0.15,
        ease: 'none'
      }, 0.85);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="story">
      
      {/* ============ SECTION 1: INTRO TEXT ============ */}
      <section ref={introRef} className="story__intro">
        <div className="story__intro-inner">
          <h2 ref={titleRef} className="story__title">Vice City, USA.</h2>
          
          <div ref={paragraphWrapperRef} className="story__paragraph-wrapper">
            {/* Dim version - always visible */}
            <p ref={paragraphDimRef} className="story__paragraph story__paragraph--dim">
              Jason and Lucia have always known the deck is stacked against them. 
              But when an easy score goes wrong, they find themselves on the darkest 
              side of the sunniest place in America, in the middle of a criminal 
              conspiracy stretching across the state of Leonida — forced to rely on 
              each other more than ever if they want to make it out alive.
            </p>
            
            {/* Bright version - reveals via clip-path */}
            <p ref={paragraphBrightRef} className="story__paragraph story__paragraph--bright">
              Jason and Lucia have always known the deck is stacked against them. 
              But when an easy score goes wrong, they find themselves on the darkest 
              side of the sunniest place in America, in the middle of a criminal 
              conspiracy stretching across the state of Leonida — forced to rely on 
              each other more than ever if they want to make it out alive.
            </p>
          </div>
        </div>
        
        <div className="story__scroll-hint">
          <span>⌄</span>
        </div>
      </section>
      
      {/* ============ SECTION 2: CHARACTER ============ */}
      <section ref={characterRef} className="story__character">
        {/* Full screen background */}
        <div ref={charBgRef} className="story__char-bg">
          <img 
            src={process.env.PUBLIC_URL + '/img/HighresScreenshot00005.webp'} 
            alt="Character"
          />
          <div className="story__char-bg-overlay"></div>
        </div>
        
        {/* Content overlay */}
        <div className="story__char-content">
          <div className="story__char-text">
            <h2 ref={charNameRef} className="story__char-name">JASON DUVAL</h2>
            <p ref={charQuoteRef} className="story__char-quote">
              "Jason wants an easy life, but things just keep getting harder."
            </p>
            <p ref={charDescRef} className="story__char-desc">
              Jason grew up around grifters and crooks. After a stint in the Army 
              trying to shake off his troubled teens, he found himself in the Keys 
              doing what he knows best, working for local drug runners. It might be 
              time to try something new.
            </p>
          </div>
          
          {/* Second image */}
          <div ref={charImg2Ref} className="story__char-img2">
            <img 
              src={process.env.PUBLIC_URL + '/img/HighresScreenshot00007.webp'} 
              alt="Jason"
            />
          </div>
        </div>
      </section>
      
      {/* ============ SECTION 3: IMAGE GALLERY ============ */}
      <section ref={galleryRef} className="story__gallery">
        <div className="story__gallery-grid">
          <div ref={img1Ref} className="story__gallery-item story__gallery-item--1">
            <img 
              src={process.env.PUBLIC_URL + '/img/HighresScreenshot00005.webp'} 
              alt="Scene 1"
            />
          </div>
          <div ref={img2Ref} className="story__gallery-item story__gallery-item--2">
            <img 
              src={process.env.PUBLIC_URL + '/img/HighresScreenshot00007.webp'} 
              alt="Scene 2"
            />
          </div>
          <div ref={img3Ref} className="story__gallery-item story__gallery-item--3">
            <img 
              src={process.env.PUBLIC_URL + '/img/HighresScreenshot00005.webp'} 
              alt="Scene 3"
            />
          </div>
          <div ref={img4Ref} className="story__gallery-item story__gallery-item--4">
            <img 
              src={process.env.PUBLIC_URL + '/img/HighresScreenshot00007.webp'} 
              alt="Scene 4"
            />
          </div>
        </div>
      </section>
      
    </div>
  );
};

 export default Story;

// // 2  not that good but still keep for now 
// import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './Story.css';

// gsap.registerPlugin(ScrollTrigger);

// const Story = () => {
//   const containerRef = useRef(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
//   // Mouse parallax effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const x = (e.clientX / window.innerWidth - 0.5) * 2;
//       const y = (e.clientY / window.innerHeight - 0.5) * 2;
//       setMousePosition({ x, y });
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Apply parallax to floating elements
//   useEffect(() => {
//     const parallaxElements = document.querySelectorAll('[data-parallax]');
//     parallaxElements.forEach(el => {
//       const depth = parseFloat(el.dataset.parallax) || 1;
//       gsap.to(el, {
//         x: mousePosition.x * 30 * depth,
//         y: mousePosition.y * 20 * depth,
//         duration: 0.8,
//         ease: 'power2.out'
//       });
//     });
//   }, [mousePosition]);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       // ============================================
//       // SECTION 1: CINEMATIC TITLE REVEAL
//       // ============================================
//       const section1 = gsap.timeline({
//         scrollTrigger: {
//           trigger: '.story__section--intro',
//           start: 'top top',
//           end: '+=350%',
//           pin: true,
//           scrub: 0.6,
//           anticipatePin: 1
//         }
//       });

//       // Title lines reveal with 3D perspective
//       section1
//         .fromTo('.story__title-line', 
//           { y: 100, rotateX: 40, opacity: 0, color: '#4a3535' },
//           { 
//             y: 0, 
//             rotateX: 0, 
//             opacity: 1, 
//             color: '#ff6b4a',
//             stagger: 0.15,
//             duration: 1,
//             ease: 'power3.out'
//           }
//         )
//         .to('.story__title-line', {
//           color: '#ff8f6b',
//           textShadow: '0 0 60px rgba(255, 107, 74, 0.5), 0 0 120px rgba(255, 143, 107, 0.3)',
//           duration: 0.5
//         }, '+=0.2')
//         // Decorative lines scale in
//         .fromTo('.story__deco-line',
//           { scaleX: 0 },
//           { scaleX: 1, duration: 0.8, ease: 'power2.out', stagger: 0.1 },
//           '-=0.6'
//         )
//         // Subtitle with letter-spacing
//         .fromTo('.story__subtitle',
//           { opacity: 0, letterSpacing: '0.5em' },
//           { opacity: 1, letterSpacing: '0.3em', duration: 1, ease: 'power2.out' },
//           '-=0.4'
//         )
//         // Hold for reading
//         .to({}, { duration: 0.5 })
//         // Exit animation
//         .to('.story__intro-content', {
//           scale: 0.9,
//           filter: 'blur(10px)',
//           opacity: 0,
//           y: -80,
//           duration: 1,
//           ease: 'power2.in'
//         });

//       // ============================================
//       // SECTION 2: STORY BEAT WITH FULL-SCREEN IMAGE
//       // ============================================
//       const section2 = gsap.timeline({
//         scrollTrigger: {
//           trigger: '.story__section--beat',
//           start: 'top top',
//           end: '+=400%',
//           pin: true,
//           scrub: 0.7,
//           anticipatePin: 1
//         }
//       });

//       section2
//         // Image clip-path reveals from center
//         .fromTo('.story__beat-image',
//           { clipPath: 'polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)' },
//           { 
//             clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
//             duration: 1.5,
//             ease: 'power3.inOut'
//           }
//         )
//         // Image parallax zoom
//         .fromTo('.story__beat-image img',
//           { scale: 1.2 },
//           { scale: 1, duration: 2, ease: 'power2.out' },
//           '<'
//         )
//         // Text slides in from left
//         .fromTo('.story__beat-text',
//           { x: -80, opacity: 0 },
//           { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
//           '-=1'
//         )
//         // Caption line accent
//         .fromTo('.story__beat-caption::before',
//           { scaleX: 0 },
//           { scaleX: 1, duration: 0.8, ease: 'power2.out' },
//           '-=0.8'
//         )
//         // Text color shift with glow
//         .to('.story__beat-text h3', {
//           color: '#ffaa6b',
//           textShadow: '0 0 40px rgba(255, 170, 107, 0.4)',
//           duration: 0.6
//         }, '+=0.3')
//         // Hold
//         .to({}, { duration: 0.4 })
//         // Image continues subtle zoom
//         .to('.story__beat-image img', {
//           scale: 1.1,
//           duration: 1.5,
//           ease: 'none'
//         }, '-=0.4')
//         // Exit
//         .to('.story__beat-text', {
//           x: 80,
//           opacity: 0,
//           duration: 0.8,
//           ease: 'power2.in'
//         })
//         .to('.story__beat-image', {
//           clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
//           duration: 1,
//           ease: 'power3.inOut'
//         }, '-=0.4');

//       // ============================================
//       // SECTION 3: CHARACTER SHOWCASE
//       // ============================================
//       const section3 = gsap.timeline({
//         scrollTrigger: {
//           trigger: '.story__section--character',
//           start: 'top top',
//           end: '+=450%',
//           pin: true,
//           scrub: 0.5,
//           anticipatePin: 1
//         }
//       });

//       section3
//         // Character image reveal
//         .fromTo('.story__character-image',
//           { filter: 'brightness(0.2) blur(20px)', scale: 1.4 },
//           { 
//             filter: 'brightness(1) blur(0px)', 
//             scale: 1,
//             duration: 1.5,
//             ease: 'power3.out'
//           }
//         )
//         // Character label
//         .fromTo('.story__character-label',
//           { opacity: 0, y: 20 },
//           { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
//           '-=0.8'
//         )
//         // Name "The" reveals
//         .fromTo('.story__character-name-prefix',
//           { clipPath: 'inset(0 100% 0 0)' },
//           { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power2.out' },
//           '-=0.4'
//         )
//         // Name "Champion" reveals
//         .fromTo('.story__character-name-main',
//           { clipPath: 'inset(0 100% 0 0)' },
//           { clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'power3.out' },
//           '-=0.2'
//         )
//         // Quote with border accent
//         .fromTo('.story__character-quote',
//           { opacity: 0, x: -30 },
//           { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
//           '-=0.4'
//         )
//         .to('.story__character-quote', {
//           color: '#ff8f6b',
//           duration: 0.5
//         }, '+=0.2')
//         // Description fades in
//         .fromTo('.story__character-desc',
//           { opacity: 0, y: 20 },
//           { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
//           '-=0.3'
//         )
//         // Floating accent images enter
//         .fromTo('.story__floating-image--1',
//           { scale: 0.5, rotation: -15, opacity: 0 },
//           { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: 'back.out(1.4)' },
//           '-=0.6'
//         )
//         .fromTo('.story__floating-image--2',
//           { scale: 0.5, rotation: 15, opacity: 0 },
//           { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: 'back.out(1.4)' },
//           '-=0.7'
//         )
//         // Hold
//         .to({}, { duration: 0.6 })
//         // Exit
//         .to('.story__character-content', {
//           y: -60,
//           opacity: 0,
//           duration: 0.8,
//           ease: 'power2.in'
//         })
//         .to('.story__floating-image', {
//           y: -100,
//           opacity: 0,
//           scale: 0.8,
//           duration: 0.6,
//           stagger: 0.1
//         }, '-=0.6')
//         .to('.story__character-image', {
//           filter: 'brightness(0.3) blur(10px)',
//           duration: 0.8
//         }, '-=0.6');

//       // ============================================
//       // SECTION 4: GALLERY GRID
//       // ============================================
//       const section4 = gsap.timeline({
//         scrollTrigger: {
//           trigger: '.story__section--gallery',
//           start: 'top top',
//           end: '+=400%',
//           pin: true,
//           scrub: 0.6,
//           anticipatePin: 1
//         }
//       });

//       section4
//         // Title entrance
//         .fromTo('.story__gallery-title',
//           { opacity: 0, y: 50 },
//           { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
//         )
//         .to('.story__gallery-title', {
//           color: '#ff6b4a',
//           textShadow: '0 0 50px rgba(255, 107, 74, 0.4)',
//           duration: 0.5
//         }, '+=0.1')
//         // Subtitle
//         .fromTo('.story__gallery-subtitle',
//           { opacity: 0 },
//           { opacity: 1, duration: 0.6, ease: 'power2.out' },
//           '-=0.3'
//         )
//         // Grid items enter with stagger
//         .fromTo('.story__gallery-item:nth-child(1)',
//           { y: 180, scale: 1.15, rotation: -5, opacity: 0 },
//           { y: 0, scale: 1, rotation: 0, opacity: 1, duration: 1, ease: 'power3.out' },
//           '-=0.2'
//         )
//         .fromTo('.story__gallery-item:nth-child(2)',
//           { y: 200, scale: 1.2, rotation: 5, opacity: 0 },
//           { y: 0, scale: 1, rotation: 0, opacity: 1, duration: 1, ease: 'power3.out' },
//           '-=0.8'
//         )
//         .fromTo('.story__gallery-item:nth-child(3)',
//           { y: 150, scale: 1.1, rotation: 4, opacity: 0 },
//           { y: 0, scale: 1, rotation: 0, opacity: 1, duration: 1, ease: 'power3.out' },
//           '-=0.8'
//         )
//         .fromTo('.story__gallery-item:nth-child(4)',
//           { y: 170, scale: 1.15, rotation: -4, opacity: 0 },
//           { y: 0, scale: 1, rotation: 0, opacity: 1, duration: 1, ease: 'power3.out' },
//           '-=0.8'
//         )
//         // Parallax drift while pinned
//         .to('.story__gallery-item:nth-child(1)', { y: -20, rotation: -1, duration: 1.5 })
//         .to('.story__gallery-item:nth-child(2)', { y: -30, rotation: 1, duration: 1.5 }, '<')
//         .to('.story__gallery-item:nth-child(3)', { y: -15, rotation: 0.5, duration: 1.5 }, '<')
//         .to('.story__gallery-item:nth-child(4)', { y: -25, rotation: -0.5, duration: 1.5 }, '<')
//         // Hold
//         .to({}, { duration: 0.3 })
//         // Exit
//         .to('.story__gallery-item', {
//           scale: 0.9,
//           opacity: 0,
//           y: -80,
//           duration: 0.8,
//           stagger: 0.05,
//           ease: 'power2.in'
//         })
//         .to('.story__gallery-header', {
//           opacity: 0,
//           y: -40,
//           duration: 0.6
//         }, '-=0.6');

//       // ============================================
//       // SECTION 5: EPIC FINALE
//       // ============================================
//       const section5 = gsap.timeline({
//         scrollTrigger: {
//           trigger: '.story__section--finale',
//           start: 'top top',
//           end: '+=350%',
//           pin: true,
//           scrub: 0.8,
//           anticipatePin: 1
//         }
//       });

//       section5
//         // Image dramatic reveal
//         .fromTo('.story__finale-image',
//           { filter: 'brightness(0) blur(30px)', scale: 1.5 },
//           { 
//             filter: 'brightness(1) blur(0px)', 
//             scale: 1,
//             duration: 2,
//             ease: 'power3.out'
//           }
//         )
//         // Accent line scales in
//         .fromTo('.story__finale-accent',
//           { scaleX: 0 },
//           { scaleX: 1, duration: 0.8, ease: 'power2.out' },
//           '-=1'
//         )
//         // Title line 1
//         .fromTo('.story__finale-title-line--1',
//           { opacity: 0, y: 40 },
//           { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
//           '-=0.4'
//         )
//         // Title line 2 with glow
//         .fromTo('.story__finale-title-line--2',
//           { opacity: 0, y: 40 },
//           { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
//           '-=0.4'
//         )
//         // Subtitle
//         .fromTo('.story__finale-subtitle',
//           { opacity: 0 },
//           { opacity: 1, duration: 0.8, ease: 'power2.out' },
//           '-=0.3'
//         )
//         // Hold
//         .to({}, { duration: 0.5 })
//         // Ken Burns zoom with dimming
//         .to('.story__finale-image', {
//           scale: 1.15,
//           filter: 'brightness(0.6) blur(0px)',
//           duration: 2,
//           ease: 'none'
//         })
//         // Fade to black
//         .to('.story__finale-content', {
//           opacity: 0,
//           duration: 0.8
//         }, '-=0.8')
//         .to('.story__finale-fade', {
//           opacity: 1,
//           duration: 1.2,
//           ease: 'power2.in'
//         }, '-=0.6');

//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   // Generate ambient particles
//   const particles = Array.from({ length: 30 }, (_, i) => ({
//     id: i,
//     size: Math.random() * 4 + 2,
//     left: Math.random() * 100,
//     delay: Math.random() * 15,
//     duration: Math.random() * 10 + 15,
//     color: ['#ff6b4a', '#ff8f6b', '#ffaa6b', '#ffffff'][Math.floor(Math.random() * 4)]
//   }));

//   return (
//     <div className="story" ref={containerRef}>
//       {/* Film Grain Overlay */}
//       <div className="story__grain" aria-hidden="true">
//         <svg>
//           <filter id="noise">
//             <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
//           </filter>
//           <rect width="100%" height="100%" filter="url(#noise)" />
//         </svg>
//       </div>

//       {/* Ambient Particles */}
//       <div className="story__particles" aria-hidden="true">
//         {particles.map(p => (
//           <span
//             key={p.id}
//             className="story__particle"
//             style={{
//               '--size': `${p.size}px`,
//               '--left': `${p.left}%`,
//               '--delay': `${p.delay}s`,
//               '--duration': `${p.duration}s`,
//               '--color': p.color
//             }}
//           />
//         ))}
//       </div>

//       {/* ========== SECTION 1: INTRO ========== */}
//       <section className="story__section story__section--intro">
//         <div className="story__intro-content">
//           <div className="story__deco-line story__deco-line--top" />
//           <h1 className="story__title">
//             <span className="story__title-line story__title-line--1">Where Legends</span>
//             <span className="story__title-line story__title-line--2">Are Forged</span>
//             <span className="story__title-line story__title-line--3 story__title-line--accent">In Fire</span>
//           </h1>
//           <div className="story__deco-line story__deco-line--bottom" />
//           <p className="story__subtitle">An Odyssey Beyond Limits</p>
//         </div>
//         <div className="story__gradient-overlay" />
//       </section>

//       {/* ========== SECTION 2: STORY BEAT ========== */}
//       <section className="story__section story__section--beat">
//         <div className="story__beat-image">
//           <img src="/img/HighresScreenshot00001.webp" alt="Scenic vista" loading="lazy" />
//         </div>
//         <div className="story__beat-overlay" />
//         <div className="story__beat-text">
//           <span className="story__beat-caption">Chapter One</span>
//           <h3>The sun sets on paradise, but for some, the night is just beginning.</h3>
//           <p>In the neon-drenched streets where dreams collide with destiny, every corner holds a story waiting to unfold. This is where ambition meets reality.</p>
//         </div>
//       </section>

//       {/* ========== SECTION 3: CHARACTER ========== */}
//       <section className="story__section story__section--character">
//         <div className="story__character-image">
//           <img src="/img/HighresScreenshot00003.webp" alt="Character portrait" loading="lazy" />
//         </div>
//         <div className="story__character-overlay" />
//         <div className="story__character-content">
//           <span className="story__character-label">Meet the Protagonist</span>
//           <h2 className="story__character-name">
//             <span className="story__character-name-prefix">The</span>
//             <span className="story__character-name-main">Champion</span>
//           </h2>
//           <blockquote className="story__character-quote">
//             "Every empire was built by someone who refused to quit."
//           </blockquote>
//           <p className="story__character-desc">
//             Rising from nothing to command everything. A story of grit, ambition, and the relentless pursuit of power in a world that takes no prisoners.
//           </p>
//         </div>
//         <div className="story__floating-image story__floating-image--1" data-parallax="1.2">
//           <img src="/img/HighresScreenshot00005.webp" alt="Action shot" loading="lazy" />
//         </div>
//         <div className="story__floating-image story__floating-image--2" data-parallax="0.8">
//           <img src="/img/HighresScreenshot00007.webp" alt="Detail shot" loading="lazy" />
//         </div>
//       </section>

//       {/* ========== SECTION 4: GALLERY ========== */}
//       <section className="story__section story__section--gallery">
//         <div className="story__gallery-header">
//           <h2 className="story__gallery-title">Moments Captured</h2>
//           <p className="story__gallery-subtitle">A glimpse into the chaos</p>
//         </div>
//         <div className="story__gallery-grid">
//           <div className="story__gallery-item">
//             <img src="/img/HighresScreenshot00001.webp" alt="Gallery 1" loading="lazy" />
//             <span className="story__gallery-number">01</span>
//             <div className="story__gallery-shine" />
//           </div>
//           <div className="story__gallery-item">
//             <img src="/img/HighresScreenshot00003.webp" alt="Gallery 2" loading="lazy" />
//             <span className="story__gallery-number">02</span>
//             <div className="story__gallery-shine" />
//           </div>
//           <div className="story__gallery-item">
//             <img src="/img/HighresScreenshot00005.webp" alt="Gallery 3" loading="lazy" />
//             <span className="story__gallery-number">03</span>
//             <div className="story__gallery-shine" />
//           </div>
//           <div className="story__gallery-item">
//             <img src="/img/HighresScreenshot00007.webp" alt="Gallery 4" loading="lazy" />
//             <span className="story__gallery-number">04</span>
//             <div className="story__gallery-shine" />
//           </div>
//         </div>
//       </section>

//       {/* ========== SECTION 5: FINALE ========== */}
//       <section className="story__section story__section--finale">
//         <div className="story__finale-image">
//           <img src="/img/HighresScreenshot00001.webp" alt="Epic vista" loading="lazy" />
//         </div>
//         <div className="story__finale-overlay" />
//         <div className="story__finale-vignette" />
//         <div className="story__finale-content">
//           <div className="story__finale-accent" />
//           <h2 className="story__finale-title">
//             <span className="story__finale-title-line story__finale-title-line--1">The Journey</span>
//             <span className="story__finale-title-line story__finale-title-line--2">Continues</span>
//           </h2>
//           <p className="story__finale-subtitle">Your legacy awaits</p>
//         </div>
//         <div className="story__finale-fade" />
//       </section>
//     </div>
//   );
// };

// export default Story;

//3

// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './Story.css';

// gsap.registerPlugin(ScrollTrigger);

// const Story = () => {
//   const sectionRef = useRef(null);
//   const contentRef = useRef(null);
//   const textDimRef = useRef(null);
//   const textBrightRef = useRef(null);
//   const textGlowRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const content = contentRef.current;
//     const textDim = textDimRef.current;
//     const textBright = textBrightRef.current;
//     const textGlow = textGlowRef.current;
//     const container = containerRef.current;

//     // Initial states
//     gsap.set(content, { opacity: 1 });
//     gsap.set(container, { scale: 1, opacity: 1 });

//     // Function to update radial masks (similar to Hero component)
//     function updateRadialMasks(progress) {
//       let circleY, circleSize;
      
//       if (progress <= 0.45) {
//         // Circle moves from bottom to center
//         const p = progress / 0.45;
//         circleY = 120 - (p * 70); // Start from 120% (below), move to 50% (center)
//         circleSize = p * 180;
//       } else if (progress <= 0.55) {
//         // Hold at center
//         circleY = 50;
//         circleSize = 180;
//       } else {
//         // Circle moves up and shrinks
//         const p = (progress - 0.55) / 0.45;
//         circleY = 50 - (p * 100); // Move from center to top
//         circleSize = 180 - (p * 180);
//       }

//       // Bright text mask - solid reveal
//       const brightMask = `radial-gradient(circle at 50% ${circleY}%, black 0%, black ${circleSize}%, transparent ${circleSize}%)`;
      
//       // Glow mask - ring effect around the edge
//       const glowInner = Math.max(0, circleSize - 30);
//       const glowOuter = circleSize + 15;
//       const glowMask = `radial-gradient(circle at 50% ${circleY}%, transparent 0%, transparent ${glowInner}%, black ${circleSize}%, transparent ${glowOuter}%)`;

//       if (textBright) {
//         textBright.style.webkitMaskImage = brightMask;
//         textBright.style.maskImage = brightMask;
//       }
//       if (textGlow) {
//         textGlow.style.webkitMaskImage = glowMask;
//         textGlow.style.maskImage = glowMask;
//       }
//     }

//     // Initialize masks
//     updateRadialMasks(0);

//     // Create ScrollTrigger for the radial mask animation
//     ScrollTrigger.create({
//       trigger: section,
//       start: 'top top',
//       end: 'bottom bottom',
//       scrub: 1,
//       pin: content,
//       pinSpacing: false,
//       onUpdate: (self) => {
//         const scrollProgress = self.progress;

//         // Phase 1: Reveal (0 - 0.4)
//         if (scrollProgress < 0.4) {
//           const revealProgress = scrollProgress / 0.4;
//           updateRadialMasks(revealProgress * 0.5); // 0 to 0.5 of mask progress
          
//           // Fade out dim layer as reveal progresses
//           if (textDim) {
//             textDim.style.opacity = String(1 - (revealProgress * 0.7));
//           }
          
//           // Reset container
//           gsap.set(container, { scale: 1, opacity: 1 });
//         }
//         // Phase 2: Hold & Color Change (0.4 - 0.6)
//         else if (scrollProgress >= 0.4 && scrollProgress < 0.6) {
//           const holdProgress = (scrollProgress - 0.4) / 0.2;
//           updateRadialMasks(0.5 + (holdProgress * 0.1)); // Hold near center
          
//           if (textDim) {
//             textDim.style.opacity = String(0.3 - (holdProgress * 0.3));
//           }
          
//           gsap.set(container, { scale: 1, opacity: 1 });
//         }
//         // Phase 3: Shrink & Exit (0.6 - 1.0)
//         else {
//           const exitProgress = (scrollProgress - 0.6) / 0.4;
//           updateRadialMasks(0.6 + (exitProgress * 0.4)); // Complete the mask animation
          
//           if (textDim) {
//             textDim.style.opacity = '0';
//           }
          
//           // Scale down and fade out
//           const scale = 1 - (exitProgress * 0.6);
//           const opacity = 1 - (exitProgress * 1.2);
          
//           gsap.set(container, { 
//             scale: Math.max(0.4, scale), 
//             opacity: Math.max(0, opacity)
//           });
//         }
//       }
//     });

//     // Cleanup
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <section className="story-section" ref={sectionRef}>
//       <div className="story-content" ref={contentRef}>
//         <div className="story-container" ref={containerRef}>
//           {/* Dim layer - always visible, fades out */}
//           <div className="story-text-layer story-text-dim" ref={textDimRef}>
//             <h2 className="story-title">Vice City, USA.</h2>
//             <p className="story-paragraph">
//               Jason and Lucia have always known the deck is stacked against
//               them. But when an easy score goes wrong, they find themselves
//               on the darkest side of the sunniest place in America, in the
//               middle of a criminal conspiracy stretching across the state of
//               Leonida — forced to rely on each other more than ever if they
//               want to make it out alive.
//             </p>
//           </div>

//           {/* Bright layer - revealed by radial mask */}
//           <div className="story-text-layer story-text-bright" ref={textBrightRef}>
//             <h2 className="story-title">Vice City, USA.</h2>
//             <p className="story-paragraph">
//               Jason and Lucia have always known the deck is stacked against
//               them. But when an easy score goes wrong, they find themselves
//               on the darkest side of the sunniest place in America, in the
//               middle of a criminal conspiracy stretching across the state of
//               Leonida — forced to rely on each other more than ever if they
//               want to make it out alive.
//             </p>
//           </div>

//           {/* Glow layer - glowing edge effect */}
//           <div className="story-text-layer story-text-glow" ref={textGlowRef}>
//             <h2 className="story-title">Vice City, USA.</h2>
//             <p className="story-paragraph">
//               Jason and Lucia have always known the deck is stacked against
//               them. But when an easy score goes wrong, they find themselves
//               on the darkest side of the sunniest place in America, in the
//               middle of a criminal conspiracy stretching across the state of
//               Leonida — forced to rely on each other more than ever if they
//               want to make it out alive.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Story;


// 4
