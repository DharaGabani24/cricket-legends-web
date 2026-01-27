
//D 11 with the circular glow effect  //

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
  const whiteFadeRef = useRef(null);
  const releaseInfoRef = useRef(null);
  const maskedRectRef = useRef(null);
  const filledTextGroupRef = useRef(null);

  // Circular Radial Wipe - bright and glow layers
  const textBrightRef = useRef(null);
  const textGlowRef = useRef(null);
  const platformsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const hero = heroRef.current;
      const textGroup = textGroupRef.current;
      const scrollIndicator = scrollIndicatorRef.current;
      const overlay = overlayRef.current;
      const whiteFade = whiteFadeRef.current;
      const releaseInfo = releaseInfoRef.current;
      const maskedRect = maskedRectRef.current;
      const filledTextGroup = filledTextGroupRef.current;
      const imageWrapper = imageWrapperRef.current;

      // Circular radial wipe layers
      const textBright = textBrightRef.current;
      const textGlow = textGlowRef.current;
      const platforms = platformsRef.current;

      // Initial states for main animation
      gsap.set(textGroup, { 
        scale: 20, 
        opacity: 0,
        y: 0
      });
      
      gsap.set(overlay, { opacity: 0 });
      gsap.set(whiteFade, { opacity: 0 });
      gsap.set(releaseInfo, { opacity: 0, visibility: 'hidden' });
      gsap.set(filledTextGroup, { opacity: 0 });
      gsap.set(maskedRect, { opacity: 1 });
      gsap.set(imageWrapper, { filter: 'brightness(1)' });
      gsap.set(platforms, { opacity: 0 });

      // ============================================
      // CIRCULAR RADIAL WIPE - Mask update function
      // ============================================
      function updateRadialMasks(progress) {
        // Progress 0-1 within the release info phase
        // 0 = circle at bottom, nothing revealed
        // 0.5 = circle at center, fully revealed
        // 1 = circle at top, nothing revealed (exit)
        
        let circleY, circleSize;
        
        if (progress <= 0.45) {
          // ENTRY: Circle moves from bottom (150%) to center (50%)
          const p = progress / 0.45;
          circleY = 150 - (p * 100);  // 150% → 50%
          circleSize = p * 200;        // 0% → 200%
        } 
        else if (progress <= 0.55) {
          // HOLD: Fully revealed
          circleY = 50;
          circleSize = 200;
        }
        else {
          // EXIT: Circle moves up and shrinks
          const p = (progress - 0.55) / 0.45;
          circleY = 50 - (p * 100);    // 50% → -50%
          circleSize = 200 - (p * 200); // 200% → 0%
        }

        // Bright layer mask (filled circle)
        const brightMask = `radial-gradient(
          circle at 50% ${circleY}%,
          black 0%,
          black ${circleSize}%,
          transparent ${circleSize}%
        )`;
        
        // Glow layer mask (ring at edge)
        const glowInner = Math.max(0, circleSize - 40);
        const glowOuter = circleSize + 20;
        const glowMask = `radial-gradient(
          circle at 50% ${circleY}%,
          transparent 0%,
          transparent ${glowInner}%,
          black ${circleSize}%,
          transparent ${glowOuter}%
        )`;

        if (textBright) {
          textBright.style.webkitMaskImage = brightMask;
          textBright.style.maskImage = brightMask;
        }
        
        if (textGlow) {
          textGlow.style.webkitMaskImage = glowMask;
          textGlow.style.maskImage = glowMask;
        }
      }

      // Initialize masks (hidden)
      updateRadialMasks(0);

      // Master timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: '100% top',
          scrub: 1.5,
          pin: false,
        }
      });

      // ============================================
      // PHASE 1: CRICKET LEGENDS - Text appears zoomed in (0% - 3%)
      // ============================================
      tl.to(textGroup, {
        opacity: 1,
        scale: 15,
        duration: 0.03,
        ease: 'none'
      }, 0);

      // ============================================
      // PHASE 2: Zoom out (3% - 12%)
      // ============================================
      tl.to(textGroup, {
        scale: 6,
        duration: 0.09,
        ease: 'none'
      }, 0.03);

      // ============================================
      // PHASE 3: Continue zoom out (12% - 20%)
      // ============================================
      tl.to(textGroup, {
        scale: 2.5,
        duration: 0.08,
        ease: 'none'
      }, 0.12);

      // ============================================
      // PHASE 4: Text shrinks more (20% - 25%)
      // ============================================
      tl.to(textGroup, {
        scale: 1.3,
        duration: 0.05,
        ease: 'none'
      }, 0.20);

      // ============================================
      // PHASE 5: White fade effect (6% - 25%)
      // ============================================
      tl.to(whiteFade, {
        opacity: 1,
        duration: 0.19,
        ease: 'power2.in'
      }, 0.06);

      // ============================================
      // PHASE 6: Swap masked to filled text (25%)
      // ============================================
      tl.to(maskedRect, {
        opacity: 0,
        duration: 0.01,
        ease: 'none'
      }, 0.25);
      
      tl.to(filledTextGroup, {
        opacity: 1,
        duration: 0.01,
        ease: 'none'
      }, 0.25);

      // ============================================
      // PHASE 7: Dark overlay fades in (25% - 30%)
      // ============================================
      tl.to(overlay, {
        opacity: 1,
        duration: 0.05,
        ease: 'none'
      }, 0.25);

      tl.to(textGroup, {
        scale: 1.0,
        duration: 0.05,
        ease: 'none'
      }, 0.25);

      tl.to(whiteFade, {
        opacity: 0,
        duration: 0.05,
        ease: 'none'
      }, 0.25);

      // ============================================
      // PHASE 8: Text shrinks and moves up (30% - 38%)
      // ============================================
      tl.to(textGroup, {
        scale: 0.55,
        y: -50,
        duration: 0.08,
        ease: 'none'
      }, 0.30);

      // ============================================
      // PHASE 9: Text to final position (38% - 42%)
      // ============================================
      tl.to(textGroup, {
        scale: 0.30,
        y: -280,
        duration: 0.04,
        ease: 'none'
      }, 0.38);

      // ============================================
      // PHASE 10: RELEASE INFO appears
      // ============================================
      tl.set(releaseInfo, { visibility: 'visible' }, 0.42);
      tl.to(releaseInfo, { opacity: 1, duration: 0.01, ease: 'none' }, 0.42);

      // ============================================
      // PHASE 11: CIRCULAR RADIAL WIPE (42% - 92%)
      // The circle moves from bottom to top revealing text
      // ============================================
      
      // Create a separate ScrollTrigger for the radial wipe
      // that maps scroll progress to mask animation
      ScrollTrigger.create({
        trigger: hero,
        start: 'top top',
        end: '100% top',
        scrub: 0.5,
        onUpdate: (self) => {
          const scrollProgress = self.progress;
          
          // Map scroll 42%-92% to radial wipe 0-1
          if (scrollProgress >= 0.42 && scrollProgress <= 0.92) {
            const wipeProgress = (scrollProgress - 0.42) / 0.50; // 0 to 1
            updateRadialMasks(wipeProgress);
            
            // Platforms visibility
            if (wipeProgress > 0.35 && wipeProgress < 0.65) {
              gsap.to(platforms, { opacity: 1, duration: 0.2, overwrite: true });
            } else {
              gsap.to(platforms, { opacity: 0, duration: 0.2, overwrite: true });
            }
          } else if (scrollProgress < 0.42) {
            updateRadialMasks(0);
            gsap.set(platforms, { opacity: 0 });
          } else {
            updateRadialMasks(1);
            gsap.set(platforms, { opacity: 0 });
          }
        }
      });

      // ============================================
      // PHASE 12: CRICKET LEGENDS exits (93% - 98%)
      // ============================================
      tl.to(textGroup, {
        y: -400,
        opacity: 0,
        duration: 0.05,
        ease: 'none'
      }, 0.93);

      // Hide release info
      tl.to(releaseInfo, {
        opacity: 0,
        duration: 0.03,
        ease: 'none'
      }, 0.92);

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
        
        {/* Background image */}
        <div ref={imageWrapperRef} className="hero__image">
          <img 
            ref={imageRef} 
            src={process.env.PUBLIC_URL + '/img/cric4.webp'} 
            alt="Cricket Stadium" 
          />
        </div>

        {/* White fade */}
        <div ref={whiteFadeRef} className="hero__white-fade"></div>

        {/* Dark overlay */}
        <div ref={overlayRef} className="hero__overlay"></div>

        {/* SVG mask text */}
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
            
            <g 
              ref={textGroupRef} 
              style={{ transformOrigin: '960px 540px' }}
            >
              <rect 
                ref={maskedRectRef}
                width="1920" 
                height="1080" 
                fill="#0a0a0a" 
                mask="url(#textMask)"
              />
              
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

        {/* ============================================
            RELEASE INFO - CIRCULAR RADIAL WIPE
            3 layers:
            - dim (always visible, dark base)
            - bright (revealed by circular mask)
            - glow (warm edge at circle boundary)
            ============================================ */}
        <div ref={releaseInfoRef} className="hero__release-info">
          
          {/* DIM LAYER (base - always visible) */}
          <div className="hero__text-dim">
            <div className="hero__coming">COMING</div>
            <div className="hero__date">NOVEMBER 19</div>
            <div className="hero__year">2026</div>
          </div>

          {/* BRIGHT LAYER (revealed by circular mask) */}
          <div ref={textBrightRef} className="hero__text-bright">
            <div className="hero__coming">COMING</div>
            <div className="hero__date">NOVEMBER 19</div>
            <div className="hero__year">2026</div>
          </div>

          {/* GLOW LAYER (warm edge of circle) */}
          <div ref={textGlowRef} className="hero__text-glow">
            <div className="hero__coming">COMING</div>
            <div className="hero__date">NOVEMBER 19</div>
            <div className="hero__year">2026</div>
          </div>

          {/* Platforms */}
          <div ref={platformsRef} className="hero__platforms">
            <span className="hero__platform">PS5</span>
            <span className="hero__platform-divider">|</span>
            <span className="hero__platform">XBOX SERIES X|S</span>
            <span className="hero__platform-divider">|</span>
            <span className="hero__platform">PC</span>
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