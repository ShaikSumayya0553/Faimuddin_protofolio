import { useEffect, useRef } from 'react';

export default function BackgroundEffects() {
  const canvasRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // Canvas particles setup
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particles size adjustment for high-DPI mobile screens
    const isMobile = window.innerWidth < 768;
    
    // Particle class
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height + canvas.height * 0.1;
        this.size = Math.random() * (isMobile ? 2.2 : 1.2) + 0.6;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = -(Math.random() * 0.5 + 0.2);
        this.opacity = Math.random() * 0.5 + 0.15;
        this.color = Math.random() > 0.35 ? '229, 9, 20' : '255, 255, 255';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.y < 0 || this.opacity <= 0) {
          this.reset();
          this.y = canvas.height + Math.random() * 20;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.fill();
      }
    }

    const particlesCount = Math.min(80, Math.floor(window.innerWidth / 12));
    const particles = Array.from({ length: particlesCount }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Mouse/Touch glow coordinate tracking
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        const { clientX, clientY } = e;
        glowRef.current.style.opacity = '1';
        glowRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };

    const handleTouchMove = (e) => {
      if (glowRef.current && e.touches.length > 0) {
        const { clientX, clientY } = e.touches[0];
        glowRef.current.style.opacity = '1';
        glowRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-brand-black">
      {/* Grid pattern overlay */}
      <div className="grid-overlay absolute inset-0 z-1" />

      {/* Premium film grain noise */}
      <div className="noise-overlay" />

      {/* Floating particles canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-2 opacity-70" />

      {/* Ambient Red & Purple Glows (Static Backdrop with responsive sizes) */}
      {/* Top Left Red Glow */}
      <div className="absolute top-[-5%] left-[-5%] w-[300px] h-[300px] md:w-[50vw] md:h-[50vw] max-w-[600px] rounded-full bg-brand-red/12 md:bg-brand-red/10 blur-[80px] md:blur-[120px] pointer-events-none animate-pulse-glow" />
      
      {/* Center-Right Purple Glow for chromatic depth */}
      <div className="absolute top-[35%] right-[-10%] w-[320px] h-[320px] md:w-[45vw] md:h-[45vw] rounded-full bg-brand-purple/10 blur-[90px] md:blur-[140px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '-0.75s' }} />

      {/* Center-Left Red Glow for scrolling depth */}
      <div className="absolute top-[65%] left-[-15%] w-[280px] h-[280px] md:w-[40vw] md:h-[40vw] rounded-full bg-brand-red/10 blur-[80px] md:blur-[130px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '-2.25s' }} />

      {/* Bottom Right Red Glow */}
      <div className="absolute bottom-[-5%] right-[-5%] w-[350px] h-[350px] md:w-[60vw] md:h-[60vw] max-w-[800px] rounded-full bg-brand-red/10 md:bg-brand-red/8 blur-[100px] md:blur-[150px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '-1.5s' }} />

      {/* Interactive spotlight cursor/touch glow */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0 w-[240px] h-[240px] md:w-[450px] md:h-[450px] rounded-full bg-brand-red/6 md:bg-brand-red/5 blur-[80px] md:blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2 will-change-transform z-3 opacity-0 transition-opacity duration-500 ease-out"
      />
    </div>
  );
}
