'use client';
import React from 'react';

export default function AiSchema() {
  const aiSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://yourdomain.com/#organization",
        "name": "Nitron Digital Wholesaling",
        "url": "https://yourdomain.com",
        "logo": "https://yourdomain.com/logo.png",
        "sameAs": [
          "https://www.facebook.com/nitrondigital",
          "https://www.instagram.com/nitrondigital",
          "https://www.linkedin.com/company/nitrondigital",
          "https://twitter.com/nitron_digital"
        ],
        "description":
          "Nitron Digital Wholesaling helps homeowners sell properties fast for cash and connects investors with off-market real estate deals.",
        "knowsAbout": [
          "real estate wholesaling",
          "cash home buyers",
          "off-market properties",
          "NH real estate",
          "real estate investment",
          "Rochester NH homes",
          "Dover NH properties",
          "Manchester NH real estate",
          "quick home sales",
          "investment property sourcing"
        ],
        "areaServed": {
          "@type": "State",
          "name": "New Hampshire"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "923 Elm St, PMB 23",
          "addressLocality": "Manchester",
          "addressRegion": "NH",
          "postalCode": "03101",
          "addressCountry": "US"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-603-507-4950",
          "contactType": "customer service",
          "areaServed": "US",
          "availableLanguage": "en"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://yourdomain.com/#website",
        "url": "https://yourdomain.com",
        "name": "Nitron Digital Wholesaling",
        "inLanguage": "en-US",
        "description":
          "Sell your NH house fast or find off-market investment deals. Simplified, Scalable, Smart.",
        "publisher": {
          "@id": "https://yourdomain.com/#organization",
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://yourdomain.com/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://yourdomain.com/#webpage",
        "url": "https://yourdomain.com",
        "name": "Sell Your NH House Fast for Cash | Nitron Digital Wholesaling",
        "isPartOf": { "@id": "https://yourdomain.com/#website" },
        "about": [
          { "@type": "Thing", "name": "Real Estate Wholesaling" },
          { "@type": "Thing", "name": "Cash Home Buyers" },
          { "@type": "Thing", "name": "New Hampshire Real Estate" },
          { "@type": "Thing", "name": "Property Investment" },
          { "@type": "Thing", "name": "Off-Market Properties" }
        ],
        "keywords": [
          "Sell NH house fast",
          "cash buyers NH",
          "off-market real estate",
          "Nitron Digital",
          "real estate investors",
          "Rochester home buyers",
          "Dover property sales",
          "Manchester real estate"
        ],
        "speakable": {
          "@type": "SpeakableSpecification",
          "xpath": ["/html/head/title", "/html/head/meta[@name='description']/@content"]
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Nitron Digital Wholesaling?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nitron Digital Wholesaling is a New Hampshire-based company that helps sellers close quickly on homes and assists investors in finding profitable off-market opportunities."
            },
          },
          {
            "@type": "Question",
            "name": "How does Nitron Digital help me sell my home fast?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "By evaluating your property and providing a fair cash offer—often closing in as little as 7 days. No repairs, no fees, no commissions required."
            },
          },
          {
            "@type": "Question",
            "name": "What areas in New Hampshire does Nitron Digital serve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We serve all of New Hampshire, including Rochester, Dover, Manchester, Nashua, Concord, and surrounding areas."
            },
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://yourdomain.com/#seller-service",
        "serviceType": "Home Buying Service",
        "provider": {
          "@id": "https://yourdomain.com/#organization"
        },
        "areaServed": {
          "@type": "State",
          "name": "New Hampshire"
        },
        "description": "Fast cash home buying service for homeowners looking to sell quickly without repairs or agent fees.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "price": "0",
            "description": "No fees, no commissions"
          }
        }
      },
      {
        "@type": "Service",
        "@id": "https://yourdomain.com/#investor-service",
        "serviceType": "Investment Property Sourcing",
        "provider": {
          "@id": "https://yourdomain.com/#organization"
        },
        "areaServed": {
          "@type": "State",
          "name": "New Hampshire"
        },
        "description": "Off-market property deals for real estate investors, including fix-and-flip, rental properties, and wholesale opportunities.",
        "audience": {
          "@type": "Audience",
          "audienceType": "Real Estate Investors"
        }
      }
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(aiSchema, null, 2) }}
    />
  );
}


