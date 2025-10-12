'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from './SplitText';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

export default function AnimatedHero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
}: AnimatedHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!heroRef.current || !subtitleRef.current || !ctaRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Parallax effect on scroll
    tl.to(heroRef.current, {
      y: 150,
      opacity: 0.8,
      ease: 'none',
    });

    // Animate subtitle and CTA after title
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: 'power3.out' }
    );

    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, delay: 1.2, ease: 'back.out(1.7)' }
    );
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-800/90" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <SplitText delay={0.2}>{title}</SplitText>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
        >
          {subtitle}
        </p>

        <a
          ref={ctaRef}
          href={ctaLink}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 text-lg shadow-xl"
        >
          {ctaText}
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

