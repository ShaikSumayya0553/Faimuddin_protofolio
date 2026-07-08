import { useState, useEffect } from 'react';
import Magnetic from './Magnetic';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out py-5 md:py-6 px-4 sm:px-12 ${
        isScrolled
          ? 'bg-brand-black/75 backdrop-blur-lg border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Magnetic>
          <a
            href="#"
            className="font-display font-extrabold text-lg sm:text-2xl md:text-3xl tracking-wider text-white hover:text-brand-red transition-colors duration-300 block cursor-pointer"
          >
            FAIM
          </a>
        </Magnetic>

        {/* Links */}
        <div className="flex items-center gap-2.5 sm:gap-8 md:gap-10">
          <Magnetic>
            <a
              href="#contact"
              className="font-display font-medium text-[9px] sm:text-xs md:text-sm uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300 relative group px-2 py-1 block cursor-pointer"
            >
              Connect
              <span className="absolute bottom-[-2px] left-2 w-0 h-[1.5px] bg-brand-red transition-all duration-300 group-hover:w-[calc(100%-16px)]" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://www.instagram.com/adolffaim?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-medium text-[9px] sm:text-xs md:text-sm uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300 relative group px-2 py-1 block cursor-pointer"
            >
              Instagram
              <span className="absolute bottom-[-2px] left-2 w-0 h-[1.5px] bg-brand-red transition-all duration-300 group-hover:w-[calc(100%-16px)]" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://www.linkedin.com/in/faimuddin-shaik?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-medium text-[9px] sm:text-xs md:text-sm uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300 relative group px-2 py-1 block cursor-pointer"
            >
              LinkedIn
              <span className="absolute bottom-[-2px] left-2 w-0 h-[1.5px] bg-brand-red transition-all duration-300 group-hover:w-[calc(100%-16px)]" />
            </a>
          </Magnetic>
        </div>
      </div>
    </nav>
  );
}

