import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <span className="footer__logo">CRICKET LEGENDS</span>
      <span className="footer__text">© {currentYear} All rights reserved</span>
    </footer>
  );
};

export default Footer;
