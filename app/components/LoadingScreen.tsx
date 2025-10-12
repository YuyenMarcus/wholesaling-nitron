'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '../lib/animations/gsapSetup';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out the entire loading screen
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: 'power2.inOut',
          onComplete: () => {
            if (onComplete) onComplete();
          }
        });
      }
    });

    // Animate logo/brand name
    tl.fromTo(
      logoRef.current,
      { 
        scale: 0.8, 
        opacity: 0,
        y: 20
      },
      { 
        scale: 1, 
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }
    )
    .fromTo(
      textRef.current,
      { 
        opacity: 0,
        y: 10
      },
      { 
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      },
      '-=0.3'
    )
    .to(
      [logoRef.current, textRef.current],
      {
        scale: 0.95,
        opacity: 0.9,
        duration: 0.3,
        ease: 'power2.inOut'
      },
      '+=0.4'
    );

  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-100 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-100 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Logo/Brand Section */}
      <div className="relative z-10 text-center">
        <div ref={logoRef} className="mb-6">
          {/* Parent Company Logo */}
          <div className="w-32 h-32 mx-auto flex items-center justify-center">
            {/* Replace the src below with your parent company logo */}
            <img 
              src="/logo.svg" 
              alt="Parent Company Logo"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
            
            {/* Fallback: If logo.svg doesn't exist, shows this instead */}
            {/* Uncomment below and comment out the img tag above if you want text-only */}
            {/* <div className="text-7xl font-bold text-white">
              PC
            </div> */}
          </div>
        </div>

        <div ref={textRef}>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
            Nitron Digital
          </h1>
          <p className="text-lg text-blue-400">
            Real Estate Investments
          </p>
        </div>

        {/* Loading indicator */}
        <div className="mt-8 flex justify-center">
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

