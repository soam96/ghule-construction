import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import Logo from './Logo';
import Magnetic from './Magnetic';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-8 flex justify-between items-center pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto"
        >
          <Link to="/">
            <Logo isDark={isScrolled} />
          </Link>
        </motion.div>

        <Magnetic strength={0.2}>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setIsOpen(true)}
            className={`pointer-events-auto group flex items-center gap-6 ${isScrolled ? 'bg-white/80' : 'bg-white/95'} backdrop-blur-md border border-black/5 px-8 py-3 rounded-full hover:bg-brand-orange hover:border-brand-orange transition-all duration-500 shadow-sm`}
          >
            <span className="text-[11px] uppercase tracking-widest font-black text-brand-dark group-hover:text-white transition-colors">Menu</span>
            <div className="flex flex-col gap-1 w-5">
               <div className="h-[1.5px] w-full bg-brand-orange transition-all group-hover:bg-white" />
               <div className="h-[1.5px] w-full bg-brand-orange transition-all group-hover:bg-white" />
            </div>
          </motion.button>
        </Magnetic>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[200] bg-white/98 backdrop-blur-3xl flex flex-col items-center justify-center p-12"
          >
            {/* Background Accent */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-serif font-black text-brand-dark italic">MENU</span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-12 right-12 group flex items-center gap-6 text-brand-dark hover:text-brand-orange transition-all duration-700"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] font-black italic">Dismiss</span>
              <X className="w-12 h-12 group-hover:rotate-180 transition-transform duration-700" />
            </button>

            <div className="flex flex-col items-center gap-12 relative z-10">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-6xl md:text-[8rem] font-serif font-bold transition-all tracking-tighter uppercase hover:text-brand-orange leading-none italic ${
                      location.pathname === item.href ? 'text-brand-orange' : 'text-brand-dark'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-20 flex items-center gap-16">
                <a href="https://instagram.com/ghule_construction" target="_blank" className="text-brand-dark/20 hover:text-brand-orange transition-all duration-500 transform hover:scale-125">
                  <Instagram className="w-8 h-8" />
                </a>
                <div className="w-[1px] h-8 bg-black/5" />
                <a href="tel:+918605937367" className="text-brand-dark/20 hover:text-brand-orange transition-all duration-500 transform hover:scale-125">
                  <Phone className="w-8 h-8" />
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
