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
          // Wait for the full animation sequence to complete (Tagline reveal is at 3.2s)
          setTimeout(() => {
            setIsLoading(false);
            onComplete();
          }, 4500); 
          return 100;
        }
        // Slower progress to match the cinematic build
        return prev + 0.8;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            clipPath: 'inset(0 0 100% 0)',
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-[999] bg-[#0F172A] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Moving Architectural Grid Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <motion.div 
              initial={{ x: 0, y: 0 }}
              animate={{ x: -50, y: -50 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-[200%] h-[200%]"
              style={{ 
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} 
            />
          </div>

          {/* Cinematic Light Flare */}
          <motion.div 
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none"
          />

          <div className="relative flex flex-col items-center z-10">
            {/* Structural Drawing Logo Animation */}
            <motion.svg 
              viewBox="0 0 200 160" 
              className="w-40 h-40 mb-2"
            >
              {/* Skyscrapers - Sketch Phase */}
              <motion.path 
                d="M 50 120 L 50 80 L 75 95 L 75 120 Z" 
                fill="none"
                stroke="white"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path 
                d="M 75 120 L 75 60 L 95 75 L 95 120 Z" 
                fill="none"
                stroke="#FF6B00"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
              />
              <motion.path 
                d="M 95 120 L 95 35 L 120 55 L 120 120 Z" 
                fill="none"
                stroke="white"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
              />

              {/* Fill Phase */}
              <motion.path 
                d="M 50 120 L 50 80 L 75 95 L 75 120 Z" 
                fill="#1E293B" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              />
              <motion.path 
                d="M 75 120 L 75 60 L 95 75 L 95 120 Z" 
                fill="#FF6B00" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
              />
              <motion.path 
                d="M 95 120 L 95 35 L 120 55 L 120 120 Z" 
                fill="#1E293B" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.1 }}
              />

              {/* Crane - Sketch Phase */}
              <motion.path 
                d="M 130 120 L 130 65 L 145 65 L 145 120 M 130 75 L 165 70" 
                fill="none"
                stroke="#FF6B00"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
              />

              {/* House Roof - Sketch Phase */}
              <motion.path 
                d="M 30 140 L 90 100 L 150 140" 
                fill="none"
                stroke="#FF6B00"
                strokeWidth="8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
              />

              {/* House Facade - Fill */}
              <motion.path 
                d="M 30 140 L 90 100 L 150 140 L 150 155 L 30 155 Z" 
                fill="white" 
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.8, delay: 2.2 }}
              />
            </motion.svg>

            {/* Cinematic Text Reveal */}
            <div className="flex flex-col items-center -mt-8">
              <div className="overflow-hidden">
                <motion.span 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-5xl md:text-6xl font-serif font-black tracking-tighter leading-none italic uppercase text-brand-orange"
                >
                  GHULE
                </motion.span>
              </div>

              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: 1 }}
                transition={{ duration: 1, delay: 2.8 }}
                className="flex items-center gap-4 mt-2"
              >
                <div className="h-[2px] flex-1 bg-white/20" />
                <span className="text-[12px] md:text-[14px] font-mono font-bold tracking-[0.5em] text-white leading-none uppercase italic whitespace-nowrap">
                  CONSTRUCTION
                </span>
                <div className="h-[2px] flex-1 bg-white/20" />
              </motion.div>

              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3.2 }}
                className="text-[10px] md:text-[12px] font-sans font-bold tracking-[0.3em] mt-4 uppercase text-brand-orange"
              >
                Building Dreams. Creating Futures.
              </motion.span>
            </div>
          </div>

          {/* Minimalist Progress Indicator */}
          <div className="absolute bottom-20 flex flex-col items-center gap-4 w-64">
            <div className="w-full h-[1px] bg-white/5 relative overflow-hidden">
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                className="absolute inset-0 bg-brand-orange origin-left"
              />
            </div>
            <motion.span 
              className="text-white/20 font-mono text-[9px] tracking-[0.5em] uppercase italic"
            >
              INITIALIZING {Math.floor(progress)}%
            </motion.span>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
