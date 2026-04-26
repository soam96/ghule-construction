import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, ArrowRight, CheckCircle2, ArrowLeft, MoveRight, Quote } from 'lucide-react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import imgResidential from '../assets/service_residential_cover_1776867666467.png';
import imgCommercial from '../assets/service_commercial_cover_1776867687315.png';
import imgTurnkey from '../assets/service_turnkey_cover_1776867704278.png';
import imgSpacePlanning from '../assets/service_spaceplanning_cover_1776867735345.png';
import img3D from '../assets/service_3ddesign_cover_1776867751997.png';

gsap.registerPlugin(ScrollTrigger);

const serviceData: Record<string, any> = {
  'government-infra': {
    title: 'Government Infrastructure',
    tagline: 'Foundations of the Nation',
    description: 'We specialize in large-scale government infrastructure projects, from highway bridges to public utility buildings. Our engineering team ensures that every structure meets the highest safety standards and regulatory compliance.',
    heroImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1920',
    features: [
      'Structural Engineering Excellence',
      'Regulatory & Compliance Management',
      'Bridge & Highway Construction',
      'Public Utility Infrastructure',
      'Precision Project Liaisoning'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1510333314052-959f635f7911?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&q=80&w=800'
    ],
    reviews: [
      { name: 'Vijay Deshmukh', rating: 5, comment: 'Ghule Construction delivered our highway bridge project ahead of schedule with zero safety incidents.' },
      { name: 'Kunal Patil', rating: 5, comment: 'Their understanding of government liaisoning and structural engineering is unparalleled in Pune.' }
    ]
  },
  'commercial': {
    title: 'Commercial Space',
    tagline: 'Modern Hubs for Growth',
    description: 'We design and build innovative commercial hubs that maximize ROI and operational efficiency. From corporate towers to retail malls, we create structural masterpieces that stand the test of time.',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920',
    features: [
      'High-Rise Corporate Engineering',
      'Retail & Mall Construction',
      'Adaptive Reuse of Spaces',
      'Advanced MEP Coordination',
      'Sustainable Build Solutions'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800'
    ],
    reviews: [
      { name: 'Amit Verma', rating: 5, comment: 'The structural integrity and finish of our business hub are world-class. Truly impressive execution.' },
      { name: 'Sanjay Gupta', rating: 4, comment: 'Reliable partners for commercial construction. Their team is professional and highly skilled.' }
    ]
  },
  'residential': {
    title: 'Premium Residential',
    tagline: 'Bespoke Private Havens',
    description: 'We craft ultra-luxury private residences and gated communities that redefine opulence. Our focus is on bespoke finishes, structural longevity, and the seamless integration of modern amenities.',
    heroImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1920',
    features: [
      'Custom Villa Construction',
      'High-End Material Curation',
      'Luxury Interior Execution',
      'Smart Home Infrastructure',
      'Landscaped Residential Estates'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800'
    ],
    reviews: [
      { name: 'Rahul Sharma', rating: 5, comment: 'Ghule Construction transformed our vision into a residential masterpiece. Their engineering precision is unmatched.' },
      { name: 'Priya Patel', rating: 5, comment: 'The most professional construction firm in Pune. Our villa feels like a daily retreat.' }
    ]
  },
  'industrial': {
    title: 'Industrial Projects',
    tagline: 'Engineered for Performance',
    description: 'We build high-performance industrial plants, warehouses, and logistics hubs. Our designs focus on workflow optimization, heavy-duty structural requirements, and scalability.',
    heroImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1920',
    features: [
      'Heavy-Duty Structural Design',
      'Warehouse & Logistics Hubs',
      'Factory Plant Execution',
      'Safety-First Construction',
      'Modular Industrial Solutions'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
    ],
    reviews: [
      { name: 'Vikram Singh', rating: 5, comment: 'Our manufacturing plant was built with extreme attention to detail. Highly recommend for industrial work.' },
      { name: 'Neha Joshi', rating: 5, comment: 'Professional, timely, and they understand the technical requirements of industrial builds.' }
    ]
  },
  'turnkey': {
    title: 'Full Execution',
    tagline: 'Concept to Handover',
    description: 'Our turnkey solutions offer a zero-hassle experience. We take full responsibility for floor planning, liaisoning, material procurement, and construction, delivering a ready-to-use project.',
    heroImage: 'https://images.unsplash.com/photo-1503387762-592dee58292b?auto=format&fit=crop&q=80&w=1920',
    features: [
      'End-to-End Project Management',
      'Comprehensive Material Sourcing',
      'Quality Assurance & Testing',
      'Strict Timeline Adherence',
      'Seamless Handover Process'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1503387762-592dee58292b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800'
    ],
    reviews: [
      { name: 'Rajiv Khanna', rating: 5, comment: 'Handing over our project to Ghule Construction was the best decision. They delivered exactly what they promised.' },
      { name: 'Anjali Deshmukh', rating: 5, comment: 'Their turnkey process is transparent and highly professional. No hidden costs, just quality work.' }
    ]
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = id ? serviceData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, [id]);

  if (!service) {
    return (
      <div className="h-screen flex items-center justify-center bg-brand-dark text-white">
        <h1 className="text-4xl font-serif uppercase tracking-widest text-brand-terracotta">Service Not Found</h1>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white text-brand-dark min-h-screen"
    >
      {/* Back Button */}
      <Link 
        to="/#services" 
        className="fixed top-32 left-6 md:left-20 z-50 group flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-brand-dark/50 hover:text-brand-orange transition-colors"
      >
        <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:border-brand-orange transition-colors bg-white/80 backdrop-blur-md shadow-sm">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        </div>
        <span className="hidden md:block font-black">Back to Services</span>
      </Link>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-brand-dark">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src={service.heroImage} 
            alt={service.title} 
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
        </motion.div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-brand-orange uppercase tracking-[0.4em] text-[11px] mb-8 block font-black italic"
          >
            {service.tagline}
          </motion.span>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-6xl md:text-9xl font-serif font-bold tracking-tighter leading-[0.9] mb-12 uppercase text-white drop-shadow-2xl"
          >
            {service.title.split(' ')[0]} <br />
            <span className="text-brand-orange italic drop-shadow-[0_0_30px_rgba(255,107,0,0.3)]">{service.title.split(' ').slice(1).join(' ')}</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="w-24 h-[1px] bg-brand-orange mx-auto"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-black">Architecture</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-orange to-transparent" />
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-32 px-6 md:px-20 max-w-7xl mx-auto bg-white">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-orange font-mono text-[10px] font-black mb-8 block uppercase tracking-[0.4em] italic">The Technical Vision</span>
            <h2 className="text-5xl md:text-8xl font-serif font-bold uppercase leading-[0.9] tracking-tighter mb-12 text-brand-dark">
              Structural <br /> <span className="text-brand-orange italic">Integrity.</span>
            </h2>
            <p className="text-brand-dark/50 text-base md:text-lg leading-loose mb-16 max-w-xl italic font-medium font-serif">
              {service.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature: string, i: number) => (
                <motion.div 
                  key={i} 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 p-6 border border-black/5 bg-brand-cream/10 rounded-sm hover:border-brand-orange/30 transition-all duration-500 shadow-sm hover:shadow-xl"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-brand-orange w-5 h-5" />
                  </div>
                  <span className="text-brand-dark/80 uppercase tracking-[0.2em] text-[10px] font-black">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-8">
            {service.gallery.map((img: string, i: number) => (
              <motion.div 
                key={i} 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className={`aspect-[3/4] overflow-hidden rounded-sm group relative shadow-2xl ${i % 2 === 1 ? 'mt-16' : ''}`}
              >
                <img 
                  src={img} 
                  alt="Gallery" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-orange/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-40 px-6 md:px-20 bg-brand-cream/20 text-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
            <div className="max-w-2xl">
              <span className="text-brand-orange font-mono text-[10px] font-black italic mb-6 block uppercase tracking-[0.4em]">Success Records</span>
              <h2 className="text-5xl md:text-[7rem] font-serif font-bold uppercase tracking-tighter leading-[0.85] text-brand-dark">Client <br /><span className="text-brand-orange italic">Testimonials.</span></h2>
            </div>
            <p className="text-brand-dark/30 text-[11px] uppercase tracking-[0.3em] font-black leading-loose max-w-xs italic">
              Verification of engineering excellence through the lens of our esteemed stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {service.reviews.map((review: any, i: number) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-16 border border-black/5 rounded-sm hover:shadow-2xl hover:border-brand-orange/30 transition-all duration-700 bg-white relative overflow-hidden group"
              >
                <Quote className="w-16 h-16 text-brand-orange/5 absolute top-10 right-10 group-hover:text-brand-orange/20 transition-all duration-700" />
                <div className="flex gap-2 mb-10">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-2xl font-serif text-brand-dark/70 mb-12 leading-relaxed italic font-medium">
                  "{review.comment}"
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-[1px] bg-brand-orange" />
                  <h4 className="font-sans uppercase tracking-[0.4em] text-[11px] font-black text-brand-dark">{review.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project / CTA Section */}
      <section className="relative py-48 px-6 md:px-20 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-orange font-mono text-[10px] font-black uppercase tracking-[0.5em] mb-12 block"
          >
            Start Your Engineering Journey
          </motion.span>
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[10rem] font-serif font-bold uppercase tracking-tighter mb-20 leading-[0.8] text-white"
          >
            Structural <br /> <span className="text-brand-orange italic drop-shadow-[0_0_50px_rgba(255,107,0,0.3)]">Mastery.</span>
          </motion.h2>
          
          <Link 
            to="/contact" 
            className="group inline-flex items-center gap-12 bg-brand-orange text-white px-16 py-8 rounded-sm hover:bg-white hover:text-brand-dark transition-all duration-700 uppercase tracking-[0.5em] text-[11px] font-black shadow-2xl"
          >
            Request Site Consultation
            <MoveRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
