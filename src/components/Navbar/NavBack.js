// Navbar — Design 4 Stacked Cards///
import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Navbar2.css';

const NAV_SECTIONS = [
  { id: 'home',       label: 'Home',             index: '01', desc: 'The Beginning' },
  { id: 'story',      label: 'Streetz',          index: '02', desc: 'Street Cricket' },
  { id: 'ranked',     label: 'Ranked',           index: '03', desc: 'Tactical Play' },
  { id: 'the-pitch',  label: 'The Pitch',        index: '04', desc: 'Full ODI' },
  { id: 'leonida',    label: 'Gods of Cricket',  index: '05', desc: 'The Journey' },
  { id: 'pro-teams',  label: 'Pro Teams',        index: '06', desc: 'Clubs & Leagues' },
  { id: 'the-game',   label: 'The Game',         index: '07', desc: 'World of Cricket' },
  { id: 'the-arena',  label: 'The Arena',        index: '08', desc: 'Competitive' },
];

const CARD_COLORS = [
  { color: '#00FF88', glow: 'rgba(0,255,136,.08)' },
  { color: '#00d4ff', glow: 'rgba(0,212,255,.08)' },
  { color: '#8B5CF6', glow: 'rgba(139,92,246,.08)' },
  { color: '#FF6B35', glow: 'rgba(255,107,53,.08)' },
  { color: '#ff3d76', glow: 'rgba(255,61,118,.08)' },
  { color: '#ffd700', glow: 'rgba(255,215,0,.08)' },
  { color: '#00FF88', glow: 'rgba(0,255,136,.08)' },
  { color: '#00d4ff', glow: 'rgba(0,212,255,.08)' },
];

const EXPLORE_TABS = [
  { id: 'explore',   label: 'Explore',   icon: 'M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM16.24 7.76l-5.74 2.5-2.5 5.74 5.74-2.5z' },
  { id: 'images',    label: 'Images',    icon: 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.5 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM21 19l-5-7-4 5-3-3-4 5' },
  { id: 'trailers',  label: 'Trailers',  icon: 'M5 3l14 9-14 9V3z' },
  { id: 'downloads', label: 'Downloads', icon: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3' },
];

const TRAILERS = [
  { id: 't1', title: 'Cricket 26 — Official Trailer', date: 'Nov 13, 2025', duration: '0:30',
    thumbnail: 'https://img.youtube.com/vi/eM_w6yMpZiM/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=eM_w6yMpZiM', isNew: true },
  { id: 't2', title: 'Real Cricket 26 — Official Trailer', date: 'March 2025', duration: '1:12',
    thumbnail: 'https://img.youtube.com/vi/twUqbrowu94/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=twUqbrowu94', isNew: false },
];

const IMAGES = [
  { id: 'i1', src: process.env.PUBLIC_URL + '/img/player2.webp', alt: 'Screenshot 1' },
  { id: 'i2', src: process.env.PUBLIC_URL + '/img/HighresScreenshot00009.webp', alt: 'Screenshot 2' },
  { id: 'i3', src: process.env.PUBLIC_URL + '/img/HighresScreenshot00008.webp', alt: 'Screenshot 3' },
  { id: 'i4', src: process.env.PUBLIC_URL + '/img/HighresScreenshot00005.webp', alt: 'Screenshot 4' },
  { id: 'i5', src: process.env.PUBLIC_URL + '/img/HighresScreenshot00006.webp', alt: 'Screenshot 5' },
  { id: 'i6', src: process.env.PUBLIC_URL + '/img/player4.webp', alt: 'Screenshot 6' },
  { id: 'i7', src: process.env.PUBLIC_URL + '/img/HighresScreenshot00010.webp', alt: 'Screenshot 7' },
  { id: 'i8', src: process.env.PUBLIC_URL + '/img/HighresScreenshot00013.webp', alt: 'Screenshot 8' },

];

const Navbar2 = ({ visible = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeTab, setActiveTab] = useState('explore');
  const cursorRef = useRef(null);

  const [lightboxImg, setLightboxImg] = useState(null);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      if (next) setActiveTab('explore');
      return next;
    });
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setActiveTab('explore');
    document.body.style.overflow = '';
  }, []);

  const scrollToSection = useCallback((id) => {
    closeMenu();
    setTimeout(() => {
      if (id === 'home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 250);
  }, [closeMenu]);

  // Scroll spy
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          let cur = 'home';
          NAV_SECTIONS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) cur = id;
          });
          setActiveSection(cur);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && isOpen) closeMenu(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, closeMenu]);

  // Cursor glow
  useEffect(() => {
    if (!isOpen) return;
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.setProperty('--cx', `${e.clientX}px`);
        cursorRef.current.style.setProperty('--cy', `${e.clientY}px`);
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [isOpen]);

  const renderContent = () => {
    switch (activeTab) {
      case 'explore':
        return (
          <div className="nm__cards">
            {NAV_SECTIONS.map((s, i) => (
              <a key={s.id} href={`#${s.id}`}
                className={`nm__card${activeSection === s.id ? ' nm__card--active' : ''}`}
                style={{
                  '--i': i,
                  '--card-color': CARD_COLORS[i].color,
                  '--card-glow': CARD_COLORS[i].glow,
                }}
                onClick={(e) => { e.preventDefault(); scrollToSection(s.id); }}
              >
                <span className="nm__card-idx">
                  {s.index}
                  <span className="nm__card-idx-line" />
                </span>
                <div className="nm__card-label">{s.label}</div>
                <div className="nm__card-desc">{s.desc}</div>
                <span className="nm__card-arrow">→</span>
              </a>
            ))}
          </div>
        );
      case 'trailers':
        return (
          <div className="nm__trailers-grid">
            {TRAILERS.map((t, i) => (
              <a key={t.id} href={t.url} target="_blank" rel="noopener noreferrer"
                className="nm__trailer" style={{ '--i': i }}>
                <div className="nm__trailer-thumb">
                  <img src={t.thumbnail} alt={t.title} />
                  <div className="nm__trailer-play">▶</div>
                  <span className="nm__trailer-dur">{t.duration}</span>
                  {t.isNew && <span className="nm__trailer-badge">NEW</span>}
                </div>
                <div className="nm__trailer-info">
                  <span className="nm__trailer-title">{t.title}</span>
                  <span className="nm__trailer-date">{t.date}</span>
                </div>
              </a>
            ))}
          </div>
        );
    //   case 'images':
    //     return (
    //       <div className="nm__images-grid">
    //         {IMAGES.map((img, i) => (
    //           <div key={img.id} className="nm__img-card" style={{ '--i': i }} >
    //             <img src={img.src} alt={img.alt} />
    //             <div className="nm__img-overlay">
    //               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    //                 <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
    //                 <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
    //               </svg>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     );
///
//     case 'images':
//   const IMG_META = [
//     { cat: 'Street', title: 'The Players' },
//     { cat: 'Ranked', title: 'Competitive Arena Mode' },
//     { cat: 'Pro Teams', title: 'Club Leagues' },
//     { cat: 'The Game', title: 'Full ODI' },
    
//   ];
//   return (
//     <div className="nm__images-grid">
//       {IMAGES.map((img, i) => (
//         <div key={img.id} className="nm__img-card" style={{ '--i': i }}>
//           <img src={img.src} alt={img.alt} />
//           <div className="nm__img-overlay">
//             <span className="nm__img-cat">{IMG_META[i].cat}</span>
//             <span className="nm__img-title">{IMG_META[i].title}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
  
case 'images':
  const IMG_META = [
    { cat: 'Street', title: 'Cricket Under Neon Lights' },
    { cat: 'Ranked', title: 'Competitive Arena Mode' },
    { cat: 'Pro Teams', title: 'Club Leagues' },
    { cat: 'The Game', title: 'Full ODI' },
    { cat: 'The Pitch', title: 'Stadium Atmosphere' },
    { cat: 'Arena', title: 'Championship Finals' },
    { cat: 'Streetz', title: 'Backyard Cricket' },
    { cat: 'Gods', title: 'Legend Mode' },
  ];
  return (
    <div className="nm__images-grid">
      {IMAGES.map((img, i) => (
        <div key={img.id} className="nm__img-card" style={{ '--i': i }}
          onClick={() => setLightboxImg(img.src)}>
          <img src={img.src} alt={img.alt} />
          <div className="nm__img-overlay">
            <span className="nm__img-cat">{IMG_META[i]?.cat}</span>
            <span className="nm__img-title">{IMG_META[i]?.title}</span>
          </div>
        </div>
      ))}
    </div>
  );

      case 'downloads':
        return (
          <div className="nm__downloads">
            {/* <div className="nm__dl-glyph">↓</div>
            <h3 className="nm__dl-title">Downloads</h3>
            <p className="nm__dl-sub">Wallpapers, screenshots & more — coming soon</p> */}
            <div className="nm__dl-glyph">↓</div>
                <h3 className="nm__dl-title">Downloads</h3>
                <p className="nm__dl-sub">Wallpapers, screenshots & more — coming soon</p>
                <button className="nm__dl-btn">Notify Me</button>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none', transition: 'opacity 0.5s ease' }}>
      {/* ── Top Bar ── */}
      <header className={`nm__bar${isOpen ? ' nm__bar--open' : ''}`}>
        <a href="#home" className={`nm__logo${isOpen ? ' nm__logo--hidden' : ''}`}
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          <img src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'} alt="GOC" className="nm__logo-img" />
        </a>
        <button className={`nm__burger${isOpen ? ' nm__burger--open' : ''}`} onClick={toggleMenu} aria-label="Menu">
          <span /><span /><span />
        </button>
      </header>

      {/* ── Full-Screen Overlay ── */}
      <div className={`nm__overlay${isOpen ? ' nm__overlay--open' : ''}`}>
        <div ref={cursorRef} className="nm__cursor" />
        <div className="nm__noise" />

        {/* Header — brand + tabs */}
        <div className="nm__ov-header">
          <div className="nm__ov-brand">
            <img src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'} alt="GOC" className="nm__ov-brand-logo" />
            <div className="nm__ov-brand-info">
              <span className="nm__ov-brand-name">Gods of Cricket</span>
              <span className="nm__ov-brand-sub">Three Worlds · One Legacy</span>
            </div>
          </div>
          <div className="nm__ov-tabs">
            {EXPLORE_TABS.map((tab) => (
              <button key={tab.id}
                className={`nm__ov-tab${activeTab === tab.id ? ' nm__ov-tab--active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <svg className="nm__ov-tab-ico" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={tab.icon} />
                </svg>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content area */}
        <div className="nm__ov-content" key={activeTab}>
          {renderContent()}

        {/* Footer */}
        <div className="nm__ov-footer">
          <div className="nm__ov-footer-release">
            <span className="nm__ov-footer-lbl">Release</span>
            <span className="nm__ov-footer-val">February, 2026</span>
          </div>
          <div className="nm__ov-footer-platforms">
            <span className="nm__chip">
              <img src={process.env.PUBLIC_URL + '/img/platforms/playstation.svg'} alt="" className="nm__chip-ico" />PS5
            </span>
            <span className="nm__chip">
              <img src={process.env.PUBLIC_URL + '/img/platforms/xbox.svg'} alt="" className="nm__chip-ico" />Xbox
            </span>
            <span className="nm__chip">
              <img src={process.env.PUBLIC_URL + '/img/platforms/steam.svg'} alt="" className="nm__chip-ico" />PC
            </span>
          </div>
        </div>
        </div>

      </div>
      {lightboxImg && (
  <div className="nm__lightbox" onClick={() => setLightboxImg(null)}>
    <img className="nm__lightbox-img" src={lightboxImg} alt="Preview"
      onClick={(e) => e.stopPropagation()} />
    <button className="nm__lightbox-close" onClick={() => setLightboxImg(null)}>✕</button>
  </div>
)}
    </div>
  );
};

export default Navbar2;


// /* =============================================
//    NAVBAR — Design 4: Stacked Cards
//    ============================================= */

//    .nm__bar,
//    .nm__overlay {
//      --nm-black: #060608;
//      --nm-white: #ffffff;
//      --nm-green: #00FF88;
//      --nm-cyan: #00d4ff;
//      --nm-orange: #FF6B35;
//      --nm-purple: #8B5CF6;
//      --nm-gray: rgba(255,255,255,0.55);
//      --nm-gray-dim: rgba(255,255,255,0.25);
//      --nm-font-display: 'Bebas Neue', 'Impact', sans-serif;
//      --nm-font-sub: 'Barlow Condensed', sans-serif;
//      --nm-font-body: 'Rajdhani', sans-serif;
//      --nm-ease: cubic-bezier(0.22, 1, 0.36, 1);
//    }
   
//    /* =============================================
//       TOP BAR
//       ============================================= */
   
//    .nm__bar {
//      position: fixed;
//      top: 0; left: 0; right: 0;
//      z-index: 10000;
//      display: flex;
//      align-items: center;
//      justify-content: space-between;
//      padding: 0.9rem 2rem;
//    }
   
//    /* Logo */
//    .nm__logo {
//      position: relative;
//      z-index: 10001;
//      display: flex;
//      align-items: center;
//      text-decoration: none;
//      transition: opacity 0.4s ease, transform 0.4s var(--nm-ease);
//    }
   
//    .nm__logo--hidden {
//      opacity: 0 !important;
//      pointer-events: none;
//      transform: translateX(-10px);
//    }
   
//    .nm__logo-img {
//      height: 32px;
//      width: auto;
//      filter: brightness(1.1);
//      transition: filter 0.3s ease, transform 0.3s var(--nm-ease);
//    }
   
//    .nm__logo:hover .nm__logo-img {
//      filter: brightness(1.3) drop-shadow(0 0 8px rgba(0,255,136,0.3));
//      transform: scale(1.05);
//    }
   
//    /* Burger */
//    .nm__burger {
//      position: relative;
//      z-index: 10001;
//      width: 34px; height: 24px;
//      background: none; border: none;
//      cursor: pointer;
//      display: flex; flex-direction: column;
//      justify-content: center; align-items: flex-end;
//      gap: 6px; padding: 0;
//    }
   
//    .nm__burger span {
//      display: block; height: 2px;
//      background: var(--nm-white);
//      border-radius: 2px;
//      transition: all 0.5s var(--nm-ease);
//    }
   
//    .nm__burger span:nth-child(1) { width: 26px; }
//    .nm__burger span:nth-child(2) { width: 18px; }
//    .nm__burger span:nth-child(3) { width: 22px; }
   
//    .nm__burger:hover span { background: var(--nm-green); width: 26px; }
   
//    .nm__burger--open span:nth-child(1) { width: 26px; transform: translateY(8px) rotate(45deg); }
//    .nm__burger--open span:nth-child(2) { opacity: 0; width: 0; }
//    .nm__burger--open span:nth-child(3) { width: 26px; transform: translateY(-8px) rotate(-45deg); }
//    .nm__burger--open span { background: var(--nm-orange); }
   
//    /* =============================================
//       OVERLAY
//       ============================================= */
   
//    .nm__overlay {
//      position: fixed; inset: 0;
//      z-index: 9999;
//      pointer-events: none;
//      visibility: hidden;
//      opacity: 0;
//      background: #060608;
//      transition: all 0.5s var(--nm-ease);
//      perspective: 1000px;
//      overflow: hidden;
//    }
   
//    .nm__overlay--open {
//      pointer-events: auto;
//      visibility: visible;
//      opacity: 1;
//    }
   
//    /* Noise texture */
//    .nm__noise {
//      position: absolute; inset: 0;
//      pointer-events: none; opacity: 0.03;
//      background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.04'/%3E%3C/svg%3E");
//      background-size: 200px;
//    }
   
//    /* Cursor glow */
//    .nm__cursor {
//      position: fixed;
//      width: 400px; height: 400px;
//      border-radius: 50%;
//      background: radial-gradient(circle, rgba(0,255,136,0.05), transparent 70%);
//      pointer-events: none; z-index: 1;
//      transform: translate(-50%, -50%);
//      left: var(--cx, -200px);
//      top: var(--cy, -200px);
//      opacity: 0;
//      transition: opacity 0.4s ease;
//    }
   
//    .nm__overlay--open .nm__cursor { opacity: 1; }
   
//    /* =============================================
//       OVERLAY HEADER — Brand + Tabs
//       ============================================= */
   
//    .nm__ov-header {
//      position: absolute;
//      top: 0; left: 0; right: 0;
//      z-index: 10;
//      display: flex;
//      justify-content: space-between;
//      align-items: center;
//      padding: 4.5rem 4vw 0;
//      opacity: 0;
//      transform: translateY(-15px);
//      transition: all 0.4s ease 0.3s;
//    }
   
//    .nm__overlay--open .nm__ov-header {
//      opacity: 1;
//      transform: translateY(0);
//    }
   
//    /* Brand */
//    .nm__ov-brand {
//      display: flex;
//      align-items: center;
//      gap: 14px;
//    }
   
//    .nm__ov-brand-logo {
//      width: 40px;
//      height: auto;
//      filter: brightness(1.1);
//    }
   
//    .nm__ov-brand-info {
//      display: flex;
//      flex-direction: column;
//    }
   
//    .nm__ov-brand-name {
//      font-family: var(--nm-font-display);
//      font-size: 1.35rem;
//      letter-spacing: 0.08em;
//      text-transform: uppercase;
//      color: var(--nm-white);
//      line-height: 1;
//    }
   
//    .nm__ov-brand-sub {
//      font-family: var(--nm-font-sub);
//      font-size: 0.65rem;
//      letter-spacing: 0.25em;
//      text-transform: uppercase;
//      color: var(--nm-gray-dim);
//      margin-top: 4px;
//    }
   
//    /* Tabs */
//    .nm__ov-tabs {
//      display: flex;
//      gap: 4px;
//    }
   
//    .nm__ov-tab {
//      display: flex;
//      align-items: center;
//      gap: 7px;
//      padding: 8px 16px;
//      border: 1px solid rgba(255,255,255,0.06);
//      border-radius: 6px;
//      background: rgba(255,255,255,0.02);
//      font-family: var(--nm-font-sub);
//      font-size: 0.75rem;
//      font-weight: 500;
//      letter-spacing: 0.1em;
//      text-transform: uppercase;
//      color: rgba(255,255,255,0.35);
//      cursor: pointer;
//      transition: all 0.3s var(--nm-ease);
//    }
   
//    .nm__ov-tab-ico {
//      width: 14px; height: 14px;
//      flex-shrink: 0;
//      transition: stroke 0.3s ease;
//    }
   
//    .nm__ov-tab:hover {
//      background: rgba(255,255,255,0.05);
//      color: var(--nm-white);
//      border-color: rgba(255,255,255,0.1);
//    }
   
//    .nm__ov-tab--active {
//      border-color: var(--nm-green);
//      color: var(--nm-green);
//      background: rgba(0,255,136,0.06);
//      box-shadow: 0 0 20px rgba(0,255,136,0.06);
//    }
   
//    .nm__ov-tab--active .nm__ov-tab-ico {
//      stroke: var(--nm-green);
//    }
   
//    /* =============================================
//       CONTENT AREA
//       ============================================= */
   
//    .nm__ov-content {
//      position: absolute;
//      inset: 0;
//      z-index: 5;
//      display: flex;
//      align-items: center;
//      justify-content: center;
//      padding: 7rem 2rem 5rem;
//      animation: nm-contentIn 0.45s var(--nm-ease) forwards;
//    }
   
//    @keyframes nm-contentIn {
//      from { opacity: 0; transform: translateY(10px); }
//      to { opacity: 1; transform: translateY(0); }
//    }
   
//    @keyframes nm-fadeUp {
//      to { opacity: 1; transform: translateY(0); }
//    }
   
//    /* =============================================
//       EXPLORE — 4×2 CARD GRID
//       ============================================= */
   
//    .nm__cards {
//      display: grid;
//      grid-template-columns: repeat(4, 1fr);
//      gap: 18px;
//      width: 88vw;
//      max-width: 1250px;
//    }
   
//    .nm__card {
//      position: relative;
//      padding: 1.5rem;
//      border-radius: 14px;
//      background: linear-gradient(145deg, rgba(255,255,255,0.025), rgba(255,255,255,0.008));
//      border: 1px solid rgba(255,255,255,0.04);
//      cursor: pointer;
//      overflow: hidden;
//      text-decoration: none;
//      color: inherit;
//      transform: translateY(80px) rotateX(8deg);
//      opacity: 0;
//      animation: nm-cardIn 0.55s var(--nm-ease) calc(0.15s + var(--i) * 0.05s) forwards;
//      transform-style: preserve-3d;
//      transition: transform 0.4s var(--nm-ease), border-color 0.3s ease, box-shadow 0.4s ease;
//    }
   
//    @keyframes nm-cardIn {
//      to {
//        transform: translateY(0) rotateX(0);
//        opacity: 1;
//      }
//    }
   
//    /* Color-coded top border */
//    .nm__card::before {
//      content: '';
//      position: absolute;
//      top: 0; left: 20%; right: 20%;
//      height: 2px;
//      border-radius: 0 0 2px 2px;
//      background: var(--card-color, var(--nm-green));
//      opacity: 0.5;
//      transition: all 0.3s ease;
//    }
   
//    /* Shimmer sweep */
//    .nm__card::after {
//      content: '';
//      position: absolute;
//      top: 0; left: -100%;
//      width: 60%; height: 100%;
//      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.02), transparent);
//      pointer-events: none;
//    }
   
//    /* Hover */
//    .nm__card:hover {
//      transform: translateY(-6px) scale(1.03);
//      border-color: var(--card-color, rgba(255,255,255,0.1));
//      box-shadow:
//        0 12px 40px rgba(0,0,0,0.4),
//        0 0 30px var(--card-glow, rgba(0,255,136,0.06));
//    }
   
//    .nm__card:hover::before {
//      left: 10%; right: 10%;
//      opacity: 1;
//      box-shadow: 0 0 12px var(--card-glow, rgba(0,255,136,0.3));
//    }
   
//    .nm__card:hover::after {
//      animation: nm-shimmer 0.7s ease forwards;
//    }
   
//    @keyframes nm-shimmer {
//      to { left: 150%; }
//    }
   
//    /* Active */
//    .nm__card--active {
//      border-color: var(--card-color);
//      background: linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015));
//    }
   
//    /* Index */
//    .nm__card-idx {
//      font-family: var(--nm-font-sub);
//      font-size: 0.55rem;
//      font-weight: 700;
//      letter-spacing: 0.25em;
//      color: var(--card-color, rgba(255,255,255,0.2));
//      margin-bottom: 0.8rem;
//      display: flex;
//      align-items: center;
//      gap: 8px;
//    }
   
//    .nm__card-idx-line {
//      flex: 1;
//      height: 1px;
//      background: linear-gradient(90deg, var(--card-color, rgba(255,255,255,0.1)), transparent);
//      opacity: 0.3;
//    }
   
//    /* Label */
//    .nm__card-label {
//      font-family: var(--nm-font-display);
//      font-size: clamp(1.3rem, 2.2vw, 2.2rem);
//      letter-spacing: 0.05em;
//      text-transform: uppercase;
//      color: rgba(255,255,255,0.6);
//      line-height: 1;
//      margin-bottom: 0.5rem;
//      transition: color 0.3s ease;
//    }
   
//    .nm__card:hover .nm__card-label {
//      color: var(--nm-white);
//    }
   
//    .nm__card--active .nm__card-label {
//      color: var(--card-color);
//    }
   
//    /* Desc */
//    .nm__card-desc {
//      font-family: var(--nm-font-body);
//      font-size: 0.75rem;
//      color: rgba(255,255,255,0.2);
//      transition: color 0.3s ease;
//    }
   
//    .nm__card:hover .nm__card-desc {
//      color: rgba(255,255,255,0.4);
//    }
   
//    /* Arrow */
//    .nm__card-arrow {
//      position: absolute;
//      bottom: 1.2rem; right: 1.2rem;
//      font-size: 1rem;
//      color: var(--card-color, var(--nm-green));
//      opacity: 0;
//      transform: translate(-8px, 8px);
//      transition: all 0.3s ease;
//    }
   
//    .nm__card:hover .nm__card-arrow {
//      opacity: 0.6;
//      transform: translate(0);
//    }
   
//    /* =============================================
//       TRAILERS
//       ============================================= */
   
//    .nm__trailers-grid {
//      display: flex;
//      flex-direction: column;
//      gap: 1.2rem;
//      width: 88vw;
//      max-width: 700px;
//    }
   
//    .nm__trailer {
//      display: flex;
//      gap: 1.2rem;
//      align-items: center;
//      text-decoration: none;
//      color: inherit;
//      border-radius: 12px;
//      padding: 0.8rem;
//      background: rgba(255,255,255,0.02);
//      border: 1px solid rgba(255,255,255,0.04);
//      transition: all 0.35s var(--nm-ease);
//      opacity: 0;
//      transform: translateY(20px);
//      animation: nm-fadeUp 0.5s var(--nm-ease) calc(0.1s + var(--i) * 0.1s) forwards;
//    }
   
//    .nm__trailer:hover {
//      background: rgba(0,255,136,0.03);
//      border-color: rgba(0,255,136,0.12);
//      transform: translateX(4px);
//    }
   
//    .nm__trailer-thumb {
//      position: relative;
//      width: 200px; min-width: 200px; height: 112px;
//      border-radius: 8px;
//      overflow: hidden;
//      flex-shrink: 0;
//    }
   
//    .nm__trailer-thumb img {
//      width: 100%; height: 100%;
//      object-fit: cover;
//      transition: transform 0.5s var(--nm-ease);
//    }
   
//    .nm__trailer:hover .nm__trailer-thumb img { transform: scale(1.06); }
   
//    .nm__trailer-play {
//      position: absolute; inset: 0;
//      display: flex; align-items: center; justify-content: center;
//      background: rgba(0,0,0,0.35);
//      color: var(--nm-white);
//      font-size: 1.6rem;
//      opacity: 0;
//      transition: opacity 0.3s ease;
//    }
   
//    .nm__trailer:hover .nm__trailer-play { opacity: 1; }
   
//    .nm__trailer-dur {
//      position: absolute;
//      bottom: 6px; left: 8px;
//      padding: 2px 8px;
//      border-radius: 4px;
//      background: rgba(0,0,0,0.75);
//      font-family: var(--nm-font-body);
//      font-size: 0.7rem;
//      color: var(--nm-white);
//      font-weight: 600;
//    }
   
//    .nm__trailer-badge {
//      position: absolute;
//      top: 8px; right: 8px;
//      padding: 2px 8px;
//      border-radius: 4px;
//      background: var(--nm-green);
//      font-family: var(--nm-font-sub);
//      font-size: 0.6rem;
//      font-weight: 700;
//      letter-spacing: 0.1em;
//      color: var(--nm-black);
//      text-transform: uppercase;
//    }
   
//    .nm__trailer-info {
//      display: flex;
//      flex-direction: column;
//      gap: 6px;
//      min-width: 0;
//    }
   
//    .nm__trailer-title {
//      font-family: var(--nm-font-display);
//      font-size: 1.3rem;
//      letter-spacing: 0.04em;
//      color: var(--nm-white);
//      line-height: 1.1;
//      transition: color 0.3s ease;
//    }
   
//    .nm__trailer:hover .nm__trailer-title { color: var(--nm-green); }
   
//    .nm__trailer-date {
//      font-family: var(--nm-font-body);
//      font-size: 0.75rem;
//      color: var(--nm-gray-dim);
//    }
   
//    /* =============================================
//       IMAGES — 2×2 Grid///////
//       ============================================= */
// /*    
//    .nm__images-grid {
//      display: grid;
//      grid-template-columns: 1fr 1fr;
//      gap: 12px;
//      width: 88vw;
//      max-width: 800px;
//    }
   
//    .nm__img-card {
//      position: relative;
//      border-radius: 12px;
//      overflow: hidden;
//      cursor: pointer;
//      opacity: 0;
//      transform: scale(0.92);
//      animation: nm-imgPop 0.5s cubic-bezier(0.34,1.56,0.64,1) calc(0.1s + var(--i) * 0.08s) forwards;
//      border: 1px solid rgba(255,255,255,0.04);
//      transition: all 0.35s var(--nm-ease);
//    }
   
//    @keyframes nm-imgPop {
//      to { opacity: 1; transform: scale(1); }
//    }
   
//    .nm__img-card:hover {
//      border-color: rgba(0,255,136,0.15);
//      box-shadow: 0 0 25px rgba(0,255,136,0.04);
//    }
   
//    .nm__img-card img {
//      width: 100%; height: 200px;
//      object-fit: cover;
//      display: block;
//      transition: transform 0.5s var(--nm-ease);
//    }
   
//    .nm__img-card:hover img { transform: scale(1.08); }
   
//    .nm__img-overlay {
//      position: absolute; inset: 0;
//      display: flex; align-items: center; justify-content: center;
//      background: rgba(0,0,0,0.4);
//      opacity: 0;
//      transition: opacity 0.3s ease;
//    }
   
//    .nm__img-overlay svg {
//      width: 28px; height: 28px;
//      color: var(--nm-white);
//    }
   
//    .nm__img-card:hover .nm__img-overlay { opacity: 1; }
//  */



// /* =============================================
//    IMAGES — Magazine Editorial Grid
//    ============================================= */

//    /* .nm__images-grid {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     grid-template-rows: 260px 180px;
//     gap: 6px;
//     max-width: 900px;
//     margin: 0 auto;
//   } */

//   /* .nm__images-grid {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     grid-template-rows: 260px 180px 180px 260px;
//     gap: 6px;
//     max-width: 900px;
//     margin: 0 auto;
//   } */
//   .nm__images-grid {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     /* grid-template-rows: 260px 180px 180px 260px; */
//     /* grid-template-rows: 320px 250px 230px 320px; */
//     grid-template-rows: 300px 220px 220px 300px;
//     gap: 9px;
//     max-width: 1200px;
//     margin: 0 auto;
//     max-height: 70vh;
//     overflow-y: auto;
//     overflow-x: hdden;
//     padding-right: 4px;
//   }


//   /* custom scrol bar */

// .nm__images-grid::-webkit-scrollbar { width: 3px; }
// .nm__images-grid::-webkit-scrollbar-track { background: transparent; }
// .nm__images-grid::-webkit-scrollbar-thumb { background: rgba(0,255,136,0.2); border-radius: 4px; }
  
//   .nm__img-card {
//     position: relative;
//     overflow: hidden;
//     cursor: pointer;
//     opacity: 0;
//     transform: scale(0.95);
//     animation: nm-imgPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) calc(0.1s + var(--i) * 0.08s) forwards;
//     transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
//   }
  
//   @keyframes nm-imgPop {
//     to { opacity: 1; transform: scale(1); }
//   }
// /*   
//   .nm__img-card:nth-child(1) {
//     grid-column: 1 / 2;
//     grid-row: 1 / 3;
//     border-radius: 12px 0 0 12px;
//   }
  
//   .nm__img-card:nth-child(2) {
//     grid-column: 2 / 4;
//     grid-row: 1 / 2;
//     border-radius: 0 12px 0 0;
//   }
  
//   .nm__img-card:nth-child(3) {
//     grid-column: 2 / 3;
//     grid-row: 2 / 3;
//     border-radius: 0;
//   }
  
//   .nm__img-card:nth-child(4) {
//     grid-column: 3 / 4;
//     grid-row: 2 / 3;
//     border-radius: 0 0 12px 0;
//   }
//    */

//    .nm__img-card:nth-child(1){grid-column:1/2;grid-row:1/3;border-radius:12px 0 0 0}
//    .nm__img-card:nth-child(2){grid-column:2/4;grid-row:1/2;border-radius:0 12px 0 0}
//    .nm__img-card:nth-child(3){grid-column:2/3;grid-row:2/3}
//    .nm__img-card:nth-child(4){grid-column:3/4;grid-row:2/3}
//    .nm__img-card:nth-child(5){grid-column:1/3;grid-row:3/4}
//    .nm__img-card:nth-child(6){grid-column:3/4;grid-row:3/5;border-radius:0 0 12px 0}
//    .nm__img-card:nth-child(7){grid-column:1/2;grid-row:4/5;border-radius:0 0 0 12px}
//    .nm__img-card:nth-child(8){grid-column:2/3;grid-row:4/5}


//   .nm__img-card img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     display: block;
//     transition: transform 0.5s var(--nm-ease);
//   }
  
//   .nm__img-card:hover img {
//     transform: scale(1.06);
//   }
  
//   /* Editorial overlay */
//   .nm__img-overlay {
//     position: absolute;
//     inset: 0;
//     background: linear-gradient(160deg, rgba(6, 6, 8, 0.75) 0%, transparent 60%);
//     padding: 18px;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;
//     transition: all 0.4s ease;
//     z-index: 2;
//   }
  
//   .nm__img-card:hover .nm__img-overlay {
//     background: linear-gradient(160deg, rgba(6, 6, 8, 0.85) 0%, rgba(6, 6, 8, 0.2) 70%);
//   }
  
//   .nm__img-cat {
//     font-family: var(--nm-font-sub);
//     font-size: 0.5rem;
//     font-weight: 700;
//     letter-spacing: 0.3em;
//     text-transform: uppercase;
//     margin-bottom: 6px;
//     transition: color 0.3s ease;
//   }
  
//   .nm__img-card:nth-child(1) .nm__img-cat { color: var(--nm-green); }
//   .nm__img-card:nth-child(2) .nm__img-cat { color: var(--nm-cyan); }
//   .nm__img-card:nth-child(3) .nm__img-cat { color: var(--nm-orange); }
//   .nm__img-card:nth-child(4) .nm__img-cat { color: var(--nm-purple); }
//   .nm__img-card:nth-child(5) .nm__img-cat { color: var(--nm-green); }
// .nm__img-card:nth-child(6) .nm__img-cat { color: var(--nm-cyan); }
// .nm__img-card:nth-child(7) .nm__img-cat { color: var(--nm-orange); }
// .nm__img-card:nth-child(8) .nm__img-cat { color: var(--nm-purple); }
  
  
//   .nm__img-title {
//     font-family: var(--nm-font-display);
//     font-size: 1.3rem;
//     letter-spacing: 0.04em;
//     color: white;
//     line-height: 1.1;
//     transition: transform 0.3s ease;
//   }
// /*   
//   .nm__img-card:nth-child(1) .nm__img-title {
//     font-size: 1.8rem;
//   } */
//   .nm__img-card:nth-child(1) .nm__img-title,
// .nm__img-card:nth-child(6) .nm__img-title {
//   font-size: 1.8rem;
// }
//   .nm__img-card:hover .nm__img-title {
//     transform: translateX(4px);
//   }
  
//   /* Color accent line at bottom */
//   .nm__img-card::before {
//     content: '';
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     height: 2px;
//     z-index: 3;
//     opacity: 0;
//     transition: all 0.3s ease;
//   }
  
//   .nm__img-card:nth-child(1)::before { background: var(--nm-green); }
//   .nm__img-card:nth-child(2)::before { background: var(--nm-cyan); }
//   .nm__img-card:nth-child(3)::before { background: var(--nm-orange); }
//   .nm__img-card:nth-child(4)::before { background: var(--nm-purple); }

//     .nm__img-card:nth-child(5)::before { background: var(--nm-green); }
//     .nm__img-card:nth-child(6)::before { background: var(--nm-cyan); }
//     .nm__img-card:nth-child(7)::before { background: var(--nm-orange); }
//     .nm__img-card:nth-child(8)::before { background: var(--nm-purple); }
  
//   .nm__img-card:hover::before {
//     opacity: 1;
//     box-shadow: 0 0 12px currentColor;
//   }
   
//    /* =============================================
//       DOWNLOADS — Pulse Icon Center ///
//       ============================================= */
   
//    .nm__downloads {
//      display: flex;
//      flex-direction: column;
//      align-items: center;
//      justify-content: center;
//      text-align: center;
//      gap: 1rem;
//      width: 88vw;
//      max-width: 500px;
//    }
   
//    .nm__dl-glyph {
//      position: relative;
//      width: 80px;
//      height: 80px;
//      border-radius: 50%;
//      background: linear-gradient(135deg, rgba(0,255,136,0.1), rgba(0,212,255,0.05));
//      border: 1px solid rgba(0,255,136,0.2);
//      display: flex;
//      align-items: center;
//      justify-content: center;
//      font-family: var(--nm-font-display);
//      font-size: 2.2rem;
//      color: var(--nm-green);
//      line-height: 1;
//    }
   
//    .nm__dl-glyph::before {
//      content: '';
//      position: absolute;
//      inset: -10px;
//      border-radius: 50%;
//      border: 1px solid rgba(0,255,136,0.1);
//      animation: nm-dlPulse 2s ease-in-out infinite;
//    }
   
//    .nm__dl-glyph::after {
//      content: '';
//      position: absolute;
//      inset: -20px;
//      border-radius: 50%;
//      border: 1px solid rgba(0,255,136,0.05);
//      animation: nm-dlPulse 2s ease-in-out infinite 0.3s;
//    }
   
//    @keyframes nm-dlPulse {
//      0%, 100% { transform: scale(1); opacity: 0.5; }
//      50% { transform: scale(1.15); opacity: 0.1; }
//    }
   
//    .nm__dl-title {
//      font-family: var(--nm-font-display);
//      font-size: 1.8rem;
//      letter-spacing: 0.08em;
//      text-transform: uppercase;
//      color: var(--nm-white);
//    }
   
//    .nm__dl-sub {
//      font-family: var(--nm-font-body);
//      font-size: 0.85rem;
//      color: rgba(255,255,255,0.3);
//      max-width: 300px;
//    }
   
//    .nm__dl-btn {
//      margin-top: 0.5rem;
//      padding: 11px 32px;
//      border-radius: 8px;
//      border: 1px solid rgba(0,255,136,0.2);
//      background: rgba(0,255,136,0.06);
//      font-family: var(--nm-font-sub);
//      font-size: 0.78rem;
//      font-weight: 600;
//      letter-spacing: 0.15em;
//      text-transform: uppercase;
//      color: var(--nm-green);
//      cursor: pointer;
//      transition: all 0.35s var(--nm-ease);
//    }
   
//    .nm__dl-btn:hover {
//      background: rgba(0,255,136,0.12);
//      border-color: rgba(0,255,136,0.4);
//      box-shadow: 0 0 25px rgba(0,255,136,0.08);
//      transform: translateY(-2px);
//    }
   
//    /* =============================================
//       FOOTER
//       ============================================= */
   
//    .nm__ov-footer {
//      position: absolute;
//      bottom: 2rem; left: 50%;
//      transform: translateX(-50%);
//      z-index: 10;
//      display: flex;
//      gap: 24px;
//      align-items: center;
//      opacity: 0;
//      transition: opacity 0.4s ease 0.6s;
//      white-space: nowrap;
//    }
   
//    .nm__overlay--open .nm__ov-footer { opacity: 1; }
   
//    .nm__ov-footer-lbl {
//      font-family: var(--nm-font-sub);
//      font-size: 0.5rem;
//      letter-spacing: 0.35em;
//      text-transform: uppercase;
//      color: rgba(255,255,255,0.15);
//    }
   
//    .nm__ov-footer-val {
//      font-family: var(--nm-font-display);
//      font-size: 0.95rem;
//      color: rgba(255,255,255,0.45);
//      margin-left: 6px;
//    }
   
//    .nm__ov-footer-platforms {
//      display: flex;
//      gap: 6px;
//    }
   
//    .nm__chip {
//      display: flex;
//      align-items: center;
//      gap: 5px;
//      padding: 4px 10px;
//      border: 1px solid rgba(255,255,255,0.06);
//      border-radius: 4px;
//      background: rgba(255,255,255,0.02);
//      font-family: var(--nm-font-sub);
//      font-size: 0.6rem;
//      font-weight: 500;
//      letter-spacing: 0.12em;
//      text-transform: uppercase;
//      color: rgba(255,255,255,0.35);
//      transition: all 0.3s ease;
//    }
   
//    .nm__chip:hover {
//      border-color: rgba(0,255,136,0.2);
//      color: var(--nm-white);
//    }
   
//    .nm__chip-ico {
//      width: 14px; height: 14px;
//      opacity: 0.7;
//      filter: brightness(0) invert(1);
//    }
   
//    /* =============================================
//       RESPONSIVE — Tablet (1200px)
//       ============================================= */
   
//    @media (max-width: 1200px) {
//      .nm__cards {
//        gap: 12px;
//      }
   
//      .nm__card {
//        padding: 1.2rem;
//      }
   
//      .nm__card-label {
//        font-size: clamp(1.2rem, 2vw, 1.8rem);
//      }
//    }
   
//    /* =============================================
//       RESPONSIVE — Small Tablet (1000px)
//       ============================================= */
   
//    @media (max-width: 1000px) {
//      .nm__cards {
//        grid-template-columns: repeat(2, 1fr);
//        gap: 10px;
//        width: 92vw;
//      }
   
//      .nm__ov-header {
//        flex-direction: column;
//        align-items: flex-start;
//        gap: 1rem;
//        padding: 4rem 1.5rem 0;
//      }
   
//      .nm__ov-content {
//        padding: 7rem 1.5rem 5rem;
//      }
   
//      .nm__trailers-grid {
//        width: 92vw;
//      }
   
//      /* .nm__images-grid {
//        width: 92vw;
//      }
//     */
    
//      .nm__trailer-thumb {
//        width: 160px;
//        min-width: 160px;
//        height: 90px;
//      }
   
//      .nm__trailer-title {
//        font-size: 1.1rem;
//      }
//    }
   
//    /* =============================================
//       RESPONSIVE — Large Phone / Small Tablet (768px)
//       ============================================= */
   
//    @media (max-width: 768px) {
//      .nm__bar {
//        padding: 0.8rem 1.2rem;
//      }
   
//      .nm__logo-img {
//        height: 28px;
//      }
   
//      .nm__ov-header {
//        padding: 3.5rem 1.2rem 0;
//        gap: 0.8rem;
//      }
   
//      .nm__ov-brand-logo {
//        width: 32px;
//      }
   
//      .nm__ov-brand-name {
//        font-size: 1.1rem;
//      }
   
//      .nm__ov-brand-sub {
//        font-size: 0.55rem;
//        letter-spacing: 0.15em;
//      }
   
//      .nm__ov-tabs {
//        gap: 3px;
//      }
   
//      .nm__ov-tab {
//        padding: 7px 12px;
//        font-size: 0.68rem;
//        gap: 5px;
//      }
   
//      .nm__ov-tab-ico {
//        width: 12px;
//        height: 12px;
//      }
   
//      .nm__ov-content {
//        padding: 6.5rem 1.2rem 4.5rem;
//      }
   
//      .nm__cards {
//        grid-template-columns: repeat(2, 1fr);
//        gap: 8px;
//        width: 94vw;
//      }
   
//      .nm__card {
//        padding: 1rem;
//      }
   
//      .nm__card-idx {
//        font-size: 0.5rem;
//        margin-bottom: 0.5rem;
//      }
   
//      .nm__card-label {
//        font-size: 1.3rem;
//        margin-bottom: 0.3rem;
//      }
   
//      .nm__card-desc {
//        font-size: 0.68rem;
//      }
   
//      .nm__card-arrow {
//        bottom: 0.8rem;
//        right: 0.8rem;
//        font-size: 0.85rem;
//      }
   
//      /* Trailers stack vertically */
//      .nm__trailer {
//        flex-direction: column;
//        align-items: stretch;
//        gap: 0.8rem;
//      }
   
//      .nm__trailer-thumb {
//        width: 100%;
//        min-width: 100%;
//        height: 180px;
//      }
   
//      .nm__trailer-title {
//        font-size: 1.2rem;
//      }
   
//      /* Images */
//      /* 
//      */
//      /* Downloads */
//      .nm__dl-glyph {
//        width: 70px;
//        height: 70px;
//        font-size: 1.8rem;
//      }
   
//      .nm__dl-title {
//        font-size: 1.5rem;
//      }
   
//      .nm__dl-sub {
//        font-size: 0.78rem;
//      }
   
//      /* Footer */
//      .nm__ov-footer {
//        bottom: 1.5rem;
//        gap: 16px;
//      }
   
//      .nm__ov-footer-val {
//        font-size: 0.85rem;
//      }
//    }
   
//    /* =============================================
//       RESPONSIVE — Phone (600px)
//       ============================================= */
   
//    @media (max-width: 600px) {
//      .nm__bar {
//        padding: 0.7rem 1rem;
//      }
   
//      .nm__logo-img {
//        height: 24px;
//      }
   
//      .nm__ov-header {
//        padding: 3rem 1rem 0;
//        gap: 0.6rem;
//      }
   
//      .nm__ov-brand-logo {
//        width: 28px;
//      }
   
//      .nm__ov-brand-name {
//        font-size: 1rem;
//      }
   
//      .nm__ov-brand-sub {
//        font-size: 0.5rem;
//        letter-spacing: 0.12em;
//      }
   
//      .nm__ov-tabs {
//        flex-wrap: wrap;
//        gap: 3px;
//      }
   
//      .nm__ov-tab {
//        padding: 6px 10px;
//        font-size: 0.62rem;
//        letter-spacing: 0.06em;
//      }
   
//      .nm__ov-tab-ico {
//        display: none;
//      }
   
//      .nm__ov-content {
//        padding: 5.5rem 0.8rem 4rem;
//      }
   
//      .nm__cards {
//        grid-template-columns: 1fr 1fr;
//        gap: 6px;
//        width: 96vw;
//      }
   
//      .nm__card {
//        padding: 0.8rem;
//        border-radius: 10px;
//      }
   
//      .nm__card-idx {
//        font-size: 0.45rem;
//        margin-bottom: 0.4rem;
//      }
   
//      .nm__card-label {
//        font-size: 1.1rem;
//        margin-bottom: 0.2rem;
//      }
   
//      .nm__card-desc {
//        display: none;
//      }
   
//      .nm__card-arrow {
//        display: none;
//      }
   
//      /* Trailers */
//      .nm__trailers-grid {
//        width: 96vw;
//        gap: 0.8rem;
//      }
   
//      .nm__trailer {
//        padding: 0.6rem;
//        border-radius: 10px;
//      }
   
//      .nm__trailer-thumb {
//        height: 150px;
//        border-radius: 6px;
//      }
   
//      .nm__trailer-title {
//        font-size: 1rem;
//      }
   
//      .nm__trailer-date {
//        font-size: 0.65rem;
//      }
//      .nm__images-grid {
//         grid-template-columns: 1fr 1fr;
//         grid-template-rows: repeat(4, 180px);
//       }
      
//       .nm__img-card:nth-child(1){ grid-column:1/2; grid-row:1/2; border-radius:12px 0 0 0 }
//       .nm__img-card:nth-child(2){ grid-column:2/3; grid-row:1/2; border-radius:0 12px 0 0 }
//       .nm__img-card:nth-child(3){ grid-column:1/2; grid-row:2/3; border-radius:0 }
//       .nm__img-card:nth-child(4){ grid-column:2/3; grid-row:2/3; border-radius:0 }
//       .nm__img-card:nth-child(5){ grid-column:1/2; grid-row:3/4; border-radius:0 }
//       .nm__img-card:nth-child(6){ grid-column:2/3; grid-row:3/4; border-radius:0 }
//       .nm__img-card:nth-child(7){ grid-column:1/2; grid-row:4/5; border-radius:0 0 0 12px }
//       .nm__img-card:nth-child(8){ grid-column:2/3; grid-row:4/5; border-radius:0 0 12px 0 }
      
//       .nm__img-card:nth-child(1) .nm__img-title,
//       .nm__img-card:nth-child(6) .nm__img-title { font-size: 1.3rem; }
//      /* .nm__images-grid {
//         grid-template-columns: 1fr 1fr;
//         grid-template-rows: 180px 180px;
//       } */


// /*       
//       .nm__img-card:nth-child(1) {
//         grid-column: 1 / 2;
//         grid-row: 1 / 2;
//         border-radius: 12px 0 0 0;
//       }
      
//       .nm__img-card:nth-child(2) {
//         grid-column: 2 / 3;
//         grid-row: 1 / 2;
//         border-radius: 0 12px 0 0;
//       }
      
//       .nm__img-card:nth-child(3) {
//         grid-column: 1 / 2;
//         grid-row: 2 / 3;
//         border-radius: 0 0 0 12px;
//       }
      
//       .nm__img-card:nth-child(4) {
//         grid-column: 2 / 3;
//         grid-row: 2 / 3;
//         border-radius: 0 0 12px 0;
//       }
      
//       .nm__img-card:nth-child(1) .nm__img-title {
//         font-size: 1.3rem;
//       } */



   
//      /* Images */
//      /* .nm__images-grid {
//        grid-template-columns: 1fr;
//        width: 96vw;
//        gap: 8px;
//      }
   
//      .nm__img-card img {
//        height: 180px;
//      } */
   
//      /* Downloads */
//      .nm__dl-glyph {
//        width: 60px;
//        height: 60px;
//        font-size: 1.6rem;
//      }
   
//      .nm__dl-glyph::before {
//        inset: -8px;
//      }
   
//      .nm__dl-glyph::after {
//        inset: -16px;
//      }
   
//      .nm__dl-title {
//        font-size: 1.3rem;
//      }
   
//      .nm__dl-sub {
//        font-size: 0.72rem;
//        max-width: 250px;
//      }
   
//      .nm__dl-btn {
//        padding: 9px 24px;
//        font-size: 0.7rem;
//      }
   
//      /* Footer */
//      .nm__ov-footer {
//        flex-direction: column;
//        gap: 8px;
//        bottom: 1rem;
//      }
   
//      .nm__ov-footer-platforms {
//        flex-wrap: wrap;
//        justify-content: center;
//      }
   
//      .nm__ov-footer-val {
//        font-size: 0.8rem;
//      }
   
//      .nm__chip {
//        font-size: 0.5rem;
//        padding: 3px 8px;
//      }
//    }
   
//    /* =============================================
//       RESPONSIVE — Small Phone (400px)
//       ============================================= */
   
//    @media (max-width: 400px) {
//      .nm__ov-header {
//        padding: 2.8rem 0.8rem 0;
//      }
   
//      .nm__ov-brand {
//        gap: 10px;
//      }
   
//      .nm__ov-brand-name {
//        font-size: 0.9rem;
//      }
   
//      .nm__ov-tab {
//        padding: 5px 8px;
//        font-size: 0.55rem;
//      }
   
//      .nm__ov-content {
//        padding: 5rem 0.6rem 3.5rem;
//      }
   
//      .nm__cards {
//        gap: 5px;
//        width: 98vw;
//      }
   
//      .nm__card {
//        padding: 0.7rem;
//      }
   
//      .nm__card-idx {
//        font-size: 0.4rem;
//        margin-bottom: 0.3rem;
//      }
   
//      .nm__card-label {
//        font-size: 0.95rem;
//      }
   
//      .nm__trailer-thumb {
//        height: 130px;
//      }
   
//      .nm__trailer-title {
//        font-size: 0.9rem;
//      }
   
//      /* .nm__img-card img {
//        height: 150px;
//      } */
   
//      .nm__dl-glyph {
//        width: 50px;
//        height: 50px;
//        font-size: 1.3rem;
//      }
   
//      .nm__dl-title {
//        font-size: 1.1rem;
//      }
   
//      .nm__dl-sub {
//        font-size: 0.65rem;
//      }
   
//      .nm__dl-btn {
//        padding: 8px 20px;
//        font-size: 0.62rem;
//      }
//    }


//    /* =============================================
//    IMAGE LIGHTBOX
//    ============================================= */
// .nm__lightbox {
//     position: fixed;
//     inset: 0;
//     z-index: 20000;
//     background: rgba(0, 0, 0, 0.92);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//     backdrop-filter: blur(10px);
//     -webkit-backdrop-filter: blur(10px);
//     animation: nm-lightboxIn 0.3s ease;
//   }
  
//   @keyframes nm-lightboxIn {
//     from { opacity: 0; }
//     to { opacity: 1; }
//   }
  
//   .nm__lightbox-img {
//     max-width: 90vw;
//     max-height: 90vh;
//     object-fit: contain;
//     cursor: default;
//     animation: nm-lightboxZoom 0.4s cubic-bezier(0.22, 1, 0.36, 1);
//     border-radius: 4px;
//   }
  
//   @keyframes nm-lightboxZoom {
//     from { opacity: 0; transform: scale(0.88); }
//     to { opacity: 1; transform: scale(1); }
//   }
  
//   .nm__lightbox-close {
//     position: fixed;
//     top: 28px;
//     right: 28px;
//     width: 48px;
//     height: 48px;
//     border-radius: 50%;
//     background: rgba(255, 255, 255, 0.1);
//     border: 1px solid rgba(255, 255, 255, 0.2);
//     color: #ffffff;
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 1.2rem;
//     backdrop-filter: blur(8px);
//     -webkit-backdrop-filter: blur(8px);
//     transition: background 0.3s ease, transform 0.3s ease;
//     z-index: 20001;
//   }
  
//   .nm__lightbox-close:hover {
//     background: rgba(255, 255, 255, 0.2);
//     transform: scale(1.1);
//   }

