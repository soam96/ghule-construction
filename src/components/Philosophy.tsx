import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

import TextReveal from './TextReveal';
import FloatingElements from './FloatingElements';

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Large Text Parallax
      gsap.to(textRef.current, {
        xPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Image Reveal
      gsap.fromTo(imageRef.current, 
        { scale: 1.2, opacity: 0 },
        { 
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
          }
        }
      );

      gsap.to('.philosophy-image', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Text Slide In
      gsap.from('.philosophy-text', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.philosophy-text',
          start: 'top 90%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-48 md:py-64 bg-white overflow-hidden">
      <FloatingElements />
      
      {/* Absolute Numbering Background */}
      <div className="absolute top-12 left-12 p-12 opacity-[0.02] pointer-events-none z-0">
        <span className="text-[25vw] font-serif font-black leading-none text-stroke-brand-dark text-white italic">02</span>
      </div>

      {/* Background Large Text */}
      <h2 
        ref={textRef}
        className="absolute top-1/2 -translate-y-1/2 left-0 text-[15vw] font-serif font-black text-brand-dark/[0.02] whitespace-nowrap pointer-events-none select-none uppercase tracking-tighter italic"
      >
        STRUCTURAL_EVOLUTION STRUCTURAL_EVOLUTION
      </h2>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="order-2 md:order-1">
            <motion.span 
               initial={{ x: -20, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               className="philosophy-text text-brand-orange font-mono text-[9px] md:text-[10px] mb-8 md:mb-10 block uppercase tracking-[0.6em] font-black italic"
            >
               ETHOS & ENGINEERING
            </motion.span>
            <div className="philosophy-text">
              <h2 className="text-4xl md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] font-serif font-bold leading-[0.9] mb-8 md:mb-10 uppercase tracking-tighter text-brand-dark">
                BEYOND <span className="text-stroke-brand-orange">STRUCTURE</span>, <br />
                TOWARDS <span className="italic text-brand-orange drop-shadow-[0_0_50px_rgba(255,107,0,0.15)]">PURPOSE.</span>
              </h2>
            </div>
            <p className="philosophy-text text-brand-dark/50 text-[11px] md:text-[13px] uppercase tracking-[0.2em] font-black leading-[2.5] max-w-lg italic font-serif">
              At Ghule Construction, we don't just build walls; we engineer legacies. Every line we draw is a technical commitment to structural excellence and human safety. Our philosophy is rooted in engineering precision and aesthetic purpose.
            </p>
            
            <div className="philosophy-text mt-16 flex items-center gap-12">
              <div className="w-24 h-[1px] bg-brand-orange/30" />
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-brand-dark/30 font-black italic font-mono">EST. 2012 • MH-12</p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div ref={imageRef} className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm bg-brand-cream/10 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-black/5">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1920" 
                alt="Architectural Detail" 
                className="philosophy-image w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent opacity-60" />
              <div className="absolute bottom-10 right-10 text-[9px] font-mono text-brand-dark/20 uppercase tracking-[0.5em] rotate-90 origin-right transition-all group-hover:text-brand-orange font-black italic">
                 STRUCTURAL_INTEGRITY
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
