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
            {/* Cinematic Construction SVG Logo Animation */}
            <motion.svg 
              viewBox="0 0 100 100" 
              className="w-24 h-24 mb-10 text-white"
            >
              {/* Building in the Background */}
              <motion.path 
                d="M 50 20 L 85 45 L 85 80 L 15 80 L 15 45 Z" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
                strokeOpacity="0.2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />

              {/* Structural "G" in the Foreground */}
              {/* Vertical Stem */}
              <motion.rect 
                x="25" y="25" width="8" height="50" 
                fill="currentColor"
                initial={{ height: 0 }}
                animate={{ height: 50 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              {/* Top Bar */}
              <motion.rect 
                x="25" y="25" width="50" height="8" 
                fill="currentColor"
                initial={{ width: 0 }}
                animate={{ width: 50 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              />
              {/* Bottom Bar */}
              <motion.rect 
                x="25" y="67" width="50" height="8" 
                fill="currentColor"
                initial={{ width: 0 }}
                animate={{ width: 50 }}
                transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
              />
              {/* The Middle "G" Accent Bar */}
              <motion.path 
                d="M 55 45 H 75 V 75" 
                fill="none" 
                stroke="#FF6B00" 
                strokeWidth="8"
                strokeLinecap="square"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
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
