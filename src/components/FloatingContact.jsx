import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { RiMessage3Line, RiCloseLine } from 'react-icons/ri';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const contactItems = [
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:adolffaim@gmail.com',
      color: 'bg-red-600 hover:bg-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      url: 'https://www.linkedin.com/in/faimuddin-shaik?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      color: 'bg-blue-600 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]',
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://wa.me/918247300028',
      color: 'bg-emerald-600 hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(5,150,105,0.5)]',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/adolffaim?utm_source=qr',
      color: 'bg-pink-600 hover:bg-pink-500 hover:shadow-[0_0_20px_rgba(219,39,119,0.5)]',
    },
  ];

  // Animation variants
  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.08,
        staggerDirection: -1, // stack from bottom to top
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
    closed: {
      opacity: 0,
      y: 30,
      scale: 0.3,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-center">
      {/* Expanded Actions Stack */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="flex flex-col gap-3.5 mb-4 items-center"
          >
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white border border-white/10 shadow-2xl relative group cursor-pointer ${item.color}`}
                >
                  <Icon className="text-lg" />
                  
                  {/* Tooltip Label */}
                  <span className="absolute right-14 px-3 py-1.5 rounded-lg bg-brand-black/90 border border-white/10 text-white font-display text-xs uppercase tracking-widest font-semibold opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
                    {item.name}
                  </span>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Floating Action Button */}
      <motion.button
        onClick={toggleMenu}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white border border-white/10 shadow-[0_10px_35px_rgba(229,9,20,0.35)] cursor-pointer select-none transition-colors duration-300 z-10 ${
          isOpen ? 'bg-brand-black hover:bg-brand-black' : 'bg-brand-red hover:bg-brand-red/90'
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <RiCloseLine className="text-2xl" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <RiMessage3Line className="text-2xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
