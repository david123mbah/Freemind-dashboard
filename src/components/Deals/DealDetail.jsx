import React from "react";
import { useParams, Link } from "react-router-dom";
import { dealsData } from "./Deals";

const DealDetail = () => {
  const { id } = useParams();
  const deal = dealsData.find(d => d.id === parseInt(id));

  if (!deal) {
    return (
      <div className="bg-white min-h-screen w-full pt-8 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Deal Not Found</h1>
          <p className="text-gray-600 mb-8">The deal you're looking for might have expired or been removed.</p>
          <Link to="/deals" className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Browse All Deals
          </Link>
        </div>
      </div>
    );
  }

  const formatTimeLeft = (expiresIn) => {
    const parts = expiresIn.split(' ');
    const number = parts[0];
    const unit = parts[1];
    return { number, unit };
  };

  const timeLeft = formatTimeLeft(deal.expiresIn);
  const discountAmount = parseInt(deal.originalPrice.replace(/[$,]/g, '')) - parseInt(deal.salePrice.replace(/[$,]/g, ''));

  return (
    <div className="bg-gray-50 min-h-screen w-full pt-8 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-yellow-400">Home</Link>
            <span>/</span>
            <Link to="/deals" className="hover:text-yellow-400">Deals</Link>
            <span>/</span>
            <span className="text-gray-900">{deal.title}</span>
          </div>
        </nav>

        {/* Back Button */}
        <div className="mb-6">
          <Link 
            to="/deals" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-yellow-400 font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Deals
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className="space-y-6">
            <div className="relative bg-white rounded-2xl p-8 shadow-sm">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-red-500 text-white text-sm font-bold py-2 px-4 rounded-full">
                  {deal.discount}
                </span>
              </div>
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-black text-white text-sm font-medium py-2 px-3 rounded-lg">
                  {deal.deal}
                </span>
              </div>
              <img 
                src={deal.img} 
                alt={deal.title} 
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>

            {/* Gallery thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-lg p-2 border-2 border-transparent hover:border-yellow-400 cursor-pointer transition-colors">
                  <img 
                    src={deal.img} 
                    alt={`${deal.title} view ${i}`} 
                    className="w-full h-16 object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Category */}
            <span className="inline-block bg-gray-100 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              {deal.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {deal.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`text-lg ${i < Math.floor(deal.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  >
                    ★
                  </span>
                ))}
                <span className="ml-2 text-lg font-semibold text-gray-700">{deal.rating}</span>
              </div>
              <span className="text-gray-500">({deal.reviews.toLocaleString()} reviews)</span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-gray-900">{deal.salePrice}</span>
                <span className="text-xl text-gray-500 line-through">{deal.originalPrice}</span>
              </div>
              <p className="text-lg text-green-600 font-semibold">
                You Save ${discountAmount.toLocaleString()} ({deal.discount})
              </p>
            </div>

            {/* Vendor */}
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Sold by</p>
                  <p className="font-semibold text-gray-900 text-lg">{deal.vendor}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Deal expires in</p>
                  <p className="font-bold text-orange-600 text-lg">
                    {timeLeft.number} {timeLeft.unit}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">{deal.description}</p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {deal.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-6 border-t">
              <button className="w-full bg-black hover:bg-gray-800 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors duration-200">
                Get This Deal Now
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Save Deal
                </button>
                
                <button className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  Share Deal
                </button>
              </div>
            </div>

            {/* Deal Alert */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-orange-500 text-xl">⚠️</span>
                <div>
                  <h4 className="font-semibold text-orange-800">Limited Time Offer</h4>
                  <p className="text-sm text-orange-700 mt-1">
                    This deal expires in {timeLeft.number} {timeLeft.unit}. Don't miss out on these incredible savings!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Deals */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">More Great Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dealsData
              .filter(d => d.id !== deal.id && d.category === deal.category)
              .slice(0, 4)
              .map((relatedDeal) => (
                <Link 
                  key={relatedDeal.id}
                  to={`/deals/${relatedDeal.id}`}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative">
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-red-500 text-white text-xs font-bold py-1 px-3 rounded-full">
                        {relatedDeal.discount}
                      </span>
                    </div>
                    <img 
                      src={relatedDeal.img} 
                      alt={relatedDeal.title} 
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                      {relatedDeal.title}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-gray-900">{relatedDeal.salePrice}</span>
                      <span className="text-sm text-gray-500 line-through">{relatedDeal.originalPrice}</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealDetail;