'use client';

import StructuredData from "../components/StructuredData";
import AiSchemaSell from "../components/AiSchemaSell";
import LeadForm from '../components/LeadForm';
import ShinyText from '../components/ShinyText';
import { CheckCircle2, Clock, DollarSign, Home, Shield, Users } from 'lucide-react';

export default function SellPage() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Fair Cash Offers',
      description: 'Get a competitive cash offer within 24 hours. No hidden fees or commissions.',
    },
    {
      icon: Clock,
      title: 'Close Fast',
      description: 'Choose your closing date. We can close in as little as 7 days.',
    },
    {
      icon: Home,
      title: 'Sell As-Is',
      description: 'No need for repairs or cleaning. We buy houses in any condition.',
    },
    {
      icon: Shield,
      title: 'No Fees',
      description: 'Zero agent commissions, zero closing costs. Keep more of your money.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Professional, transparent process from start to finish.',
    },
    {
      icon: CheckCircle2,
      title: 'Guaranteed Close',
      description: 'No financing contingencies. We have the cash ready to close.',
    },
  ];

  const process = [
    {
      step: 1,
      title: 'Submit Your Info',
      description: 'Fill out our simple form with your property details.',
    },
    {
      step: 2,
      title: 'Get Your Offer',
      description: 'Receive a fair, no-obligation cash offer within 24 hours.',
    },
    {
      step: 3,
      title: 'Close on Your Terms',
      description: 'Choose your closing date and get paid. It\'s that simple.',
    },
  ];

  return (
    <>
      <StructuredData />
      <AiSchemaSell />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-500 to-blue-600 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <ShinyText
                text="Sell Your Home Fast for Cash"
                speed={4}
                className="text-4xl md:text-5xl font-heading font-bold text-white drop-shadow-2xl"
              />
            </div>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              No Fees. No Repairs. No Hassle. Get a Fair Cash Offer in 24 Hours.
            </p>
            <a
              href="#lead-form"
              className="inline-block bg-white text-primary px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-xl text-lg"
            >
              Get My Cash Offer
            </a>
          </div>
        </section>

        {/* Lead Form Section - Moved Up */}
        <section id="lead-form" className="py-20 bg-gradient-to-br from-slate-50 to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <LeadForm />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold mb-4">
                Why Sell to Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We make selling your house simple, fast, and stress-free
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600">
                Three simple steps to selling your house
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  {/* Connector line (hidden on mobile) */}
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-1/2 w-full h-1 bg-slate-200 -z-10" />
                  )}

                  <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border-2 border-slate-200 text-center">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
