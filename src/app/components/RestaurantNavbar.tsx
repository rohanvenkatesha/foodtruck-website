'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiKnifeFork } from 'react-icons/gi';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'Specials', href: '#specials' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function RestaurantNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full bg-gradient-to-r from-orange-600 to-orange-400/95 backdrop-blur-md shadow-lg z-50"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 text-white font-extrabold text-2xl select-none drop-shadow-lg">
            <GiKnifeFork className="text-3xl animate-pulse" />
            <span>Masala Magic</span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-8 text-white font-semibold tracking-wide">
            {navLinks.map(({ name, href }) => (
              <li key={name} className="relative group cursor-pointer">
                <a href={href} className="py-2 inline-block">
                  {name}
                </a>
                {/* Animated underline */}
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 rounded-full scale-x-0 origin-left"
                  initial={false}
                  animate={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
              </li>
            ))}
          </ul>

          {/* Reserve Button */}
          <a
            href="#reservation"
            className="hidden md:inline-block bg-yellow-400 text-orange-900 font-bold px-5 py-2 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-out select-none"
          >
            Reserve Table
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md text-white hover:bg-orange-500/70 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            {isOpen ? <HiX className="w-8 h-8" /> : <HiMenu className="w-8 h-8" />}
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
              className="md:hidden bg-orange-500/90 backdrop-blur-md shadow-inner"
            >
              <ul className="flex flex-col gap-6 px-6 py-8 text-white font-semibold text-lg">
                {navLinks.map(({ name, href }) => (
                  <li key={name} onClick={() => setIsOpen(false)}>
                    <a href={href} className="block hover:text-yellow-300 transition-colors duration-200">
                      {name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#reservation"
                    className="block bg-yellow-400 text-orange-900 font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-out select-none text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Reserve Table
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
