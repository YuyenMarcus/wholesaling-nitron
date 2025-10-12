'use client';
import { useEffect, useState } from 'react';
import { gsap } from '../lib/animations/gsapSetup';
import ShinyText from './ShinyText';

export default function Hero() {
  const [form, setForm] = useState({ name: '', phone: '', address: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Cinematic intro timeline - starts after loading screen
    const tl = gsap.timeline({ 
      defaults: { ease: 'power2.out' },
      delay: 0.3 // Small delay after loading screen for smooth transition
    });
    
    tl.fromTo('.hero-bg', { opacity: 0 }, { opacity: 1, duration: 1.2 })
      .fromTo('.hero-heading', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.6')
      .fromTo('.hero-sub', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
      .fromTo('.hero-form', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, '-=0.4')
      .fromTo('.hero-trust', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.3');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.name || !form.phone || !form.address) {
      setStatus('❌ Please fill all fields');
      return;
    }

    setIsSubmitting(true);
    setStatus('Sending...');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('✅ Submitted! We\'ll contact you within 24 hours.');
        setForm({ name: '', phone: '', address: '' });
        
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('❌ Error submitting. Please try again.');
      }
    } catch (error) {
      console.error('Form error:', error);
      setStatus('❌ Error submitting. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      {/* Responsive Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/suburban-bg.jpg')",
          backgroundSize: "100% auto",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Hero Content - Zillow-inspired layout */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Primary Headline - Highest hierarchy */}
        <div className="hero-heading mb-6">
          <ShinyText
            text="Inherited it. Need repairs? We'll buy it."
            speed={4}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white drop-shadow-2xl leading-tight px-2"
          />
        </div>
        
        {/* Supporting Tagline - Secondary hierarchy */}
        <div className="hero-sub mb-8 sm:mb-10 max-w-3xl mx-auto">
          <ShinyText
            text="Get a fair cash offer for your home today."
            speed={3}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light opacity-90 px-2"
          />
        </div>

        {/* Zillow-style Search Bar Form */}
        <div className="hero-form">
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl p-2 sm:p-3 max-w-3xl mx-auto gap-2"
          >
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Enter your property address or ZIP code"
              disabled={isSubmitting}
              className="flex-grow p-4 text-base sm:text-lg rounded-xl text-gray-800 outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
            />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              disabled={isSubmitting}
              className="md:w-40 p-4 text-base sm:text-lg rounded-xl text-gray-800 outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              disabled={isSubmitting}
              className="md:w-40 p-4 text-base sm:text-lg rounded-xl text-gray-800 outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white font-semibold px-8 py-4 text-base sm:text-lg rounded-xl hover:bg-blue-700 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg min-h-[56px]"
            >
              {isSubmitting ? 'Sending...' : 'Get Cash Offer →'}
            </button>
          </form>
          
          {status && (
            <p className={`mt-4 text-sm font-medium ${
              status.includes('✅') ? 'text-green-400' : 'text-red-400'
            }`}>
              {status}
            </p>
          )}
          
          <div className="mt-3">
            <ShinyText
              text="No obligation. We respond within 24 hours. No fees. No repairs needed."
              speed={5}
              className="text-xs"
            />
          </div>
        </div>

        {/* Trust Indicators - Tertiary hierarchy */}
        <div className="hero-trust mt-8 sm:mt-12 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base px-2">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full font-medium">
            <span className="text-base sm:text-lg md:text-xl text-gray-400">✓</span>
            <ShinyText text="No Repairs Needed" speed={4} />
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full font-medium">
            <span className="text-base sm:text-lg md:text-xl text-gray-400">✓</span>
            <ShinyText text="No Agent Fees" speed={4} />
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full font-medium">
            <span className="text-base sm:text-lg md:text-xl text-gray-400">✓</span>
            <ShinyText text="Close in 7 Days" speed={4} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
