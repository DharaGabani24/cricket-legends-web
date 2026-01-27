// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import './hero.css';

// // Import your background image - adjust path as needed
// // import heroBg from '../assets/stadium-hero.jpg';

// const Hero = ({ backgroundImage = '/img/cric2.jpg' }) => {
//   const heroRef = useRef(null);
//   const stickyRef = useRef(null);
//   const bgImageRef = useRef(null);
//   const overlayRef = useRef(null);
//   const textWrapperRef = useRef(null);
//   const releaseRef = useRef(null);
//   const scrollIndicatorRef = useRef(null);
//   const rafRef = useRef(null);
  
//   const [currentPhase, setCurrentPhase] = useState(1);
//   const [scrollProgress, setScrollProgress] = useState(0);
  
//   // Configuration
//   const config = {
//     phases: {
//       1: { start: 0, end: 0.15 },
//       2: { start: 0.15, end: 0.45 },
//       3: { start: 0.45, end: 0.70 },
//       4: { start: 0.70, end: 1.0 }
//     },
//     maxScale: 2.5,
//     minScale: 0.25,
//     maxOverlay: 0.95,
//     parallaxStrength: 0.3
//   };
  
//   // Calculate scroll progress
//   const calculateProgress = useCallback(() => {
//     if (!heroRef.current) return 0;
    
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     const heroTop = heroRef.current.offsetTop;
//     const heroHeight = heroRef.current.offsetHeight;
//     const windowHeight = window.innerHeight;
//     const scrollableDistance = heroHeight - windowHeight;
    
//     if (scrollTop < heroTop) return 0;
//     if (scrollTop > heroTop + scrollableDistance) return 1;
    
//     return (scrollTop - heroTop) / scrollableDistance;
//   }, []);
  
//   // Determine phase from progress
//   const getPhase = useCallback((progress) => {
//     const { phases } = config;
//     if (progress >= phases[4].start) return 4;
//     if (progress >= phases[3].start) return 3;
//     if (progress >= phases[2].start) return 2;
//     return 1;
//   }, []);
  
//   // Update animations based on progress
//   const updateAnimations = useCallback((progress) => {
//     const { phases, maxScale, minScale, maxOverlay, parallaxStrength } = config;
    
//     const bgImage = bgImageRef.current;
//     const overlay = overlayRef.current;
//     const textWrapper = textWrapperRef.current;
    
//     // ========================================
//     // PHASE 1: Initial State (0% - 15%)
//     // ========================================
//     if (progress < phases[2].start) {
//       const phaseProgress = progress / phases[2].start;
      
//       if (bgImage) {
//         const parallax = phaseProgress * 20 * parallaxStrength;
//         bgImage.style.transform = `scale(1.1) translateY(${parallax}px)`;
//         bgImage.style.filter = 'saturate(1) brightness(1)';
//       }
      
//       if (textWrapper) {
//         textWrapper.style.transform = 'scale(1)';
//         textWrapper.style.opacity = 0.1 + (phaseProgress * 0.2);
//       }
      
//       if (overlay) {
//         overlay.style.opacity = '0';
//       }
//     }
    
//     // ========================================
//     // PHASE 2: Text Reveal with Zoom (15% - 45%)
//     // ========================================
//     else if (progress < phases[3].start) {
//       const phaseStart = phases[2].start;
//       const phaseEnd = phases[3].start;
//       const phaseProgress = (progress - phaseStart) / (phaseEnd - phaseStart);
      
//       const scale = 1 + (phaseProgress * (maxScale - 1));
//       if (textWrapper) {
//         textWrapper.style.transform = `scale(${scale})`;
//         textWrapper.style.opacity = 0.3 + (phaseProgress * 0.7);
//       }
      
//       if (bgImage) {
//         const bgScale = 1.1 + (phaseProgress * 0.2);
//         const saturation = 1 - (phaseProgress * 0.5);
//         const brightness = 1 - (phaseProgress * 0.3);
//         bgImage.style.transform = `scale(${bgScale})`;
//         bgImage.style.filter = `saturate(${saturation}) brightness(${brightness})`;
//       }
      
//       if (overlay) {
//         overlay.style.opacity = (phaseProgress * 0.6).toString();
//       }
//     }
    
//     // ========================================
//     // PHASE 3: Text Shrinks (45% - 70%)
//     // ========================================
//     else if (progress < phases[4].start) {
//       const phaseStart = phases[3].start;
//       const phaseEnd = phases[4].start;
//       const phaseProgress = (progress - phaseStart) / (phaseEnd - phaseStart);
      
//       const scale = maxScale - (phaseProgress * (maxScale - 0.4));
//       const translateY = phaseProgress * -30;
      
//       if (textWrapper) {
//         textWrapper.style.transform = `scale(${scale}) translateY(${translateY}%)`;
//         textWrapper.style.opacity = (1 - (phaseProgress * 0.3)).toString();
//       }
      
//       if (bgImage) {
//         const saturation = 0.5 - (phaseProgress * 0.4);
//         const brightness = 0.7 - (phaseProgress * 0.4);
//         bgImage.style.filter = `saturate(${saturation}) brightness(${brightness})`;
//       }
      
//       if (overlay) {
//         overlay.style.opacity = (0.6 + (phaseProgress * 0.3)).toString();
//       }
//     }
    
//     // ========================================
//     // PHASE 4: Release Date (70% - 100%)
//     // ========================================
//     else {
//       const phaseStart = phases[4].start;
//       const phaseEnd = 1;
//       const phaseProgress = (progress - phaseStart) / (phaseEnd - phaseStart);
      
//       const scale = 0.4 - (phaseProgress * (0.4 - minScale));
//       const translateY = -30 - (phaseProgress * 40);
      
//       if (textWrapper) {
//         textWrapper.style.transform = `scale(${scale}) translateY(${translateY}%)`;
//         textWrapper.style.opacity = (0.7 - (phaseProgress * 0.5)).toString();
//       }
      
//       if (bgImage) {
//         bgImage.style.filter = 'saturate(0.1) brightness(0.2)';
//       }
      
//       if (overlay) {
//         overlay.style.opacity = maxOverlay.toString();
//       }
//     }
//   }, []);
  
//   // Animation loop
//   const animate = useCallback(() => {
//     const progress = calculateProgress();
//     setScrollProgress(progress);
    
//     const newPhase = getPhase(progress);
//     if (newPhase !== currentPhase) {
//       setCurrentPhase(newPhase);
//     }
    
//     updateAnimations(progress);
//     rafRef.current = requestAnimationFrame(animate);
//   }, [calculateProgress, getPhase, updateAnimations, currentPhase]);
  
//   // Setup and cleanup
//   useEffect(() => {
//     rafRef.current = requestAnimationFrame(animate);
    
//     return () => {
//       if (rafRef.current) {
//         cancelAnimationFrame(rafRef.current);
//       }
//     };
//   }, [animate]);
  
//   // Determine visibility states
//   const isReleaseVisible = currentPhase === 4;
//   const isScrollIndicatorHidden = currentPhase >= 3;
  
//   return (
//     <section 
//       className="hero" 
//       ref={heroRef}
//       data-phase={currentPhase}
//     >
//       <div className="hero__sticky" ref={stickyRef}>
//         {/* Background */}
//         <div className="hero__bg">
//           <img
//             ref={bgImageRef}
//             className="hero__bg-image"
//             src={backgroundImage}
//             alt="Cricket Stadium"
//           />
//         </div>
        
//         {/* Dark Overlay */}
//         <div 
//           className="hero__overlay" 
//           ref={overlayRef}
//         />
        
//         {/* Mask Container for letter effects */}
//         <div className="hero__mask-container">
//           <div className="hero__letter-mask hero__letter-mask--top-left" />
//           <div className="hero__letter-mask hero__letter-mask--top-right" />
//           <div className="hero__letter-mask hero__letter-mask--bottom-left" />
//           <div className="hero__letter-mask hero__letter-mask--bottom-right" />
//           <div className="hero__letter-mask hero__letter-mask--center-left" />
//           <div className="hero__letter-mask hero__letter-mask--center-right" />
//         </div>
        
//         {/* Main Text */}
//         <div className="hero__text-container">
//           <div 
//             className="hero__text-wrapper"
//             ref={textWrapperRef}
//             style={{
//               '--hero-bg-url': `url(${backgroundImage})`
//             }}
//           >
//             <span 
//               className="hero__text-line hero__text-line--cricket"
//               style={{ backgroundImage: `url(${backgroundImage})` }}
//             >
//               CRICKET
//             </span>
//             <span 
//               className="hero__text-line hero__text-line--legends"
//               style={{ backgroundImage: `url(${backgroundImage})` }}
//             >
//               LEGENDS
//             </span>
//           </div>
//         </div>
        
//         {/* Release Date */}
//         <div 
//           className={`hero__release ${isReleaseVisible ? 'hero__release--visible' : ''}`}
//           ref={releaseRef}
//         >
//           <div className="hero__release-title">
//             CRICKET LEGENDS
//           </div>
//           <div className="hero__release-coming">
//             COMING
//           </div>
//           <div className="hero__release-date">
//             NOVEMBER 19
//           </div>
//           <div className="hero__release-year">
//             2026
//           </div>
//           <div className="hero__platforms">
//             <span className="hero__platform">PS5</span>
//             <span className="hero__platform">XBOX SERIES X|S</span>
//             <span className="hero__platform">PC</span>
//           </div>
//         </div>
        
//         {/* Scroll Indicator */}
//         <div 
//           className={`hero__scroll-indicator ${isScrollIndicatorHidden ? 'hero__scroll-indicator--hidden' : ''}`}
//           ref={scrollIndicatorRef}
//         >
//           <span className="hero__scroll-text">SCROLL</span>
//           <div className="hero__scroll-arrow" />
//         </div>
        
//         {/* Cinematic Bars */}
//         <div className="hero__cinematic-bar hero__cinematic-bar--top" />
//         <div className="hero__cinematic-bar hero__cinematic-bar--bottom" />
//       </div>
//     </section>
//   );
// };

// export default Hero;
//design 5 - REAL FIX: Mask stays at scale ≥1.0, only filled text shrinks
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const overlayRef = useRef(null);
  const releaseInfoRef = useRef(null);
  
  // SEPARATE refs for masked and filled versions
  const maskedGroupRef = useRef(null);  // Contains the mask - scales from 20 to 1.0 only
  const filledGroupRef = useRef(null);  // Contains white text - scales from 1.0 to 0.3

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const hero = heroRef.current;
      const scrollIndicator = scrollIndicatorRef.current;
      const overlay = overlayRef.current;
      const releaseInfo = releaseInfoRef.current;
      const maskedGroup = maskedGroupRef.current;
      const filledGroup = filledGroupRef.current;
      const imageWrapper = imageWrapperRef.current;

      // Initial states
      gsap.set(maskedGroup, { 
        scale: 20, 
        opacity: 1,
        y: 0
      });
      
      gsap.set(filledGroup, { 
        scale: 1.0, 
        opacity: 0,  // Hidden initially
        y: 0
      });
      
      gsap.set(overlay, { opacity: 0 });
      gsap.set(releaseInfo, { opacity: 0, visibility: 'hidden' });
      gsap.set(imageWrapper, { filter: 'brightness(1)' });

      // Master timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: '80% top',
          scrub: 0.5,
          pin: false,
        }
      });

      // ============================================
      // PHASE 1-4: MASKED TEXT zooms out (0% - 45%)
      // Mask NEVER goes below scale 1.0
      // ============================================
      tl.to(maskedGroup, {
        scale: 15,
        duration: 0.05,
        ease: 'none'
      }, 0);

      tl.to(maskedGroup, {
        scale: 6,
        duration: 0.13,
        ease: 'none'
      }, 0.05);

      tl.to(maskedGroup, {
        scale: 2.5,
        duration: 0.14,
        ease: 'none'
      }, 0.18);

      tl.to(maskedGroup, {
        scale: 1.0,  // Stop at 1.0 - NEVER smaller!
        duration: 0.13,
        ease: 'none'
      }, 0.32);

      // ============================================
      // PHASE 5: Image brightens (43% - 47%)
      // ============================================
      tl.to(imageWrapper, {
        filter: 'brightness(2)',
        duration: 0.04,
        ease: 'none'
      }, 0.43);

      // ============================================
      // PHASE 6: Dark overlay fades in (45% - 52%)
      // ============================================
      tl.to(overlay, {
        opacity: 1,
        duration: 0.07,
        ease: 'none'
      }, 0.45);

      // Reset brightness (hidden by overlay now)
      tl.to(imageWrapper, {
        filter: 'brightness(1)',
        duration: 0.04,
        ease: 'none'
      }, 0.48);

      // ============================================
      // PHASE 7: SWAP at 52% (overlay is 100%)
      // Mask fades out, filled text fades in
      // ============================================
      tl.to(maskedGroup, {
        opacity: 0,
        duration: 0.01,
        ease: 'none'
      }, 0.52);

      tl.to(filledGroup, {
        opacity: 1,
        duration: 0.01,
        ease: 'none'
      }, 0.52);

      // ============================================
      // PHASE 8: NOW filled text shrinks (53% - 75%)
      // Only the white filled text animates from here
      // ============================================
      tl.to(filledGroup, {
        scale: 0.5,
        y: -80,
        duration: 0.22,
        ease: 'none'
      }, 0.53);

      // ============================================
      // PHASE 9: Move to final position (75% - 82%)
      // ============================================
      tl.to(filledGroup, {
        scale: 0.30,
        y: -280,
        duration: 0.07,
        ease: 'none'
      }, 0.75);

      // ============================================
      // PHASE 10: Release info appears (82% - 100%)
      // ============================================
      tl.set(releaseInfo, { visibility: 'visible' }, 0.82);
      
      tl.to(releaseInfo, {
        opacity: 1,
        duration: 0.03,
        ease: 'none'
      }, 0.82);

      tl.fromTo('.hero__coming',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.03, ease: 'none' },
        0.85
      );

      tl.fromTo('.hero__date-month',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.03, ease: 'none' },
        0.88
      );

      tl.fromTo('.hero__date-year',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.03, ease: 'none' },
        0.91
      );

      tl.fromTo('.hero__platforms',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.03, ease: 'none' },
        0.95
      );

      // Scroll indicator fades out
      tl.to(scrollIndicator, {
        opacity: 0,
        duration: 0.03,
        ease: 'none'
      }, 0);

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero" id="home">
      <div ref={containerRef} className="hero__container">
        
        {/* Background image */}
        <div ref={imageWrapperRef} className="hero__image">
          <img 
            ref={imageRef} 
            src={process.env.PUBLIC_URL + '/img/cric4.webp'} 
            alt="Cricket Stadium" 
          />
        </div>

        {/* Dark overlay */}
        <div ref={overlayRef} className="hero__overlay"></div>

        {/* MASKED VERSION - scales from 20 to 1.0 only */}
        <div className="hero__mask-container">
          <svg 
            className="hero__mask-svg" 
            viewBox="0 0 1920 1080" 
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <mask id="textMask">
                <rect width="100%" height="100%" fill="white" />
                <text 
                  x="960" y="440" 
                  textAnchor="middle" 
                  dominantBaseline="auto"
                  fill="black"
                  fontFamily="'Bungee', sans-serif"
                  fontSize="220"
                  fontWeight="400"
                  letterSpacing="0.02em"
                >CRICKET</text>
                <text 
                  x="960" y="660" 
                  textAnchor="middle" 
                  dominantBaseline="auto"
                  fill="black"
                  fontFamily="'Bungee', sans-serif"
                  fontSize="220"
                  fontWeight="400"
                  letterSpacing="0.02em"
                >LEGENDS</text>
              </mask>
            </defs>
            
            {/* Masked group - ONLY scales to 1.0, never smaller */}
            <g ref={maskedGroupRef} style={{ transformOrigin: '960px 540px' }}>
              <rect 
                width="1920" 
                height="1080" 
                fill="#0a0a0a" 
                mask="url(#textMask)"
              />
            </g>
          </svg>
        </div>

        {/* FILLED VERSION - starts at scale 1.0, shrinks to 0.3 */}
        <div className="hero__filled-container">
          <svg 
            className="hero__filled-svg" 
            viewBox="0 0 1920 1080" 
            preserveAspectRatio="xMidYMid slice"
          >
            <g ref={filledGroupRef} style={{ transformOrigin: '960px 540px' }}>
              <text 
                x="960" y="440" 
                textAnchor="middle" 
                dominantBaseline="auto"
                fill="rgba(255, 255, 255, 0.95)"
                fontFamily="'Bungee', sans-serif"
                fontSize="220"
                fontWeight="400"
                letterSpacing="0.02em"
              >CRICKET</text>
              <text 
                x="960" y="660" 
                textAnchor="middle" 
                dominantBaseline="auto"
                fill="rgba(255, 255, 255, 0.95)"
                fontFamily="'Bungee', sans-serif"
                fontSize="220"
                fontWeight="400"
                letterSpacing="0.02em"
              >LEGENDS</text>
            </g>
          </svg>
        </div>

        {/* Release info */}
        <div ref={releaseInfoRef} className="hero__release-info">
          <div className="hero__coming">COMING</div>
          <div className="hero__date">
            <span className="hero__date-month">NOVEMBER 19</span>
            <span className="hero__date-year">2026</span>
          </div>
          <div className="hero__platforms">
            <span className="hero__platform">
              <svg viewBox="0 0 24 24" className="hero__platform-icon">
                <path fill="currentColor" d="M8.985 2.596v17.548l3.915 1.261V6.688c0-.69.304-1.151.794-.991.636.181.76.814.76 1.505v5.876c2.441 1.193 4.362-.002 4.362-3.153 0-3.93-1.353-5.874-5.931-5.33"/>
              </svg>
              PS5
            </span>
            <span className="hero__platform">
              <svg viewBox="0 0 24 24" className="hero__platform-icon">
                <path fill="currentColor" d="M4.102 21.033A2.105 2.105 0 0 1 2 18.932V5.068a2.105 2.105 0 0 1 2.102-2.101h15.796A2.105 2.105 0 0 1 22 5.068v13.864a2.105 2.105 0 0 1-2.102 2.101H4.102zM12 9.242a2.757 2.757 0 1 0 0 5.516 2.757 2.757 0 0 0 0-5.516z"/>
              </svg>
              XBOX SERIES X|S
            </span>
            <span className="hero__platform">
              <svg viewBox="0 0 24 24" className="hero__platform-icon">
                <path fill="currentColor" d="M20 18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
              </svg>
              PC
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div ref={scrollIndicatorRef} className="hero__scroll">
          <div className="hero__scroll-icon"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
