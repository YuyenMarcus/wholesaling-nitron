'use client';
import React from 'react';

export default function AiSchemaSell() {
  const sellSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "@id": "https://yourdomain.com/sell/#cash-offer",
    "name": "Cash Home Buying Offer",
    "description": "Get a fair cash offer for your home in 24 hours. No repairs, no fees, no commissions. Close in as little as 7 days.",
    "seller": {
      "@type": "Organization",
      "name": "Nitron Digital Wholesaling",
      "url": "https://yourdomain.com"
    },
    "itemOffered": {
      "@type": "Service",
      "name": "Fast Cash Home Purchase",
      "serviceType": "Real Estate Transaction Service",
      "provider": {
        "@type": "Organization",
        "name": "Nitron Digital Wholesaling"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Rochester",
        "containedIn": {
          "@type": "State",
          "name": "New Hampshire"
        }
      },
      {
        "@type": "City",
        "name": "Dover",
        "containedIn": {
          "@type": "State",
          "name": "New Hampshire"
        }
      },
      {
        "@type": "City",
        "name": "Manchester",
        "containedIn": {
          "@type": "State",
          "name": "New Hampshire"
        }
      },
      {
        "@type": "State",
        "name": "New Hampshire"
      }
    ],
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD",
      "price": "0",
      "description": "No fees, no commissions, no closing costs"
    },
    "eligibleCustomerType": {
      "@type": "Audience",
      "audienceType": "Homeowners seeking quick sale",
      "description": "Homeowners who want to sell their property quickly without repairs, showings, or agent commissions"
    },
    "potentialAction": {
      "@type": "TradeAction",
      "actionStatus": "https://schema.org/PotentialActionStatus",
      "object": {
        "@type": "Product",
        "name": "Residential Property"
      },
      "price": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD",
        "description": "Fair market cash offer"
      }
    },
    "about": [
      "Sell house fast New Hampshire",
      "Cash home buyers NH",
      "No repair home sale",
      "Quick closing real estate",
      "Avoid foreclosure NH"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(sellSchema, null, 2) }}
    />
  );
}


