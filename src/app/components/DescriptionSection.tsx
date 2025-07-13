'use client';

import { motion, Variants } from 'framer-motion';

export default function DescriptionSection() {
  // Variants with proper easing types
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] }, // easeOut cubic bezier
    },
  };

  const textBlockVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1], delay: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-br from-orange-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-3xl shadow-2xl my-16 overflow-hidden relative">
      {/* Background blobs */}
      <div
        className="absolute top-0 left-0 w-48 h-48 bg-orange-200 dark:bg-orange-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 bg-green-200 dark:bg-green-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
        style={{ transform: 'translate(50%, 50%)' }}
      />

      <motion.h2
        className="text-4xl md:text-6xl font-extrabold mb-16 text-center text-orange-700 dark:text-orange-400 tracking-tight leading-tight drop-shadow-lg relative z-10"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.5 }}
      >
        Welcome to Masala Magic - Authentic Indian Cuisine
      </motion.h2>

      {/* Chef & Description */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 relative z-10">
        <motion.div
          className="relative h-96 rounded-2xl shadow-xl overflow-hidden group transform hover:scale-[1.02] transition-transform duration-300"
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
          viewport={{ once: true, amount: 0.4 }}
        >
          <img
            src="https://placehold.co/800x600/F59E0B/FFFFFF?text=Chef+Anita+Cooking"
            alt="Chef Anita cooking Indian food"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
            <h3 className="text-4xl font-bold text-white drop-shadow-lg">
              Chef Anita&apos;s Culinary Journey
            </h3>
          </div>
        </motion.div>

        <motion.div
          className="space-y-8 text-lg leading-relaxed text-gray-800 dark:text-gray-300"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2, delayChildren: 0.3 },
            },
          }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p
            variants={textBlockVariants}
            className="bg-white/80 dark:bg-gray-700/80 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
          >
            मसाला मैजिक में आपका स्वागत है — featuring delicious, diverse, authentic Indian cuisine.
          </motion.p>
          <motion.p
            variants={textBlockVariants}
            className="bg-white/80 dark:bg-gray-700/80 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
          >
            Immerse yourself in the enchanting fusion of Indian tradition and innovation, where
            every delicious dish by Chef Anita Jogi tells a tale of exotic flavors crafted to
            perfection. Discover the art of authentic Indian cuisine at Masala Magic – where food
            excellence reigns supreme.
          </motion.p>
          <motion.p
            variants={textBlockVariants}
            className="font-semibold text-orange-700 dark:text-orange-400 text-xl bg-white/80 dark:bg-gray-700/80 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
          >
            पूरे भारत से प्रसिद्ध भोजन — Famous dishes from all regions of India.
          </motion.p>
        </motion.div>
      </div>

      {/* Special Event & Commitment */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 relative z-10">
        <motion.div
          className="space-y-8 text-lg leading-relaxed text-gray-800 dark:text-gray-300 order-2 lg:order-1"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2, delayChildren: 0.3 },
            },
          }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            variants={cardVariants}
            className="bg-orange-100 dark:bg-orange-900 p-8 rounded-2xl shadow-xl border border-orange-300 dark:border-orange-700 transform hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-3xl font-bold text-orange-800 dark:text-orange-300 mb-4">
              Evening on River Street Festival! 🌟
            </h3>
            <p className="mb-4">
              Each Wednesday night, come to downtown Elk Rapids for an Evening on River Street
              festival. I will be there with a delicious, special menu of authentic Indian food.
            </p>
            <p className="font-semibold text-orange-900 dark:text-orange-200">
              Look for my pop-up near Corner Drugs at the corner of River and Cedar Streets.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-green-100 dark:bg-green-900 p-8 rounded-2xl shadow-xl border border-green-300 dark:border-green-700 transform hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-3xl font-bold text-green-800 dark:text-green-300 mb-4">
              Our Commitment: Fresh & Healthy 🌱
            </h3>
            <p className="mb-4">
              I do not serve fast food. My cuisine has abundant fresh ingredients and no shortcuts
              in preparation.
            </p>
            <p>
              Indian food is very healthy. I prepare gluten-free, dairy-free, vegetarian, and vegan
              options, and I can adjust the hotness to your liking.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative h-96 rounded-2xl shadow-xl overflow-hidden group order-1 lg:order-2 transform hover:scale-[1.02] transition-transform duration-300"
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
          viewport={{ once: true, amount: 0.4 }}
        >
          <img
            src="https://placehold.co/800x600/22C55E/FFFFFF?text=Fresh+Ingredients"
            alt="Fresh Indian spices and ingredients"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
            <h3 className="text-4xl font-bold text-white drop-shadow-lg">Quality You Can Taste</h3>
          </div>
        </motion.div>
      </div>

      {/* Attention Box */}
      <motion.div
        className="bg-gradient-to-r from-red-500 to-orange-500 dark:from-red-800 dark:to-orange-800 text-white p-10 rounded-3xl shadow-2xl text-center font-bold relative z-10
                   border-4 border-white dark:border-gray-700
                   transform scale-100 hover:scale-[1.02] transition-transform duration-300 ease-out"
        initial={{ opacity: 0, y: 80, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1], delay: 0.3 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <p className="text-3xl md:text-4xl mb-4 font-extrabold uppercase">
          🚨 ATTENTION! Groups of 10 or More 🚨
        </p>
        <p className="text-xl md:text-2xl mb-5">
          For faster service, please call in your order at least 20 minutes before arriving.
        </p>
        <p className="text-4xl md:text-5xl font-extrabold">
          Call:{' '}
          <a
            href="tel:+12313138934"
            className="underline hover:text-gray-200 transition-colors duration-200"
          >
            (231) 313-8934
          </a>
        </p>
      </motion.div>
    </section>
  );
}
