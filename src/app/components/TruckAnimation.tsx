/*
* =================================================================
* INSTRUCTIONS
* =================================================================
*
* 1. Create a new file at: `src/app/components/TruckAnimation.tsx`
* and paste the code for the TruckAnimation component into it.
*
* 2. Replace the entire content of your existing `src/app/page.tsx`
* with the updated code below to include the new animation.
*
* This will add a fun, animated food truck that drives across
* the screen as the user scrolls down.
*
*/


/*
* =================================================================
* FILE: src/app/components/TruckAnimation.tsx (NEW FILE)
* =================================================================
*/
'use client';

import { motion } from 'framer-motion';
import { FaUtensils } from 'react-icons/fa';

// A simple, stylized SVG of a food truck.
// You can replace this with any SVG you like.
const FoodTruckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 100"
    className="w-48 h-auto drop-shadow-lg"
  >
    {/* Truck Body */}
    <path d="M10 40 H 150 V 80 H 180 L 190 95 H 10 Z" fill="#FF7A00" stroke="#2E2E2E" strokeWidth="3" />
    {/* Cabin */}
    <path d="M150 40 H 190 V 60 H 170 L 150 40 Z" fill="#F5F5F5" stroke="#2E2E2E" strokeWidth="3" />
    <rect x="155" y="45" width="25" height="15" fill="#87CEEB" stroke="#2E2E2E" strokeWidth="2" />
    {/* Awning */}
    <path d="M20 40 L 140 40 L 130 20 L 30 20 Z" fill="#F5F5F5" stroke="#2E2E2E" strokeWidth="3" />
    {/* Awning Stripes */}
    <path d="M35 20 V 40" stroke="#FF7A00" strokeWidth="5" />
    <path d="M55 20 V 40" stroke="#FF7A00" strokeWidth="5" />
    <path d="M75 20 V 40" stroke="#FF7A00" strokeWidth="5" />
    <path d="M95 20 V 40" stroke="#FF7A00" strokeWidth="5" />
    <path d="M115 20 V 40" stroke="#FF7A00" strokeWidth="5" />
    {/* Wheels */}
    <circle cx="40" cy="95" r="12" fill="#2E2E2E" />
    <circle cx="150" cy="95" r="12" fill="#2E2E2E" />
    <circle cx="40" cy="95" r="5" fill="#F5F5F5" />
    <circle cx="150" cy="95" r="5" fill="#F5F5F5" />
  </svg>
);


export default function TruckAnimation() {
  return (
    <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-900 overflow-hidden">
      {/* The Road */}
      <div className="absolute bottom-0 w-full h-24 bg-gray-700 dark:bg-gray-800" />
      <div className="absolute bottom-10 w-full border-b-4 border-dashed border-yellow-400" />

      {/* The animated truck */}
      <motion.div
        className="absolute bottom-12"
        initial={{ x: '-100%' }}
        whileInView={{ x: '110%' }}
        transition={{ duration: 5, ease: 'linear', repeat: Infinity }}
        viewport={{ once: true }}
      >
        <FoodTruckIcon />
      </motion.div>
    </div>
  );
}

