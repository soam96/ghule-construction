import { motion } from 'motion/react';
import { Target, Zap, ShieldCheck, Heart, Leaf } from 'lucide-react';

const reasons = [
  {
    icon: Target,
    title: 'Strategic Vision',
    desc: 'Each blueprint is crafted to maximize your property value and lifestyle.'
  },
  {
    icon: Zap,
    title: 'Rapid Execution',
    desc: 'Our proprietary "Fast-Track" method ensures delivery without quality sacrifice.'
  },
  {
    icon: ShieldCheck,
    title: 'Certified Quality',
    desc: 'We source only premium, lab-tested materials for structural longevity.'
  },
  {
    icon: Heart,
    title: 'Personalized Touch',
    desc: 'Bespoke designs that reflect your personality, not just a catalog style.'
  },
  {
    icon: Leaf,
    title: 'Sustainable Choice',
    desc: 'Leadership in eco-conscious design for a healthier Pune environment.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-32 px-6 md:px-20 bg-brand-cream/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center relative z-10">
        <motion.div
           initial={{ opacity: 0, x: -100 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="w-12 h-[1px] bg-brand-orange" />
            <span className="text-brand-orange font-mono text-[10px] uppercase tracking-[0.4em] font-black italic">The Ghule Edge</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-serif font-bold uppercase leading-[0.9] tracking-tighter text-brand-dark mt-8">
            ENGINEERING <br /> <span className="text-brand-orange italic drop-shadow-[0_0_30px_rgba(255,107,0,0.1)]">PRECISION.</span>
          </h2>
          <p className="text-brand-dark/40 text-base md:text-lg leading-loose mb-16 max-w-lg font-medium italic mt-8">
            As premier construction experts in Pune, we bridge the gap between engineering excellence and structural masterpiece.
          </p>
          
          <motion.div 
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="relative aspect-[4/3] rounded-sm overflow-hidden group border border-black/5 shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200" 
              alt="Construction Site" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-orange/5 mix-blend-overlay group-hover:bg-brand-orange/0 transition-colors duration-1000" />
          </motion.div>
        </motion.div>

        <div className="grid gap-10">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 100, rotateY: 20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 20, backgroundColor: "rgba(0,0,0,0.02)" }}
              className="flex gap-10 group p-8 bg-white border border-black/5 hover:border-brand-orange/40 transition-all duration-700 rounded-sm relative overflow-hidden shadow-sm hover:shadow-xl"
            >
              <div className="flex-shrink-0 w-20 h-20 border border-black/5 rounded-sm flex items-center justify-center group-hover:border-brand-orange/0 transition-all duration-700 relative z-10 bg-white shadow-sm">
                <span className="absolute -top-3 -left-3 text-[11px] font-mono font-black text-brand-orange opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                <reason.icon className="w-8 h-8 text-brand-orange group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-brand-orange translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                <reason.icon className="absolute w-8 h-8 text-white scale-0 group-hover:scale-110 transition-all duration-700 delay-100" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold uppercase mb-3 text-brand-dark group-hover:text-brand-orange transition-colors tracking-tight">{reason.title}</h3>
                <p className="text-brand-dark/40 text-[11px] leading-relaxed uppercase tracking-[0.2em] font-black group-hover:text-brand-dark/60 transition-colors">
                  {reason.desc}
                </p>
              </div>
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-brand-orange/5 blur-[60px] translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
