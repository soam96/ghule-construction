import { motion } from 'motion/react';
import { Map, Landmark, Hammer, ShieldCheck } from 'lucide-react';

import imgUnderstanding from '../assets/process_understanding_1776867235720.png';
import imgDesign from '../assets/process_design_1776867254585.png';
import imgExecution from '../assets/process_execution_1776867274997.png';
import imgHandover from '../assets/process_handover_1776867301563.png';

const steps = [
  {
    id: '01',
    icon: Map,
    title: 'Floor Planning',
    desc: 'Translating spatial requirements into functional architectural blueprints. We design for flow, safety, and aesthetic harmony.',
    image: imgUnderstanding
  },
  {
    id: '02',
    icon: Landmark,
    title: 'Approvals & Infra',
    desc: 'Liaisoning with government bodies for infrastructure permits and structural clearance. Ensuring every build is 100% compliant.',
    image: imgDesign
  },
  {
    id: '03',
    icon: Hammer,
    title: 'Full Execution',
    desc: 'The building phase. Precision engineering, high-grade material sourcing, and rigorous site management to bring blueprints to life.',
    image: imgExecution
  },
  {
    id: '04',
    icon: ShieldCheck,
    title: 'Handover',
    desc: 'Final inspection, quality certification, and handing over the keys. Your vision, structurally realized and ready for use.',
    image: imgHandover
  }
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 md:px-20 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-40 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-black/5 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-center md:justify-start gap-6 mb-10">
              <div className="w-12 h-[1px] bg-brand-orange" />
              <span className="text-brand-orange font-mono text-[10px] uppercase tracking-[0.4em] font-black italic">Execution Protocol</span>
            </div>
            <h2 className="text-5xl md:text-[9rem] font-serif font-bold uppercase leading-[0.85] tracking-tighter text-brand-dark">
              ENGINEERING <br className="hidden md:block" />
              <span className="text-brand-orange italic drop-shadow-[0_0_50px_rgba(255,107,0,0.1)]">LIFECYCLE.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-brand-dark/30 text-[11px] uppercase tracking-[0.3em] font-black max-w-sm leading-loose italic font-serif"
          >
            A high-precision, multi-phase protocol engineered for technical excellence and structural longevity.
          </motion.p>
        </div>

        <div className="flex flex-col gap-48">
          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-20 lg:gap-40 group`}>
              
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 1 ? 100 : -100, clipPath: 'inset(10% 10% 10% 10%)' }}
                whileInView={{ opacity: 1, x: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full md:w-1/2 relative"
              >
                <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-sm shadow-[0_50px_100px_rgba(0,0,0,0.1)]">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-brand-orange/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </div>
                {/* Large Background Number */}
                <div className={`absolute top-1/2 -translate-y-1/2 ${i % 2 === 1 ? '-left-12 md:-left-24' : '-right-12 md:-right-24'} text-[10rem] md:text-[25rem] font-serif font-bold text-brand-dark/[0.03] -z-10 select-none group-hover:text-brand-orange/[0.07] transition-colors duration-1000`}>
                  {step.id}
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="w-full md:w-1/2 flex flex-col justify-center"
              >
                <div className="flex items-center gap-8 mb-12">
                  <div className="w-20 h-20 rounded-sm border border-black/5 flex items-center justify-center bg-brand-cream/10 group-hover:border-brand-orange transition-all duration-700 relative overflow-hidden shadow-sm">
                    <step.icon className="w-8 h-8 text-brand-orange relative z-10 group-hover:scale-125 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-brand-orange translate-y-full group-hover:translate-y-0 opacity-10 transition-transform duration-500" />
                  </div>
                  <span className="text-brand-orange font-serif font-bold text-4xl italic">Phase {step.id}</span>
                </div>
                
                <h3 className="text-4xl md:text-7xl font-serif font-bold uppercase text-brand-dark mb-10 tracking-tighter leading-none group-hover:text-brand-orange transition-colors duration-700">
                  {step.title}
                </h3>
                
                <p className="text-brand-dark/50 text-base md:text-lg leading-loose font-medium italic max-w-md relative pl-10 border-l-[3px] border-brand-orange/20 group-hover:border-brand-orange transition-all duration-700 font-serif">
                  {step.desc}
                </p>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
