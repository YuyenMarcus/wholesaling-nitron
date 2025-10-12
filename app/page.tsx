'use client';

import { useState } from 'react';
import StructuredData from "./components/StructuredData";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";
import FeaturedDeals from "./components/FeaturedDeals";
import StickerPeel from "./components/StickerPeel";
import ShinyText from "./components/ShinyText";
import Link from 'next/link';
import { Home, DollarSign, Clock, TrendingUp, Users, Shield, Star } from 'lucide-react';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <StructuredData />
      
      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}
      
      {/* Hero Section - Zillow-inspired */}
      <Hero />

      {/* Featured Deals / Success Stories */}
      <FeaturedDeals />

        {/* Services Section */}
        <section id="services" className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-3 sm:mb-4">
                Choose Your Path
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Fast solutions for home sellers and exclusive deals for investors
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Seller Card */}
              <Link
                href="/sell"
                className="group bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-2xl"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Home className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold">
                    Sell Your Home
                  </h3>
                </div>

                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                  Get a fair cash offer in 24 hours. No fees, no repairs, no hassle. 
                  Close on your timeline in Rochester, Dover, or anywhere in NH.
                </p>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <li className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                    <DollarSign className="w-5 h-5 text-green-600 flex-shrink-0" />
                    Fair cash offers
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                    <Clock className="w-5 h-5 text-green-600 flex-shrink-0" />
                    Close in as little as 7 days
          </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                    <Shield className="w-5 h-5 text-green-600 flex-shrink-0" />
                    No fees or commissions
          </li>
                </ul>

                <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all text-base sm:text-lg">
                  Get My Cash Offer
                  <span className="text-2xl">→</span>
                </div>
              </Link>

              {/* Buyer Card */}
              <Link
                href="/buy"
                className="group bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-gray-200 hover:border-primary/50 transition-all hover:shadow-2xl"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold">
                    Find Deals
                  </h3>
                </div>

                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                  Access exclusive off-market properties in NH before they hit the MLS. 
                  Build your portfolio with wholesale deals in Rochester, Dover, and beyond.
                </p>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <li className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                    <TrendingUp className="w-5 h-5 text-primary flex-shrink-0" />
                    Below market value properties
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    New deals weekly
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                    <Users className="w-5 h-5 text-primary flex-shrink-0" />
                    Join our investor network
                  </li>
                </ul>

                <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all text-base sm:text-lg">
                  Browse Opportunities
                  <span className="text-2xl">→</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 sm:py-14 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-3 sm:mb-4 text-gray-900">Real Results for Real People</h2>
              <p className="text-base sm:text-lg text-gray-600">Building trust one home at a time</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">Dozens</div>
                <div className="text-base sm:text-lg text-gray-900 font-semibold">Homeowners Helped</div>
                <p className="text-sm text-gray-600 mt-2">Each with unique situations</p>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">$100K+</div>
                <div className="text-base sm:text-lg text-gray-900 font-semibold">In Real Value Created</div>
                <p className="text-sm text-gray-600 mt-2">Through strategic renovations</p>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">Growing</div>
                <div className="text-base sm:text-lg text-gray-900 font-semibold">NH Investor Network</div>
                <p className="text-sm text-gray-600 mt-2">Partnered with experienced buyers</p>
              </div>
            </div>

            {/* Proof Point - Your Real Win */}
            <div className="mt-10 sm:mt-12 max-w-3xl mx-auto bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Our Success Story</h3>
                <p className="text-base sm:text-lg text-gray-700">
                  We helped a homeowner turn a <span className="text-primary font-bold">$100K property</span> into a <span className="text-primary font-bold">$300K sale</span> through strategic renovation and investor collaboration.
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  Real results through smart partnerships and transparent processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials with Interactive Sticker */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14 md:mb-16 relative">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-3 sm:mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Real stories from real people
              </p>
              
              {/* Draggable Sticker beside title */}
              <div className="absolute top-0 right-0 sm:right-10 md:right-20 h-52 w-52 pointer-events-auto">
                <StickerPeel
                  imageSrc="/sticker-logo.png"
                  width={200}
                  rotate={20}
                  peelBackHoverPct={25}
                  peelBackActivePct={35}
                  shadowIntensity={0.7}
                  lightingIntensity={0.15}
                  initialPosition={{ x: 0, y: 0 }}
                />
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  &quot;Sold our house in Dover in just 8 days. No hassle, fair price, and professional service throughout.&quot;
                </p>
                <p className="text-sm sm:text-base font-semibold text-gray-900">- Sarah M., Dover</p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  &quot;Amazing off-market deals! Built my rental portfolio with 3 properties from Nitron Digital.&quot;
                </p>
                <p className="text-sm sm:text-base font-semibold text-gray-900">- Mike T., Investor</p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  &quot;I bought this house through Nitron Digital, refurbished it, and tripled my money. Best investment decision I&apos;ve made!&quot;
                </p>
                <p className="text-sm sm:text-base font-semibold text-gray-900">- Brandon A Marcus, Rochester</p>
              </div>
            </div>
          </div>

          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        </section>

        {/* How It Works Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-3 sm:mb-4">
                How It Works
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Simple, transparent, and fast
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4 shadow-xl">
                  1
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2">
                  Contact Us
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Fill out our simple form or give us a call. It takes less than 2 minutes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4 shadow-xl">
                  2
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2">
                  Get Your Offer
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  We&apos;ll provide a fair, no-obligation offer within 24 hours.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4 shadow-xl">
                  3
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2">
                  Close the Deal
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Choose your closing date and get paid. It&apos;s that simple.
                </p>
              </div>
            </div>
        </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6">
              <ShinyText
                text="Ready to Get Started?"
                speed={4}
                className="text-3xl sm:text-4xl font-heading font-bold text-white"
              />
            </div>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-10">
              Whether you&apos;re selling or buying in New Hampshire, we&apos;re here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/sell"
                className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-xl text-base sm:text-lg min-h-[52px] flex items-center justify-center"
              >
                Sell Your Home
              </Link>
              <Link
                href="/buy"
                className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-xl text-base sm:text-lg min-h-[52px] flex items-center justify-center"
              >
                Find Deals
              </Link>
            </div>
          </div>
        </section>
    </>
  );
}
