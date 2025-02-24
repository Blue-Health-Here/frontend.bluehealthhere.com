import React from 'react';
import ProgressImage from '../../../images/Appeal Letter.png';

const ProgressNotesHero = () => {
  return (
    <div className="relative h-[400px] md:h-[600px]">
      <img 
        src={ProgressImage}
        alt="Progress Notes"
        className="w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          Progress Notes Analyzer
        </h1>
      </div>
    </div>
  );
};

export default ProgressNotesHero;
