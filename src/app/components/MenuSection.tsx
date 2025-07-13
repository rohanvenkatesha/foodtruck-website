'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Helper: Modern Icons for Menu Categories ---
const icons = {
  FRITTERS: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.96 12.2a2.5 2.5 0 0 1-3.41 3.41 2.5 2.5 0 0 1-3.41-3.41 2.5 2.5 0 0 1 3.41-3.41 2.5 2.5 0 0 1 3.41 3.41Z"/><path d="M12.2 11.96a2.5 2.5 0 0 1 3.41-3.41 2.5 2.5 0 0 1 3.41 3.41 2.5 2.5 0 0 1-3.41 3.41 2.5 2.5 0 0 1-3.41-3.41Z"/><path d="M12 22a4.5 4.5 0 0 0 4.5-4.5c0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5A4.5 4.5 0 0 0 12 22Z"/><path d="M18 6.5a4.5 4.5 0 0 0-4.5-4.5c-2.49 0-4.5 2.01-4.5 4.5A4.5 4.5 0 0 0 18 6.5Z"/></svg>,
  PANINI: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1"/><path d="M22 11H2"/></svg>,
  WRAPS: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.4 16.5c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L12 6l-4.6 11.9c-.2.5-.8.8-1.3.6l-1.9-.7c-.5-.2-.8-.8-.6-1.3l4.6-12c.2-.5.8-.8 1.3-.6l1.9.7c.5.2.8.8.6 1.3Z"/></svg>,
  'FLAT BREAD': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M2 12a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v0a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5Z"/></svg>,
  'STREET FOOD': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11V9a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2"/><path d="M15 11V9a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2"/><path d="M4 15h16"/><path d="M2 19h20"/><path d="m5 15-1-3"/><path d="m19 15 1-3"/></svg>,
  'MUST TRY': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.57 3.1a.9.9 0 0 0-1.14 0L9.5 4.85a.9.9 0 0 1-1.08.22l-1.85-.93a.9.9 0 0 0-1.08.22L3.65 6.2a.9.9 0 0 0 .22 1.08l1.63 1.63a.9.9 0 0 1 0 1.27l-1.63 1.63a.9.9 0 0 0-.22 1.08l1.85 1.85a.9.9 0 0 0 1.08.22l1.85-.93a.9.9 0 0 1 1.08.22l1.93 1.75a.9.9 0 0 0 1.14 0l1.93-1.75a.9.9 0 0 1 1.08-.22l1.85.93a.9.9 0 0 0 1.08-.22l1.85-1.85a.9.9 0 0 0 .22-1.08L18.35 12a.9.9 0 0 1 0-1.27l1.63-1.63a.9.9 0 0 0 .22-1.08L18.15 6.2a.9.9 0 0 0-1.08-.22l-1.85.93a.9.9 0 0 1-1.08-.22Z"/><path d="m15 12-3 3-3-3"/></svg>,
  'DESSERT & DRINK': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M22 12h-4"/><path d="M6 12H2"/><path d="M17 17l-1.5-1.5"/><path d="M8.5 8.5 7 7"/><path d="M17 7l-1.5 1.5"/><path d="M8.5 15.5 7 17"/><path d="M12 12a3.5 3.5 0 0 0-3.5 3.5c0 2.25 2.5 4 3.5 4s3.5-1.75 3.5-4A3.5 3.5 0 0 0 12 12Z"/></svg>,
};

// --- Menu Data ---
const menu = [ { category: 'FRITTERS', items: [ { name: 'Chicken Masala Fritters (3 pc.)', price: '$7.99', description: 'Marinated chicken breast cutlets with Indian spices, served with cilantro chutney.' }, { name: 'Samosa / Chana Masala Samosa', price: '$7.99', description: 'Crispy pastry filled with spiced vegetables. Served with cilantro and tamarind dips.', tags: ['Veg'] }, { name: 'Gobhi Pakora / Cauliflower Fritters', price: '$7.99', description: 'Cauliflower florets in a seasoned batter, deep-fried. Served with tamarind dip.', tags: ['Veg'] } ] }, { category: 'PANINI', items: [ { name: 'Chicken Masala Panini', price: '$14', description: 'Marinated chicken, naan, mayo, cilantro chutney, and seasoned veggies.' }, { name: 'Paneer Masala Panini', price: '$14', description: 'Marinated paneer, naan, mayo, chutney, and seasoned veggies.', tags: ['Veg'] } ] }, { category: 'WRAPS', items: [ { name: 'Chicken or Paneer Masala Wrap', price: '$12', description: 'Your choice of marinated chicken or paneer in a roti paratha with mayo, chutney, and veggies.' } ] }, { category: 'FLAT BREAD', items: [ { name: 'Naan or Garlic Naan', price: '$3.75' }, { name: 'Roti Paratha', price: '$2.50' }, { name: 'Besan Chilla', price: '$5', description: 'A savory pancake made from chickpea flour and seasonings.', tags: ['GF', 'Vegan'] }, { name: 'Naan Chips with Chutney Dip', price: '$9', description: 'Crispy naan chips served with cilantro and tamarind dips.' } ] }, { category: 'STREET FOOD', items: [ { name: 'Masala Bhutta (Street Corn)', price: '$5', description: 'Fire-roasted corn on the cob with exotic Indian spices.' }, { name: 'Vada Pav (Street Burger)', price: '1 for $7.99, 2 for $14', description: 'A fried potato dumpling in a bun with chutneys and peanuts.', tags: ['Veg'] } ] }, { category: 'MUST TRY', items: [ { name: 'Butter Chicken with Basmati Rice', price: '$17.99', description: 'Classic boneless chicken in a creamy tomato, cashew, and cream sauce.', tags: ['GF'] }, { name: 'Paneer Butter Masala with Basmati Rice', price: '$17.99', description: 'Paneer cubes in a rich, creamy sauce of tomatoes, onions, and cashews.', tags: ['Veg'] }, { name: 'Chana Masala with Basmati Rice', price: '$14.99', description: 'Hearty chickpeas in a garlic, ginger, onion, and tomato sauce.', tags: ['GF', 'Vegan', 'Nut-free'] }, { name: 'Samosa Chaat', price: '$14.99', description: 'Smashed samosas topped with chickpea sauce, yogurt, chutneys, and veggies.', tags: ['Veg'] } ] }, { category: 'DESSERT & DRINK', items: [ { name: 'Gulab Jamun (3pc)', price: '$5', description: 'Soft, deep-fried dough balls soaked in a rose-flavored sugar syrup.', tags: ['Veg'] }, { name: 'Mango Lassi', price: '$5.99', description: 'A cool and refreshing yogurt and mango smoothie.', tags: ['Veg'] } ] }, ];

// --- Menu Icons ---
const VegIcon = () => ( <div className="w-4 h-4 mr-2 flex-shrink-0 border-2 border-green-500 rounded-md flex items-center justify-center"><div className="w-2 h-2 bg-green-500 rounded-full"></div></div> );
const MeatIcon = () => ( <div className="w-4 h-4 mr-2 flex-shrink-0 border-2 border-red-500 rounded-md flex items-center justify-center"><div className="w-2 h-2 bg-red-500" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></div></div> );

// --- Full Menu Section (Accordion Style) ---
export default function MenuSection() {
    const [openCategory, setOpenCategory] = useState<string | null>(menu[0].category);
 // Keep the first category open by default
    
    return (
        <section id="menu" className="bg-[#fdfcfb] py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.3 }}>
                    <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">Our Full Menu</h2>
                    <p className="text-orange-900/70 text-lg max-w-xl mx-auto mb-12">Authentic recipes, fresh ingredients, and a touch of magic.</p>
                </motion.div>
                <div className="space-y-4">
                    {menu.map((section) => {
                        const isOpen = openCategory === section.category;
                        return (
                            <div key={section.category} className="bg-white rounded-2xl shadow-subtle overflow-hidden transition-all duration-300">
                                <motion.button
                                    onClick={() => setOpenCategory(isOpen ? null : section.category)}
                                    className="w-full flex justify-between items-center p-6 text-left"
                                    whileHover={{ backgroundColor: 'rgba(249, 115, 22, 0.05)'}}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-orange-500">{icons[section.category]}</span>
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800">{section.category}</h3>
                                    </div>
                                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
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
                                                    const isVeg = item.tags && item.tags.includes('Veg');
                                                    const isMeat = item.name.toLowerCase().includes('chicken') && !isVeg;
                                                    return (
                                                        <div key={item.name} className="py-3">
                                                            <div className="flex justify-between items-start gap-2">
                                                                <h4 className="font-semibold text-gray-800 flex items-center">{ (isVeg ? <VegIcon/> : isMeat ? <MeatIcon/> : <div className="w-4 mr-2"></div>) }{item.name}</h4>
                                                                <span className="text-gray-700 font-semibold whitespace-nowrap">{item.price}</span>
                                                            </div>
                                                            {item.description && <p className="text-gray-500 mt-1 text-sm pl-6">{item.description}</p>}
                                                            {item.tags && (
                                                                <div className="flex flex-wrap gap-2 mt-2 pl-6">
                                                                    {item.tags.map((tag) => (
                                                                        <span key={tag} className={`text-xs px-2 py-0.5 rounded-full font-medium ${tag === 'Veg' ? 'bg-green-100 text-green-800' : tag === 'GF' ? 'bg-sky-100 text-sky-800' : 'bg-orange-100 text-orange-800'}`}>{tag}</span>
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
