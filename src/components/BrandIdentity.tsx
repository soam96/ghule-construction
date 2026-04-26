import { motion } from 'motion/react';
import Logo from './Logo';

export default function BrandIdentity() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <span className="text-brand-orange font-serif italic text-sm mb-6 block uppercase tracking-[0.3em]">Engineering Identity</span>
            <h2 className="text-4xl md:text-7xl font-serif font-bold text-brand-dark mb-8 leading-tight">
              PRECISION <br /> <span className="text-brand-orange">ENGINEERED.</span>
            </h2>
            <p className="text-brand-dark/50 text-sm uppercase tracking-widest leading-loose max-w-lg font-medium italic">
              Our new identity represents the structural integrity and modern aesthetic we bring to every infrastructure and residential project.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex-1 relative group flex justify-center"
          >
            <div className="absolute inset-0 bg-brand-orange/5 blur-[120px] rounded-full group-hover:bg-brand-orange/10 transition-all duration-1000" />
            <div className="relative z-10 p-20 bg-white border border-black/5 rounded-sm shadow-2xl flex items-center justify-center min-h-[300px] w-full">
              <Logo isDark={true} className="scale-[2.5]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
