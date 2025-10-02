import React, { useState } from "react";
import { Link } from "react-router-dom";

export const androidReviewData = [
  {
    id: 0,
    title: "Samsung Galaxy S24 Ultra Review: The Ultimate Android Flagship",
    author: "Alex Chen",
    date: "September 15, 2025",
    img: "/ions/homeImages/drone.png",
    category: "SMARTPHONE",
    rating: 4.8,
    summary: "Samsung's latest flagship delivers exceptional performance, stunning camera capabilities, and S Pen integration in a premium package...",
    price: "$1,299",
    pros: [
      "Outstanding 200MP camera system",
      "S Pen functionality",
      "Brilliant display quality",
      "Excellent battery life",
      "AI-powered features"
    ],
    cons: [
      "Premium price point",
      "Large size may not suit everyone",
      "Software can feel overwhelming"
    ]
  },
  {
    id: 1,
    title: "Google Pixel 8 Pro vs Samsung Galaxy S24: Which Android Wins?",
    author: "Maya Rodriguez",
    date: "September 12, 2025",
    img: "/ions/homeImages/pjid.png",
    category: "SMARTPHONE vs SMARTPHONE",
    rating: 4.7,
    summary: "Comparing Google's computational photography master against Samsung's feature-packed flagship to help you choose...",
    price: "$999 vs $1,199",
    pros: [
      "Pixel: Pure Android experience",
      "Pixel: Superior computational photography",
      "Galaxy: More features and customization",
      "Galaxy: Better hardware specs"
    ],
    cons: [
      "Pixel: Limited availability",
      "Galaxy: Higher price point",
      "Both: Large form factors"
    ]
  },
  {
    id: 2,
    title: "OnePlus 12 Review: Flagship Killer Returns",
    author: "James Park",
    date: "September 10, 2025",
    img: "/ions/homeImages/camera.png",
    category: "SMARTPHONE",
    rating: 4.6,
    summary: "OnePlus returns to form with blazing-fast performance, excellent cameras, and competitive pricing...",
    price: "$899",
    pros: [
      "Snapdragon 8 Gen 3 performance",
      "Fast 100W charging",
      "Hasselblad camera tuning",
      "Clean OxygenOS interface",
      "Premium build quality"
    ],
    cons: [
      "No wireless charging",
      "Limited software support",
      "Camera inconsistencies in low light"
    ]
  },
  {
    id: 3,
    title: "Samsung Galaxy Tab S9 Ultra: Android Tablet Excellence",
    author: "Sarah Kim",
    date: "September 8, 2025",
    img: "/ions/homeImages/sssssssssssssss.png",
    category: "TABLET",
    rating: 4.5,
    summary: "Samsung's largest tablet offers laptop-like productivity with S Pen precision and stunning AMOLED display...",
    price: "$1,199",
    pros: [
      "Massive 14.6-inch AMOLED display",
      "Included S Pen",
      "Desktop-class performance",
      "Excellent multitasking",
      "Premium build quality"
    ],
    cons: [
      "Very expensive",
      "Heavy and bulky",
      "Limited Android tablet apps"
    ]
  },
  {
    id: 4,
    title: "Xiaomi 14 Ultra: Camera Powerhouse on a Budget",
    author: "Chen Li",
    date: "September 5, 2025",
    img: "/ions/homeImages/mannete.png",
    category: "SMARTPHONE",
    rating: 4.7,
    summary: "Xiaomi's flagship brings Leica-tuned cameras and flagship performance at a more accessible price point...",
    price: "$799",
    pros: [
      "Leica camera partnership",
      "Excellent value proposition",
      "Fast Snapdragon 8 Gen 3",
      "Stunning design",
      "120W fast charging"
    ],
    cons: [
      "MIUI can be overwhelming",
      "Limited global availability",
      "No wireless charging"
    ]
  },
  {
    id: 5,
    title: "Nothing Phone (3): Transparent Innovation",
    author: "Emma Watson",
    date: "September 3, 2025",
    img: "/ions/homeImages/aniks.png",
    category: "SMARTPHONE",
    rating: 4.4,
    summary: "Nothing's latest phone combines unique transparent design with solid performance and competitive pricing...",
    price: "$599",
    pros: [
      "Unique transparent design",
      "Glyph Interface lighting",
      "Clean Nothing OS",
      "Good value for money",
      "Excellent build quality"
    ],
    cons: [
      "Average camera performance",
      "Limited availability",
      "Gimmicky features for some"
    ]
  },
  {
    id: 6,
    title: "Sony Xperia 1 V: The Creator's Android Phone",
    author: "David Brown",
    date: "August 30, 2025",
    img: "/ions/homeImages/airports.png",
    category: "SMARTPHONE",
    rating: 4.3,
    summary: "Sony's flagship caters to content creators with professional camera controls and cinema-grade video recording...",
    price: "$1,399",
    pros: [
      "Professional camera controls",
      "4K 120Hz OLED display",
      "Excellent audio quality",
      "Clean Android experience",
      "Unique 21:9 aspect ratio"
    ],
    cons: [
      "Very expensive",
      "Niche appeal",
      "Average battery life"
    ]
  },
  {
    id: 7,
    title: "Motorola Edge 50 Pro: Mid-Range Marvel",
    author: "Lisa Johnson",
    date: "August 28, 2025",
    img: "/ions/homeImages/amkol.png",
    category: "SMARTPHONE",
    rating: 4.2,
    summary: "Motorola delivers flagship features at mid-range prices with excellent cameras and clean Android...",
    price: "$499",
    pros: [
      "Excellent camera system",
      "Clean near-stock Android",
      "Great battery life",
      "Affordable pricing",
      "Premium design"
    ],
    cons: [
      "Mid-range processor",
      "Limited availability",
      "Plastic build"
    ]
  },
  {
    id: 8,
    title: "Asus ROG Phone 8: Gaming Beast Unleashed",
    author: "Mike Chen",
    date: "August 25, 2025",
    img: "/ions/homeImages/handsai.png",
    category: "GAMING PHONE",
    rating: 4.6,
    summary: "Asus continues to dominate mobile gaming with incredible performance, cooling, and gaming-focused features...",
    price: "$999",
    pros: [
      "Unmatched gaming performance",
      "Advanced cooling system",
      "Gaming accessories ecosystem",
      "High refresh rate display",
      "Massive battery"
    ],
    cons: [
      "Bulky design",
      "Gaming-focused aesthetics",
      "Average cameras"
    ]
  },
  {
    id: 9,
    title: "Oppo Find X7 Pro: Photography Excellence",
    author: "Anna Lee",
    date: "August 22, 2025",
    img: "/ions/homeImages/kkll.png",
    category: "SMARTPHONE",
    rating: 4.5,
    summary: "Oppo's flagship focuses on photography with Hasselblad partnership and impressive computational imaging...",
    price: "$899",
    pros: [
      "Hasselblad camera system",
      "Excellent portrait photography",
      "Premium design",
      "Fast performance",
      "Good battery life"
    ],
    cons: [
      "ColorOS learning curve",
      "Limited global availability",
      "Expensive pricing"
    ]
  },
  {
    id: 10,
    title: "Realme GT 5: Speed Demon on a Budget",
    author: "Tom Wilson",
    date: "August 20, 2025",
    img: "/ions/homeImages/Image 1as.png",
    category: "SMARTPHONE",
    rating: 4.1,
    summary: "Realme delivers flagship performance at budget prices with impressive specs and aggressive pricing...",
    price: "$399",
    pros: [
      "Excellent price-to-performance",
      "Fast Snapdragon 8 Gen 2",
      "Good camera system",
      "Fast charging",
      "Gaming optimizations"
    ],
    cons: [
      "Realme UI bloatware",
      "Average build quality",
      "Limited software support"
    ]
  },
  {
    id: 11,
    title: "Samsung Galaxy Watch 6: Android's Best Smartwatch",
    author: "Rachel Green",
    date: "August 18, 2025",
    img: "/ions/homeImages/Iphone Image.png",
    category: "WEARABLE",
    rating: 4.4,
    summary: "Samsung's latest smartwatch offers comprehensive health tracking, excellent battery life, and seamless Android integration...",
    price: "$329",
    pros: [
      "Comprehensive health tracking",
      "Excellent battery life",
      "Beautiful rotating bezel",
      "Wide app ecosystem",
      "Water resistance"
    ],
    cons: [
      "Limited iOS compatibility",
      "Expensive accessories",
      "Samsung Pay limitations"
    ]
  }
];

const Android = () => {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Date");
  const [viewMode, setViewMode] = useState("grid");
  const pageSize = 8;

  // Get unique categories
  const categories = ["All", ...new Set(androidReviewData.map(item => item.category))];
  
  // Filter and sort data
  const filteredReviews = androidReviewData
    .filter(review => selectedCategory === "All" || review.category === selectedCategory)
    .sort((a, b) => {
      switch(sortBy) {
        case "Price: Low to High":
          return parseFloat(a.price.replace(/[$,]/g, '')) - parseFloat(b.price.replace(/[$,]/g, ''));
        case "Price: High to Low":
          return parseFloat(b.price.replace(/[$,]/g, '')) - parseFloat(a.price.replace(/[$,]/g, ''));
        case "Rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const totalPages = Math.ceil(filteredReviews.length / pageSize);
  const paginatedReviews = filteredReviews.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 via-green-800/30 to-green-900/50"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.523 15.3414c-.5665-.4511-1.4311-.6853-2.2294-.6853-.7982 0-1.6628.2342-2.2293.6853-.5665.4512-.5665 1.1816 0 1.6327.5665.4511 1.4311.6853 2.2293.6853.7983 0 1.6629-.2342 2.2294-.6853.5665-.4511.5665-1.1815 0-1.6327zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.02 0 2.05-.15 3.06-.44v-1.89c-.98.29-2.02.44-3.06.44C7.59 20.11 4 16.52 4 12S7.59 3.89 12 3.89s8 3.63 8 8.11c0 1.19-.27 2.33-.77 3.37.63.27 1.28.41 1.94.41.39 0 .78-.06 1.16-.17C21.77 14.66 22 13.36 22 12c0-5.52-4.48-10-10-10z"/>
              </svg>
              <span className="text-white text-sm font-medium">Android Universe</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Android Device
              <span className="block text-yellow-400">Reviews</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Comprehensive reviews of the latest Android smartphones, tablets, and accessories. From flagship devices to budget gems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setSelectedCategory("SMARTPHONE")}
                className="bg-white text-green-800 hover:bg-yellow-400 hover:text-black font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Phone Reviews
              </button>
              <button 
                onClick={() => setSelectedCategory("TABLET")}
                className="border border-white/20 text-white hover:bg-white hover:text-green-800 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Tablet Reviews
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Android-themed elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <div className="w-16 h-16 bg-white/10 rounded-full rotate-12 animate-pulse"></div>
        </div>
        <div className="absolute bottom-32 right-16 opacity-20">
          <div className="w-12 h-12 bg-yellow-400/30 rounded-lg animate-bounce"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-20">
          <div className="w-8 h-8 bg-white/20 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Enhanced Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-600 mb-3 block">Device Category</label>
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
                    {category === "All" ? "All Devices" : category.replace("vs", "vs").split(" ").map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                    ).join(" ")}
                  </button>
                ))}
              </div>
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-4">
              {/* Sort */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 font-medium">Sort:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg py-2 px-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="Date">Latest First</option>
                  <option value="Rating">Highest Rated</option>
                  <option value="Price: Low to High">Price: Low to High</option>
                  <option value="Price: High to Low">Price: High to Low</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? "bg-black text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? "bg-black text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Showing <span className="font-semibold">{filteredReviews.length}</span> reviews
              {selectedCategory !== "All" && (
                <span> in <span className="font-semibold">{selectedCategory.replace("vs", "vs").split(" ").map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                ).join(" ")}</span></span>
              )}
            </p>
          </div>
        </div>

        {/* Enhanced Product Review Grid/List */}
        <div className={viewMode === "grid" 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" 
          : "space-y-6"
        }>
          {paginatedReviews.map((review, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                viewMode === "list" ? "flex gap-6 p-6" : ""
              }`}
            >
              {/* Image Section */}
              <div className={`relative ${viewMode === "list" ? "w-48 flex-shrink-0" : ""}`}>
                {/* Enhanced Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  {review.category.includes("vs") && (
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold py-1 px-3 rounded-full shadow-lg">
                      COMPARISON
                    </span>
                  )}
                  {review.category === "GAMING PHONE" && (
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold py-1 px-3 rounded-full shadow-lg">
                      GAMING
                    </span>
                  )}
                  {review.rating >= 4.7 && (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold py-1 px-3 rounded-full shadow-lg">
                      TOP PICK
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-sm transition-all group-hover:scale-110">
                  <svg className="w-5 h-5 text-gray-600 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                <div className={`relative overflow-hidden ${viewMode === "list" ? "h-32" : "h-56"} bg-gradient-to-br from-green-50 to-green-100 rounded-xl`}>
                  <Link to={`/android/${review.id}`}>
                    <img 
                      src={review.img} 
                      alt={review.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </Link>
                </div>
              </div>

              {/* Content Section */}
              <div className={`${viewMode === "list" ? "flex-1" : "p-6"}`}>
                {/* Category & Rating */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold bg-gray-100 px-2 py-1 rounded-full">
                    {review.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-sm">★</span>
                    <span className="text-sm font-semibold text-gray-700">{review.rating}</span>
                  </div>
                </div>

                {/* Title */}
                <Link to={`/android/${review.id}`}>
                  <h2 className="font-bold text-gray-900 text-lg mb-3 line-clamp-2 group-hover:text-green-600 transition-colors leading-tight">
                    {review.title}
                  </h2>
                </Link>

                {/* Author & Date */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-semibold text-green-700">
                      {review.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-700 text-sm font-medium">{review.author}</p>
                    <p className="text-gray-500 text-xs">{review.date}</p>
                  </div>
                </div>

                {/* Price & Pros (List view) */}
                {viewMode === "list" && (
                  <div className="mb-4">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-bold text-gray-900">{review.price}</span>
                      <div className="flex flex-wrap gap-1">
                        {review.pros.slice(0, 2).map((pro, index) => (
                          <span key={index} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            ✓ {pro}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Summary */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {review.summary}
                </p>

                {/* Actions */}
                <div className="flex gap-2">
                  <Link
                    to={`/android/${review.id}`}
                    className="flex-1 bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-center text-sm"
                  >
                    Read Review
                  </Link>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-3 rounded-lg transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
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

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-green-800 to-green-900 rounded-2xl p-8 mt-16 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated with Android Reviews
          </h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Get the latest Android device reviews, comparisons, and buying guides delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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

export default Android;
