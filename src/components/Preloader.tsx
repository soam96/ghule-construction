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
            {/* High-Fidelity Compact ORANGE THEMED Building Animation */}
            <motion.svg 
              viewBox="0 0 200 160" 
              className="w-32 h-32 mb-4 text-white"
            >
              {/* Skyline - Skyscrapers */}
              <motion.path 
                d="M 50 120 L 50 80 L 75 95 L 75 120 Z" 
                fill="#0F172A" 
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.path 
                d="M 75 120 L 75 60 L 95 75 L 95 120 Z" 
                fill="#FF6B00" 
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.path 
                d="M 95 120 L 95 35 L 120 55 L 120 120 Z" 
                fill="#0F172A" 
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              
              {/* Orange Crane */}
              <motion.g
                initial={{ rotate: -30, opacity: 0, originX: '140px', originY: '120px' }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 1, ease: "backOut" }}
              >
                <path d="M 130 120 L 130 65 L 145 65 L 145 120" fill="none" stroke="#FF6B00" strokeWidth="2" />
                <path d="M 130 75 L 165 70" fill="none" stroke="#FF6B00" strokeWidth="2" />
              </motion.g>

              {/* Orange House Roof */}
              <motion.path 
                d="M 30 140 L 90 100 L 150 140" 
                fill="none"
                stroke="#FF6B00"
                strokeWidth="8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
              />

              {/* House Silhouette (Foreground Facade) */}
              <motion.path 
                d="M 30 140 L 90 100 L 150 140 L 150 155 L 30 155 Z" 
                fill="#FFFFFF" 
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
              />
            </motion.svg>

            {/* Tighter Logo Text & Tagline */}
            <div className="flex flex-col items-center overflow-hidden -mt-8">
              <motion.span 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2.2 }}
                className="text-4xl md:text-5xl font-serif font-black tracking-tighter leading-none italic uppercase text-brand-orange"
              >
                GHULE
              </motion.span>
              <motion.div 
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
                className="flex items-center gap-4 w-full mt-1"
              >
                <div className="h-[2px] flex-1 bg-white" />
                <span className="text-[12px] md:text-[14px] font-mono font-bold tracking-[0.5em] text-white leading-none uppercase italic">
                  CONSTRUCTION
                </span>
                <div className="h-[2px] flex-1 bg-white" />
              </motion.div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3 }}
                className="text-[10px] md:text-[12px] font-sans font-bold tracking-[0.3em] mt-3 uppercase text-brand-orange"
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
