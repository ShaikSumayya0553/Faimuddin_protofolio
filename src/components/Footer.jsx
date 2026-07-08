export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5 bg-transparent select-none z-10 w-full mt-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright */}
        <p className="font-display font-medium text-xs text-white/40 tracking-wider text-center md:text-left">
          &copy; 2026 Faimuddin Shaik. All rights reserved.
        </p>

        {/* Right: Built Info & Heart */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <p className="font-sans font-light text-[11px] text-white/30 tracking-wide text-center">
            Built with React + Tailwind
          </p>
          <span className="hidden md:inline text-white/10">|</span>
          <p className="font-display font-medium text-xs text-white/40 tracking-widest uppercase flex items-center gap-1.5 justify-center">
            Made with <span className="text-brand-red animate-pulse">&hearts;</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
