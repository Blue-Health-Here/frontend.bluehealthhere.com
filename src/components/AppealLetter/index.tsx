import React from 'react';
import Footer from '../Footer';
import AppealLetterHero from './AppealLetterHero';
import AppealLetterForm from './AppealLetterForm';

const AppealLetter = () => {
  return (
    <div className="bg-white">
      <AppealLetterForm />
      <AppealLetterHero />
      <Footer />
    </div>
  );
};

export default AppealLetter;
