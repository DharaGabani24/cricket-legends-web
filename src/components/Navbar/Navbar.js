import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      {/* <a href="#home" className="nav__logo">GOC</a> */}
      <a href="#home" className="nav__logo">
        <img 
          src={process.env.PUBLIC_URL + '/img/GOC_logo.webp'} 
          alt="Gods of Cricket" 
          className="nav__logo-img"
        />
      </a>
      <ul className="nav__menu">
        <li><a href="#features" className="nav__link">Features</a></li>
        <li><a href="#stadiums" className="nav__link">Stadiums</a></li>
        <li><a href="#preorder" className="nav__link">Pre-Order</a></li>
      </ul>
      <button className="nav__menu-btn" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;
