import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    // { label: 'Remove Your Data', href: '/remove-your-data' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Careers', href: '/careers' },
  ];

  return (
    <nav className="w-full bg-black text-white py-6 md:py-8">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src={Logo}
              alt="Prior Auth Support AI Logo"
              className="mx-auto lg:mx-0 w-40 h-auto mb-2"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
          <div className="bg-zinc-900 rounded-full px-8 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-lg font-medium hover:text-gray-300 transition-colors mx-4"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* User Icon */}
        <div className="hidden md:block">
          <User className="w-8 h-8 cursor-pointer hover:text-gray-300 transition-colors" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-black">
          <div className="px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block text-base hover:text-gray-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-700">
              <User className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
