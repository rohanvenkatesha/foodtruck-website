'use client';

import React, { useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Shuffle } from 'lucide-react';
import { eventPhotos, initialPlacements, GalleryEvent } from '../data/gallery';
import Image from 'next/image'

// --- Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100,
    },
  },
};

// --- Sub-Components ---
// const CategoryIcon: React.FC<{ category: GalleryEvent['category'] }> = ({ category }) => {
//   const iconProps = { className: 'w-4 h-4 text-orange-600' };
//   switch (category) {
//     case 'Event': return <Sun {...iconProps} />;
//     case 'People': return <Users {...iconProps} />;
//     case 'Vibes': return <Music {...iconProps} />;
//     default: return null;
//   }
// };

const CollageItem: React.FC<{
  item: GalleryEvent;
  placement: typeof initialPlacements[0];
  dragConstraints: React.RefObject<Element | null>;
}> = ({ item, placement, dragConstraints }) => {
  return (
    <motion.div
      variants={itemVariants}
      layout
      className="group absolute cursor-grab active:cursor-grabbing"
      style={{
        gridColumn: placement.gridColumn,
        gridRow: placement.gridRow,
        zIndex: placement.zIndex,
      }}
      drag
      dragConstraints={dragConstraints}
      dragElastic={0.1}
      whileHover={{ scale: 1.05, zIndex: 10, transition: { duration: 0.2 } }}
      whileDrag={{ zIndex: 11, scale: 1.1 }}
    >
      <div
        className="relative w-full h-full rounded-xl shadow-2xl overflow-hidden transition-transform duration-300 ease-in-out"
        style={{ transform: `rotate(${placement.rotation}deg)` }}
      >
        <Image
          src={item.img}
          alt={item.title}
          width={240}
          height={240}
          className="w-full h-full object-cover pointer-events-none"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = `https://placehold.co/600x800/fef3c7/fb923c?text=Masala+Magic!`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 p-4 z-20 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-lg font-bold text-white drop-shadow-lg">{item.title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

const OverlappingCollage: React.FC<{
  items: GalleryEvent[];
  placements: typeof initialPlacements;
  dragConstraints: React.RefObject<Element | null>
}> = ({ items, placements, dragConstraints }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative grid grid-cols-12 grid-rows-8 gap-4 w-full"
      style={{ aspectRatio: '4 / 3' }}
    >
      {items.map((item, index) => (
        <CollageItem
          key={item.id}
          item={item}
          placement={placements[index]}
          dragConstraints={dragConstraints}
        />
      ))}
    </motion.div>
  );
};

// --- Main Exported Component ---
const GalleryGrid: React.FC = () => {
  const [placements, setPlacements] = useState(initialPlacements);
  const collageContainerRef = useRef<HTMLDivElement>(null);


  const shuffleCollage = () => {
    const shuffled = [...placements].sort(() => Math.random() - 0.5);
    setPlacements(shuffled);
  };

  return (
    <div className="bg-orange-50 min-h-screen p-4 sm:p-8 font-sans flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2">
            The <span className="text-orange-500">Masala Magic</span> Vibe
          </h1>
          <p className="text-lg text-gray-600">Good Food, Great Company, Unforgettable Moments.</p>
        </header>
        <main ref={collageContainerRef} className="w-full relative">
          <OverlappingCollage
            items={eventPhotos}
            placements={placements}
            dragConstraints={collageContainerRef}
          />
        </main>
        <footer className="text-center mt-8">
          <button
            onClick={shuffleCollage}
            className="bg-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
          >
            <Shuffle className="w-5 h-5 mr-2" />
            Shuffle Layout
          </button>
        </footer>
      </div>
    </div>
  );
};

export default GalleryGrid;
