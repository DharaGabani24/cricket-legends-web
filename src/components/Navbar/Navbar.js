// // // Navbar Design 1 — Full-Width Cinematic Overlay
// // import React, { useState, useEffect, useCallback, useRef } from 'react';
// // import './Navbar.css';

// // const NAV_SECTIONS = [
// //   { id: 'home',       label: 'Home',             index: '01', desc: 'The Beginning' },
// //   { id: 'story',      label: 'Streetz',          index: '02', desc: 'Street Cricket' },
// //   { id: 'ranked',     label: 'Ranked',           index: '03', desc: 'Tactical Play' },
// //   { id: 'the-pitch',  label: 'The Pitch',        index: '04', desc: 'Full ODI' },
// //   { id: 'leonida',    label: 'Gods of Cricket',  index: '05', desc: 'The Journey' },
// //   { id: 'pro-teams',  label: 'Pro Teams',        index: '06', desc: 'Clubs & Leagues' },
// //   { id: 'the-game',   label: 'The Game',         index: '07', desc: 'World of Cricket' },
// //   { id: 'the-arena',  label: 'The Arena',        index: '08', desc: 'Competitive' },
// // ];

// // const EXPLORE_TABS = [
// //   { id: 'explore',   label: 'Explore',   icon: 'M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM16.24 7.76l-5.74 2.5-2.5 5.74 5.74-2.5z' },
// //   { id: 'images',    label: 'Images',    icon: 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.5 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM21 19l-5-7-4 5-3-3-4 5' },
// //   { id: 'trailers',  label: 'Trailers',  icon: 'M5 3l14 9-14 9V3z' },
// //   { id: 'downloads', label: 'Downloads', icon: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3' },
// // ];

// // const TRAILERS = [
// //   { id: 't1', title: 'Cricket 26 — Official Trailer', date: 'Nov 13, 2025', duration: '0:30',
// //     thumbnail: 'https://img.youtube.com/vi/eM_w6yMpZiM/maxresdefault.jpg',
// //     url: 'https://www.youtube.com/watch?v=eM_w6yMpZiM', isNew: true },
// //   { id: 't2', title: 'Real Cricket 26 — Official Trailer', date: 'March 2025', duration: '1:12',
// //     thumbnail: 'https://img.youtube.com/vi/twUqbrowu94/maxresdefault.jpg',
// //     url: 'https://www.youtube.com/watch?v=twUqbrowu94', isNew: false },
// // ];

// // const IMAGES = [
// //   { id: 'i1', src: process.env.PUBLIC_URL + '/img/HighresScreenshot00004.webp', alt: 'Screenshot 1' },
// //   { id: 'i2', src: process.env.PUBLIC_URL + '/img/HighresScreenshot00009.webp', alt: 'Screenshot 2' },
// //   { id: 'i3', src: process.env.PUBLIC_URL + '/img/HighresScreenshot00008.webp', alt: 'Screenshot 3' },
// //   { id: 'i4', src: process.env.PUBLIC_URL + '/img/HighresScreenshot00005.webp', alt: 'Screenshot 4' },
// // ];

// // const Navbar = ({ visible = true }) => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [activeSection, setActiveSection] = useState('home');
// //   const [activeTab, setActiveTab] = useState('explore');
// //   const [hoveredLink, setHoveredLink] = useState(null);
// //   const cursorRef = useRef(null);
// //   const overlayRef = useRef(null);

// //   const toggleMenu = useCallback(() => {
// //     setIsOpen(prev => {
// //       const next = !prev;
// //       document.body.style.overflow = next ? 'hidden' : '';
// //       if (next) setActiveTab('explore');
// //       return next;
// //     });
// //   }, []);

// //   const closeMenu = useCallback(() => {
// //     setIsOpen(false);
// //     setActiveTab('explore');
// //     document.body.style.overflow = '';
// //   }, []);

// //   const scrollToSection = useCallback((id) => {
// //     closeMenu();
// //     setTimeout(() => {
// //       if (id === 'home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
// //       const el = document.getElementById(id);
// //       if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
// //     }, 250);
// //   }, [closeMenu]);

// //   // Scroll spy
// //   useEffect(() => {
// //     let ticking = false;
// //     const onScroll = () => {
// //       if (!ticking) {
// //         requestAnimationFrame(() => {
// //           let cur = 'home';
// //           NAV_SECTIONS.forEach(({ id }) => {
// //             const el = document.getElementById(id);
// //             if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) cur = id;
// //           });
// //           setActiveSection(cur);
// //           ticking = false;
// //         });
// //         ticking = true;
// //       }
// //     };
// //     window.addEventListener('scroll', onScroll, { passive: true });
// //     return () => window.removeEventListener('scroll', onScroll);
// //   }, []);

// //   // Escape
// //   useEffect(() => {
// //     const onKey = (e) => { if (e.key === 'Escape' && isOpen) closeMenu(); };
// //     document.addEventListener('keydown', onKey);
// //     return () => document.removeEventListener('keydown', onKey);
// //   }, [isOpen, closeMenu]);

// //   // Cursor glow
// //   useEffect(() => {
// //     if (!isOpen) return;
// //     const move = (e) => {
// //       if (cursorRef.current) {
// //         cursorRef.current.style.setProperty('--cx', `${e.clientX}px`);
// //         cursorRef.current.style.setProperty('--cy', `${e.clientY}px`);
// //       }
// //     };
// //     window.addEventListener('mousemove', move);
// //     return () => window.removeEventListener('mousemove', move);
// //   }, [isOpen]);

// //   const renderContent = () => {
// //     switch (activeTab) {
// //       case 'explore':
// //         return (
// //           <div className="nm__nav-list">
// //             {NAV_SECTIONS.map((s, i) => (
// //               <a key={s.id} href={`#${s.id}`}
// //                 className={`nm__nav-item${activeSection === s.id ? ' nm__nav-item--active' : ''}${hoveredLink === s.id ? ' nm__nav-item--hovered' : ''}`}
// //                 style={{ '--i': i }}
// //                 onMouseEnter={() => setHoveredLink(s.id)}
// //                 onMouseLeave={() => setHoveredLink(null)}
// //                 onClick={(e) => { e.preventDefault(); scrollToSection(s.id); }}
// //               >
// //                 <span className="nm__nav-idx">{s.index}</span>
// //                 <span className="nm__nav-label">{s.label}</span>
// //                 <span className="nm__nav-desc">{s.desc}</span>
// //                 <span className="nm__nav-arrow">→</span>
// //                 <span className="nm__nav-glow" />
// //               </a>
// //             ))}
// //           </div>
// //         );
// //       case 'trailers':
// //         return (
// //           <div className="nm__trailers">
// //             {TRAILERS.map((t, i) => (
// //               <a key={t.id} href={t.url} target="_blank" rel="noopener noreferrer"
// //                 className="nm__trailer" style={{ '--i': i }}>
// //                 <div className="nm__trailer-thumb">
// //                   <img src={t.thumbnail} alt={t.title} />
// //                   <div className="nm__trailer-play">▶</div>
// //                   <span className="nm__trailer-dur">{t.duration}</span>
// //                   {t.isNew && <span className="nm__trailer-badge">NEW</span>}
// //                 </div>
// //                 <div className="nm__trailer-info">
// //                   <span className="nm__trailer-title">{t.title}</span>
// //                   <span className="nm__trailer-date">{t.date}</span>
// //                 </div>
// //               </a>
// //             ))}
// //           </div>
// //         );
// //       case 'images':
// //         return (
// //           <div className="nm__images">
// //             {IMAGES.map((img, i) => (
// //               <div key={img.id} className="nm__img-card" style={{ '--i': i }}>
// //                 <img src={img.src} alt={img.alt} />
// //                 <div className="nm__img-overlay">
// //                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// //                     <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
// //                     <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
// //                   </svg>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         );
// //       case 'downloads':
// //         return (
// //           <div className="nm__downloads">
// //             <div className="nm__dl-glyph">↓</div>
// //             <h3 className="nm__dl-title">Downloads</h3>
// //             <p className="nm__dl-sub">Wallpapers, screenshots & more — coming soon</p>
// //           </div>
// //         );
// //       default: return null;
// //     }
// //   };

// //   const activeData = NAV_SECTIONS.find(s => s.id === activeSection);

// //   return (
// //     <div style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none', transition: 'opacity 0.5s ease' }}>
// //       {/* ── Top Bar ── */}
// //       <header className={`nm__bar${isOpen ? ' nm__bar--open' : ''}`}>
// //         <a href="#home" className="nm__logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
// //           <img src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'} alt="GOC" className="nm__logo-img" />
// //         </a>
// //         <div className="nm__bar-center">
// //           <span className="nm__bar-section">{activeData?.label || 'Home'}</span>
// //         </div>
// //         <button className={`nm__burger${isOpen ? ' nm__burger--open' : ''}`} onClick={toggleMenu} aria-label="Menu">
// //           <span /><span /><span />
// //         </button>
// //       </header>

// //       {/* ── Full-Width Overlay ── */}
// //       <div ref={overlayRef} className={`nm__overlay${isOpen ? ' nm__overlay--open' : ''}`}>
// //         <div ref={cursorRef} className="nm__cursor" />

// //         {/* Animated BG */}
// //         <div className="nm__bg">
// //           <div className="nm__bg-gradient" />
// //           <div className="nm__bg-grid" />
// //           <div className="nm__bg-orb nm__bg-orb--1" />
// //           <div className="nm__bg-orb nm__bg-orb--2" />
// //           <div className="nm__bg-orb nm__bg-orb--3" />
// //           <div className="nm__bg-noise" />
// //         </div>

// //         {/* ── Layout ── */}
// //         <div className="nm__layout">

// //           {/* LEFT PANEL */}
// //           <div className="nm__left">
// //             {/* Brand */}
// //             <div className="nm__brand">
// //               <img src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'} alt="GOC" className="nm__brand-logo" />
// //               <div className="nm__brand-info">
// //                 <span className="nm__brand-name">Gods of Cricket</span>
// //                 <span className="nm__brand-sub">Three Worlds · One Legacy</span>
// //               </div>
// //             </div>

// //             {/* Tabs */}
// //             <nav className="nm__tabs">
// //               <span className="nm__tabs-label">Explore</span>
// //               <div className="nm__tabs-row">
// //                 {EXPLORE_TABS.map((tab, i) => (
// //                   <button key={tab.id}
// //                     className={`nm__tab${activeTab === tab.id ? ' nm__tab--active' : ''}`}
// //                     onClick={() => setActiveTab(tab.id)}
// //                     style={{ '--ti': i }}
// //                   >
// //                     <svg className="nm__tab-ico" viewBox="0 0 24 24" fill="none"
// //                       stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
// //                       <path d={tab.icon} />
// //                     </svg>
// //                     <span>{tab.label}</span>
// //                     <span className="nm__tab-bar" />
// //                   </button>
// //                 ))}
// //               </div>
// //             </nav>

// //             {/* Counter */}
// //             <div className="nm__counter">
// //               <span className="nm__counter-cur">{activeData?.index || '01'}</span>
// //               <span className="nm__counter-sep">/</span>
// //               <span className="nm__counter-max">{String(NAV_SECTIONS.length).padStart(2, '0')}</span>
// //             </div>

// //             {/* Footer */}
// //             <div className="nm__footer">
// //               <div className="nm__footer-release">
// //                 <span className="nm__footer-lbl">Release</span>
// //                 <span className="nm__footer-val">February, 2026</span>
// //               </div>
// //               <div className="nm__footer-platforms">
// //                 <span className="nm__chip">
// //                   <img src={process.env.PUBLIC_URL + '/img/platforms/playstation.svg'} alt="" className="nm__chip-ico" />PS5
// //                 </span>
// //                 <span className="nm__chip">
// //                   <img src={process.env.PUBLIC_URL + '/img/platforms/xbox.svg'} alt="" className="nm__chip-ico" />Xbox
// //                 </span>
// //                 <span className="nm__chip">
// //                   <img src={process.env.PUBLIC_URL + '/img/platforms/steam.svg'} alt="" className="nm__chip-ico" />PC
// //                 </span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* DIVIDER */}
// //           <div className="nm__split">
// //             <span className="nm__split-line" />
// //             <span className="nm__split-diamond" />
// //             <span className="nm__split-line" />
// //           </div>

// //           {/* RIGHT PANEL */}
// //           <div className="nm__right" key={activeTab}>
// //             {renderContent()}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;



// //design 2
// // Navbar Design 6 — Full-Width Cinematic Overlay
// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import './Navbar.css';

// const NAV_SECTIONS = [
//   { id: 'home',       label: 'Home',             index: '01', desc: 'The Beginning' },
//   { id: 'story',      label: 'Streetz',          index: '02', desc: 'Street Cricket' },
//   { id: 'ranked',     label: 'Ranked',           index: '03', desc: 'Tactical Play' },
//   { id: 'the-pitch',  label: 'The Pitch',        index: '04', desc: 'Full ODI' },
//   { id: 'leonida',    label: 'Gods of Cricket',  index: '05', desc: 'The Journey' },
//   { id: 'pro-teams',  label: 'Pro Teams',        index: '06', desc: 'Clubs & Leagues' },
//   { id: 'the-game',   label: 'The Game',         index: '07', desc: 'World of Cricket' },
//   { id: 'the-arena',  label: 'The Arena',        index: '08', desc: 'Competitive' },
// ];

// const EXPLORE_TABS = [
//   { id: 'explore',   label: 'Explore',   icon: 'M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM16.24 7.76l-5.74 2.5-2.5 5.74 5.74-2.5z' },
//   { id: 'images',    label: 'Images',    icon: 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.5 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM21 19l-5-7-4 5-3-3-4 5' },
//   { id: 'trailers',  label: 'Trailers',  icon: 'M5 3l14 9-14 9V3z' },
//   { id: 'downloads', label: 'Downloads', icon: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3' },
// ];

// const TRAILERS = [
//   { id: 't1', title: 'Cricket 26 — Official Trailer', date: 'Nov 13, 2025', duration: '0:30',
//     thumbnail: 'https://img.youtube.com/vi/eM_w6yMpZiM/maxresdefault.jpg',
//     url: 'https://www.youtube.com/watch?v=eM_w6yMpZiM', isNew: true },
//   { id: 't2', title: 'Real Cricket 26 — Official Trailer', date: 'March 2025', duration: '1:12',
//     thumbnail: 'https://img.youtube.com/vi/twUqbrowu94/maxresdefault.jpg',
//     url: 'https://www.youtube.com/watch?v=twUqbrowu94', isNew: false },
//     { id: 't1', title: 'Cricket 26 — Official Trailer', date: 'Nov 13, 2025', duration: '0:30',
//     thumbnail: 'https://img.youtube.com/vi/eM_w6yMpZiM/maxresdefault.jpg',
//     url: 'https://www.youtube.com/watch?v=eM_w6yMpZiM', isNew: true },
//   { id: 't2', title: 'Real Cricket 26 — Official Trailer', date: 'March 2025', duration: '1:12',
//     thumbnail: 'https://img.youtube.com/vi/twUqbrowu94/maxresdefault.jpg',
//     url: 'https://www.youtube.com/watch?v=twUqbrowu94', isNew: false },
// ];

// const IMAGES = [
//   { id: 'i1', src: process.env.PUBLIC_URL + '/img/HighresScreenshot00004.webp', alt: 'Screenshot 1' },
//   { id: 'i2', src: process.env.PUBLIC_URL + '/img/HighresScreenshot00009.webp', alt: 'Screenshot 2' },
//   { id: 'i3', src: process.env.PUBLIC_URL + '/img/HighresScreenshot00008.webp', alt: 'Screenshot 3' },
//   { id: 'i4', src: process.env.PUBLIC_URL + '/img/HighresScreenshot00005.webp', alt: 'Screenshot 4' },
// ];

// const Navbar = ({ visible = true }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [activeTab, setActiveTab] = useState('explore');
//   const [hoveredLink, setHoveredLink] = useState(null);
//   const cursorRef = useRef(null);
//   const overlayRef = useRef(null);

//   const toggleMenu = useCallback(() => {
//     setIsOpen(prev => {
//       const next = !prev;
//       document.body.style.overflow = next ? 'hidden' : '';
//       if (next) setActiveTab('explore');
//       return next;
//     });
//   }, []);

//   const closeMenu = useCallback(() => {
//     setIsOpen(false);
//     setActiveTab('explore');
//     document.body.style.overflow = '';
//   }, []);

//   const scrollToSection = useCallback((id) => {
//     closeMenu();
//     setTimeout(() => {
//       if (id === 'home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
//       const el = document.getElementById(id);
//       if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }, 250);
//   }, [closeMenu]);

//   useEffect(() => {
//     let ticking = false;
//     const onScroll = () => {
//       if (!ticking) {
//         requestAnimationFrame(() => {
//           let cur = 'home';
//           NAV_SECTIONS.forEach(({ id }) => {
//             const el = document.getElementById(id);
//             if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) cur = id;
//           });
//           setActiveSection(cur);
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   useEffect(() => {
//     const onKey = (e) => { if (e.key === 'Escape' && isOpen) closeMenu(); };
//     document.addEventListener('keydown', onKey);
//     return () => document.removeEventListener('keydown', onKey);
//   }, [isOpen, closeMenu]);

//   useEffect(() => {
//     if (!isOpen) return;
//     const move = (e) => {
//       if (cursorRef.current) {
//         cursorRef.current.style.setProperty('--cx', `${e.clientX}px`);
//         cursorRef.current.style.setProperty('--cy', `${e.clientY}px`);
//       }
//     };
//     window.addEventListener('mousemove', move);
//     return () => window.removeEventListener('mousemove', move);
//   }, [isOpen]);

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'explore':
//         return (
//           <div className="nm__nav-list">
//             {NAV_SECTIONS.map((s, i) => (
//               <a key={s.id} href={`#${s.id}`}
//                 className={`nm__nav-item${activeSection === s.id ? ' nm__nav-item--active' : ''}${hoveredLink === s.id ? ' nm__nav-item--hovered' : ''}`}
//                 style={{ '--i': i }}
//                 onMouseEnter={() => setHoveredLink(s.id)}
//                 onMouseLeave={() => setHoveredLink(null)}
//                 onClick={(e) => { e.preventDefault(); scrollToSection(s.id); }}
//               >
//                 <span className="nm__nav-idx">{s.index}</span>
//                 <span className="nm__nav-label">{s.label}</span>
//                 <span className="nm__nav-desc">{s.desc}</span>
//                 <span className="nm__nav-arrow">→</span>
//                 <span className="nm__nav-glow" />
//               </a>
//             ))}
//           </div>
//         );
//       case 'trailers':
//         return (
//           <div className="nm__trailers">
//             {TRAILERS.map((t, i) => (
//               <a key={t.id} href={t.url} target="_blank" rel="noopener noreferrer"
//                 className="nm__trailer" style={{ '--i': i }}>
//                 <div className="nm__trailer-thumb">
//                   <img src={t.thumbnail} alt={t.title} />
//                   <div className="nm__trailer-play">▶</div>
//                   <span className="nm__trailer-dur">{t.duration}</span>
//                   {t.isNew && <span className="nm__trailer-badge">NEW</span>}
//                 </div>
//                 <div className="nm__trailer-info">
//                   <span className="nm__trailer-title">{t.title}</span>
//                   <span className="nm__trailer-date">{t.date}</span>
//                 </div>
//               </a>
//             ))}
//           </div>
//         );
//       case 'images':
//         return (
//           <div className="nm__images">
//             {IMAGES.map((img, i) => (
//               <div key={img.id} className="nm__img-card" style={{ '--i': i }}>
//                 <img src={img.src} alt={img.alt} />
//                 <div className="nm__img-overlay">
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
//                     <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
//                   </svg>
//                 </div>
//               </div>
//             ))}
//           </div>
//         );
//       case 'downloads':
//         return (
//           <div className="nm__downloads">
//             <div className="nm__dl-glyph">↓</div>
//             <h3 className="nm__dl-title">Downloads</h3>
//             <p className="nm__dl-sub">Wallpapers, screenshots & more — coming soon</p>
//           </div>
//         );
//       default: return null;
//     }
//   };

//   const activeData = NAV_SECTIONS.find(s => s.id === activeSection);

//   return (
//     <div style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none', transition: 'opacity 0.5s ease' }}>
//       {/* ── Top Bar — FIX 1: No center label, No bottom line when open ── */}
//       <header className={`nm__bar${isOpen ? ' nm__bar--open' : ''}`}>
//         {/* FIX 2: Logo hides when overlay is open */}
//         <a href="#home" className={`nm__logo${isOpen ? ' nm__logo--hidden' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
//           <img src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'} alt="GOC" className="nm__logo-img" />
//         </a>
//         <button className={`nm__burger${isOpen ? ' nm__burger--open' : ''}`} onClick={toggleMenu} aria-label="Menu">
//           <span /><span /><span />
//         </button>
//       </header>

//       {/* ── Full-Width Overlay ── */}
//       <div ref={overlayRef} className={`nm__overlay${isOpen ? ' nm__overlay--open' : ''}`}>
//         <div ref={cursorRef} className="nm__cursor" />

//         <div className="nm__bg">
//           <div className="nm__bg-gradient" />
//           <div className="nm__bg-grid" />
//           <div className="nm__bg-orb nm__bg-orb--1" />
//           <div className="nm__bg-orb nm__bg-orb--2" />
//           <div className="nm__bg-orb nm__bg-orb--3" />
//           <div className="nm__bg-noise" />
//         </div>

//         <div className="nm__layout">
//           {/* LEFT PANEL */}
//           <div className="nm__left">
//             <div className="nm__brand">
//               <img src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'} alt="GOC" className="nm__brand-logo" />
//               <div className="nm__brand-info">
//                 <span className="nm__brand-name">Gods of Cricket</span>
//                 <span className="nm__brand-sub">Three Worlds · One Legacy</span>
//               </div>
//             </div>

//             {/* FIX 3: Redesigned Tabs — 2x2 grid with better styling */}
//             <nav className="nm__tabs">
//               <span className="nm__tabs-label">Explore</span>
//               <div className="nm__tabs-grid">
//                 {EXPLORE_TABS.map((tab, i) => (
//                   <button key={tab.id}
//                     className={`nm__tab${activeTab === tab.id ? ' nm__tab--active' : ''}`}
//                     onClick={() => setActiveTab(tab.id)}
//                     style={{ '--ti': i }}
//                   >
//                     <span className="nm__tab-icon-wrap">
//                       <svg className="nm__tab-ico" viewBox="0 0 24 24" fill="none"
//                         stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                         <path d={tab.icon} />
//                       </svg>
//                     </span>
//                     <span className="nm__tab-text">{tab.label}</span>
//                     <span className="nm__tab-glow" />
//                   </button>
//                 ))}
//               </div>
//             </nav>

//             <div className="nm__counter">
//               <span className="nm__counter-cur">{activeData?.index || '01'}</span>
//               <span className="nm__counter-sep">/</span>
//               <span className="nm__counter-max">{String(NAV_SECTIONS.length).padStart(2, '0')}</span>
//             </div>

//             <div className="nm__footer">
//               <div className="nm__footer-release">
//                 <span className="nm__footer-lbl">Release</span>
//                 <span className="nm__footer-val">February, 2026</span>
//               </div>
//               <div className="nm__footer-platforms">
//                 <span className="nm__chip">
//                   <img src={process.env.PUBLIC_URL + '/img/platforms/playstation.svg'} alt="" className="nm__chip-ico" />PS5
//                 </span>
//                 <span className="nm__chip">
//                   <img src={process.env.PUBLIC_URL + '/img/platforms/xbox.svg'} alt="" className="nm__chip-ico" />Xbox
//                 </span>
//                 <span className="nm__chip">
//                   <img src={process.env.PUBLIC_URL + '/img/platforms/steam.svg'} alt="" className="nm__chip-ico" />PC
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className="nm__split">
//             <span className="nm__split-line" />
//             <span className="nm__split-diamond" />
//             <span className="nm__split-line" />
//           </div>

//           <div className="nm__right" key={activeTab}>
//             {renderContent()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// Navbar Design 6 — Full-Width Cinematic Overlay
import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Navbar.css';

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

const EXPLORE_TABS = [
  { id: 'explore',   label: 'Explore',   desc: 'Browse all sections',  count: '8 sections', icon: 'M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM16.24 7.76l-5.74 2.5-2.5 5.74 5.74-2.5z' },
  { id: 'images',    label: 'Images',    desc: 'Screenshots & art',    count: '4 items',     icon: 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.5 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM21 19l-5-7-4 5-3-3-4 5' },
  { id: 'trailers',  label: 'Trailers',  desc: 'Official game videos', count: '2 videos',    icon: 'M5 3l14 9-14 9V3z' },
  { id: 'downloads', label: 'Downloads', desc: 'Wallpapers & more',    count: 'Coming soon', icon: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3' },
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
  { id: 'i1', src: process.env.PUBLIC_URL + '/img/HighresScreenshot00004.webp', alt: 'Screenshot 1' },
  { id: 'i2', src: process.env.PUBLIC_URL + '/img/HighresScreenshot00009.webp', alt: 'Screenshot 2' },
  { id: 'i3', src: process.env.PUBLIC_URL + '/img/HighresScreenshot00008.webp', alt: 'Screenshot 3' },
  { id: 'i4', src: process.env.PUBLIC_URL + '/img/HighresScreenshot00005.webp', alt: 'Screenshot 4' },
];

const Navbar = ({ visible = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeTab, setActiveTab] = useState('explore');
  const [hoveredLink, setHoveredLink] = useState(null);
  const cursorRef = useRef(null);
  const overlayRef = useRef(null);

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

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && isOpen) closeMenu(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, closeMenu]);

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
          <div className="nm__nav-list">
            {NAV_SECTIONS.map((s, i) => (
              <a key={s.id} href={`#${s.id}`}
                className={`nm__nav-item${activeSection === s.id ? ' nm__nav-item--active' : ''}${hoveredLink === s.id ? ' nm__nav-item--hovered' : ''}`}
                style={{ '--i': i }}
                onMouseEnter={() => setHoveredLink(s.id)}
                onMouseLeave={() => setHoveredLink(null)}
                onClick={(e) => { e.preventDefault(); scrollToSection(s.id); }}
              >
                <span className="nm__nav-idx">{s.index}</span>
                <span className="nm__nav-label">{s.label}</span>
                <span className="nm__nav-desc">{s.desc}</span>
                <span className="nm__nav-arrow">→</span>
                <span className="nm__nav-glow" />
              </a>
            ))}
          </div>
        );
      case 'trailers':
        return (
          <div className="nm__trailers">
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
      case 'images':
        return (
          <div className="nm__images">
            {IMAGES.map((img, i) => (
              <div key={img.id} className="nm__img-card" style={{ '--i': i }}>
                <img src={img.src} alt={img.alt} />
                <div className="nm__img-overlay">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        );
      case 'downloads':
        return (
          <div className="nm__downloads">
            <div className="nm__dl-glyph">↓</div>
            <h3 className="nm__dl-title">Downloads</h3>
            <p className="nm__dl-sub">Wallpapers, screenshots & more — coming soon</p>
          </div>
        );
      default: return null;
    }
  };

  const activeData = NAV_SECTIONS.find(s => s.id === activeSection);

  return (
    <div style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none', transition: 'opacity 0.5s ease' }}>
      {/* ── Top Bar — FIX 1: No center label, No bottom line when open ── */}
      <header className={`nm__bar${isOpen ? ' nm__bar--open' : ''}`}>
        {/* FIX 2: Logo hides when overlay is open */}
        <a href="#home" className={`nm__logo${isOpen ? ' nm__logo--hidden' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          <img src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'} alt="GOC" className="nm__logo-img" />
        </a>
        <button className={`nm__burger${isOpen ? ' nm__burger--open' : ''}`} onClick={toggleMenu} aria-label="Menu">
          <span /><span /><span />
        </button>
      </header>

      {/* ── Full-Width Overlay ── */}
      <div ref={overlayRef} className={`nm__overlay${isOpen ? ' nm__overlay--open' : ''}`}>
        <div ref={cursorRef} className="nm__cursor" />

        <div className="nm__bg">
          <div className="nm__bg-gradient" />
          <div className="nm__bg-grid" />
          <div className="nm__bg-orb nm__bg-orb--1" />
          <div className="nm__bg-orb nm__bg-orb--2" />
          <div className="nm__bg-orb nm__bg-orb--3" />
          <div className="nm__bg-noise" />
        </div>

        <div className="nm__layout">
          {/* LEFT PANEL */}
          <div className="nm__left">
            <div className="nm__brand">
              <img src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'} alt="GOC" className="nm__brand-logo" />
              <div className="nm__brand-info">
                <span className="nm__brand-name">Gods of Cricket</span>
                <span className="nm__brand-sub">Three Worlds · One Legacy</span>
              </div>
            </div>

            {/* Style 1: Vertical Stack with arrows */}
            <nav className="nm__tabs">
              <span className="nm__tabs-label">Explore</span>
              <div className="nm__tabs-stack">
                {EXPLORE_TABS.map((tab, i) => (
                  <button key={tab.id}
                    className={`nm__tab${activeTab === tab.id ? ' nm__tab--active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                    style={{ '--ti': i }}
                  >
                    <span className="nm__tab-icon-wrap">
                      <svg className="nm__tab-ico" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d={tab.icon} />
                      </svg>
                    </span>
                    <span className="nm__tab-text">{tab.label}</span>
                    <span className="nm__tab-arrow">→</span>
                  </button>
                ))}
              </div>
            </nav>

            <div className="nm__counter">
              <span className="nm__counter-cur">{activeData?.index || '01'}</span>
              <span className="nm__counter-sep">/</span>
              <span className="nm__counter-max">{String(NAV_SECTIONS.length).padStart(2, '0')}</span>
            </div>

            <div className="nm__footer">
              <div className="nm__footer-release">
                <span className="nm__footer-lbl">Release</span>
                <span className="nm__footer-val">February, 2026</span>
              </div>
              <div className="nm__footer-platforms">
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

          <div className="nm__split">
            <span className="nm__split-line" />
            <span className="nm__split-diamond" />
            <span className="nm__split-line" />
          </div>

          <div className="nm__right" key={activeTab}>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;