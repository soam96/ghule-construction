import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

// Custom AI Assets
import phase1 from '../assets/phase1.png';
import phase2 from '../assets/phase2.png';
import phase3 from '../assets/phase3.png';
import phase4 from '../assets/phase4.png';
import phase5 from '../assets/phase5.png';

gsap.registerPlugin(ScrollTrigger);

const heroContent = [
  {
    url: phase1,
    category: 'PHASE 01 // ARCHITECTURE',
    title: 'PRECISION',
    titleHighlight: 'FORESIGHT',
    subtitle: 'We translate visionary concepts into rigorous structural blueprints. Every angle is calculated for maximum integrity and aesthetic impact.'
  },
  {
    url: phase2,
    category: 'PHASE 02 // CONSTRUCTION',
    title: 'STRUCTURAL',
    titleHighlight: 'EXECUTION',
    subtitle: 'Heavy engineering meets master craftsmanship. We build the skeleton of tomorrow with uncompromising safety standards and industrial might.'
  },
  {
    url: phase3,
    category: 'PHASE 03 // COMPLETION',
    title: 'ARCHITECTURAL',
    titleHighlight: 'HERITAGE',
    subtitle: 'The final manifestation of design and durability. Delivering turnkey luxury spaces that stand as testaments to modern engineering.'
  },
  {
    url: phase4,
    category: 'PHASE 04 // INTERIOR',
    title: 'BESPOKE',
    titleHighlight: 'FINISHING',
    subtitle: 'Curating spaces with absolute precision. High-end materials and modern lighting converge to create environments of unparalleled luxury.'
  },
  {
    url: phase5,
    category: 'PHASE 05 // MAINTENANCE',
    title: 'LIFECYCLE',
    titleHighlight: 'INTEGRITY',
    subtitle: 'Ensuring structural longevity through advanced drone inspections and high-tech predictive maintenance protocols.'
  }
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % heroContent.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 0.35; // Significantly faster image cycle
      });
    }, 10);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-brand-dark overflow-hidden">
      
      {/* Desktop Split Layout */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        
        {/* Left Content Panel */}
        <div className="w-full md:w-[45%] h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 z-20 relative pt-24 md:pt-0">
          
          {/* Subtle noise overlay on dark */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          <motion.div style={{ y: contentY }} className="relative z-10 w-full max-w-xl">
            
            <div className="overflow-hidden mb-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`cat-${activeSlide}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-6"
                >
                  <div className="w-12 h-[1px] bg-brand-orange" />
                  <span className="text-brand-orange font-mono text-[10px] md:text-[11px] uppercase tracking-[0.5em] font-black italic">
                    {heroContent[activeSlide].category}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mb-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`title-${activeSlide}`}
                  initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h1 className="text-5xl md:text-[5rem] lg:text-[6rem] font-serif font-bold uppercase leading-[0.9] tracking-tighter text-white pb-2">
                    {heroContent[activeSlide].title} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange/60 italic inline-block mt-2">
                      {heroContent[activeSlide].titleHighlight}.
                    </span>
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="min-h-[100px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`sub-${activeSlide}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-white/50 text-sm md:text-[15px] uppercase tracking-[0.3em] font-black leading-loose font-serif italic max-w-lg"
                >
                  {heroContent[activeSlide].subtitle}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-16 flex items-center gap-10"
            >
              <Link to="/contact">
                <button className="group relative px-10 py-5 overflow-hidden rounded-sm bg-white hover:bg-brand-orange transition-colors duration-500 shadow-[0_0_30px_rgba(255,107,0,0)] hover:shadow-[0_0_30px_rgba(255,107,0,0.3)]">
                  <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] font-black text-brand-dark group-hover:text-white transition-colors duration-500 italic">Start Project</span>
                </button>
              </Link>
            </motion.div>

          </motion.div>

          {/* Slide Progress Navigation (Left Panel Bottom) */}
          <div className="absolute bottom-12 md:bottom-20 left-6 md:left-16 lg:left-24 flex gap-6 z-20">
            {heroContent.map((_, index) => (
              <button 
                key={index}
                onClick={() => { setActiveSlide(index); setProgress(0); }}
                className="group relative h-[3px] w-16 md:w-20 bg-white/10 overflow-hidden cursor-pointer"
              >
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-brand-orange shadow-[0_0_15px_rgba(255,107,0,0.8)]"
                  animate={{ width: activeSlide === index ? `${progress}%` : activeSlide > index ? "100%" : "0%" }}
                  transition={{ duration: 0.1 }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Image Panel */}
        <div className="absolute inset-0 md:relative md:w-[55%] h-full z-0 md:z-10 overflow-hidden bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <motion.img 
                src={heroContent[activeSlide].url} 
                alt={heroContent[activeSlide].title}
                style={{ y: imageY }}
                className="w-full h-[120%] object-cover opacity-30 md:opacity-100"
              />
              
              {/* Image Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/50 to-transparent md:from-brand-dark md:via-transparent md:to-transparent opacity-100 md:opacity-80" />
              <div className="absolute inset-0 bg-brand-orange/5 mix-blend-overlay" />
            </motion.div>
          </AnimatePresence>

          {/* Right side animated vertical line */}
          <div className="hidden md:block absolute right-16 top-0 bottom-0 w-[1px] bg-white/10 z-20 overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-brand-orange to-transparent opacity-50"
              animate={{ y: ['-100%', '800%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
