import React, { useState } from 'react';
import Navigation from './Navigation';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to control the mobile menu visibility

  return (
    <header className="bg-[#042d62] text-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left: Application Title */}
        <h1 className="font-heading text-xl md:text-2xl">DevDeploy!</h1>

        {/* Right: Hamburger menu or Desktop Navigation */}
        <div className="relative">
          {/* Mobile Hamburger Menu */}
          <button
            className="text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {/* Hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5h18M3 12h18m-6 7h6"
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          {menuOpen && (
            <div
              className="absolute top-full right-0 bg-[#042d62] text-white shadow-md rounded-lg py-2 px-4 z-10"
              onClick={() => setMenuOpen(false)} // Close menu when clicked anywhere in this container
            >
              <Navigation isMobile={true} />
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
