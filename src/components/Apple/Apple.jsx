import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideMenu from "../News/SideMenu";

export const appleReviewData = [
  {
    id: 0,
    title: "iPhone 15 Pro Max Review: Setting New Standards",
    author: "Alex Kim",
    date: "September 12, 2025",
    img: "/ions/homeImages/Iphone Image.png",
    category: "SMARTPHONE",
    rating: 4.8,
    summary: "Apple's flagship offers incredible performance, stunning camera capabilities, and all-day battery life in a premium design...",
    price: "$1,199",
    pros: [
      "Exceptional camera system",
      "Best-in-class performance",
      "Beautiful ProMotion display",
      "Premium titanium build",
      "All-day battery life"
    ],
    cons: [
      "Premium price point",
      "Limited customization",
      "Charging still limited to USB-C 3.2"
    ],
    fullReview: "The iPhone 15 Pro Max represents Apple's most advanced smartphone to date, featuring the A19 Pro chip, a sophisticated camera system with a 48MP main sensor, and a stunning 6.7-inch ProMotion XDR display. The titanium frame offers a premium feel while reducing overall weight compared to previous models. The iOS 19 integration brings new AI capabilities and advanced computational photography features that truly showcase what modern smartphones can achieve."
  },
  {
    id: 1,
    title: "iPad Air (2025) vs iPad Pro: Which Should You Buy?",
    author: "Sam Lee",
    date: "September 10, 2025",
    img: "/ions/homeImages/airports.png",
    category: "TABLET",
    rating: 4.6,
    summary: "Comparing Apple's mid-range and pro tablet options to help you decide which delivers the best value for your specific needs...",
    price: "$599 vs $799",
    pros: [
      "iPad Air offers exceptional value",
      "Both feature Apple Pencil 3 support",
      "M3 chip in Air, M4 in Pro",
      "Similar display quality"
    ],
    cons: [
      "Pro has ProMotion, Air doesn't",
      "Storage limitations on base Air model",
      "Pro cameras significantly better"
    ],
    fullReview: "The 2025 iPad Air brings M3 performance to a more affordable price point, making it an excellent choice for most users. The Pro model justifies its higher price with a faster M4 chip, ProMotion display, and better camera system. For typical productivity, content consumption and casual creative work, the Air offers tremendous value. However, professional content creators will appreciate the Pro's additional capabilities."
  },
  {
    id: 2,
    title: "MacBook Air M3: The Perfect Balance of Power and Portability",
    author: "Jamie Fox",
    date: "September 8, 2025",
    img: "/ions/homeImages/sssssssssssssss.png",
    category: "LAPTOP",
    rating: 4.7,
    summary: "Apple's most popular laptop gets even better with the M3 chip, delivering impressive performance in an incredibly thin design...",
    price: "$999",
    pros: [
      "Exceptional battery life (up to 18 hours)",
      "Silent fanless design",
      "Vibrant Retina display",
      "Comfortable Magic Keyboard",
      "Excellent performance for everyday tasks"
    ],
    cons: [
      "Limited port selection",
      "No Face ID",
      "Not ideal for intensive professional workloads"
    ],
    fullReview: "The M3 MacBook Air continues Apple's tradition of creating the perfect everyday laptop. With its efficient yet powerful M3 chip, the MacBook Air delivers performance that exceeds many Intel-based laptops while maintaining exceptional battery life. The 13.6-inch Retina display offers excellent color accuracy and brightness for productivity and media consumption. At just 2.7 pounds and with a wedge-shaped design measuring only 0.44 inches at its thickest point, it's incredibly portable without sacrificing the excellent keyboard and trackpad experience."
  },
  {
    id: 3,
    title: "AirPods Pro 2: The Ultimate Wireless Earbuds Experience",
    author: "Chris Park",
    date: "September 5, 2025",
    img: "/ions/homeImages/airports.png",
    category: "AUDIO",
    rating: 4.5,
    summary: "Apple's flagship earbuds offer incredible active noise cancellation, spatial audio, and seamless integration with the Apple ecosystem...",
    price: "$249",
    pros: [
      "Class-leading noise cancellation",
      "Impressive sound quality",
      "Comfortable for extended wear",
      "Seamless device switching",
      "Spatial audio with head tracking"
    ],
    cons: [
      "Battery life trails some competitors",
      "Limited customization for non-Apple users",
      "Premium price point"
    ],
    fullReview: "The AirPods Pro 2 showcase Apple's audio engineering prowess with dramatically improved active noise cancellation, more immersive spatial audio, and refined sound quality. The redesigned case adds useful features like a built-in speaker for Find My alerts and a lanyard loop for easier carrying. Battery life reaches 6 hours on a single charge (30 hours total with case), which is adequate but not class-leading. For Apple ecosystem users, the seamless integration, automatic device switching, and hands-free Siri access create an unmatched user experience."
  },
  {
    id: 4,
    title: "Apple Watch Ultra 2: The Ultimate Adventure Companion",
    author: "Morgan Lee",
    date: "September 3, 2025",
    img: "/ions/homeImages/amkol.png",
    category: "WEARABLE",
    rating: 4.9,
    summary: "Apple's premium rugged smartwatch offers incredible durability, multi-day battery life, and advanced health tracking for outdoor enthusiasts...",
    price: "$799",
    pros: [
      "Exceptional build quality and durability",
      "Multi-day battery life (up to 72 hours)",
      "Bright, always-on display",
      "Comprehensive health and fitness tracking",
      "Advanced GPS and navigation features"
    ],
    cons: [
      "Large size may not suit smaller wrists",
      "Limited customization options",
      "Premium price point"
    ],
    fullReview: "The Apple Watch Ultra 2 builds on the success of its predecessor with meaningful improvements for adventurers and athletes. The titanium case provides exceptional durability while keeping weight reasonable, and the new Action button offers quick access to custom functions. Battery life is outstanding, reaching up to 72 hours in low-power mode. The dual-frequency GPS provides pinpoint location accuracy even in challenging environments, and the new diving capabilities extend functionality for underwater adventures. For serious outdoor enthusiasts who want Apple's ecosystem integration, this is the definitive smartwatch."
  },
  {
    id: 5,
    title: "iMac M3: The All-in-One Desktop Redefined",
    author: "Taylor Smith",
    date: "August 30, 2025",
    img: "/ions/homeImages/drone.png",
    category: "DESKTOP",
    rating: 4.7,
    summary: "Apple's colorful all-in-one desktop delivers impressive performance and a stunning display in a remarkably thin package...",
    price: "$1,299",
    pros: [
      "Gorgeous 24-inch 4.5K Retina display",
      "Strong performance for everyday tasks",
      "Beautiful, space-saving design",
      "Excellent webcam and speakers",
      "Seven vibrant color options"
    ],
    cons: [
      "Base model limited to two Thunderbolt ports",
      "RAM not user-upgradable",
      "Not suitable for intensive professional workloads"
    ],
    fullReview: "The M3 iMac continues Apple's colorful revival of their iconic all-in-one desktop. The 24-inch 4.5K Retina display delivers stunning visuals with P3 wide color gamut and True Tone technology. The M3 chip provides excellent performance for everyday tasks, creative work, and even light gaming. The remarkably thin 11.5mm profile makes it a statement piece in any space, available in seven vibrant colors. The improved 1080p webcam, studio-quality microphones, and six-speaker sound system make it excellent for video conferencing and media consumption."
  },
  {
    id: 6,
    title: "Apple TV 4K (2025): The Smart Home Entertainment Hub",
    author: "Jordan Lee",
    date: "August 28, 2025",
    img: "/ions/homeImages/mannete.png",
    category: "HOME ENTERTAINMENT",
    rating: 4.6,
    summary: "Apple's streaming box offers a premium viewing experience with 4K HDR, impressive gaming capabilities, and smart home integration...",
    price: "$129",
    pros: [
      "Excellent 4K HDR video quality",
      "Intuitive interface and ecosystem integration",
      "Powerful A16 chip for gaming",
      "HomeKit hub functionality",
      "Privacy-focused approach"
    ],
    cons: [
      "Higher price than competing streaming devices",
      "Siri lags behind other voice assistants",
      "Remote still easily misplaced"
    ],
    fullReview: "The 2025 Apple TV 4K refines an already excellent streaming device with the powerful A16 Bionic chip, which enables fluid performance, impressive gaming capabilities, and lightning-fast app loading. The new model supports all major HDR formats (Dolby Vision, HDR10+, HLG) for the best possible picture quality on compatible displays. The redesigned Siri Remote continues to be a pleasure to use, with improved voice control functionality. As a smart home hub, it excels at managing HomeKit devices while maintaining Apple's strong privacy focus."
  },
  {
    id: 7,
    title: "HomePod Mini (2025): Big Sound in a Small Package",
    author: "Patricia Gomez",
    date: "August 25, 2025",
    img: "/ions/homeImages/aniks.png",
    category: "SMART SPEAKER",
    rating: 4.4,
    summary: "Apple's compact smart speaker delivers impressive sound quality, seamless ecosystem integration, and enhanced smart home controls...",
    price: "$99",
    pros: [
      "Impressive sound quality for its size",
      "Seamless Apple ecosystem integration",
      "Effective room-sensing technology",
      "Thread networking support",
      "Privacy-focused design"
    ],
    cons: [
      "Limited functionality with non-Apple services",
      "Siri still lags behind other assistants",
      "No line-in or Bluetooth streaming"
    ],
    fullReview: "The 2025 HomePod Mini packs impressive sound in a compact spherical design. Using computational audio and beam-forming tweeters, it delivers a surprisingly immersive audio experience despite its small size. The S8 chip enables more on-device processing for improved response times and privacy. As a smart home hub, it excels with Thread support and enhanced room-sensing capabilities. The addition of temperature and humidity sensors allows for automated smart home actions based on environmental conditions. While still primarily designed for Apple ecosystem users, the improved sound quality makes it a compelling option for anyone seeking a compact speaker with smart features."
  },
  {
    id: 8,
    title: "Magic Keyboard with Touch ID: The Ultimate Mac Accessory",
    author: "Ravi Patel",
    date: "August 22, 2025",
    img: "/ions/homeImages/kkll.png",
    category: "ACCESSORY",
    rating: 4.5,
    summary: "Apple's premium keyboard combines excellent typing experience with the convenience of Touch ID authentication for Mac users...",
    price: "$149",
    pros: [
      "Excellent typing experience",
      "Convenient Touch ID authentication",
      "Seamless Mac integration",
      "Premium build quality",
      "Long battery life"
    ],
    cons: [
      "Premium price point",
      "Not height-adjustable",
      "Limited compatibility with non-Mac devices"
    ],
    fullReview: "The Magic Keyboard with Touch ID delivers Apple's signature typing experience with the added convenience of fingerprint authentication for Macs with Apple Silicon. The scissor-switch mechanism provides a comfortable 1mm travel distance with excellent stability and a satisfying tactile feel. The aluminum body ensures durability while maintaining a slim profile. Touch ID works flawlessly for authentication, Apple Pay transactions, and password autofill. With up to one month of battery life on a single charge and USB-C fast charging, it's a dependable daily companion for any Mac user."
  },
  {
    id: 9,
    title: "Apple Pencil Pro: The Ultimate Digital Creative Tool",
    author: "Dana White",
    date: "August 20, 2025",
    img: "/ions/homeImages/pjid.png",
    category: "ACCESSORY",
    rating: 4.8,
    summary: "Apple's premium stylus offers pressure sensitivity, tilt recognition, and new haptic feedback for an unmatched digital drawing experience...",
    price: "$129",
    pros: [
      "Precise pressure and tilt sensitivity",
      "New haptic feedback for realistic feel",
      "Ultra-low latency",
      "Comfortable ergonomic design",
      "Magnetic attachment and wireless charging"
    ],
    cons: [
      "Premium price point",
      "Limited compatibility with older iPads",
      "No storage solution included"
    ],
    fullReview: "The Apple Pencil Pro represents the pinnacle of digital stylus technology with its unmatched precision and responsiveness. The new haptic feedback system provides tactile sensations that mimic different drawing tools and surfaces, creating a more intuitive and realistic experience. Ultra-low latency (9ms) ensures that drawing feels immediate and natural. The matte finish and flat edge prevent rolling while providing a comfortable grip. New squeeze gestures and customizable controls allow for quick tool switching without interrupting creative flow. For digital artists, designers, and note-takers using compatible iPads, the Pencil Pro offers an unmatched input experience despite its premium price."
  },
  {
    id: 11,
    title: "AirPods Max (2025): Premium Over-Ear Audio Experience",
    author: "Alex Kim",
    date: "August 18, 2025",
    img: "/ions/homeImages/camera.png",
    category: "AUDIO",
    rating: 4.7,
    summary: "Apple's over-ear headphones deliver exceptional sound quality, best-in-class ANC, and premium build quality at a premium price...",
    price: "$549",
    pros: [
      "Exceptional sound quality and soundstage",
      "Class-leading active noise cancellation",
      "Premium build quality and materials",
      "Comfortable for extended wear",
      "Seamless Apple ecosystem integration"
    ],
    cons: [
      "Very expensive compared to competitors",
      "Heavy compared to some alternatives",
      "Carrying case design is controversial"
    ],
    fullReview: "The 2025 AirPods Max refine Apple's premium over-ear headphone experience with improved noise cancellation, better battery life, and more color options while maintaining the exceptional sound quality and build that defined the original. The custom-designed 40mm dynamic drivers deliver rich, balanced audio with impressive soundstage for closed-back headphones. The memory foam ear cushions and breathable knit mesh canopy provide comfortable wear even during extended listening sessions. Active noise cancellation performance exceeds most competitors, creating an immersive listening environment. While the price remains premium, the build quality, materials, and audio performance justify the investment for discerning listeners within the Apple ecosystem."
  }
];

const Apple = () => {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Date");
  const [viewMode, setViewMode] = useState("grid");
  const pageSize = 8;

  // Get unique categories
  const categories = ["All", ...new Set(appleReviewData.map(item => item.category))];
  
  // Filter and sort data
  const filteredReviews = appleReviewData
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
      <div className="relative bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="text-white text-sm font-medium">Premium Reviews</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Apple Product
              <span className="block text-yellow-400">Reviews</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              In-depth reviews and comparisons of the latest Apple products. From iPhone to MacBook, get expert insights before you buy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setSelectedCategory("SMARTPHONE")}
                className="bg-white text-black hover:bg-yellow-400 hover:text-black font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                iPhone Reviews
              </button>
              <button 
                onClick={() => setSelectedCategory("LAPTOP")}
                className="border border-white/20 text-white hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Mac Reviews
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Apple-style elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <div className="w-16 h-16 bg-white/10 rounded-2xl rotate-12 animate-pulse"></div>
        </div>
        <div className="absolute bottom-32 right-16 opacity-20">
          <div className="w-12 h-12 bg-yellow-400/30 rounded-full animate-bounce"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-20">
          <div className="w-8 h-8 bg-white/20 rounded-lg rotate-45"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Enhanced Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-600 mb-3 block">Product Category</label>
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
                    {category === "All" ? "All Products" : category.charAt(0) + category.slice(1).toLowerCase()}
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
                <span> in <span className="font-semibold">{selectedCategory.charAt(0) + selectedCategory.slice(1).toLowerCase()}</span></span>
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
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold py-1 px-3 rounded-full shadow-lg">
                      VERSUS
                    </span>
                  )}
                  {review.rating >= 4.8 && (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold py-1 px-3 rounded-full shadow-lg">
                      EDITOR'S CHOICE
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-sm transition-all group-hover:scale-110">
                  <svg className="w-5 h-5 text-gray-600 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                <div className={`relative overflow-hidden ${viewMode === "list" ? "h-32" : "h-56"} bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl`}>
                  <Link to={`/apple/${review.id}`}>
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
                <Link to={`/apple/${review.id}`}>
                  <h2 className="font-bold text-gray-900 text-lg mb-3 line-clamp-2 group-hover:text-yellow-600 transition-colors leading-tight">
                    {review.title}
                  </h2>
                </Link>

                {/* Author & Date */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs font-semibold text-gray-600">
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
                    to={`/apple/${review.id}`}
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
        <div className="bg-neutral-900 rounded-2xl p-8 mt-16 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Get the Latest Apple Reviews
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss our detailed Apple product reviews, comparisons, and buying guides.
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

export default Apple;
               