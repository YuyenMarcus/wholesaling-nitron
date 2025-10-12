export interface Deal {
  id: string;
  city: string;
  price: string;
  arv: string;
  repairs: string;
  description: string;
  image: string;
  bedrooms?: number;
  bathrooms?: number;
  sqft?: string;
  type: 'single-family' | 'duplex' | 'multi-family' | 'commercial' | 'land';
  status: 'available' | 'pending' | 'sold';
}

export const deals: Deal[] = [
  {
    id: "rochester-3br",
    city: "Rochester, NH",
    price: "$185,000",
    arv: "$270,000",
    repairs: "$40,000",
    description: "3BR 2BA single-family, light rehab needed. Great neighborhood with strong rental demand.",
    image: "/images/rochester3br.jpg",
    bedrooms: 3,
    bathrooms: 2,
    sqft: "1,450",
    type: "single-family",
    status: "available",
  },
  {
    id: "dover-duplex",
    city: "Dover, NH",
    price: "$265,000",
    arv: "$340,000",
    repairs: "$20,000",
    description: "Duplex near downtown Dover, tenant-ready. Current rental income $2,400/month.",
    image: "/images/doverduplex.jpg",
    bedrooms: 4,
    bathrooms: 2,
    sqft: "2,100",
    type: "duplex",
    status: "available",
  },
  {
    id: "manchester-multifamily",
    city: "Manchester, NH",
    price: "$425,000",
    arv: "$550,000",
    repairs: "$60,000",
    description: "4-unit multi-family in prime Manchester location. Strong cash flow potential.",
    image: "/images/manchester-multi.jpg",
    bedrooms: 8,
    bathrooms: 4,
    sqft: "3,800",
    type: "multi-family",
    status: "available",
  },
  {
    id: "nashua-commercial",
    city: "Nashua, NH",
    price: "$350,000",
    arv: "$480,000",
    repairs: "$75,000",
    description: "Mixed-use commercial property with retail + office space. High traffic area.",
    image: "/images/nashua-commercial.jpg",
    sqft: "4,200",
    type: "commercial",
    status: "pending",
  },
  {
    id: "concord-land",
    city: "Concord, NH",
    price: "$95,000",
    arv: "$145,000",
    repairs: "$0",
    description: "3.5 acres of buildable land with utilities nearby. Zoned residential.",
    image: "/images/concord-land.jpg",
    sqft: "3.5 acres",
    type: "land",
    status: "available",
  },
  {
    id: "portsmouth-single",
    city: "Portsmouth, NH",
    price: "$295,000",
    arv: "$385,000",
    repairs: "$45,000",
    description: "Charming single-family near downtown Portsmouth. Cosmetic updates needed.",
    image: "/images/portsmouth-single.jpg",
    bedrooms: 3,
    bathrooms: 2,
    sqft: "1,850",
    type: "single-family",
    status: "available",
  },
];

// Filter functions for deal pages
export const getAvailableDeals = () => deals.filter(d => d.status === 'available');
export const getDealsByType = (type: Deal['type']) => deals.filter(d => d.type === type);
export const getFeaturedDeals = () => deals.slice(0, 3);


