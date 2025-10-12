'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '../lib/animations/gsapSetup';

interface LoadingScreenMinimalProps {
  onComplete?: () => void;
}

export default function LoadingScreenMinimal({ onComplete }: LoadingScreenMinimalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Rotate spinner
    gsap.to(spinnerRef.current, {
      rotation: 360,
      duration: 1,
      ease: 'linear',
      repeat: -1
    });

    // Fade out after 1.5 seconds
    const timer = setTimeout(() => {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.inOut',
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      {/* Simple spinner */}
      <div ref={spinnerRef}>
        <div className="w-16 h-16 border-4 border-gray-200 border-t-primary rounded-full" />
      </div>
    </div>
  );
}

