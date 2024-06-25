import React, { useEffect, useState } from 'react';
import './Carousel.css';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // 10000ms = 10 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [slides.length]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      {/* <button onClick={goToPrevSlide} className='button-prev'>Prev</button> */}
      <div className="carousel-content">
        <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 105}%)` }}>
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <div className="slide-left">
                <img src={slide.image1} alt="Slide" />
              </div>
              <div className="slide-right">
                <div className='container-text-right'>
                  <h2>{slide.title}</h2>
                  <p>{slide.text}</p>
                </div>
                
                <img src={slide.image2} alt="Slide bottom" className="bottom-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <button onClick={goToNextSlide} className='button-next'>Next</button> */}
    </div>
  );
};

export default Carousel;
