import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'motion/react';

const stats = [
  { label: 'Successful Projects', value: 200, suffix: '+' },
  { label: 'Years of Legacy', value: 15, suffix: '' },
  { label: 'Equipment Fleet', value: 50, suffix: '+' },
  { label: 'Expert Engineers', value: 100, suffix: '+' },
];

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-item', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Counter animation
      const counters = document.querySelectorAll('.stat-value');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        gsap.to(counter, {
          innerText: target,
          duration: 2.5,
          snap: { innerText: 1 },
          ease: 'expo.out',
          scrollTrigger: {
            trigger: counter,
            start: 'top 90%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-white text-slate-900 overflow-hidden relative">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full border-l border-t border-slate-900 grid grid-cols-4 md:grid-cols-8">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border-r border-b border-slate-900 aspect-square" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item group">
              <div className="relative mb-6">
                <div className="text-5xl md:text-8xl font-display text-bronze flex items-baseline gap-1 group-hover:scale-110 transition-transform duration-500 origin-left">
                  <span className="stat-value" data-target={stat.value}>0</span>
                  <span className="text-2xl md:text-4xl">{stat.suffix}</span>
                </div>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-[1px] bg-slate-200 mt-2" 
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
