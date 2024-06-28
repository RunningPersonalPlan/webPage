import React from 'react';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel,EffectFade,Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import "swiper/css/mousewheel"
import "swiper/css/autoplay"
import './Carousel.css';

const Carousel = ({ slides }) => {
 
  return (
    
    <Swiper 
    className="carousel"
    spaceBetween={50}
    slidesPerView={1}
    effect="fade" 
    
    autoplay={{ delay: 5000, disableOnInteraction: false }}
    mousewheel={{ forceToAxis: true }}
    pagination={{
      clickable: true,
    }}
    
    modules={[Autoplay, Mousewheel,EffectFade,Pagination]} 

    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    >
      {/* <button onClick={goToPrevSlide} className='button-prev'>Prev</button> */}
      <div className="carousel-content">
        
          {slides.map((slide, index) => (
            <SwiperSlide className="slide bg-white" key={index}>
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
            </SwiperSlide>
          ))}
        
      </div>
      {/* <button onClick={goToNextSlide} className='button-next'>Next</button> */}
    </Swiper>
    
    
  );
};

export default Carousel;
