import React from 'react';
import Footer from '../Footer';
import MedicalNecessityHero from './MedicalNecessityHero';
import MedicalNecessityForm from './MedicalNecessityForm';

const MedicalNecessityLetter = () => {
  return (
    <div className="bg-white">
      <MedicalNecessityForm />
      <MedicalNecessityHero />
      <Footer />
    </div>
  );
};

export default MedicalNecessityLetter;
