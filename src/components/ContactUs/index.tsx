import React from 'react';
import Footer from '../Footer';
import ContactUsHero from './ContactUsHero';
import ContactUsForm from './ContactUsForm';

const ContactUs = () => {
  return (
    <div className="bg-white">
      <ContactUsForm />
      <ContactUsHero />
      <Footer />
    </div>
  );
};

export default ContactUs;
