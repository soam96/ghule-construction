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
            {/* Advanced Isometric Construction SVG Logo Animation */}
            <motion.svg 
              viewBox="0 0 100 100" 
              className="w-24 h-24 mb-10 text-white"
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
                strokeWidth="3"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {/* Top Horizontal Structure */}
              <motion.path 
                d="M 30 25 L 70 25 L 70 35 L 30 35 Z" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              />

              {/* Right Vertical Structure (Front) */}
              <motion.path 
                d="M 70 55 L 70 75 L 50 85 L 50 65 Z" 
                fill="none" 
                stroke="var(--color-brand-orange)" 
                strokeWidth="3"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
              />

              {/* Middle "G" Connector */}
              <motion.path 
                d="M 50 55 L 70 55" 
                fill="none" 
                stroke="var(--color-brand-orange)" 
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 2, ease: "easeInOut" }}
              />
            </motion.svg>

            {/* Logo Text Reveal */}
            <div className="overflow-hidden mb-3">
              <motion.h1 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-serif font-black tracking-tighter text-white uppercase italic leading-none"
              >
                GHULE
              </motion.h1>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="flex items-center gap-4"
            >
              <div className="w-8 h-[1px] bg-brand-orange" />
              <p className="text-[9px] md:text-[10px] font-mono font-bold tracking-[0.5em] text-brand-orange uppercase italic leading-none">
                CONSTRUCTION
              </p>
              <div className="w-8 h-[1px] bg-brand-orange" />
            </motion.div>

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
