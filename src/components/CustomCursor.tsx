import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      
      gsap.to(cursor, {
        x,
        y,
        duration: 0.1,
        ease: 'power2.out'
      });
      
      gsap.to(follower, {
        x,
        y,
        duration: 0.4,
        ease: 'power3.out'
      });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = target.closest('a, button, .hover-trigger');
      
      if (isLink) {
        setIsHovering(true);
        const text = (isLink as HTMLElement).getAttribute('data-cursor-text');
        if (text) setCursorText(text);

        gsap.to(follower, {
          scale: text ? 5 : 3,
          backgroundColor: 'rgba(205, 127, 50, 0.15)',
          borderColor: '#CD7F32',
          duration: 0.4,
          ease: 'back.out(1.7)'
        });
        
        gsap.to(cursor, {
          scale: 0,
          duration: 0.2
        });
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = target.closest('a, button, .hover-trigger');
      
      if (isLink) {
        setIsHovering(false);
        setCursorText('');
        
        gsap.to(follower, {
          scale: 1,
          backgroundColor: 'transparent',
          borderColor: 'rgba(255, 255, 255, 0.4)',
          duration: 0.4,
          ease: 'power2.out'
        });
        
        gsap.to(cursor, {
          scale: 1,
          duration: 0.2
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseEnter);
    window.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseEnter);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] mix-blend-difference">
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block" 
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-white/40 rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block flex items-center justify-center transition-colors duration-300"
      >
        <span className="text-[6px] uppercase tracking-[0.2em] text-bronze font-bold text-center leading-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {cursorText}
        </span>
      </div>
    </div>
  );
}
