import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Building2, HardHat, Home, Warehouse, ShieldCheck, ArrowUpRight, X, CheckCircle2 } from 'lucide-react';

const serviceItems = [
  {
    id: 'government-infra',
    title: 'Government Infrastructure',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
    fullImages: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200'
    ],
    desc: 'Developing critical infrastructure from bridges to public institutions with structural integrity.',
    fullDesc: 'Our government infrastructure vertical specializes in high-stakes public works. From multi-lane bridges to massive administrative complexes, we ensure that every structure meets the highest standards of safety, durability, and technical compliance mandated by Indian IS codes.',
    features: ['Technical Compliance', 'Large Scale Execution', 'Public Safety Standards', 'IS Code Adherence']
  },
  {
    id: 'commercial',
    title: 'Commercial Space',
    icon: Warehouse,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    fullImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
    ],
    desc: 'Modern corporate hubs and retail spaces designed for maximum operational efficiency.',
    fullDesc: 'We build future-ready commercial environments that foster productivity and brand prestige. Our approach integrates smart building technologies with structural robustness to deliver offices, tech parks, and retail centers that stand the test of time.',
    features: ['Smart Integration', 'Efficient Floor Plates', 'LEED Standards', 'Rapid Completion']
  },
  {
    id: 'residential',
    title: 'Premium Residential',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
    fullImages: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6199f74a09?auto=format&fit=crop&q=80&w=1200'
    ],
    desc: 'Crafting ultra-luxury private residences and gated communities with bespoke finishes.',
    fullDesc: 'For our residential clients, construction is a personal legacy. We combine engineering precision with high-end aesthetic finishes to create bespoke villas and luxury high-rises that redefine the art of living in Pune.',
    features: ['Bespoke Finishes', 'Structural Longevity', 'Luxury Aesthetics', 'Private Sanctuaries']
  },
  {
    id: 'industrial',
    title: 'Industrial Projects',
    icon: HardHat,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
    fullImages: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=1200'
    ],
    desc: 'Precision-engineered industrial plants and warehouses built for high-scale production.',
    fullDesc: 'Industrial construction requires a deep understanding of load dynamics and operational flow. We deliver manufacturing plants, warehouses, and industrial parks that are engineered for heavy-duty performance and future expansion.',
    features: ['Load Bearing Mastery', 'Operational Flow Design', 'Safety Protocols', 'Heavy Duty Materials']
  },
  {
    id: 'turnkey',
    title: 'Full Execution',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1503387762-592dee58292b?auto=format&fit=crop&q=80&w=800',
    fullImages: [
      'https://images.unsplash.com/photo-1503387762-592dee58292b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1449156003053-93ad3bd1275d?auto=format&fit=crop&q=80&w=1200'
    ],
    desc: 'Comprehensive turnkey solutions from site clearing to the final coat of paint.',
    fullDesc: 'Our turnkey service provides absolute peace of mind. We take full responsibility for the project lifecycle—from technical blueprints and government liaisoning to site execution and interior finishing.',
    features: ['End-to-End Management', 'Transparent Timelines', 'Quality Benchmarking', 'Seamless Handover']
  }
];

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<typeof serviceItems[0] | null>(null);

  return (
    <section id="services" className="py-40 px-6 md:px-20 bg-white relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="w-full h-full border-l border-t border-brand-dark grid grid-cols-6 md:grid-cols-12">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border-r border-b border-brand-dark aspect-square" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-16 border-b border-black/5 pb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-brand-orange font-mono text-[11px] uppercase tracking-[0.6em] font-black italic mb-8 block">Our Technical Domain</span>
            <h2 className="text-6xl md:text-[6rem] lg:text-[7rem] font-serif font-bold uppercase tracking-tighter leading-[0.9] text-brand-dark">
              ENGINEERED <br /> <span className="text-brand-orange italic drop-shadow-[0_0_50px_rgba(255,107,0,0.15)]">MASTERY.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="text-brand-dark/40 text-[11px] md:text-[14px] uppercase tracking-[0.4em] font-black leading-loose max-w-sm italic font-serif"
          >
            Deploying advanced structural solutions across Pune's most ambitious industrial and infrastructure landscapes.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 border border-black/5 shadow-2xl">
          {serviceItems.map((service, i) => (
              <Link key={service.id} to={`/service/${service.id}`} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white group p-14 min-h-[450px] transition-all duration-1000 relative overflow-hidden cursor-pointer"
                >
                  {/* Background Image Reveal on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover grayscale brightness-[0.2]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-orange/20 mix-blend-overlay" />
                  </div>

                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-16">
                      <div className="w-20 h-20 bg-brand-cream/30 rounded-sm flex items-center justify-center group-hover:bg-brand-orange transition-all duration-700 shadow-sm group-hover:shadow-brand-orange/40 group-hover:scale-110">
                        <service.icon className="w-10 h-10 text-brand-orange group-hover:text-white transition-colors duration-700" />
                      </div>
                      <span className="text-brand-dark/5 font-mono text-2xl font-black group-hover:text-white/10 transition-colors italic">0{i+1}</span>
                    </div>
                    
                    <h3 className="text-3xl font-serif font-bold uppercase mb-8 text-brand-dark group-hover:text-white transition-colors duration-700 tracking-tight leading-none">{service.title}</h3>
                    <p className="text-brand-dark/40 text-[11px] md:text-[13px] leading-relaxed uppercase tracking-[0.2em] font-black group-hover:text-white/60 transition-colors duration-700 mb-auto italic">
                      {service.desc}
                    </p>
                    
                    <div className="inline-flex items-center gap-6 text-[11px] font-black uppercase tracking-[0.5em] text-brand-orange group-hover:text-white transition-all duration-700 mt-12 italic">
                      View Technical Scope
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-3 group-hover:-translate-y-3" />
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-orange/5 blur-[80px] rounded-full group-hover:bg-brand-orange/20 transition-all duration-1000" />
                </motion.div>
              </Link>
            ))}
          
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="hidden lg:flex flex-col justify-center p-20 bg-brand-cream/10 group hover:bg-brand-dark transition-all duration-1000 relative overflow-hidden"
            >
              <h3 className="text-5xl font-serif font-bold uppercase mb-12 text-brand-dark/20 group-hover:text-white transition-all duration-1000 leading-[0.85] tracking-tighter">Your Dream <br /><span className="text-brand-orange italic group-hover:drop-shadow-[0_0_30px_rgba(255,107,0,0.3)]">Our Blueprint.</span></h3>
              <p className="text-brand-dark/10 text-[11px] uppercase tracking-[0.5em] leading-loose group-hover:text-white/30 transition-colors font-black italic">
                Every infrastructure is a unique engineering challenge. Let's solve yours with precision.
              </p>
              <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-brand-orange/5 rounded-full blur-[120px] group-hover:bg-brand-orange/10 transition-all duration-1000" />
            </motion.div>
          </div>
        </div>
      </section>
  );
}
