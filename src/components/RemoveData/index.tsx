import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import RemoveDataHero from './RemoveDataHero';
import RemoveDataForm from './RemoveDataForm'

const RemoveData = () => {
  return (
    <div className="bg-white">
      <RemoveDataHero />
      <RemoveDataForm />
      <Footer />
    </div>
  );
};

export default RemoveData;
