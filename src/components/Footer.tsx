import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from '../../images/image 5.png';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-8 md:py-12">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Logo Section */}
        <div className="text-center mb-8 md:mb-12">
          <img
            src={Logo}
            alt="Blue Health Logo"
            className="mx-auto w-32 h-auto mb-2 md:mb-4"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12 mt-16 md:mt-24">
          {/* Contact Info */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Contact Info</h4>
            <p className="text-sm md:text-base text-gray-400 mb-2 md:mb-4">
              Blue Health,<br />
              180 TALMIDGE RD, EDISON NJ 08817
            </p>
            <a
              href="mailto:pa@bluehealthhere.com"
              className="text-sm md:text-base text-blue-600 hover:text-blue-700 transition"
            >
              pa@bluehealthhere.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Quick Links</h4>
            <ul className="space-y-2 md:space-y-4">
              <li>
                <Link 
                  to="/about-us" 
                  className="text-sm md:text-base text-gray-400 hover:text-blue-600 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact-us" 
                  className="text-sm md:text-base text-gray-400 hover:text-blue-600 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-gray-600 text-xs md:text-sm">
            &copy; 2024 Blue Health. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
