'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// --- Today's Specials Data ---
const dailySpecials = [
  { name: 'Butter Chicken Masala', desc: 'Tender chicken in creamy tomato-cashew gravy served with rice.', price: '$17.99', img: '/menu/spec1.png' },
  { name: 'Paneer Masala Panini', desc: 'Marinated paneer, naan, chutney, and peppers — grilled to perfection.', price: '$14.00', img: '/menu/spec2.png' },
  { name: 'Gobhi Pakora', desc: 'Cauliflower fritters deep-fried and served with tangy chutney.', price: '$7.99', img: '/menu/spec3.png' },
  { name: 'Mango Lassi', desc: 'A refreshing and creamy yogurt-based mango smoothie.', price: '$5.99', img: '/menu/spec4.png' },
];

// --- Today's Specials Section Component ---
export default function TodaySpecials() {
  return (
    <section id="today" className="py-24 bg-[#FFF8F0] text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">🔥 Today’s Specials</h2>
        <p className="text-orange-900/70 text-lg max-w-xl mx-auto mb-16">
          Handpicked dishes made fresh for you today — don’t miss out!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {dailySpecials.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-subtle hover:shadow-hovery transition-shadow duration-300 overflow-hidden flex flex-col group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="overflow-hidden rounded-t-2xl bg-white flex justify-center items-center" style={{ width: '100%', height: '170px' }}>
              <Image
                src={item.img}
                alt={item.name}
                width={240}
                height={170}
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out w-auto h-full"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.src = `https://placehold.co/400x250/FF7F50/FFFFFF?text=${item.name.replace(/\s/g, '+')}`;
                }}
              />
            </div>

            <div className="p-6 flex-grow flex flex-col text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{item.desc}</p>
              <p className="text-orange-600 font-bold text-xl mt-auto">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
