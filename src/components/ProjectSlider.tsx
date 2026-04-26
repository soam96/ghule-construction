import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';

const projects = [
  {
    name: 'Metropark IT Hub',
    location: 'Hinjewadi, Pune',
    before: '/assets/construction_before_2_1777211668939.png',
    after: '/assets/construction_after_2_1777211696527.png',
  },
  {
    name: 'Celestial Residency',
    location: 'Baner, Pune',
    before: '/assets/construction_before_1_1777211618661.png',
    after: '/assets/construction_after_1_1777211643222.png',
  },
  {
    name: 'Savitri Viaduct',
    location: 'Western Ghats, MH',
    before: '/assets/construction_before_3_1777211725598.png',
    after: '/assets/construction_after_3_1777211759698.png',
  },
];

export default function ProjectSlider() {
  const [activeIdx, setActiveIdx] = useState(0);
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

  const project = projects[activeIdx];

  return (
    <section ref={sectionRef} className="py-40 px-6 md:px-20 bg-white text-brand-dark border-y border-black/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-16">
          <motion.div
            key={`title-${activeIdx}`}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-12 h-[1px] bg-brand-orange" />
              <span className="text-brand-orange font-mono text-[11px] uppercase tracking-[0.5em] font-black italic">Structural Metamorphosis</span>
            </div>
            <h2 className="text-5xl md:text-[8rem] font-serif font-bold uppercase leading-[0.85] tracking-tighter">
              {project.name.split(' ')[0]} <br /><span className="text-brand-orange italic drop-shadow-[0_0_50px_rgba(255,107,0,0.15)]">{project.name.split(' ').slice(1).join(' ')}.</span>
            </h2>
          </motion.div>
          
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              {projects.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`w-12 h-12 rounded-full border flex items-center justify-center font-mono text-[10px] font-black transition-all duration-500 ${activeIdx === i ? 'bg-brand-orange border-brand-orange text-white' : 'border-black/10 hover:border-brand-orange text-brand-dark'}`}
                >
                  0{i + 1}
                </button>
              ))}
            </div>
            <motion.p 
              key={`desc-${activeIdx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-sm text-brand-dark/40 text-[11px] md:text-[14px] uppercase tracking-[0.4em] leading-loose font-black italic font-serif"
            >
              Location: {project.location} <br />
              Witness the technical precision of our {project.name.toLowerCase()} project evolution.
            </motion.p>
          </div>
        </div>

        <motion.div 
          key={`slider-${activeIdx}`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          ref={containerRef}
          className="relative aspect-video w-full overflow-hidden rounded-sm cursor-col-resize select-none bg-brand-cream/10 shadow-2xl border border-black/5 group touch-none will-change-transform"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* Finished Photo (After) */}
          <img 
            src={project.after} 
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
              src={project.before} 
              alt="Construction Phase" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-orange/10 mix-blend-overlay pointer-events-none" />
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
