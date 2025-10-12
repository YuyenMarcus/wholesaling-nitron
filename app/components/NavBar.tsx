'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Home, DollarSign, ShoppingBag } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/sell', label: 'Sell Your Home', icon: DollarSign },
    { href: '/buy', label: 'Find Deals', icon: ShoppingBag },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src="/nitron-logo.png" 
              alt="Nitron Digital"
              className="h-14 sm:h-16 w-auto"
            />
            <span className="text-lg sm:text-xl font-bold text-primary font-heading">Nitron Digital</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/sell"
              className="bg-primary hover:opacity-90 text-white px-6 py-2 rounded-xl font-semibold transition-opacity"
            >
              Get Cash Offer
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors font-medium py-2"
                >
                  <Icon className="w-5 h-5" />
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/sell"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-primary hover:opacity-90 text-white text-center px-6 py-3 rounded-xl font-semibold transition-opacity mt-4"
            >
              Get Cash Offer
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

