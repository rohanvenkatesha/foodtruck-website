// src/data/menu.ts

import { JSX } from 'react';

export type MenuTag = 'Veg' | 'GF' | 'Vegan' | 'Nut-free';

export type MenuCategory =
  | 'FRITTERS'
  | 'PANINI'
  | 'WRAPS'
  | 'FLAT BREAD'
  | 'STREET FOOD'
  | 'MUST TRY'
  | 'DESSERT & DRINK';

export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  tags?: MenuTag[];
}

export interface MenuSection {
  category: MenuCategory;
  items: MenuItem[];
}

export const menu: MenuSection[] = [
  {
    category: 'FRITTERS',
    items: [
      {
        name: 'Chicken Masala Fritters (3 pc.)',
        price: '$7.99',
        description:
          'Marinated chicken breast cutlets with Indian spices, served with cilantro chutney.',
      },
      {
        name: 'Samosa / Chana Masala Samosa',
        price: '$7.99',
        description:
          'Crispy pastry filled with spiced vegetables. Served with cilantro and tamarind dips.',
        tags: ['Veg'],
      },
      {
        name: 'Gobhi Pakora / Cauliflower Fritters',
        price: '$7.99',
        description:
          'Cauliflower florets in a seasoned batter, deep-fried. Served with tamarind dip.',
        tags: ['Veg'],
      },
    ],
  },
  {
    category: 'PANINI',
    items: [
      {
        name: 'Chicken Masala Panini',
        price: '$14',
        description:
          'Marinated chicken, naan, mayo, cilantro chutney, and seasoned veggies.',
      },
      {
        name: 'Paneer Masala Panini',
        price: '$14',
        description:
          'Marinated paneer, naan, mayo, chutney, and seasoned veggies.',
        tags: ['Veg'],
      },
    ],
  },
  {
    category: 'WRAPS',
    items: [
      {
        name: 'Chicken or Paneer Masala Wrap',
        price: '$12',
        description:
          'Your choice of marinated chicken or paneer in a roti paratha with mayo, chutney, and veggies.',
      },
    ],
  },
  {
    category: 'FLAT BREAD',
    items: [
      {
        name: 'Naan or Garlic Naan',
        price: '$3.75',
      },
      {
        name: 'Roti Paratha',
        price: '$2.50',
      },
      {
        name: 'Besan Chilla',
        price: '$5',
        description: 'A savory pancake made from chickpea flour and seasonings.',
        tags: ['GF', 'Vegan'],
      },
      {
        name: 'Naan Chips with Chutney Dip',
        price: '$9',
        description:
          'Crispy naan chips served with cilantro and tamarind dips.',
      },
    ],
  },
  {
    category: 'STREET FOOD',
    items: [
      {
        name: 'Masala Bhutta (Street Corn)',
        price: '$5',
        description: 'Fire-roasted corn on the cob with exotic Indian spices.',
      },
      {
        name: 'Vada Pav (Street Burger)',
        price: '1 for $7.99, 2 for $14',
        description:
          'A fried potato dumpling in a bun with chutneys and peanuts.',
        tags: ['Veg'],
      },
    ],
  },
  {
    category: 'MUST TRY',
    items: [
      {
        name: 'Butter Chicken with Basmati Rice',
        price: '$17.99',
        description:
          'Classic boneless chicken in a creamy tomato, cashew, and cream sauce.',
        tags: ['GF'],
      },
      {
        name: 'Paneer Butter Masala with Basmati Rice',
        price: '$17.99',
        description:
          'Paneer cubes in a rich, creamy sauce of tomatoes, onions, and cashews.',
        tags: ['Veg'],
      },
      {
        name: 'Chana Masala with Basmati Rice',
        price: '$14.99',
        description:
          'Hearty chickpeas in a garlic, ginger, onion, and tomato sauce.',
        tags: ['GF', 'Vegan', 'Nut-free'],
      },
      {
        name: 'Samosa Chaat',
        price: '$14.99',
        description:
          'Smashed samosas topped with chickpea sauce, yogurt, chutneys, and veggies.',
        tags: ['Veg'],
      },
    ],
  },
  {
    category: 'DESSERT & DRINK',
    items: [
      {
        name: 'Gulab Jamun (3pc)',
        price: '$5',
        description:
          'Soft, deep-fried dough balls soaked in a rose-flavored sugar syrup.',
        tags: ['Veg'],
      },
      {
        name: 'Mango Lassi',
        price: '$5.99',
        description: 'A cool and refreshing yogurt and mango smoothie.',
        tags: ['Veg'],
      },
    ],
  },
];
