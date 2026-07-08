import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaRegEnvelope, FaCopy, FaCheck } from 'react-icons/fa';
import { FiArrowUpRight, FiGlobe } from 'react-icons/fi';
import Magnetic from './Magnetic';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'adolffaim@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const directLinks = [
    {
      name: 'WhatsApp Personal',
      value: '8247300028',
      url: 'https://wa.me/918247300028',
      icon: FaWhatsapp,
    },
    {
      name: 'WhatsApp Business',
      value: '9849945680',
      url: 'https://wa.me/919849945680',
      icon: FaWhatsapp,
    },
    {
      name: 'LinkedIn',
      value: '/in/faimuddin-shaik',
      url: 'https://www.linkedin.com/in/faimuddin-shaik?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      icon: FaLinkedinIn,
    },
    {
      name: 'Instagram Personal',
      value: '@adolffaim',
      url: 'https://www.instagram.com/adolffaim?utm_source=qr',
      icon: FaInstagram,
    },
    {
      name: 'Zenora Instagram',
      value: '@zenoraagency',
      url: 'https://www.instagram.com/zenoraagency?igsh=b3c3MmpndGE1cWhr',
      icon: FaInstagram,
    },
    {
      name: 'Zenora Website',
      value: 'zenoraagency-gilt.vercel.app',
      url: 'https://zenoraagency-gilt.vercel.app',
      icon: FiGlobe,
    },
  ];

  return (
    <section id="contact" className="relative py-10 z-10 w-full">
      {/* Outer Dashboard Glass Panel wrapping everything */}
      <div className="w-full p-6 md:p-8 rounded-3xl glass-panel border border-white/5 bg-brand-card-bg/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Heading, Info & Copy Email */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <span className="font-display font-bold text-[10px] uppercase tracking-[0.25em] text-brand-red mb-1.5">
              Contact
            </span>
            <h2 className="font-display font-black text-2xl md:text-3xl text-white tracking-tight mb-4 uppercase">
              Let's Connect
            </h2>
            <p className="font-sans font-light text-xs md:text-sm text-white/50 leading-relaxed max-w-md">
              I'm open to collaborations, business opportunities, creative projects, and meaningful conversations.
            </p>

            {/* Copyable email box */}
            <Magnetic>
              <button
                onClick={copyToClipboard}
                className="w-full max-w-md mt-8 p-5 rounded-2xl border border-white/5 bg-brand-black/40 hover:border-brand-red/30 cursor-pointer active:scale-[0.985] transition-all duration-300 group flex items-center justify-between gap-4"
                title="Click to copy email"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/20 flex flex-shrink-0 items-center justify-center text-brand-red group-hover:bg-brand-red/20 transition-all duration-300">
                    <FaRegEnvelope className="text-lg" />
                  </div>
                  <div className="flex flex-col text-left min-w-0">
                    <span className="text-[10px] uppercase tracking-widest text-white/40">Email Me</span>
                    <span className="font-sans font-medium text-xs md:text-sm text-white truncate">{emailAddress}</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl border border-white/10 flex flex-shrink-0 items-center justify-center text-white/60 group-hover:text-white group-hover:border-brand-red/40 transition-all duration-300">
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaCheck className="text-emerald-500" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaCopy />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </Magnetic>
          </div>

          {/* Right Column: Mini List */}
          <div className="lg:col-span-6 w-full flex flex-col gap-3">
            {directLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <Magnetic key={idx}>
                  <motion.a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={{ x: 4, borderColor: 'rgba(229, 9, 20, 0.3)', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                    className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-brand-black/40 hover:bg-white/[0.01] transition-all duration-300 group cursor-pointer w-full"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex flex-shrink-0 items-center justify-center text-white/50 group-hover:text-brand-red group-hover:border-brand-red/20 group-hover:bg-brand-red/10 transition-all duration-300">
                        <Icon className="text-lg" />
                      </div>
                      <div className="flex flex-col text-left min-w-0">
                        <span className="font-display font-semibold text-xs md:text-sm text-white truncate">{link.name}</span>
                        <span className="font-sans font-light text-[11px] text-white/40 group-hover:text-white/60 transition-colors duration-300 truncate">{link.value}</span>
                      </div>
                    </div>
                    <div className="text-white/20 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300">
                      <FiArrowUpRight className="text-lg" />
                    </div>
                  </motion.a>
                </Magnetic>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
