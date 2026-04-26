import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import img1 from '../assets/emotional_slideshow_1_1776867423249.png';
import img2 from '../assets/emotional_slideshow_2_1776867440625.png';
import img3 from '../assets/emotional_slideshow_3_1776867456541.png';

const slideImages = [img1, img2, img3];

export default function EmotionalSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.img 
            key={currentSlide}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={slideImages[currentSlide]} 
            alt="Emotional Architectural Space" 
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-white" />
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-brand-orange/5 mix-blend-overlay" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="w-12 h-[1px] bg-brand-orange" />
            <span className="text-brand-orange font-mono text-[10px] uppercase tracking-[0.4em] font-black italic">Precision Engineering</span>
            <div className="w-12 h-[1px] bg-brand-orange" />
          </div>
          <h2 className="text-5xl md:text-[9rem] font-serif font-bold uppercase text-brand-dark mb-12 leading-[0.85] tracking-tighter">
            STRUCTURES <br /> <span className="text-brand-orange italic drop-shadow-[0_0_30px_rgba(255,107,0,0.15)]">WITH PURPOSE.</span>
          </h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-brand-dark/40 text-[11px] md:text-[13px] uppercase tracking-[0.4em] font-black max-w-3xl mx-auto leading-loose italic font-serif"
        >
          Engineered for longevity, designed for human experience. We build more than structures; we build foundations for the future.
        </motion.p>
        
        {/* Progress Indicators */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-6">
          {slideImages.map((_, i) => (
            <div key={i} className="w-12 h-[3px] bg-brand-dark/5 overflow-hidden rounded-full">
              {i === currentSlide && (
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{ duration: 4, ease: "linear" }}
                  className="w-full h-full bg-brand-orange shadow-[0_0_15px_rgba(255,107,0,0.4)]"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
