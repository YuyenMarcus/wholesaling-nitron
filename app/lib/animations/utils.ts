import { gsap } from "./gsapSetup";

export const fadeInUp = (target: string, delay = 0) => {
  gsap.fromTo(
    target,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, delay, ease: "power3.out" }
  );
};

export const scrollFadeIn = (target: string) => {
  gsap.fromTo(
    target,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: target,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

export const staggerFadeIn = (targets: string, delay = 0) => {
  gsap.fromTo(
    targets,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      stagger: 0.1,
      ease: "power2.out",
    }
  );
};

export const scaleIn = (target: string, delay = 0) => {
  gsap.fromTo(
    target,
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      delay,
      ease: "back.out(1.7)",
    }
  );
};

/**
 * Mask reveal animation for images/cards
 * Creates a sliding mask effect that reveals content
 * 
 * Keywords: image reveal animation, mask transition, scroll-triggered
 */
export const maskReveal = (target: string) => {
  const tl = gsap.timeline({
    scrollTrigger: { 
      trigger: target, 
      start: 'top 85%',
      toggleActions: "play none none none",
    },
  });
  
  tl.fromTo(
    `${target} .mask`,
    { scaleX: 1 },
    { scaleX: 0, transformOrigin: 'left', duration: 1, ease: 'power4.out' }
  );
  
  tl.fromTo(
    `${target} img`,
    { opacity: 0, scale: 1.1 },
    { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' },
    '-=0.8'
  );
};

/**
 * Parallax scroll effect
 * Element moves at different speed than scroll
 * 
 * Keywords: scroll-triggered parallax, GSAP ScrollTrigger, smooth parallax
 */
export const parallaxScroll = (target: string, speed = 0.3) => {
  gsap.to(target, {
    yPercent: -speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: target,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

/**
 * Card hover tilt effect using GSAP
 */
export const cardTilt = (target: string) => {
  const card = document.querySelector(target);
  if (!card) return;

  card.addEventListener('mousemove', (e: Event) => {
    const mouseEvent = e as MouseEvent;
    const rect = (card as HTMLElement).getBoundingClientRect();
    const x = mouseEvent.clientX - rect.left;
    const y = mouseEvent.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 1000,
    });
  });
  
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  });
};

