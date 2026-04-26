import { motion } from 'motion/react';

export default function Logo({ className = '', isDark = false }: { className?: string, isDark?: boolean }) {
  const mainColor = isDark ? '#0A0A0A' : '#FFFFFF';
  const accentColor = '#FF6B00';
  const borderColor = isDark ? 'border-black/10' : 'border-white/20';
  const bgColor = isDark ? 'bg-white/80 backdrop-blur-md' : 'bg-transparent';

  return (
    <div className={`flex items-center gap-6 group cursor-pointer ${className} transition-colors duration-500`} style={{ color: mainColor }}>
      <div className={`relative w-16 h-16 flex items-center justify-center overflow-hidden rounded-sm border ${borderColor} ${bgColor} shadow-xl transition-all duration-700 group-hover:border-brand-orange group-hover:shadow-[0_0_30px_rgba(255,107,0,0.2)]`}>
        {/* Cinematic Construction SVG Logo */}
        <motion.svg 
          viewBox="0 0 100 100" 
          className="w-[85%] h-[85%] transition-all duration-700"
        >
          <defs>
            <linearGradient id="g-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={mainColor} />
              <stop offset="100%" stopColor={mainColor} stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="accent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={accentColor} />
              <stop offset="100%" stopColor="#FF4500" />
            </linearGradient>
          </defs>

          {/* Building in the Background (from back side of G) */}
          <motion.path 
            d="M 50 20 L 85 45 L 85 80 L 15 80 L 15 45 Z" 
            fill="none" 
            stroke={mainColor} 
            strokeWidth="2"
            strokeOpacity="0.2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          {/* Windows / Detail in building */}
          <motion.path 
            d="M 25 55 H 40 V 70 H 25 Z M 60 55 H 75 V 70 H 60 Z" 
            fill={mainColor} 
            fillOpacity="0.05"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />

          {/* Structural "G" in the Foreground */}
          {/* Vertical Stem */}
          <motion.rect 
            x="25" y="25" width="8" height="50" 
            fill="url(#g-gradient)"
            initial={{ height: 0 }}
            animate={{ height: 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          {/* Top Bar */}
          <motion.rect 
            x="25" y="25" width="50" height="8" 
            fill="url(#g-gradient)"
            initial={{ width: 0 }}
            animate={{ width: 50 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          />
          {/* Bottom Bar */}
          <motion.rect 
            x="25" y="67" width="50" height="8" 
            fill="url(#g-gradient)"
            initial={{ width: 0 }}
            animate={{ width: 50 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          />
          {/* The Middle "G" Accent Bar - Highlighted in Brand Orange */}
          <motion.path 
            d="M 55 45 H 75 V 75" 
            fill="none" 
            stroke="url(#accent-gradient)" 
            strokeWidth="8"
            strokeLinecap="square"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          />
          
          {/* Decorative Construction Line */}
          <motion.path 
            d="M 10 90 H 90" 
            stroke={accentColor} 
            strokeWidth="1"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />
        </motion.svg>
      </div>
      
      <div className="flex flex-col">
        <span className="text-xl md:text-2xl font-serif font-black tracking-tighter leading-none italic uppercase transition-colors duration-700 group-hover:text-brand-orange">
          GHULE
        </span>
        <span className="text-[8px] md:text-[10px] font-mono font-bold tracking-[0.5em] text-brand-orange leading-none mt-1 uppercase italic">
          CONSTRUCTION
        </span>
      </div>
    </div>
  );
}
