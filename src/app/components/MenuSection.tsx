'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menu, MenuCategory } from '../data/menu';
import {icons} from '../data/icons';

const VegIcon = () => (
  <div className="w-4 h-4 mr-2 flex-shrink-0 border-2 border-green-500 rounded-md flex items-center justify-center">
    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
  </div>
);
const MeatIcon = () => (
  <div className="w-4 h-4 mr-2 flex-shrink-0 border-2 border-red-500 rounded-md flex items-center justify-center">
    <div className="w-2 h-2 bg-red-500" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
  </div>
);

export default function MenuSection() {
  const [openCategory, setOpenCategory] = useState<MenuCategory | null>(menu[0].category);

  return (
    <section id="menu" className="bg-[#fdfcfb] py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">Our Full Menu</h2>
          <p className="text-orange-900/70 text-lg max-w-xl mx-auto mb-12">
            Authentic recipes, fresh ingredients, and a touch of magic.
          </p>
        </motion.div>

        <div className="space-y-4">
          {menu.map((section) => {
            const isOpen = openCategory === section.category;

            return (
              <div key={section.category} className="bg-white rounded-2xl shadow-subtle overflow-hidden transition-all duration-300">
                <motion.button
                  onClick={() => setOpenCategory(isOpen ? null : section.category)}
                  className="w-full flex justify-between items-center p-6 text-left"
                  whileHover={{ backgroundColor: 'rgba(249, 115, 22, 0.05)' }}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-orange-500">{icons[section.category]}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">{section.category}</h3>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                      exit={{ height: 0, opacity: 0, transition: { duration: 0.3, ease: 'easeOut' } }}
                      className="overflow-hidden"
                    >
                      <div className="grid md:grid-cols-2 gap-x-6 gap-y-4 p-6 pt-2">
                        {section.items.map((item) => {
                          const isVeg = item.tags?.includes('Veg');
                          const isMeat = item.name.toLowerCase().includes('chicken') && !isVeg;

                          return (
                            <div key={item.name} className="py-3">
                              <div className="flex justify-between items-start gap-2">
                                <h4 className="font-semibold text-gray-800 flex items-center">
                                  {isVeg ? <VegIcon /> : isMeat ? <MeatIcon /> : <div className="w-4 mr-2" />}
                                  {item.name}
                                </h4>
                                <span className="text-gray-700 font-semibold whitespace-nowrap">{item.price}</span>
                              </div>
                              {item.description && (
                                <p className="text-gray-500 mt-1 text-sm pl-6">{item.description}</p>
                              )}
                              {item.tags && (
                                <div className="flex flex-wrap gap-2 mt-2 pl-6">
                                  {item.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                        tag === 'Veg'
                                          ? 'bg-green-100 text-green-800'
                                          : tag === 'GF'
                                          ? 'bg-sky-100 text-sky-800'
                                          : 'bg-orange-100 text-orange-800'
                                      }`}
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
