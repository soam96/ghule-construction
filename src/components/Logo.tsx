import { motion } from 'motion/react';

export default function Logo({ className = '', isDark = false }: { className?: string, isDark?: boolean }) {
  const brandOrange = '#FF6B00';
  const brandDark = '#0F172A';
  const mainTextColor = isDark ? brandDark : '#FFFFFF';
  
  return (
    <div className={`flex flex-col items-center group cursor-pointer ${className} transition-colors duration-500`}>
      <div className={`relative w-24 h-24 flex items-center justify-center overflow-hidden rounded-sm mb-2 transition-all duration-700`}>
        {/* Trace of the ORANGE THEMED Ghule Construction Logo */}
        <motion.svg 
          viewBox="0 0 200 200" 
          className="w-full h-full transition-all duration-700"
        >
          {/* Skyline - Skyscrapers */}
          {/* Dark Building 1 */}
          <motion.path 
            d="M 60 110 L 60 70 L 85 85 L 85 110 Z" 
            fill={brandDark} 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          {/* Orange Highlighted Building 2 */}
          <motion.path 
            d="M 85 110 L 85 55 L 105 70 L 105 110 Z" 
            fill={brandOrange} 
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          />
          {/* Dark Building 3 */}
          <motion.path 
            d="M 105 110 L 105 30 L 130 50 L 130 110 Z" 
            fill={brandDark} 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          />
          
          {/* Orange Crane */}
          <motion.g
            initial={{ rotate: -45, opacity: 0, originX: '150px', originY: '110px' }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "backOut" }}
          >
            <path d="M 140 110 L 140 60 L 155 60 L 155 110" fill="none" stroke={brandOrange} strokeWidth="2" />
            <path d="M 140 70 L 175 65" fill="none" stroke={brandOrange} strokeWidth="2" />
            <path d="M 155 60 L 155 50" fill="none" stroke={brandOrange} strokeWidth="2" />
          </motion.g>

          {/* Orange House Roof */}
          <motion.path 
            d="M 40 130 L 100 90 L 160 130" 
            fill="none"
            stroke={brandOrange}
            strokeWidth="8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          />

          {/* House Silhouette (Foreground Facade) */}
          <motion.path 
            d="M 40 130 L 100 90 L 160 130 L 160 145 L 40 145 Z" 
            fill={isDark ? '#FFFFFF' : '#FFFFFF'} 
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          />
          
          {/* House Windows (Dark) */}
          <motion.rect 
            x="92" y="125" width="16" height="12" 
            fill={brandDark} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          />
        </motion.svg>
      </div>
      
      <div className="flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center"
        >
          <span className="text-2xl md:text-3xl font-serif font-black tracking-tighter leading-none italic uppercase text-brand-orange">
            GHULE
          </span>
          <div className="flex items-center gap-2 w-full mt-1">
            <div className={`h-[1.5px] flex-1 ${isDark ? 'bg-slate-900' : 'bg-white'}`} />
            <span className={`text-[7px] md:text-[9px] font-mono font-bold tracking-[0.4em] ${isDark ? 'text-slate-900' : 'text-white'} leading-none uppercase italic`}>
              CONSTRUCTION
            </span>
            <div className={`h-[1.5px] flex-1 ${isDark ? 'bg-slate-900' : 'bg-white'}`} />
          </div>
          <span className="text-[5px] md:text-[6px] font-sans font-bold tracking-[0.2em] mt-1 uppercase text-brand-orange">
            Building Dreams. Creating Futures.
          </span>
        </motion.div>
      </div>
    </div>
  );
}
