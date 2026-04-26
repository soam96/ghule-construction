import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Ghule Construction delivered our government bridge project ahead of schedule with zero safety incidents. Their engineering precision and liaisoning expertise are truly unparalleled in Pune.",
    name: "Vijay Deshmukh",
    project: "Infra Project, Pune",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "The full execution of our business hub was flawlessly managed. From site clearing to the final handover, the Ghule team handled every technical detail. Our commercial space is now a landmark.",
    name: "Amit Verma",
    project: "Aurora Business Hub",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Highly impressed with their structural integrity and premium finishes. Building our luxury villa with Ghule Construction was a seamless experience. They are the best construction firm for premium residences.",
    name: "Anand S.",
    project: "Premium Villa, Lonavala",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 md:px-20 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 flex items-center justify-between border-b border-black/5 pb-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-brand-orange font-mono text-xs uppercase tracking-widest font-black">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-serif font-bold uppercase tracking-tight leading-tight text-brand-dark">
              CLIENTS <span className="text-brand-orange italic">SAY.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
              className="p-12 bg-brand-cream/20 border border-black/5 rounded-sm relative group hover:bg-white transition-all duration-700 hover:shadow-2xl"
            >
              <Quote className="w-12 h-12 text-brand-orange/10 absolute top-8 right-8 group-hover:text-brand-orange/30 transition-all duration-500 group-hover:scale-125" />
              <div className="absolute top-8 left-8 text-[10px] font-mono text-brand-orange/40 font-bold italic">Q_0{i+1}</div>
              
              <p className="text-brand-dark/60 text-md leading-relaxed mb-12 relative z-10 italic font-medium group-hover:text-brand-dark transition-colors">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-6 pt-8 border-t border-black/5">
                <div className="relative">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full grayscale group-hover:grayscale-0 transition-all duration-700 shadow-sm" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 rounded-full border border-brand-orange/20 scale-125 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                </div>
                <div>
                  <h4 className="text-brand-dark font-black uppercase tracking-widest text-[11px] mb-1">{t.name}</h4>
                  <p className="text-brand-orange text-[10px] uppercase font-bold tracking-[0.25em]">{t.project}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
