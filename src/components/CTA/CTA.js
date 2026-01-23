import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta" id="preorder">
      <span className="section__label">Be First</span>
      <h2 className="cta__title">PRE-ORDER NOW</h2>
      <p className="cta__text">
        Champion Edition includes exclusive legendary player skins, 
        early access, and bonus stadium pack.
      </p>
      <button className="cta__button">Reserve Your Copy</button>
    </section>
  );
};

export default CTA;
