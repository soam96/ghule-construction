import { useEffect, useRef } from 'react';
import { Instagram, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import gsap from 'gsap';

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-reveal', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 95%',
        },
      });

      gsap.to('.footer-bg-text', {
        xPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  const whatsappBtnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const btn = whatsappBtnRef.current;
    if (btn) {
      const handleMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, {
          x: x * 0.4,
          y: y * 0.4,
          duration: 0.4,
          overwrite: true
        });
      };
      const handleLeave = () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: 'elastic.out(1, 0.3)',
        });
      };
      btn.addEventListener('mousemove', handleMove);
      btn.addEventListener('mouseleave', handleLeave);
      return () => {
        btn.removeEventListener('mousemove', handleMove);
        btn.removeEventListener('mouseleave', handleLeave);
      };
    }
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-white pt-48 pb-16 px-6 md:px-20 border-t border-black/5 overflow-hidden">
      
      {/* Huge Background Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none opacity-[0.02] z-0">
        <h2 className="footer-bg-text text-[30vw] font-serif font-black text-brand-dark whitespace-nowrap italic">
          GHULE_CONSTRUCTION GHULE_CONSTRUCTION
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-24 mb-40 relative z-10">
        <div className="col-span-2 footer-reveal">
          <h2 className="text-5xl md:text-[7rem] font-serif font-bold mb-16 tracking-tighter leading-[0.85] text-brand-dark uppercase">
            BUILDING THE <br /> <span className="text-brand-orange italic drop-shadow-[0_0_50px_rgba(255,107,0,0.1)]">FUTURE.</span>
          </h2>
          <p className="max-w-lg text-brand-dark/40 text-[11px] md:text-[14px] uppercase tracking-[0.3em] font-black leading-loose mb-16 italic font-serif">
            Ghule Construction is a premier engineering firm in Pune, delivering high-precision structural solutions for infrastructure, commerce, and luxury living.
          </p>
          
          <div className="flex gap-10">
            <a href="https://instagram.com/ghule_construction" target="_blank" className="w-16 h-16 rounded-full border border-black/5 flex items-center justify-center hover:bg-brand-orange group transition-all duration-700 bg-brand-cream/10 shadow-sm">
              <Instagram className="w-6 h-6 text-brand-dark group-hover:text-white transition-colors" />
            </a>
            <a href="mailto:contact@ghuleconstruction.in" className="w-16 h-16 rounded-full border border-black/5 flex items-center justify-center hover:bg-brand-orange group transition-all duration-700 bg-brand-cream/10 shadow-sm">
              <Mail className="w-6 h-6 text-brand-dark group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        <div className="footer-reveal">
          <h4 className="text-brand-orange uppercase tracking-[0.4em] text-[10px] font-black mb-12 italic">Engineering HQ</h4>
          <ul className="space-y-10">
            <li className="flex gap-6 group">
              <MapPin className="w-6 h-6 text-brand-orange shrink-0" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-black text-brand-dark/30 group-hover:text-brand-dark transition-colors leading-loose italic font-serif">Office 218, Vardhaman Moonstone, Tathawade, Pune.</span>
            </li>
            <li className="flex gap-6 group">
              <Phone className="w-6 h-6 text-brand-orange shrink-0" />
              <a href="tel:+918605937367" className="text-[11px] uppercase tracking-[0.3em] font-black text-brand-dark/30 group-hover:text-brand-dark transition-colors italic font-serif">+91 86059 37367</a>
            </li>
          </ul>
        </div>

        <div className="footer-reveal">
          <h4 className="text-brand-orange uppercase tracking-[0.4em] text-[10px] font-black mb-12 italic">Digital Map</h4>
          <ul className="space-y-6">
            {[
              { name: 'Home', href: '/' },
              { name: 'Projects', href: '/projects' },
              { name: 'Technical', href: '/#services' },
              { name: 'Contact', href: '/contact' }
            ].map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="text-brand-dark/30 hover:text-brand-orange transition-all duration-500 text-[11px] font-black uppercase tracking-[0.5em] italic">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-16 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
        <p className="text-brand-dark/10 text-[10px] font-black uppercase tracking-[0.6em] italic">
          © 2026 GHULE_CONSTRUCTION_INDIA
        </p>
        <p className="text-brand-dark/5 text-[10px] font-black uppercase tracking-[0.5em] italic">
           INFRASTRUCTURE • COMMERCIAL • RESIDENTIAL
        </p>
      </div>

      {/* WhatsApp Button */}
      <a 
        ref={whatsappBtnRef}
        href="https://wa.me/918605937367" 
        target="_blank"
        className="fixed bottom-12 right-12 z-[150] group flex items-center gap-8 bg-brand-dark text-white px-10 py-6 rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.3)] hover:bg-brand-orange transition-all duration-700"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] font-black hidden md:block group-hover:pr-6 transition-all italic">Engineering consultation</span>
        <MessageCircle className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
      </a>
    </footer>
  );
}
