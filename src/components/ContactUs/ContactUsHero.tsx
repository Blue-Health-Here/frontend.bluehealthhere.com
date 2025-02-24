import React from 'react';
import ContactImage from '../../../images/Contact us.png';

const ContactUsHero = () => {
  return (
    <div className="relative h-[400px] md:h-[600px]">
      <img 
        src={ContactImage}
        alt="Contact Us"
        className="w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          Contact Us
        </h1>
      </div>
    </div>
  );
};

export default ContactUsHero;
