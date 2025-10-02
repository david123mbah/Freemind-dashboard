import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { gadgetsData } from "./Gadgets";

const GadgetDetail = () => {
  const { id } = useParams();
  const gadget = gadgetsData.find(g => g.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

  if (!gadget) {
    return (
      <div className="bg-white min-h-screen w-full pt-8 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Gadget Not Found</h1>
          <p className="text-gray-600 mb-8">The gadget you're looking for might have been removed or doesn't exist.</p>
          <Link to="/gadgets" className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Browse All Gadgets
          </Link>
        </div>
      </div>
    );
  }

  const relatedGadgets = gadgetsData
    .filter(g => g.id !== gadget.id && (g.category === gadget.category || g.brand === gadget.brand))
    .slice(0, 4);

  return (
    <div className="bg-gray-50 min-h-screen w-full pt-8 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-yellow-400">Home</Link>
            <span>/</span>
            <Link to="/gadgets" className="hover:text-yellow-400">Gadgets</Link>
            <span>/</span>
            <span className="text-gray-900">{gadget.title}</span>
          </div>
        </nav>

        {/* Back Button */}
        <div className="mb-6">
          <Link 
            to="/gadgets" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-yellow-400 font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Gadgets
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="relative bg-white rounded-2xl p-8 shadow-sm">
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {gadget.isNew && (
                  <span className="bg-green-500 text-white text-sm font-bold py-2 px-4 rounded-full">
                    NEW
                  </span>
                )}
                {gadget.isTrending && (
                  <span className="bg-yellow-400 text-black text-sm font-bold py-2 px-4 rounded-full">
                    TRENDING
                  </span>
                )}
              </div>

              {/* Wishlist */}
              <button className="absolute top-4 right-4 z-10 w-12 h-12 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center shadow-sm transition-colors">
                <svg className="w-6 h-6 text-gray-600 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>

              <img 
                src={gadget.img} 
                alt={gadget.title} 
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-lg p-2 border-2 border-transparent hover:border-yellow-400 cursor-pointer transition-colors">
                  <img 
                    src={gadget.img} 
                    alt={`${gadget.title} view ${i}`} 
                    className="w-full h-20 object-cover rounded"
                  />
                </div>
              ))}
            </div>

            {/* Color Selection */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Available Colors</h3>
              <div className="flex gap-3">
                {gadget.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-12 h-12 rounded-full border-4 transition-all ${
                      selectedColor === index ? 'border-yellow-400 scale-110' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                  >
                    {selectedColor === index && (
                      <div className="w-full h-full rounded-full bg-black/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm text-gray-500 uppercase tracking-wide font-semibold">{gadget.brand}</span>
                <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">{gadget.category}</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {gadget.title}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`text-lg ${i < Math.floor(gadget.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="ml-2 text-lg font-semibold text-gray-700">{gadget.rating}</span>
                </div>
                <span className="text-gray-500">({gadget.reviews.toLocaleString()} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-gray-900">{gadget.price}</span>
                {gadget.category === "Electric Vehicle" && (
                  <span className="text-gray-500">starting at</span>
                )}
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-black hover:bg-gray-800 text-white font-bold py-4 px-6 rounded-lg transition-colors">
                  Add to Cart
                </button>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-6 rounded-lg transition-colors">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Key Features</h3>
              <div className="grid grid-cols-1 gap-3">
                {gadget.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center gap-2 bg-white hover:bg-gray-50 p-4 rounded-xl shadow-sm transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="text-xs text-gray-600">Compare</span>
              </button>
              <button className="flex flex-col items-center gap-2 bg-white hover:bg-gray-50 p-4 rounded-xl shadow-sm transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                <span className="text-xs text-gray-600">Share</span>
              </button>
              <button className="flex flex-col items-center gap-2 bg-white hover:bg-gray-50 p-4 rounded-xl shadow-sm transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs text-gray-600">Support</span>
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-16">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200">
            {[
              { id: "overview", label: "Overview" },
              { id: "specs", label: "Specifications" },
              { id: "reviews", label: "Reviews" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? "text-black border-b-2 border-black bg-gray-50"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Overview</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The {gadget.title} represents the pinnacle of {gadget.brand}'s innovation in the {gadget.category.toLowerCase()} category. 
                    With cutting-edge technology and premium design, this device delivers exceptional performance and user experience.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {gadget.features.map((feature, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">✨</span>
                      </div>
                      <p className="font-medium text-gray-900">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "specs" && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(gadget.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                      <span className="font-medium text-gray-900 capitalize">{key}</span>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Customer Reviews</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-900">{gadget.rating}</div>
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-lg ${i < Math.floor(gadget.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">{gadget.reviews} reviews</p>
                    </div>
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-gray-600 w-4">{stars}★</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-yellow-400 h-2 rounded-full" 
                              style={{ width: `${Math.max(0, (gadget.rating - stars + 1) * 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                    Write a Review
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Gadgets */}
        {relatedGadgets.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedGadgets.map((related) => (
                <Link
                  key={related.id}
                  to={`/gadgets/${related.id}`}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative">
                    {related.isNew && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-green-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                          NEW
                        </span>
                      </div>
                    )}
                    <img 
                      src={related.img} 
                      alt={related.title} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                      {related.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">{related.price}</span>
                      <div className="flex items-center">
                        <span className="text-yellow-400 text-sm">★</span>
                        <span className="text-sm text-gray-600 ml-1">{related.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GadgetDetail;