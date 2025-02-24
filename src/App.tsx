import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import AboutUs from './components/about/AboutUs';
import RemoveData from './components/RemoveData';
import ContactUs from './components/ContactUs';
import AppealLetter from './components/AppealLetter';
import MedicalNecessityLetter from './components/MedicalNecessityLetter';
import ProgressNotesAnalyzer from './components/ProgressNotesAnalyzer';
import SearchCriteria from './components/SearchCriteria';


function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Features />
      <Hero />
      {/* <Benefits /> */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/remove-your-data" element={<RemoveData />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/appeal-letter" element={<AppealLetter />} />
        <Route path="/medical-necessity-letter" element={<MedicalNecessityLetter />} />
        <Route path="/progress-notes-analyzer" element={<ProgressNotesAnalyzer />} />
        <Route path="/search-criteria" element={<SearchCriteria />} />
      </Routes>
    </Router>
  );
}

export default App;
