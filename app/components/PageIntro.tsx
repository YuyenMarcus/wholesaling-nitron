/**
 * Page Intro Reveal Animation
 * 
 * Sequence:
 * 1. Logo shows on load (fade + scale)
 * 2. Logo fades out after pause
 * 3. Background + 3D house + hero text fade in
 * 
 * Keywords: logo reveal animation, intro sequence, GSAP timeline,
 * page load animation, branded entrance, cinematic reveal
 */

'use client';
import { useRef, useEffect } from 'react';
import { gsap } from '../lib/animations/gsapSetup';

export default function PageIntro({
  onFinish,
}: {
  onFinish?: () => void;
}) {
  const overlay = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      onComplete: onFinish,
    });

    // Logo pop-in
    tl.fromTo(
      '.intro-logo',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2 }
    );

    // Pause a moment, then fade out logo
    tl.to('.intro-logo', { opacity: 0, duration: 0.6, delay: 0.3 });
    tl.to(overlay.current, { opacity: 0, duration: 0.8 }, '-=0.3');
    tl.set(overlay.current, { display: 'none' });

    // Chain hero entrance (background + model + text)
    tl.fromTo(
      '.hero-bg',
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: 'power1.out' }
    )
      .fromTo(
        '.hero-house',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2 },
        '-=0.6'
      )
      .fromTo(
        '.hero-heading',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.8'
      )
      .fromTo(
        '.hero-sub, .hero-form',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
        '-=0.5'
      );

    return () => {
      tl.kill();
    };
  }, [onFinish]);

  return (
    <div
      ref={overlay}
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary text-white"
    >
      {/* Nitron Digital Logo */}
      <div className="intro-logo flex flex-col items-center gap-4">
        <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
          <span className="text-6xl font-bold text-primary">N</span>
        </div>
        <div className="text-2xl font-heading font-bold">Nitron Digital</div>
        <div className="text-sm text-blue-200">Wholesaling</div>
      </div>
    </div>
  );
}


