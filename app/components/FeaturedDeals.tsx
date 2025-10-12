'use client';

export default function FeaturedDeals() {
  const listings = [
    { 
      price: "$315,000", 
      beds: 3, 
      baths: 2, 
      location: "Hampton, NH",
      soldDate: "Sold in 9 days",
      image: "/images/suburban-bg.jpg" // Placeholder - replace with actual images
    },
    { 
      price: "$425,900", 
      beds: 4, 
      baths: 2, 
      location: "Rochester, NH",
      soldDate: "Sold in 7 days",
      image: "/images/suburban-bg.jpg" // Placeholder
    },
    { 
      price: "$280,000", 
      beds: 3, 
      baths: 1, 
      location: "Dover, NH",
      soldDate: "Sold in 12 days",
      image: "/images/suburban-bg.jpg" // Placeholder
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Homeowners We've Helped
          </h2>
          <p className="text-xl text-gray-600">
            Real people, real homes — each with a unique situation and clean break.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {listings.map((home, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${home.image})` }}
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {home.soldDate}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {home.price}
                </h3>
                <p className="text-gray-600 mb-3">
                  {home.beds} bed • {home.baths} bath
                </p>
                <p className="text-gray-800 font-medium">
                  {home.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Join hundreds of satisfied homeowners who sold their homes fast for cash
          </p>
          <a
            href="#hero"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            Get Your Free Cash Offer
          </a>
        </div>
      </div>
    </section>
  );
}

