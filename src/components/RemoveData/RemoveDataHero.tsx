import React from 'react';
import RemoveImage from '../../../images/Remove.png';

const RemoveDataHero = () => {
  return (
    <div className="relative h-[400px] md:h-[600px]">
      <img 
        src={RemoveImage}
        alt="Medical Records"
        className="w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          Remove Your Data
        </h1>
      </div>
    </div>
  );
};

export default RemoveDataHero;
