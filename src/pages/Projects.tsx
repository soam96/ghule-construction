import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import TextReveal from '../components/TextReveal';
import gsap from 'gsap';
import Magnetic from '../components/Magnetic';

const projects = [
  {
    id: 1,
    title: 'Nirman Bridge',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200',
    location: 'Tathawade, Pune',
    color: 'bg-brand-orange/10'
  },
  {
    id: 2,
    title: 'Corporate Plaza',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    location: 'Baner, Pune',
    color: 'bg-blue-500/10'
  },
  {
    id: 3,
    title: 'Public Utility Hub',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200',
    location: 'Hinjewadi, Pune',
    color: 'bg-green-500/10'
  },
  {
    id: 4,
    title: 'Regency Villa',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
    location: 'Wakad, Pune',
    color: 'bg-orange-500/10'
  },
  {
    id: 5,
    title: 'Industrial Estate',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&q=80&w=1200',
    location: 'Ravet, Pune',
    color: 'bg-brand-orange/10'
  },
  {
    id: 6,
    title: 'Skyline Mall',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200',
    location: 'Pimpri, Pune',
    color: 'bg-blue-500/10'
  },
];

const categories = ['All', 'Infrastructure', 'Commercial', 'Residential', 'Industrial'];

function ProjectCard({ project, index }: { project: any, index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
      className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-brand-cream/20 shadow-xl"
    >
      <div className="w-full h-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
      
      <div className="absolute bottom-0 left-0 w-full p-8">
        <span className="text-brand-orange text-[10px] uppercase tracking-[0.4em] mb-4 block font-black italic">{project.category}</span>
        <h3 className="text-2xl font-serif font-bold uppercase mb-2 text-white tracking-tighter">{project.title}</h3>
        <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">{project.location}</p>
        
        <div className="mt-8 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-white/60 group-hover:text-brand-orange transition-colors font-black">
          Exploration
          <div className="w-6 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-brand-orange transition-all duration-500" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-48 pb-32 px-6 md:px-20 min-h-screen bg-white relative"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24">
          <span className="text-brand-orange font-mono text-[10px] mb-6 block uppercase tracking-[0.5em] font-black italic">Structural Portfolio</span>
          <h1 className="text-6xl md:text-9xl font-serif font-bold uppercase leading-[0.85] mb-16 tracking-tighter text-brand-dark">
            SELECTED <br /><span className="text-brand-orange italic drop-shadow-[0_0_50px_rgba(255,107,0,0.1)]">WORKS.</span>
          </h1>
          
          <div className="flex flex-wrap gap-6 md:gap-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.4em] pb-3 border-b-[2px] transition-all duration-700 font-black ${
                  activeCategory === cat ? 'border-brand-orange text-brand-dark' : 'border-transparent text-brand-dark/30 hover:text-brand-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
