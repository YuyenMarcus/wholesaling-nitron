'use client';
import React from 'react';

export default function AiSchemaBuy() {
  const buySchema = {
    "@context": "https://schema.org",
    "@type": "Demand",
    "@id": "https://yourdomain.com/buy/#investor-demand",
    "name": "Off-Market Investment Property Opportunities",
    "description": "Exclusive access to off-market properties in New Hampshire for real estate investors. Below-market deals, fix-and-flip opportunities, rental properties.",
    "buyer": {
      "@type": "Audience",
      "audienceType": "Real Estate Investors",
      "geographicArea": {
        "@type": "State",
        "name": "New Hampshire"
      }
    },
    "itemOffered": {
      "@type": "Product",
      "name": "Investment Property Lead Service",
      "description": "Access to off-market residential and commercial properties at wholesale prices",
      "category": "Real Estate Investment"
    },
    "availableAtOrFrom": {
      "@type": "Organization",
      "name": "Nitron Digital Wholesaling",
      "url": "https://yourdomain.com"
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
    "eligibleCustomerType": [
      "Fix and Flip Investors",
      "Buy and Hold Investors",
      "Rental Property Investors",
      "Wholesalers",
      "Cash Buyers"
    ],
    "potentialAction": {
      "@type": "BuyAction",
      "actionStatus": "https://schema.org/PotentialActionStatus",
      "object": {
        "@type": "Product",
        "name": "Off-Market Investment Property"
      },
      "priceSpecification": {
        "@type": "PriceSpecification",
        "description": "15-30% below market value on average"
      }
    },
    "about": [
      "Off-market properties NH",
      "Real estate wholesale deals",
      "Investment property opportunities",
      "Fix and flip properties",
      "Rental property investments",
      "Below market value homes"
    ],
    "knowsAbout": [
      "Off-market property sourcing",
      "Real estate investment analysis",
      "Wholesale property deals",
      "New Hampshire real estate market",
      "Investment property evaluation"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buySchema, null, 2) }}
    />
  );
}


