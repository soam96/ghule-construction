import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { cn } from '../lib/utils';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function TextReveal({ text, className, delay = 0, once = true }: TextRevealProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.char', {
        y: '100%',
        opacity: 0,
        duration: 1,
        stagger: 0.02,
        delay,
        ease: 'power4.out',
        scrollTrigger: once ? {
          trigger: textRef.current,
          start: 'top 90%',
        } : undefined,
      });
    }, textRef);

    return () => ctx.revert();
  }, [delay, once]);

  return (
    <div ref={textRef} className={cn('overflow-hidden flex flex-wrap', className)}>
      {text.split('').map((char, i) => (
        <span key={i} className="char inline-block whitespace-pre">
          {char}
        </span>
      ))}
    </div>
  );
}
