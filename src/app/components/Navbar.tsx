'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// --- Reusable SVG Icon for the Food Truck ---
// Takes a className prop to allow for different sizes.
const FoodTruckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 100"
    className={className || "w-32 h-auto drop-shadow-xl"}
  >
    <path d="M10 40 H 150 V 80 H 180 L 190 95 H 10 Z" fill="#C0392B" stroke="#2E2E2E" strokeWidth="3" />
    <path d="M150 40 H 190 V 60 H 170 L 150 40 Z" fill="#F5F5F5" stroke="#2E2E2E" strokeWidth="3" />
    <rect x="155" y="45" width="25" height="15" fill="#87CEEB" stroke="#2E2E2E" strokeWidth="2" />
    <path d="M20 40 L 140 40 L 130 20 L 30 20 Z" fill="#F5F5F5" stroke="#2E2E2E" strokeWidth="3" />
    <path d="M35 20 V 40" stroke="#F1C40F" strokeWidth="5" />
    <path d="M55 20 V 40" stroke="#F1C40F" strokeWidth="5" />
    <path d="M75 20 V 40" stroke="#F1C40F" strokeWidth="5" />
    <path d="M95 20 V 40" stroke="#F1C40F" strokeWidth="5" />
    <path d="M115 20 V 40" stroke="#F1C40F" strokeWidth="5" />
    <circle cx="40" cy="95" r="12" fill="#2E2E2E" />
    <circle cx="150" cy="95" r="12" fill="#2E2E2E" />
    <circle cx="40" cy="95" r="5" fill="#F5F5F5" />
    <circle cx="150" cy="95" r="5" fill="#F5F5F5" />
  </svg>
);

// --- SVG Icons for Navbar Toggle ---
const MenuIcon = () => (
  <svg className="w-8 h-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = () => (
  <svg className="w-8 h-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);


// --- Navbar Component ---
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Specials', href: '#today' },
  { name: 'Menu', href: '#menu' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const logoVariants: Variants = {
    rest: { rotate: 0 },
    hover: { rotate: -8, transition: { type: 'spring', stiffness: 400, damping: 10 } }
  };

  const titleVariants: Variants = {
    rest: { x: 0 },
    hover: { x: 4, transition: { type: 'spring', stiffness: 400, damping: 10 } }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full bg-orange-400 backdrop-blur-md shadow-md z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a 
            href="#home" 
            className="flex items-center gap-2 text-gray-800 font-extrabold text-2xl select-none"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.div variants={logoVariants}>
              <FoodTruckIcon className="w-16 h-auto" />
            </motion.div>
<motion.div 
  className="flex flex-col leading-tight"
  variants={titleVariants}
>
  <span className="text-2xl font-extrabold text-gray-800">Masala Magic</span>
  <span className="text-sm text-gray-800 -mt-1">by Anita</span>
</motion.div>

          </motion.a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1 text-gray-700 font-semibold tracking-wide">
            {navLinks.map(({ name, href }) => (
              <li key={name}>
                 <a href={href} className="px-4 py-2 rounded-md hover:bg-orange-100/50 hover:text-orange-600 transition-colors duration-300">
                  {name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-orange-100/50 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden bg-white/95 backdrop-blur-md shadow-inner"
            >
              <ul className="flex flex-col gap-4 px-6 py-8 text-gray-700 font-semibold text-lg">
                {navLinks.map(({ name, href }) => (
                  <li key={name} onClick={() => setIsOpen(false)}>
                    <a href={href} className="block py-2 hover:text-orange-600 transition-colors duration-200">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}