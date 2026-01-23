import React from 'react';

const GallerySlide = ({ image, label, title, subtitle }) => {
  return (
    <div className="gallery__slide">
      <div className="gallery__slide-image">
        <img src={process.env.PUBLIC_URL + image} alt={title} />
      </div>
      <div className="gallery__slide-overlay"></div>
      <div className="gallery__slide-content">
        <span className="gallery__slide-label">{label}</span>
        <h3 className="gallery__slide-title">{title}</h3>
        <p className="gallery__slide-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default GallerySlide;
