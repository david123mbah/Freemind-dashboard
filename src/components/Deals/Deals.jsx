import React, { useState } from "react";
import { Link } from "react-router-dom";

export const dealsData = [
  {
    id: 0,
    title: "iPhone 15 Pro Max - 256GB",
    originalPrice: "$1,299",
    salePrice: "$999",
    discount: "23% OFF",
    vendor: "Apple Store",
    rating: 4.8,
    reviews: 1247,
    img: "/ions/homeImages/Iphone Image.png",
    category: "SMARTPHONE",
    expiresIn: "2 days",
    deal: "Limited Time Offer",
    description: "Get the latest iPhone 15 Pro Max with titanium design, A17 Pro chip, and advanced camera system at an incredible price.",
    features: [
      "A17 Pro chip",
      "48MP main camera",
      "Titanium design",
      "5G connectivity"
    ]
  },
  {
    id: 1,
    title: "MacBook Air M3 - 13.6 inch",
    originalPrice: "$1,199",
    salePrice: "$899",
    discount: "25% OFF",
    vendor: "Best Buy",
    rating: 4.7,
    reviews: 892,
    img: "/ions/homeImages/sssssssssssssss.png",
    category: "LAPTOP",
    expiresIn: "5 days",
    deal: "Flash Sale",
    description: "Ultra-thin and lightweight laptop powered by the M3 chip for incredible performance and all-day battery life.",
    features: [
      "M3 chip",
      "18-hour battery",
      "13.6'' Liquid Retina display",
      "1080p FaceTime HD camera"
    ]
  },
  {
    id: 2,
    title: "iPad Pro 12.9\" - M4 Chip",
    originalPrice: "$1,099",
    salePrice: "$849",
    discount: "23% OFF",
    vendor: "Amazon",
    rating: 4.9,
    reviews: 567,
    img: "/ions/homeImages/airports.png",
    category: "TABLET",
    expiresIn: "1 day",
    deal: "Today Only",
    description: "The ultimate iPad experience with M4 chip, stunning Liquid Retina XDR display, and Apple Pencil Pro support.",
    features: [
      "M4 chip",
      "12.9'' Liquid Retina XDR",
      "Apple Pencil Pro support",
      "Thunderbolt connectivity"
    ]
  },
  {
    id: 3,
    title: "AirPods Pro (2nd Gen)",
    originalPrice: "$249",
    salePrice: "$179",
    discount: "28% OFF",
    vendor: "Target",
    rating: 4.6,
    reviews: 2134,
    img: "/ions/homeImages/camera.png",
    category: "AUDIO",
    expiresIn: "3 days",
    deal: "Weekend Deal",
    description: "Premium wireless earbuds with active noise cancellation, spatial audio, and all-day battery life.",
    features: [
      "Active Noise Cancellation",
      "Spatial Audio",
      "6 hours listening time",
      "MagSafe charging case"
    ]
  },
  {
    id: 4,
    title: "Apple Watch Ultra 2 - 49mm",
    originalPrice: "$799",
    salePrice: "$679",
    discount: "15% OFF",
    vendor: "Walmart",
    rating: 4.8,
    reviews: 445,
    img: "/ions/homeImages/amkol.png",
    category: "WEARABLE",
    expiresIn: "4 days",
    deal: "Special Offer",
    description: "The most rugged and capable Apple Watch featuring titanium case, Action button, and 36-hour battery life.",
    features: [
      "Titanium case",
      "Action button",
      "36-hour battery",
      "GPS + Cellular"
    ]
  },
  {
    id: 5,
    title: "Samsung Galaxy S24 Ultra",
    originalPrice: "$1,199",
    salePrice: "$899",
    discount: "25% OFF",
    vendor: "Samsung Store",
    rating: 4.7,
    reviews: 1876,
    img: "/ions/homeImages/drone.png",
    category: "SMARTPHONE",
    expiresIn: "6 days",
    deal: "Trade-in Offer",
    description: "Flagship Android smartphone with S Pen, AI features, and incredible 200MP camera system.",
    features: [
      "200MP camera",
      "S Pen included",
      "AI features",
      "6.8'' Dynamic AMOLED"
    ]
  },
  {
    id: 6,
    title: "Dell XPS 13 Plus - Intel i7",
    originalPrice: "$1,399",
    salePrice: "$999",
    discount: "29% OFF",
    vendor: "Dell",
    rating: 4.5,
    reviews: 623,
    img: "/ions/homeImages/mannete.png",
    category: "LAPTOP",
    expiresIn: "7 days",
    deal: "Clearance",
    description: "Premium ultrabook with stunning 13.4-inch InfinityEdge display and powerful Intel Core i7 processor.",
    features: [
      "Intel Core i7",
      "13.4'' InfinityEdge display",
      "16GB RAM",
      "512GB SSD"
    ]
  },
  {
    id: 7,
    title: "Sony WH-1000XM5 Headphones",
    originalPrice: "$399",
    salePrice: "$279",
    discount: "30% OFF",
    vendor: "Sony Store",
    rating: 4.8,
    reviews: 1567,
    img: "/ions/homeImages/aniks.png",
    category: "AUDIO",
    expiresIn: "2 days",
    deal: "Black Friday Price",
    description: "Industry-leading noise canceling headphones with exceptional sound quality and 30-hour battery life.",
    features: [
      "Industry-leading ANC",
      "30-hour battery",
      "Hi-Res Audio",
      "Quick Attention mode"
    ]
  },
  {
    id: 8,
    title: "Microsoft Surface Pro 9",
    originalPrice: "$999",
    salePrice: "$749",
    discount: "25% OFF",
    vendor: "Microsoft Store",
    rating: 4.6,
    reviews: 789,
    img: "/ions/homeImages/handsai.png",
    category: "TABLET",
    expiresIn: "5 days",
    deal: "Student Discount",
    description: "2-in-1 laptop and tablet with Intel Evo platform, all-day battery, and laptop-class performance.",
    features: [
      "Intel Evo platform",
      "13'' touchscreen",
      "All-day battery",
      "Surface Pen support"
    ]
  },
  {
    id: 9,
    title: "Google Pixel 8 Pro - 256GB",
    originalPrice: "$999",
    salePrice: "$699",
    discount: "30% OFF",
    vendor: "Google Store",
    rating: 4.7,
    reviews: 1234,
    img: "/ions/homeImages/pjid.png",
    category: "SMARTPHONE",
    expiresIn: "3 days",
    deal: "Holiday Special",
    description: "AI-powered smartphone with Magic Eraser, Best Take, and incredible computational photography features.",
    features: [
      "Google Tensor G3",
      "Magic Eraser",
      "Best Take photos",
      "7 years of updates"
    ]
  },
  {
    id: 10,
    title: "Nintendo Switch OLED - White",
    originalPrice: "$349",
    salePrice: "$279",
    discount: "20% OFF",
    vendor: "GameStop",
    rating: 4.8,
    reviews: 2456,
    img: "/ions/homeImages/kkll.png",
    category: "GAMING",
    expiresIn: "4 days",
    deal: "Gaming Week",
    description: "Enhanced Nintendo Switch with vibrant 7-inch OLED screen, enhanced audio, and 64GB internal storage.",
    features: [
      "7'' OLED screen",
      "Enhanced audio",
      "64GB storage",
      "Adjustable stand"
    ]
  },
  {
    id: 11,
    title: "Amazon Echo Show 15",
    originalPrice: "$249",
    salePrice: "$179",
    discount: "28% OFF",
    vendor: "Amazon",
    rating: 4.4,
    reviews: 892,
    img: "/ions/homeImages/Image 1as.png",
    category: "SMART HOME",
    expiresIn: "6 days",
    deal: "Prime Exclusive",
    description: "Smart display with 15.6-inch full HD screen, perfect for family organization and entertainment.",
    features: [
      "15.6'' Full HD display",
      "Built-in Alexa",
      "Family calendar",
      "Video calling"
    ]
  }
];

const categories = [
  "ALL",
  "SMARTPHONE", 
  "LAPTOP",
  "TABLET",
  "AUDIO",
  "WEARABLE",
  "GAMING",
  "SMART HOME"
];

const sortOptions = [
  "Latest Deals",
  "Highest Discount",
  "Price: Low to High",
  "Price: High to Low",
  "Best Rating"
];

const Deals = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [sortBy, setSortBy] = useState("Latest Deals");
  const [page, setPage] = useState(1);
  const pageSize = 12;

  // Filter deals by category
  const filteredDeals = selectedCategory === "ALL" 
    ? dealsData 
    : dealsData.filter(deal => deal.category === selectedCategory);

  // Sort deals
  const sortedDeals = [...filteredDeals].sort((a, b) => {
    switch(sortBy) {
      case "Highest Discount":
        return parseInt(b.discount) - parseInt(a.discount);
      case "Price: Low to High":
        return parseInt(a.salePrice.replace(/[$,]/g, '')) - parseInt(b.salePrice.replace(/[$,]/g, ''));
      case "Price: High to Low":
        return parseInt(b.salePrice.replace(/[$,]/g, '')) - parseInt(a.salePrice.replace(/[$,]/g, ''));
      case "Best Rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(sortedDeals.length / pageSize);
  const paginatedDeals = sortedDeals.slice((page - 1) * pageSize, page * pageSize);

  const formatTimeLeft = (expiresIn) => {
    const parts = expiresIn.split(' ');
    const number = parts[0];
    const unit = parts[1];
    return { number, unit };
  };

  return (
    <div className="bg-gray-50 min-h-screen w-full pt-8 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-neutral-900 rounded-2xl p-8 mb-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tech Deals & Offers
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Discover amazing discounts on the latest tech products. Limited time offers you won't want to miss!
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-white/20 rounded-full px-4 py-2">
                <span className="font-semibold">🔥 Hot Deals</span>
              </div>
              <div className="bg-white/20 rounded-full px-4 py-2">
                <span className="font-semibold">⚡ Flash Sales</span>
              </div>
              <div className="bg-white/20 rounded-full px-4 py-2">
                <span className="font-semibold">💯 Best Prices</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Categories */}
            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-3">CATEGORIES</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setPage(1);
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-black text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category.replace('_', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 font-medium">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg py-2 px-4 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Showing <span className="font-semibold">{filteredDeals.length}</span> deals
              {selectedCategory !== "ALL" && (
                <span> in <span className="font-semibold">{selectedCategory}</span></span>
              )}
            </p>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {paginatedDeals.map((deal) => {
            const timeLeft = formatTimeLeft(deal.expiresIn);
            const discountAmount = parseInt(deal.originalPrice.replace(/[$,]/g, '')) - parseInt(deal.salePrice.replace(/[$,]/g, ''));
            
            return (
              <div key={deal.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                {/* Deal Badge */}
                <div className="relative">
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-red-500 text-white text-xs font-bold py-1 px-3 rounded-full">
                      {deal.discount}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-black/70 text-white text-xs font-medium py-1 px-2 rounded">
                      {deal.deal}
                    </span>
                  </div>
                  
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={deal.img} 
                      alt={deal.title} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                <div className="p-5">
                  {/* Category */}
                  <span className="text-xs text-blue-600 font-semibold uppercase tracking-wide">
                    {deal.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-bold text-gray-900 text-lg mt-1 mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                    {deal.title}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-sm">★</span>
                      <span className="text-sm font-medium text-gray-700 ml-1">{deal.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">({deal.reviews} reviews)</span>
                  </div>

                  {/* Price */}
                  <div className="mb-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-gray-900">{deal.salePrice}</span>
                      <span className="text-sm text-gray-500 line-through">{deal.originalPrice}</span>
                    </div>
                    <p className="text-xs text-green-600 font-medium">
                      Save ${discountAmount.toLocaleString()}
                    </p>
                  </div>

                  {/* Vendor */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">
                      Sold by <span className="font-semibold text-gray-900">{deal.vendor}</span>
                    </span>
                  </div>

                  {/* Expires */}
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-center">
                      <span className="text-orange-700 text-xs font-medium">
                        ⏰ Expires in {' '}
                        <span className="font-bold text-orange-800">
                          {timeLeft.number} {timeLeft.unit}
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link 
                    to={`/deals/${deal.id}`}
                    className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 group"
                  >
                    <span>View Deal</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <button
              className="px-6 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              Previous
            </button>
            
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setPage(i + 1)}
                  className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                    page === i + 1
                      ? "bg-black text-white"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              className="px-6 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mt-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Never Miss a Deal Again!
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about exclusive tech deals, flash sales, and limited-time offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
