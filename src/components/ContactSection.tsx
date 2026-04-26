import { motion } from 'motion/react';
import { Send, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import Magnetic from './Magnetic';

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 md:px-20 bg-white border-t border-black/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 relative z-10">
        <motion.div
           initial={{ x: -50, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-4 mb-8">
              <span className="text-brand-orange font-mono text-[10px] uppercase tracking-[0.5em] font-black italic">Connect With Us</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-serif font-bold uppercase leading-[0.9] mb-12 tracking-tighter text-brand-dark">
            GET IN <span className="text-brand-orange italic">TOUCH.</span>
          </h2>
          <p className="text-brand-dark/40 text-[11px] uppercase tracking-[0.3em] mb-20 max-w-lg leading-loose font-black italic">
            Ready to start your next project? Reach out to us for a personalized engineering consultation.
          </p>

          <div className="space-y-16">
            <motion.div 
               initial={{ x: -20, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="flex items-center gap-8 group"
            >
              <div className="w-16 h-16 rounded-full border border-black/5 flex items-center justify-center group-hover:border-brand-orange group-hover:bg-brand-orange/5 transition-all duration-700 bg-brand-cream/10">
                <Mail className="w-5 h-5 text-brand-orange group-hover:scale-125 transition-transform" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-brand-dark/30 mb-2 font-black">Direct Email</p>
                <a href="mailto:contact@ghuleconstruction.in" className="text-xl text-brand-dark hover:text-brand-orange transition-colors font-black tracking-tight">contact@ghuleconstruction.in</a>
              </div>
            </motion.div>
            <motion.div 
               initial={{ x: -20, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.3 }}
               className="flex items-center gap-8 group"
            >
              <div className="w-16 h-16 rounded-full border border-black/5 flex items-center justify-center group-hover:border-brand-orange group-hover:bg-brand-orange/5 transition-all duration-700 bg-brand-cream/10">
                <Phone className="w-5 h-5 text-brand-orange group-hover:scale-125 transition-transform" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-brand-dark/30 mb-2 font-black">Direct Call</p>
                <a href="tel:+918605937367" className="text-xl text-brand-dark hover:text-brand-orange transition-colors font-black tracking-tight">+91 86059 37367</a>
              </div>
            </motion.div>
          </div>

          <div className="mt-20">
            <Magnetic>
              <a 
                href="https://wa.me/918605937367"
                target="_blank"
                className="inline-flex items-center gap-8 px-12 py-6 border border-black/5 rounded-full hover:bg-brand-orange hover:border-brand-orange transition-all duration-700 text-brand-dark group overflow-hidden relative bg-brand-cream/20 backdrop-blur-sm"
              >
                <MessageCircle className="w-6 h-6 text-brand-orange group-hover:text-white relative z-10" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-black relative z-10 group-hover:text-white transition-colors duration-700">Quick WhatsApp Reply</span>
                <div className="absolute inset-0 bg-brand-orange translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              </a>
            </Magnetic>
          </div>
        </motion.div>

        <motion.div 
           initial={{ x: 50, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{ duration: 1 }}
           className="bg-brand-cream/10 p-10 md:p-16 rounded-sm border border-black/5 backdrop-blur-xl relative shadow-2xl"
        >
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-brand-orange/5 blur-3xl rounded-full" />
          <p className="text-brand-orange text-[10px] uppercase tracking-[0.4em] font-black mb-16 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-brand-orange" />
            DIRECT MESSAGE
          </p>
          <form className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Full Name"
                  className="w-full bg-transparent border-b border-black/10 py-5 focus:border-brand-orange outline-none text-brand-dark transition-all placeholder:text-brand-dark/20 text-sm font-black"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-orange group-hover:w-full transition-all duration-700" />
              </div>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-black/10 py-5 focus:border-brand-orange outline-none text-brand-dark transition-all placeholder:text-brand-dark/20 text-sm font-black"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-orange group-hover:w-full transition-all duration-700" />
              </div>
            </div>
            <div className="relative group">
              <select className="w-full bg-transparent border-b border-black/10 py-5 focus:border-brand-orange outline-none text-brand-dark transition-all appearance-none cursor-pointer text-sm font-black opacity-50 focus:opacity-100">
                <option className="bg-white">Infrastructure</option>
                <option className="bg-white">Commercial</option>
                <option className="bg-white">Residential</option>
                <option className="bg-white">Consultation</option>
              </select>
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-orange group-hover:w-full transition-all duration-700" />
            </div>
            <div className="relative group">
              <textarea 
                rows={4}
                placeholder="Message"
                className="w-full bg-transparent border-b border-black/10 py-5 focus:border-brand-orange outline-none text-brand-dark transition-all resize-none placeholder:text-brand-dark/20 text-sm font-black"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-orange group-hover:w-full transition-all duration-700" />
            </div>
            <Magnetic>
              <button className="w-full bg-brand-dark text-white py-8 rounded-sm flex items-center justify-center gap-8 font-black uppercase tracking-[0.5em] text-[11px] hover:bg-brand-orange transition-all duration-700 group overflow-hidden relative shadow-2xl">
                <span className="relative z-10">Initialize consultation</span> 
                <Send className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-3" />
                <div className="absolute inset-0 bg-brand-orange -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[0.76, 0, 0.24, 1]" />
              </button>
            </Magnetic>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
