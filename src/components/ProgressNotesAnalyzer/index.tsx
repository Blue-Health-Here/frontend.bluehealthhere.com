import React from 'react';
import Footer from '../Footer';
import ProgressNotesHero from './ProgressNotesHero';
import ProgressNotesForm from './ProgressNotesForm';

const ProgressNotesAnalyzer = () => {
  return (
    <div className="bg-white">
      <ProgressNotesForm />
      <ProgressNotesHero />
      <Footer />
    </div>
  );
};

export default ProgressNotesAnalyzer;
