import { motion } from 'motion/react';
import { LayoutGrid, Calendar, Award, Users } from 'lucide-react';
import Counter from './Counter';

const stats = [
  { icon: Calendar, label: 'Years of Experience', value: 15, suffix: '+' },
  { icon: LayoutGrid, label: 'Projects Completed', value: 500, suffix: '+' },
  { icon: Award, label: 'Design Awards', value: 12, suffix: '+' },
  { icon: Users, label: 'Expert Architects', value: 25, suffix: '+' },
];

export default function TrustBar() {
  return (
    <div className="relative py-12 md:py-16 px-6 md:px-20 overflow-hidden bg-white">
      {/* Structural Connecting Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="w-full h-full border-y border-brand-dark flex justify-around">
          <div className="w-px h-full bg-brand-dark" />
          <div className="w-px h-full bg-brand-dark" />
          <div className="w-px h-full bg-brand-dark" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-brand-dark/[0.02] backdrop-blur-3xl border border-black/5 rounded-sm p-12 md:p-16 flex flex-wrap justify-around items-center gap-12 md:gap-20 shadow-[0_40px_100px_rgba(0,0,0,0.03)]">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.1, 
                duration: 1, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="flex flex-col items-center md:items-start gap-4 group cursor-default"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-sm border border-brand-orange/20 flex items-center justify-center group-hover:bg-brand-orange transition-all duration-700 bg-white shadow-sm">
                  <stat.icon className="w-5 h-5 text-brand-orange group-hover:text-white transition-all duration-500" />
                </div>
                <div className="flex items-baseline gap-1">
                  <Counter 
                    value={stat.value} 
                    className="text-brand-dark font-serif font-bold text-3xl md:text-5xl uppercase leading-none tracking-tighter"
                  />
                  <span className="text-brand-orange font-serif font-bold text-2xl">{stat.suffix}</span>
                </div>
              </div>
              <p className="text-brand-dark/40 text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-black group-hover:text-brand-dark/70 transition-colors pl-1">
                {stat.label}
              </p>
              
              {/* Subtle Progress Underline */}
              <div className="w-8 h-[2px] bg-brand-orange/20 group-hover:w-full transition-all duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
