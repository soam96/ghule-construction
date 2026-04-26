import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';

const projects = [
  {
    name: 'Nirman Viaduct',
    location: 'Magarpatta, Pune',
    before: 'https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80&w=1200', // B&W/Construction
    after: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=1200', // Color/Finished
  },
];

export default function ProjectSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const move = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
      const position = ((x - rect.left) / rect.width) * 100;
      setSliderPos(Math.min(Math.max(position, 0), 100));
    };

    requestAnimationFrame(move);
  };

  return (
    <section ref={sectionRef} className="py-40 px-6 md:px-20 bg-white text-brand-dark border-y border-black/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-16">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-12 h-[1px] bg-brand-orange" />
              <span className="text-brand-orange font-mono text-[11px] uppercase tracking-[0.5em] font-black italic">Structural Metamorphosis</span>
            </div>
            <h2 className="text-5xl md:text-[8rem] font-serif font-bold uppercase leading-[0.85] tracking-tighter">
              RENDER TO <br /><span className="text-brand-orange italic drop-shadow-[0_0_50px_rgba(255,107,0,0.15)]">REALITY.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="max-w-sm text-brand-dark/40 text-[11px] md:text-[14px] uppercase tracking-[0.4em] leading-loose font-black italic font-serif"
          >
            Watch the technical precision of our engineering simulations evolve into the final architectural masterpiece.
          </motion.p>
        </div>

        <motion.div 
          initial={{ y: 100, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          ref={containerRef}
          className="relative aspect-video w-full overflow-hidden rounded-sm cursor-col-resize select-none bg-brand-cream/10 shadow-2xl border border-black/5 group touch-none will-change-transform"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* Finished Photo (After) */}
          <img 
            src={projects[0].after} 
            alt="Reality" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 pointer-events-none"
            referrerPolicy="no-referrer"
          />
          
          {/* Blueprint/Render (Before) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)`, willChange: 'clip-path' }}
          >
            <img 
              src={projects[0].before} 
              alt="Construction Phase" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-orange/20 mix-blend-overlay pointer-events-none" />
            
            {/* Grid Overlay for "Before" */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] pointer-events-none" />
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-[2px] bg-white z-20 shadow-[0_0_20px_rgba(255,255,255,0.5)]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl border border-black/5">
              <div className="flex gap-1.5">
                <div className="w-[2.5px] h-6 bg-brand-orange rounded-full" />
                <div className="w-[2.5px] h-6 bg-brand-orange rounded-full" />
              </div>
            </div>
            
            <motion.div 
              animate={{ opacity: [0, 1, 0], x: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8 text-[10px] text-white font-black uppercase tracking-widest whitespace-nowrap pointer-events-none"
            >
              Slide to reveal
            </motion.div>
          </div>

          {/* Labels */}
          <div className="absolute top-12 left-12 z-30 pointer-events-none">
            <span className="bg-brand-dark/90 backdrop-blur-md text-white px-8 py-4 text-[10px] uppercase tracking-[0.4em] font-black italic rounded-sm border border-white/10 shadow-xl">PHASE: CONSTRUCTION</span>
          </div>
          <div className="absolute top-12 right-12 z-30 pointer-events-none">
            <span className="bg-brand-orange text-white px-8 py-4 text-[10px] uppercase tracking-[0.4em] font-black italic rounded-sm shadow-xl">PHASE: COMPLETION</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
