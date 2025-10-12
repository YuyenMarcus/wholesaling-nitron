'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
}

export default function SplitText({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  stagger = 0.03,
}: SplitTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const chars = textRef.current.querySelectorAll('.char');
    
    gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: 20,
        rotateX: -90,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
      }
    );
  }, [delay, duration, stagger]);

  const splitText = children.split('').map((char, index) => (
    <span
      key={index}
      className="char inline-block"
      style={{ transformOrigin: 'center bottom' }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <div ref={textRef} className={className}>
      {splitText}
    </div>
  );
}

