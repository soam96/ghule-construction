import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Magnetic from './Magnetic';

export default function FinalCTA() {
  return (
    <section className="py-40 bg-brand-orange relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-brand-dark font-mono text-[10px] uppercase tracking-[0.6em] font-black italic">Next Steps</span>
          </div>
          <h2 className="text-5xl md:text-[9rem] font-serif font-bold uppercase text-brand-dark mb-16 leading-[0.85] tracking-tighter">
            READY TO <br /> <span className="text-white italic drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]">BUILD?</span>
          </h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-brand-dark/60 text-[11px] md:text-[14px] uppercase tracking-[0.4em] font-black mb-24 max-w-3xl mx-auto leading-loose italic font-serif"
        >
          Partner with Pune's premier engineering firm to transform your vision into a structural masterpiece.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <Magnetic strength={0.3}>
            <Link 
              to="/contact"
              className="px-16 py-8 bg-brand-dark text-white rounded-full flex items-center gap-6 hover:bg-white hover:text-brand-dark transition-all duration-700 shadow-2xl group relative overflow-hidden"
            >
              <span className="text-[11px] uppercase tracking-[0.4em] font-black relative z-10 transition-colors duration-700">Request Site Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-700 relative z-10" />
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.76, 0, 0.24, 1]" />
            </Link>
          </Magnetic>

          <Magnetic strength={0.5}>
            <a 
              href="https://wa.me/918605937367"
              target="_blank"
              className="px-16 py-8 bg-white/10 text-brand-dark border border-black/5 backdrop-blur-md rounded-full flex items-center gap-6 hover:bg-white hover:text-brand-dark transition-all duration-700 group overflow-hidden relative shadow-sm"
            >
              <MessageCircle className="w-6 h-6 fill-current relative z-10 text-brand-dark group-hover:text-brand-dark" />
              <span className="text-[11px] uppercase tracking-[0.4em] font-black relative z-10 transition-colors duration-700">WhatsApp Expert</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.76, 0, 0.24, 1]" />
            </a>
          </Magnetic>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-[150px]" />
      <div className="absolute top-0 right-0 p-12 text-brand-dark/5 font-mono text-[10vw] font-black select-none pointer-events-none">2026</div>
    </section>
  );
}
