import React from 'react';
import AboutImage from '../../../images/about-image-2.png';

const HeroSection = () => {
  return (
    <div className="relative">
      <img 
        src={AboutImage}
        alt="Modern Medical Office"
        className="w-full h-full md:h-[600px] object-cover brightness-75"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">About Us</h1>
      </div>
    </div>
  );
}

export default HeroSection;
