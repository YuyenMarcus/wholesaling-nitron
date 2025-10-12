/**
 * Investment Property Listing Page
 * 
 * Keywords: image reveal animation, mask transition, scroll-triggered parallax,
 * GSAP ScrollTrigger, smooth page transition, hero section load animation,
 * real estate investment deals, off-market properties
 */

'use client';

import { useEffect } from 'react';
import StructuredData from "../components/StructuredData";
import AiSchemaBuy from "../components/AiSchemaBuy";
import ShinyText from "../components/ShinyText";
import { getAvailableDeals } from "../data/deals";
import { maskReveal, parallaxScroll, scrollFadeIn } from "../lib/animations/utils";
import { TrendingUp, MapPin, DollarSign, Clock, Target, Users, Home, BedDouble } from 'lucide-react';

export default function BuyPage() {
  const availableDeals = getAvailableDeals();

  useEffect(() => {
    // Animate deal cards with mask reveal and parallax
    availableDeals.forEach((_, i) => {
      try {
        maskReveal(`#deal-${i}`);
        parallaxScroll(`#deal-${i} .deal-image`, 0.15);
      } catch (error) {
        console.warn(`Animation error for deal ${i}:`, error);
        // Fallback to simple fade in
        scrollFadeIn(`#deal-${i}`);
      }
    });
  }, [availableDeals]);

  const features = [
    {
      icon: Target,
      title: 'Off-Market Deals',
      description: 'Access properties before they hit the MLS. Get first pick of exclusive inventory.',
    },
    {
      icon: DollarSign,
      title: 'Below Market Value',
      description: 'Purchase properties at wholesale prices with built-in equity from day one.',
    },
    {
      icon: Clock,
      title: 'New Deals Weekly',
      description: 'Fresh inventory added regularly. Never miss out on great opportunities.',
    },
    {
      icon: MapPin,
      title: 'Prime Locations',
      description: 'Properties in high-demand areas with strong rental and resale potential.',
    },
    {
      icon: TrendingUp,
      title: 'Investment-Ready',
      description: 'Fix-and-flip, rental properties, and turnkey opportunities.',
    },
    {
      icon: Users,
      title: 'Investor Network',
      description: 'Join a community of successful real estate investors.',
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      available: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      sold: 'bg-gray-100 text-gray-800',
    };
    return statusStyles[status as keyof typeof statusStyles] || statusStyles.available;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'single-family':
        return '🏠';
      case 'duplex':
        return '🏘️';
      case 'multi-family':
        return '🏢';
      case 'commercial':
        return '🏬';
      case 'land':
        return '🗺️';
      default:
        return '🏡';
    }
  };

  return (
    <>
      <StructuredData />
      <AiSchemaBuy />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-accent to-gray-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <ShinyText
                text="Find Off-Market Real Estate Deals"
                speed={4}
                className="text-4xl md:text-5xl font-heading font-bold text-white drop-shadow-2xl"
              />
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Access Exclusive Investment Properties Before They Hit the Market
            </p>
            <a
              href="#deals"
              className="inline-block bg-primary text-white px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition-opacity shadow-xl text-lg"
            >
              View Available Deals
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold mb-4">
                Why Invest With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get access to the best off-market deals in your area
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 hover:shadow-xl transition-shadow"
                  >
                    <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Available Deals Section with Mask Reveal Animation */}
        <section id="deals" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold mb-4">
                Current Available Deals
              </h2>
              <p className="text-xl text-gray-600">
                Exclusive off-market opportunities for serious investors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {availableDeals.map((deal, i) => (
                <div
                  key={deal.id}
                  id={`deal-${i}`}
                  className="relative group overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
                >
                  {/* Mask overlay for reveal animation */}
                  <div className="mask absolute inset-0 bg-primary origin-left z-10" />
                  
                  {/* Deal Image with parallax */}
                  <div className="relative h-52 overflow-hidden bg-gradient-to-br from-blue-100 to-gray-200">
                    <div className="deal-image absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-700">
                      {getTypeIcon(deal.type)}
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(deal.status)}`}>
                        {deal.status.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Deal Info */}
                  <div className="p-6 relative z-20">
                    <div className="flex items-center gap-2 mb-2 text-gray-500 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{deal.city}</span>
                    </div>
                    
                    <h3 className="text-xl font-heading font-bold text-accent mb-2">
                      {deal.type.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {deal.description}
                    </p>

                    {/* Property Details */}
                    {deal.bedrooms && (
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <BedDouble className="w-4 h-4" />
                          <span>{deal.bedrooms} BD</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Home className="w-4 h-4" />
                          <span>{deal.bathrooms} BA</span>
                        </div>
                        <span>• {deal.sqft} sqft</span>
                      </div>
                    )}

                    {/* Financials */}
                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Price:</span>
                        <span className="font-bold text-primary">{deal.price}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">ARV:</span>
                        <span className="font-semibold text-green-600">{deal.arv}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Est. Repairs:</span>
                        <span className="font-semibold text-gray-800">{deal.repairs}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="w-full mt-6 bg-primary hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-opacity">
                      Request Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Buyers List Section */}
        <section id="join-form" className="py-20 bg-gradient-to-br from-primary to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold mb-4">
                Join Our Exclusive Buyers List
              </h2>
              <p className="text-xl text-blue-100">
                Get notified first when new deals become available
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="buyer-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="buyer-name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                      placeholder="John Investor"
                    />
                  </div>
                  <div>
                    <label htmlFor="buyer-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="buyer-email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="buyer-phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="buyer-phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                    placeholder="555-555-5555"
                  />
                </div>

                <div>
                  <label htmlFor="buyer-areas" className="block text-sm font-medium text-gray-700 mb-2">
                    Areas of Interest
                  </label>
                  <input
                    type="text"
                    id="buyer-areas"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                    placeholder="Rochester, Dover, Manchester, etc."
                  />
                </div>

                <div>
                  <label htmlFor="buyer-type" className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Type
                  </label>
                  <select
                    id="buyer-type"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
                  >
                    <option>Fix & Flip</option>
                    <option>Rental Properties</option>
                    <option>Turnkey Homes</option>
                    <option>Multi-Family</option>
                    <option>Commercial</option>
                    <option>Land/Development</option>
                    <option>All Types</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:opacity-90 text-white font-semibold py-4 rounded-lg transition-opacity shadow-lg"
                >
                  Join Buyers List
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-accent text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">200+</div>
                <div className="text-gray-300">Active Investors</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-300">Deals Per Month</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">15-30%</div>
                <div className="text-gray-300">Avg. Below Market Value</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">48hr</div>
                <div className="text-gray-300">Deal Notification Speed</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
