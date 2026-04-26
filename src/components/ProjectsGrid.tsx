import { motion } from 'motion/react';
import { LayoutGrid, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Infrastructure', 'Commercial', 'Residential'];

const projects = [
  {
    id: 1,
    title: 'Pune Metro Link',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
    location: 'Pune, MH',
    year: '2024'
  },
  {
    id: 2,
    title: 'Aurora Business Hub',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    location: 'Baner, Pune',
    year: '2023'
  },
  {
    id: 3,
    title: 'The Ghule Manor',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
    location: 'Lonavala, MH',
    year: '2024'
  },
  {
    id: 4,
    title: 'State Highway 42',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1510333314052-959f635f7911?auto=format&fit=crop&q=80&w=800',
    location: 'Maharashtra',
    year: '2023'
  },
  {
    id: 5,
    title: 'Skyline Tech Park',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    location: 'Hinjewadi, Pune',
    year: '2022'
  },
  {
    id: 6,
    title: 'Heritage Villas',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    location: 'Wakad, Pune',
    year: '2023'
  }
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-32 px-6 md:px-20 bg-white border-t border-black/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-black/5 pb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-[1px] bg-brand-orange" />
                <span className="text-brand-orange font-mono text-[10px] uppercase tracking-[0.4em] font-black italic">Selected Works</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-serif font-bold uppercase leading-[0.9] tracking-tighter text-brand-dark">
                FEATURED <br /><span className="text-brand-orange italic drop-shadow-[0_0_30px_rgba(255,107,0,0.1)]">PROJECTS.</span>
              </h2>
            </motion.div>
          </div>
          <Link 
            to="/projects"
            className="group flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.5em] bg-brand-dark text-white px-10 py-5 rounded-sm hover:bg-brand-orange transition-all duration-700 relative overflow-hidden shadow-xl"
          >
            <span className="relative z-10">Explore Portfolio</span>
            <LayoutGrid className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative aspect-[4/5] md:aspect-[3/4] perspective-1000 cursor-pointer"
            >
              <div className="w-full h-full relative preserve-3d transition-transform duration-1000 ease-[0.22,1,0.36,1] group-hover:rotate-y-180">
                
                {/* Front of Card */}
                <div className="absolute inset-0 backface-hidden rounded-sm overflow-hidden border border-black/5 shadow-lg bg-brand-cream">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale brightness-90 transition-all duration-1000 group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-8 h-[1px] bg-brand-orange" />
                      <span className="text-brand-orange font-mono text-[10px] uppercase tracking-[0.3em] font-black">{project.category}</span>
                    </div>
                    <h3 className="text-4xl font-serif font-bold uppercase tracking-tight leading-none text-white">{project.title}</h3>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-sm border border-brand-orange/20 bg-brand-dark/95 backdrop-blur-xl flex flex-col justify-center items-center text-center p-12 shadow-2xl">
                  <div className="w-16 h-16 rounded-full border border-brand-orange/30 flex items-center justify-center mb-8 bg-brand-orange/5">
                    <LayoutGrid className="w-6 h-6 text-brand-orange" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold uppercase tracking-tight text-brand-orange mb-6">{project.title}</h3>
                  <p className="text-white/60 text-xs uppercase tracking-[0.2em] leading-loose max-w-sm mb-12 font-medium italic">
                    Expertly engineered structural solution delivering unmatched durability and modern functionality.
                  </p>
                  
                  <Link 
                    to={`/projects`}
                    className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] bg-white/[0.03] border border-brand-orange/30 px-8 py-4 rounded-sm hover:bg-brand-orange hover:text-white transition-all duration-500"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
