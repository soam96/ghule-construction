import { motion } from 'motion/react';

export default function Logo({ className = '', isDark = false }: { className?: string, isDark?: boolean }) {
  const mainColor = isDark ? 'text-brand-dark' : 'text-white';
  const borderColor = isDark ? 'border-black/10' : 'border-white/20';
  const bgColor = isDark ? 'bg-white/80 backdrop-blur-md' : 'bg-transparent';

  return (
    <div className={`flex items-center gap-6 group cursor-pointer ${className} ${mainColor} transition-colors duration-500`}>
      <div className={`relative w-16 h-16 flex items-center justify-center overflow-hidden rounded-sm border ${borderColor} ${bgColor} shadow-xl transition-all duration-700 group-hover:border-brand-orange group-hover:shadow-[0_0_30px_rgba(255,107,0,0.2)]`}>
        {/* Advanced Isometric Construction SVG Logo */}
        <motion.svg 
          viewBox="0 0 100 100" 
          className="w-[85%] h-[85%] transition-all duration-700 group-hover:text-brand-orange"
        >
          {/* Isometric Building Structure forming a "G" */}
          {/* Base / Floor */}
          <motion.path 
            d="M 50 85 L 85 65 L 50 45 L 15 65 Z" 
            fill="currentColor" 
            fillOpacity="0.05"
            stroke="currentColor" 
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Left Vertical Structure (Back) */}
          <motion.path 
            d="M 30 25 L 30 75 L 50 85 L 50 35 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="4"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Top Horizontal Structure */}
          <motion.path 
            d="M 30 25 L 70 25 L 70 35 L 30 35 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="4"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
          />

          {/* Right Vertical Structure (Front) */}
          <motion.path 
            d="M 70 55 L 70 75 L 50 85 L 50 65 Z" 
            fill="none" 
            stroke="var(--color-brand-orange)" 
            strokeWidth="4"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
          />

          {/* Middle "G" Connector */}
          <motion.path 
            d="M 50 55 L 70 55" 
            fill="none" 
            stroke="var(--color-brand-orange)" 
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
          />

          {/* Architectural Detail Lines */}
          <motion.path 
            d="M 30 45 L 50 55 M 30 60 L 50 70" 
            stroke="currentColor" 
            strokeWidth="1"
            strokeOpacity="0.3"
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
