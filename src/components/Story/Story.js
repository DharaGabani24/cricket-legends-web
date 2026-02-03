
// //code 1
// import React, { useRef, useLayoutEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './Story.css';

// gsap.registerPlugin(ScrollTrigger);

// const Story = () => {
//   const containerRef = useRef(null);
  
//   // Section 1: Intro text
//   const introRef = useRef(null);
//   const titleRef = useRef(null);
//   const paragraphWrapperRef = useRef(null);
//   const paragraphDimRef = useRef(null);
//   const paragraphBrightRef = useRef(null);
  
//   // Section 2: Full screen image with character info
//   const characterRef = useRef(null);
//   const charBgRef = useRef(null);
//   const charNameRef = useRef(null);
//   const charQuoteRef = useRef(null);
//   const charDescRef = useRef(null);
//   const charImg2Ref = useRef(null);
  
//   // Section 3: Image grid
//   const galleryRef = useRef(null);
//   const img1Ref = useRef(null);
//   const img2Ref = useRef(null);
//   const img3Ref = useRef(null);
//   const img4Ref = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
      
//       // ========================================
//       // SECTION 1: INTRO TEXT ANIMATION
//       // ========================================
      
//       const intro = introRef.current;
//       const title = titleRef.current;
//       const paragraphWrapper = paragraphWrapperRef.current;
//       const paragraphDim = paragraphDimRef.current;
//       const paragraphBright = paragraphBrightRef.current;
      
//       // Set initial states
//       gsap.set(title, { opacity: 0, y: 40 });
//       gsap.set(paragraphBright, { clipPath: 'inset(100% 0% 0% 0%)' });
      
//       // Create intro timeline
//       const introTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: intro,
//           start: 'top top',
//           end: '+=200%',
//           scrub: 1,
//           pin: true,
//           // markers: true, // Uncomment to debug
//         }
//       });
      
//       // Title fades in
//       introTl.to(title, {
//         opacity: 1,
//         y: 0,
//         duration: 0.1,
//         ease: 'none'
//       }, 0);
      
//       // Paragraph color wipe from bottom to top
//       introTl.to(paragraphBright, {
//         clipPath: 'inset(0% 0% 0% 0%)',
//         duration: 0.4,
//         ease: 'none'
//       }, 0.05);
      
//       // Small pulse effect
//       introTl.to(paragraphWrapper, {
//         scale: 0.98,
//         duration: 0.05,
//         ease: 'none'
//       }, 0.50);
      
//       introTl.to(paragraphWrapper, {
//         scale: 1,
//         duration: 0.05,
//         ease: 'none'
//       }, 0.55);
      
//       // Exit: fade out and move up
//       introTl.to([title, paragraphWrapper], {
//         opacity: 0,
//         y: -80,
//         duration: 0.25,
//         ease: 'none'
//       }, 0.70);
      
//       // ========================================
//       // SECTION 2: CHARACTER WITH FULL SCREEN IMAGE
//       // ========================================
      
//       const character = characterRef.current;
//       const charBg = charBgRef.current;
//       const charName = charNameRef.current;
//       const charQuote = charQuoteRef.current;
//       const charDesc = charDescRef.current;
//       const charImg2 = charImg2Ref.current;
      
//       // Initial states //
//       gsap.set(charBg, { opacity: 0, scale: 1 });
//       gsap.set(charName, { opacity: 0, y: 80 });
//       gsap.set(charQuote, { opacity: 0, y: 50 });
//       gsap.set(charDesc, { opacity: 0, y: 40 });
//       gsap.set(charImg2, { opacity: 0, x: 60, scale: 0.9 });
      
//       // Character timeline
//       const charTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: character,
//           start: 'top top',
//           end: '+=300%',
//           scrub: 1,
//           pin: true,
//           // markers: true,
//         }
//       });
      
//       // Background fades in with zoom
//       charTl.to(charBg, {
//         opacity: 1,
//         scale: 1.1,
//         duration: 0.2,
//         ease: 'none'
//       }, 0);
      
//       // Continue zoom slightly
//       charTl.to(charBg, {
//         scale: 1.3,
//         duration: 0.4,
//         ease: 'none'
//       }, 0.15);
      
//       // Name enters
//       charTl.to(charName, {
//         opacity: 1,
//         y: 0,
//         duration: 0.12,
//         ease: 'none'
//       }, 0.25);
      
//       // Quote enters
//       charTl.to(charQuote, {
//         opacity: 1,
//         y: 0,
//         duration: 0.12,
//         ease: 'none'
//       }, 0.32);
      
//       // Second image enters
//       charTl.to(charImg2, {
//         opacity: 1,
//         x: 0,
//         scale: 1,
//         duration: 0.15,
//         ease: 'none'
//       }, 0.38);
      
//       // Description enters
//       charTl.to(charDesc, {
//         opacity: 1,
//         y: 0,
//         duration: 0.12,
//         ease: 'none'
//       }, 0.45);
      
//       // Parallax movement
//       charTl.to(charBg, {
//         y: -60,
//         duration: 0.25,
//         ease: 'none'
//       }, 0.55);
      
//       charTl.to(charImg2, {
//         y: -40,
//         duration: 0.25,
//         ease: 'none'
//       }, 0.55);
      
//       // Exit
//       charTl.to([charName, charQuote, charDesc], {
//         opacity: 0,
//         y: -40,
//         duration: 0.12,
//         ease: 'none'
//       }, 0.82);
      
//       charTl.to(charImg2, {
//         opacity: 0,
//         duration: 0.12,
//         ease: 'none'
//       }, 0.85);
      
//       charTl.to(charBg, {
//         opacity: 0,
//         duration: 0.15,
//         ease: 'none'
//       }, 0.88);
      
//       // ========================================
//       // SECTION 3: IMAGE GALLERY
//       // ========================================
      
//       const gallery = galleryRef.current;
//       const img1 = img1Ref.current;
//       const img2 = img2Ref.current;
//       const img3 = img3Ref.current;
//       const img4 = img4Ref.current;
      
//       // Initial states
//       gsap.set(img1, { opacity: 0, y: 60, scale: 1.05 });
//       gsap.set(img2, { opacity: 0, y: 80, scale: 1.05 });
//       gsap.set(img3, { opacity: 0, y: 100, scale: 1.05 });
//       gsap.set(img4, { opacity: 0, y: 120, scale: 1.05 });
      
//       // Gallery timeline
//       const galleryTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: gallery,
//           start: 'top top',
//           end: '+=250%',
//           scrub: 1,
//           pin: true,
//           // markers: true,
//         }
//       });
      
//       // Staggered image reveals
//       galleryTl.to(img1, {
//         opacity: 1, y: 0, scale: 1,
//         duration: 0.15, ease: 'none'
//       }, 0);
      
//       galleryTl.to(img2, {
//         opacity: 1, y: 0, scale: 1,
//         duration: 0.15, ease: 'none'
//       }, 0.10);
      
//       galleryTl.to(img3, {
//         opacity: 1, y: 0, scale: 1,
//         duration: 0.15, ease: 'none'
//       }, 0.22);
      
//       galleryTl.to(img4, {
//         opacity: 1, y: 0, scale: 1,
//         duration: 0.15, ease: 'none'
//       }, 0.34);
      
//       // Parallax
//       galleryTl.to(img1, { y: -30, duration: 0.3, ease: 'none' }, 0.45);
//       galleryTl.to(img2, { y: -50, duration: 0.3, ease: 'none' }, 0.45);
//       galleryTl.to(img3, { y: -20, duration: 0.3, ease: 'none' }, 0.50);
//       galleryTl.to(img4, { y: -40, duration: 0.3, ease: 'none' }, 0.50);
      
//       // Exit
//       galleryTl.to([img1, img2, img3, img4], {
//         opacity: 0,
//         scale: 0.95,
//         duration: 0.15,
//         ease: 'none'
//       }, 0.85);

//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="story">
      
//       {/* ============ SECTION 1: INTRO TEXT ============ */}
//       <section ref={introRef} className="story__intro">
//         <div className="story__intro-inner">
//           <h2 ref={titleRef} className="story__title">Vice City, USA.</h2>
          
//           <div ref={paragraphWrapperRef} className="story__paragraph-wrapper">
//             {/* Dim version - always visible */}
//             <p ref={paragraphDimRef} className="story__paragraph story__paragraph--dim">
//               Jason and Lucia have always known the deck is stacked against them. 
//               But when an easy score goes wrong, they find themselves on the darkest 
//               side of the sunniest place in America, in the middle of a criminal 
//               conspiracy stretching across the state of Leonida — forced to rely on 
//               each other more than ever if they want to make it out alive.
//             </p>
            
//             {/* Bright version - reveals via clip-path */}
//             <p ref={paragraphBrightRef} className="story__paragraph story__paragraph--bright">
//               Jason and Lucia have always known the deck is stacked against them. 
//               But when an easy score goes wrong, they find themselves on the darkest 
//               side of the sunniest place in America, in the middle of a criminal 
//               conspiracy stretching across the state of Leonida — forced to rely on 
//               each other more than ever if they want to make it out alive.
//             </p>
//           </div>
//         </div>
        
//         <div className="story__scroll-hint">
//           <span>⌄</span>
//         </div>
//       </section>
      
//       {/* ============ SECTION 2: CHARACTER ============ */}
//       <section ref={characterRef} className="story__character">
//         {/* Full screen background */}
//         <div ref={charBgRef} className="story__char-bg">
//           <img 
//             src={process.env.PUBLIC_URL + '/img/HighresScreenshot00005.webp'} 
//             alt="Character"
//           />
//           <div className="story__char-bg-overlay"></div>
//         </div>
        
//         {/* Content overlay */}
//         <div className="story__char-content">
//           <div className="story__char-text">
//             <h2 ref={charNameRef} className="story__char-name">JASON DUVAL</h2>
//             <p ref={charQuoteRef} className="story__char-quote">
//               "Jason wants an easy life, but things just keep getting harder."
//             </p>
//             <p ref={charDescRef} className="story__char-desc">
//               Jason grew up around grifters and crooks. After a stint in the Army 
//               trying to shake off his troubled teens, he found himself in the Keys 
//               doing what he knows best, working for local drug runners. It might be 
//               time to try something new.
//             </p>
//           </div>
          
//           {/* Second image */}
//           <div ref={charImg2Ref} className="story__char-img2">
//             <img 
//               src={process.env.PUBLIC_URL + '/img/HighresScreenshot00007.webp'} 
//               alt="Jason"
//             />
//           </div>
//         </div>
//       </section>
      
//       {/* ============ SECTION 3: IMAGE GALLERY ============ */}
//       <section ref={galleryRef} className="story__gallery">
//         <div className="story__gallery-grid">
//           <div ref={img1Ref} className="story__gallery-item story__gallery-item--1">
//             <img 
//               src={process.env.PUBLIC_URL + '/img/HighresScreenshot00005.webp'} 
//               alt="Scene 1"
//             />
//           </div>
//           <div ref={img2Ref} className="story__gallery-item story__gallery-item--2">
//             <img 
//               src={process.env.PUBLIC_URL + '/img/HighresScreenshot00007.webp'} 
//               alt="Scene 2"
//             />
//           </div>
//           <div ref={img3Ref} className="story__gallery-item story__gallery-item--3">
//             <img 
//               src={process.env.PUBLIC_URL + '/img/HighresScreenshot00005.webp'} 
//               alt="Scene 3"
//             />
//           </div>
//           <div ref={img4Ref} className="story__gallery-item story__gallery-item--4">
//             <img 
//               src={process.env.PUBLIC_URL + '/img/HighresScreenshot00007.webp'} 
//               alt="Scene 4"
//             />
//           </div>
//         </div>
//       </section>
      
//     </div>
//   );
// };

//  export default Story;



//code 3

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



// D5 



////////

//new modified D5
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Story.css';

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const containerRef = useRef(null);
  
  // Main section refs
  const storyRef = useRef(null);
  const stickyContainerRef = useRef(null);
  
  // Background image (shared for text AND Jason)
  const bgImageRef = useRef(null);
  
  // Vice City Text refs
  const exitContainerRef = useRef(null);
  const storyTextRef = useRef(null);
  const textDimRef = useRef(null);
  const textBrightRef = useRef(null);
  const textGlowRef = useRef(null);
  
  // Jason content refs - all start from bottom and scroll up
  const jasonWrapperRef = useRef(null);
  const jasonNameRef = useRef(null);
  const jasonQuoteRef = useRef(null);
  const jasonDescRef = useRef(null);
  const jasonImg1Ref = useRef(null); // Right - large (car closeup)
  const jasonImg2Ref = useRef(null); // Left - tall (gym)
  const jasonImg3Ref = useRef(null); // Right bottom (bar)
  
  // Gallery refs
  const galleryRef = useRef(null);
  const galleryImg1Ref = useRef(null);
  const galleryImg2Ref = useRef(null);
  const galleryImg3Ref = useRef(null);
  const galleryImg4Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      const story = storyRef.current;
      const stickyContainer = stickyContainerRef.current;
      const bgImage = bgImageRef.current;
      const exitContainer = exitContainerRef.current;
      const storyText = storyTextRef.current;
      const textDim = textDimRef.current;
      const textBright = textBrightRef.current;
      const textGlow = textGlowRef.current;
      
      // Jason elements
      const jasonWrapper = jasonWrapperRef.current;
      const jasonName = jasonNameRef.current;
      const jasonQuote = jasonQuoteRef.current;
      const jasonDesc = jasonDescRef.current;
      const jasonImg1 = jasonImg1Ref.current;
      const jasonImg2 = jasonImg2Ref.current;
      const jasonImg3 = jasonImg3Ref.current;
      
      // ========================================
      // INITIAL STATES
      // ========================================
      
      gsap.set(bgImage, { opacity: 0, scale: 1.1 });
      gsap.set(storyText, { opacity: 1 });
      gsap.set(exitContainer, { scale: 1 });
      
      // Jason - ALL start below viewport (100vh = bottom of screen)
      gsap.set(jasonWrapper, { opacity: 1 });
      gsap.set(jasonName, { y: '100vh' });
      gsap.set(jasonQuote, { y: '100vh' });
      gsap.set(jasonDesc, { y: '100vh' });
      // gsap.set(jasonImg1, { y: '100vh', opacity: 0 });
      // gsap.set(jasonImg2, { y: '100vh', opacity: 0 });
      // gsap.set(jasonImg3, { y: '100vh', opacity: 0 });
      gsap.set(jasonImg1, { opacity: 0 });
      gsap.set(jasonImg2, { opacity: 0 });
      gsap.set(jasonImg3, { opacity: 0 });
      
      // ========================================
      // RADIAL MASK FUNCTION
      // ========================================
      
      function updateRadialMasks(progress) {
        let circleY, circleSize;
        
        if (progress <= 0.45) {
          const p = progress / 0.45;
          circleY = 150 - (p * 100);
          circleSize = p * 200;
        } else if (progress <= 0.55) {
          circleY = 50;
          circleSize = 200;
        } else {
          const p = (progress - 0.55) / 0.45;
          circleY = 50 - (p * 150);
          circleSize = 200 - (p * 200);
        }

        const brightMask = `radial-gradient(circle at 50% ${circleY}%, black 0%, black ${circleSize}%, transparent ${circleSize}%)`;
        const glowInner = Math.max(0, circleSize - 40);
        const glowOuter = circleSize + 20;
        const glowMask = `radial-gradient(circle at 50% ${circleY}%, transparent 0%, transparent ${glowInner}%, black ${circleSize}%, transparent ${glowOuter}%)`;

        if (textBright) {
          textBright.style.webkitMaskImage = brightMask;
          textBright.style.maskImage = brightMask;
        }
        if (textGlow) {
          textGlow.style.webkitMaskImage = glowMask;
          textGlow.style.maskImage = glowMask;
        }
      }

      updateRadialMasks(0);

      // ========================================
      // MAIN SCROLL ANIMATION
      // ========================================
      
      ScrollTrigger.create({
        trigger: story,
        start: 'top top',
        end: '100% top',
        scrub: 1.5,
        pin: stickyContainer,
        pinSpacing: false,
        onUpdate: (self) => {
          const p = self.progress;
          
          // ========================================
          // PHASE 1: VICE CITY TEXT REVEAL (0 - 0.10)
          // ========================================
          if (p < 0.10) {
            const revealProgress = p / 0.10;
            updateRadialMasks(revealProgress * 0.5);
            if (textDim) textDim.style.opacity = String(1 - (revealProgress * 0.7));
            storyText.style.transform = 'scale(1)';
            storyText.style.opacity = '1';
            gsap.set(bgImage, { opacity: 0, scale: 1.1 });
            if (exitContainer) {
              exitContainer.style.webkitMaskImage = 'none';
              exitContainer.style.maskImage = 'none';
            }
            // Jason hidden below
            gsap.set(jasonName, { y: '100vh' });
            gsap.set(jasonQuote, { y: '100vh' });
            gsap.set(jasonDesc, { y: '100vh' });
            gsap.set(jasonImg1, { y: '100vh', opacity: 0 });
            gsap.set(jasonImg2, { y: '100vh', opacity: 0 });
            gsap.set(jasonImg3, { y: '100vh', opacity: 0 });
          }
          
          // ========================================
          // PHASE 2: TEXT EXIT + BG FADE IN (0.10 - 0.25)
          // ========================================
          else if (p >= 0.10 && p < 0.25) {
            const exitProgress = (p - 0.10) / 0.15;
            updateRadialMasks(0.5 + (exitProgress * 0.5));
            if (textDim) textDim.style.opacity = '0';
            const textScale = 1 - (exitProgress * 0.08);
            storyText.style.transform = `scale(${Math.max(0.92, textScale)})`;
            
            if (exitContainer) {
              const size = Math.max(0, 300 - (exitProgress * 330));
              const yPos = 50 - (exitProgress * 30);
              if (size <= 5) {
                exitContainer.style.webkitMaskImage = 'radial-gradient(ellipse 0% 0% at 50% 20%, black 0%, transparent 0%)';
                exitContainer.style.maskImage = 'radial-gradient(ellipse 0% 0% at 50% 20%, black 0%, transparent 0%)';
              } else {
                const mask = `radial-gradient(ellipse ${size}% ${size * 1.5}% at 50% ${yPos}%, black 0%, black 60%, transparent 100%)`;
                exitContainer.style.webkitMaskImage = mask;
                exitContainer.style.maskImage = mask;
              }
            }
            
            // BG fades in (delayed)
            const bgDelay = 0.5;
            const bgProgress = Math.max(0, (exitProgress - bgDelay) / (1 - bgDelay));
            gsap.set(bgImage, { opacity: Math.min(1, bgProgress), scale: 1.1 - (bgProgress * 0.05) });
            
            // Jason still hidden
            gsap.set(jasonName, { y: '100vh' });
          }
          
          // ========================================
          // PHASE 3: BG VISIBLE - JASON NAME SCROLLS UP (0.25 - 0.35)
          // Name comes from bottom of screen
          // ========================================
          // else if (p >= 0.25 && p < 0.35) {
          //   const phase3 = (p - 0.25) / 0.10;
            
          //   if (exitContainer) {
          //     exitContainer.style.webkitMaskImage = 'radial-gradient(ellipse 0% 0% at 50% 20%, black 0%, transparent 0%)';
          //     exitContainer.style.maskImage = 'radial-gradient(ellipse 0% 0% at 50% 20%, black 0%, transparent 0%)';
          //   }
            
          //   gsap.set(bgImage, { opacity: 1, scale: 1.05 });
            
          //   // Name scrolls up from bottom (100vh -> final position at bottom-left)
          //   // Final position is around 70vh from top (30vh from bottom)
          //   const nameY = 100 - (phase3 * 30); // 100vh -> 70vh
          //   gsap.set(jasonName, { y: `${nameY}vh` });
            
          //   gsap.set(jasonQuote, { y: '100vh' });
          //   gsap.set(jasonDesc, { y: '100vh' });
          //   gsap.set(jasonImg1, { y: '100vh', opacity: 0 });
          // }
          
          // // ========================================
          // // PHASE 4: QUOTE SCROLLS UP (0.35 - 0.45)
          // // ========================================
          // else if (p >= 0.35 && p < 0.45) {
          //   const phase4 = (p - 0.35) / 0.10;
            
          //   gsap.set(bgImage, { opacity: 1, scale: 1.05 });
            
          //   // Name continues scrolling up
          //   const nameY = 70 - (phase4 * 25); // 70vh -> 45vh
          //   gsap.set(jasonName, { y: `${nameY}vh` });
            
          //   // Quote scrolls up from bottom
          //   const quoteY = 100 - (phase4 * 35); // 100vh -> 65vh
          //   gsap.set(jasonQuote, { y: `${quoteY}vh` });
            
          //   gsap.set(jasonDesc, { y: '100vh' });
          //   gsap.set(jasonImg1, { y: '100vh', opacity: 0 });
          // }
          
          // // ========================================
          // // PHASE 5: DESC + IMG1 SCROLL UP (0.45 - 0.55)
          // // ========================================
          // else if (p >= 0.45 && p < 0.55) {
          //   const phase5 = (p - 0.45) / 0.10;
            
          //   gsap.set(bgImage, { opacity: 1, scale: 1.05 });
            
          //   // Name at top area
          //   const nameY = 45 - (phase5 * 25); // 45vh -> 20vh
          //   gsap.set(jasonName, { y: `${nameY}vh` });
            
          //   // Quote continues up
          //   const quoteY = 65 - (phase5 * 30); // 65vh -> 35vh
          //   gsap.set(jasonQuote, { y: `${quoteY}vh` });
            
          //   // Desc scrolls up
          //   const descY = 100 - (phase5 * 45); // 100vh -> 55vh
          //   gsap.set(jasonDesc, { y: `${descY}vh` });
            
          //   // Image 1 (right) scrolls up and fades in
          //   const img1Y = 100 - (phase5 * 50); // 100vh -> 50vh
          //   gsap.set(jasonImg1, { y: `${img1Y}vh`, opacity: phase5 });
            
          //   gsap.set(jasonImg2, { y: '100vh', opacity: 0 });
          //   gsap.set(jasonImg3, { y: '100vh', opacity: 0 });
          // }
          
          // // ========================================
          // // PHASE 6: BG STARTS FADING, IMG2 APPEARS (0.55 - 0.65)
          // // ========================================
          // else if (p >= 0.55 && p < 0.65) {
          //   const phase6 = (p - 0.55) / 0.10;
            
          //   // Background starts fading to black
          //   const bgOpacity = 1 - (phase6 * 0.7); // 1 -> 0.3
          //   gsap.set(bgImage, { opacity: bgOpacity, scale: 1.05 });
            
          //   // All text continues up
          //   const nameY = 20 - (phase6 * 10); // 20vh -> 10vh
          //   gsap.set(jasonName, { y: `${nameY}vh` });
            
          //   const quoteY = 35 - (phase6 * 15); // 35vh -> 20vh
          //   gsap.set(jasonQuote, { y: `${quoteY}vh` });
            
          //   const descY = 55 - (phase6 * 20); // 55vh -> 35vh
          //   gsap.set(jasonDesc, { y: `${descY}vh` });
            
          //   // Img1 continues up
          //   const img1Y = 50 - (phase6 * 25); // 50vh -> 25vh
          //   gsap.set(jasonImg1, { y: `${img1Y}vh`, opacity: 1 });
            
          //   // Image 2 (left tall) scrolls up
          //   const img2Y = 100 - (phase6 * 50); // 100vh -> 50vh
          //   gsap.set(jasonImg2, { y: `${img2Y}vh`, opacity: phase6 });
            
          //   gsap.set(jasonImg3, { y: '100vh', opacity: 0 });
          // }
          
          // // ========================================
          // // PHASE 7: BG ALMOST BLACK, IMG3 APPEARS (0.65 - 0.75)
          // // ========================================
          // else if (p >= 0.65 && p < 0.75) {
          //   const phase7 = (p - 0.65) / 0.10;
            
          //   // Background fades to black
          //   const bgOpacity = 0.3 - (phase7 * 0.3); // 0.3 -> 0
          //   gsap.set(bgImage, { opacity: bgOpacity, scale: 1.05 });
            
          //   // Text continues up and starts fading
          //   const textOpacity = 1 - (phase7 * 0.5);
          //   const nameY = 10 - (phase7 * 15); // 10vh -> -5vh
          //   gsap.set(jasonName, { y: `${nameY}vh`, opacity: textOpacity });
            
          //   const quoteY = 20 - (phase7 * 15); // 20vh -> 5vh
          //   gsap.set(jasonQuote, { y: `${quoteY}vh`, opacity: textOpacity });
            
          //   const descY = 35 - (phase7 * 20); // 35vh -> 15vh
          //   gsap.set(jasonDesc, { y: `${descY}vh`, opacity: textOpacity });
            
          //   // Images continue up
          //   const img1Y = 25 - (phase7 * 15); // 25vh -> 10vh
          //   gsap.set(jasonImg1, { y: `${img1Y}vh`, opacity: 1 });
            
          //   const img2Y = 50 - (phase7 * 25); // 50vh -> 25vh
          //   gsap.set(jasonImg2, { y: `${img2Y}vh`, opacity: 1 });
            
          //   // Image 3 scrolls up
          //   const img3Y = 100 - (phase7 * 45); // 100vh -> 55vh
          //   gsap.set(jasonImg3, { y: `${img3Y}vh`, opacity: phase7 });
          // }
          
          // // ========================================
          // // PHASE 8: BLACK BG, ALL IMAGES VISIBLE (0.75 - 0.85)
          // // ========================================
          // else if (p >= 0.75 && p < 0.85) {
          //   const phase8 = (p - 0.75) / 0.10;
            
          //   // BG fully black
          //   gsap.set(bgImage, { opacity: 0, scale: 1.05 });
            
          //   // Text faded out
          //   gsap.set(jasonName, { y: '-10vh', opacity: 0 });
          //   gsap.set(jasonQuote, { y: '0vh', opacity: 0 });
          //   gsap.set(jasonDesc, { y: '10vh', opacity: 0 });
            
          //   // All 3 images visible, scrolling up together
          //   const img1Y = 10 - (phase8 * 15); // 10vh -> -5vh
          //   gsap.set(jasonImg1, { y: `${img1Y}vh`, opacity: 1 });
            
          //   const img2Y = 25 - (phase8 * 20); // 25vh -> 5vh
          //   gsap.set(jasonImg2, { y: `${img2Y}vh`, opacity: 1 });
            
          //   const img3Y = 55 - (phase8 * 25); // 55vh -> 30vh
          //   gsap.set(jasonImg3, { y: `${img3Y}vh`, opacity: 1 });
          // }
          
          // // ========================================
          // // PHASE 9: IMAGES EXIT UP (0.85 - 1.0)
          // // ========================================
          // else if (p >= 0.85) {
          //   const phase9 = (p - 0.85) / 0.15;
            
          //   gsap.set(bgImage, { opacity: 0 });
          //   gsap.set(jasonName, { opacity: 0 });
          //   gsap.set(jasonQuote, { opacity: 0 });
          //   gsap.set(jasonDesc, { opacity: 0 });
            
          //   // Images exit upward
          //   const exitOpacity = 1 - phase9;
            
          //   const img1Y = -5 - (phase9 * 40); // -5vh -> -45vh
          //   gsap.set(jasonImg1, { y: `${img1Y}vh`, opacity: exitOpacity });
            
          //   const img2Y = 5 - (phase9 * 45); // 5vh -> -40vh
          //   gsap.set(jasonImg2, { y: `${img2Y}vh`, opacity: exitOpacity });
            
          //   const img3Y = 30 - (phase9 * 50); // 30vh -> -20vh
          //   gsap.set(jasonImg3, { y: `${img3Y}vh`, opacity: exitOpacity });
          // }

          // ==========================================
// PHASE 3: JASON NAME SCROLLS UP (0.25 - 0.35)
// ========================================
else if (p >= 0.25 && p < 0.35) {
  const phase3 = (p - 0.25) / 0.10;
  
  if (exitContainer) {
    exitContainer.style.webkitMaskImage = 'radial-gradient(ellipse 0% 0% at 50% 20%, black 0%, transparent 0%)';
    exitContainer.style.maskImage = 'radial-gradient(ellipse 0% 0% at 50% 20%, black 0%, transparent 0%)';
  }
  
  // gsap.set(bgImage, { opacity: 1, scale: 1.05 });
  // BG starts fading immediately and faster
  const bgOpacity = 1 - (phase3 * 0.7); // 1 -> 0.5
  gsap.set(bgImage, { opacity: bgOpacity, scale: 1.05 });
    
  // All elements share the same base scroll position
  const baseScroll = phase3 * 600; // pixels scrolled
  
  gsap.set(jasonName, { y: 800 - baseScroll }); // starts at 800px, name appears first
  gsap.set(jasonQuote, { y: 900 - baseScroll }); // 100px below name
  gsap.set(jasonDesc, { y: 1050 - baseScroll }); // 150px below quote
  gsap.set(jasonImg1, { y: 800 - baseScroll, opacity: 1 });
  gsap.set(jasonImg2, { y: 1000 - baseScroll, opacity: 1 });
  gsap.set(jasonImg3, { y: 1100 - baseScroll, opacity: 1 });
}

// ========================================
// PHASE 4: QUOTE ENTERS (0.35 - 0.45)
// ========================================
else if (p >= 0.35 && p < 0.45) {
  const phase4 = (p - 0.35) / 0.10;
  
  // gsap.set(bgImage, { opacity: 1, scale: 1.05 });
  // BG continues fading
  const bgOpacity = 0.3 - (phase4 * 0.3); 
  gsap.set(bgImage, { opacity: bgOpacity, scale: 1.05 });

  const baseScroll = 600 + (phase4 * 400); // continue scrolling
  
  gsap.set(jasonName, { y: 800 - baseScroll });
  gsap.set(jasonQuote, { y: 900 - baseScroll });
  gsap.set(jasonDesc, { y: 1050 - baseScroll });
  gsap.set(jasonImg1, { y: 800 - baseScroll, opacity: 1 }); // fades in
  gsap.set(jasonImg2, { y: 1000 - baseScroll, opacity: 1 });
  gsap.set(jasonImg3, { y: 1100 - baseScroll, opacity: 1 });
}

// ========================================
// PHASE 5: DESC + IMG1 VISIBLE (0.45 - 0.55)
// ========================================
else if (p >= 0.45 && p < 0.55) {
  const phase5 = (p - 0.45) / 0.10;
  
  // gsap.set(bgImage, { opacity: 0.65, scale: 1.05 });
  // const bgOpacity = 0.2 - (phase5 * 0.2); // 0.2 -> 0
  // gsap.set(bgImage, { opacity: bgOpacity, scale: 1.05 });
  gsap.set(bgImage, { opacity: 0 });

  const baseScroll = 1000 + (phase5 * 300);
  
  gsap.set(jasonName, { y: 800 - baseScroll });
  gsap.set(jasonQuote, { y: 900 - baseScroll });
  gsap.set(jasonDesc, { y: 1050 - baseScroll });
  gsap.set(jasonImg1, { y: 800 - baseScroll, opacity: 1 });
  gsap.set(jasonImg2, { y: 1000 - baseScroll, opacity: 1 }); // fades in
  gsap.set(jasonImg3, { y: 1100 - baseScroll, opacity: 1 });
}

// ========================================
// PHASE 6: BG FADES, IMG2 VISIBLE (0.55 - 0.65)
// ========================================
else if (p >= 0.55 && p < 0.65) {
  const phase6 = (p - 0.55) / 0.10;
  
  // BG fades to black
  // gsap.set(bgImage, { opacity: 1 - (phase6 * 0.7), scale: 1.05 });
  // BG fully gone
  gsap.set(bgImage, { opacity: 0 });  

  const baseScroll = 1300 + (phase6 * 250);
  
  gsap.set(jasonName, { y: 800 - baseScroll });
  gsap.set(jasonQuote, { y: 900 - baseScroll });
  gsap.set(jasonDesc, { y: 1050 - baseScroll });
  gsap.set(jasonImg1, { y: 800 - baseScroll, opacity: 1 });
  gsap.set(jasonImg2, { y: 1000 - baseScroll, opacity: 1 });
  gsap.set(jasonImg3, { y: 1100 - baseScroll, opacity: 1 }); // fades in
}

// ========================================
// PHASE 7: BG BLACK, ALL VISIBLE (0.65 - 0.75)
// ========================================
else if (p >= 0.65 && p < 0.75) {
  const phase7 = (p - 0.65) / 0.10;
  
  // gsap.set(bgImage, { opacity: 0.3 - (phase7 * 0.3), scale: 1.05 });
  // BG fully gone
  // BG fully gone
  gsap.set(bgImage, { opacity: 0 });

  const baseScroll = 1550 + (phase7 * 200);
  
  // Text starts fading
  const textOpacity = 1 - phase7;
  gsap.set(jasonName, { y: 800 - baseScroll, opacity: textOpacity });
  gsap.set(jasonQuote, { y: 900 - baseScroll, opacity: textOpacity });
  gsap.set(jasonDesc, { y: 1050 - baseScroll, opacity: textOpacity });
  gsap.set(jasonImg1, { y: 800 - baseScroll, opacity: 1 });
  gsap.set(jasonImg2, { y: 1000 - baseScroll, opacity: 1 });
  gsap.set(jasonImg3, { y: 1100 - baseScroll, opacity: 1 });
}

// ========================================
// PHASE 8: IMAGES ONLY (0.75 - 0.85)
// ========================================
else if (p >= 0.75 && p < 0.85) {
  const phase8 = (p - 0.75) / 0.10;
  
  gsap.set(bgImage, { opacity: 0 });
  
  const baseScroll = 1750 + (phase8 * 200);
  
  gsap.set(jasonName, { opacity: 0 });
  gsap.set(jasonQuote, { opacity: 0 });
  gsap.set(jasonDesc, { opacity: 0 });
  gsap.set(jasonImg1, { y: 800 - baseScroll, opacity: 1 });
  gsap.set(jasonImg2, { y: 1000 - baseScroll, opacity: 1 });
  gsap.set(jasonImg3, { y: 1100 - baseScroll, opacity: 1 });
}

// ========================================
// PHASE 9: EXIT (0.85 - 1.0)
// ========================================
else if (p >= 0.85) {
  const phase9 = (p - 0.85) / 0.15;
  
  gsap.set(bgImage, { opacity: 0 });
  
  const baseScroll = 1950 + (phase9 * 400);
  const exitOpacity = 1 - phase9;
  
  gsap.set(jasonName, { opacity: 0 });
  gsap.set(jasonQuote, { opacity: 0 });
  gsap.set(jasonDesc, { opacity: 0 });
  gsap.set(jasonImg1, { y: 800 - baseScroll, opacity: exitOpacity });
  gsap.set(jasonImg2, { y: 1000 - baseScroll, opacity: exitOpacity });
  gsap.set(jasonImg3, { y: 1100 - baseScroll, opacity: exitOpacity });
}
        }
      });
      
      // ========================================
      // GALLERY SECTION
      // ========================================
      
      const gallery = galleryRef.current;
      const gImg1 = galleryImg1Ref.current;
      const gImg2 = galleryImg2Ref.current;
      const gImg3 = galleryImg3Ref.current;
      const gImg4 = galleryImg4Ref.current;
      
      gsap.set([gImg1, gImg2, gImg3, gImg4], { opacity: 0, y: 100 });
      
      const galleryTl = gsap.timeline({
        scrollTrigger: {
          trigger: gallery,
          start: 'top top',
          end: '+=250%',
          scrub: 1.5,
          pin: true,
        }
      });
      
      galleryTl.to(gImg1, { opacity: 1, y: 0, duration: 0.15, ease: 'none' }, 0);
      galleryTl.to(gImg2, { opacity: 1, y: 0, duration: 0.15, ease: 'none' }, 0.08);
      galleryTl.to(gImg3, { opacity: 1, y: 0, duration: 0.15, ease: 'none' }, 0.18);
      galleryTl.to(gImg4, { opacity: 1, y: 0, duration: 0.15, ease: 'none' }, 0.28);
      
      galleryTl.to(gImg1, { y: -35, duration: 0.35, ease: 'none' }, 0.4);
      galleryTl.to(gImg2, { y: -55, duration: 0.35, ease: 'none' }, 0.4);
      galleryTl.to(gImg3, { y: -25, duration: 0.35, ease: 'none' }, 0.45);
      galleryTl.to(gImg4, { y: -45, duration: 0.35, ease: 'none' }, 0.45);
      
      galleryTl.to([gImg1, gImg2, gImg3, gImg4], {
        opacity: 0,
        duration: 0.15,
        ease: 'none',
        stagger: 0.02
      }, 0.82);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="story-wrapper">
      
      {/* ============ MAIN STORY SECTION ============ */}
      <section ref={storyRef} className="story">
        <div ref={stickyContainerRef} className="story__sticky">
          
          {/* Background image */}
          <div ref={bgImageRef} className="story__bg-image">
            <img 
              src={process.env.PUBLIC_URL + '/img/HighresScreenshot00005.webp'} 
              alt="Vice City"
            />
            <div className="story__bg-overlay"></div>
          </div>
          
          {/* Vice City Text */}
          <div ref={exitContainerRef} className="story__exit-container">
            <div ref={storyTextRef} className="story__text-wrapper">
              <div className="story__text-layer story__text-dim" ref={textDimRef}>
                <h2 className="story__title" >Vice City, USA.</h2>
                <p className="story__paragraph">
                  Jason and Lucia have always known the deck is stacked against
                  them. But when an easy score goes wrong, they find themselves
                  on the darkest side of the sunniest place in America, in the
                  middle of a criminal conspiracy stretching across the state of
                  Leonida — forced to rely on each other more than ever if they
                  want to make it out alive.
                </p>
              </div>
              <div className="story__text-layer story__text-bright" ref={textBrightRef}>
                <h2 className="story__title">Vice City, USA.</h2>
                <p className="story__paragraph">
                  Jason and Lucia have always known the deck is stacked against
                  them. But when an easy score goes wrong, they find themselves
                  on the darkest side of the sunniest place in America, in the
                  middle of a criminal conspiracy stretching across the state of
                  Leonida — forced to rely on each other more than ever if they
                  want to make it out alive.
                </p>
              </div>
              <div className="story__text-layer story__text-glow" ref={textGlowRef}>
                <h2 className="story__title">Vice City, USA.</h2>
                <p className="story__paragraph">
                  Jason and Lucia have always known the deck is stacked against
                  them. But when an easy score goes wrong, they find themselves
                  on the darkest side of the sunniest place in America, in the
                  middle of a criminal conspiracy stretching across the state of
                  Leonida — forced to rely on each other more than ever if they
                  want to make it out alive.
                </p>
              </div>
            </div>
          </div>
          
          {/* Jason Content - scrolls up from bottom */}
          <div ref={jasonWrapperRef} className="jason">
            
            {/* Name - left side */}
            <h1 ref={jasonNameRef} className="jason__name">JASON DUVAL</h1>
            
            {/* Quote - left side below name */}
            <p ref={jasonQuoteRef} className="jason__quote">
              Jason wants an easy life, but things just keep getting harder and worst.
            </p>
            
            {/* Description - left side below quote */}
            <p ref={jasonDescRef} className="jason__desc">
              Jason grew up around grifters and crooks. After a stint in the Army 
              trying to shake off his troubled teens, he found himself in the Keys 
              doing what he knows best, working for local drug runners. It might be 
              time to try something new.
            </p>
            
            {/* Image 1 - Right side, large (car closeup) */}
            <div ref={jasonImg1Ref} className="jason__img jason__img--1">
              <img 
                src={process.env.PUBLIC_URL + '/img/HighresScreenshot00007.webp'} 
                alt="Jason closeup"
              />
            </div>
            
            {/* Image 2 - Left side, tall (gym) */}
            <div ref={jasonImg2Ref} className="jason__img jason__img--2">
              <img 
                src={process.env.PUBLIC_URL + '/img/HighresScreenshot00009.webp'} 
                alt="Jason gym"
              />
            </div>
            
            {/* Image 3 - Right side bottom (bar) */}
            <div ref={jasonImg3Ref} className="jason__img jason__img--3">
              <img 
                src={process.env.PUBLIC_URL + '/img/HighresScreenshot00010.webp'} 
                alt="Jason bar"
              />
            </div>
            
          </div>
          
          <div className="story__scroll-hint">
            <span>⌄</span>
          </div>
          
        </div>
      </section>
      
      {/* ============ GALLERY SECTION ============ */}
      <section ref={galleryRef} className="story__gallery">
        <div className="story__gallery-grid">
          <div ref={galleryImg1Ref} className="story__gallery-item">
            <img src={process.env.PUBLIC_URL + '/img/HighresScreenshot00005.webp'} alt="Scene 1" />
          </div>
          <div ref={galleryImg2Ref} className="story__gallery-item">
            <img src={process.env.PUBLIC_URL + '/img/HighresScreenshot00007.webp'} alt="Scene 2" />
          </div>
          <div ref={galleryImg3Ref} className="story__gallery-item">
            <img src={process.env.PUBLIC_URL + '/img/HighresScreenshot00009.webp'} alt="Scene 3" />
          </div>
          <div ref={galleryImg4Ref} className="story__gallery-item">
            <img src={process.env.PUBLIC_URL + '/img/HighresScreenshot00010.webp'} alt="Scene 4" />
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Story;
////
