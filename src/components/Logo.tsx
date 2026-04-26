import { motion } from 'motion/react';

export default function Logo({ className = '', isDark = false }: { className?: string, isDark?: boolean }) {
  const mainColor = isDark ? '#0F172A' : '#FFFFFF';
  const accentColor = '#926D2C'; // Gold from the logo
  const borderColor = isDark ? 'border-black/10' : 'border-white/20';
  const bgColor = isDark ? 'bg-white/80 backdrop-blur-md' : 'bg-transparent';

  return (
    <div className={`flex flex-col items-center group cursor-pointer ${className} transition-colors duration-500`}>
      <div className={`relative w-24 h-24 flex items-center justify-center overflow-hidden rounded-sm mb-2 transition-all duration-700`}>
        {/* Trace of the provided Ghule Construction Logo */}
        <motion.svg 
          viewBox="0 0 200 200" 
          className="w-full h-full transition-all duration-700"
        >
          {/* Skyline - Skyscrapers */}
          <motion.path 
            d="M 60 110 L 60 70 L 85 85 L 85 110 Z" 
            fill={isDark ? '#1E293B' : '#E2E8F0'} 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <motion.path 
            d="M 85 110 L 85 55 L 105 70 L 105 110 Z" 
            fill={accentColor} 
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          />
          <motion.path 
            d="M 105 110 L 105 30 L 130 50 L 130 110 Z" 
            fill={isDark ? '#0F172A' : '#CBD5E1'} 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          />
          
          {/* Crane */}
          <motion.g
            initial={{ rotate: -45, opacity: 0, originX: '150px', originY: '110px' }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "backOut" }}
          >
            <path d="M 140 110 L 140 60 L 155 60 L 155 110" fill="none" stroke={accentColor} strokeWidth="2" />
            <path d="M 140 70 L 175 65" fill="none" stroke={accentColor} strokeWidth="2" />
            <path d="M 155 60 L 155 50" fill="none" stroke={accentColor} strokeWidth="2" />
          </motion.g>

          {/* House Silhouette (Foreground) */}
          <motion.path 
            d="M 40 130 L 100 90 L 160 130 L 160 145 L 40 145 Z" 
            fill={isDark ? '#0F172A' : '#1E293B'} 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          />
          
          {/* House Windows */}
          <motion.rect 
            x="92" y="125" width="16" height="12" 
            fill={isDark ? '#F8FAFC' : '#FFFFFF'} 
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
          <span className={`text-2xl md:text-3xl font-serif font-black tracking-tighter leading-none italic uppercase ${isDark ? 'text-slate-900' : 'text-white'}`}>
            GHULE
          </span>
          <div className="flex items-center gap-2 w-full mt-1">
            <div className="h-[1px] flex-1 bg-[#926D2C]" />
            <span className="text-[7px] md:text-[9px] font-mono font-bold tracking-[0.4em] text-[#926D2C] leading-none uppercase italic">
              CONSTRUCTION
            </span>
            <div className="h-[1px] flex-1 bg-[#926D2C]" />
          </div>
          <span className={`text-[5px] md:text-[6px] font-sans font-bold tracking-[0.2em] mt-1 uppercase ${isDark ? 'text-slate-400' : 'text-white/40'}`}>
            Building Dreams. Creating Futures.
          </span>
        </motion.div>
      </div>
    </div>
  );
}
