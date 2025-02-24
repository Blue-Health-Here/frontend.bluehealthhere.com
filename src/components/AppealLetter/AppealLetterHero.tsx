import React from 'react';
import AppealImage from '../../../images/Appeal Letter.png';

const AppealLetterHero = () => {
  return (
    <div className="relative h-[400px] md:h-[600px]">
      <img 
        src={AppealImage}
        alt="Appeal Letter"
        className="w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
          Generate Appeal Letter
        </h1>
      </div>
    </div>
  );
};

export default AppealLetterHero;
