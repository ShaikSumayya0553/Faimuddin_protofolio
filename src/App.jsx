import { useEffect, useState } from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import PortraitCard from './components/PortraitCard';
import HeroDetails from './components/HeroDetails';
import SocialCards from './components/SocialCards';
import Startup from './components/Startup';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-brand-black text-white selection:bg-brand-red selection:text-white overflow-x-clip">
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }} 
      />

      {/* Background canvas particles, noise overlay, grid and glowing spheres */}
      <BackgroundEffects />

      {/* Glassmorphic Navbar */}
      <Navbar />

      {/* Main layout wrapper */}
      <main className="relative z-10 w-full max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row items-stretch">
        
        {/* LEFT COLUMN: Sticky portrait on desktop, Top-most content on mobile */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center items-center pt-28 pb-10 px-6 md:px-12 lg:px-0 lg:py-0 lg:h-screen lg:sticky lg:top-0 select-none z-20">
          <PortraitCard />
        </div>

        {/* RIGHT COLUMN: Scrolling column containing introduction info, social cards, contact list and footer */}
        <div className="w-full lg:w-[55%] flex flex-col justify-start pt-6 pb-12 lg:pt-32 px-6 md:px-12 lg:pl-16 lg:pr-4 z-10">
          
          {/* Main Hero Header text and CTAs */}
          <HeroDetails />

          {/* Social Bento-Grid Links */}
          <SocialCards />

          {/* Startup Section */}
          <Startup />

          {/* Direct connections Contact section */}
          <Contact />

          {/* Page Footer */}
          <Footer />
        </div>

      </main>

      {/* Expandable Speed-Dial FAB */}
      <FloatingContact />
    </div>
  );
}
