import React from 'react';
import RefineImage from '../../../images/about-image-3.png'

const RefineSection = () => {
  return (
    <div className="relative px-6 md:px-12">
      <img 
        src={RefineImage}
        alt="Professional Discussion"
        className="w-full h-[400px] md:h-[600px] rounded-2xl object-cover"
      />
    </div>
  );
}

export default RefineSection;
