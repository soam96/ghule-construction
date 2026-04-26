import { motion } from 'motion/react';
import { useRef } from 'react';
import { useScroll, useTransform } from 'motion/react';

const materials = [
  {
    name: 'Structural Steel',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    desc: 'High-tensile TATA Tiscon reinforcement for structural longevity.'
  },
  {
    name: 'Precision Concrete',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
    desc: 'M40 grade RMC for superior compressive strength and finish.'
  },
  {
    name: 'Industrial Glass',
    image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=800',
    desc: 'Impact-resistant glazing for modern commercial infrastructure.'
  }
];

export default function MaterialShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yMove = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-48 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
        <span className="text-[20vw] font-serif font-black leading-none text-stroke-brand-dark text-white italic">05</span>
      </div>

      <div className="container mx-auto px-6 md:px-24 relative z-10">
        <div className="mb-40 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-orange font-mono text-[10px] mb-8 block uppercase tracking-[0.6em] font-black italic">TECHNICAL SPECS</span>
            <h2 className="text-6xl md:text-[9rem] font-serif font-bold uppercase text-brand-dark leading-[0.85] tracking-tighter">
              THE SCIENCE <br /> OF <span className="text-stroke-brand-orange italic">BUILD.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-16 md:gap-24">
          {materials.map((mat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-12 shadow-2xl bg-brand-cream/10 border border-black/5">
                {/* Main Image */}
                <motion.div style={{ y: i % 2 === 0 ? yMove : 0 }} className="w-full h-full">
                    <img 
                      src={mat.image} 
                      alt={mat.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 scale-105"
                      referrerPolicy="no-referrer"
                    />
                </motion.div>

                {/* Blueprint Reveal Overlay */}
                <motion.div 
                  initial={{ clipPath: 'inset(100% 0 0 0)' }}
                  whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.5 + i * 0.2 }}
                  className="absolute inset-0 bg-brand-orange/20 mix-blend-overlay pointer-events-none"
                >
                  <div className="w-full h-full opacity-30 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
                </motion.div>
                
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-700" />
                
                {/* Decorative UI */}
                <div className="absolute top-10 left-10 text-brand-orange font-mono text-[11px] font-black z-20 italic bg-white/80 backdrop-blur-md px-4 py-2 rounded-sm border border-brand-orange/20">M_0{i+1}</div>
                <div className="absolute bottom-12 left-12 z-20 overflow-hidden">
                    <motion.div 
                       initial={{ x: '-100%' }}
                       whileHover={{ x: '0%' }}
                       className="bg-brand-orange text-white px-8 py-4 font-black text-[11px] uppercase tracking-[0.4em] transition-transform duration-700 shadow-xl italic"
                    >
                       Technical Specs
                    </motion.div>
                </div>
              </div>
              
              <div className="px-2">
                <h3 className="text-4xl font-serif font-bold uppercase text-brand-dark mb-6 group-hover:text-brand-orange transition-colors tracking-tighter leading-none">{mat.name}</h3>
                <p className="text-brand-dark/40 text-[11px] md:text-[13px] uppercase tracking-[0.3em] font-black leading-loose group-hover:text-brand-dark/70 transition-colors italic font-serif max-w-[90%]">
                  {mat.desc}
                </p>
                <div className="mt-8 w-12 h-[2px] bg-brand-orange/20 group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
