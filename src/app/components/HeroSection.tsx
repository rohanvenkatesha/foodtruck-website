'use client';

import { motion } from 'framer-motion';

// --- SVG Icon for the Food Truck ---
const FoodTruckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 100"
    className="w-32 h-auto drop-shadow-xl"
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

// --- Hero Section Component ---
export default function HeroSection() {
  const titleText = 'Masala Magic by Anita';

  const splitTextIntoMotions = (text: string) =>
    text.split('').map((char, i) => (
      <motion.span
        key={i}
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{ display: 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ));

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/bg3.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent backdrop-blur-sm" />
      </div>

      {/* Content Overlay */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <motion.div
          className="mb-6"
          initial={{ x: '-150vw' }}
          animate={{ x: '0' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <FoodTruckIcon />
        </motion.div>
<motion.h1
  className=" text-2xl md:text-7xl font-bold tracking-tight uppercase mb-4 bg-gradient-to-r from-orange-300 via-orange-500 to-yellow-400 text-transparent bg-clip-text animate-gradient"
  style={{ backgroundSize: '200% 200%' }}
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
  }}
>
  {splitTextIntoMotions(titleText)}
</motion.h1>


        <motion.p
          className="mt-2 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto"
          style={{ textShadow: '1px 1px 5px rgba(223, 84, 14, 0.5)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
         From the heart of India to the streets of Elk Rapids — spice up your day!
        </motion.p>

        <motion.div
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
<motion.a
  href="#today"
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
  className="group inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold bg-orange-600 text-white shadow-lg hover:shadow-xl hover:bg-orange-500 transition-all duration-300"
>
  Today&apos;s Specials
</motion.a>

<motion.a
  href="#menu"
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
  className="group inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold bg-white/20 border border-white/50 text-white backdrop-blur-md shadow-lg hover:shadow-xl hover:bg-white/30 transition-all duration-300"
>
  Full Menu
</motion.a>

        </motion.div>
      </motion.div>
    </section>
  );
}
