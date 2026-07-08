import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDumbbell, FaWhatsapp } from 'react-icons/fa';
import { FiArrowUpRight, FiGrid, FiClock, FiUsers } from 'react-icons/fi';
import Magnetic from './Magnetic';

export default function Startup() {
  const [showTooltip, setShowTooltip] = useState(false);

  const highlights = [
    {
      title: 'Built Exclusively for Gyms',
      description: 'Every solution is designed specifically for gym owners.',
      icon: FaDumbbell,
    },
    {
      title: 'Complete Growth System',
      description: 'Everything needed to grow in one integrated ecosystem.',
      icon: FiGrid,
    },
    {
      title: 'Delivered in 30 Days',
      description: 'Complete implementation with zero hidden charges or unnecessary add-ons.',
      icon: FiClock,
    },
    {
      title: 'Only 3 Clients Per Month',
      description: 'We intentionally stay selective to provide exceptional quality and personal attention.',
      icon: FiUsers,
    },
  ];

  return (
    <section id="startup" className="relative py-12 z-10 w-full">
      {/* Red accent glow behind Startup Section */}
      <div className="absolute top-1/4 right-0 w-[250px] h-[250px] rounded-full bg-brand-red/10 filter blur-[80px] pointer-events-none" />

      {/* Main Outer Panel */}
      <div className="w-full p-6 md:p-8 rounded-3xl glass-panel border border-white/5 bg-brand-card-bg/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Story Section 1: Intro */}
        <div className="flex flex-col text-left mb-8">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-[10px] uppercase tracking-[0.25em] text-brand-red mb-2"
          >
            Current Startup
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-3xl md:text-4xl text-white tracking-tight mb-2 uppercase"
          >
            Zenora Agency
          </motion.h2>

          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display text-sm md:text-base font-semibold text-brand-red/90 tracking-wide mb-5"
          >
            India's First Gym Development Agency
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-sans font-light text-xs md:text-sm text-white/60 leading-relaxed max-w-2xl"
          >
            Zenora is a specialized business growth partner built exclusively for gym owners. Rather than offering disconnected marketing services, we deliver an all-in-one growth system combining premium branding, modern web development, and business automation. We help premium gyms attract high-value members, streamline operations, and scale predictably.
          </motion.p>
        </div>

        {/* Separator line */}
        <div className="w-full h-px bg-white/5 my-6" />

        {/* Story Section 2: Why I Started It */}
        <div className="flex flex-col text-left mb-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-[10px] uppercase tracking-[0.25em] text-brand-red mb-2"
          >
            Why I Started It
          </motion.span>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sans font-light text-xs md:text-sm text-white/60 leading-relaxed max-w-2xl"
          >
            I founded Zenora after seeing elite gym owners struggle to scale because their online presence and internal software systems fell short of their physical facility's quality. Managing fragmented freelancers and agencies is exhausting and inefficient. I built Zenora to offer a singular, premium partner that aligns their digital reputation with their actual facility to drive long-term business value.
          </motion.p>
        </div>

        {/* Story Section 3: Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col p-5 rounded-2xl border border-white/5 bg-brand-black/40 backdrop-blur-xl relative overflow-hidden transition-all duration-300 glass-panel-hover text-left"
              >
                {/* Inner Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                  style={{
                    background: `radial-gradient(circle at 10% 10%, rgba(229, 9, 20, 0.12) 0%, transparent 65%)`
                  }}
                />

                <div className="flex items-start gap-4 z-10">
                  {/* Icon Wrapper */}
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex flex-shrink-0 items-center justify-center text-white/70 group-hover:text-brand-red group-hover:border-brand-red/30 group-hover:bg-brand-red/10 transition-all duration-300">
                    <Icon className="text-lg" />
                  </div>

                  {/* Content details */}
                  <div className="flex flex-col">
                    <span className="font-display font-semibold text-xs md:text-sm text-white tracking-wide mb-1 group-hover:text-brand-red transition-colors duration-300">
                      {item.title}
                    </span>
                    <span className="font-sans font-light text-[11px] md:text-xs text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                      {item.description}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-start pt-2">
          
          {/* Explore Website (Coming Soon) Button */}
          <Magnetic>
            <div className="relative w-full sm:w-auto">
              <button
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onClick={() => {
                  setShowTooltip(true);
                  setTimeout(() => setShowTooltip(false), 2500);
                }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-display font-bold text-xs tracking-widest uppercase bg-white text-black hover:bg-white/90 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-[1.03] text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                Explore Zenora <FiArrowUpRight className="text-sm" />
              </button>

              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 rounded-lg bg-brand-black border border-white/10 text-white font-display text-[10px] uppercase tracking-widest pointer-events-none whitespace-nowrap shadow-2xl z-30"
                  >
                    🚀 Website Coming Soon!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Magnetic>

          {/* WhatsApp Contact Button */}
          <Magnetic>
            <a
              href="https://wa.me/919849945680"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full font-display font-bold text-xs tracking-widest uppercase border border-brand-red/20 bg-brand-red/5 text-white hover:bg-brand-red/10 hover:border-brand-red/35 transition-all duration-300 backdrop-blur-md hover:scale-[1.03] text-center flex items-center justify-center gap-2 cursor-pointer group"
            >
              <FaWhatsapp className="text-base text-emerald-400 group-hover:scale-110 transition-transform" />
              WhatsApp Zenora
            </a>
          </Magnetic>
        </div>

      </div>
    </section>
  );
}
