import { motion } from 'motion/react';

export default function Logo({ className = '', isDark = false }: { className?: string, isDark?: boolean }) {
  const mainColor = isDark ? '#0A0A0A' : '#FFFFFF';
  const accentColor = '#FF6B00';
  const borderColor = isDark ? 'border-black/10' : 'border-white/20';
  const bgColor = isDark ? 'bg-white/80 backdrop-blur-md' : 'bg-transparent';

  return (
    <div className={`flex items-center gap-6 group cursor-pointer ${className} transition-colors duration-500`} style={{ color: mainColor }}>
      <div className={`relative w-16 h-16 flex items-center justify-center overflow-hidden rounded-sm border ${borderColor} ${bgColor} shadow-xl transition-all duration-700 group-hover:border-brand-orange group-hover:shadow-[0_0_30px_rgba(255,107,0,0.2)]`}>
        {/* Architectural Skyline "G" Logo */}
        <motion.svg 
          viewBox="0 0 100 100" 
          className="w-[85%] h-[85%] transition-all duration-700"
        >
          <defs>
            <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={accentColor} />
              <stop offset="100%" stopColor="#FF4500" />
            </linearGradient>
          </defs>

          {/* Background Skyline Silhouette forming the 'G' shape */}
          <motion.path 
            d="M 20 20 L 80 20 L 80 35 L 35 35 L 35 65 L 80 65 L 80 80 L 20 80 Z" 
            fill="none" 
            stroke={mainColor} 
            strokeWidth="2"
            strokeOpacity="0.1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Building Blocks that form the "G" */}
          {/* Vertical Backbone (Building 1) */}
          <motion.rect 
            x="20" y="20" width="12" height="60" 
            fill={mainColor}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          
          {/* Top Bar (Building 2) */}
          <motion.rect 
            x="32" y="20" width="48" height="12" 
            fill={mainColor}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          />

          {/* Bottom Bar (Building 3) */}
          <motion.rect 
            x="32" y="68" width="48" height="12" 
            fill={mainColor}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          />

          {/* The Creative Accent - A modern building forming the 'G's middle bar */}
          <motion.path 
            d="M 55 45 L 85 45 L 85 80" 
            fill="none" 
            stroke="url(#logo-grad)" 
            strokeWidth="10"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
          />

          {/* Crane/Structural Detail */}
          <motion.path 
            d="M 85 45 L 95 35 M 85 20 L 95 20" 
            stroke={accentColor} 
            strokeWidth="1"
            strokeOpacity="0.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
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
