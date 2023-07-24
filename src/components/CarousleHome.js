import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';


import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  const images = [
    { src: '/images/f1.jpeg', alt: 'Image 1' },
    { src: '/images/f2.jpeg', alt: 'Image 2' },
    { src: '/images/f3.jpeg', alt: 'Image 3' },
  ];


  return (
    <div className=' overflow-hidden'>
      <Carousel
        showArrows={false}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={10000} // Change interval as needed
        transitionTime={500} // Change transition time as needed
      >
        {
          images.map((image, index) => (
            <div key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className='h-[39rem] object-center'
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold">
                Welcome To Bin Mushtaq
              </div>
            </div>
          ))
        }
      </Carousel>
    </div >
  );
};

export default CarouselComponent;