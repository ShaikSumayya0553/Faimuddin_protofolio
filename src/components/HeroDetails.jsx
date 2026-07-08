import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

export default function HeroDetails() {
  const [activeTagIndex, setActiveTagIndex] = useState(0);
  const tags = [
    'Digital Creator',
    'Founder of Zenora',
    'New Generation Entrepreneur',
    'Content Creator',
    'Creative Developer',
  ];

  // Cycling descriptions timer
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTagIndex((prev) => (prev + 1) % tags.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col text-center lg:text-left w-full max-w-xl mx-auto lg:mx-0 pb-10">
      {/* Hello I'm */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="font-display text-xs md:text-sm uppercase tracking-[0.3em] text-brand-red font-semibold mb-3.5"
      >
        Hello, I'm
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        className="font-display font-black text-4xl md:text-5xl lg:text-[4.25rem] lg:leading-[0.95] tracking-tight text-white mb-6 uppercase"
      >
        Faimuddin Shaik
      </motion.h1>

      {/* Cycling Taglines */}
      <div className="h-10 md:h-12 overflow-hidden mb-6 flex justify-center lg:justify-start items-center">
        <motion.div
          key={activeTagIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="font-display text-lg md:text-xl font-semibold tracking-wider text-white/90 border-l-2 border-brand-red pl-3.5 uppercase"
        >
          {tags[activeTagIndex]}
        </motion.div>
      </div>

      {/* Bio Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="font-sans text-sm md:text-base text-white/50 font-light leading-relaxed mb-10 max-w-md mx-auto lg:mx-0"
      >
        I create content, build brands, and share my journey through creativity, technology, and entrepreneurship.
      </motion.p>

      {/* CTA Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 w-full"
      >
        <Magnetic>
          <a
            href="#contact"
            className="inline-block w-[240px] sm:w-auto px-8 py-4 rounded-full font-display font-bold text-xs tracking-widest uppercase bg-brand-red text-white hover:bg-brand-red/90 transition-all duration-300 shadow-[0_0_20px_rgba(229,9,20,0.35)] hover:shadow-[0_0_30px_rgba(229,9,20,0.7)] text-center cursor-pointer"
          >
            Contact Me
          </a>
        </Magnetic>
        <Magnetic>
          <a
            href="#socials"
            className="inline-block w-[240px] sm:w-auto px-8 py-4 rounded-full font-display font-bold text-xs tracking-widest uppercase border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/25 transition-all duration-300 backdrop-blur-md text-center cursor-pointer"
          >
            Follow My Journey
          </a>
        </Magnetic>
      </motion.div>
    </div>
  );
}

