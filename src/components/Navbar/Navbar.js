// Navbar — Design 4 Stacked Cards///
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


const Navbar = ({ visible = true }) => {
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


         {/* {renderContent()} */}
         <div className="nm__ov-content-inner">
           {renderContent()}
           </div>


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


export default Navbar;