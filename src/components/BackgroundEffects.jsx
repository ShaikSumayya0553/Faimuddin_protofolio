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

    // Particle class
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height + canvas.height * 0.1; // start slightly offset
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = -(Math.random() * 0.5 + 0.2); // move upwards
        this.opacity = Math.random() * 0.5 + 0.1;
        this.fadeSpeed = Math.random() * 0.005 + 0.002;
        this.color = Math.random() > 0.3 ? '229, 9, 20' : '255, 255, 255'; // mostly red, some white
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // fade out as they rise or go offscreen
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

    const particlesCount = Math.min(60, Math.floor(window.innerWidth / 20));
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

    // Mouse glow coordinate tracking
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        const { clientX, clientY } = e;
        glowRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
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
      <canvas ref={canvasRef} className="absolute inset-0 z-2 opacity-60" />

      {/* Ambient Red Glows (Static Backdrop) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-brand-red/10 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] rounded-full bg-brand-red/8 blur-[150px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '-1.5s' }} />

      {/* Interactive spotlight cursor glow */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-brand-red/5 blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2 will-change-transform z-3 transition-transform duration-300 ease-out hidden md:block"
      />
    </div>
  );
}
