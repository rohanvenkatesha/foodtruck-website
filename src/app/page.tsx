'use client';

import HeroSection from './components/HeroSection'; // Assuming these are in the components folder
import TodaySpecials from './components/TodaySpecials';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import RestaurantNavbar from './components/RestaurantNavbar';
// import DescriptionSection from './components/DescriptionSection';
// import RestaurantNavbar from './components/RestaurantNavbar';
// import ProfileCard from './components/ProfileCard';

export default function Home() {
  return (
    <main className="font-poppins antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .shadow-subtle { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); }
        .shadow-hovery { box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08); }
      `}</style>
      <RestaurantNavbar/>
      <HeroSection />
      <TodaySpecials />
      <MenuSection />
      <Footer/>
    </main>
  );
}
