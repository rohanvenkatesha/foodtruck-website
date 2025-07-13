// src/data/icons.ts

import React from 'react';
import { MenuCategory } from './menu';

export const icons: Record<MenuCategory, JSX.Element> = {
  FRITTERS: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11.96 12.2a2.5 2.5 0 0 1-3.41 3.41 2.5 2.5 0 0 1-3.41-3.41 2.5 2.5 0 0 1 3.41-3.41 2.5 2.5 0 0 1 3.41 3.41Z"/>
      <path d="M12.2 11.96a2.5 2.5 0 0 1 3.41-3.41 2.5 2.5 0 0 1 3.41 3.41 2.5 2.5 0 0 1-3.41 3.41 2.5 2.5 0 0 1-3.41-3.41Z"/>
      <path d="M12 22a4.5 4.5 0 0 0 4.5-4.5c0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5A4.5 4.5 0 0 0 12 22Z"/>
      <path d="M18 6.5a4.5 4.5 0 0 0-4.5-4.5c-2.49 0-4.5 2.01-4.5 4.5A4.5 4.5 0 0 0 18 6.5Z"/>
    </svg>
  ),
  PANINI: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1"/><path d="M22 11H2"/>
    </svg>
  ),
  WRAPS: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.4 16.5c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L12 6l-4.6 11.9c-.2.5-.8.8-1.3.6l-1.9-.7c-.5-.2-.8-.8-.6-1.3l4.6-12c.2-.5.8-.8 1.3-.6l1.9.7c.5.2.8.8.6 1.3Z"/>
    </svg>
  ),
  'FLAT BREAD': (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="M2 12a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v0a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5Z"/>
    </svg>
  ),
  'STREET FOOD': (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 11V9a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2"/><path d="M15 11V9a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2"/>
      <path d="M4 15h16"/><path d="M2 19h20"/><path d="m5 15-1-3"/><path d="m19 15 1-3"/>
    </svg>
  ),
  'MUST TRY': (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 12-3 3-3-3"/>
      <path d="M12.57 3.1a.9.9 0 0 0-1.14 0L9.5 4.85a.9.9 0 0 1-1.08.22l-1.85-.93a.9.9 0 0 0-1.08.22L3.65 6.2a.9.9 0 0 0 .22 1.08l1.63 1.63a.9.9 0 0 1 0 1.27l-1.63 1.63a.9.9 0 0 0-.22 1.08l1.85 1.85a.9.9 0 0 0 1.08.22l1.85-.93a.9.9 0 0 1 1.08.22l1.93 1.75a.9.9 0 0 0 1.14 0l1.93-1.75a.9.9 0 0 1 1.08-.22l1.85.93a.9.9 0 0 0 1.08-.22l1.85-1.85a.9.9 0 0 0 .22-1.08L18.35 12a.9.9 0 0 1 0-1.27l1.63-1.63a.9.9 0 0 0 .22-1.08L18.15 6.2a.9.9 0 0 0-1.08-.22l-1.85.93a.9.9 0 0 1-1.08-.22Z"/>
    </svg>
  ),
  'DESSERT & DRINK': (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4"/><path d="M12 18v4"/><path d="M22 12h-4"/><path d="M6 12H2"/>
      <path d="M17 17l-1.5-1.5"/><path d="M8.5 8.5 7 7"/><path d="M17 7l-1.5 1.5"/><path d="M8.5 15.5 7 17"/>
      <path d="M12 12a3.5 3.5 0 0 0-3.5 3.5c0 2.25 2.5 4 3.5 4s3.5-1.75 3.5-4A3.5 3.5 0 0 0 12 12Z"/>
    </svg>
  ),
};
