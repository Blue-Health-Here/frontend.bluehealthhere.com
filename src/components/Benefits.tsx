import React from 'react';
import { Link } from 'react-router-dom';
import BenefitImage from '../../images/image-3.png';

const Benefits = () => {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          {/* <div className="space-y-8 md:space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Stop struggling <br />and <span className="text-black italic">start thriving</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-[750px]">
              At Blue Health, we believe no one should face healthcare challenges alone. As a trusted medical insurance company, we specialize in helping you navigate and fight health insurance denials.
            </p>
            <div className="mt-4 md:mt-8">
              <Link to="/about-us">
                <button className="bg-black text-white text-sm md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-full flex items-center gap-3 transition-colors">
                  Learn More
                </button>
              </Link>
            </div>
          </div> */}

          {/* Right Content */}
          <div className="relative">
            <img 
              src={BenefitImage}
              alt="Medical Professional" 
              className="w-full h-[400px] md:h-[600px] object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
