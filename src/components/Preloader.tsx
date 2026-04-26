import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoading(false);
            onComplete();
          }, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            opacity: 0,
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[999] bg-brand-dark flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle architectural noise */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          <div className="relative flex flex-col items-center z-10">
            {/* High-Fidelity Building Animation of User's Logo */}
            <motion.svg 
              viewBox="0 0 200 200" 
              className="w-32 h-32 mb-8 text-white"
            >
              {/* Skyline - Skyscrapers */}
              <motion.path 
                d="M 60 110 L 60 70 L 85 85 L 85 110 Z" 
                fill="#E2E8F0" 
                fillOpacity="0.2"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <motion.path 
                d="M 85 110 L 85 55 L 105 70 L 105 110 Z" 
                fill="#926D2C" 
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              />
              <motion.path 
                d="M 105 110 L 105 30 L 130 50 L 130 110 Z" 
                fill="#FFFFFF" 
                fillOpacity="0.8"
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
              />
              
              {/* Crane */}
              <motion.g
                initial={{ rotate: -45, opacity: 0, originX: '150px', originY: '110px' }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 1, ease: "backOut" }}
              >
                <path d="M 140 110 L 140 60 L 155 60 L 155 110" fill="none" stroke="#926D2C" strokeWidth="2" />
                <path d="M 140 70 L 175 65" fill="none" stroke="#926D2C" strokeWidth="2" />
                <path d="M 155 60 L 155 50" fill="none" stroke="#926D2C" strokeWidth="2" />
              </motion.g>

              {/* House Silhouette (Foreground) */}
              <motion.path 
                d="M 40 130 L 100 90 L 160 130 L 160 145 L 40 145 Z" 
                fill="#FFFFFF" 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
              />
            </motion.svg>

            {/* Logo Text & Tagline */}
            <div className="flex flex-col items-center overflow-hidden">
              <motion.span 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="text-4xl md:text-5xl font-serif font-black tracking-tighter leading-none italic uppercase text-white"
              >
                GHULE
              </motion.span>
              <motion.div 
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 2.3 }}
                className="flex items-center gap-4 w-full mt-2"
              >
                <div className="h-[1px] flex-1 bg-[#926D2C]" />
                <span className="text-[10px] md:text-[12px] font-mono font-bold tracking-[0.5em] text-[#926D2C] leading-none uppercase italic">
                  CONSTRUCTION
                </span>
                <div className="h-[1px] flex-1 bg-[#926D2C]" />
              </motion.div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.8 }}
                className="text-[8px] md:text-[10px] font-sans font-bold tracking-[0.3em] mt-3 uppercase text-white/40"
              >
                Building Dreams. Creating Futures.
              </motion.span>
            </div>


          </div>

          {/* Epic Loading Bar */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-64 md:w-80 h-[2px] bg-white/10 overflow-hidden rounded-full">
             <motion.div 
               className="h-full bg-brand-orange shadow-[0_0_15px_rgba(255,107,0,0.8)]"
               initial={{ width: 0 }}
               animate={{ width: `${progress}%` }}
               transition={{ ease: "linear" }}
             />
          </div>
          
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
             <motion.span 
               className="text-white/30 font-mono text-[9px] tracking-[0.4em] uppercase italic"
             >
               {Math.floor(progress)}% INITIALIZING
             </motion.span>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
