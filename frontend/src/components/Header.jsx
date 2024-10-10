import React from 'react';
import logo from '../assets/logo.png'; // Ensure your logo path is correct

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-16 w-16" /> {/* Increased logo size */}
          <span className="text-3xl font-bold text-black">INFINIX CORP.</span> {/* Increased text size */}
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-black text-lg hover:text-purple-500">Home</a> {/* Increased text size */}
          <a href="/rooms" className="text-black text-lg hover:text-purple-500">Rooms</a>
          <a href="/pricing" className="text-black text-lg hover:text-purple-500">Pricing</a>
          <a href="/about" className="text-black text-lg hover:text-purple-500">About Us</a>
          <a href="/contact" className="text-black text-lg hover:text-purple-500">Contact</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button id="mobile-menu-btn" className="text-black hover:text-purple-500 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation (hidden by default) */}
      <nav id="mobile-menu" className="md:hidden bg-white border-t border-gray-200 hidden">
        <a href="/" className="block py-2 px-4 text-black text-lg hover:bg-purple-500 hover:text-white">Home</a>
        <a href="/rooms" className="block py-2 px-4 text-black text-lg hover:bg-purple-500 hover:text-white">Rooms</a>
        <a href="/pricing" className="block py-2 px-4 text-black text-lg hover:bg-purple-500 hover:text-white">Pricing</a>
        <a href="/about" className="block py-2 px-4 text-black text-lg hover:bg-purple-500 hover:text-white">About Us</a>
        <a href="/contact" className="block py-2 px-4 text-black text-lg hover:bg-purple-500 hover:text-white">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
