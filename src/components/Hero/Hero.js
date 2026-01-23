

// //design 5 //
// import React, { useRef, useLayoutEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './Hero.css';

// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//   const heroRef = useRef(null);
//   const containerRef = useRef(null);
//   const imageRef = useRef(null);
//   const maskGroupRef = useRef(null);
//   const scrollIndicatorRef = useRef(null);
//   const overlayRef = useRef(null);
//   const whiteFadeRef = useRef(null);
//   const releaseInfoRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const hero = heroRef.current;
//       const maskGroup = maskGroupRef.current;
//       const scrollIndicator = scrollIndicatorRef.current;
//       const image = imageRef.current;
//       const overlay = overlayRef.current;
//       const whiteFade = whiteFadeRef.current;
//       const releaseInfo = releaseInfoRef.current;

//       // Initial states
//       gsap.set(maskGroup, { 
//         scale: 20, 
//         opacity: 0,
//       });
      
//       gsap.set(overlay, { opacity: 0 });
//       gsap.set(whiteFade, { opacity: 0 });
//       gsap.set(releaseInfo, { opacity: 0, visibility: 'hidden' });

//       // Master timeline
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: hero,
//           start: 'top top',
//           end: '80% top',
//           scrub: 0.5,
//           pin: false,
//         }
//       });

//       // ============================================
//       // PHASE 1: Mask appears, very zoomed in (0% - 5%)
//       // ============================================
//       tl.to(maskGroup, {
//         opacity: 1,
//         scale: 15,
//         duration: 0.05,
//         ease: 'none'
//       }, 0);

//       // ============================================
//       // PHASE 2: Zoom out - letters recognizable (5% - 20%)
//       // ============================================
//       tl.to(maskGroup, {
//         scale: 6,
//         duration: 0.15,
//         ease: 'none'
//       }, 0.05);

//       // ============================================
//       // PHASE 3: Continue zoom out - text readable (20% - 35%)
//       // ============================================
//       tl.to(maskGroup, {
//         scale: 2.8,
//         duration: 0.15,
//         ease: 'none'
//       }, 0.2);

//       // ============================================
//       // PHASE 4: Text at comfortable size (35% - 42%)
//       // ============================================
//       tl.to(maskGroup, {
//         scale: 1.8,
//         duration: 0.07,
//         ease: 'none'
//       }, 0.35);

//       // ============================================
//       // PHASE 5: WHITE FADE BEGINS (40% - 50%)
//       // White fades in OVER image but UNDER mask
//       // This makes the image inside text turn white
//       // ============================================
//       tl.to(whiteFade, {
//         opacity: 0.6,
//         duration: 0.1,
//         ease: 'none'
//       }, 0.40);

//       tl.to(maskGroup, {
//         scale: 1.4,
//         duration: 0.1,
//         ease: 'none'
//       }, 0.42);

//       // ============================================
//       // PHASE 6: White intensifies - text looks solid (48% - 55%)
//       // ============================================
//       tl.to(whiteFade, {
//         opacity: 0.95,
//         duration: 0.07,
//         ease: 'none'
//       }, 0.48);

//       tl.to(maskGroup, {
//         scale: 1.0,
//         duration: 0.07,
//         ease: 'none'
//       }, 0.48);

//       // ============================================
//       // PHASE 7: Transition - White out, Dark in (55% - 65%)
//       // Text continues shrinking through this transition
//       // ============================================
//       tl.to(whiteFade, {
//         opacity: 0,
//         duration: 0.1,
//         ease: 'none'
//       }, 0.55);

//       tl.to(overlay, {
//         opacity: 1,
//         duration: 0.1,
//         ease: 'none'
//       }, 0.55);

//       tl.to(maskGroup, {
//         scale: 0.65,
//         duration: 0.1,
//         ease: 'none'
//       }, 0.55);

//       // ============================================
//       // PHASE 8: Final shrink and move up (65% - 75%)
//       // ============================================
//       tl.to(maskGroup, {
//         scale: 0.35,
//         y: -120,
//         duration: 0.1,
//         ease: 'none'
//       }, 0.65);

//       // ============================================
//       // PHASE 9: Release info appears (72% - 100%)
//       // ============================================
//       tl.set(releaseInfo, { visibility: 'visible' }, 0.72);
      
//       tl.to(releaseInfo, {
//         opacity: 1,
//         duration: 0.05,
//         ease: 'none'
//       }, 0.72);

//       // "COMING" fades in
//       tl.fromTo('.hero__coming',
//         { opacity: 0, y: 30 },
//         { opacity: 1, y: 0, duration: 0.08, ease: 'none' },
//         0.74
//       );

//       // Date fades in
//       tl.fromTo('.hero__date-month',
//         { opacity: 0, y: 30 },
//         { opacity: 1, y: 0, duration: 0.08, ease: 'none' },
//         0.80
//       );

//       tl.fromTo('.hero__date-year',
//         { opacity: 0, y: 30 },
//         { opacity: 1, y: 0, duration: 0.08, ease: 'none' },
//         0.84
//       );

//       // Platforms fade in
//       tl.fromTo('.hero__platforms',
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 0.08, ease: 'none' },
//         0.92
//       );

//       // Scroll indicator fades out immediately
//       tl.to(scrollIndicator, {
//         opacity: 0,
//         duration: 0.03,
//         ease: 'none'
//       }, 0);

//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={heroRef} className="hero" id="home">
//       <div ref={containerRef} className="hero__container">
        
//         {/* Background image - shows through text holes */}
//         <div className="hero__image">
//           <img 
//             ref={imageRef} 
//             src={process.env.PUBLIC_URL + '/img/cric4.webp'} 
//             alt="Cricket Stadium" 
//           />
//         </div>

//         {/* White fade overlay - fades image to white (sits OVER image, UNDER mask) */}
//         <div ref={whiteFadeRef} className="hero__white-fade"></div>

//         {/* Dark overlay - appears after white fade (sits OVER white, UNDER mask) */}
//         <div ref={overlayRef} className="hero__overlay"></div>

//         {/* SVG Mask - The ONLY text element
//             Black areas block the layers below
//             Text-shaped holes reveal image/white/dark depending on scroll position */}
//         <div className="hero__mask-container">
//           <svg 
//             className="hero__mask-svg" 
//             viewBox="0 0 1920 1080" 
//             preserveAspectRatio="xMidYMid slice"
//           >
//             <defs>
//               <mask id="textMask">
//                 {/* White = show the black rectangle */}
//                 <rect width="100%" height="100%" fill="white" />
//                 {/* Black text = hide the black rectangle = show what's beneath */}
//                 <text 
//                   x="960" 
//                   y="440" 
//                   textAnchor="middle" 
//                   dominantBaseline="auto"
//                   fill="black"
//                   fontFamily="'Bungee', sans-serif"
//                   fontSize="220"
//                   fontWeight="400"
//                   letterSpacing="0.02em"
//                 >
//                   CRICKET
//                 </text>
//                 <text 
//                   x="960" 
//                   y="660" 
//                   textAnchor="middle" 
//                   dominantBaseline="auto"
//                   fill="black"
//                   fontFamily="'Bungee', sans-serif"
//                   fontSize="220"
//                   fontWeight="400"
//                   letterSpacing="0.02em"
//                 >
//                   LEGENDS
//                 </text>
//               </mask>
//             </defs>
            
//             {/* Black rectangle with text-shaped holes */}
//             <g 
//               ref={maskGroupRef} 
//               style={{ transformOrigin: '960px 540px' }}
//             >
//               <rect 
//                 width="1920" 
//                 height="1080" 
//                 fill="#0a0a0a" 
//                 mask="url(#textMask)"
//               />
//             </g>
//           </svg>
//         </div>

//         {/* Release info - appears below the text */}
//         <div ref={releaseInfoRef} className="hero__release-info">
//           <div className="hero__coming">COMING</div>
//           <div className="hero__date">
//             <span className="hero__date-month">NOVEMBER 19</span>
//             <span className="hero__date-year">2026</span>
//           </div>
//           <div className="hero__platforms">
//             <span className="hero__platform">
//               <svg viewBox="0 0 24 24" className="hero__platform-icon">
//                 <path fill="currentColor" d="M8.985 2.596v17.548l3.915 1.261V6.688c0-.69.304-1.151.794-.991.636.181.76.814.76 1.505v5.876c2.441 1.193 4.362-.002 4.362-3.153 0-3.93-1.353-5.874-5.931-5.33"/>
//               </svg>
//               PS5
//             </span>
//             <span className="hero__platform">
//               <svg viewBox="0 0 24 24" className="hero__platform-icon">
//                 <path fill="currentColor" d="M4.102 21.033A2.105 2.105 0 0 1 2 18.932V5.068a2.105 2.105 0 0 1 2.102-2.101h15.796A2.105 2.105 0 0 1 22 5.068v13.864a2.105 2.105 0 0 1-2.102 2.101H4.102zM12 9.242a2.757 2.757 0 1 0 0 5.516 2.757 2.757 0 0 0 0-5.516z"/>
//               </svg>
//               XBOX SERIES X|S
//             </span>
//             <span className="hero__platform">
//               <svg viewBox="0 0 24 24" className="hero__platform-icon">
//                 <path fill="currentColor" d="M20 18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
//               </svg>
//               PC
//             </span>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div ref={scrollIndicatorRef} className="hero__scroll">
//           <div className="hero__scroll-icon"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// // // d6

// import React, { useRef, useLayoutEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './Hero.css';

// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//   const heroRef = useRef(null);
//   const containerRef = useRef(null);
//   const imageRef = useRef(null);
//   const imageWrapperRef = useRef(null);
//   const textGroupRef = useRef(null);
//   const scrollIndicatorRef = useRef(null);
//   const overlayRef = useRef(null);
//   const releaseInfoRef = useRef(null);
//   const maskedRectRef = useRef(null);
//   const filledTextGroupRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const hero = heroRef.current;
//       const textGroup = textGroupRef.current;
//       const scrollIndicator = scrollIndicatorRef.current;
//       const overlay = overlayRef.current;
//       const releaseInfo = releaseInfoRef.current;
//       const maskedRect = maskedRectRef.current;
//       const filledTextGroup = filledTextGroupRef.current;
//       const imageWrapper = imageWrapperRef.current;

//       // Initial states
//       gsap.set(textGroup, { 
//         scale: 20, 
//         opacity: 0,
//         y: 0
//       });
      
//       gsap.set(overlay, { opacity: 0 });
//       gsap.set(releaseInfo, { opacity: 0, visibility: 'hidden' });
//       gsap.set(filledTextGroup, { opacity: 0 });
//       gsap.set(maskedRect, { opacity: 1 });
//       gsap.set(imageWrapper, { filter: 'brightness(1)' });

//       // Master timeline
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: hero,
//           start: 'top top',
//           end: '80% top',
//           scrub: 0.5,
//           pin: false,
//         }
//       });

//       // ============================================
//       // PHASE 1: Text appears, very zoomed in (0% - 5%)
//       // ============================================
//       tl.to(textGroup, {
//         opacity: 1,
//         scale: 15,
//         duration: 0.05,
//         ease: 'none'
//       }, 0);

//       // ============================================
//       // PHASE 2: Zoom out - letters recognizable (5% - 18%)
//       // ============================================
//       tl.to(textGroup, {
//         scale: 6,
//         duration: 0.13,
//         ease: 'none'
//       }, 0.05);

//       // ============================================
//       // PHASE 3: Continue zoom out - text readable (18% - 32%)
//       // ============================================
//       tl.to(textGroup, {
//         scale: 2.5,
//         duration: 0.14,
//         ease: 'none'
//       }, 0.18);

//       // ============================================
//       // PHASE 4: Text shrinks more (32% - 40%)
//       // ============================================
//       tl.to(textGroup, {
//         scale: 1.3,
//         duration: 0.08,
//         ease: 'none'
//       }, 0.32);

//       // ============================================
//       // PHASE 5: Image brightens slightly (38% - 42%)
//       // ============================================
//       tl.to(imageWrapper, {
//         filter: 'brightness(1.8)',
//         duration: 0.04,
//         ease: 'none'
//       }, 0.38);

//       // ============================================
//       // PHASE 6: DARK OVERLAY FADES IN (40% - 46%)
//       // MUST complete well before mask swap
//       // ============================================
//       tl.to(overlay, {
//         opacity: 1,
//         duration: 0.06,
//         ease: 'none'
//       }, 0.40);

//       // Text continues to shrink during overlay fade
//       tl.to(textGroup, {
//         scale: 1.0,
//         duration: 0.06,
//         ease: 'none'
//       }, 0.40);

//       // Reset image brightness (hidden by overlay now)
//       tl.to(imageWrapper, {
//         filter: 'brightness(1)',
//         duration: 0.04,
//         ease: 'none'
//       }, 0.42);

//       // ============================================
//       // PHASE 7: WAIT - Overlay is now 100% (46% - 52%)
//       // Keep mask visible while overlay settles
//       // Text stays at scale 1.0
//       // ============================================

//       // ============================================
//       // PHASE 8: NOW swap text (52%)
//       // Overlay has been 100% for a while now
//       // ============================================
//       tl.to(maskedRect, {
//         opacity: 0,
//         duration: 0.01,
//         ease: 'none'
//       }, 0.52);

//       tl.to(filledTextGroup, {
//         opacity: 1,
//         duration: 0.01,
//         ease: 'none'
//       }, 0.52);

//       // ============================================
//       // PHASE 9: Continuous shrink (53% - 72%)
//       // ============================================
//       tl.to(textGroup, {
//         scale: 0.55,
//         y: -50,
//         duration: 0.19,
//         ease: 'none'
//       }, 0.53);

//       // ============================================
//       // PHASE 10: Move to final position at top (72% - 82%)
//       // ============================================
//       tl.to(textGroup, {
//         scale: 0.30,
//         y: -280,
//         duration: 0.10,
//         ease: 'none'
//       }, 0.72);

//       // ============================================
//       // PHASE 11: Release info appears (82% - 100%)
//       // ============================================
//       tl.set(releaseInfo, { visibility: 'visible' }, 0.82);
      
//       tl.to(releaseInfo, {
//         opacity: 1,
//         duration: 0.03,
//         ease: 'none'
//       }, 0.82);

//       // "COMING" fades in
//       tl.fromTo('.hero__coming',
//         { opacity: 0, y: 15 },
//         { opacity: 1, y: 0, duration: 0.03, ease: 'none' },
//         0.85
//       );

//       // Date fades in
//       tl.fromTo('.hero__date-month',
//         { opacity: 0, y: 15 },
//         { opacity: 1, y: 0, duration: 0.03, ease: 'none' },
//         0.88
//       );

//       tl.fromTo('.hero__date-year',
//         { opacity: 0, y: 15 },
//         { opacity: 1, y: 0, duration: 0.03, ease: 'none' },
//         0.91
//       );

//       // Platforms fade in
//       tl.fromTo('.hero__platforms',
//         { opacity: 0, y: 10 },
//         { opacity: 1, y: 0, duration: 0.03, ease: 'none' },
//         0.95
//       );

//       // Scroll indicator fades out immediately
//       tl.to(scrollIndicator, {
//         opacity: 0,
//         duration: 0.03,
//         ease: 'none'
//       }, 0);

//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={heroRef} className="hero" id="home">
//       <div ref={containerRef} className="hero__container">
        
//         {/* Background image wrapper */}
//         <div ref={imageWrapperRef} className="hero__image">
//           <img 
//             ref={imageRef} 
//             src={process.env.PUBLIC_URL + '/img/cric4.webp'} 
//             alt="Cricket Stadium" 
//           />
//         </div>

//         {/* Dark overlay - MUST be 100% before text swap */}
//         <div ref={overlayRef} className="hero__overlay"></div>

//         {/* SVG with BOTH masked and filled text */}
//         <div className="hero__mask-container">
//           <svg 
//             className="hero__mask-svg" 
//             viewBox="0 0 1920 1080" 
//             preserveAspectRatio="xMidYMid slice"
//           >
//             <defs>
//               {/* Mask for transparent text */}
//               <mask id="textMask">
//                 <rect width="100%" height="100%" fill="white" />
//                 <text 
//                   x="960" 
//                   y="440" 
//                   textAnchor="middle" 
//                   dominantBaseline="auto"
//                   fill="black"
//                   fontFamily="'Bungee', sans-serif"
//                   fontSize="220"
//                   fontWeight="400"
//                   letterSpacing="0.02em"
//                 >
//                   CRICKET
//                 </text>
//                 <text 
//                   x="960" 
//                   y="660" 
//                   textAnchor="middle" 
//                   dominantBaseline="auto"
//                   fill="black"
//                   fontFamily="'Bungee', sans-serif"
//                   fontSize="220"
//                   fontWeight="400"
//                   letterSpacing="0.02em"
//                 >
//                   LEGENDS
//                 </text>
//               </mask>
//             </defs>
            
//             {/* Group that scales/moves together */}
//             <g 
//               ref={textGroupRef} 
//               style={{ transformOrigin: '960px 540px' }}
//             >
//               {/* Masked rectangle - transparent holes with dark frame */}
//               <rect 
//                 ref={maskedRectRef}
//                 width="1920" 
//                 height="1080" 
//                 fill="#0a0a0a" 
//                 mask="url(#textMask)"
//               />
              
//               {/* Filled text - WHITE solid */}
//               <g ref={filledTextGroupRef}>
//                 <text 
//                   x="960" 
//                   y="440" 
//                   textAnchor="middle" 
//                   dominantBaseline="auto"
//                   fill="rgba(255, 255, 255, 0.95)"
//                   fontFamily="'Bungee', sans-serif"
//                   fontSize="220"
//                   fontWeight="400"
//                   letterSpacing="0.02em"
//                 >
//                   CRICKET
//                 </text>
//                 <text 
//                   x="960" 
//                   y="660" 
//                   textAnchor="middle" 
//                   dominantBaseline="auto"
//                   fill="rgba(255, 255, 255, 0.95)"
//                   fontFamily="'Bungee', sans-serif"
//                   fontSize="220"
//                   fontWeight="400"
//                   letterSpacing="0.02em"
//                 >
//                   LEGENDS
//                 </text>
//               </g>
//             </g>
//           </svg>
//         </div>

//         {/* Release info */}
//         <div ref={releaseInfoRef} className="hero__release-info">
//           <div className="hero__coming">COMING</div>
//           <div className="hero__date">
//             <span className="hero__date-month">NOVEMBER 19</span>
//             <span className="hero__date-year">2026</span>
//           </div>
//           <div className="hero__platforms">
//             <span className="hero__platform">
//               <svg viewBox="0 0 24 24" className="hero__platform-icon">
//                 <path fill="currentColor" d="M8.985 2.596v17.548l3.915 1.261V6.688c0-.69.304-1.151.794-.991.636.181.76.814.76 1.505v5.876c2.441 1.193 4.362-.002 4.362-3.153 0-3.93-1.353-5.874-5.931-5.33"/>
//               </svg>
//               PS5
//             </span>
//             <span className="hero__platform">
//               <svg viewBox="0 0 24 24" className="hero__platform-icon">
//                 <path fill="currentColor" d="M4.102 21.033A2.105 2.105 0 0 1 2 18.932V5.068a2.105 2.105 0 0 1 2.102-2.101h15.796A2.105 2.105 0 0 1 22 5.068v13.864a2.105 2.105 0 0 1-2.102 2.101H4.102zM12 9.242a2.757 2.757 0 1 0 0 5.516 2.757 2.757 0 0 0 0-5.516z"/>
//               </svg>
//               XBOX SERIES X|S
//             </span>
//             <span className="hero__platform">
//               <svg viewBox="0 0 24 24" className="hero__platform-icon">
//                 <path fill="currentColor" d="M20 18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
//               </svg>
//               PC
//             </span>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div ref={scrollIndicatorRef} className="hero__scroll">
//           <div className="hero__scroll-icon"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


//new d6 // currently working 

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
  const textGroupRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const overlayRef = useRef(null);
  const whiteFadeRef = useRef(null);  // ADD THIS LINE
  const releaseInfoRef = useRef(null);
  const maskedRectRef = useRef(null);
  const filledTextGroupRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const hero = heroRef.current;
      const textGroup = textGroupRef.current;
      const scrollIndicator = scrollIndicatorRef.current;
      const overlay = overlayRef.current;
      const whiteFade = whiteFadeRef.current;  // ADD THIS LINE
      const releaseInfo = releaseInfoRef.current;
      const maskedRect = maskedRectRef.current;
      const filledTextGroup = filledTextGroupRef.current;
      const imageWrapper = imageWrapperRef.current;

      // Initial states
      gsap.set(textGroup, { 
        scale: 20, 
        opacity: 0,
        y: 0
      });
      
      gsap.set(overlay, { opacity: 0 });
      gsap.set(whiteFade, { opacity: 0 });  // ADD THIS LINE
      gsap.set(releaseInfo, { opacity: 0, visibility: 'hidden' });
      gsap.set(filledTextGroup, { opacity: 0 });
      gsap.set(maskedRect, { opacity: 1 });
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
      // PHASE 1: Text appears, very zoomed in (0% - 5%)
      // ============================================
      tl.to(textGroup, {
        opacity: 1,
        scale: 15,
        duration: 0.05,
        ease: 'none'
      }, 0);

      // ============================================
      // PHASE 2: Zoom out - letters recognizable (5% - 18%)
      // ============================================
      tl.to(textGroup, {
        scale: 6,
        duration: 0.13,
        ease: 'none'
      }, 0.05);

      // ============================================
      // PHASE 3: Continue zoom out - text readable (18% - 32%)
      // ============================================
      tl.to(textGroup, {
        scale: 2.5,
        duration: 0.14,
        ease: 'none'
      }, 0.18);

      // ============================================
      // PHASE 4: Text shrinks more (32% - 40%)
      // ============================================
      tl.to(textGroup, {
        scale: 1.3,
        duration: 0.08,
        ease: 'none'
      }, 0.32);

      // ============================================
      // PHASE 5: Image brightens slightly (38% - 42%)
      // ============================================
      // tl.to(imageWrapper, {
      //   filter: 'brightness(1.8)',
      //   duration: 0.04,
      //   ease: 'none'
      // }, 0.38);

      tl.to(whiteFade, {
        opacity: 1,
        duration: 0.30,
        ease: 'power2.in'
      }, 0.10);

      // ============================================
      // PHASE 6: DARK OVERLAY FADES IN (40% - 46%)
      // MUST complete well before mask swap
      // ============================================
      // tl.to(overlay, {
      //   opacity: 1,
      //   duration: 0.06,
      //   ease: 'none'
      // }, 0.40);

      // tl.to(textGroup, {
      //   scale: 1.0,
      //   duration: 0.06,
      //   ease: 'none'
      // }, 0.40);

      
      // tl.to(whiteFade, {
      //   opacity: 1,
      //   duration: 0.04,
      //   ease: 'none'
      // }, 0.42);

      tl.to(maskedRect, {
        opacity: 0,
        duration: 0.01,
        ease: 'none'
      }, 0.40);
      
      tl.to(filledTextGroup, {
        opacity: 1,
        duration: 0.01,
        ease: 'none'
      }, 0.40);

    
      // ============================================
      // PHASE 7: Dark overlay fades in (40% - 48%)
      // ============================================
      tl.to(overlay, {
        opacity: 1,
        duration: 0.08,
        ease: 'none'
      }, 0.40);

      // Text shrinks to 1.0 during overlay fade
      tl.to(textGroup, {
        scale: 1.0,
        duration: 0.08,
        ease: 'none'
      }, 0.40);

      // White fades out (now behind solid text, so invisible)
      tl.to(whiteFade, {
        opacity: 0,
        duration: 0.08,
        ease: 'none'
      }, 0.40);
      // ============================================
      // PHASE 8: NOW swap text (52%)
      // Overlay has been 100% for a while now
      // ============================================
      // tl.to(maskedRect, {
      //   opacity: 0,
      //   duration: 0.01,
      //   ease: 'none'
      // }, 0.52);

      // tl.to(filledTextGroup, {
      //   opacity: 1,
      //   duration: 0.01,
      //   ease: 'none'
      // }, 0.52);

      tl.to(textGroup, {
        scale: 0.55,
        y: -50,
        duration: 0.22,
        ease: 'none'
      }, 0.48);
      // ============================================
      // PHASE 9: Continuous shrink (53% - 72%)
      // ============================================
      // tl.to(textGroup, {
      //   scale: 0.55,
      //   y: -50,
      //   duration: 0.19,
      //   ease: 'none'
      // }, 0.53);

      tl.to(textGroup, {
        scale: 0.30,
        y: -280,
        duration: 0.10,
        ease: 'none'
      }, 0.70);
      // ============================================
      // PHASE 10: Move to final position at top (72% - 82%)
      // ============================================
      // tl.to(textGroup, {
      //   scale: 0.30,
      //   y: -280,
      //   duration: 0.10,
      //   ease: 'none'
      // }, 0.72);

      // ============================================
      // PHASE 11: Release info appears (82% - 100%)
      // ============================================
      tl.set(releaseInfo, { visibility: 'visible' }, 0.82);
      
      tl.to(releaseInfo, {
        opacity: 1,
        duration: 0.03,
        ease: 'none'
      }, 0.82);

      // "COMING" fades in
      tl.fromTo('.hero__coming',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.03, ease: 'none' },
        0.85
      );

      // Date fades in
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

      // Platforms fade in
      tl.fromTo('.hero__platforms',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.03, ease: 'none' },
        0.95
      );

      // Scroll indicator fades out immediately
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
        
        {/* Background image wrapper */}
        <div ref={imageWrapperRef} className="hero__image">
          <img 
            ref={imageRef} 
            src={process.env.PUBLIC_URL + '/img/cric4.webp'} 
            alt="Cricket Stadium" 
          />
        </div>

        {/* ADD THIS - White fade shows through text holes */}
      <div ref={whiteFadeRef} className="hero__white-fade"></div>

        {/* Dark overlay - MUST be 100% before text swap */}
        <div ref={overlayRef} className="hero__overlay"></div>

        {/* SVG with BOTH masked and filled text */}
        <div className="hero__mask-container">
          <svg 
            className="hero__mask-svg" 
            viewBox="0 0 1920 1080" 
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Mask for transparent text */}
              <mask id="textMask">
                <rect width="100%" height="100%" fill="white" />
                <text 
                  x="960" 
                  y="440" 
                  textAnchor="middle" 
                  dominantBaseline="auto"
                  fill="black"
                  fontFamily="'Bungee', sans-serif"
                  fontSize="220"
                  fontWeight="400"
                  letterSpacing="0.02em"
                >
                  CRICKET
                </text>
                <text 
                  x="960" 
                  y="660" 
                  textAnchor="middle" 
                  dominantBaseline="auto"
                  fill="black"
                  fontFamily="'Bungee', sans-serif"
                  fontSize="220"
                  fontWeight="400"
                  letterSpacing="0.02em"
                >
                  LEGENDS
                </text>
              </mask>
            </defs>
            
            {/* Group that scales/moves together */}
            <g 
              ref={textGroupRef} 
              style={{ transformOrigin: '960px 540px' }}
            >
              {/* Masked rectangle - transparent holes with dark frame */}
              <rect 
                ref={maskedRectRef}
                width="1920" 
                height="1080" 
                fill="#0a0a0a" 
                mask="url(#textMask)"
              />
              
              {/* Filled text - WHITE solid */}
              <g ref={filledTextGroupRef}>
                <text 
                  x="960" 
                  y="440" 
                  textAnchor="middle" 
                  dominantBaseline="auto"
                  fill="rgba(255, 255, 255, 0.95)"
                  fontFamily="'Bungee', sans-serif"
                  fontSize="220"
                  fontWeight="400"
                  letterSpacing="0.02em"
                >
                  CRICKET
                </text>
                <text 
                  x="960" 
                  y="660" 
                  textAnchor="middle" 
                  dominantBaseline="auto"
                  fill="rgba(255, 255, 255, 0.95)"
                  fontFamily="'Bungee', sans-serif"
                  fontSize="220"
                  fontWeight="400"
                  letterSpacing="0.02em"
                >
                  LEGENDS
                </text>
              </g>
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
