import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RotatingText from './RotatingText';
import HeroImage from '../../images/image-2.png';

const Hero = () => {
  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 md:space-y-12">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Refining Healthcare
            </h1>
            <RotatingText />
            <div className="flex items-center gap-4 md:gap-8">
              <button className="bg-black text-white text-xl md:text-2xl px-8 py-4 rounded-full flex items-center gap-3 md:gap-4 transition-colors">
                Subscribe
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
              <Link to="/contact-us">
                <button className="border-2 border-white hover:bg-white hover:text-black text-xl md:text-2xl px-8 py-4 rounded-full transition-colors">
                  Get in touch
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content */}
          {/* <div className="relative">
            <img 
              src={HeroImage}
              alt="Medical Professional" 
              className="w-full h-[400px] md:h-[600px] object-cover rounded-3xl"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
