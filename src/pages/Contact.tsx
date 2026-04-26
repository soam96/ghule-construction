import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, MessageCircle, Send, Compass } from 'lucide-react';
import TextReveal from '../components/TextReveal';
import gsap from 'gsap';
import Magnetic from '../components/Magnetic';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-reveal', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-48 pb-32 px-6 md:px-20 min-h-screen bg-white relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="w-full h-full border-l border-t border-brand-dark grid grid-cols-6 md:grid-cols-12">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border-r border-b border-brand-dark aspect-square" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24">
          <div className="contact-reveal">
            <span className="text-brand-orange font-mono text-[10px] mb-6 block uppercase tracking-[0.5em] font-black italic">Project Inquiry</span>
            <h1 className="text-6xl md:text-9xl font-serif font-bold uppercase leading-[0.85] mb-16 tracking-tighter text-brand-dark">
              START A <br /><span className="text-brand-orange italic drop-shadow-[0_0_50px_rgba(255,107,0,0.1)]">BUILD.</span>
            </h1>
            
            <div className="space-y-16">
              <div className="group">
                <h4 className="text-brand-orange uppercase tracking-[0.4em] text-[10px] font-black mb-6 flex items-center gap-3">
                  <MapPin className="w-4 h-4" /> Head Office
                </h4>
                <p className="text-2xl font-serif text-brand-dark/80 leading-relaxed max-w-md italic font-medium">
                  Office 218, 2nd floor, Vardhaman Moonstone, Tathawade, Pune - 411033.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-brand-orange uppercase tracking-[0.4em] text-[10px] font-black mb-6 flex items-center gap-3">
                    <Mail className="w-4 h-4" /> Digital Channel
                  </h4>
                  <a href="mailto:contact@ghuleconstruction.in" className="text-xl text-brand-dark hover:text-brand-orange transition-colors font-black tracking-tighter">
                    contact@ghuleconstruction.in
                  </a>
                </div>
                <div>
                  <h4 className="text-brand-orange uppercase tracking-[0.4em] text-[10px] font-black mb-6 flex items-center gap-3">
                    <Phone className="w-4 h-4" /> Direct Line
                  </h4>
                  <a href="tel:+918605937367" className="text-xl text-brand-dark hover:text-brand-orange transition-colors font-black tracking-tighter">
                    +91 86059 37367
                  </a>
                </div>
              </div>

              {/* Blueprint Map Placeholder */}
              <div className="relative aspect-video bg-brand-cream/20 rounded-sm overflow-hidden group border border-black/5 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                  alt="Map Location" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-orange/5 mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-brand-orange rounded-full animate-ping opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 bg-brand-orange rounded-full shadow-[0_0_30px_rgba(255,107,0,0.6)]" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md px-6 py-3 border border-black/5 rounded-sm shadow-sm">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-brand-dark/60 font-black italic">Pune Engineering Hub</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-reveal bg-brand-cream/10 backdrop-blur-xl p-8 md:p-16 rounded-sm border border-black/5 relative shadow-2xl">
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-brand-orange/20 pointer-events-none" />
            
            <div className="mb-16">
              <h3 className="text-3xl font-serif font-bold uppercase text-brand-dark mb-6 tracking-tighter">HAVE A SPECIFIC VISION?</h3>
              <p className="text-brand-dark/40 text-[11px] uppercase tracking-[0.3em] leading-loose font-black italic">
                Engage with our technical team for industrial, infrastructure, or premium residential builds. Precision starts here.
              </p>
            </div>

            <form className="space-y-12 mb-16">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4 group">
                  <label className="text-[10px] uppercase tracking-[0.4em] text-brand-dark/30 group-focus-within:text-brand-orange transition-colors font-black">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-black/10 py-5 focus:border-brand-orange outline-none transition-colors text-brand-dark font-black"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-4 group">
                  <label className="text-[10px] uppercase tracking-[0.4em] text-brand-dark/30 group-focus-within:text-brand-orange transition-colors font-black">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-black/10 py-5 focus:border-brand-orange outline-none transition-colors text-brand-dark font-black"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="space-y-4 group">
                <label className="text-[10px] uppercase tracking-[0.4em] text-brand-dark/30 group-focus-within:text-brand-orange transition-colors font-black">Project Vertical</label>
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-black/10 py-5 focus:border-brand-orange outline-none transition-colors appearance-none text-brand-dark font-black cursor-pointer">
                    <option className="bg-white">Infrastructure</option>
                    <option className="bg-white">Commercial Space</option>
                    <option className="bg-white">Premium Residential</option>
                    <option className="bg-white">Industrial Construction</option>
                  </select>
                  <Compass className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark/20 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-4 group">
                <label className="text-[10px] uppercase tracking-[0.4em] text-brand-dark/30 group-focus-within:text-brand-orange transition-colors font-black">Technical Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-black/10 py-5 focus:border-brand-orange outline-none transition-colors resize-none text-brand-dark font-black"
                  placeholder="Describe your structural requirements..."
                />
              </div>

              <Magnetic>
                <button className="group w-full flex items-center justify-center gap-6 bg-brand-dark text-white py-8 rounded-sm hover:bg-brand-orange transition-all duration-700 uppercase tracking-[0.5em] text-[11px] font-black shadow-2xl">
                  Initialize Channel
                  <Send className="w-5 h-5 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-700" />
                </button>
              </Magnetic>
            </form>

            <div className="pt-12 border-t border-black/5 text-center">
              <span className="text-[9px] uppercase tracking-[0.5em] text-brand-dark/20 mb-10 block font-mono font-black">OR CONNECT INSTANTLY</span>
              <Magnetic strength={0.2}>
                <a 
                  href="https://wa.me/918605937367"
                  target="_blank"
                  className="inline-flex items-center gap-6 px-12 py-6 border border-black/5 rounded-full hover:bg-brand-dark hover:text-white transition-all duration-700 text-brand-dark bg-white shadow-sm"
                >
                  <MessageCircle className="w-5 h-5 text-brand-orange" />
                  <span className="text-[10px] uppercase tracking-[0.4em] font-black">Consult on WhatsApp</span>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
