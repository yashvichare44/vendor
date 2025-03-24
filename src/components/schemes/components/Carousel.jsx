import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Carousel.css';

const images = [
  "https://www.myscheme.gov.in/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F1-full.webp&w=1920&q=75",
  "https://www.myscheme.gov.in/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F2-full.webp&w=1920&q=75",
  "https://www.myscheme.gov.in/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F3-full.webp&w=1920&q=75"
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {/* Slides */}
      {images.map((image, index) => (
        <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button className="nav-btn left" onClick={prevSlide}><ChevronLeft size={24} /></button>
      <button className="nav-btn right" onClick={nextSlide}><ChevronRight size={24} /></button>

      {/* Dots */}
      <div className="dots">
        {images.map((_, index) => (
          <button key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)}></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
