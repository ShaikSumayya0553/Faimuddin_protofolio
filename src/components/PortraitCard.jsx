import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export default function PortraitCard() {
  // 3D Tilt and Parallax Effect for Portrait Card
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);
  
  // Parallax translation for the image layer
  const translateX = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);
  const translateY = useSpring(useTransform(y, [-0.5, 0.5], [-8, 8]), springConfig);

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
    <div className="relative w-full flex items-center justify-center select-none">
      {/* Giant transparent backdrop text: FAIM */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <span aria-hidden="true" className="font-display font-black text-[28vw] lg:text-[18vw] leading-none text-stroke opacity-[0.035] tracking-widest uppercase">
          FAIM
        </span>
      </div>

      {/* Soft red neon glow behind the subject */}
      <div className="absolute w-[80%] h-[80%] rounded-full bg-brand-red/35 filter blur-[60px] md:blur-[85px] animate-pulse-glow pointer-events-none" />

      {/* Subtle floating particles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-brand-red/45"
            style={{
              top: `${25 + Math.random() * 50}%`,
              left: `${25 + Math.random() * 50}%`,
            }}
            animate={{
              y: [0, -35, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.6,
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
        className="relative w-[75%] sm:w-[55%] lg:w-[85%] max-w-[360px] aspect-[3/4] rounded-2xl glass-panel p-3 border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.95)] cursor-pointer overflow-hidden group transition-all duration-300 z-10"
      >
        {/* Soft highlight glare */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/0 via-brand-red/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Image element with depth translation */}
        <motion.div
          style={{ x: translateX, y: translateY, transformStyle: 'preserve-3d' }}
          className="w-full h-full rounded-xl overflow-hidden relative bg-brand-black"
        >
          <img
            src="/fahiem.jpg"
            alt="Faimuddin Shaik"
            className="w-full h-full object-cover scale-[1.05] group-hover:scale-[1.08] transition-transform duration-700 ease-out select-none"
          />

          {/* Vignette overlay masks to blend rectangular edges into matte black */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-85" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/40 via-transparent to-brand-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,#050505_98%)] opacity-95" />
        </motion.div>
      </motion.div>
    </div>
  );
}
