import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, 300]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.15]">
      {/* Grid Pattern - Blueprint Style */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Floating Engineering Lines */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-[15%] left-[8%] w-[500px] h-[1.5px] bg-brand-orange/40" 
      />
      <motion.div 
        style={{ y: y2, rotate: -rotate }}
        className="absolute top-[75%] right-[12%] w-[400px] h-[1px] bg-brand-dark/40" 
      />
      <motion.div 
        style={{ y: y1, x: y2 }}
        className="absolute top-[45%] right-[25%] w-[120px] h-[120px] border-[0.5px] border-brand-orange/30 rotate-12" 
      />
      
      {/* Technical Dots */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-brand-orange rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: Math.random() * 4 + 3, repeat: Infinity }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
