import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FiArrowUpRight, FiGlobe } from 'react-icons/fi';
import Magnetic from './Magnetic';

export default function SocialCards() {
  const cards = [
    {
      name: 'Instagram Personal',
      username: '@adolffaim',
      url: 'https://www.instagram.com/adolffaim?utm_source=qr',
      icon: FaInstagram,
      color: 'hover:border-pink-500/30 hover:shadow-[0_8px_30px_rgba(236,72,153,0.12)]',
      glowColor: 'rgba(236, 72, 153, 0.2)',
      isComingSoon: false,
    },
    {
      name: 'Instagram Creator',
      username: '@projectfaim',
      url: 'https://www.instagram.com/projectfaim?igsh=MW14ZzBjbW53aWRmdQ==',
      icon: FaInstagram,
      color: 'hover:border-red-500/30 hover:shadow-[0_8px_30px_rgba(229,9,20,0.12)]',
      glowColor: 'rgba(229, 9, 20, 0.2)',
      isComingSoon: false,
    },
    {
      name: 'Zenora Instagram',
      username: '@zenoraagency',
      url: 'https://www.instagram.com/zenoraagency?igsh=b3c3MmpndGE1cWhr',
      icon: FaInstagram,
      color: 'hover:border-purple-500/30 hover:shadow-[0_8px_30px_rgba(168,85,247,0.12)]',
      glowColor: 'rgba(168, 85, 247, 0.2)',
      isComingSoon: false,
    },
    {
      name: 'LinkedIn',
      username: '/in/faimuddin-shaik',
      url: 'https://www.linkedin.com/in/faimuddin-shaik?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      icon: FaLinkedinIn,
      color: 'hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)]',
      glowColor: 'rgba(59, 130, 246, 0.2)',
      isComingSoon: false,
    },
    {
      name: 'WhatsApp Personal',
      username: '8247300028',
      url: 'https://wa.me/918247300028',
      icon: FaWhatsapp,
      color: 'hover:border-emerald-500/30 hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)]',
      glowColor: 'rgba(16, 185, 129, 0.2)',
      isComingSoon: false,
    },
    {
      name: 'WhatsApp Business',
      username: '9849945680',
      url: 'https://wa.me/919849945680',
      icon: FaWhatsapp,
      color: 'hover:border-teal-500/30 hover:shadow-[0_8px_30px_rgba(20,184,166,0.12)]',
      glowColor: 'rgba(20, 184, 166, 0.2)',
      isComingSoon: false,
    },
  ];

  return (
    <section id="socials" className="relative py-10 z-10 w-full">
      {/* Outer Dashboard Glass Panel wrapping everything */}
      <div className="w-full p-6 md:p-8 rounded-3xl glass-panel border border-white/5 bg-brand-card-bg/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Title Inside the Panel */}
        <div className="flex flex-col mb-8 text-left">
          <span className="font-display font-bold text-[10px] uppercase tracking-[0.25em] text-brand-red mb-1.5">
            Social Grid
          </span>
          <h2 className="font-display font-black text-2xl md:text-3xl text-white tracking-tight">
            Connect Everywhere<span className="text-brand-red">.</span>
          </h2>
        </div>

        {/* 2-Column Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card, index) => {
            const Icon = card.icon;
            
            return (
              <Magnetic key={index}>
                <motion.a
                  href={card.isComingSoon ? undefined : card.url}
                  target={card.isComingSoon ? undefined : "_blank"}
                  rel={card.isComingSoon ? undefined : "noopener noreferrer"}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={card.isComingSoon ? {} : { 
                    scale: 1.015,
                    y: -2,
                    boxShadow: `0 10px 25px -5px ${card.glowColor}`,
                  }}
                  whileTap={card.isComingSoon ? {} : { scale: 0.985 }}
                  className={`group flex items-center justify-between p-5 rounded-2xl border border-white/5 bg-brand-black/40 backdrop-blur-xl relative overflow-hidden transition-all duration-300 w-full ${
                    card.isComingSoon ? 'opacity-50 cursor-default' : 'cursor-pointer'
                  } ${card.color}`}
                >
                  {/* Inner Ambient Glow */}
                  {!card.isComingSoon && (
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                      style={{
                        background: `radial-gradient(circle at 10% 10%, ${card.glowColor} 0%, transparent 65%)`
                      }}
                    />
                  )}

                  <div className="flex items-center gap-4 min-w-0 z-10">
                    {/* Icon Wrapper */}
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex flex-shrink-0 items-center justify-center text-white/70 group-hover:text-white group-hover:border-white/20 transition-all duration-300">
                      <Icon className="text-xl" />
                    </div>

                    {/* Text Details */}
                    <div className="flex flex-col text-left min-w-0">
                      <span className="font-display font-semibold text-xs md:text-sm text-white tracking-wide truncate">
                        {card.name}
                      </span>
                      <span className="font-sans font-light text-[11px] text-white/40 group-hover:text-white/70 transition-colors duration-300 truncate">
                        {card.username}
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  {!card.isComingSoon && (
                    <div className="w-9 h-9 rounded-full border border-white/10 flex flex-shrink-0 items-center justify-center text-white/30 group-hover:text-white group-hover:border-brand-red group-hover:bg-brand-red transition-all duration-300 transform group-hover:rotate-45 z-10">
                      <FiArrowUpRight className="text-base" />
                    </div>
                  )}
                </motion.a>
              </Magnetic>
            );
          })}
        </div>

      </div>
    </section>
  );
}
