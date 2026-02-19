// import React from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="nav">
//       {/* <a href="#home" className="nav__logo">GOC</a> */}
//       <a href="#home" className="nav__logo">
//         <img 
//           src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'} 
//           alt="Gods of Cricket" 
//           className="nav__logo-img"
//         />
//       </a>
      
//       <button className="nav__menu-btn" aria-label="Menu">
//         <span></span>
//         <span></span>
//         <span></span>
//       </button>
//     </nav>
//   );
// };

// // export default Navbar;



// ///Navbar 2 currently working but need to change the content 
// import React, { useState, useEffect, useCallback } from 'react';
// import './Navbar.css';

// const NAV_SECTIONS = [
//   { id: 'story',      label: 'Story',        index: '01' },
//   { id: 'lucia',      label: 'Lucia',        index: '02' },
//   { id: 'cal',        label: 'Cal Hampton',  index: '03' },
//   { id: 'leonida',    label: 'Leonida',      index: '04' },
//   { id: 'world',      label: 'World',        index: '05' },
//   { id: 'discover',   label: 'Discover',     index: '06' },
//   { id: 'vicecity',   label: 'Vice City',    index: '07' },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [activeSection, setActiveSection] = useState('story');
//   const [showIndicator, setShowIndicator] = useState(false);

//   // Toggle sidebar
//   const toggleSidebar = useCallback(() => {
//     setIsOpen((prev) => {
//       const next = !prev;
//       document.body.style.overflow = next ? 'hidden' : '';
//       return next;
//     });
//   }, []);

//   // Close sidebar
//   const closeSidebar = useCallback(() => {
//     setIsOpen(false);
//     document.body.style.overflow = '';
//   }, []);

//   // Scroll to section
//   const scrollToSection = useCallback(
//     (sectionId) => {
//       closeSidebar();
//       setTimeout(() => {
//         const el = document.getElementById(sectionId);
//         if (el) {
//           el.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         }
//       }, 120);
//     },
//     [closeSidebar]
//   );

//   // Scroll listener — progress, active section, scrolled state
//   useEffect(() => {
//     let ticking = false;

//     const onScroll = () => {
//       if (!ticking) {
//         requestAnimationFrame(() => {
//           const scrollY = window.scrollY;
//           const docHeight =
//             document.documentElement.scrollHeight - window.innerHeight;
//           const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

//           setScrollProgress(pct);

//           // Section indicator visible after some scroll
//           const showIndicator = scrollY > 150;
//           setShowIndicator(showIndicator);

//           // Detect active section
//           let current = 'story';
//           NAV_SECTIONS.forEach(({ id }) => {
//             const el = document.getElementById(id);
//             if (el) {
//               const rect = el.getBoundingClientRect();
//               if (rect.top <= window.innerHeight * 0.4) {
//                 current = id;
//               }
//             }
//           });
//           setActiveSection(current);

//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   // Escape key closes sidebar
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === 'Escape' && isOpen) closeSidebar();
//     };
//     document.addEventListener('keydown', onKey);
//     return () => document.removeEventListener('keydown', onKey);
//   }, [isOpen, closeSidebar]);

//   // Active section label for the floating indicator
//   const activeSectionLabel =
//     NAV_SECTIONS.find((s) => s.id === activeSection)?.label || '';

//   return (
//     <>
//       {/* Scroll progress bar */}
//       <div
//         className={`nav__scroll-progress${
//           scrollProgress > 0.5 ? ' nav__scroll-progress--visible' : ''
//         }`}
//         style={{ width: `${scrollProgress}%` }}
//       />

//       {/* Top bar — always transparent */}
//       <nav className="nav">
//         {/* GOC Logo — Left */}
//         <a href="#home" className="nav__logo">
//           <img
//             src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'}
//             alt="Gods of Cricket"
//             className="nav__logo-img"
//           />
//         </a>

//         {/* Section indicator — center-right area */}
//         <div
//           className={`nav__section-indicator${
//             showIndicator ? ' nav__section-indicator--visible' : ''
//           }`}
//         >
//           <span className="nav__section-dot" />
//           <span className="nav__section-label">{activeSectionLabel}</span>
//         </div>

//         {/* Hamburger — Right */}
//         <button
//           className={`nav__menu-btn${isOpen ? ' nav__menu-btn--open' : ''}`}
//           onClick={toggleSidebar}
//           aria-label="Toggle menu"
//         >
//           <span />
//           <span />
//           <span />
//         </button>
//       </nav>

//       {/* Backdrop */}
//       <div
//         className={`nav__backdrop${isOpen ? ' nav__backdrop--open' : ''}`}
//         onClick={closeSidebar}
//       />

//       {/* Sidebar panel — slides from right */}
//       <aside
//         className={`nav__sidebar${isOpen ? ' nav__sidebar--open' : ''}`}
//       >
//         {/* Header */}
//         <div className="nav__sidebar-header">
//           <div className="nav__sidebar-brand">
//             <span className="nav__sidebar-title">Gods of Cricket</span>
//             <span className="nav__sidebar-sub">Welcome to Leonida</span>
//           </div>
//         </div>

//         {/* Nav links */}
//         <div className="nav__sidebar-nav">
//           {NAV_SECTIONS.map((section) => (
//             <a
//               key={section.id}
//               href={`#${section.id}`}
//               className={`nav__sidebar-link${
//                 activeSection === section.id
//                   ? ' nav__sidebar-link--active'
//                   : ''
//               }`}
//               onClick={(e) => {
//                 e.preventDefault();
//                 scrollToSection(section.id);
//               }}
//             >
//               <span className="nav__sidebar-index">{section.index}</span>
//               <span className="nav__sidebar-text">{section.label}</span>
//               <span className="nav__sidebar-tag">Current</span>
//             </a>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="nav__sidebar-footer">
//           <button className="nav__sidebar-cta">Pre-Order Now</button>
//           <div className="nav__sidebar-platforms">
//             <span className="nav__sidebar-platform">PS5</span>
//             <span className="nav__sidebar-platform-div">|</span>
//             <span className="nav__sidebar-platform">Xbox Series X|S</span>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Navbar;

// //navabar 3 for checking 
// import React, { useState, useEffect, useCallback } from 'react';
// import './Navbar.css';

// /* ─── Section map — matches actual page sections ─── */
// const NAV_SECTIONS = [
//   { id: 'home',       label: 'Home',       index: '01', desc: 'The Beginning' },
//   { id: 'story',      label: 'Streetz',    index: '02', desc: 'Street Cricket' },
//   { id: 'ranked',     label: 'Ranked',     index: '03', desc: 'Tactical Play' },
//   { id: 'the-pitch',  label: 'The Pitch',  index: '04', desc: 'Full ODI' },
//   { id: 'leonida',    label: 'Leonida',    index: '05', desc: 'The Journey' },
//   { id: 'pro-teams',  label: 'Pro Teams',  index: '06', desc: 'Clubs & Leagues' },
//   { id: 'the-game',   label: 'The Game',   index: '07', desc: 'World of Cricket' },
//   { id: 'the-arena',  label: 'The Arena',  index: '08', desc: 'Competitive' },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [activeSection, setActiveSection] = useState('home');
//   const [showIndicator, setShowIndicator] = useState(false);
//   // const [hideNav, setHideNav] = useState(false);
//   // const lastScrollY = useRef(0);

//   /* ─── Toggle sidebar ─── */
//   const toggleSidebar = useCallback(() => {
//     setIsOpen((prev) => {
//       const next = !prev;
//       document.body.style.overflow = next ? 'hidden' : '';
//       return next;
//     });
//   }, []);

//   /* ─── Close sidebar ─── */
//   const closeSidebar = useCallback(() => {
//     setIsOpen(false);
//     document.body.style.overflow = '';
//   }, []);

//   /* ─── Scroll to section ─── */
//   const scrollToSection = useCallback(
//     (sectionId) => {
//       closeSidebar();
//       if (sectionId === 'home') {
//         setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 150);
//         return;
//       }
//       setTimeout(() => {
//         const el = document.getElementById(sectionId);
//         if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       }, 150);
//     },
//     [closeSidebar]
//   );

//   /* ─── Scroll listener ─── */
//   useEffect(() => {
//     let ticking = false;

//     const onScroll = () => {
//       if (!ticking) {
//         requestAnimationFrame(() => {
//           const scrollY = window.scrollY;
//           const docHeight =
//             document.documentElement.scrollHeight - window.innerHeight;
//           const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

//           setScrollProgress(pct);
//           setShowIndicator(scrollY > 200);

//           // // Auto-hide on scroll down, show on scroll up
//           // if (scrollY > lastScrollY.current && scrollY > 400) {
//           //   setHideNav(true);
//           // } else {
//           //   setHideNav(false);
//           // }
//           // lastScrollY.current = scrollY;

//           // Detect active section
//           let current = 'home';
//           NAV_SECTIONS.forEach(({ id }) => {
//             const el = document.getElementById(id);
//             if (el) {
//               const rect = el.getBoundingClientRect();
//               if (rect.top <= window.innerHeight * 0.4) current = id;
//             }
//           });
//           setActiveSection(current);

//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   /* ─── Escape key ─── */
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === 'Escape' && isOpen) closeSidebar();
//     };
//     document.addEventListener('keydown', onKey);
//     return () => document.removeEventListener('keydown', onKey);
//   }, [isOpen, closeSidebar]);

//   const activeData = NAV_SECTIONS.find((s) => s.id === activeSection);
//   const activeSectionLabel = activeData?.label || '';
//   const activeSectionIndex = activeData?.index || '01';

//   return (
//     <>
//       {/* ─── Scroll Progress ─── */}
//       <div
//         className={`nav__progress${scrollProgress > 0.5 ? ' nav__progress--visible' : ''}`}
//         style={{ width: `${scrollProgress}%` }}
//       />

//       {/* ─── Top Bar ─── */}
//       <nav
//         // className={`nav${hideNav && !isOpen ? ' nav--hidden' : ''}${
//         //   isOpen ? ' nav--sidebar-open' : ''
//         // }`}
//         className={`nav${isOpen ? ' nav--sidebar-open' : ''}`}
//       >
//         {/* Logo */}
//         <a
//           href="#home"
//           className="nav__logo"
//           onClick={(e) => {
//             e.preventDefault();
//             scrollToSection('home');
//           }}
//         >
//           <img
//             src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'}
//             alt="Gods of Cricket"
//             className="nav__logo-img"
//           />
//         </a>

//         {/* Section indicator */}
//         <div
//           className={`nav__indicator${
//             showIndicator ? ' nav__indicator--visible' : ''
//           }`}
//         >
//           <span className="nav__indicator-dot" />
//           <span className="nav__indicator-label">{activeSectionLabel}</span>
//         </div>

//         {/* Hamburger */}
//         <button
//           className={`nav__burger${isOpen ? ' nav__burger--open' : ''}`}
//           onClick={toggleSidebar}
//           aria-label="Toggle menu"
//         >
//           <span className="nav__burger-line" />
//           <span className="nav__burger-line" />
//           <span className="nav__burger-line" />
//         </button>
//       </nav>

//       {/* ─── Backdrop ─── */}
//       <div
//         className={`nav__backdrop${isOpen ? ' nav__backdrop--open' : ''}`}
//         onClick={closeSidebar}
//       />

//       {/* ─── Sidebar ─── */}
//       <aside className={`nav__sidebar${isOpen ? ' nav__sidebar--open' : ''}`}>
//         {/* Neon accent */}
//         <div className="nav__sidebar-accent" />

//         {/* Close */}
//         {/* <button
//           className="nav__sidebar-close"
//           onClick={closeSidebar}
//           aria-label="Close menu"
//         >
//           <svg
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <line x1="18" y1="6" x2="6" y2="18" />
//             <line x1="6" y1="6" x2="18" y2="18" />
//           </svg>
//         </button> */}

//         {/* Header */}
//         <div className="nav__sidebar-header">
//           <div className="nav__sidebar-logo">
//             <img
//               src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'}
//               alt="GOC"
//               className="nav__sidebar-logo-img"
//             />
//           </div>
//           <div className="nav__sidebar-brand">
//             <span className="nav__sidebar-title">Gods of Cricket</span>
//             <span className="nav__sidebar-sub">Three Worlds. One Legacy.</span>
//           </div>
//         </div>

//         {/* Counter */}
//         <div className="nav__sidebar-counter">
//           <span className="nav__sidebar-counter-current">{activeSectionIndex}</span>
//           <span className="nav__sidebar-counter-sep">/</span>
//           <span className="nav__sidebar-counter-total">
//             {String(NAV_SECTIONS.length).padStart(2, '0')}
//           </span>
//         </div>

//         {/* Links */}
//         <div className="nav__sidebar-nav">
//           {NAV_SECTIONS.map((section, i) => (
//             <a
//               key={section.id}
//               href={`#${section.id}`}
//               className={`nav__link${
//                 activeSection === section.id ? ' nav__link--active' : ''
//               }`}
//               style={{
//                 transitionDelay: isOpen ? `${0.12 + i * 0.045}s` : '0s',
//               }}
//               onClick={(e) => {
//                 e.preventDefault();
//                 scrollToSection(section.id);
//               }}
//             >
//               <span className="nav__link-index">{section.index}</span>
//               <span className="nav__link-content">
//                 <span className="nav__link-label">{section.label}</span>
//                 <span className="nav__link-desc">{section.desc}</span>
//               </span>
//               <span className="nav__link-bar" />
//               {activeSection === section.id && (
//                 <span className="nav__link-current">●</span>
//               )}
//             </a>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="nav__sidebar-footer">
//           <div className="nav__sidebar-release">
//             <span className="nav__sidebar-release-label">Coming</span>
//             <span className="nav__sidebar-release-date">February, 2026</span>
//           </div>
//           <div className="nav__sidebar-platforms">
//             <span className="nav__sidebar-platform">
//               <img
//                 src="/img/platforms/playstation.svg"
//                 alt="PS5"
//                 className="nav__sidebar-platform-icon"
//               />
//               PS5
//             </span>
//             <span className="nav__sidebar-platform-sep">|</span>
//             <span className="nav__sidebar-platform">
//               <img
//                 src="/img/platforms/xbox.svg"
//                 alt="Xbox"
//                 className="nav__sidebar-platform-icon"
//               />
//               Xbox
//             </span>
//             <span className="nav__sidebar-platform-sep">|</span>
//             <span className="nav__sidebar-platform">
//               <img
//                 src="/img/platforms/steam.svg"
//                 alt="PC"
//                 className="nav__sidebar-platform-icon"
//               />
//               PC
//             </span>
//           </div>
//           <button className="nav__sidebar-cta">Wishlist Now</button>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Navbar;/////


//design 4
import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Navbar.css';

/* ─── Section map — matches actual page sections ─── */
const NAV_SECTIONS = [
  { id: 'home',       label: 'Home',       index: '01', desc: 'The Beginning' },
  { id: 'story',      label: 'Streetz',    index: '02', desc: 'Street Cricket' },
  { id: 'ranked',     label: 'Ranked',     index: '03', desc: 'Tactical Play' },
  { id: 'the-pitch',  label: 'The Pitch',  index: '04', desc: 'Full ODI' },
  { id: 'leonida',    label: 'Gods of Cricket',    index: '05', desc: 'The Journey' },
  { id: 'pro-teams',  label: 'Pro Teams',  index: '06', desc: 'Clubs & Leagues' },
  { id: 'the-game',   label: 'The Game',   index: '07', desc: 'World of Cricket' },
  { id: 'the-arena',  label: 'The Arena',  index: '08', desc: 'Competitive' },
];

/* ─── Explore Tabs ─── */
const EXPLORE_TABS = [
  { id: 'people',    label: 'Cricket',    icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M10 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' },
  { id: 'images', label: 'Images', icon: 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.5 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM21 19l-5-7-4 5-3-3-4 5' },
  { id: 'trailers',  label: 'Trailers',  icon: 'M5 3l14 9-14 9V3z' },
  { id: 'downloads', label: 'Downloads', icon: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3' },
];


//////

/* ─── Trailer Data ─── */

// const TRAILERS = [
//   {
//     id: 'trailer-1',
//     title: 'Gods of Cricket — Official Reveal Trailer',
//     date: 'Coming Soon',
//     duration: '2:30',
//     thumbnail: 'https://img.youtube.com/vi/QdBZY2fkU-0/maxresdefault.jpg',
//     url: 'https://www.youtube.com/watch?v=QdBZY2fkU-0',
//     isNew: true,
//   },
//   {
//     id: 'trailer-2',
//     title: 'Gods of Cricket — Gameplay Trailer',
//     date: 'Coming Soon',
//     duration: '1:45',
//     thumbnail: 'https://img.youtube.com/vi/VQRLujxTm3c/maxresdefault.jpg',
//     url: 'https://www.youtube.com/watch?v=VQRLujxTm3c',
//     isNew: false,
//   },
// ];

// const IMAGES = [
//   { id: 'img-1', src: 'https://img.youtube.com/vi/QdBZY2fkU-0/maxresdefault.jpg', alt: 'Screenshot 1' },
//   { id: 'img-2', src: 'https://img.youtube.com/vi/VQRLujxTm3c/maxresdefault.jpg', alt: 'Screenshot 2' },
//   { id: 'img-3', src: 'https://img.youtube.com/vi/QdBZY2fkU-0/hqdefault.jpg', alt: 'Screenshot 3' },
//   { id: 'img-4', src: 'https://img.youtube.com/vi/VQRLujxTm3c/hqdefault.jpg', alt: 'Screenshot 4' },
// ];
/* ─── Trailer Data ─── */
const TRAILERS = [
  {
    id: 'trailer-1',
    title: 'Cricket 26 — Official Trailer',
    date: 'November 13, 2025',
    duration: '0:30',
    thumbnail: 'https://img.youtube.com/vi/eM_w6yMpZiM/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=eM_w6yMpZiM',
    isNew: true,
  },
  {
    id: 'trailer-2',
    title: 'Real Cricket 26 — Official Trailer',
    date: 'March 2025',
    duration: '1:12',
    thumbnail: 'https://img.youtube.com/vi/twUqbrowu94/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=twUqbrowu94',
    isNew: false,
  },
];

const IMAGES = [
  { id: 'img-1', src: 'https://img.youtube.com/vi/eM_w6yMpZiM/maxresdefault.jpg', alt: 'Cricket 26 Screenshot' },
  { id: 'img-2', src: 'https://img.youtube.com/vi/twUqbrowu94/maxresdefault.jpg', alt: 'Real Cricket 26 Screenshot' },
  { id: 'img-3', src: 'https://img.youtube.com/vi/eM_w6yMpZiM/hqdefault.jpg', alt: 'Cricket 26 Gameplay' },
  { id: 'img-4', src: 'https://img.youtube.com/vi/twUqbrowu94/hqdefault.jpg', alt: 'Real Cricket 26 Gameplay' },
];


const Navbar = ({ visible = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [showIndicator, setShowIndicator] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sidebarRef = useRef(null);

  /* ─── Toggle sidebar ─── */
  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      if (!next) setActiveTab(null);
      return next;
    });
  }, []);

  /* ─── Close sidebar ─── */
  const closeSidebar = useCallback(() => {
    setIsOpen(false);
    setActiveTab(null);
    document.body.style.overflow = '';
  }, []);

  /* ─── Scroll to section ─── */
  const scrollToSection = useCallback(
    (sectionId) => {
      closeSidebar();
      if (sectionId === 'home') {
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 150);
        return;
      }
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    },
    [closeSidebar]
  );

  /* ─── Scroll listener ─── */
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
          setScrollProgress(pct);
          setShowIndicator(scrollY > 200);

          let current = 'home';
          NAV_SECTIONS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= window.innerHeight * 0.4) current = id;
            }
          });
          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ─── Escape key ─── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && isOpen) closeSidebar();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, closeSidebar]);

  /* ─── Mouse tracking for glow ─── */
  useEffect(() => {
    if (!isOpen) return;
    const handleMouse = (e) => {
      if (sidebarRef.current) {
        const rect = sidebarRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [isOpen]);

  const activeData = NAV_SECTIONS.find((s) => s.id === activeSection);
  const activeSectionLabel = activeData?.label || '';
  const activeSectionIndex = activeData?.index || '01';

  return (
    <>
    <div style={{ 
    opacity: visible ? 1 : 0, 
    pointerEvents: visible ? 'auto' : 'none', 
    transition: 'opacity 0.6s ease' 
  }}>
      {/* ─── Scroll Progress ─── */}
      {/* <div className="nav__progress-track">
        <div
          className={`nav__progress${scrollProgress > 0.5 ? ' nav__progress--vis' : ''}`}
          style={{ width: `${scrollProgress}%` }}
        />
        <div
          className={`nav__progress-glow${scrollProgress > 0.5 ? ' nav__progress-glow--vis' : ''}`}
          style={{ width: `${scrollProgress}%` }}
        />
      </div> */}

      {/* ─── Top Bar ─── */}
      <nav className={`nav${isOpen ? ' nav--open' : ''}`}>
        {/* Logo */}
        <a
          href="#home"
          className="nav__logo"
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
        >
          <img
            src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'}
            alt="Gods of Cricket"
            className="nav__logo-img"
          />
          <span className="nav__logo-glow" />
        </a>

        {/* Section indicator pill */}
        {/* <div className={`nav__indicator${showIndicator ? ' nav__indicator--vis' : ''}`}>
          <span className="nav__indicator-idx">{activeSectionIndex}</span>
          <span className="nav__indicator-sep" />
          <span className="nav__indicator-name">{activeSectionLabel}</span>
          <span className="nav__indicator-ring" />
        </div> */}

        {/* Hamburger */}
        <button
          className={`nav__burger${isOpen ? ' nav__burger--open' : ''}`}
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <span className="nav__burger-line" />
          <span className="nav__burger-line" />
          <span className="nav__burger-line" />
          <span className="nav__burger-glow" />
        </button>
      </nav>

      {/* ─── Backdrop ─── */}
      <div
        className={`nav__backdrop${isOpen ? ' nav__backdrop--open' : ''}`}
        onClick={closeSidebar}
      />

      {/* ─── Sidebar ─── */}
      <aside
        ref={sidebarRef}
        className={`nav__sidebar${isOpen ? ' nav__sidebar--open' : ''}`}
      >
        {/* Cursor glow */}
        <div
          className="nav__sidebar-cursor-glow"
          style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
        />

        {/* Edge accent */}
        <div className="nav__sidebar-edge" />

        {/* Decorative grid */}
        <div className="nav__sidebar-grid" />

        {/* ─── Header ─── */}
        {/* <div className="nav__sidebar-header">
          <div className="nav__sidebar-brand">
            <img
              src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'}
              alt="GOC"
              className="nav__sidebar-logo"
            />
            <div>
              <div className="nav__sidebar-title">Gods of Cricket</div>
            </div>
          </div>
          <div className="nav__sidebar-counter">
            <span className="nav__sidebar-counter-big">{activeSectionIndex}</span>
            <span className="nav__sidebar-counter-of">/</span>
            <span className="nav__sidebar-counter-max">
              {String(NAV_SECTIONS.length).padStart(2, '0')}
            </span>
          </div>
        </div> */}

        {/* ─── Header ─── */}

        <div className="nav__sidebar-header">
          <div className="nav__sidebar-brand">
            <img
              src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'}
              alt="GOC"
              className="nav__sidebar-logo"
            />
            <div>
              <div className="nav__sidebar-title">Gods of Cricket</div>
              {/* <div className="nav__sidebar-tagline">Three Worlds · One Legacy</div> */}
            </div>
          </div>
        </div>

        {/* ─── Explore Tabs ─── */}
        <div className="nav__tabs">
          <div className="nav__tabs-label">Explore</div>
          <div className="nav__tabs-row">
            {EXPLORE_TABS.map((tab, i) => (
              <button
                key={tab.id}
                className={`nav__tab${activeTab === tab.id ? ' nav__tab--active' : ''}`}
                onClick={() => setActiveTab(activeTab === tab.id ? null : tab.id)}
                style={{ '--tab-i': i }}
              >
                <svg
                  className="nav__tab-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={tab.icon} />
                </svg>
                <span className="nav__tab-text">{tab.label}</span>
                <span className="nav__tab-shine" />
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        {/* <div className={`nav__tab-panel${activeTab ? ' nav__tab-panel--open' : ''}`}>
          {activeTab && (
            <div className="nav__tab-panel-inner">
              <div className="nav__tab-panel-title">
                {EXPLORE_TABS.find((t) => t.id === activeTab)?.label}
              </div>
              <div className="nav__tab-panel-body">Coming Soon</div>
            </div>
          )}
        </div> */}

{/* Tab content */}
{activeTab && (
  <div className="nav__tab-content" key={activeTab}>
    {/* People — section links */}
    {activeTab === 'people' && (
      <div className="nav__tc-people">
        {NAV_SECTIONS.map((section, i) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`nav__tc-player${activeSection === section.id ? ' nav__tc-player--active' : ''}`}
            style={{ '--tc-i': i }}
            onClick={(e) => { e.preventDefault(); scrollToSection(section.id); }}
          >
            {section.label}
          </a>
        ))}
      </div>
    )}

    {/* Images — grid */}
    {activeTab === 'images' && (
      <div className="nav__tc-images">
        {IMAGES.map((img, i) => (
          <div key={img.id} className="nav__tc-img" style={{ '--tc-i': i }}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    )}

    {/* Trailers — video cards */}
    {activeTab === 'trailers' && (
      <div className="nav__tc-trailers">
        {TRAILERS.map((t, i) => (
          <a key={t.id} href={t.url} target="_blank" rel="noopener noreferrer"
            className="nav__tc-trailer" style={{ '--tc-i': i }}>
            <div className="nav__tc-trailer-thumb">
              <img src={t.thumbnail} alt={t.title} />
              <div className="nav__tc-trailer-play">▶</div>
              <span className="nav__tc-trailer-dur">{t.duration}</span>
              {t.isNew && <span className="nav__tc-trailer-new">NEW</span>}
            </div>
            <div className="nav__tc-trailer-info">
              <span className="nav__tc-trailer-title">{t.title}</span>
              <span className="nav__tc-trailer-date">{t.date}</span>
            </div>
          </a>
        ))}
      </div>
    )}

    {/* Downloads — coming soon */}
    {activeTab === 'downloads' && (
      <div className="nav__tc-coming">
        <span className="nav__tc-coming-title">Downloads</span>
        <span className="nav__tc-coming-sub">Wallpapers, screenshots & more coming soon</span>
      </div>
    )}
  </div>
)}
        {/* ─── Section divider ─── */}
        {/* <div className="nav__sidebar-divider">
          <span className="nav__sidebar-divider-line" />
          <span className="nav__sidebar-divider-text">Navigate</span>
          <span className="nav__sidebar-divider-line" />
        </div> */}
        <div className="nav__sidebar-divider">
          <span className="nav__sidebar-divider-line" />
          <span className="nav__sidebar-divider-text">
            Navigate
            <span className="nav__sidebar-divider-counter">
              {activeSectionIndex}/{String(NAV_SECTIONS.length).padStart(2, '0')}
            </span>
          </span>
          <span className="nav__sidebar-divider-line" />
        </div>

        {/* ─── Navigation Links ─── */}
        <div className="nav__sidebar-links">
          {NAV_SECTIONS.map((section, i) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`nav__link${activeSection === section.id ? ' nav__link--active' : ''}`}
              style={{ '--link-i': i }}
              onClick={(e) => { e.preventDefault(); scrollToSection(section.id); }}
            >
              <span className="nav__link-idx">{section.index}</span>
              <span className="nav__link-body">
                <span className="nav__link-name">{section.label}</span>
                <span className="nav__link-sub">{section.desc}</span>
              </span>
              {activeSection === section.id && (
                <span className="nav__link-badge">
                  <span className="nav__link-badge-dot" />
                </span>
              )}
              <span className="nav__link-bar" />
              <span className="nav__link-fill" />
            </a>
          ))}
        </div>

        {/* ─── Footer ─── */}
        <div className="nav__sidebar-footer">
          <div className="nav__footer-meta">
            <div className="nav__footer-release">
              <span className="nav__footer-release-label">Release</span>
              <span className="nav__footer-release-val">February, 2026</span>
            </div>
            <div className="nav__footer-chips">
              {/* <span className="nav__chip">PS5</span>
              <span className="nav__chip">Xbox</span>
              <span className="nav__chip">PC</span> */}
                <span className="nav__chip">
                  <img src={process.env.PUBLIC_URL + '/img/platforms/playstation.svg'} alt="PS5" className="nav__chip-icon" />
                  PS5
                </span>
                <span className="nav__chip">
                  <img src={process.env.PUBLIC_URL + '/img/platforms/xbox.svg'} alt="Xbox" className="nav__chip-icon" />
                  Xbox
                </span>
                <span className="nav__chip">
                  <img src={process.env.PUBLIC_URL + '/img/platforms/steam.svg'} alt="PC" className="nav__chip-icon" />
                  PC
                </span>
            </div>
          </div>
          {/* <button className="nav__cta" onClick={closeSidebar}>
            <span className="nav__cta-text">Wishlist Now</span>
            <svg className="nav__cta-arrow" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
            <span className="nav__cta-shimmer" />
          </button> */}
        </div>
      </aside>
      </div>
    </>
  );
};

export default Navbar;

// navbar design5 for checking design 4 is  better 
