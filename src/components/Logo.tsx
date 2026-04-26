import { motion } from 'motion/react';

export default function Logo({ className = '', isDark = false }: { className?: string, isDark?: boolean }) {
  const brandOrange = '#FF6B00';
  const brandDark = '#0F172A';
  
  return (
    <div className={`flex flex-col items-center group cursor-pointer ${className} transition-all duration-500`}>
      {/* Tightly Integrated Logo Graphic */}
      <div className="relative w-20 h-20 flex items-center justify-center overflow-hidden">
        <motion.svg 
          viewBox="0 0 200 160" 
          className="w-full h-full"
        >
          {/* Skyline - Skyscrapers (More Detailed & Structural) */}
          <motion.path 
            d="M 50 120 L 50 80 L 75 95 L 75 120 Z" 
            fill={brandDark} 
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.path 
            d="M 75 120 L 75 60 L 95 75 L 95 120 Z" 
            fill={brandOrange} 
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.path 
            d="M 95 120 L 95 35 L 120 55 L 120 120 Z" 
            fill={brandDark} 
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
          
          {/* Construction Crane (Simplified but Sleek) */}
          <motion.g
            initial={{ rotate: -30, opacity: 0, originX: '140px', originY: '120px' }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "backOut" }}
          >
            <path d="M 130 120 L 130 65 L 145 65 L 145 120" fill="none" stroke={brandOrange} strokeWidth="1.5" />
            <path d="M 130 75 L 165 70" fill="none" stroke={brandOrange} strokeWidth="1.5" />
          </motion.g>

          {/* House Silhouette (Clean & Sharp) */}
          <motion.path 
            d="M 30 140 L 90 100 L 150 140 L 150 155 L 30 155 Z" 
            fill={isDark ? '#FFFFFF' : '#FFFFFF'} 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
          
          {/* Orange Roof Line */}
          <motion.path 
            d="M 30 140 L 90 100 L 150 140" 
            fill="none" 
            stroke={brandOrange} 
            strokeWidth="6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.svg>
      </div>
      
      {/* Tighter Text Integration */}
      <div className="flex flex-col items-center -mt-3">
        <motion.span 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-2xl md:text-3xl font-serif font-black tracking-tighter leading-none italic uppercase text-brand-orange"
        >
          GHULE
        </motion.span>
        
        <div className="flex items-center gap-2 w-full mt-0.5">
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className={`h-[1px] flex-1 ${isDark ? 'bg-slate-900' : 'bg-white'}`} 
          />
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className={`text-[6px] md:text-[8px] font-mono font-bold tracking-[0.4em] ${isDark ? 'text-slate-900' : 'text-white'} leading-none uppercase italic`}
          >
            CONSTRUCTION
          </motion.span>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className={`h-[1px] flex-1 ${isDark ? 'bg-slate-900' : 'bg-white'}`} 
          />
        </div>
        
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className={`text-[4px] md:text-[5px] font-sans font-bold tracking-[0.2em] mt-0.5 uppercase ${isDark ? 'text-slate-400' : 'text-white/40'}`}
        >
          Building Dreams. Creating Futures.
        </motion.span>
      </div>
    </div>
  );
}
