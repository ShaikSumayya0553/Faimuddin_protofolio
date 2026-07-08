import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export default function Hero() {
  const [activeTagIndex, setActiveTagIndex] = useState(0);
  const tags = [
    'Digital Creator',
    'Founder of Zenora',
    'New Generation Entrepreneur',
    'Content Creator',
    'Creative Developer',
  ];

  // Cycle through tags
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTagIndex((prev) => (prev + 1) % tags.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // 3D Tilt and Parallax Effect for Portrait
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for tilt
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);
  
  // Parallax translation for the image itself
  const translateX = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);
  const translateY = useSpring(useTransform(y, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Normalize coordinates from -0.5 to 0.5
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-24 pb-12 px-6 md:px-12 z-10 select-none overflow-hidden">
      {/* Giant faint backdrop text: FAIM */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h1 className="font-display font-black text-[25vw] leading-none text-stroke opacity-[0.03] select-none tracking-widest uppercase">
          FAIM
        </h1>
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        
        {/* Left Side: Portrait (Desktop) / Top Side (Mobile) */}
        <div className="lg:col-span-6 flex justify-center items-center relative w-full aspect-square md:max-w-md lg:max-w-none mx-auto order-1 lg:order-2">
          
          {/* Ambient red halo behind portrait */}
          <div className="absolute w-[80%] h-[80%] rounded-full bg-brand-red/35 filter blur-[60px] md:blur-[90px] animate-pulse-glow" />

          {/* Floating subtle red particles around the head */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-brand-red/40"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.7,
                }}
              />
            ))}
          </div>

          {/* Portrait Container with 3D Tilt */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative w-[85%] md:w-[75%] lg:w-[85%] max-w-[420px] aspect-[3/4] rounded-2xl glass-panel p-3 border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.9)] cursor-pointer overflow-hidden group transition-all duration-300"
          >
            {/* Soft inner glow highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/0 via-brand-red/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Portrait Image wrapper with parallax */}
            <motion.div
              style={{ x: translateX, y: translateY, transformStyle: 'preserve-3d' }}
              className="w-full h-full rounded-xl overflow-hidden relative bg-brand-black"
            >
              <img
                src="/fahiem.jpg"
                alt="Faimuddin Shaik"
                className="w-full h-full object-cover scale-[1.05] group-hover:scale-[1.08] transition-transform duration-700 ease-out select-none"
              />

              {/* Edge Gradient Blending: Vignette overlay that merges the edges of the portrait into black */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-black/40 via-transparent to-brand-black/40" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_95%)] opacity-95" />
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: Editorial Info (Desktop) / Bottom Side (Mobile) */}
        <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
          
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-display text-base md:text-lg uppercase tracking-[0.25em] text-brand-red font-semibold mb-3"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-4 uppercase leading-none"
          >
            Faimuddin Shaik
          </motion.h1>

          {/* Cycling Taglines */}
          <div className="h-10 md:h-12 overflow-hidden mb-6 flex justify-center lg:justify-start items-center">
            <motion.div
              key={activeTagIndex}
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -25, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="font-display text-xl md:text-2xl font-semibold tracking-wide text-white/90 border-l-2 border-brand-red pl-3"
            >
              {tags[activeTagIndex]}
            </motion.div>
          </div>

          {/* Short Bio */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="font-sans text-sm md:text-base text-white/60 font-light leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10"
          >
            I create content, build brands, and share my journey through creativity, technology, and entrepreneurship.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            {/* Contact Button */}
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-display font-semibold text-sm tracking-wider uppercase bg-brand-red text-white hover:bg-brand-red/90 transition-all duration-300 shadow-[0_0_20px_rgba(229,9,20,0.3)] hover:shadow-[0_0_30px_rgba(229,9,20,0.65)] hover:scale-[1.03] text-center"
            >
              Contact Me
            </a>

            {/* Follow Journey Button */}
            <a
              href="#socials"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-display font-semibold text-sm tracking-wider uppercase border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md hover:scale-[1.03] text-center"
            >
              Follow My Journey
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
