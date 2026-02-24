//story.js

// ////



//new modified D5 - With Lucia Section
import React, { useRef, useLayoutEffect , useState, useEffect, useCallback} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Story.css';

gsap.registerPlugin(ScrollTrigger);

const ExpandIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 3 21 3 21 9"></polyline>
    <polyline points="9 21 3 21 3 15"></polyline>
    <line x1="21" y1="3" x2="14" y2="10"></line>
    <line x1="3" y1="21" x2="10" y2="14"></line>
  </svg>
);

const Story = () => {

  const containerRef = useRef(null);

  // const [viceCityOpen, setViceCityOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);


    // Visit Leonida section refs
    const vlSectionRef = useRef(null);
    const vlStickyRef = useRef(null);
    const vlBgRef = useRef(null);
    const vlHeaderRef = useRef(null);
    const vlIconRef = useRef(null);
    const vlLogoTextRef = useRef(null);
    const vlDividerRef = useRef(null);
    const vlTaglineRef = useRef(null);
    const vlOrb1Ref = useRef(null);
    const vlOrb2Ref = useRef(null);
    const vlOrb3Ref = useRef(null);
    const vlPostcardWrapperRef = useRef(null);
    const vlPostcardRef = useRef(null);
    const vlPostcardTitleRef = useRef(null);
    const vlParticlesRef = useRef(null);
  
    // Vice City detail overlay refs
    const vcDetailRef = useRef(null);
    const vcDetailBgRef = useRef(null);
    const vcDetailBackRef = useRef(null);
    const vcDetailPostcardRef = useRef(null);
    const vcDetailHeadingRef = useRef(null);
    const vcDetailSubheadingRef = useRef(null);
    const vcDetailDescRef = useRef(null);
    // Horizontal scroll refs
    const vcHscrollRef = useRef(null);
    const vcHscrollHeightRef = useRef(null);
    const vcGalleryTrackRef = useRef(null);
    const vcScrollHandlerRef = useRef(null);
    const vcScrollIndicatorRef = useRef(null);  // ← ADD THIS NEW LINE

  
    const [viceCityOpen, setViceCityOpen] = useState(false);

    //expanding image
    const [expandedImage, setExpandedImage] = useState(null);
    const vcLightboxRef = useRef(null);
    const vcLightboxImgRef = useRef(null);

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
  
  // Lucia section refs
  const luciaSectionRef = useRef(null);
  const luciaStickyRef = useRef(null);
  const luciaBgImageRef = useRef(null);
  const luciaBgOverlayRef = useRef(null);
  const luciaWrapperRef = useRef(null);
  const luciaMainQuoteRef = useRef(null);
  const luciaSubQuoteRef = useRef(null);
  const luciaDescRef = useRef(null);
  const luciaImg1Ref = useRef(null);
  const luciaImg2Ref = useRef(null);
  const luciaImg3Ref = useRef(null);

  // Lucia Character section refs (new section)
  const luciaCharSectionRef = useRef(null);
  const luciaCharStickyRef = useRef(null);
  const luciaCharBgImageRef = useRef(null);
  const luciaCharBgOverlayRef = useRef(null);
  const luciaCharWrapperRef = useRef(null);
  const luciaCharNameRef = useRef(null);
  const luciaCharQuoteRef = useRef(null);
  const luciaCharDescRef = useRef(null);
  const luciaCharDesc2Ref = useRef(null);
  const luciaCharImg1Ref = useRef(null);
  const luciaCharImg2Ref = useRef(null);
  const luciaCharImg3Ref = useRef(null);  

  
  // leonida Text Section refs
  const leonidaTextSectionRef = useRef(null);
  const leonidaTitleRef = useRef(null);
  const leonidaDescRef = useRef(null);
    

  // Cal Hampton section refs
  const calSectionRef = useRef(null);
  const calStickyRef = useRef(null);
  const calBgImageRef = useRef(null);
  const calBgOverlayRef = useRef(null);
  const calWrapperRef = useRef(null);
  const calNameRef = useRef(null);
  const calQuoteRef = useRef(null);
  const calDescRef = useRef(null);
  const calImg1Ref = useRef(null);
  const calImg2Ref = useRef(null);
  const calImg3Ref = useRef(null);
  const calBigQuoteRef = useRef(null);


  
  


// Cinematic Finale refs
const finaleSectionRef = useRef(null);
const finaleStickyRef = useRef(null);
const finaleBgRef = useRef(null);
const finaleBgOverlayRef = useRef(null);
const finaleLogoRef = useRef(null);
const finaleComingRef = useRef(null);
const finaleDateRef = useRef(null);
const finaleYearRef = useRef(null);
const finalePlatformsRef = useRef(null);
const finaleDimRef = useRef(null);
const finaleBrightRef = useRef(null);
const finaleGlowRef = useRef(null);

// World of Leonida section refs
const worldSectionRef = useRef(null);
const worldStickyRef = useRef(null);
const worldBgRef = useRef(null);
const worldBgOverlayRef = useRef(null);
const worldNameRef = useRef(null);
const worldQuoteRef = useRef(null);
const worldDescRef = useRef(null);
const worldImg1Ref = useRef(null);
const worldImg2Ref = useRef(null);
const worldImg3Ref = useRef(null);
const worldBigQuoteRef = useRef(null);
const worldBigQuoteBgRef = useRef(null);
const worldImg4Ref = useRef(null);
const worldImg5Ref = useRef(null);
const worldContentRef = useRef(null);
const worldQuote2Ref = useRef(null);
const worldDesc2Ref = useRef(null);


// Discover/Ambrosia section refs
const discoverSectionRef = useRef(null);
const discoverStickyRef = useRef(null);
const discoverBgRef = useRef(null);
const discoverHeaderRef = useRef(null);
const discoverIconRef = useRef(null);
const discoverLogoTextRef = useRef(null);
const discoverDividerRef = useRef(null);
const discoverTaglineRef = useRef(null);
const discoverOrb1Ref = useRef(null);
const discoverOrb2Ref = useRef(null);
const discoverOrb3Ref = useRef(null);
const discoverPostcardWrapperRef = useRef(null);
const discoverPostcardRef = useRef(null);
const discoverPostcardTitleRef = useRef(null);
const discoverParticlesRef = useRef(null);

// Discover detail overlay refs
const discoverDetailRef = useRef(null);
const discoverDetailBgRef = useRef(null);
const discoverDetailBackRef = useRef(null);
const discoverDetailPostcardRef = useRef(null);
const discoverDetailHeadingRef = useRef(null);
const discoverDetailSubheadingRef = useRef(null);
const discoverDetailDescRef = useRef(null);
const discoverHscrollRef = useRef(null);
const discoverHscrollHeightRef = useRef(null);
const discoverGalleryTrackRef = useRef(null);
const discoverScrollHandlerRef = useRef(null);


const discoverScrollIndicatorRef = useRef(null);  // ← ADD THIS NEW LINE


const [discoverDetailOpen, setDiscoverDetailOpen] = useState(false);

const navbarRef = useRef(null);


// Hide navbar when overlays are open
useEffect(() => {
  if (viceCityOpen || discoverDetailOpen) {
    document.body.classList.add('overlay-open');
  } else {
    document.body.classList.remove('overlay-open');
  }
}, [viceCityOpen, discoverDetailOpen]);


  // Lightbox handlers
const openLightbox = (imageSrc) => {
  setLightboxImage(imageSrc);
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  setLightboxImage(null);
  document.body.style.overflow = '';
};
  useLayoutEffect(() => {
    let animFrameId;

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
      // gsap.set(storyText, { opacity: 1 });
      gsap.set(storyText, { 
        opacity: 1,
        position: 'absolute',
        top: '50%',
        left: '50%',
        xPercent: -50,
        yPercent: -50,
        scale: 1,
        y: 0
      });
      gsap.set(exitContainer, { scale: 1 });
          // Scroll indicators - start hidden
    gsap.set(vcScrollIndicatorRef.current, { opacity: 0 });
    gsap.set(discoverScrollIndicatorRef.current, { opacity: 0 });
      
      // Jason - ALL start below viewport (100vh = bottom of screen)
      gsap.set(jasonWrapper, { opacity: 1 });
      gsap.set(jasonName, { y: '100vh' });
      gsap.set(jasonQuote, { y: '100vh' });
      gsap.set(jasonDesc, { y: '100vh' });
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



//gemini version 3 for checkiing with more scroll and slower reveal



ScrollTrigger.create({
  trigger: story,
  start: 'top top',
  end: '100% top',
  scrub: 1.5,
  pin: stickyContainer,
  pinSpacing: false,
  onUpdate: (self) => {
    const p = self.progress;

   
    // if (p < 0.20) {
    //   const revealProgress = p / 0.20;
    //   const fadeIn = Math.min(1, revealProgress * 2);  // Fades in during first half
      
    //   // No radial mask — just fade in all layers together
    //   if (textDim) textDim.style.opacity = String(fadeIn * 0.35);
    //   if (textBright) {
    //     textBright.style.webkitMaskImage = 'none';
    //     textBright.style.maskImage = 'none';
    //     textBright.style.opacity = String(fadeIn);
    //   }
    //   if (textGlow) {
    //     textGlow.style.webkitMaskImage = 'none';
    //     textGlow.style.maskImage = 'none';
    //     textGlow.style.opacity = '0';
    //   }
      
    //   gsap.set(storyText, { 
    //     opacity: 1, 
    //     scale: 1, 
    //     y: 0,
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     xPercent: -50,
    //     yPercent: -50
    //   });
      
    //   gsap.set(bgImage, { opacity: 0, scale: 1.1 });
    //   gsap.set([jasonName, jasonQuote, jasonDesc, jasonImg1, jasonImg2, jasonImg3], { y: '100vh', opacity: 0 });
    // }

    // // ========================================
    // // PHASE 2: TEXT EXIT (0.20 - 0.35)
    // // Shifted start to 0.20 to match Phase 1's new end
    // // ========================================
    // else if (p >= 0.20 && p < 0.35) {
    //   const exitProgress = (p - 0.20) / 0.15; // Still takes 15% of scroll
    //   const eased = gsap.parseEase("power2.inOut")(exitProgress);

    //   updateRadialMasks(eased < 0.2 ? 0.5 + (eased / 0.2 * 0.5) : 1);
      
    //   const scale = 1 - (eased * 0.45);
    //   const yMove = -(eased * 200);
    //   const textOpacity = 1 - (eased * 1.2);

    //   gsap.set(storyText, { 
    //     top: '50%',
    //     left: '50%',
    //     xPercent: -50,
    //     yPercent: -50,
    //     y: yMove, 
    //     scale: Math.max(0.3, scale),
    //     opacity: Math.max(0, textOpacity) 
    //   });

    //   const bgDelay = 0.4;
    //   const bgProg = Math.max(0, (exitProgress - bgDelay) / (1 - bgDelay));
    //   const bgEased = gsap.parseEase("power2.out")(bgProg);
      
    //   gsap.set(bgImage, { opacity: bgEased, scale: 1.1 - (bgEased * 0.05) });
    //   gsap.set([jasonName, jasonQuote, jasonDesc, jasonImg1, jasonImg2, jasonImg3], { y: '100vh' });
    // }

    // // PHASE 3 - 9: JASON CONTENT (0.25 - 1.0)
    // // We use a unified calculation for all Jason phases to prevent "jumping"
    // else if (p >= 0.35) {
    //   // Clear Phase 2 artifacts
    //   gsap.set(storyText, { opacity: 0 });
    //   if (exitContainer) exitContainer.style.webkitMaskImage = 'none';

    //   // Unified Scroll Logic
    //   let baseScroll = 0;
    //   let bgOpacity = 0;
    //   let textOpacity = 1;
    //   let imagesOpacity = 1;
    //   let luciaOpacity = 0;

    //   if (p < 0.45) { // Phase 3
    //     const ph = (p - 0.35) / 0.10;
    //     baseScroll = ph * 600;
    //     bgOpacity = 1 - (ph * 0.7);
    //   } 
    //   else if (p < 0.55) { // Phase 4
    //     const ph = (p - 0.45) / 0.10;
    //     baseScroll = 600 + (ph * 400);
    //     bgOpacity = 0.3 - (ph * 0.3);
    //   }
    //   else if (p < 0.55) { // Phase 5
    //     const ph = (p - 0.45) / 0.10;
    //     baseScroll = 1000 + (ph * 300);
    //     bgOpacity = 0;
    //   }
    //   else if (p < 0.65) { // Phase 6
    //     const ph = (p - 0.55) / 0.10;
    //     baseScroll = 1300 + (ph * 250);
    //     bgOpacity = 0;
    //   }
    //   else if (p < 0.75) { // Phase 7
    //     const ph = (p - 0.65) / 0.10;
    //     baseScroll = 1550 + (ph * 200);
    //     textOpacity = 1 - ph;
    //     bgOpacity = 0;
    //   }
    //   else if (p < 0.85) { // Phase 8
    //     const ph = (p - 0.75) / 0.10;
    //     baseScroll = 1750 + (ph * 200);
    //     textOpacity = 0;
    //     luciaOpacity = ph * 0.4;
    //   }
    //   else { // Phase 9
    //     const ph = (p - 0.85) / 0.15;
    //     baseScroll = 1950 + (ph * 400);
    //     imagesOpacity = 1 - ph;
    //     textOpacity = 0;
    //     luciaOpacity = 0.4 + (ph * 0.4);
    //   }

      

    //   // Apply all values via GSAP set (much smoother than .style)
    //   gsap.set(bgImage, { opacity: bgOpacity, scale: 1.05 });
    //   gsap.set(luciaBgImageRef.current, { opacity: luciaOpacity });

    //   // Jason Text
    //   gsap.set(jasonName, { y: 800 - baseScroll, opacity: textOpacity });
    //   gsap.set(jasonQuote, { y: 900 - baseScroll, opacity: textOpacity });
    //   gsap.set(jasonDesc, { y: 1050 - baseScroll, opacity: textOpacity });

    //   // Jason Images
    //   gsap.set(jasonImg1, { y: 800 - baseScroll, opacity: imagesOpacity });
    //   gsap.set(jasonImg2, { y: 1000 - baseScroll, opacity: imagesOpacity });
    //   gsap.set(jasonImg3, { y: 1100 - baseScroll, opacity: imagesOpacity });
    // }



// PHASE 1: DIM TO BRIGHT (0 - 0.02)
if (p < 0.02) {
  const revealProgress = p / 0.02;
  
  // Dim already partially visible from Hero crossfade, complete it
  if (textDim) textDim.style.opacity = String(Math.max(0.5, Math.min(1, revealProgress * 5) * 0.5));
  
  // Bright fades in
  const brightProgress = Math.max(0, (revealProgress - 0.3) / 0.7);
  if (textBright) {
    textBright.style.webkitMaskImage = 'none';
    textBright.style.maskImage = 'none';
    textBright.style.opacity = String(brightProgress);
  }
  if (textGlow) {
    textGlow.style.webkitMaskImage = 'none';
    textGlow.style.maskImage = 'none';
    textGlow.style.opacity = '0';
  }
  
  gsap.set(storyText, { 
    opacity: 1, scale: 1, y: 0,
    position: 'absolute', top: '50%', left: '50%',
    xPercent: -50, yPercent: -50
  });
  
  gsap.set(bgImage, { opacity: 0, scale: 1.1 });
  gsap.set([jasonName, jasonQuote, jasonDesc, jasonImg1, jasonImg2, jasonImg3], { y: '100vh', opacity: 0 });
}

// PHASE 1.5: BRIGHT TEXT HOLDS (0.02 - 0.05)
else if (p >= 0.02 && p < 0.05) {
  if (textDim) textDim.style.opacity = '0.5';
  if (textBright) {
    textBright.style.webkitMaskImage = 'none';
    textBright.style.maskImage = 'none';
    textBright.style.opacity = '1';
  }
  if (textGlow) {
    textGlow.style.webkitMaskImage = 'none';
    textGlow.style.maskImage = 'none';
    textGlow.style.opacity = '0';
  }
  
  gsap.set(storyText, { 
    opacity: 1, scale: 1, y: 0,
    position: 'absolute', top: '50%', left: '50%',
    xPercent: -50, yPercent: -50
  });
  
  gsap.set(bgImage, { opacity: 0, scale: 1.1 });
  gsap.set([jasonName, jasonQuote, jasonDesc, jasonImg1, jasonImg2, jasonImg3], { y: '100vh', opacity: 0 });
}

// PHASE 2: TEXT EXIT (0.05 - 0.15)
else if (p >= 0.05 && p < 0.15) {
  const exitProgress = (p - 0.05) / 0.10;
  const eased = gsap.parseEase("power2.inOut")(exitProgress);

  updateRadialMasks(eased < 0.2 ? 0.5 + (eased / 0.2 * 0.5) : 1);
  
  const scale = 1 - (eased * 0.45);
  const yMove = -(eased * 200);
  const textOpacity = 1 - (eased * 1.2);

  gsap.set(storyText, { 
    top: '50%', left: '50%',
    xPercent: -50, yPercent: -50,
    y: yMove, 
    scale: Math.max(0.3, scale),
    opacity: Math.max(0, textOpacity) 
  });

  const bgDelay = 0.4;
  const bgProg = Math.max(0, (exitProgress - bgDelay) / (1 - bgDelay));
  const bgEased = gsap.parseEase("power2.out")(bgProg);
  
  gsap.set(bgImage, { opacity: bgEased, scale: 1.1 - (bgEased * 0.05) });
  gsap.set([jasonName, jasonQuote, jasonDesc, jasonImg1, jasonImg2, jasonImg3], { y: '100vh' });
}

// PHASE 3+: JASON CONTENT (0.15 - 1.0)
else if (p >= 0.15) {
  gsap.set(storyText, { opacity: 0 });
  if (exitContainer) exitContainer.style.webkitMaskImage = 'none';

  let baseScroll = 0;
  let bgOpacity = 0;
  let textOpacity = 1;
  let imagesOpacity = 1;
  let luciaOpacity = 0;

  if (p < 0.25) {
    const ph = (p - 0.15) / 0.10;
    baseScroll = ph * 600;
    bgOpacity = 1 - (ph * 0.7);
  } 
  else if (p < 0.35) {
    const ph = (p - 0.25) / 0.10;
    baseScroll = 600 + (ph * 400);
    bgOpacity = 0.3 - (ph * 0.3);
  }
  else if (p < 0.45) {
    const ph = (p - 0.35) / 0.10;
    baseScroll = 1000 + (ph * 300);
    bgOpacity = 0;
  }
  else if (p < 0.55) {
    const ph = (p - 0.45) / 0.10;
    baseScroll = 1300 + (ph * 250);
    bgOpacity = 0;
  }
  else if (p < 0.65) {
    const ph = (p - 0.55) / 0.10;
    baseScroll = 1550 + (ph * 200);
    textOpacity = 1 - ph;
    bgOpacity = 0;
  }
  else if (p < 0.75) {
    const ph = (p - 0.65) / 0.10;
    baseScroll = 1750 + (ph * 200);
    textOpacity = 0;
    luciaOpacity = ph * 0.4;
  }
  else {
    const ph = (p - 0.75) / 0.25;
    baseScroll = 1950 + (ph * 400);
    imagesOpacity = 1 - ph;
    textOpacity = 0;
    luciaOpacity = 0.4 + (ph * 0.4);
  }

  gsap.set(bgImage, { opacity: bgOpacity, scale: 1.05 });
  gsap.set(luciaBgImageRef.current, { opacity: luciaOpacity });

  gsap.set(jasonName, { y: 800 - baseScroll, opacity: textOpacity });
  gsap.set(jasonQuote, { y: 900 - baseScroll, opacity: textOpacity });
  gsap.set(jasonDesc, { y: 1050 - baseScroll, opacity: textOpacity });

  gsap.set(jasonImg1, { y: 800 - baseScroll, opacity: imagesOpacity });
  gsap.set(jasonImg2, { y: 1000 - baseScroll, opacity: imagesOpacity });
  gsap.set(jasonImg3, { y: 1100 - baseScroll, opacity: imagesOpacity });
}

}
});
      


      // ========================================
      // LUCIA SECTION ANIMATION
      // ========================================
      
      const luciaSection = luciaSectionRef.current;
      const luciaSticky = luciaStickyRef.current;
      const luciaBgImage = luciaBgImageRef.current;
      const luciaBgOverlay = luciaBgOverlayRef.current;
      const luciaMainQuote = luciaMainQuoteRef.current;
      const luciaSubQuote = luciaSubQuoteRef.current;
      const luciaDesc = luciaDescRef.current;
      const luciaImg1 = luciaImg1Ref.current;
      const luciaImg2 = luciaImg2Ref.current;
      const luciaImg3 = luciaImg3Ref.current;
      
      // Initial states for Lucia
      gsap.set(luciaBgImage, { opacity: 0, scale: 1.1 });
      gsap.set(luciaBgOverlay, { background: 'rgba(10, 10, 10, 0)' });
      gsap.set(luciaMainQuote, { y: '100vh', opacity: 0 });
      gsap.set(luciaSubQuote, { y: '100vh', opacity: 0 });
      gsap.set(luciaDesc, { y: '100vh', opacity: 0 });
      gsap.set(luciaImg1, { y: '100vh', opacity: 0 });
      gsap.set(luciaImg2, { y: '100vh', opacity: 0 });
      gsap.set(luciaImg3, { y: '100vh', opacity: 0 });
      
      // ScrollTrigger.create({
      //   trigger: luciaSection,
      //   start: 'top top',
      //   end: '100% top',
      //   scrub: 1.5,
      //   pin: luciaSticky,
      //   pinSpacing: false,
      //   onUpdate: (self) => {
      //     const p = self.progress;
          
      //     // ========================================
      //     // LUCIA PHASE 1: BG FADES IN (0 - 0.12)
      //     // ========================================
      //     if (p < 0.12) {
      //       const bgProgress = p / 0.12;

      //       gsap.set(luciaBgImage, { opacity: 0.8 + (bgProgress * 0.2) });
      //       gsap.set(luciaBgOverlay, { background: 'rgba(10, 10, 10, 0)' });
      //       // gsap.set(luciaBgImage, { opacity: bgProgress, scale: 1.1 - (bgProgress * 0.05) });
      //       // gsap.set(luciaBgOverlay, { background: 'rgba(10, 10, 10, 0)' });
            
      //       // Content still hidden
      //       gsap.set(luciaMainQuote, { y: '100vh', opacity: 0 });
      //       gsap.set(luciaSubQuote, { y: '100vh', opacity: 0 });
      //       gsap.set(luciaDesc, { y: '100vh', opacity: 0 });
      //       gsap.set(luciaImg1, { y: '100vh', opacity: 0 });
      //       gsap.set(luciaImg2, { y: '100vh', opacity: 0 });
      //       gsap.set(luciaImg3, { y: '100vh', opacity: 0 });
      //     }
          
      //     // ========================================
      //     // LUCIA PHASE 2: MAIN QUOTE FADES IN (0.12 - 0.25)
      //     // Quote appears with fade effect (light to dark)
      //     // ========================================
      //     else if (p >= 0.12 && p < 0.25) {
      //       const phase2 = (p - 0.12) / 0.13;
            
      //        gsap.set(luciaBgImage, { opacity: 1, scale: 1.05 });
      //       // const bgOpacity = 1 - (phase2 * 0.3);
      //       // gsap.set(luciaBgImage, { opacity: bgOpacity });
      //       // gsap.set(luciaBgOverlay, { background: `rgba(10, 10, 10, ${phase2 * 0.3})` });
            
      //       // Main quote fades in (light to fully visible)
      //       const quoteOpacity = phase2;
      //       const baseScroll = phase2 * 400;
            
      //       gsap.set(luciaMainQuote, { y: 600 - baseScroll, opacity: quoteOpacity });
      //       gsap.set(luciaSubQuote, { y: '100vh', opacity: 0 });
      //       gsap.set(luciaDesc, { y: '100vh', opacity: 0 });
      //       gsap.set(luciaImg1, { y: '100vh', opacity: 0 });
      //       gsap.set(luciaImg2, { y: '100vh', opacity: 0 });
      //       gsap.set(luciaImg3, { y: '100vh', opacity: 0 });
      //     }
          
      //     // ========================================
      //     // LUCIA PHASE 3: SUB-QUOTE + DESC ENTER (0.25 - 0.38)
      //     // ========================================
      //     else if (p >= 0.25 && p < 0.38) {
      //       const phase3 = (p - 0.25) / 0.13;
            
      //       // BG continues darkening
      
      //       const bgOpacity = 1 - (phase3 * 0.4);
      //       gsap.set(luciaBgImage, { opacity: bgOpacity });
      //       gsap.set(luciaBgOverlay, { background: `rgba(10, 10, 10, ${0.4+ (phase3 * 0.4)})` });
                                  
      //       const baseScroll = 400 + (phase3 * 350);
            
      //       gsap.set(luciaMainQuote, { y: 600 - baseScroll, opacity: 1 });
      //       gsap.set(luciaSubQuote, { y: 750 - baseScroll, opacity: phase3 });
      //       gsap.set(luciaDesc, { y: 900 - baseScroll, opacity: phase3 });
      //       gsap.set(luciaImg1, { y: 700 - baseScroll, opacity: phase3 });
      //       gsap.set(luciaImg2, { y: '100vh', opacity: 0 });
      //       gsap.set(luciaImg3, { y: '100vh', opacity: 0 });
      //     }
          
      //     // ========================================
      //     // LUCIA PHASE 4: IMAGES ENTER (0.38 - 0.52)
      //     // ========================================
      //     else if (p >= 0.38 && p < 0.52) {
      //       const phase4 = (p - 0.38) / 0.14;
            
      //       const bgOpacity = 0.6 - (phase4 * 0.3); 
      //       gsap.set(luciaBgImage, { opacity: bgOpacity });
      //       gsap.set(luciaBgOverlay, { background: `rgba(10, 10, 10, ${0.8 + (phase4 * 0.1)})` }); 
               
      //       gsap.set(luciaBgImage, { opacity: 0 });
      //       gsap.set(luciaBgOverlay, { background: 'rgba(10, 10, 10, 1)' });

      //       const baseScroll = 750 + (phase4 * 300);
            
      //       gsap.set(luciaMainQuote, { y: 600 - baseScroll, opacity: 1 });
      //       gsap.set(luciaSubQuote, { y: 750 - baseScroll, opacity: 1 });
      //       gsap.set(luciaDesc, { y: 900 - baseScroll, opacity: 1 });
      //       gsap.set(luciaImg1, { y: 700 - baseScroll, opacity: 1 });
      //       gsap.set(luciaImg2, { y: 950 - baseScroll, opacity: phase4 });
      //       gsap.set(luciaImg3, { y: 850 - baseScroll, opacity: phase4 });
      //     }
          
      //     // ========================================
      //     // LUCIA PHASE 5: BG STARTS DARKENING (0.52 - 0.65)
      //     // ========================================
      //     else if (p >= 0.52 && p < 0.65) {
      //       const phase5 = (p - 0.52) / 0.13;
            
      //       // BG starts to darken with overlay
      //       const bgOpacity = 0.3 - (phase5 * 0.15); // 0.4 -> 0.15
      //       gsap.set(luciaBgImage, { opacity: bgOpacity });
      //       gsap.set(luciaBgOverlay, { background: `rgba(10, 10, 10, ${0.9 + (phase5 * 0.05)})` }); 
      //       // gsap.set(luciaBgImage, { opacity: 0 });
      //       // gsap.set(luciaBgOverlay, { background: 'rgba(10, 10, 10, 1)' });
            
      //       const baseScroll = 1050 + (phase5 * 250);
            
      //       gsap.set(luciaMainQuote, { y: 600 - baseScroll, opacity: 1 });
      //       gsap.set(luciaSubQuote, { y: 750 - baseScroll, opacity: 1 });
      //       gsap.set(luciaDesc, { y: 900 - baseScroll, opacity: 1 });
      //       gsap.set(luciaImg1, { y: 700 - baseScroll, opacity: 1 });
      //       gsap.set(luciaImg2, { y: 950 - baseScroll, opacity: 1 });
      //       gsap.set(luciaImg3, { y: 850 - baseScroll, opacity: 1 });
      //     }
          
      //     // ========================================
      //     // LUCIA PHASE 6: BG FADES TO BLACK, TEXT FADES (0.65 - 0.78)
      //     // ========================================
      //     else if (p >= 0.65 && p < 0.78) {
      //       const phase6 = (p - 0.65) / 0.13;
            
      //       // // BG continues darkening
      //       const bgOpacity = 0.15 - (phase6 * 0.15); // 0.15 -> 0
      //       gsap.set(luciaBgImage, { opacity: bgOpacity });
      //       gsap.set(luciaBgOverlay, { background: `rgba(10, 10, 10, ${0.95 + (phase6 * 0.05)})` }); // 0.7 -> 1
            
      //       // gsap.set(luciaBgImage, { opacity: 0 });
      //       // gsap.set(luciaBgOverlay, { background: 'rgba(10, 10, 10, 1)' });
            
          
      //       const baseScroll = 1300 + (phase6 * 200);
      //       const textOpacity = 1 - phase6;
            
      //       gsap.set(luciaMainQuote, { y: 600 - baseScroll, opacity: textOpacity });
      //       gsap.set(luciaSubQuote, { y: 750 - baseScroll, opacity: textOpacity });
      //       gsap.set(luciaDesc, { y: 900 - baseScroll, opacity: textOpacity });
      //       gsap.set(luciaImg1, { y: 700 - baseScroll, opacity: 1 });
      //       gsap.set(luciaImg2, { y: 950 - baseScroll, opacity: 1 });
      //       gsap.set(luciaImg3, { y: 850 - baseScroll, opacity: 1 });
      //     }
          
      //     // ========================================
      //     // LUCIA PHASE 7: IMAGES ONLY (0.78 - 0.88)
      //     // ========================================
      //     else if (p >= 0.78 && p < 0.88) {
      //       const phase7 = (p - 0.78) / 0.10;
            
      //       gsap.set(luciaBgImage, { opacity: 0 });
      //       gsap.set(luciaBgOverlay, { background: 'rgba(10, 10, 10, 1)' });
            
      //       const baseScroll = 1500 + (phase7 * 500);
            
      //       gsap.set(luciaMainQuote, { opacity: 0 });
      //       gsap.set(luciaSubQuote, { opacity: 0 });
      //       gsap.set(luciaDesc, { opacity: 0 });
      //       gsap.set(luciaImg1, { y: 700 - baseScroll, opacity: 1 });
      //       gsap.set(luciaImg2, { y: 950 - baseScroll, opacity: 1 });
      //       gsap.set(luciaImg3, { y: 850 - baseScroll, opacity: 1 });
      //     }
          
      //     // ========================================
      //     // LUCIA PHASE 8: EXIT (0.88 - 1.0)
      //     // ========================================
      //     else if (p >= 0.88) {
      //       const phase8 = (p - 0.88) / 0.12;
            
      //       gsap.set(luciaBgImage, { opacity: 0 });
      //       gsap.set(luciaBgOverlay, { background: 'rgba(10, 10, 10, 1)' });
            
      //       const baseScroll = 2000 + (phase8 * 1000);
      //       // const exitOpacity = 1 - phase8;
            
      //       gsap.set(luciaMainQuote, { opacity: 0 });
      //       gsap.set(luciaSubQuote, { opacity: 0 });
      //       gsap.set(luciaDesc, { opacity: 0 });
      //       gsap.set(luciaImg1, { y: 700 - baseScroll, opacity: 1 });
      //       gsap.set(luciaImg2, { y: 950 - baseScroll, opacity: 1 });
      //       gsap.set(luciaImg3, { y: 850 - baseScroll, opacity: 1 });
      //     }
      //   }
      // });

    // //more shrinking 
    // ScrollTrigger.create({
    //   trigger: luciaSection,
    //   start: 'top top',
    //   end: '100% top',
    //   scrub: 1.5,
    //   pin: luciaSticky,
    //   pinSpacing: false,
    //   onUpdate: (self) => {
    //     const p = self.progress;
        
    //     // LUCIA PHASE 1: BG FADES IN (0 - 0.01)
    //     if (p < 0.01) {
    //       const bgProgress = p / 0.01;
    //       gsap.set(luciaBgImage, { opacity: 0.8 + (bgProgress * 0.2) });
    //       gsap.set(luciaBgOverlay, { background: 'rgba(10, 10, 10, 0)' });
    //       gsap.set(luciaMainQuote, { y: '100vh', opacity: 0 });
    //       gsap.set(luciaSubQuote, { y: '100vh', opacity: 0 });
    //       gsap.set(luciaDesc, { y: '100vh', opacity: 0 });
    //       gsap.set(luciaImg1, { y: '100vh', opacity: 0 });
    //       gsap.set(luciaImg2, { y: '100vh', opacity: 0 });
    //       gsap.set(luciaImg3, { y: '100vh', opacity: 0 });
    //     }
        
    //     // LUCIA PHASE 2: MAIN QUOTE FADES IN (0.01 - 0.15)
    //     else if (p >= 0.01 && p < 0.15) {
    //       const phase2 = (p - 0.01) / 0.14;
    //       gsap.set(luciaBgImage, { opacity: 1, scale: 1.05 });
    //       const quoteOpacity = phase2;
    //       const baseScroll = phase2 * 400;
    //       gsap.set(luciaMainQuote, { y: 600 - baseScroll, opacity: quoteOpacity });
    //       gsap.set(luciaSubQuote, { y: '100vh', opacity: 0 });
    //       gsap.set(luciaDesc, { y: '100vh', opacity: 0 });
    //       gsap.set(luciaImg1, { y: '100vh', opacity: 0 });
    //       gsap.set(luciaImg2, { y: '100vh', opacity: 0 });
    //       gsap.set(luciaImg3, { y: '100vh', opacity: 0 });
    //     }
        
    //     // LUCIA PHASE 3: SUB-QUOTE + DESC ENTER (0.15 - 0.29)
    //     else if (p >= 0.15 && p < 0.29) {
    //       const phase3 = (p - 0.15) / 0.14;
    //       const bgOpacity = 1 - (phase3 * 0.4);
    //       gsap.set(luciaBgImage, { opacity: bgOpacity });
    //       gsap.set(luciaBgOverlay, { background: `rgba(10, 10, 10, ${0.4 + (phase3 * 0.4)})` });
    //       const baseScroll = 400 + (phase3 * 350);
    //       gsap.set(luciaMainQuote, { y: 600 - baseScroll, opacity: 1 });
    //       gsap.set(luciaSubQuote, { y: 750 - baseScroll, opacity: phase3 });
    //       gsap.set(luciaDesc, { y: 900 - baseScroll, opacity: phase3 });
    //       gsap.set(luciaImg1, { y: 700 - baseScroll, opacity: phase3 });
    //       gsap.set(luciaImg2, { y: '100vh', opacity: 0 });
    //       gsap.set(luciaImg3, { y: '100vh', opacity: 0 });
    //     }
        
    //     // LUCIA PHASE 4: IMAGES ENTER (0.29 - 0.43)
    //     else if (p >= 0.29 && p < 0.43) {
    //       const phase4 = (p - 0.29) / 0.14;
    //       gsap.set(luciaBgImage, { opacity: 0 });
    //       gsap.set(luciaBgOverlay, { background: 'rgba(10, 10, 10, 1)' });
    //       const baseScroll = 750 + (phase4 * 300);
    //       gsap.set(luciaMainQuote, { y: 600 - baseScroll, opacity: 1 });
    //       gsap.set(luciaSubQuote, { y: 750 - baseScroll, opacity: 1 });
    //       gsap.set(luciaDesc, { y: 900 - baseScroll, opacity: 1 });
    //       gsap.set(luciaImg1, { y: 700 - baseScroll, opacity: 1 });
    //       gsap.set(luciaImg2, { y: 950 - baseScroll, opacity: phase4 });
    //       gsap.set(luciaImg3, { y: 850 - baseScroll, opacity: phase4 });
    //     }
        
    //     // LUCIA PHASE 5: CONTINUE SCROLLING (0.43 - 0.56)
    //     else if (p >= 0.43 && p < 0.56) {
    //       const phase5 = (p - 0.43) / 0.13;
    //       gsap.set(luciaBgImage, { opacity: 0 });
    //       gsap.set(luciaBgOverlay, { background: 'rgba(10, 10, 10, 1)' });
    //       const baseScroll = 1050 + (phase5 * 250);
    //       gsap.set(luciaMainQuote, { y: 600 - baseScroll, opacity: 1 });
    //       gsap.set(luciaSubQuote, { y: 750 - baseScroll, opacity: 1 });
    //       gsap.set(luciaDesc, { y: 900 - baseScroll, opacity: 1 });
    //       gsap.set(luciaImg1, { y: 700 - baseScroll, opacity: 1 });
    //       gsap.set(luciaImg2, { y: 950 - baseScroll, opacity: 1 });
    //       gsap.set(luciaImg3, { y: 850 - baseScroll, opacity: 1 });
    //     }
        
    //     // LUCIA PHASE 6: TEXT FADES (0.56 - 0.69)
    //     else if (p >= 0.56 && p < 0.69) {
    //       const phase6 = (p - 0.56) / 0.13;
    //       gsap.set(luciaBgImage, { opacity: 0 });
    //       gsap.set(luciaBgOverlay, { background: 'rgba(10, 10, 10, 1)' });
    //       const baseScroll = 1300 + (phase6 * 200);
    //       const textOpacity = 1 - phase6;
    //       gsap.set(luciaMainQuote, { y: 600 - baseScroll, opacity: textOpacity });
    //       gsap.set(luciaSubQuote, { y: 750 - baseScroll, opacity: textOpacity });
    //       gsap.set(luciaDesc, { y: 900 - baseScroll, opacity: textOpacity });
    //       gsap.set(luciaImg1, { y: 700 - baseScroll, opacity: 1 });
    //       gsap.set(luciaImg2, { y: 950 - baseScroll, opacity: 1 });
    //       gsap.set(luciaImg3, { y: 850 - baseScroll, opacity: 1 });
    //     }
        
    //     // LUCIA PHASE 7: IMAGES ONLY (0.69 - 0.82)
    //     else if (p >= 0.69 && p < 0.82) {
    //       const phase7 = (p - 0.69) / 0.13;
    //       gsap.set(luciaBgImage, { opacity: 0 });
    //       gsap.set(luciaBgOverlay, { background: 'rgba(10, 10, 10, 1)' });
    //       const baseScroll = 1500 + (phase7 * 500);
    //       gsap.set(luciaMainQuote, { opacity: 0 });
    //       gsap.set(luciaSubQuote, { opacity: 0 });
    //       gsap.set(luciaDesc, { opacity: 0 });
    //       gsap.set(luciaImg1, { y: 700 - baseScroll, opacity: 1 });
    //       gsap.set(luciaImg2, { y: 950 - baseScroll, opacity: 1 });
    //       gsap.set(luciaImg3, { y: 850 - baseScroll, opacity: 1 });
    //     }
        
    //     // LUCIA PHASE 8: EXIT (0.82 - 1.0)
    //     else if (p >= 0.82) {
    //       const phase8 = (p - 0.82) / 0.18;
    //       gsap.set(luciaBgImage, { opacity: 0 });
    //       gsap.set(luciaBgOverlay, { background: 'rgba(10, 10, 10, 1)' });
    //       const baseScroll = 2000 + (phase8 * 1000);
    //       gsap.set(luciaMainQuote, { opacity: 0 });
    //       gsap.set(luciaSubQuote, { opacity: 0 });
    //       gsap.set(luciaDesc, { opacity: 0 });
    //       gsap.set(luciaImg1, { y: 700 - baseScroll, opacity: 1 });
    //       gsap.set(luciaImg2, { y: 950 - baseScroll, opacity: 1 });
    //       gsap.set(luciaImg3, { y: 850 - baseScroll, opacity: 1 });
    //     }
    //   }
    // });

      //for overall same scrolling earlier it was fast at some place and slow at some place  


      ScrollTrigger.create({
        trigger: luciaSection,
        start: 'top top',
        end: '100% top',
        scrub: 1.5,
        pin: luciaSticky,
        pinSpacing: false,
        onUpdate: (self) => {
          const p = self.progress;
          
          // LUCIA PHASE 1: BG FADES IN (0 - 0.01)
          if (p < 0.01) {
            const bgProgress = p / 0.01;
            gsap.set(luciaBgImage, { opacity: 0.8 + (bgProgress * 0.2) });
            gsap.set(luciaBgOverlay, { background: 'rgba(10, 10, 10, 0)' });
            gsap.set(luciaMainQuote, { y: '100vh', opacity: 0 });
            gsap.set(luciaSubQuote, { y: '100vh', opacity: 0 });
            gsap.set(luciaDesc, { y: '100vh', opacity: 0 });
            gsap.set(luciaImg1, { y: '100vh', opacity: 0 });
            gsap.set(luciaImg2, { y: '100vh', opacity: 0 });
            gsap.set(luciaImg3, { y: '100vh', opacity: 0 });
          }
          
          // LUCIA PHASE 2: MAIN QUOTE FADES IN (0.01 - 0.15)
          else if (p >= 0.01 && p < 0.15) {
            const phase2 = (p - 0.01) / 0.14;
            gsap.set(luciaBgImage, { opacity: 1, scale: 1.05 });
            const quoteOpacity = phase2;
            const baseScroll = phase2 * 350;
            gsap.set(luciaMainQuote, { y: 600 - baseScroll, opacity: quoteOpacity });
            gsap.set(luciaSubQuote, { y: '100vh', opacity: 0 });
            gsap.set(luciaDesc, { y: '100vh', opacity: 0 });
            gsap.set(luciaImg1, { y: '100vh', opacity: 0 });
            gsap.set(luciaImg2, { y: '100vh', opacity: 0 });
            gsap.set(luciaImg3, { y: '100vh', opacity: 0 });
          }
          
          // LUCIA PHASE 3: SUB-QUOTE + DESC ENTER (0.15 - 0.29)
          else if (p >= 0.15 && p < 0.29) {
            const phase3 = (p - 0.15) / 0.14;
            const bgOpacity = 1 - (phase3 * 0.4);
            gsap.set(luciaBgImage, { opacity: bgOpacity });
            gsap.set(luciaBgOverlay, { background: `rgba(10, 10, 10, ${0.4 + (phase3 * 0.4)})` });
            const baseScroll = 350 + (phase3 * 350);
            gsap.set(luciaMainQuote, { y: 600 - baseScroll, opacity: 1 });
            gsap.set(luciaSubQuote, { y: 750 - baseScroll, opacity: phase3 });
            gsap.set(luciaDesc, { y: 900 - baseScroll, opacity: phase3 });
            gsap.set(luciaImg1, { y: 700 - baseScroll, opacity: phase3 });
            gsap.set(luciaImg2, { y: '100vh', opacity: 0 });
            gsap.set(luciaImg3, { y: '100vh', opacity: 0 });
          }
          
          // LUCIA PHASE 4: IMAGES ENTER (0.29 - 0.43)
          else if (p >= 0.29 && p < 0.43) {
            const phase4 = (p - 0.29) / 0.14;
            gsap.set(luciaBgImage, { opacity: 0 });
            gsap.set(luciaBgOverlay, { background: 'rgba(10, 10, 10, 1)' });
            const baseScroll = 700 + (phase4 * 350);
            gsap.set(luciaMainQuote, { y: 600 - baseScroll, opacity: 1 });
            gsap.set(luciaSubQuote, { y: 750 - baseScroll, opacity: 1 });
            gsap.set(luciaDesc, { y: 900 - baseScroll, opacity: 1 });
            gsap.set(luciaImg1, { y: 700 - baseScroll, opacity: 1 });
            gsap.set(luciaImg2, { y: 950 - baseScroll, opacity: phase4 });
            gsap.set(luciaImg3, { y: 850 - baseScroll, opacity: phase4 });
          }
          
          // LUCIA PHASE 5: CONTINUE SCROLLING (0.43 - 0.56)
          else if (p >= 0.43 && p < 0.56) {
            const phase5 = (p - 0.43) / 0.13;
            gsap.set(luciaBgImage, { opacity: 0 });
            gsap.set(luciaBgOverlay, { background: 'rgba(10, 10, 10, 1)' });
            const baseScroll = 1050 + (phase5 * 325);
            gsap.set(luciaMainQuote, { y: 600 - baseScroll, opacity: 1 });
            gsap.set(luciaSubQuote, { y: 750 - baseScroll, opacity: 1 });
            gsap.set(luciaDesc, { y: 900 - baseScroll, opacity: 1 });
            gsap.set(luciaImg1, { y: 700 - baseScroll, opacity: 1 });
            gsap.set(luciaImg2, { y: 950 - baseScroll, opacity: 1 });
            gsap.set(luciaImg3, { y: 850 - baseScroll, opacity: 1 });
          }
          
          // LUCIA PHASE 6: TEXT FADES (0.56 - 0.69)
          else if (p >= 0.56 && p < 0.69) {
            const phase6 = (p - 0.56) / 0.13;
            gsap.set(luciaBgImage, { opacity: 0 });
            gsap.set(luciaBgOverlay, { background: 'rgba(10, 10, 10, 1)' });
            const baseScroll = 1375 + (phase6 * 325);
            const textOpacity = 1 - phase6;
            gsap.set(luciaMainQuote, { y: 600 - baseScroll, opacity: textOpacity });
            gsap.set(luciaSubQuote, { y: 750 - baseScroll, opacity: textOpacity });
            gsap.set(luciaDesc, { y: 900 - baseScroll, opacity: textOpacity });
            gsap.set(luciaImg1, { y: 700 - baseScroll, opacity: 1 });
            gsap.set(luciaImg2, { y: 950 - baseScroll, opacity: 1 });
            gsap.set(luciaImg3, { y: 850 - baseScroll, opacity: 1 });
          }
          
          // LUCIA PHASE 7: IMAGES ONLY (0.69 - 0.82)
          else if (p >= 0.69 && p < 0.82) {
            const phase7 = (p - 0.69) / 0.13;
            gsap.set(luciaBgImage, { opacity: 0 });
            gsap.set(luciaBgOverlay, { background: 'rgba(10, 10, 10, 1)' });
            const baseScroll = 1700 + (phase7 * 325);
            gsap.set(luciaMainQuote, { opacity: 0 });
            gsap.set(luciaSubQuote, { opacity: 0 });
            gsap.set(luciaDesc, { opacity: 0 });
            gsap.set(luciaImg1, { y: 700 - baseScroll, opacity: 1 });
            gsap.set(luciaImg2, { y: 950 - baseScroll, opacity: 1 });
            gsap.set(luciaImg3, { y: 850 - baseScroll, opacity: 1 });
          }
          
          // LUCIA PHASE 8: EXIT (0.82 - 1.0)
          else if (p >= 0.82) {
            const phase8 = (p - 0.82) / 0.18;
            gsap.set(luciaBgImage, { opacity: 0 });
            gsap.set(luciaBgOverlay, { background: 'rgba(10, 10, 10, 1)' });
            const baseScroll = 2025 + (phase8 * 450);
            gsap.set(luciaMainQuote, { opacity: 0 });
            gsap.set(luciaSubQuote, { opacity: 0 });
            gsap.set(luciaDesc, { opacity: 0 });
            gsap.set(luciaImg1, { y: 700 - baseScroll, opacity: 1 });
            gsap.set(luciaImg2, { y: 950 - baseScroll, opacity: 1 });
            gsap.set(luciaImg3, { y: 850 - baseScroll, opacity: 1 });
          }
        }
      });

/////////
          // ========================================
          // LUCIA CHARACTER SECTION ANIMATION
          // ========================================

          const luciaCharSection = luciaCharSectionRef.current;
          const luciaCharSticky = luciaCharStickyRef.current;
          const luciaCharBgImage = luciaCharBgImageRef.current;
          const luciaCharBgOverlay = luciaCharBgOverlayRef.current;
          const luciaCharName = luciaCharNameRef.current;
          const luciaCharQuote = luciaCharQuoteRef.current;
          const luciaCharDesc = luciaCharDescRef.current;
          const luciaCharDesc2 = luciaCharDesc2Ref.current;
          const luciaCharImg1 = luciaCharImg1Ref.current;
          const luciaCharImg2 = luciaCharImg2Ref.current;
          const luciaCharImg3 = luciaCharImg3Ref.current;

          // Initial states - ALL start below viewport
          gsap.set(luciaCharBgImage, { opacity: 0 });
          gsap.set(luciaCharBgOverlay, { background: 'rgba(10, 10, 10, 0)' });
          gsap.set(luciaCharName, { y: '100vh' });
          gsap.set(luciaCharQuote, { y: '100vh' });
          gsap.set(luciaCharDesc, { y: '100vh' });
          gsap.set(luciaCharDesc2, { y: '100vh' });
          gsap.set(luciaCharImg1, { opacity: 0 });
          gsap.set(luciaCharImg2, { opacity: 0 });
          gsap.set(luciaCharImg3, { opacity: 0 });



//original
          // ScrollTrigger.create({
          //   trigger: luciaCharSection,
          //   start: 'top top',
          //   end: '100% top',
          //   scrub: 1.5,
          //   pin: luciaCharSticky,
          //   pinSpacing: false,
          //   onUpdate: (self) => {
          //     const p = self.progress;
              
          //     // ========================================
          //     // LUCIA CHAR PHASE 1: BG FADES IN (0 - 0.10)
          //     // ========================================
          //     if (p < 0.10) {
          //       const phase1 = p / 0.10;
                
          //       gsap.set(luciaCharBgImage, { opacity: phase1 });
          //       gsap.set(luciaCharBgOverlay, { background: 'rgba(10, 10, 10, 0)' });
                
          //       // All content hidden below
          //       gsap.set(luciaCharName, { y: '100vh' });
          //       gsap.set(luciaCharQuote, { y: '100vh' });
          //       gsap.set(luciaCharDesc, { y: '100vh' });
          //       gsap.set(luciaCharDesc2, { y: '100vh' });
          //       gsap.set(luciaCharImg1, { y: '100vh', opacity: 0 });
          //       gsap.set(luciaCharImg2, { y: '100vh', opacity: 0 });
          //       gsap.set(luciaCharImg3, { y: '100vh', opacity: 0 });
          //     }
              
          //     // ========================================
          //     // LUCIA CHAR PHASE 2: NAME SCROLLS UP (0.10 - 0.20)
          //     // ========================================
          //     else if (p >= 0.10 && p < 0.20) {
          //       const phase2 = (p - 0.10) / 0.10;
                
          //       gsap.set(luciaCharBgImage, { opacity: 1 });
          //       gsap.set(luciaCharBgOverlay, { background: `rgba(10, 10, 10, ${phase2 * 0.75})` });

                
          //       const baseScroll = phase2 * 600;
                
          //       gsap.set(luciaCharName, { y: 800 - baseScroll });
          //       gsap.set(luciaCharQuote, { y: 900 - baseScroll });
          //       gsap.set(luciaCharDesc, { y: 1050 - baseScroll });
          //       gsap.set(luciaCharDesc2, { y: '100vh' });
          //       gsap.set(luciaCharImg1, { y: 800 - baseScroll, opacity: 1 });
          //       gsap.set(luciaCharImg2, { y: 1000 - baseScroll, opacity: 1 });
          //       gsap.set(luciaCharImg3, { y: 1100 - baseScroll, opacity: 1 });
          //     }
              
          //     // ========================================
          //     // LUCIA CHAR PHASE 3: QUOTE ENTERS (0.20 - 0.30)
          //     // ========================================
          //     else if (p >= 0.20 && p < 0.30) {
          //       const phase3 = (p - 0.20) / 0.10;
                
          //       // const bgOpacity = 1 - (phase3 * 0.3);
          //       // gsap.set(luciaCharBgImage, { opacity: bgOpacity });
          //       // gsap.set(luciaCharBgOverlay, { background: `rgba(10, 10, 10, ${phase3 * 0.3})` });
                

          //       gsap.set(luciaCharBgImage, { opacity: 1 });
          //       // Continue darkening
          //       gsap.set(luciaCharBgOverlay, { background: `rgba(10, 10, 10, ${0.75 + (phase3 * 0.2)})` });
                

          //       const baseScroll = 600 + (phase3 * 400);
                
          //       gsap.set(luciaCharName, { y: 800 - baseScroll });
          //       gsap.set(luciaCharQuote, { y: 900 - baseScroll });
          //       gsap.set(luciaCharDesc, { y: 1050 - baseScroll });
          //       gsap.set(luciaCharDesc2, { y: 1200 - baseScroll });
          //       gsap.set(luciaCharImg1, { y: 800 - baseScroll, opacity: 1 });
          //       gsap.set(luciaCharImg2, { y: 1000 - baseScroll, opacity: 1 });
          //       gsap.set(luciaCharImg3, { y: 1100 - baseScroll, opacity: 1 });
          //     }
              
          //     // ========================================
          //     // LUCIA CHAR PHASE 4: DESC + IMAGES VISIBLE (0.30 - 0.42)
          //     // ========================================
          //     else if (p >= 0.30 && p < 0.42) {
          //       const phase4 = (p - 0.30) / 0.12;
                
          //       // const bgOpacity = 0.7 - (phase4 * 0.3);
          //       // gsap.set(luciaCharBgImage, { opacity: bgOpacity });
          //       // gsap.set(luciaCharBgOverlay, { background: `rgba(10, 10, 10, ${0.3 + (phase4 * 0.3)})` });
                
          //       gsap.set(luciaCharBgImage, { opacity: 1 });
          //       // Continue darkening
          //       gsap.set(luciaCharBgOverlay, { background: `rgba(10, 10, 10, ${0.9 + (phase4 * 0.15)})` });
                

          //       const baseScroll = 1000 + (phase4 * 300);
                
          //       gsap.set(luciaCharName, { y: 800 - baseScroll });
          //       gsap.set(luciaCharQuote, { y: 900 - baseScroll });
          //       gsap.set(luciaCharDesc, { y: 1050 - baseScroll });
          //       gsap.set(luciaCharDesc2, { y: 1200 - baseScroll });
          //       gsap.set(luciaCharImg1, { y: 800 - baseScroll, opacity: 1 });
          //       gsap.set(luciaCharImg2, { y: 1000 - baseScroll, opacity: 1 });
          //       gsap.set(luciaCharImg3, { y: 1100 - baseScroll, opacity: 1 });
          //     }
              
          //     // ========================================
          //     // LUCIA CHAR PHASE 5: BG FADES (0.42 - 0.55)
          //     // ========================================
          //     else if (p >= 0.42 && p < 0.55) {
          //       const phase5 = (p - 0.42) / 0.13;
                
          //       // const bgOpacity = 0.4 - (phase5 * 0.4);
          //       // gsap.set(luciaCharBgImage, { opacity: bgOpacity });
          //       // gsap.set(luciaCharBgOverlay, { background: `rgba(10, 10, 10, ${0.6 + (phase5 * 0.4)})` });
                
          //       gsap.set(luciaCharBgImage, { opacity: 1 });
          //       // Continue darkening
          //       gsap.set(luciaCharBgOverlay, { background: `rgba(10, 10, 10, ${0.95 + (phase5 * 0.1)})` });
  
          //       const baseScroll = 1300 + (phase5 * 250);
                
          //       gsap.set(luciaCharName, { y: 800 - baseScroll });
          //       gsap.set(luciaCharQuote, { y: 900 - baseScroll });
          //       gsap.set(luciaCharDesc, { y: 1050 - baseScroll });
          //       gsap.set(luciaCharDesc2, { y: 1200 - baseScroll });
          //       gsap.set(luciaCharImg1, { y: 800 - baseScroll, opacity: 1 });
          //       gsap.set(luciaCharImg2, { y: 1000 - baseScroll, opacity: 1 });
          //       gsap.set(luciaCharImg3, { y: 1100 - baseScroll, opacity: 1 });
          //     }
              
          //     // ========================================
          //     // LUCIA CHAR PHASE 6: BG BLACK, TEXT FADES (0.55 - 0.68)
          //     // ========================================
          //     else if (p >= 0.55 && p < 0.68) {
          //       const phase6 = (p - 0.55) / 0.13;
                
          //       // gsap.set(luciaCharBgImage, { opacity: 0 });
          //       // gsap.set(luciaCharBgOverlay, { background: 'rgba(10, 10, 10, 1)' });
                

          //       gsap.set(luciaCharBgImage, { opacity: 0 });
          //       // Almost fully dark
          //       // gsap.set(luciaCharBgOverlay, { background: `rgba(10, 10, 10, 1)` });
          //       gsap.set(luciaCharBgOverlay, { background: 'rgba(10, 10, 10, 1)' });

                
          //       const baseScroll = 1550 + (phase6 * 200);
          //       const textOpacity = 1 - phase6;
                
          //       gsap.set(luciaCharName, { y: 800 - baseScroll, opacity: textOpacity });
          //       gsap.set(luciaCharQuote, { y: 900 - baseScroll, opacity: textOpacity });
          //       gsap.set(luciaCharDesc, { y: 1050 - baseScroll, opacity: textOpacity });
          //       gsap.set(luciaCharDesc2, { y: 1200 - baseScroll, opacity: 1 });
          //       gsap.set(luciaCharImg1, { y: 800 - baseScroll, opacity: 1 });
          //       gsap.set(luciaCharImg2, { y: 1000 - baseScroll, opacity: 1 });
          //       gsap.set(luciaCharImg3, { y: 1100 - baseScroll, opacity: 1 });
          //     }
              
          //     // ========================================
          //     // LUCIA CHAR PHASE 7: IMAGES ONLY (0.68 - 0.82)
          //     // ========================================
          //     else if (p >= 0.68 && p < 0.82) {
          //       const phase7 = (p - 0.68) / 0.14;
                
          //       gsap.set(luciaCharBgImage, { opacity: 0 });
          //       gsap.set(luciaCharBgOverlay, { background: 'rgba(10, 10, 10, 1)' });
                
          //       const baseScroll = 1750 + (phase7 * 200);
                
          //       gsap.set(luciaCharName, { opacity: 0 });
          //       gsap.set(luciaCharQuote, { opacity: 0 });
          //       gsap.set(luciaCharDesc, { opacity: 0 });
          //       // gsap.set(luciaCharDesc2, { opacity: 0 });
          //       gsap.set(luciaCharDesc2, { y: 1200 - baseScroll, opacity: 1 });
          //       gsap.set(luciaCharImg1, { y: 800 - baseScroll, opacity: 1 });
          //       gsap.set(luciaCharImg2, { y: 1000 - baseScroll, opacity: 1 });
          //       gsap.set(luciaCharImg3, { y: 1100 - baseScroll, opacity: 1 });

          //        // Start fading in Leonida BG
          //       // gsap.set(leonidaBgImageRef.current, { opacity: phase7 * 0.5 });
          //     }
              
          //     // ========================================
          //     // LUCIA CHAR PHASE 8: EXIT (0.82 - 1.0)
          //     // ========================================
          //     else if (p >= 0.82) {
          //       const phase8 = (p - 0.82) / 0.18;
                
          //       // gsap.set(luciaCharBgImage, { opacity: 0 });
          //       // gsap.set(luciaCharBgOverlay, { background: 'rgba(10, 10, 10, 1)' });
                
          //       gsap.set(luciaCharBgImage, { opacity: 1 });
          //       // Stay fully dark
          //       gsap.set(luciaCharBgOverlay, { background: 'rgba(10, 10, 10, 1)' });
                

          //       const baseScroll = 1950 + (phase8 * 800);
                
          //       gsap.set(luciaCharName, { opacity: 0 });
          //       gsap.set(luciaCharQuote, { opacity: 0 });
          //       gsap.set(luciaCharDesc, { opacity: 0 });
          //       // gsap.set(luciaCharDesc2, { opacity: 0 });
          //       gsap.set(luciaCharDesc2, { y: 1200 - baseScroll, opacity: 1 }); 
          //       gsap.set(luciaCharImg1, { y: 800 - baseScroll, opacity: 1 });
          //       gsap.set(luciaCharImg2, { y: 1000 - baseScroll, opacity: 1 });
          //       gsap.set(luciaCharImg3, { y: 1100 - baseScroll, opacity: 1 });

          //       // Continue fading in Leonida BG
          //       // gsap.set(leonidaBgImageRef.current, { opacity: 0.5 + (phase8 * 0.5) });


          //     }
          //   }
          // });

//this was working 
          ScrollTrigger.create({
            trigger: luciaCharSection,
            start: 'top top',
            end: '100% top',
            scrub: 1.5,
            pin: luciaCharSticky,
            pinSpacing: false,
            onUpdate: (self) => {
              const p = self.progress;
              
              // LUCIA CHAR PHASE 1: BG FADES IN (0 - 0.01)
              if (p < 0.01) {
                const phase1 = p / 0.01;
                gsap.set(luciaCharBgImage, { opacity: phase1 });
                gsap.set(luciaCharBgOverlay, { background: 'rgba(10, 10, 10, 0)' });
                gsap.set(luciaCharName, { y: '100vh' });
                gsap.set(luciaCharQuote, { y: '100vh' });
                gsap.set(luciaCharDesc, { y: '100vh' });
                gsap.set(luciaCharDesc2, { y: '100vh' });
                gsap.set(luciaCharImg1, { y: '100vh', opacity: 0 });
                gsap.set(luciaCharImg2, { y: '100vh', opacity: 0 });
                gsap.set(luciaCharImg3, { y: '100vh', opacity: 0 });
              }
              
              // LUCIA CHAR PHASE 2: NAME SCROLLS UP (0.01 - 0.11)
              else if (p >= 0.01 && p < 0.11) {
                const phase2 = (p - 0.01) / 0.10;
                gsap.set(luciaCharBgImage, { opacity: 1 });
                gsap.set(luciaCharBgOverlay, { background: `rgba(10, 10, 10, ${phase2 * 0.75})` });
                const baseScroll = phase2 * 600;
                gsap.set(luciaCharName, { y: 800 - baseScroll });
                gsap.set(luciaCharQuote, { y: 900 - baseScroll });
                gsap.set(luciaCharDesc, { y: 1050 - baseScroll });
                gsap.set(luciaCharDesc2, { y: '100vh' });
                gsap.set(luciaCharImg1, { y: 800 - baseScroll, opacity: 1 });
                gsap.set(luciaCharImg2, { y: 1000 - baseScroll, opacity: 1 });
                gsap.set(luciaCharImg3, { y: 1100 - baseScroll, opacity: 1 });
              }
              
              // LUCIA CHAR PHASE 3: QUOTE ENTERS (0.11 - 0.21)
              else if (p >= 0.11 && p < 0.21) {
                const phase3 = (p - 0.11) / 0.10;
                gsap.set(luciaCharBgImage, { opacity: 1 });
                gsap.set(luciaCharBgOverlay, { background: `rgba(10, 10, 10, ${0.75 + (phase3 * 0.2)})` });
                const baseScroll = 600 + (phase3 * 400);
                gsap.set(luciaCharName, { y: 800 - baseScroll });
                gsap.set(luciaCharQuote, { y: 900 - baseScroll });
                gsap.set(luciaCharDesc, { y: 1050 - baseScroll });
                gsap.set(luciaCharDesc2, { y: 1200 - baseScroll });
                gsap.set(luciaCharImg1, { y: 800 - baseScroll, opacity: 1 });
                gsap.set(luciaCharImg2, { y: 1000 - baseScroll, opacity: 1 });
                gsap.set(luciaCharImg3, { y: 1100 - baseScroll, opacity: 1 });
              }
              
              // LUCIA CHAR PHASE 4: DESC + IMAGES VISIBLE (0.21 - 0.33)
              else if (p >= 0.21 && p < 0.33) {
                const phase4 = (p - 0.21) / 0.12;
                gsap.set(luciaCharBgImage, { opacity: 1 });
                gsap.set(luciaCharBgOverlay, { background: `rgba(10, 10, 10, ${0.9 + (phase4 * 0.15)})` });
                const baseScroll = 1000 + (phase4 * 300);
                gsap.set(luciaCharName, { y: 800 - baseScroll });
                gsap.set(luciaCharQuote, { y: 900 - baseScroll });
                gsap.set(luciaCharDesc, { y: 1050 - baseScroll });
                gsap.set(luciaCharDesc2, { y: 1200 - baseScroll });
                gsap.set(luciaCharImg1, { y: 800 - baseScroll, opacity: 1 });
                gsap.set(luciaCharImg2, { y: 1000 - baseScroll, opacity: 1 });
                gsap.set(luciaCharImg3, { y: 1100 - baseScroll, opacity: 1 });
              }
              
              // LUCIA CHAR PHASE 5: BG FADES (0.33 - 0.46)
              else if (p >= 0.33 && p < 0.46) {
                const phase5 = (p - 0.33) / 0.13;
                gsap.set(luciaCharBgImage, { opacity: 1 });
                gsap.set(luciaCharBgOverlay, { background: `rgba(10, 10, 10, ${0.95 + (phase5 * 0.1)})` });
                const baseScroll = 1300 + (phase5 * 250);
                gsap.set(luciaCharName, { y: 800 - baseScroll });
                gsap.set(luciaCharQuote, { y: 900 - baseScroll });
                gsap.set(luciaCharDesc, { y: 1050 - baseScroll });
                gsap.set(luciaCharDesc2, { y: 1200 - baseScroll });
                gsap.set(luciaCharImg1, { y: 800 - baseScroll, opacity: 1 });
                gsap.set(luciaCharImg2, { y: 1000 - baseScroll, opacity: 1 });
                gsap.set(luciaCharImg3, { y: 1100 - baseScroll, opacity: 1 });
              }
              
              // LUCIA CHAR PHASE 6: BG BLACK, TEXT FADES (0.46 - 0.59)
              else if (p >= 0.46 && p < 0.59) {
                const phase6 = (p - 0.46) / 0.13;
                gsap.set(luciaCharBgImage, { opacity: 0 });
                gsap.set(luciaCharBgOverlay, { background: 'rgba(10, 10, 10, 1)' });
                const baseScroll = 1550 + (phase6 * 200);
                const textOpacity = 1 - phase6;
                gsap.set(luciaCharName, { y: 800 - baseScroll, opacity: textOpacity });
                gsap.set(luciaCharQuote, { y: 900 - baseScroll, opacity: textOpacity });
                gsap.set(luciaCharDesc, { y: 1050 - baseScroll, opacity: textOpacity });
                gsap.set(luciaCharDesc2, { y: 1200 - baseScroll, opacity: 1 });
                gsap.set(luciaCharImg1, { y: 800 - baseScroll, opacity: 1 });
                gsap.set(luciaCharImg2, { y: 1000 - baseScroll, opacity: 1 });
                gsap.set(luciaCharImg3, { y: 1100 - baseScroll, opacity: 1 });
              }
              
              // LUCIA CHAR PHASE 7: IMAGES ONLY (0.59 - 0.74)
              else if (p >= 0.59 && p < 0.74) {
                const phase7 = (p - 0.59) / 0.15;
                gsap.set(luciaCharBgImage, { opacity: 0 });
                gsap.set(luciaCharBgOverlay, { background: 'rgba(10, 10, 10, 1)' });
                const baseScroll = 1750 + (phase7 * 200);
                gsap.set(luciaCharName, { opacity: 0 });
                gsap.set(luciaCharQuote, { opacity: 0 });
                gsap.set(luciaCharDesc, { opacity: 0 });
                gsap.set(luciaCharDesc2, { y: 1200 - baseScroll, opacity: 1 });
                gsap.set(luciaCharImg1, { y: 800 - baseScroll, opacity: 1 });
                gsap.set(luciaCharImg2, { y: 1000 - baseScroll, opacity: 1 });
                gsap.set(luciaCharImg3, { y: 1100 - baseScroll, opacity: 1 });
              }
              
              // LUCIA CHAR PHASE 8: EXIT (0.74 - 1.0)
              else if (p >= 0.74) {
                const phase8 = Math.min(1, (p - 0.74) / 0.16);
                const fadeOut = Math.min(1, Math.max(0, (p - 0.88) / 0.12));
                
                gsap.set(luciaCharBgImage, { opacity: 1 });
                gsap.set(luciaCharBgOverlay, { background: 'rgba(10, 10, 10, 1)' });
                
                const baseScroll = 1950 + (phase8 * 1500);
                
                gsap.set(luciaCharName, { opacity: 0 });
                gsap.set(luciaCharQuote, { opacity: 0 });
                gsap.set(luciaCharDesc, { opacity: 0 });
                gsap.set(luciaCharDesc2, { y: 1200 - baseScroll, opacity: 1 - fadeOut });
                gsap.set(luciaCharImg1, { y: 800 - baseScroll, opacity: 1 - fadeOut });
                gsap.set(luciaCharImg2, { y: 1000 - baseScroll, opacity: 1 - fadeOut });
                gsap.set(luciaCharImg3, { y: 1100 - baseScroll, opacity: 1 - fadeOut });
                
                if (luciaCharSticky) {
                  luciaCharSticky.style.background = fadeOut > 0 ? 'transparent' : '#0a0a0a';
                }
              }
            }
          });
          
// //

// ========================================
// LEONIDA TEXT COLOR SCROLL ANIMATION
// ========================================

const leonidaTextSection = leonidaTextSectionRef.current;
const leonidaTitle = leonidaTitleRef.current;
const leonidaDesc = leonidaDescRef.current;

if (leonidaTextSection && leonidaTitle && leonidaDesc) {
  ScrollTrigger.create({
    trigger: leonidaTextSection,
    start: 'top 80%',   // starts when section is 80% from top of viewport
    end: 'top 10%',     // ends when section reaches 10% from top
    scrub: true,
    onUpdate: (self) => {
      const p = self.progress; // 0 to 1

      // Lerp helper
      const lerp = (a, b, t) => Math.round(a + (b - a) * t);

      // Title: light #a9e7e5 (169,231,229) → dark #3a6b69 (58,107,105)
      const tR = lerp(60, 169, p);
      const tG = lerp(110, 231, p);
      const tB = lerp(112, 229, p);
      leonidaTitle.style.color = `rgb(${tR},${tG},${tB})`;

      // Desc: light #8aedeb (138,237,235) → dark #325857 (50,88,87)
      const dR = lerp(50, 138, p);
      const dG = lerp(88, 237, p);
      const dB = lerp(87, 235, p);
      leonidaDesc.style.color = `rgb(${dR},${dG},${dB})`;
    
      // Bottom clip: angled → straight
      // const clipY = p * 100;
      // leonidaTextSection.style.setProperty('--clip-after', `${clipY}%`);

      if (p > 0.7 && calBgImageRef.current) {
        const calFade = (p - 0.7) / 0.3;
        gsap.set(calBgImageRef.current, { opacity: calFade });
      }
    }
  });
}
 

// ========================================
// CAL HAMPTON SECTION ANIMATION
// ========================================

const calSection = calSectionRef.current;
const calSticky = calStickyRef.current;
const calBgImage = calBgImageRef.current;
const calBgOverlay = calBgOverlayRef.current;
const calName = calNameRef.current;
const calQuote = calQuoteRef.current;
const calDesc = calDescRef.current;
const calImg1 = calImg1Ref.current;
const calImg2 = calImg2Ref.current;
const calImg3 = calImg3Ref.current;
const calBigQuote = calBigQuoteRef.current;

// Initial states - TEXT is visible on BG, IMAGES are hidden
gsap.set(calBgImage, { opacity: 1 });
gsap.set(calBgOverlay, { background: 'rgba(10, 10, 10, 0)' });
gsap.set(calName, { opacity: 0 });
gsap.set(calQuote, { opacity: 0 });
gsap.set(calDesc, { opacity: 0 });
gsap.set(calImg1, { y: '100vh', opacity: 0 });
gsap.set(calImg2, { y: '100vh', opacity: 0 });
gsap.set(calImg3, { y: '100vh', opacity: 0 });
gsap.set(calBigQuote, { opacity: 0 });

ScrollTrigger.create({
  trigger: calSection,
  start: 'top top',
  end: '100% top',
  scrub: 1.5,
  pin: calSticky,
  pinSpacing: false,
  onUpdate: (self) => {
    const p = self.progress;

    // ========================================
    // CAL PHASE 1: BG + TEXT FADE IN (0 - 0.12)
    // Background artwork is visible, text fades in on top of it
    // ========================================
    if (p < 0.12) {
      const phase1 = p / 0.12;

      gsap.set(calBgImage, { opacity: 1 });
      gsap.set(calBgOverlay, { background: 'rgba(10, 10, 10, 0.3)' });

      // Text fades in (static position, no y movement)
      gsap.set(calName, { opacity: phase1 });
      gsap.set(calQuote, { opacity: Math.max(0, (phase1 - 0.3) / 0.7) });
      gsap.set(calDesc, { opacity: Math.max(0, (phase1 - 0.5) / 0.5) });

      // Images hidden
      gsap.set(calImg1, { y: '100vh', opacity: 0 });
      gsap.set(calImg2, { y: '100vh', opacity: 0 });
      gsap.set(calImg3, { y: '100vh', opacity: 0 });
      gsap.set(calBigQuote, { opacity: 0 });
    }

    // ========================================
    // CAL PHASE 2: TEXT HOLDS ON BG (0.12 - 0.28)
    // Everything visible, user reads the content
    // ========================================
    else if (p >= 0.12 && p < 0.28) {
      // const phase2 = (p - 0.12) / 0.16;

      gsap.set(calBgImage, { opacity: 1 });
      // gsap.set(calBgOverlay, { background: 'rgba(10, 10, 10, 0.5)' });
      const phase2 = (p - 0.12) / 0.16;
gsap.set(calBgOverlay, { background: `rgba(10, 10, 10, ${0.3 + (phase2 * 0.2)})` });

      // Text fully visible, static
      gsap.set(calName, { opacity: 1 });
      gsap.set(calQuote, { opacity: 1 });
      gsap.set(calDesc, { opacity: 1 });

      // Images still hidden
      gsap.set(calImg1, { y: '100vh', opacity: 0 });
      gsap.set(calImg2, { y: '100vh', opacity: 0 });
      gsap.set(calImg3, { y: '100vh', opacity: 0 });
      gsap.set(calBigQuote, { opacity: 0 });
    }

    // ========================================
    // CAL PHASE 3: TEXT FADES OUT, BG DARKENS (0.28 - 0.38)
    // Text disappears, overlay darkens the BG
    // ========================================
    else if (p >= 0.28 && p < 0.38) {
      const phase3 = (p - 0.28) / 0.10;

      gsap.set(calBgImage, { opacity: 1 });
      // gsap.set(calBgOverlay, { background: `rgba(10, 10, 10, ${phase3 * 0.5})` });
      // gsap.set(calBgOverlay, { background: `rgba(10, 10, 10, ${0.5 + (phase3 * 0.5)})` });
      gsap.set(calBgOverlay, { background: 'rgba(10, 10, 10, 0.5)' });
      // Text fades out
      const textOpacity = 1 - phase3;
      gsap.set(calName, { opacity: textOpacity });
      gsap.set(calQuote, { opacity: textOpacity });
      gsap.set(calDesc, { opacity: textOpacity });

      // Images still hidden
      gsap.set(calImg1, { y: '100vh', opacity: 0 });
      gsap.set(calImg2, { y: '100vh', opacity: 0 });
      gsap.set(calImg3, { y: '100vh', opacity: 0 });
      gsap.set(calBigQuote, { opacity: 0 });
    }

    // ========================================
    // CAL PHASE 4: TWO PHOTOS SCROLL UP (0.38 - 0.52)
    // Two side-by-side images scroll up from bottom
    // BG continues darkening
    // ========================================
    else if (p >= 0.38 && p < 0.52) {
      const phase4 = (p - 0.38) / 0.14;

      gsap.set(calBgImage, { opacity: 1 });
      // gsap.set(calBgOverlay, { background: `rgba(10, 10, 10, ${0.5 + (phase4 * 0.3)})` });
      gsap.set(calBgOverlay, { background: `rgba(10, 10, 10, ${0.5 + (phase4 * 0.5)})` });
      // gsap.set(calBgOverlay, { background: 'rgba(10, 10, 10, 1)' });    

      // Text hidden
      gsap.set(calName, { opacity: 0 });
      gsap.set(calQuote, { opacity: 0 });
      gsap.set(calDesc, { opacity: 0 });

      // Two images scroll up from bottom
      const imgY = (1 - phase4) * 100; // 100vh -> 0
      gsap.set(calImg1, { y: `${imgY}vh`, opacity: phase4 });
      gsap.set(calImg2, { y: `${imgY * 0.9}vh`, opacity: phase4 }); // slightly faster

      // Img3 and big quote still hidden
      gsap.set(calImg3, { y: '100vh', opacity: 0 });
      gsap.set(calBigQuote, { opacity: 0 });
    }

    // ========================================
    // CAL PHASE 5: TWO PHOTOS HOLD (0.52 - 0.60)
    // Photos fully visible at their positions
    // ========================================
    else if (p >= 0.52 && p < 0.60) {
      // const phase5 = (p - 0.52) / 0.08;

      gsap.set(calBgImage, { opacity: 0 });
      gsap.set(calBgOverlay, { background: 'rgba(10, 10, 10, 1)' });

      gsap.set(calName, { opacity: 0 });
      gsap.set(calQuote, { opacity: 0 });
      gsap.set(calDesc, { opacity: 0 });

      // Photos in position
      gsap.set(calImg1, { y: 0, opacity: 1 });
      gsap.set(calImg2, { y: 0, opacity: 1 });

      gsap.set(calImg3, { y: '100vh', opacity: 0 });
      gsap.set(calBigQuote, { opacity: 0 });
    }

    // ========================================
    // CAL PHASE 6: TWO PHOTOS EXIT, PORTRAIT ENTERS (0.60 - 0.72)
    // Side photos scroll up and out, large portrait scrolls in
    // ========================================
    else if (p >= 0.60 && p < 0.72) {
      const phase6 = (p - 0.60) / 0.12;

      gsap.set(calBgImage, { opacity: 0 });
      gsap.set(calBgOverlay, { background: 'rgba(10, 10, 10, 1)' });

      gsap.set(calName, { opacity: 0 });
      gsap.set(calQuote, { opacity: 0 });
      gsap.set(calDesc, { opacity: 0 });

      // Two photos scroll out upward
      const exitY = phase6 * -100;
      gsap.set(calImg1, { y: `${exitY}vh`, opacity: 1 - phase6 });
      gsap.set(calImg2, { y: `${exitY * 0.9}vh`, opacity: 1 - phase6 });

      // Portrait scrolls in from bottom
      const portraitY = (1 - phase6) * 80;
      gsap.set(calImg3, { y: `${portraitY}vh`, opacity: phase6 });

      gsap.set(calBigQuote, { opacity: 0 });
    }

    // ========================================
    // CAL PHASE 7: PORTRAIT HOLDS, BIG QUOTE FADES IN (0.72 - 0.85)
    // Large portrait on left, big yellow quote fades in on right
    // ========================================
    else if (p >= 0.72 && p < 0.85) {
      const phase7 = (p - 0.72) / 0.13;

      gsap.set(calBgImage, { opacity: 0 });
      gsap.set(calBgOverlay, { background: 'rgba(10, 10, 10, 1)' });

      gsap.set(calName, { opacity: 0 });
      gsap.set(calQuote, { opacity: 0 });
      gsap.set(calDesc, { opacity: 0 });

      // Two photos gone
      gsap.set(calImg1, { y: '-100vh', opacity: 0 });
      gsap.set(calImg2, { y: '-100vh', opacity: 0 });

      // Portrait in position
      gsap.set(calImg3, { y: 0, opacity: 1 });

      // Big quote fades in
      gsap.set(calBigQuote, { opacity: phase7 });
    }

    // ========================================
    // CAL PHASE 8: HOLD PORTRAIT + QUOTE (0.85 - 0.92)
    // ========================================
    else if (p >= 0.85 && p < 0.92) {
      gsap.set(calBgImage, { opacity: 0 });
      gsap.set(calBgOverlay, { background: 'rgba(10, 10, 10, 1)' });

      gsap.set(calName, { opacity: 0 });
      gsap.set(calQuote, { opacity: 0 });
      gsap.set(calDesc, { opacity: 0 });
      gsap.set(calImg1, { opacity: 0 });
      gsap.set(calImg2, { opacity: 0 });

      gsap.set(calImg3, { y: 0, opacity: 1 });
      gsap.set(calBigQuote, { opacity: 1 });
    }

    // ========================================
    // CAL PHASE 9: EXIT (0.92 - 1.0)
    // Everything fades out
    // ========================================
    else if (p >= 0.92) {
      const phase9 = (p - 0.92) / 0.08;

      gsap.set(calBgImage, { opacity: 0 });
      gsap.set(calBgOverlay, { background: 'rgba(10, 10, 10, 1)' });

      gsap.set(calName, { opacity: 0 });
      gsap.set(calQuote, { opacity: 0 });
      gsap.set(calDesc, { opacity: 0 });
      gsap.set(calImg1, { opacity: 0 });
      gsap.set(calImg2, { opacity: 0 });

      const exitOpacity = 1 - phase9;
      gsap.set(calImg3, { y: 0, opacity: exitOpacity });
      gsap.set(calBigQuote, { opacity: exitOpacity });
    }
  }
});




      // ========================================
      // VISIT LEONIDA SECTION - SCROLL ANIMATION
      // ========================================

      const vlSection = vlSectionRef.current;
      const vlSticky = vlStickyRef.current;
      const vlBg = vlBgRef.current;
      const vlHeader = vlHeaderRef.current;
      const vlIcon = vlIconRef.current;
      const vlLogoText = vlLogoTextRef.current;
      const vlDivider = vlDividerRef.current;
      const vlTagline = vlTaglineRef.current;
      const vlOrb1 = vlOrb1Ref.current;
      const vlOrb2 = vlOrb2Ref.current;
      const vlOrb3 = vlOrb3Ref.current;
      const vlPostcardWrapper = vlPostcardWrapperRef.current;
      const vlPostcard = vlPostcardRef.current;
      const vlPostcardTitle = vlPostcardTitleRef.current;

      // Initial states
      gsap.set(vlBg, { opacity: 0 });
      gsap.set(vlHeader, { opacity: 0 });
      gsap.set(vlIcon, { opacity: 0, scale: 0.5, rotation: -90 });
      gsap.set(vlLogoText, { opacity: 0, x: -30 });
      gsap.set(vlDivider, { opacity: 0, scaleY: 0 });
      gsap.set(vlTagline, { opacity: 0, x: 30 });
      gsap.set([vlOrb1, vlOrb2, vlOrb3], { opacity: 0 });
      gsap.set(vlPostcardWrapper, { opacity: 0 });
      gsap.set(vlPostcard, { y: '100vh', rotation: -2, scale: 0.85 });
      if (vlPostcardTitle) gsap.set(vlPostcardTitle, { opacity: 0, scale: 0.8 });

      ScrollTrigger.create({
        trigger: vlSection,
        start: 'top top',
        end: '100% top',
        scrub: 1.5,
        pin: vlSticky,
        pinSpacing: false,
        onUpdate: (self) => {
          const p = self.progress;

          // ========================================
          // VL PHASE 1: BG GRADIENT FADES IN (0 - 0.10)
          // ========================================
          if (p < 0.10) {
            const phase1 = p / 0.10;

            gsap.set(vlBg, { opacity: phase1 });
            gsap.set(vlHeader, { opacity: 0 });
            gsap.set(vlIcon, { opacity: 0, scale: 0.5, rotation: -90 });
            gsap.set(vlLogoText, { opacity: 0, x: -30 });
            gsap.set(vlDivider, { opacity: 0, scaleY: 0 });
            gsap.set(vlTagline, { opacity: 0, x: 30 });
            gsap.set([vlOrb1, vlOrb2, vlOrb3], { opacity: phase1 * 0.5 });
            gsap.set(vlPostcardWrapper, { opacity: 0 });
            gsap.set(vlPostcard, { y: '100vh', rotation: -2, scale: 0.85 });
          }

          // ========================================
          // VL PHASE 2: LOGO + TAGLINE ANIMATE IN (0.10 - 0.25)
          // Icon spins in, text slides in, divider grows
          // ========================================
          else if (p >= 0.10 && p < 0.25) {
            const phase2 = (p - 0.10) / 0.15;
            const ease = 1 - Math.pow(1 - phase2, 3); // easeOutCubic

            gsap.set(vlBg, { opacity: 1 });
            gsap.set(vlHeader, { opacity: 1 });

            // Icon spins in
            gsap.set(vlIcon, { 
              opacity: ease, 
              scale: 0.5 + (ease * 0.5), 
              rotation: -90 + (ease * 90) 
            });

            // Logo text slides from left
            gsap.set(vlLogoText, { opacity: ease, x: -30 + (ease * 30) });

            // Divider grows from center
            gsap.set(vlDivider, { opacity: ease, scaleY: ease });

            // Tagline slides from right
            const taglineDelay = Math.max(0, (phase2 - 0.2) / 0.8);
            const taglineEase = 1 - Math.pow(1 - taglineDelay, 3);
            gsap.set(vlTagline, { opacity: taglineEase, x: 30 - (taglineEase * 30) });

            // Orbs drift
            gsap.set(vlOrb1, { opacity: 0.5 + (ease * 0.5), x: ease * 20, y: ease * -15 });
            gsap.set(vlOrb2, { opacity: 0.5 + (ease * 0.5), x: ease * -15, y: ease * 10 });
            gsap.set(vlOrb3, { opacity: ease * 0.6 });

            gsap.set(vlPostcardWrapper, { opacity: 0 });
            gsap.set(vlPostcard, { y: '100vh', rotation: -2, scale: 0.85 });
          }

          // ========================================
          // VL PHASE 3: HOLD LOGO VIEW (0.25 - 0.35)
          // Everything visible, user reads
          // ========================================
          else if (p >= 0.25 && p < 0.35) {
            const phase3 = (p - 0.25) / 0.10;

            gsap.set(vlBg, { opacity: 1 });
            gsap.set(vlHeader, { opacity: 1 });
            // gsap.set(vlIcon, { opacity: 1, scale: 1, rotation: phase3 * 15 });
            gsap.set(vlIcon, { opacity: 1, scale: 1, rotation: 0 });
            gsap.set(vlLogoText, { opacity: 1, x: 0 });
            gsap.set(vlDivider, { opacity: 1, scaleY: 1 });
            gsap.set(vlTagline, { opacity: 1, x: 0 });

            // Subtle orb movement
            gsap.set(vlOrb1, { opacity: 1, x: 20 + (phase3 * 10), y: -15 - (phase3 * 5) });
            gsap.set(vlOrb2, { opacity: 1, x: -15 - (phase3 * 8), y: 10 + (phase3 * 5) });

            gsap.set(vlPostcardWrapper, { opacity: 0 });
            gsap.set(vlPostcard, { y: '100vh', rotation: -2, scale: 0.85 });
          }

          // ========================================
          // VL PHASE 4: HEADER FADES UP + OUT, POSTCARD RISES (0.35 - 0.55)
          // Header slides up & fades, postcard enters from bottom with parallax
          // ========================================
          else if (p >= 0.35 && p < 0.55) {
            const phase4 = (p - 0.35) / 0.20;
            const ease = 1 - Math.pow(1 - phase4, 3);

            gsap.set(vlBg, { opacity: 1 });

            // Header moves up and fades
            const headerY = -(phase4 * 150);
            const headerOpacity = 1 - (phase4 * 1.5);
            gsap.set(vlHeader, { opacity: Math.max(0, headerOpacity), y: headerY });

            // Postcard rises from bottom
            gsap.set(vlPostcardWrapper, { opacity: 1 });
            const postcardY = (1 - ease) * window.innerHeight;
            const postcardRotation = -2 + (ease * 1); // -2 -> -1
            const postcardScale = 0.85 + (ease * 0.15); // 0.85 -> 1.0
            gsap.set(vlPostcard, { 
              y: postcardY, 
              rotation: postcardRotation, 
              scale: postcardScale 
            });

            // Postcard title fades in after card is mostly visible
            if (vlPostcardTitle) {
              const titleProgress = Math.max(0, (phase4 - 0.5) / 0.5);
              gsap.set(vlPostcardTitle, { opacity: titleProgress, scale: 0.8 + (titleProgress * 0.2) });
            }

            // Orbs drift more
            gsap.set(vlOrb1, { opacity: 1 - (phase4 * 0.3), x: 30 + (phase4 * 20) });
            gsap.set(vlOrb2, { opacity: 1 - (phase4 * 0.3), x: -23 - (phase4 * 15) });
          }

          // ========================================
          // VL PHASE 5: POSTCARD FULLY VISIBLE, GENTLE FLOAT (0.55 - 0.72)
          // Card settled in center with subtle parallax on scroll
          // ========================================
          else if (p >= 0.55 && p < 0.72) {
            const phase5 = (p - 0.55) / 0.17;

            gsap.set(vlBg, { opacity: 1 });
            gsap.set(vlHeader, { opacity: 0 });

            gsap.set(vlPostcardWrapper, { opacity: 1 });
            // Subtle float: slight y movement and rotation shift
            const floatY = Math.sin(phase5 * Math.PI) * -15;
            gsap.set(vlPostcard, { 
              y: floatY, 
              rotation: -1 + (phase5 * 0.5), 
              scale: 1 
            });

            if (vlPostcardTitle) gsap.set(vlPostcardTitle, { opacity: 1, scale: 1 });

            gsap.set(vlOrb1, { opacity: 0.7, x: 50 + (phase5 * 10) });
            gsap.set(vlOrb2, { opacity: 0.7, x: -38 - (phase5 * 8) });
          }

          // ========================================
          // VL PHASE 6: POSTCARD STARTS SCALING DOWN + EXITING (0.72 - 0.88)
          // ========================================
          else if (p >= 0.72 && p < 0.88) {
            const phase6 = (p - 0.72) / 0.16;

            gsap.set(vlBg, { opacity: 1 - (phase6 * 0.5) });
            gsap.set(vlHeader, { opacity: 0 });

            gsap.set(vlPostcardWrapper, { opacity: 1 });
            const exitY = -(phase6 * 300);
            const exitScale = 1 - (phase6 * 0.15);
            gsap.set(vlPostcard, { 
              y: exitY, 
              rotation: -0.5 + (phase6 * 2), 
              scale: exitScale,
              opacity: 1 - (phase6 * 0.5)
            });

            gsap.set([vlOrb1, vlOrb2, vlOrb3], { opacity: 0.7 - (phase6 * 0.7) });
          }

          // ========================================
          // VL PHASE 7: EXIT TO BLACK (0.88 - 1.0)
          // ========================================
          else if (p >= 0.88) {
            const phase7 = (p - 0.88) / 0.12;

            gsap.set(vlBg, { opacity: 0.5 - (phase7 * 0.5) });
            gsap.set(vlHeader, { opacity: 0 });
            gsap.set(vlPostcardWrapper, { opacity: 0 });
            gsap.set(vlPostcard, { opacity: 0 });
            gsap.set([vlOrb1, vlOrb2, vlOrb3], { opacity: 0 });
          }
        }
      });

      // ========================================
      // FLOATING PARTICLES SYSTEM
      // ========================================

      const particlesCanvas = vlParticlesRef.current;
      if (particlesCanvas) {
        const ctx2d = particlesCanvas.getContext('2d');
        // let animFrameId;
        const particles = [];
        const PARTICLE_COUNT = 35;

        const resizeCanvas = () => {
          particlesCanvas.width = window.innerWidth;
          particlesCanvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Create particles
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          particles.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 2.5 + 0.5,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.2 - 0.15,
            opacity: Math.random() * 0.35 + 0.05,
            flickerSpeed: Math.random() * 0.02 + 0.005,
            flickerOffset: Math.random() * Math.PI * 2,
          });
        }

        const drawParticles = (time) => {
          ctx2d.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
          
          particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;

            // Wrap around
            if (p.x < -10) p.x = particlesCanvas.width + 10;
            if (p.x > particlesCanvas.width + 10) p.x = -10;
            if (p.y < -10) p.y = particlesCanvas.height + 10;
            if (p.y > particlesCanvas.height + 10) p.y = -10;

            // Flicker
            const flicker = Math.sin(time * p.flickerSpeed + p.flickerOffset) * 0.5 + 0.5;
            const alpha = p.opacity * (0.4 + flicker * 0.6);

            ctx2d.beginPath();
            ctx2d.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx2d.fillStyle = `rgba(160, 220, 220, ${alpha})`;
            ctx2d.fill();

            // Subtle glow
            if (p.size > 1.5) {
              ctx2d.beginPath();
              ctx2d.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
              ctx2d.fillStyle = `rgba(120, 200, 210, ${alpha * 0.15})`;
              ctx2d.fill();
            }
          });

          animFrameId = requestAnimationFrame(drawParticles);
        };

        animFrameId = requestAnimationFrame(drawParticles);

        // // Cleanup
        // // (handled by gsap.context revert, but also cancel frame)
        // const origRevert = ctx.revert.bind(ctx);
        // // We'll just let the return cleanup handle it
      }

// ========================================
// WORLD OF LEONIDA SECTION
// ========================================

const worldSection = worldSectionRef.current;
const worldSticky = worldStickyRef.current;
const worldBg = worldBgRef.current;
const worldBgOverlay = worldBgOverlayRef.current;
const worldName = worldNameRef.current;
const worldQuote = worldQuoteRef.current;
const worldDesc = worldDescRef.current;
const worldImg1 = worldImg1Ref.current;
const worldImg2 = worldImg2Ref.current;
const worldImg3 = worldImg3Ref.current;
const worldImg4 = worldImg4Ref.current;
const worldImg5 = worldImg5Ref.current;
const worldBigQuote = worldBigQuoteRef.current;
const worldBigQuoteBg = worldBigQuoteBgRef.current;


// Initial states
gsap.set(worldBg, { opacity: 0, scale: 1.15 });
gsap.set(worldBgOverlay, { opacity: 0 });
gsap.set(worldName, { opacity: 0, y: 80 });
gsap.set(worldQuote, { opacity: 0, y: 60 });
gsap.set(worldDesc, { opacity: 0, y: 50 });
gsap.set([worldImg1, worldImg2, worldImg3, worldImg4, worldImg5], { opacity: 0, y: '100vh' });
gsap.set(worldBigQuote, { opacity: 0, y: 40 });
gsap.set(worldBigQuoteBg, { opacity: 0 });
const worldQuote2 = worldQuote2Ref.current;
const worldDesc2 = worldDesc2Ref.current;

ScrollTrigger.create({
  trigger: worldSection,
  start: 'top top',
  end: '100% top',
  scrub: 1.5,
  pin: worldSticky,
  pinSpacing: false,
  onUpdate: (self) => {
    const p = self.progress;

    // PHASE 1: BG ARTWORK REVEALS (0 - 0.08)
    if (p < 0.08) {
      const t = p / 0.08;
      const e = 1 - Math.pow(1 - t, 3);
      gsap.set(worldBg, { opacity: e, scale: 1.15 - (e * 0.05) });
      gsap.set(worldBgOverlay, { opacity: 0 });
      gsap.set(worldName, { opacity: 0, y: 80 });
      gsap.set(worldQuote, { opacity: 0 });
      gsap.set(worldDesc, { opacity: 0 });
      gsap.set([worldImg1, worldImg2, worldImg3, worldImg4, worldImg5], { opacity: 0, y: '100vh' });
      gsap.set(worldBigQuote, { opacity: 0 });
      gsap.set(worldBigQuoteBg, { opacity: 0 });
      gsap.set(worldQuote2, { opacity: 0});
      gsap.set(worldDesc2, { opacity: 0 });
    }
    // /

    // PHASE 2: NAME + QUOTE ENTER OVER ARTWORK (0.08 - 0.18)
    else if (p < 0.18) {
      const t = (p - 0.08) / 0.10;
      const e = 1 - Math.pow(1 - t, 2);
      gsap.set(worldBg, { opacity: 1, scale: 1.10 - (t * 0.02) });
      gsap.set(worldBgOverlay, { opacity: t * 0.35 });
      gsap.set(worldName, { opacity: e, y: 80 - (e * 80) });
      gsap.set(worldQuote, { opacity: Math.max(0, (t - 0.3) / 0.7), y: 60 - (e * 60) });
      gsap.set(worldDesc, { opacity: 0 });
      gsap.set([worldImg1, worldImg2, worldImg3, worldImg4, worldImg5], { opacity: 0, y: '100vh' });
      gsap.set(worldBigQuote, { opacity: 0 });
      gsap.set(worldBigQuoteBg, { opacity: 0 });
      gsap.set(worldQuote2, { opacity: 0});
      gsap.set(worldDesc2, { opacity: 0 });
    }

    // PHASE 3: DESC APPEARS + HOLD (0.18 - 0.26)
    else if (p < 0.26) {
      const t = (p - 0.18) / 0.08;
      gsap.set(worldBg, { opacity: 1, scale: 1.08 - (t * 0.02) });
      gsap.set(worldBgOverlay, { opacity: 0.35 + (t * 0.15) });
      gsap.set(worldName, { opacity: 1, y: 0 });
      gsap.set(worldQuote, { opacity: 1, y: 0 });
      gsap.set(worldDesc, { opacity: t, y: 50 - (t * 50) });
      gsap.set([worldImg1, worldImg2, worldImg3, worldImg4, worldImg5], { opacity: 0, y: '100vh' });
      gsap.set(worldBigQuote, { opacity: 0 });
      gsap.set(worldBigQuoteBg, { opacity: 0 });
      gsap.set(worldQuote2, { opacity: 0 });
      gsap.set(worldDesc2, { opacity: 0 });
    }

// PHASE 4: TEXT FADES + FIRST TWO IMAGES ENTER (0.26 - 0.40)
else if (p < 0.40) {
  const t = (p - 0.26) / 0.14;
  
  const textFade = t < 0.6 ? 1 - (t / 0.6) : 0;
  const textUp = t < 0.6 ? -(t / 0.6) * 60 : -60;
  
  gsap.set(worldBg, { opacity: textFade, scale: 1.06 });
  gsap.set(worldBgOverlay, { opacity: 0.5 + (t * 0.5) });
  gsap.set(worldName, { opacity: textFade, y: textUp });
  gsap.set(worldQuote, { opacity: textFade, y: textUp * 0.7 });
  gsap.set(worldDesc, { opacity: textFade, y: textUp * 0.5 });

  // Only img1 + img2 enter here
  const imgStart = 0.3;
  if (t > imgStart) {
    const imgT = (t - imgStart) / (1 - imgStart);
    const imgE = 1 - Math.pow(1 - imgT, 2);
    gsap.set(worldImg1, { opacity: imgE, y: `${(1 - imgE) * 110}vh` });
    gsap.set(worldImg2, { opacity: imgE, y: `${(1 - imgE) * 95}vh` });
  } else {
    gsap.set(worldImg1, { opacity: 0, y: '100vh' });
    gsap.set(worldImg2, { opacity: 0, y: '100vh' });
  }
  
  gsap.set(worldImg3, { opacity: 0, y: '100vh' });
  gsap.set(worldImg4, { opacity: 0, y: '100vh' });
  gsap.set(worldImg5, { opacity: 0, y: '100vh' });
  gsap.set(worldBigQuote, { opacity: 0 });
  gsap.set(worldBigQuoteBg, { opacity: 0 });
  gsap.set(worldQuote2, { opacity: 0});
  gsap.set(worldDesc2, { opacity: 0 });
}



// PHASE 5: IMAGES 1+2 HOLD (0.40 - 0.50)
else if (p < 0.50) {
  gsap.set(worldBg, { opacity: 0 });
  gsap.set(worldBgOverlay, { opacity: 1 });
  gsap.set(worldName, { opacity: 0 });
  gsap.set(worldQuote, { opacity: 0 });
  gsap.set(worldDesc, { opacity: 0 });
  gsap.set(worldImg1, { opacity: 1, y: 0 });
  gsap.set(worldImg2, { opacity: 1, y: 0 });
  gsap.set(worldImg3, { opacity: 0, y: '100vh' });
  gsap.set(worldImg4, { opacity: 0, y: '100vh' });
  gsap.set(worldImg5, { opacity: 0, y: '100vh' });
  gsap.set(worldBigQuote, { opacity: 0 });
  gsap.set(worldBigQuoteBg, { opacity: 0 });
  gsap.set(worldQuote2, { opacity: 0 });
  gsap.set(worldDesc2, { opacity: 0 });
}



// PHASE 6: ALL THREE SCROLL UP TOGETHER (0.50 - 0.62)
else if (p < 0.62) {
  const t = (p - 0.50) / 0.12;
  
  gsap.set(worldBg, { opacity: 0 });
  gsap.set(worldBgOverlay, { opacity: 1 });
  gsap.set(worldName, { opacity: 0 });
  
  // Img 1+2 scroll up and fade out
  gsap.set(worldImg1, { y: `${-(t * 120)}vh`, opacity: Math.max(0, 1 - (t * 1.5)) });
  gsap.set(worldImg2, { y: `${-(t * 110)}vh`, opacity: Math.max(0, 1 - (t * 1.5)) });
  
  // Img 3 goes from 100vh → 0vh (not beyond)
  gsap.set(worldImg3, { y: `${100 - (t * 100)}vh`, opacity: Math.min(1, t * 2) });
  
  gsap.set(worldImg4, { opacity: 0, y: '100vh' });
  gsap.set(worldImg5, { opacity: 0, y: '100vh' });
  gsap.set(worldBigQuoteBg, { opacity: Math.min(0.3, t * 0.5) });
  gsap.set(worldBigQuote, { opacity: 0 });
  gsap.set(worldQuote2, { opacity: 0});
  gsap.set(worldDesc2, { opacity: 0});
}



// PHASE 7: IMG3 STAYS + QUOTE SCROLLS UP FROM BOTTOM (0.62 - 0.76)
else if (p < 0.76) {
  const t = (p - 0.62) / 0.14;
  
  gsap.set(worldBg, { opacity: 0 });
  gsap.set(worldBgOverlay, { opacity: 1 });
  gsap.set(worldImg1, { opacity: 0 });
  gsap.set(worldImg2, { opacity: 0 });
  
  // Img3 stays but slowly zooms
  // gsap.set(worldImg3, { y: 0, opacity: 1, scale: 1 + (t * 0.08) });
  
  gsap.set(worldImg3, { y: 0, opacity: 1 });
  gsap.set(worldImg3.querySelector('img'), { scale: 1 + (t * 0.08) });
  gsap.set(worldImg4, { opacity: 0, y: '100vh' });
  gsap.set(worldImg5, { opacity: 0, y: '100vh' });
  gsap.set(worldQuote2, { opacity: 0, y: 40 });
  gsap.set(worldDesc2, { opacity: 0, y: 30 });
  // Quote starts at 800px below and scrolls up via baseScroll
  const baseScroll = t * 800;
  
  gsap.set(worldBigQuoteBg, { opacity: Math.min(0.9, t * 1.2) });
  
  const colorR = Math.round(255 - (t * 23));   // 255 → 232
  const colorG = Math.round(235 - (t * 35));   // 235 → 200
  const colorB = Math.round(150 - (t * 74));   // 150 → 76

  gsap.set(worldBigQuote, { 
    y: 800 - baseScroll,
    opacity: 1,
    // color: `rgba(232, 200, 76, ${Math.min(1, t * 1.5)})`,
    color: `rgb(${colorR}, ${colorG}, ${colorB})`,

  });
}

// PHASE 7.5: HOLD — IMG3 ZOOMED + QUOTE VISIBLE (0.76 - 0.80)
else if (p < 0.80) {
  gsap.set(worldBg, { opacity: 0 });
  gsap.set(worldBgOverlay, { opacity: 1 });
  gsap.set(worldImg1, { opacity: 0 });
  gsap.set(worldImg2, { opacity: 0 });
  // gsap.set(worldImg3, { y: 0, opacity: 1, scale: 1.08 });
  gsap.set(worldImg3, { y: 0, opacity: 1 });
  gsap.set(worldImg3.querySelector('img'), { scale: 1.08 });
  gsap.set(worldImg4, { opacity: 0, y: '100vh' });
  gsap.set(worldImg5, { opacity: 0, y: '100vh' });
  gsap.set(worldBigQuoteBg, { opacity: 0.9 });
  gsap.set(worldBigQuote, { opacity: 1, y: 0, color: '#e8c84c' });
  gsap.set(worldQuote2, { opacity: 0, y: 40 });
  gsap.set(worldDesc2, { opacity: 0, y: 30 });
}


// PHASE 8: EVERYTHING SCROLLS UP + IMG 4+5 ENTER (0.80 - 0.90)
else if (p < 0.90) {
  const t = (p - 0.80) / 0.10;
  
  gsap.set(worldBg, { opacity: 0 });
  gsap.set(worldBgOverlay, { opacity: 1 });
  gsap.set(worldImg1, { opacity: 0 });
  gsap.set(worldImg2, { opacity: 0 });
  
 
  gsap.set(worldImg3, { 
    y: `${-(t * 120)}vh`, 
    opacity: Math.max(0, 1 - (t * 1.5))
  });
  gsap.set(worldImg3.querySelector('img'), { scale: 1.08 });
  
  // Quote starts at y:0 — scrolls up
  gsap.set(worldBigQuoteBg, { opacity: Math.max(0, 0.9 - (t * 1.4)) });
  gsap.set(worldBigQuote, { 
    y: `${-(t * 100)}vh`, 
    opacity: Math.max(0, 1 - (t * 1.5)),
    color: '#e8c84c'
  });
  
  // Img 4+5 enter from below
  gsap.set(worldImg4, { y: `${100 - (t * 100)}vh`, opacity: Math.min(1, t * 2) });
  gsap.set(worldImg5, { y: `${80 - (t * 80)}vh`, opacity: Math.min(1, t * 2) });

  // Second quote + desc fade in after images are halfway in
  // const textDelay = Math.max(0, (t - 0.5) / 0.5);
  // const textEase = 1 - Math.pow(1 - textDelay, 2);
  // gsap.set(worldQuote2, { opacity: textEase, y: 40 - (textEase * 40) });
  // gsap.set(worldDesc2, { opacity: textEase * 0.9, y: 30 - (textEase * 30) });
// AFTER — text moves with img4 (same vh units)
gsap.set(worldQuote2, { opacity: Math.min(1, t * 2), y: `${100 - (t * 100)}vh` });
gsap.set(worldDesc2, { opacity: Math.min(0.9, t * 1.8), y: `${100 - (t * 100)}vh` });
}

// PHASE 9: IMG 4+5 HOLD BRIEFLY + SCROLL UP + EXIT (0.86 - 1.0)
else {
  const t = (p - 0.86) / 0.14;
  
  gsap.set(worldBg, { opacity: 0 });
  gsap.set(worldBgOverlay, { opacity: 1 });
  gsap.set(worldImg1, { opacity: 0 });
  gsap.set(worldImg2, { opacity: 0 });
  gsap.set(worldImg3, { opacity: 0 });
  gsap.set(worldBigQuoteBg, { opacity: 0 });
  gsap.set(worldBigQuote, { opacity: 0 });

  if (t < 0.35) {
    // Hold
    gsap.set(worldImg4, { y: 0, opacity: 1 });
    gsap.set(worldImg5, { y: 0, opacity: 1 });
    gsap.set(worldQuote2, { opacity: 1, y: 0 });
    gsap.set(worldDesc2, { opacity: 1, y: 0 });
  } else {
    // Scroll up and fade out
    const exitT = (t - 0.35) / 0.65;
    gsap.set(worldImg4, { y: `${-(exitT * 100)}vh`, opacity: 1 });
    gsap.set(worldImg5, { y: `${-(exitT * 90)}vh`, opacity: 1 });
    // gsap.set(worldQuote2, { opacity: Math.max(0, 1 - (exitT * 1.5)), y: -(exitT * 60) });
    // gsap.set(worldDesc2, { opacity: Math.max(0, 0.9 - (exitT * 1.4)), y: -(exitT * 40) });
    // AFTER — matches img4's exit exactly
    gsap.set(worldQuote2, { opacity:1 , y: `${-(exitT * 100)}vh` });
    gsap.set(worldDesc2, { opacity:0.9, y: `${-(exitT * 100)}vh` });

     // Fade sticky container to transparent so Discover shows through
     const fadeOut = Math.min(1, Math.max(0, (exitT - 0.4) / 0.6));
     if (worldSticky) {
       worldSticky.style.background = fadeOut > 0 ? 'transparent' : '#0a0a0a';
     }
     // Also fade the overlay
     gsap.set(worldBgOverlay, { opacity: 1 - fadeOut });
  }
}

  }
});

// ========================================
// DISCOVER SECTION ANIMATION
// ========================================

const discoverSection = discoverSectionRef.current;
const discoverSticky = discoverStickyRef.current;
const discoverBg = discoverBgRef.current;
const discoverHeader = discoverHeaderRef.current;
const discoverIcon = discoverIconRef.current;
const discoverLogoText = discoverLogoTextRef.current;
const discoverDivider = discoverDividerRef.current;
const discoverTagline = discoverTaglineRef.current;
const discoverOrb1 = discoverOrb1Ref.current;
const discoverOrb2 = discoverOrb2Ref.current;
const discoverOrb3 = discoverOrb3Ref.current;
const discoverPostcardWrapper = discoverPostcardWrapperRef.current;
const discoverPostcard = discoverPostcardRef.current;
const discoverPostcardTitle = discoverPostcardTitleRef.current;

// Initial states
gsap.set(discoverBg, { opacity: 0 });
gsap.set(discoverHeader, { opacity: 0 });
gsap.set(discoverIcon, { opacity: 0, scale: 0.5, rotation: -90 });
gsap.set(discoverLogoText, { opacity: 0, x: -30 });
gsap.set(discoverDivider, { opacity: 0, scaleY: 0 });
gsap.set(discoverTagline, { opacity: 0, x: 30 });
gsap.set([discoverOrb1, discoverOrb2, discoverOrb3], { opacity: 0 });
gsap.set(discoverPostcardWrapper, { opacity: 0 });
gsap.set(discoverPostcard, { y: '100vh', rotation: -2, scale: 0.85 });
if (discoverPostcardTitle) gsap.set(discoverPostcardTitle, { opacity: 0, scale: 0.8 });



ScrollTrigger.create({
  trigger: discoverSection,
  start: 'top top',
  end: '100% top',
  scrub: 1.5,
  pin: discoverSticky,
  pinSpacing: false,
  onUpdate: (self) => {
    const p = self.progress;

    // PHASE 1: BG GRADIENT FADES IN (0 - 0.05) - SHORTER
    if (p < 0.05) {
      const phase1 = p / 0.05;
      gsap.set(discoverBg, { opacity: phase1 });
      gsap.set(discoverHeader, { opacity: 0 }); // Keep hidden
      gsap.set(discoverIcon, { opacity: 0, scale: 0.5, rotation: -90 });
      gsap.set(discoverLogoText, { opacity: 0, x: -30 });
      gsap.set(discoverDivider, { opacity: 0, scaleY: 0 });
      gsap.set(discoverTagline, { opacity: 0, x: 30 });
      gsap.set([discoverOrb1, discoverOrb2, discoverOrb3], { opacity: phase1 * 0.5 });
      gsap.set(discoverPostcardWrapper, { opacity: 0 });
      gsap.set(discoverPostcard, { y: '100vh', rotation: -2, scale: 0.85 });
    }

    // PHASE 2: POSTCARD RISES (0.05 - 0.30) - HEADER STAYS HIDDEN
    else if (p >= 0.05 && p < 0.30) {
      const phase2 = (p - 0.05) / 0.25;
      const ease = 1 - Math.pow(1 - phase2, 3);

      gsap.set(discoverBg, { opacity: 1 });
      gsap.set(discoverHeader, { opacity: 0 }); // ALWAYS HIDDEN

      gsap.set(discoverPostcardWrapper, { opacity: 1 });
      const postcardY = (1 - ease) * window.innerHeight;
      const postcardRotation = -2 + (ease * 1);
      const postcardScale = 0.85 + (ease * 0.15);
      gsap.set(discoverPostcard, { 
        y: postcardY, 
        rotation: postcardRotation, 
        scale: postcardScale 
      });

      if (discoverPostcardTitle) {
        const titleProgress = Math.max(0, (phase2 - 0.3) / 0.7);
        gsap.set(discoverPostcardTitle, { opacity: titleProgress, scale: 0.8 + (titleProgress * 0.2) });
      }

      gsap.set(discoverOrb1, { opacity: 0.5 + (ease * 0.5), x: ease * 20, y: ease * -15 });
      gsap.set(discoverOrb2, { opacity: 0.5 + (ease * 0.5), x: ease * -15, y: ease * 10 });
      gsap.set(discoverOrb3, { opacity: ease * 0.6 });
    }

    // PHASE 3: POSTCARD FULLY VISIBLE (0.30 - 0.55)
    else if (p >= 0.30 && p < 0.55) {
      const phase3 = (p - 0.30) / 0.25;

      gsap.set(discoverBg, { opacity: 1 });
      gsap.set(discoverHeader, { opacity: 0 }); // ALWAYS HIDDEN

      gsap.set(discoverPostcardWrapper, { opacity: 1 });
      const floatY = Math.sin(phase3 * Math.PI) * -15;
      gsap.set(discoverPostcard, { 
        y: floatY, 
        rotation: -1 + (phase3 * 0.5), 
        scale: 1 
      });

      if (discoverPostcardTitle) gsap.set(discoverPostcardTitle, { opacity: 1, scale: 1 });

      gsap.set(discoverOrb1, { opacity: 0.7, x: 50 + (phase3 * 10) });
      gsap.set(discoverOrb2, { opacity: 0.7, x: -38 - (phase3 * 8) });
    }

    // PHASE 4: POSTCARD SCALING DOWN (0.55 - 0.80)
    else if (p >= 0.55 && p < 0.80) {
      const phase4 = (p - 0.55) / 0.25;

      gsap.set(discoverBg, { opacity: 1 - (phase4 * 0.5) });
      gsap.set(discoverHeader, { opacity: 0 });

      gsap.set(discoverPostcardWrapper, { opacity: 1 });
      const exitY = -(phase4 * 300);
      const exitScale = 1 - (phase4 * 0.15);
      gsap.set(discoverPostcard, { 
        y: exitY, 
        rotation: -0.5 + (phase4 * 2), 
        scale: exitScale,
        opacity: 1 - (phase4 * 0.5)
      });

      gsap.set([discoverOrb1, discoverOrb2, discoverOrb3], { opacity: 0.7 - (phase4 * 0.7) });
    }

    // PHASE 5: EXIT TO BLACK (0.80 - 1.0)
    else if (p >= 0.80) {
      const phase5 = (p - 0.80) / 0.20;

      gsap.set(discoverBg, { opacity: 0.5 - (phase5 * 0.5) });
      gsap.set(discoverHeader, { opacity: 0 });
      gsap.set(discoverPostcardWrapper, { opacity: 0 });
      gsap.set(discoverPostcard, { opacity: 0 });
      gsap.set([discoverOrb1, discoverOrb2, discoverOrb3], { opacity: 0 });
      
   
    }
  }
});
// ========================================
// CINEMATIC FINALE SECTION
// ========================================

const finaleSection = finaleSectionRef.current;
const finaleSticky = finaleStickyRef.current;
const finaleBg = finaleBgRef.current;
const finaleBgOverlay = finaleBgOverlayRef.current;
const finaleLogo = finaleLogoRef.current;
const finaleDim = finaleDimRef.current;
const finaleBright = finaleBrightRef.current;
const finaleGlow = finaleGlowRef.current;
const finalePlatforms = finalePlatformsRef.current;

// Initial states
gsap.set(finaleBg, { opacity: 0, scale: 1.15 });
gsap.set(finaleBgOverlay, { opacity: 0 });
gsap.set(finaleLogo, { opacity: 0, scale: 0.6, y: 40 });
gsap.set(finaleDim, { opacity: 0 });
gsap.set(finaleBright, { opacity: 0 });
gsap.set(finaleGlow, { opacity: 0 });
gsap.set(finalePlatforms, { opacity: 0, y: 30 });

// Radial mask helper for release text
function updateFinaleRadialMasks(progress) {
  let circleY, circleSize;
  
  if (progress <= 0.45) {
    const p = progress / 0.45;
    circleY = 120 - (p * 70);
    circleSize = p * 180;
  } else if (progress <= 0.55) {
    circleY = 50;
    circleSize = 180;
  } else {
    const p = (progress - 0.55) / 0.45;
    circleY = 50 - (p * 120);
    circleSize = 180 - (p * 180);
  }

  const brightMask = `radial-gradient(circle at 50% ${circleY}%, black 0%, black ${circleSize}%, transparent ${circleSize}%)`;
  const glowInner = Math.max(0, circleSize - 35);
  const glowOuter = circleSize + 18;
  const glowMask = `radial-gradient(circle at 50% ${circleY}%, transparent 0%, transparent ${glowInner}%, black ${circleSize}%, transparent ${glowOuter}%)`;

  if (finaleBright) {
    finaleBright.style.webkitMaskImage = brightMask;
    finaleBright.style.maskImage = brightMask;
  }
  if (finaleGlow) {
    finaleGlow.style.webkitMaskImage = glowMask;
    finaleGlow.style.maskImage = glowMask;
  }
}

updateFinaleRadialMasks(0);

ScrollTrigger.create({
  trigger: finaleSection,
  start: 'top top',
  end: '70% top',
  scrub: 1.5,
  pin: finaleSticky,
  pinSpacing: false,
  onUpdate: (self) => {
    const p = self.progress;

    // PHASE 1: BG IMAGE FADES IN (0 - 0.15)
    if (p < 0.15) {
      const t = p / 0.15;
      const e = 1 - Math.pow(1 - t, 3);
      gsap.set(finaleBg, { opacity: e, scale: 1.15 - (e * 0.1) });

      // gsap.set(finaleBg, { opacity: 0.5 + (e * 0.5), scale: 1.10 - (e * 0.05) });

      gsap.set(finaleBgOverlay, { opacity: 0 });
      gsap.set(finaleLogo, { opacity: 0, scale: 0.6 });
      gsap.set(finaleDim, { opacity: 0 });
      gsap.set(finaleBright, { opacity: 0 });
      gsap.set(finaleGlow, { opacity: 0 });
      gsap.set(finalePlatforms, { opacity: 0 });
    }

    // PHASE 2: HOLD IMAGE (0.15 - 0.30)
    else if (p < 0.30) {
      gsap.set(finaleBg, { opacity: 1, scale: 1.05 });
      gsap.set(finaleBgOverlay, { opacity: 0 });
      gsap.set(finaleLogo, { opacity: 0, scale: 0.6 });
      gsap.set(finaleDim, { opacity: 0 });
      gsap.set(finaleBright, { opacity: 0 });
      gsap.set(finaleGlow, { opacity: 0 });
      gsap.set(finalePlatforms, { opacity: 0 });
    }

    // PHASE 3: FADE TO BLACK (0.30 - 0.45)
    else if (p < 0.45) {
      const t = (p - 0.30) / 0.15;
      gsap.set(finaleBg, { opacity: 1, scale: 1.05 - (t * 0.03) });
      gsap.set(finaleBgOverlay, { opacity: t * t });
      gsap.set(finaleLogo, { opacity: 0, scale: 0.6 });
      gsap.set(finaleDim, { opacity: 0 });
      gsap.set(finaleBright, { opacity: 0 });
      gsap.set(finaleGlow, { opacity: 0 });
      gsap.set(finalePlatforms, { opacity: 0 });
    }

    // PHASE 4: LOGO + DIM TEXT APPEAR (0.45 - 0.55)
    else if (p < 0.55) {
      const t = (p - 0.45) / 0.10;
      const e = 1 - Math.pow(1 - t, 3);
      gsap.set(finaleBg, { opacity: 1, scale: 1.02 });
      gsap.set(finaleBgOverlay, { opacity: 1 });
      gsap.set(finaleLogo, { opacity: e, scale: 0.6 + (e * 0.4) });
      gsap.set(finaleDim, { opacity: e * 0.5 });
      gsap.set(finaleBright, { opacity: 0 });
      gsap.set(finaleGlow, { opacity: 0 });
      updateFinaleRadialMasks(0);
      gsap.set(finalePlatforms, { opacity: 0 });
    }

    // // PHASE 5: RADIAL LUMINANCE WIPE (0.55 - 0.90)
    // else if (p < 0.90) {
    //   const t = (p - 0.55) / 0.35;
    //   gsap.set(finaleBg, { opacity: 1, scale: 1.02 });
    //   gsap.set(finaleBgOverlay, { opacity: 1 });
    //   gsap.set(finaleLogo, { opacity: 1, scale: 1 });
      
    //   const dimOpacity = t > 0.6 ? 0.5 * (1 - ((t - 0.6) / 0.4)) : 0.5;
    //   gsap.set(finaleDim, { opacity: dimOpacity });
      
    //   gsap.set(finaleBright, { opacity: 1 });
    //   gsap.set(finaleGlow, { opacity: 1 });
    //   updateFinaleRadialMasks(t);
      
    //   gsap.set(finalePlatforms, { opacity: 1});
    // }

    // PHASE 5: TEXT BRIGHTENS (0.55 - 0.90)
else if (p < 0.90) {
  const t = (p - 0.55) / 0.35;
  gsap.set(finaleBg, { opacity: 1, scale: 1.02 });
  gsap.set(finaleBgOverlay, { opacity: 1 });
  gsap.set(finaleLogo, { opacity: 1, scale: 1 });
  
  // Dim fades out, bright fades in — no radial mask
  gsap.set(finaleDim, { opacity: 0.5 * (1 - t) });
  gsap.set(finaleBright, { opacity: t });
  gsap.set(finaleGlow, { opacity: 0 });
  
  // Remove any masks
  if (finaleBright) {
    finaleBright.style.webkitMaskImage = 'none';
    finaleBright.style.maskImage = 'none';
  }
  if (finaleGlow) {
    finaleGlow.style.webkitMaskImage = 'none';
    finaleGlow.style.maskImage = 'none';
  }
  
  gsap.set(finalePlatforms, { opacity: t });
}
//
    // PHASE 6: HOLD — NO TRANSFORMS, CLEAN STATE (0.90 - 1.0)
    // CRITICAL: No y, no scale transforms — everything at natural CSS position
    // When pin releases at progress=1, content is already at its natural position
    // else {
    //   gsap.set(finaleBg, { opacity: 1, scale: 1 });
    //   gsap.set(finaleBgOverlay, { opacity: 1 });
    //   gsap.set(finaleLogo, { opacity: 1, scale: 1, y: 0 });
    //   gsap.set(finaleDim, { opacity: 0 });
    //   gsap.set(finaleBright, { opacity: 1 });
    //   gsap.set(finaleGlow, { opacity: 0 });

    //   const fullMask = 'radial-gradient(circle at 50% 50%, black 0%, black 100%)';
    //   if (finaleBright) {
    //     finaleBright.style.webkitMaskImage = fullMask;
    //     finaleBright.style.maskImage = fullMask;
    //   }
    //   if (finaleGlow) {
    //     finaleGlow.style.webkitMaskImage = fullMask;
    //     finaleGlow.style.maskImage = fullMask;
    //   }

    //   gsap.set(finalePlatforms, { opacity: 1, y: 0 });
    // }
    else {
      gsap.set(finaleBg, { opacity: 1, scale: 1 });
      gsap.set(finaleBgOverlay, { opacity: 1 });
      gsap.set(finaleLogo, { opacity: 1, scale: 1, y: 0 });
      gsap.set(finaleDim, { opacity: 0 });
      gsap.set(finaleBright, { opacity: 1 });
      gsap.set(finaleGlow, { opacity: 0 });
    
      if (finaleBright) {
        finaleBright.style.webkitMaskImage = 'none';
        finaleBright.style.maskImage = 'none';
      }
    
      gsap.set(finalePlatforms, { opacity: 1, y: 0 });
    }
  }
});

     
    }, containerRef);

    return () => ctx.revert();
  }, []);



  const setupHorizontalScroll = useCallback(() => {
    const track = vcGalleryTrackRef.current;
    const hscroll = vcHscrollRef.current;
    const heightEl = vcHscrollHeightRef.current;
    const indicator = vcScrollIndicatorRef.current;  // ← ADD THIS

  
    if (!track || !hscroll || !heightEl) return;
  
    // Remove old listener
    if (vcScrollHandlerRef.current) {
      vcScrollHandlerRef.current.kill();
      vcScrollHandlerRef.current = null;
    }
  
    // Measure
    const trackWidth = track.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = trackWidth - viewportWidth;
  
    if (scrollDistance <= 0) return;
  
    // Set spacer height
    heightEl.style.height = (scrollDistance + viewportWidth) + 'px';
  
    // Reset
    hscroll.scrollTop = 0;
    gsap.set(track, { x: 0 });
  
    // Use wheel event on the ENTIRE detail overlay — captures scroll everywhere
    const detail = vcDetailRef.current;
    
    const onWheel = (e) => {
      e.preventDefault();
      hscroll.scrollTop += e.deltaY;
      
      const progress = Math.min(hscroll.scrollTop / scrollDistance, 1);
      gsap.set(track, { x: -(progress * scrollDistance) });
      if (indicator) {
        if (hscroll.scrollTop > 50) {  // After scrolling 50px down
          gsap.to(indicator, { opacity: 0, duration: 0.3 });
        } else {
          gsap.to(indicator, { opacity: 1, duration: 0.3 });
        }
      }
    };
  
    detail.addEventListener('wheel', onWheel, { passive: false });
  
    vcScrollHandlerRef.current = {
      kill: () => {
        detail.removeEventListener('wheel', onWheel);
      }
    };
  }, []);

  const setupDiscoverHorizontalScroll = useCallback(() => {
    const track = discoverGalleryTrackRef.current;
    const hscroll = discoverHscrollRef.current;
    const heightEl = discoverHscrollHeightRef.current;
    const indicator = discoverScrollIndicatorRef.current;  // ← ADD THIS

  
    if (!track || !hscroll || !heightEl) return;
  
    // Remove old listener
    if (discoverScrollHandlerRef.current) {
      discoverScrollHandlerRef.current.kill();
      discoverScrollHandlerRef.current = null;
    }
  
    // Measure
    const trackWidth = track.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = trackWidth - viewportWidth;
  
    if (scrollDistance <= 0) return;
  
    // Set spacer height
    heightEl.style.height = (scrollDistance + viewportWidth) + 'px';
  
    // Reset
    hscroll.scrollTop = 0;
    gsap.set(track, { x: 0 });
  
    // Use wheel event on the detail overlay
    const detail = discoverDetailRef.current;
    
    const onWheel = (e) => {
      e.preventDefault();
      hscroll.scrollTop += e.deltaY;
      
      const progress = Math.min(hscroll.scrollTop / scrollDistance, 1);
      gsap.set(track, { x: -(progress * scrollDistance) });

        
        // ← ADD THIS: Hide indicator when scrolling starts
        if (indicator) {
          if (hscroll.scrollTop > 50) {  // After scrolling 50px down
            gsap.to(indicator, { opacity: 0, duration: 0.3 });
          } else {
            gsap.to(indicator, { opacity: 1, duration: 0.3 });
          }
        }
    };
  
    detail.addEventListener('wheel', onWheel, { passive: false });
  
    discoverScrollHandlerRef.current = {
      kill: () => {
        detail.removeEventListener('wheel', onWheel);
      }
    };
  }, []);

  const openViceCityDetail = useCallback(() => {
    setViceCityOpen(true);
    document.body.style.overflow = 'hidden';

    const navbar = document.querySelector('header.nm__bar');
    if (navbar) {
      gsap.to(navbar, { opacity: 0, y: -100, duration: 0.4, pointerEvents: 'none' });
    }
  
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  
    // BG fades in
    tl.to(vcDetailBgRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
    }, 0);



      // Show scroll indicator ← ADD THIS SECTION
      tl.to(vcScrollIndicatorRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
      }, 0.4);
  
    // Back button slides in
    tl.to(vcDetailBackRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: 'power3.out',
    }, 0.4);
  
    // Postcard — swoops in from bottom-left with rotation
    tl.fromTo(vcDetailPostcardRef.current,
      { opacity: 0, y: 120, x: -80, rotation: -12, scale: 0.8 },
      { opacity: 1, y: 0, x: 0, rotation: -3, scale: 1, duration: 1.2, ease: 'power4.out' },
    0.2);
  
    // Heading — slides up with stagger feel
    tl.fromTo(vcDetailHeadingRef.current,
      { opacity: 0, y: 60, clipPath: 'inset(100% 0 0 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)', duration: 0.9, ease: 'power3.out' },
    0.5);
  
    // Subheading — fades up smoothly
    tl.fromTo(vcDetailSubheadingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
    0.7);
  
    // Description — fades up last
    tl.fromTo(vcDetailDescRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
    0.85);
  
    // Setup horizontal scroll after animation
    tl.call(() => {
      setupHorizontalScroll();
    });
  
  }, [setupHorizontalScroll]);

 

  const closeViceCityDetail = useCallback(() => {
    if (vcScrollHandlerRef.current) {
      vcScrollHandlerRef.current.kill();
      vcScrollHandlerRef.current = null;
    }
  
    if (vcHscrollRef.current) vcHscrollRef.current.scrollTop = 0;
    if (vcGalleryTrackRef.current) gsap.set(vcGalleryTrackRef.current, { x: 0 });
  
    const tl = gsap.timeline({
      defaults: { ease: 'power2.in' },
      onComplete: () => {
        setViceCityOpen(false);
        document.body.style.overflow = '';
      }
    });

      // ← ADD THIS: Show navbar
      const navbar = document.querySelector('header.nm__bar');
      if (navbar) {
        gsap.to(navbar, { opacity: 1, y: 0, duration: 0.4, pointerEvents: 'auto' });
      }


      // Hide scroll indicator ← ADD THIS
      tl.to(vcScrollIndicatorRef.current, { opacity: 0, duration: 0.3 }, 0);
  
    // Text fades out quickly
    tl.to(vcDetailDescRef.current, { opacity: 0, y: 15, duration: 0.25 }, 0);
    tl.to(vcDetailSubheadingRef.current, { opacity: 0, y: 15, duration: 0.25 }, 0.05);
    tl.to(vcDetailHeadingRef.current, { opacity: 0, y: 20, duration: 0.3 }, 0.1);
  
    // Postcard swoops out
    tl.to(vcDetailPostcardRef.current, {
      opacity: 0,
      y: 80,
      x: -50,
      rotation: -8,
      scale: 0.85,
      duration: 0.5,
      ease: 'power3.in',
    }, 0.1);
  
    // Back button
    tl.to(vcDetailBackRef.current, { opacity: 0, x: -20, duration: 0.3 }, 0.1);
  
    // BG fades out last
    tl.to(vcDetailBgRef.current, { opacity: 0, duration: 0.6, ease: 'power2.inOut' }, 0.2);
  
  }, []);

  const openDiscoverDetail = useCallback(() => {
    setDiscoverDetailOpen(true);
    document.body.style.overflow = 'hidden';
    const navbar = document.querySelector('header.nm__bar');
    if (navbar) {
      gsap.to(navbar, { opacity: 0, y: -100, duration: 0.4, pointerEvents: 'none' });
    }
  
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  
    // BG fades in
    tl.to(discoverDetailBgRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
    }, 0);

       // Show scroll indicator ← ADD THIS SECTION
       tl.to(discoverScrollIndicatorRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
      }, 0.4);
  
    // Back button slides in
    tl.to(discoverDetailBackRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: 'power3.out',
    }, 0.4);
  
    // Postcard — swoops in from bottom-left with rotation
    tl.fromTo(discoverDetailPostcardRef.current,
      { opacity: 0, y: 120, x: -80, rotation: -12, scale: 0.8 },
      { opacity: 1, y: 0, x: 0, rotation: -3, scale: 1, duration: 1.2, ease: 'power4.out' },
    0.2);
  
    // Heading — slides up with stagger feel
    tl.fromTo(discoverDetailHeadingRef.current,
      { opacity: 0, y: 60, clipPath: 'inset(100% 0 0 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)', duration: 0.9, ease: 'power3.out' },
    0.5);
  
    // Subheading — fades up smoothly
    tl.fromTo(discoverDetailSubheadingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
    0.7);
  
    // Description — fades up last
    tl.fromTo(discoverDetailDescRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
    0.85);
  
    // Setup horizontal scroll after animation
    tl.call(() => {
      setupDiscoverHorizontalScroll();
    });
  
  }, [setupDiscoverHorizontalScroll]);
  
  const closeDiscoverDetail = useCallback(() => {
    if (discoverScrollHandlerRef.current) {
      discoverScrollHandlerRef.current.kill();
      discoverScrollHandlerRef.current = null;
    }
  
    if (discoverHscrollRef.current) discoverHscrollRef.current.scrollTop = 0;
    if (discoverGalleryTrackRef.current) gsap.set(discoverGalleryTrackRef.current, { x: 0 });
  
    const tl = gsap.timeline({
      defaults: { ease: 'power2.in' },
      onComplete: () => {
        setDiscoverDetailOpen(false);
        document.body.style.overflow = '';
      }
    });

    const navbar = document.querySelector('header.nm__bar');
    if (navbar) {
      gsap.to(navbar, { opacity: 1, y: 0, duration: 0.4, pointerEvents: 'auto' });
    }
          // Hide scroll indicator ← ADD THIS
          tl.to(discoverScrollIndicatorRef.current, { opacity: 0, duration: 0.3 }, 0);
  
    // Text fades out quickly
    tl.to(discoverDetailDescRef.current, { opacity: 0, y: 15, duration: 0.25 }, 0);
    tl.to(discoverDetailSubheadingRef.current, { opacity: 0, y: 15, duration: 0.25 }, 0.05);
    tl.to(discoverDetailHeadingRef.current, { opacity: 0, y: 20, duration: 0.3 }, 0.1);
  
    // Postcard swoops out
    tl.to(discoverDetailPostcardRef.current, {
      opacity: 0,
      y: 80,
      x: -50,
      rotation: -8,
      scale: 0.85,
      duration: 0.5,
      ease: 'power3.in',
    }, 0.1);
  
    // Back button
    tl.to(discoverDetailBackRef.current, { opacity: 0, x: -20, duration: 0.3 }, 0.1);
  
    // BG fades out last
    tl.to(discoverDetailBgRef.current, { opacity: 0, duration: 0.6, ease: 'power2.inOut' }, 0.2);
  
  }, []);
  
  // Reset detail elements when closed
  useEffect(() => {
    if (!discoverDetailOpen) {
      gsap.set(discoverDetailBgRef.current, { opacity: 0 });
      gsap.set(discoverDetailBackRef.current, { opacity: 0, x: -20 });
      gsap.set(discoverDetailPostcardRef.current, { opacity: 0, y: 120, x: -80, rotation: -12, scale: 0.8 });
      gsap.set(discoverDetailHeadingRef.current, { opacity: 0, y: 60 });
      gsap.set(discoverDetailSubheadingRef.current, { opacity: 0, y: 40 });
      gsap.set(discoverDetailDescRef.current, { opacity: 0, y: 30 });
      gsap.set(discoverScrollIndicatorRef.current, { opacity: 0 });  // ← ADD THIS

    }
  }, [discoverDetailOpen]);

  // Reset detail elements when closed
  // useEffect(() => {
  //   if (!viceCityOpen) {
  //     // Reset positions for next open
  //     gsap.set(vcDetailBgRef.current, { opacity: 0 });
  //     gsap.set(vcDetailBackRef.current, { opacity: 0, x: -20 });
  //     gsap.set(vcDetailPostcardRef.current, { opacity: 0, y: 60, rotation: -6, scale: 0.9 });
  //     gsap.set(vcDetailHeadingRef.current, { opacity: 0, y: 40 });
  //     gsap.set(vcDetailSubheadingRef.current, { opacity: 0, y: 30 });
  //     gsap.set(vcDetailDescRef.current, { opacity: 0, y: 25 });
  //   }
  // }, [viceCityOpen]);
  useEffect(() => {
    if (!viceCityOpen) {
      gsap.set(vcDetailBgRef.current, { opacity: 0 });
      gsap.set(vcDetailBackRef.current, { opacity: 0, x: -20 });
      gsap.set(vcDetailPostcardRef.current, { opacity: 0, y: 120, x: -80, rotation: -12, scale: 0.8 });
      gsap.set(vcDetailHeadingRef.current, { opacity: 0, y: 60 });
      gsap.set(vcDetailSubheadingRef.current, { opacity: 0, y: 40 });
      gsap.set(vcDetailDescRef.current, { opacity: 0, y: 30 });
      gsap.set(vcScrollIndicatorRef.current, { opacity: 0 });  // ← ADD THIS

    }
  }, [viceCityOpen]);



  const openImageLightbox = useCallback((imgSrc) => {
    setExpandedImage(imgSrc);
    requestAnimationFrame(() => {
      gsap.fromTo(vcLightboxRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: 'power2.out' }
      );
      gsap.fromTo(vcLightboxImgRef.current,
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 0.1 }
      );
    });
  }, []);
  
  const closeImageLightbox = useCallback(() => {
    const tl = gsap.timeline({
      onComplete: () => setExpandedImage(null)
    });
    tl.to(vcLightboxImgRef.current, { scale: 0.9, opacity: 0, duration: 0.3, ease: 'power2.in' }, 0);
    tl.to(vcLightboxRef.current, { opacity: 0, duration: 0.35, ease: 'power2.in' }, 0.1);
  }, []);


  return (
    <div ref={containerRef} className="story-wrapper">
      
      {/* ============ MAIN STORY SECTION (JASON) ============ */}
      <section ref={storyRef} className="story" id="story">
        <div ref={stickyContainerRef} className="story__sticky">
          
          {/* Background image */}
          <div ref={bgImageRef} className="story__bg-image">
            <img 
              src={process.env.PUBLIC_URL + '/img/HighresScreenshot00005.webp'} 
              alt="GODS OF CRICKET"
            />
            <div className="story__bg-overlay"></div>
          </div>
          
          {/* Vice City Text */}
          <div ref={exitContainerRef} className="story__exit-container">
            <div ref={storyTextRef} className="story__text-wrapper">
              <div className="story__text-layer story__text-dim" ref={textDimRef}>
                <h2 className="story__title">Three Worlds. One Legacy.</h2>
                <p className="story__paragraph">
                  Streets. Stadiums. Glory. Your rise starts here —
                  from backyard battles to sold-out arenas. Pick your crew.
                  Prove your worth. Become a god.
                </p>
              </div>
              <div className="story__text-layer story__text-bright" ref={textBrightRef}>
                <h2 className="story__title">Three Worlds. One Legacy.</h2>
                <p className="story__paragraph">
                  Streets. Stadiums. Glory. Your rise starts here —
                  from backyard battles to sold-out arenas. Pick your crew.
                  Prove your worth. Become a god.
                </p>
              </div>
              <div className="story__text-layer story__text-glow" ref={textGlowRef}>
                <h2 className="story__title">Three Worlds. One Legacy.</h2>
                <p className="story__paragraph">
                  Streets. Stadiums. Glory. Your rise starts here —
                  from backyard battles to sold-out arenas. Pick your crew.
                  Prove your worth. Become a god.
                </p>
              </div>
            </div>
          </div>
          
          {/* Jason Content - scrolls up from bottom */}
          <div ref={jasonWrapperRef} className="jason">
            
            {/* Name - left side */}
            <h1 ref={jasonNameRef} className="jason__name">STREETZ</h1>
            
            {/* Quote - left side below name */}
            <p ref={jasonQuoteRef} className="jason__quote">
              No rules. No mercy. Just raw cricket.
            </p>
            
            {/* Description - left side below quote */}
            <p ref={jasonDescRef} className="jason__desc">
              3v3 on concrete. Trick shots and special abilities.
              Where legends are forged — in the dust, under the lights.
            </p>
            
            {/* Image 1 - Right side, large (car closeup) */}
            <div ref={jasonImg1Ref} className="jason__img jason__img--1 img-expandable" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00007.webp')}>
              <img 
                src={process.env.PUBLIC_URL + '/img/HighresScreenshot00007.webp'} 
                alt="Jason closeup"
              />
              <button className="img-expandable__btn" >
               <ExpandIcon />
              </button>
            </div>
            
            {/* Image 2 - Left side, tall (gym) */}
            <div ref={jasonImg2Ref} className="jason__img jason__img--2 img-expandable" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00009.webp')}>
              <img 
                src={process.env.PUBLIC_URL + '/img/HighresScreenshot00009.webp'} 
                alt="Jason gym"
              />
               <button className="img-expandable__btn" >
                <ExpandIcon />
              </button>
            </div>
            
            {/* Image 3 - Right side bottom (bar) */}
            <div ref={jasonImg3Ref} className="jason__img jason__img--3 img-expandable" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00010.webp')}>
              <img 
                src={process.env.PUBLIC_URL + '/img/HighresScreenshot00010.webp'} 
                alt="Jason bar"
              />
               <button className="img-expandable__btn">
                <ExpandIcon />
              </button>
            </div>
            
          </div>
          
          <div className="story__scroll-hint">
            <span>⌄</span>
          </div>
          
        </div>
      </section>
      
      {/* ============ LUCIA SECTION ============ */}
      <section ref={luciaSectionRef} className="lucia-section" id="ranked">
        <div ref={luciaStickyRef} className="lucia-section__sticky">
          
          {/* Lucia Background Image */}
          <div ref={luciaBgImageRef} className="lucia__bg-image">
            <img 
              src={process.env.PUBLIC_URL + '/img/HighresScreenshot00006.webp'} 
              alt="Jason in store"
            />
          </div>
          
          {/* Dark overlay for fade effect */}
          <div ref={luciaBgOverlayRef} className="lucia__bg-overlay"></div>
          
          {/* Lucia Content - scrolls up from bottom */}
          <div ref={luciaWrapperRef} className="lucia">
            
            {/* Main Quote - Large text */}
            <h2 ref={luciaMainQuoteRef} className="lucia__main-quote">
            RANKED. TACTICAL. RUTHLESS.
            </h2>
            
            {/* Sub Quote - Cyan italic */}
            <p ref={luciaSubQuoteRef} className="lucia__sub-quote">
            1v1 to 5v5. Full ODI rules.
            </p>
            
            {/* Description - Right side */}
            <p ref={luciaDescRef} className="lucia__desc">
              Step up from the streets. Ranked matches, real strategy,
              real pressure. Every over matters. Every wicket counts.
              Climb the ladder or get left behind.
            </p>
            
            {/* Image 1 - Left side, large */}
            <div ref={luciaImg1Ref} className="lucia__img lucia__img--1 img-expandable" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00010.webp')}>
              <img 
                src={process.env.PUBLIC_URL + '/img/HighresScreenshot00010.webp'} 
                alt="Jason and Lucia"
              />
              <button className="img-expandable__btn" >
                <ExpandIcon />
              </button>
            </div>
            
            {/* Image 2 - Left side below img1 */}
            <div ref={luciaImg2Ref} className="lucia__img lucia__img--2 img-expandable" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00015.webp')}>
              <img 
                src={process.env.PUBLIC_URL + '/img/HighresScreenshot00015.webp'} 
                alt="Jason fishing"
              />
              <button className="img-expandable__btn" >
                <ExpandIcon />
              </button>
            </div>
            
            {/* Image 3 - Right side, tall */}
            <div ref={luciaImg3Ref} className="lucia__img lucia__img--3 img-expandable" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00004.webp')}>
              <img 
                src={process.env.PUBLIC_URL + '/img/HighresScreenshot00004.webp'} 
                alt="Jason portrait"
              />
             <button className="img-expandable__btn" >
              <ExpandIcon />
            </button>
            </div>
            
          </div>
          
        </div>
      </section>
{/* ============ LUCIA CHARACTER SECTION ============ */}
<section ref={luciaCharSectionRef} className="lucia-char-section" id="the-pitch">
  <div ref={luciaCharStickyRef} className="lucia-char-section__sticky">
    
    {/* Background Image */}
    <div ref={luciaCharBgImageRef} className="lucia-char__bg-image">
      <img 
        src={process.env.PUBLIC_URL + '/img/HighresScreenshot00002.webp'} 
        alt="Lucia and Jason"
      />
    </div>
    
    {/* Dark overlay */}
    <div ref={luciaCharBgOverlayRef} className="lucia-char__bg-overlay"></div>
    
    {/* Content */}
    <div ref={luciaCharWrapperRef} className="lucia-char">
      
      {/* Name - Right side */}
      <h1 ref={luciaCharNameRef} className="lucia-char__name">THE PITCH AWAITS</h1>
      
      {/* Quote - Right side */}
      <p ref={luciaCharQuoteRef} className="lucia-char__quote">
      Amateurs become athletes. Athletes become gods.
      </p>
      
      {/* Description - Right side */}
      <p ref={luciaCharDescRef} className="lucia-char__desc">
        Full ODI rules. Voice comms. AI backfill.
        12-minute matches that feel like a World Cup final.
        Every position — bat, bowl, field, keep — controlled.
      </p>
      
      {/* Second Description */}
      <p ref={luciaCharDesc2Ref} className="lucia-char__desc2">
        Every position — bat, bowl, keep — played by a real human.
        No more solo cricket. This is the real thing. Set your field.<br/> 
        Trust your bowler. Win as a unit or lose as individuals.  The pitch doesn't care about your stats — only your decisions."
      </p>
      
      {/* Image 1 - Left side, large (boxing) */}
      <div ref={luciaCharImg1Ref} className="lucia-char__img lucia-char__img--1  img-expandable" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00009.webp')}>
        <img 
          src={process.env.PUBLIC_URL + '/img/HighresScreenshot00009.webp'} 
          alt="Lucia boxing"
        />
        <button className="img-expandable__btn" >
            <ExpandIcon />
        </button>
      </div>
      
      {/* Image 2 - Right side (pool) */}
      <div ref={luciaCharImg2Ref} className="lucia-char__img lucia-char__img--2  img-expandable" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00007.webp')}>
        <img 
          src={process.env.PUBLIC_URL + '/img/HighresScreenshot00007.webp'} 
          alt="Lucia pool"
        />
        <button className="img-expandable__btn" >
            <ExpandIcon />
        </button>
      </div>
      
      {/* Image 3 - Left side bottom (prison) */}
      <div ref={luciaCharImg3Ref} className="lucia-char__img lucia-char__img--3 img-expandable" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00004.webp')}>
        <img 
          src={process.env.PUBLIC_URL + '/img/HighresScreenshot00004.webp'} 
          alt="Lucia prison"
        />
          <button className="img-expandable__btn" >
            <ExpandIcon />
          </button>
      </div>
      
    </div>
    
  </div>
</section>



    {/* ============ LEONIDA SECTION - Natural scroll, NO GSAP ============ */}


      <section className="leonida-section" id="dominate">
        
        <div className="leonida__artwork">
          <img 
            src={process.env.PUBLIC_URL + '/img/HighresScreenshot00013.webp'} 
            alt="Jason and Lucia artwork"
          />
        </div>
        

        <div className="leonida__text-section" ref={leonidaTextSectionRef}>
          <h1 className="leonida__title" ref={leonidaTitleRef}>
            Rise.<br />
            Dominate.<br />
            Reign.
          </h1>
          
          <p className="leonida__desc" ref={leonidaDescRef}>
            Every god started somewhere. Street legend to esports icon —
            it starts with a single match.
          </p>
        </div>

          {/* <div className="leonida__artwork2">
            <img 
              src={process.env.PUBLIC_URL + '/img/HighresScreenshot00004.webp'} 
              alt="Jason and Lucia artwork"
            />
          </div> */}
      </section>
      
    {/* ============ CAL HAMPTON SECTION ============ */}
<section ref={calSectionRef} className="cal-section" id="pro-teams">
  <div ref={calStickyRef} className="cal-section__sticky">
    
    {/* Background Image */}
    <div ref={calBgImageRef} className="cal__bg-image">
      <img 
        src={process.env.PUBLIC_URL + '/img/HighresScreenshot00007.webp'} 
        alt="Cal Hampton"
      />
    </div>
    
    {/* Dark overlay /////*/}
    <div ref={calBgOverlayRef} className="cal__bg-overlay"></div>
    
    {/* Content */}
    <div ref={calWrapperRef} className="cal">
      
      {/* Name */}
      <h1 ref={calNameRef} className="cal__name">PRO<br />TEAMS</h1>
      
      {/* Quote */}
      <p ref={calQuoteRef} className="cal__quote">
        Clubs. Leagues.<br />
        Seasons. Glory.
      </p>
      
      {/* Description */}
      <p ref={calDescRef} className="cal__desc">
      The pinnacle. Build your club, recruit your squad,
        dominate seasonal tournaments. Invite-only. Earn it.
      </p>
      
      {/* Image 1 - Left column */}
      <div ref={calImg1Ref} className="cal__img cal__img--1 img-expandable" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00006.webp')}>
        <img 
          src={process.env.PUBLIC_URL + '/img/HighresScreenshot00006.webp'} 
          alt="Cal with friends"
        />
          <button className="img-expandable__btn" >
            <ExpandIcon />
          </button>
      </div>
      
      {/* Image 2 - Right column */}
      <div ref={calImg2Ref} className="cal__img cal__img--2 img-expandable " onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00008.webp')}>
        <img 
          src={process.env.PUBLIC_URL + '/img/HighresScreenshot00008.webp'} 
          alt="Cal at park"
        />
         <button className="img-expandable__btn" >
            <ExpandIcon />
          </button>
      </div>
      
      {/* Image 3 - Large left (portrait) */}
      <div ref={calImg3Ref} className="cal__img cal__img--3 img-expandable " onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00007.webp')}>
        <img 
          src={process.env.PUBLIC_URL + '/img/HighresScreenshot00007.webp'} 
          alt="Cal portrait"
        />
         <button className="img-expandable__btn">
            <ExpandIcon />
          </button>
      </div>
      


      
      {/* Big Quote - Right side */}
      <h2 ref={calBigQuoteRef} className="cal__big-quote">
        THE WORLD'S FIRST<br />
        CRICKET ESPORTS<br />
        PLATFORM
      </h2>
      
    </div>
    
  </div>
</section>



        {/* ============ VISIT LEONIDA SECTION ============ */}
      <section ref={vlSectionRef} className="visit-leonida-section" id="leonida">
        <div ref={vlStickyRef} className="visit-leonida__sticky">

          {/* Gradient BG */}
          <div ref={vlBgRef} className="visit-leonida__bg"></div>

          {/* Grain texture */}
          <div className="visit-leonida__grain"></div>

          {/* Floating particles */}
          <canvas ref={vlParticlesRef} className="visit-leonida__particles"></canvas>

          {/* Ambient orbs */}
          <div ref={vlOrb1Ref} className="visit-leonida__orb visit-leonida__orb--1"></div>
          <div ref={vlOrb2Ref} className="visit-leonida__orb visit-leonida__orb--2"></div>
          <div ref={vlOrb3Ref} className="visit-leonida__orb visit-leonida__orb--3"></div>

          {/* Header: Logo + Divider + Tagline */}
          <div ref={vlHeaderRef} className="visit-leonida__header">
            <div className="visit-leonida__logo-group">
              <div ref={vlIconRef} className="visit-leonida__icon">
                <img src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'} alt="GOC" />
              </div>
              <div ref={vlLogoTextRef} className="visit-leonida__logo-text">
                <span className="visit">Gods of</span>
                <span className="leonida">Cricket</span>
              </div>
            </div>

            <div ref={vlDividerRef} className="visit-leonida__divider"></div>

            <p ref={vlTaglineRef} className="visit-leonida__tagline">
            Three worlds. Infinite glory. Your legend starts now.
            </p>
          </div>

          {/* Vice City Postcard */}
          <div ref={vlPostcardWrapperRef} className="visit-leonida__postcard-wrapper">
           

<div ref={vlPostcardRef} className="visit-leonida__postcard">
  <div className="visit-leonida__postcard-image">
    <img
      src={process.env.PUBLIC_URL + '/img/HighresScreenshot00004.webp'}
      alt="Vice City skyline"
    />
    <h2 ref={vlPostcardTitleRef} className="visit-leonida__postcard-title">Gods of Cricket</h2>
    
    {/* Overlay footer on image */}
    <div className="visit-leonida__postcard-overlay-footer">
      <div className="visit-leonida__postcard-logo">
      <div className="visit-leonida__postcard-logo-icon">
        <img src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'} alt="GOC" />
      </div>
        <div className="visit-leonida__postcard-logo-text">
          <span className="visit-sm">Gods of</span>
          <span className="leonida-sm">Cricket</span>
        </div>
      </div>
      <button
        className="visit-leonida__explore-btn"
        onClick={openViceCityDetail}
      >
        Enter the Arena
      </button>
    </div>
  </div>
</div>
          </div>

        </div>
      </section>

     
   {/* ============ VICE CITY DETAIL OVERLAY ============ */}
   <div ref={vcDetailRef} className={`vice-city-detail ${viceCityOpen ? 'active' : ''}`}>
        <div ref={vcDetailBgRef} className="vice-city-detail__bg"></div>

        <button
          ref={vcDetailBackRef}
          className="vice-city-detail__back"
          onClick={closeViceCityDetail}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Back
        </button>
 {/* Scroll Indicator */}
 <div ref={vcScrollIndicatorRef} className="scroll-indicator vice-city">
      {/* <div className="double-chevron-wrapper">
        <div className="double-chevron">∨</div>
        <div className="double-chevron">∨</div>
      </div> */}
        <div className="single-arrow">∨</div>

    </div>

        {/* SCROLLABLE WRAPPER — this div scrolls vertically */}
        <div ref={vcHscrollRef} className="vc-hscroll">
          <div ref={vcHscrollHeightRef} className="vc-hscroll__height"></div>
        </div>

        {/* HORIZONTAL TRACK — fixed position, moves via translateX */}
        <div ref={vcGalleryTrackRef} className="vc-hscroll__track">

          {/* Panel 1: Postcard + Text */}
          <div className="vc-hscroll__panel--intro">
            <div ref={vcDetailPostcardRef} className="vice-city-detail__postcard">
              <div className="vice-city-detail__postcard-image">
                <img
                  src={process.env.PUBLIC_URL + '/img/HighresScreenshot00004.webp'}
                  alt="Vice City skyline"
                />
                <h2 className="vice-city-detail__postcard-title">Gods Of Cricket</h2>
              </div>
             
            </div>

            <div className="vice-city-detail__info">
              <h1 ref={vcDetailHeadingRef} className="vice-city-detail__heading">
                BUILT FOR GLORY
              </h1>
              <p ref={vcDetailSubheadingRef} className="vice-city-detail__subheading">
              EVERY PITCH. EVERY FORMAT. EVERY LEVEL OF THE BEAUTIFUL GAME.
              </p>
              <p ref={vcDetailDescRef} className="vice-city-detail__description">
                From the raw chaos of street cricket to the precision of ranked ODIs
                and the elite drama of pro tournaments — Gods of Cricket delivers
                three distinct worlds, each with its own rules, culture, and path to legend status.
              </p>
            </div>
          </div>

{/* // */}
  

          {/* //// */}

        {/* Gallery Images 1 & 2: Stacked column */}
        <div className="vc-hscroll__stack" style={{ alignSelf: 'flex-start' ,marginLeft: '-7vw', marginTop:'-5vh', marginRight: 'clamp(10px, 3vw, 20px)'  }}>
          <div className="vc-hscroll__img" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00004.webp')} style={{ width: 'clamp(100px, 26vw, 250px)', height: 'clamp(100px, 28vh, 300px)', alignSelf:'end' }}>
            <img src={process.env.PUBLIC_URL + '/img/HighresScreenshot00004.webp'} alt="Scene 1" />
            <button className="vc-hscroll__expand">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="9 21 3 21 3 15"></polyline>
                <line x1="21" y1="3" x2="14" y2="10"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            </button>
          </div>
          <div className="vc-hscroll__img" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00002.webp')} style={{ width: 'clamp(460px, 26vw, 580px)', height: 'clamp(450px, 38vh, 500px)' }}>
            <img src={process.env.PUBLIC_URL + '/img/HighresScreenshot00002.webp'} alt="Scene 2" />
            <button className="vc-hscroll__expand" >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="9 21 3 21 3 15"></polyline>
                <line x1="21" y1="3" x2="14" y2="10"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            </button>
          </div>
        </div>
          {/* Gallery Image 3: Large  */} 
          <div className="vc-hscroll__img" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00009.webp')} style={{ width: 'clamp(220px, 22vw, 320px)', height: 'clamp(500px, 55vh, 680px)', alignSelf:'center', marginRight: 'clamp(40px, 5vw, 80px)' , marginTop:'0vh' }}>
          <img src={process.env.PUBLIC_URL + '/img/HighresScreenshot00009.webp'} alt="Scene 8" />
          <button className="vc-hscroll__expand" >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>
        </div> 


        {/* Gallery Image 4: Tall, near top */}
        <div className="vc-hscroll__img" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/player2.webp')} style={{ width: 'clamp(420px, 44vw, 560px)', height: 'clamp(710px, 77vh, 890px)', alignSelf: 'center', marginTop: '0vh', marginBottom:'0vh', marginLeft: 'clamp(10px, 3vw, 30px)',  marginRight: 'clamp(10px, 3vw, 30px)'}}>
          <img src={process.env.PUBLIC_URL + '/img/player2.webp'} alt="Scene 1" />
          <button className="vc-hscroll__expand" >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>
        </div>

        {/* Gallery Image 5: Wide, near bottom */}
        <div className="vc-hscroll__img" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00005.webp')} style={{ width: 'clamp(340px, 34vw, 500px)', height: 'clamp(360px, 48vh, 470px)', alignSelf: 'center', marginBottom: '0vh', marginTop:'0vh', }}>
          <img src={process.env.PUBLIC_URL + '/img/HighresScreenshot00005.webp'} alt="Scene 2" />
          <button className="vc-hscroll__expand" >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>
        </div>

        {/* Gallery Image 6: Medium tall, centered */}
        <div className="vc-hscroll__img" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/player3.webp')} style={{ width: 'clamp(250px, 26vw, 360px)', height: 'clamp(550px, 68vh, 650px)', alignSelf: 'center',  marginBottom: '0vh', marginTop:'0vh', marginLeft: 'clamp(40px, 5vw, 80px)',  marginRight: 'clamp(10px, 3vw, 30px)'}}>
          <img src={process.env.PUBLIC_URL + '/img/player3.webp'} alt="Scene 3" />
          <button className="vc-hscroll__expand" >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>
        </div>

        {/* Gallery Image 7: Large, near top */}
        <div className="vc-hscroll__img" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00009.webp')} style={{ width: 'clamp(300px, 38vw, 500px)', height: 'clamp(710px, 60vh, 770px)', alignSelf: 'center', marginTop: '0vh', marginBottom:'0vh', marginRight:'clamp(40px, 5vw, 80px)' }}>
          <img src={process.env.PUBLIC_URL + '/img/HighresScreenshot00009.webp'} alt="Scene 4" />
          <button className="vc-hscroll__expand" >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>
        </div>

        {/* Gallery Image 8: Small wide, bottom */}
        <div className="vc-hscroll__img" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00002.webp')} style={{ width: 'clamp(300px, 29vw, 420px)', height: 'clamp(410px, 50vh, 500px)', alignSelf: 'center', marginBottom: '0vh', marginTop:'0vh', marginRight: 'clamp(5px, 2vw, 25px)' }}>
          <img src={process.env.PUBLIC_URL + '/img/HighresScreenshot00002.webp'} alt="Scene 5" />
          <button className="vc-hscroll__expand" >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>
        </div>

        {/* Gallery Image 9: Very tall, top */}
        <div className="vc-hscroll__img" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00010.webp')} style={{ width: 'clamp(300px, 25vw, 380px)', height: 'clamp(540px, 72vh, 720px)', alignSelf: 'center', marginTop: '0vh' ,marginRight: 'clamp(60px, 40vw, 85px)'}}>
          <img src={process.env.PUBLIC_URL + '/img/HighresScreenshot00010.webp'} alt="Scene 6" />
          <button className="vc-hscroll__expand" >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>
        </div>



        {/* Gallery Image 10: Large square, centered */}
        <div className="vc-hscroll__img"  onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00013.webp')} style={{ width: 'clamp(550px, 66vw, 750px)', height: 'clamp(710px, 82vh, 890px)', alignSelf: 'center', marginTop:'0vh', marginBottom:'0vh', marginLeft:'clamp(130px, 40vw, 150px)', marginRight:'0vh'}}>
          <img src={process.env.PUBLIC_URL + '/img/HighresScreenshot00013.webp'} alt="Scene 8" />
          <button className="vc-hscroll__expand">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>
        </div>


        </div>
      </div>

{/* ============ DISCOVER DETAIL OVERLAY ============ */}
<div ref={discoverDetailRef} className={`discover-detail ${discoverDetailOpen ? 'active' : ''}`}>
  <div ref={discoverDetailBgRef} className="discover-detail__bg"></div>

  <button
    ref={discoverDetailBackRef}
    className="discover-detail__back"
    onClick={closeDiscoverDetail}
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
    Back
  </button>
      {/* Scroll Indicator */}
      <div ref={discoverScrollIndicatorRef} className="scroll-indicator discover">
      {/* <div className="double-chevron-wrapper">
        <div className="double-chevron">∨</div>
        <div className="double-chevron">∨</div>
      </div> */}
        <div className="single-arrow">∨</div>

    </div>

  {/* SCROLLABLE WRAPPER */}
  <div ref={discoverHscrollRef} className="discover-hscroll">
    <div ref={discoverHscrollHeightRef} className="discover-hscroll__height"></div>
  </div>

  {/* HORIZONTAL TRACK */}
  <div ref={discoverGalleryTrackRef} className="discover-hscroll__track">

    {/* Panel 1: Postcard + Text */}
    <div className="discover-hscroll__panel--intro">
      <div ref={discoverDetailPostcardRef} className="discover-detail__postcard">
        <div className="discover-detail__postcard-image">
          <img
            src={process.env.PUBLIC_URL + '/img/HighresScreenshot00008.webp'}
            alt="Ambrosia"
          />
          <h2 className="discover-detail__postcard-title">The Arena</h2>
        </div>
      </div>

      <div className="discover-detail__info">
        <h1 ref={discoverDetailHeadingRef} className="discover-detail__heading">
        THE ARENA
        </h1>
        <p ref={discoverDetailSubheadingRef} className="discover-detail__subheading">
        WHERE GODS ARE MADE UNDER THE LIGHTS.        </p>
        <p ref={discoverDetailDescRef} className="discover-detail__description">
        Ranked ladders, live tournaments, and esports leagues.
          The world's best compete here. Every ball is pressure.
          Every wicket is glory.
        </p>
      </div>
    </div>

    {/* Gallery Images */}
    {/* <div className="discover-hscroll__img" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00003.webp')} style={{ width: 'clamp(300px, 32vw, 450px)', height: 'clamp(400px, 45vh, 550px)' }}>
      <img src={process.env.PUBLIC_URL + '/img/HighresScreenshot00003.webp'} alt="Scene 1" />
      <button className="discover-hscroll__expand">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 3 21 3 21 9"></polyline>
          <polyline points="9 21 3 21 3 15"></polyline>
          <line x1="21" y1="3" x2="14" y2="10"></line>
          <line x1="3" y1="21" x2="10" y2="14"></line>
        </svg>
      </button>
    </div>


     {/* Gallery Images 1 & 2: Stacked column */}
     <div className="vc-hscroll__stack" style={{ alignSelf: 'flex-start' ,marginLeft: '-8vw', marginTop:'-5vh', marginRight: 'clamp(10px, 3vw, 20px)'  }}>
          <div className="vc-hscroll__img" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00005.webp')} style={{ width: 'clamp(100px, 26vw, 250px)', height: 'clamp(100px, 28vh, 300px)', alignSelf:'end' }}>
            <img src={process.env.PUBLIC_URL + '/img/HighresScreenshot00005.webp'} alt="Scene 1" />
            <button className="vc-hscroll__expand">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="9 21 3 21 3 15"></polyline>
                <line x1="21" y1="3" x2="14" y2="10"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            </button>
          </div>
          <div className="vc-hscroll__img" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00007.webp')} style={{ width: 'clamp(460px, 26vw, 580px)', height: 'clamp(450px, 38vh, 500px)' }}>
            <img src={process.env.PUBLIC_URL + '/img/HighresScreenshot00007.webp'} alt="Scene 2" />
            <button className="vc-hscroll__expand" >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="9 21 3 21 3 15"></polyline>
                <line x1="21" y1="3" x2="14" y2="10"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            </button>
          </div>
        </div>

          {/* Gallery Image 3: Large  */} 
          <div className="vc-hscroll__img" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00004.webp')} style={{ width: 'clamp(220px, 22vw, 320px)', height: 'clamp(500px, 55vh, 680px)', alignSelf:'center', marginRight: 'clamp(40px, 5vw, 80px)' , marginTop:'0vh' }}>
          <img src={process.env.PUBLIC_URL + '/img/HighresScreenshot00004.webp'} alt="Scene 8" />
          <button className="vc-hscroll__expand" >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>
        </div> 


    


    {/* gallery image:4 */}
    <div className="discover-hscroll__img" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00009.webp')} style={{ width: 'clamp(280px, 30vw, 420px)', height: 'clamp(450px, 50vh, 600px)' , marginTop:'0vh', marginBottom:'0vh'}}>
      <img src={process.env.PUBLIC_URL + '/img/HighresScreenshot00009.webp'} alt="Scene 5" />
      <button className="vc-hscroll__expand">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 3 21 3 21 9"></polyline>
          <polyline points="9 21 3 21 3 15"></polyline>
          <line x1="21" y1="3" x2="14" y2="10"></line>
          <line x1="3" y1="21" x2="10" y2="14"></line>
        </svg>
      </button>
    </div>

        {/* Gallery Image 5 */}
        <div className="vc-hscroll__img" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/player2.webp')} style={{ width: 'clamp(420px, 44vw, 560px)', height: 'clamp(710px, 77vh, 890px)', alignSelf: 'center', marginTop: '0vh', marginBottom:'0vh', marginLeft: 'clamp(10px, 3vw, 30px)',  marginRight: '0vh'}}>
          <img src={process.env.PUBLIC_URL + '/img/player2.webp'} alt="Scene 1" />
          <button className="vc-hscroll__expand" >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>
        </div>


          

  </div>
</div>

          {/* ============ WORLD OF LEONIDA SECTION ============ */}
<section ref={worldSectionRef} className="world-section" id="the-game">
  <div ref={worldStickyRef} className="world-section__sticky">
    
    {/* Background gradients — soft warm wash like GTA VI */}
    <div ref={worldBgRef} className="world__bg">
      <img 
        src={process.env.PUBLIC_URL + '/img/HighresScreenshot00003.webp'} 
        alt="World of Leonida"
      />
    </div>
    
    {/* Gradient overlay (warm pink-lavender like GTA VI Raul section) */}
    <div ref={worldBgOverlayRef} className="world__gradient-bg"></div>
    
    {/* Content layer */}
    
    <div className="world__content" >
      
      {/* Character name — right aligned */}
      <h1 ref={worldNameRef} className="world__name">THE<br /> GAME</h1>
      
      {/* Quote */}
      <p ref={worldQuoteRef} className="world__quote">
      Every match<br/>
        matters.
      </p>
      
      {/* Description */}
      <p ref={worldDescRef} className="world__desc">
      {/* A universe of cricket built for those
        who live and breathe the sport. Every format.
        Every feeling. Every moment of glory. */}
        A universe of cricket built for those who live and breathe the sport. Every format. Every feeling. Every moment of glory — from the nervous first ball to the final-over six that seals the championship
      </p>
      
    </div>
    


    {/* Gallery images — with hover + expand like vice city */}

    <div ref={worldImg1Ref} className="world__img world__img--1 img-expandable" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00005.webp')}>
  <img src={process.env.PUBLIC_URL + '/img/HighresScreenshot00005.webp'} alt="Scene 1" />
  <button className="img-expandable__btn">
    <ExpandIcon />
  </button>
</div>
    
    
    <div ref={worldImg2Ref} className="world__img world__img--2 img-expandable" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00007.webp')}>
      <img src={process.env.PUBLIC_URL + '/img/HighresScreenshot00007.webp'} alt="Scene 2" />
      <button className="img-expandable__btn">
        <ExpandIcon />
      </button>
    </div>
    
    <div ref={worldImg3Ref} className="world__img world__img--3 img-expandable" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00006.webp')}>
      <img src={process.env.PUBLIC_URL + '/img/HighresScreenshot00006.webp'} alt="Scene 3" />
      <button className="img-expandable__btn">
        <ExpandIcon />
      </button>
    </div>
    
    {/* Additional images for the big quote phase */}
    <div ref={worldImg4Ref} className="world__img world__img--4 img-expandable" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/HighresScreenshot00002.webp')}>
      <img src={process.env.PUBLIC_URL + '/img/HighresScreenshot00002.webp'} alt="Scene 4" />
      <button className="img-expandable__btn">
        <ExpandIcon />
      </button>    
    </div>
    
    <div ref={worldImg5Ref} className="world__img world__img--5 img-expandable" onClick={() => openImageLightbox(process.env.PUBLIC_URL + '/img/player3.webp')}>
      <img src={process.env.PUBLIC_URL + '/img/player3.webp'} alt="Scene 5" />
      <button className="img-expandable__btn">
        <ExpandIcon />
      </button>
    </div>

    {/* Second quote + desc — appears with final image pair */}
      {/* <p ref={worldQuote2Ref} className="world__quote2">
        A professional<br/>adapts.
      </p>
      <p ref={worldDesc2Ref} className="world__desc2">
        Every corner turned, every deal made — it all 
        adds up. Sooner or later, his crew will have to 
        double down or pull their chips from the table.
      </p> */}
    
    {/* Big quote */}
    <div ref={worldBigQuoteBgRef} className="world__quote-bg"></div>
    <h2 ref={worldBigQuoteRef} className="world__big-quote">
      EVERY OVER<br/>
      TELLS A STORY.<br/>
      EVERY WICKET<br/>
      FORGES A GOD.
    </h2>
    
  </div>

</section>
{/* /// */}



{/* ============ SECOND VISIT SECTION (e.g., "Discover Ambrosia") ============ */}
<section ref={discoverSectionRef} className="discover-section" id="the-arena">
  <div ref={discoverStickyRef} className="discover__sticky">

    <div ref={discoverBgRef} className="discover__bg"></div>

    <div className="discover__grain"></div>

    <canvas ref={discoverParticlesRef} className="discover__particles"></canvas>

    <div ref={discoverOrb1Ref} className="discover__orb discover__orb--1"></div>
    <div ref={discoverOrb2Ref} className="discover__orb discover__orb--2"></div>
    <div ref={discoverOrb3Ref} className="discover__orb discover__orb--3"></div>

    <div ref={discoverHeaderRef} className="discover__header">
      <div className="discover__logo-group">
        <div ref={discoverIconRef} className="discover__icon">
        
          <img src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'} alt="GOC" />

        </div>
        <div ref={discoverLogoTextRef} className="discover__logo-text">
          <span className="discover">Enter</span>
          <span className="destination">The Arena</span>
        </div>
      </div>

      <div ref={discoverDividerRef} className="discover__divider"></div>

      <p ref={discoverTaglineRef} className="discover__tagline">
      Where champions are forged and legends are born.
      </p>
    </div>

    <div ref={discoverPostcardWrapperRef} className="discover__postcard-wrapper" >
      <div ref={discoverPostcardRef} className="discover__postcard">
        <div className="discover__postcard-image">
          <img
            src={process.env.PUBLIC_URL + '/img/HighresScreenshot00008.webp'}
            alt="the arena"
          />
          <h2 ref={discoverPostcardTitleRef} className="discover__postcard-title">The Arena</h2>
          
          <div className="discover__postcard-overlay-footer">
            <div className="discover__postcard-logo">
              <div className="discover__postcard-logo-icon">
              <img src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'} alt="GOC" />

              </div>
              <div className="discover__postcard-logo-text">
                <span className="discover-sm">Enter</span>
                <span className="destination-sm">The Arena</span>
              </div>
            </div>
            <button
              className="discover__explore-btn"
              onClick={openDiscoverDetail}
            >
              Enter the Arena
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

{/*  */}
      {/* ============ CINEMATIC FINALE SECTION  ============ */}
<section ref={finaleSectionRef} className="finale-section">
  <div ref={finaleStickyRef} className="finale-section__sticky">
    
    <div ref={finaleBgRef} className="finale__bg">
      <img 
        src={process.env.PUBLIC_URL + '/img/HighresScreenshot00002.webp'} 
        alt="Jason and Lucia"
      />
    </div>
    
    {/* Dark overlay */}
    <div ref={finaleBgOverlayRef} className="finale__overlay"></div>
    
    {/* Release info — 3-layer radial luminance wipe */}
    <div className="finale__content">
      
      {/* GOC Logo */}
      <div ref={finaleLogoRef} className="finale__logo">
        <img 
          src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'} 
          alt="Gods of Cricket"
        />
      </div>
      
      {/* DIM layer */}
      <div ref={finaleDimRef} className="finale__text-layer finale__text-dim">
        <div ref={finaleComingRef} className="finale__coming">COMING</div>
        <div ref={finaleDateRef} className="finale__date">FEBRUARY</div>
        <div ref={finaleYearRef} className="finale__year">2026</div>
      </div>
      
      {/* BRIGHT layer — revealed by radial mask */}
      <div ref={finaleBrightRef} className="finale__text-layer finale__text-bright">
        <div className="finale__coming">COMING</div>
        <div className="finale__date">FEBRUARY</div>
        <div className="finale__year">2026</div>
      </div>
      
      {/* GLOW layer — warm edge during wipe */}
      <div ref={finaleGlowRef} className="finale__text-layer finale__text-glow">
        <div className="finale__coming">COMING</div>
        <div className="finale__date">FEBRUARY</div>
        <div className="finale__year">2026</div>
      </div>
      
      {/* Platforms */}
      
      <div ref={finalePlatformsRef} className="finale__platforms">
        <span className="finale__platform">
          <img src="/img/platforms/playstation.svg" alt="PlayStation" className="finale__platform-icon" />
          PS5
        </span>
        <span className="finale__platform-divider">|</span>
        <span className="finale__platform">
          <img src="/img/platforms/xbox.svg" alt="Xbox" className="finale__platform-icon" />
          XBOX SERIES X|S
        </span>
        <span className="finale__platform-divider">|</span>
        <span className="finale__platform">
          <img src="/img/platforms/steam.svg" alt="Steam" className="finale__platform-icon" />
          PC
        </span>
      </div>
      
    </div>
    
  </div>
</section>

      

      {/* ============ FOOTER SECTION ============ */}
<section className="footer-section">
  <div className="footer__content">
    
    {/* Wishlist Row */}
   
     <div className="footer__wishlist">
      <h3 className="footer__wishlist-title">Wishlist Now</h3>
      <div className="footer__wishlist-buttons">
        <a href="#" className="footer__platform-btn">
          <img src="/img/platforms/playstation.svg" alt="PlayStation" className="footer__platform-svg" />
          PS5
        </a>
        <a href="#" className="footer__platform-btn">
          <img src="/img/platforms/xbox.svg" alt="Xbox" className="footer__platform-svg" />
          XBOX SERIES X|S
        </a>
        <a href="#" className="footer__platform-btn">
          <img src="/img/platforms/steam.svg" alt="Steam" className="footer__platform-svg" />
          PC
        </a>
      </div>
    </div>
    
    {/* Newsletter */}
    <div className="footer__newsletter">
      <div className="footer__newsletter-inner">
        <div className="footer__newsletter-left">
          {/* <span className="footer__newsletter-logo">GOC</span> */}
          <img className="footer__newsletter-logo" src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'}   alt="GOC"  />
          <span className="footer__newsletter-title">GET GOC UPDATES</span>
        </div>
        <p className="footer__newsletter-desc">
        Get the latest game announcements, updates on special events 
          and offers, and much more from Specter Games.
        </p>
      </div>
    </div>
    
    {/* Footer Links */}
    <div className="footer__links">
      <a href="/">Corporate</a>
      <a href="/">Privacy</a>
      <a href="/">Cookie Settings</a>
      <a href="/">Cookie Policy</a>
      <a href="/">Legal</a>
      <a href="/">Do Not Sell or Share My Personal Information</a>
    </div>
    
    {/* Rating */}
    <div className="footer__rating">
      <div className="footer__rating-badge">RP</div>
      <p className="footer__rating-text">
        May contain content inappropriate for children.<br />
        Visit <a href="/">esrb.org</a> for rating information.
      </p>
    </div>
    
  </div>
</section>
    
      
      {expandedImage && (
        <div ref={vcLightboxRef} className="vc-lightbox" onClick={closeImageLightbox}>
          <button className="vc-lightbox__close" onClick={closeImageLightbox}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <img
            ref={vcLightboxImgRef}
            src={expandedImage}
            alt="Expanded view"
            className="vc-lightbox__img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      


  
    </div>
  );
};

export default Story;


// ////////////
// // ///


