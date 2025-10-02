import React, { useState } from "react";
import { Link } from "react-router-dom";

export const gadgetsData = [
  {
    id: 0,
    title: "iPhone 15 Pro Max",
    brand: "Apple",
    category: "Smartphone",
    price: "$1,199",
    rating: 4.9,
    reviews: 2847,
    img: "/ions/homeImages/Iphone Image.png",
    colors: ["#1d1d1f", "#f5f5dc", "#ffd700", "#87ceeb"],
    specs: {
      display: "6.7\" Super Retina XDR",
      processor: "A17 Pro chip",
      storage: "256GB",
      camera: "48MP Triple camera"
    },
    features: ["5G Ready", "Face ID", "Wireless Charging", "Water Resistant"],
    isNew: true,
    isTrending: false
  },
  {
    id: 1,
    title: "MacBook Air M3",
    brand: "Apple",
    category: "Laptop",
    price: "$1,099",
    rating: 4.8,
    reviews: 1567,
    img: "/ions/homeImages/sssssssssssssss.png",
    colors: ["#e8e8ed", "#1d1d1f", "#ffd700", "#f0c674"],
    specs: {
      display: "13.6\" Liquid Retina",
      processor: "Apple M3 chip",
      storage: "512GB SSD",
      memory: "16GB RAM"
    },
    features: ["18-hour battery", "TouchID", "MagSafe", "Thunderbolt"],
    isNew: false,
    isTrending: true
  },
  {
    id: 2,
    title: "iPad Pro 12.9\"",
    brand: "Apple",
    category: "Tablet",
    price: "$1,099",
    rating: 4.7,
    reviews: 892,
    img: "/ions/homeImages/airports.png",
    colors: ["#e8e8ed", "#1d1d1f"],
    specs: {
      display: "12.9\" Liquid Retina XDR",
      processor: "M4 chip",
      storage: "256GB",
      connectivity: "Wi-Fi 6E + 5G"
    },
    features: ["Apple Pencil Pro", "Magic Keyboard", "Face ID", "USB-C"],
    isNew: true,
    isTrending: true
  },
  {
    id: 3,
    title: "AirPods Pro (3rd Gen)",
    brand: "Apple",
    category: "Audio",
    price: "$249",
    rating: 4.6,
    reviews: 3241,
    img: "/ions/homeImages/camera.png",
    colors: ["#ffffff"],
    specs: {
      battery: "6h + 24h case",
      connectivity: "Bluetooth 5.3",
      features: "Active Noise Cancellation",
      charging: "MagSafe + USB-C"
    },
    features: ["Spatial Audio", "Transparency Mode", "Touch Control", "Find My"],
    isNew: false,
    isTrending: false
  },
  {
    id: 4,
    title: "Apple Watch Ultra 2",
    brand: "Apple",
    category: "Wearable",
    price: "$799",
    rating: 4.8,
    reviews: 1123,
    img: "/ions/homeImages/amkol.png",
    colors: ["#8a8a8d", "#ff6b35"],
    specs: {
      display: "49mm Titanium",
      battery: "36 hours",
      water: "100m water resistant",
      gps: "Dual-frequency GPS"
    },
    features: ["Action Button", "Siren", "Dive Computer", "Cellular"],
    isNew: false,
    isTrending: true
  },
  {
    id: 5,
    title: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "Smartphone", 
    price: "$1,299",
    rating: 4.7,
    reviews: 2156,
    img: "/ions/homeImages/drone.png",
    colors: ["#1d1d1f", "#8a7ca8", "#ffd700", "#dda0dd"],
    specs: {
      display: "6.8\" Dynamic AMOLED",
      processor: "Snapdragon 8 Gen 3",
      storage: "512GB",
      camera: "200MP Quad camera"
    },
    features: ["S Pen", "AI Features", "5G", "Fast Charging"],
    isNew: true,
    isTrending: false
  },
  {
    id: 6,
    title: "Sony WH-1000XM5",
    brand: "Sony",
    category: "Audio",
    price: "$399",
    rating: 4.9,
    reviews: 1876,
    img: "/ions/homeImages/mannete.png",
    colors: ["#1d1d1f", "#f5f5dc"],
    specs: {
      battery: "30 hours",
      connectivity: "Bluetooth 5.2",
      driver: "30mm drivers",
      weight: "250g"
    },
    features: ["Noise Cancelling", "Quick Attention", "Hi-Res Audio", "Touch Control"],
    isNew: false,
    isTrending: true
  },
  {
    id: 7,
    title: "Nintendo Switch OLED",
    brand: "Nintendo",
    category: "Gaming",
    price: "$349",
    rating: 4.8,
    reviews: 3456,
    img: "/ions/homeImages/aniks.png",
    colors: ["#ff6b6b", "#4ecdc4", "#45b7d1"],
    specs: {
      display: "7\" OLED touchscreen",
      storage: "64GB internal",
      battery: "4.5-9 hours",
      dock: "TV mode included"
    },
    features: ["Portable Gaming", "TV Mode", "Tabletop Mode", "Joy-Con"],
    isNew: false,
    isTrending: false
  },
  {
    id: 8,
    title: "Tesla Model Y",
    brand: "Tesla",
    category: "Electric Vehicle",
    price: "$52,890",
    rating: 4.6,
    reviews: 892,
    img: "/ions/homeImages/handsai.png",
    colors: ["#ffffff", "#1d1d1f", "#ff0000", "#4169e1", "#808080"],
    specs: {
      range: "330 miles EPA",
      acceleration: "0-60mph in 4.8s",
      seating: "Up to 7 seats",
      charging: "Supercharger network"
    },
    features: ["Autopilot", "Over-the-air updates", "Glass roof", "Premium interior"],
    isNew: false,
    isTrending: true
  }
];

const categories = ["All", "Smartphone", "Laptop", "Tablet", "Audio", "Wearable", "Gaming", "Electric Vehicle"];
const brands = ["All", "Apple", "Samsung", "Sony", "Nintendo", "Tesla"];
const sortOptions = ["Featured", "Newest", "Price: Low to High", "Price: High to Low", "Most Popular"];

const Gadgets = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort gadgets
  const filteredGadgets = gadgetsData
    .filter(gadget => selectedCategory === "All" || gadget.category === selectedCategory)
    .filter(gadget => selectedBrand === "All" || gadget.brand === selectedBrand)
    .sort((a, b) => {
      switch(sortBy) {
        case "Newest":
          return b.isNew - a.isNew;
        case "Price: Low to High":
          return parseFloat(a.price.replace(/[$,]/g, '')) - parseFloat(b.price.replace(/[$,]/g, ''));
        case "Price: High to Low":
          return parseFloat(b.price.replace(/[$,]/g, '')) - parseFloat(a.price.replace(/[$,]/g, ''));
        case "Most Popular":
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      {/* Hero Section */}
      <div className="relative bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              <span className="text-yellow-400 text-sm font-medium">Latest Tech Collection</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Discover Amazing
              <span className="block text-yellow-400">Gadgets</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore cutting-edge technology and innovative gadgets that shape the future. From smartphones to smart homes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setSelectedCategory("Smartphone")}
                className="bg-white text-black hover:bg-yellow-400 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Shop Smartphones
              </button>
              <button 
                onClick={() => setSelectedCategory("Audio")}
                className="border border-white/20 text-white hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Browse Audio
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating gadget icons */}
        <div className="absolute top-20 left-10 opacity-20">
          <div className="w-16 h-16 bg-yellow-400/20 rounded-2xl rotate-12 animate-pulse"></div>
        </div>
        <div className="absolute bottom-32 right-16 opacity-20">
          <div className="w-12 h-12 bg-white/20 rounded-full animate-bounce"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-20">
          <div className="w-8 h-8 bg-yellow-400/30 rounded-lg rotate-45"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Left side filters */}
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              {/* Category Filter */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-2">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.slice(0, 5).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? "bg-black text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-2">Brand</label>
                <select 
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="border border-gray-300 rounded-lg py-2 px-4 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
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
                  {sortOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
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
              Showing <span className="font-semibold">{filteredGadgets.length}</span> gadgets
              {selectedCategory !== "All" && <span> in <span className="font-semibold">{selectedCategory}</span></span>}
              {selectedBrand !== "All" && <span> from <span className="font-semibold">{selectedBrand}</span></span>}
            </p>
          </div>
        </div>

        {/* Gadgets Grid/List */}
        <div className={viewMode === "grid" 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" 
          : "space-y-6"
        }>
          {filteredGadgets.map((gadget) => (
            <div
              key={gadget.id}
              className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                viewMode === "list" ? "flex gap-6 p-6" : ""
              }`}
            >
              {/* Image Section */}
              <div className={`relative ${viewMode === "list" ? "w-48 flex-shrink-0" : ""}`}>
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  {gadget.isNew && (
                    <span className="bg-green-500 text-white text-xs font-bold py-1 px-3 rounded-full">
                      NEW
                    </span>
                  )}
                  {gadget.isTrending && (
                    <span className="bg-yellow-400 text-black text-xs font-bold py-1 px-3 rounded-full">
                      TRENDING
                    </span>
                  )}
                </div>

                {/* Wishlist button */}
                <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-sm transition-colors group-hover:scale-110">
                  <svg className="w-5 h-5 text-gray-600 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                <div className={`relative overflow-hidden ${viewMode === "list" ? "h-32" : "h-64"} bg-gradient-to-br from-gray-50 to-gray-100`}>
                  <img 
                    src={gadget.img} 
                    alt={gadget.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Color options */}
                {gadget.colors.length > 1 && (
                  <div className={`flex gap-2 ${viewMode === "list" ? "mt-3" : "absolute bottom-4 left-4"}`}>
                    {gadget.colors.slice(0, 4).map((color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                    {gadget.colors.length > 4 && (
                      <div className="w-6 h-6 rounded-full border-2 border-white shadow-sm bg-gray-200 text-xs flex items-center justify-center text-gray-600">
                        +{gadget.colors.length - 4}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className={`${viewMode === "list" ? "flex-1" : "p-6"}`}>
                {/* Brand & Category */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500 uppercase tracking-wide font-semibold">{gadget.brand}</span>
                  <span className="text-xs text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full font-medium">{gadget.category}</span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-yellow-600 transition-colors">
                  {gadget.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-sm">★</span>
                    <span className="text-sm font-medium text-gray-700 ml-1">{gadget.rating}</span>
                  </div>
                  <span className="text-xs text-gray-500">({gadget.reviews.toLocaleString()})</span>
                </div>

                {/* Key Specs (List view) */}
                {viewMode === "list" && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Specs</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                      {Object.entries(gadget.specs).slice(0, 4).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="capitalize">{key}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {gadget.features.slice(0, viewMode === "list" ? 4 : 2).map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {gadget.features.length > (viewMode === "list" ? 4 : 2) && (
                      <span className="text-xs text-gray-500">
                        +{gadget.features.length - (viewMode === "list" ? 4 : 2)} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Price & Actions */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">{gadget.price}</span>
                    {gadget.category === "Electric Vehicle" && (
                      <span className="text-xs text-gray-500 ml-1">starting at</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors">
                      Compare
                    </button>
                    <Link
                      to={`/gadgets/${gadget.id}`}
                      className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredGadgets.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29.82-5.877 2.172M15 19.128v-.878c0-1.046-.68-2.28-1.64-2.658A9.34 9.34 0 0112 15.5M12 15.5a9.34 9.34 0 00-1.36-.01C9.68 15.86 9 17.09 9 18.14v.878M15 19.128c.64-.343 1.177-.745 1.61-1.178" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No gadgets found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters or search criteria</p>
            <button 
              onClick={() => {
                setSelectedCategory("All");
                setSelectedBrand("All");
              }}
              className="bg-black text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="bg-neutral-900 rounded-2xl p-8 mt-16 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated with Latest Gadgets
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Be the first to discover new tech releases, exclusive reviews, and special offers on cutting-edge gadgets.
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

export default Gadgets;
