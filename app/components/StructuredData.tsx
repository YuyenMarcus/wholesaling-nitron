export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": "https://yourdomain.com/#localbusiness",
    name: "Nitron Digital Wholesaling",
    description: "We buy homes for cash in New Hampshire and nationwide.",
    url: "https://yourdomain.com",
    telephone: "+16035074950",
    address: {
      "@type": "PostalAddress",
      streetAddress: "923 Elm St, PMB 23",
      addressLocality: "Manchester",
      addressRegion: "NH",
      postalCode: "03101",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.004,
      longitude: -71.454,
    },
    image: ["https://yourdomain.com/og-image.jpg"],
    sameAs: [
      "https://www.facebook.com/nitrondigital",
      "https://twitter.com/nitron_digital",
      "https://www.instagram.com/nitrondigital",
      "https://www.linkedin.com/company/nitrondigital",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast can I sell my house in New Hampshire?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most homeowners close in as little as 7 days once an offer is accepted. We work on your timeline and can accommodate faster or slower closings based on your needs.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to make repairs before selling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We purchase properties as-is. You don't need to fix or clean anything. We buy houses in any condition, including those needing major repairs.",
        },
      },
      {
        "@type": "Question",
        name: "Who are the buyers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our network of verified cash investors buys homes for renovation or rental purposes. All buyers are pre-vetted and have proven track records.",
        },
      },
      {
        "@type": "Question",
        name: "Are there any fees or commissions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Unlike traditional real estate sales, there are zero agent commissions, no closing costs, and no hidden fees. The offer you receive is the amount you get.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you serve in New Hampshire?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We buy houses throughout New Hampshire, including Rochester, Dover, Manchester, Nashua, Concord, and surrounding areas. Contact us regardless of your location in NH.",
        },
      },
      {
        "@type": "Question",
        name: "How is the offer determined?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We evaluate your property based on location, condition, comparable sales, and current market conditions. Our offers are fair and competitive, accounting for the convenience of a quick, as-is sale.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Sell Your House Fast in NH",
    description: "Step-by-step process to sell your home quickly for cash in New Hampshire.",
    image: "https://yourdomain.com/how-to-sell.jpg",
    totalTime: "P7D",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
    },
    step: [
      {
        "@type": "HowToStep",
        name: "Contact Us",
        text: "Fill out our short form or call us at (603) 507-4950 for a free, no-obligation offer. Provide basic details about your property.",
        url: "https://yourdomain.com/sell",
        image: "https://yourdomain.com/step-1.jpg",
      },
      {
        "@type": "HowToStep",
        name: "Get Your Offer",
        text: "We evaluate your property and send you a fair cash offer within 24 hours. No pressure, no obligation. Take your time to review it.",
        image: "https://yourdomain.com/step-2.jpg",
      },
      {
        "@type": "HowToStep",
        name: "Close & Get Paid",
        text: "Pick your closing date and receive cash in as little as 7 days. We handle all the paperwork and make the process simple.",
        image: "https://yourdomain.com/step-3.jpg",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
}

