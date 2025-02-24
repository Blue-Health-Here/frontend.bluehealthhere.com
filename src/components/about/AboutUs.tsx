import React from 'react';
import HeroSection from './HeroSection'
import TopNotchSection from './TopNotchSection';
import RefineSection from './RefineSection';
import Features from '../Features';
import Footer from '../Footer'; 

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <TopNotchSection />
      <RefineSection />
      <Features />
      <Footer />
    </div>
  );
};

export default AboutUs;