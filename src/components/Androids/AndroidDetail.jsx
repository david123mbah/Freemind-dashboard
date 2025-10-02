import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { androidReviewData } from "./Android";

const AndroidDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const review = androidReviewData.find(r => r.id === parseInt(id));

  if (!review) {
    return (
      <div className="bg-white min-h-screen w-full pt-8 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Review Not Found</h1>
          <p className="text-gray-600 mb-8">The review you're looking for might have been removed or doesn't exist.</p>
          <Link to="/android" className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Browse All Android Reviews
          </Link>
        </div>
      </div>
    );
  }

  const relatedReviews = androidReviewData
    .filter(r => r.id !== review.id && (r.category === review.category || r.author === review.author))
    .slice(0, 4);

  return (
    <div className="bg-gray-50 min-h-screen w-full pt-8 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-yellow-400">Home</Link>
            <span>/</span>
            <Link to="/android" className="hover:text-yellow-400">Android Reviews</Link>
            <span>/</span>
            <span className="text-gray-900">{review.title}</span>
          </div>
        </nav>

        {/* Back Button */}
        <div className="mb-6">
          <Link 
            to="/android" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-yellow-400 font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Android Reviews
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold uppercase tracking-wide">
                  {review.category}
                </span>
                {review.rating >= 4.7 && (
                  <span className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold">
                    TOP PICK
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {review.title}
              </h1>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-green-700">
                      {review.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{review.author}</p>
                    <p className="text-sm text-gray-600">{review.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`text-lg ${i < Math.floor(review.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-gray-900">{review.rating}/5</span>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                {review.summary}
              </p>
            </div>

            {/* Product Image */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="relative">
                <img 
                  src={review.img} 
                  alt={review.title} 
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="absolute top-4 right-4">
                  <button className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-sm transition-colors">
                    <svg className="w-6 h-6 text-gray-600 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Detailed Review Tabs */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "pros-cons", label: "Pros & Cons" },
                  { id: "verdict", label: "Verdict" }
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
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Review Overview</h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        In this comprehensive review, we dive deep into the {review.title.split(':')[0]}, examining its design, 
                        performance, camera capabilities, battery life, and overall user experience. Our testing methodology 
                        includes real-world usage scenarios to give you the most accurate assessment.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Whether you're looking for a flagship powerhouse or a budget-friendly option, this detailed analysis 
                        will help you make an informed decision about whether this Android device meets your needs and expectations.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Highlights</h4>
                        <ul className="space-y-2">
                          {review.pros.slice(0, 3).map((pro, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                              <span className="text-gray-700">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Price Point</h4>
                        <div className="text-3xl font-bold text-gray-900 mb-2">{review.price}</div>
                        <p className="text-gray-600 text-sm">
                          Positioned in the {review.price.includes("$1") ? "premium" : review.price.includes("$8") || review.price.includes("$9") ? "flagship" : "mid-range"} segment
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "pros-cons" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Pros
                      </h3>
                      <ul className="space-y-3">
                        {review.pros.map((pro, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center gap-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        Cons
                      </h3>
                      <ul className="space-y-3">
                        {review.cons.map((con, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === "verdict" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Final Verdict</h3>
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-4xl font-bold text-gray-900">{review.rating}</div>
                          <div>
                            <div className="flex items-center mb-1">
                              {[...Array(5)].map((_, i) => (
                                <span 
                                  key={i} 
                                  className={`text-xl ${i < Math.floor(review.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                            <p className="text-sm text-gray-600">Overall Rating</p>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          {review.rating >= 4.5 
                            ? "Highly recommended for users looking for a premium Android experience with excellent performance and features."
                            : review.rating >= 4.0
                            ? "A solid choice that offers good value for money with some minor compromises."
                            : "Suitable for specific use cases, but consider alternatives before purchasing."
                          }
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <button className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-6 rounded-lg transition-colors">
                        Find Best Price
                      </button>
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-4 px-6 rounded-lg transition-colors">
                        Compare Similar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium text-gray-900">{review.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price</span>
                  <span className="font-bold text-gray-900">{review.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rating</span>
                  <span className="font-medium text-gray-900">{review.rating}/5.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Reviewed by</span>
                  <span className="font-medium text-gray-900">{review.author}</span>
                </div>
              </div>
            </div>

            {/* Share */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Share Review</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg transition-colors text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                  Twitter
                </button>
                <button className="flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-900 text-white py-2 px-3 rounded-lg transition-colors text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </button>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-white mb-3">Stay Updated</h3>
              <p className="text-green-100 text-sm mb-4">
                Get the latest Android reviews and tech news delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Reviews */}
        {relatedReviews.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedReviews.map((related) => (
                <Link
                  key={related.id}
                  to={`/android/${related.id}`}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative">
                    {related.rating >= 4.7 && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-green-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                          TOP PICK
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
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
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

export default AndroidDetail;