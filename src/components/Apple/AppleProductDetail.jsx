import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { appleReviewData } from "./Apple";

const AppleProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = appleReviewData[parseInt(id, 10)];
  
  if (!product) return <div className="p-8">Product not found.</div>;

  // Find related products (same category, excluding current)
  const relatedProducts = appleReviewData
    .filter(item => item.category === product.category && item.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-white min-h-screen w-full px-4 md:px-8 pt-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Back button */}
        <button
          className="mb-4 px-4 py-2 bg-gray-200 hover:bg-yellow-400 text-gray-800 rounded shadow-sm font-medium"
          onClick={() => navigate(-1)}
        >
          ← Back to Reviews
        </button>

        {/* Product Overview */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <img 
                src={product.img} 
                alt={product.title} 
                className="w-full max-w-md mx-auto h-64 md:h-96 object-cover rounded-lg mb-4 shadow-md" 
              />
              <div className="flex justify-center items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                <div className="flex items-center text-yellow-400 text-lg ml-auto">
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                  <span className="ml-2 text-gray-600 text-base">{product.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="inline-block bg-black text-white px-3 py-1 rounded-full text-xs font-medium mb-2">
                {product.category}
              </span>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
              <div className="text-sm text-gray-500 mb-4">
                {product.date} • By <span className="font-semibold">{product.author}</span>
              </div>
              <div className="prose max-w-none mb-6">
                <p className="text-gray-700 text-lg">{product.summary}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Pros */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-2">Pros</h3>
                  <ul className="text-green-700 space-y-1">
                    {product.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Cons */}
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-bold text-red-800 mb-2">Cons</h3>
                  <ul className="text-red-700 space-y-1">
                    {product.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Review Content */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Full Review</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700">
              {product.fullReview}
            </p>
            <p className="mt-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur consectetur, 
              nisl nisi consectetur nisl, euismod euismod nisi nisi euismod. Vivamus at magna eget leo aliquam dapibus a vel diam. 
              Sed gravida efficitur urna, vitae lacinia justo posuere vel. Fusce placerat ultricies nisl at aliquet. 
              Mauris sit amet eros eu quam posuere efficitur. Maecenas congue, metus eu pharetra pretium, 
              ipsum quam eleifend diam, eget efficitur odio risus sit amet arcu.
            </p>
            <p className="mt-4 text-gray-700">
              Nullam tempus commodo porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
              Sed sed pulvinar massa. Phasellus et justo quis lectus volutpat elementum. Sed vitae ligula non leo porttitor efficitur. 
              Aliquam nibh ligula, tincidunt non sem in, dignissim rutrum magna. Maecenas quis urna arcu. 
              Etiam ullamcorper, urna non volutpat mattis, felis tellus feugiat nisl, nec malesuada mi diam eu nisi. 
              Fusce ut risus non magna rutrum pulvinar eu et leo.
            </p>
          </div>

          {/* Verdict and Rating */}
          <div className="mt-8 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Verdict</h3>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 text-2xl">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">{product.rating.toFixed(1)}/5.0</span>
            </div>
            <p className="text-gray-700">
              {product.category === "SMARTPHONE" ? 
                "An exceptional smartphone that sets new standards for performance, camera quality, and ecosystem integration. Despite the premium price, it delivers a refined user experience that's hard to match." :
                "A standout product in Apple's lineup that delivers excellent performance, design, and user experience. While not without its minor flaws, it represents a compelling option for users invested in the Apple ecosystem."}
            </p>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">More {product.category} Reviews</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((relatedProduct, idx) => (
                <div key={idx} className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition">
                  <img 
                    src={relatedProduct.img} 
                    alt={relatedProduct.title} 
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3 flex flex-col">
                    <span className="text-xs text-gray-500 uppercase mb-1">{relatedProduct.category}</span>
                    <h5 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">{relatedProduct.title}</h5>
                    <div className="flex items-center text-xs mt-auto">
                      <div className="flex text-yellow-400">
                        {'★'.repeat(Math.floor(relatedProduct.rating))}
                        {'☆'.repeat(5 - Math.floor(relatedProduct.rating))}
                      </div>
                      <span className="ml-1 text-gray-600">{relatedProduct.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* User Comments Section (Placeholder) */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">User Comments (3)</h2>
          
          {/* Comment Form */}
          <div className="mb-6">
            <textarea 
              placeholder="Write your comment..." 
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              rows="3"
            ></textarea>
            <div className="flex justify-end mt-2">
              <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
                Post Comment
              </button>
            </div>
          </div>
          
          {/* Sample Comments */}
          <div className="space-y-6">
            <div className="border-b pb-4">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="font-medium text-gray-700">JD</span>
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">John Doe</h4>
                  <div className="text-xs text-gray-500">2 days ago</div>
                </div>
                <div className="flex text-yellow-400 text-sm ml-auto">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-gray-700">
                I've been using this product for a month now and completely agree with this review. The battery life is amazing!
              </p>
            </div>
            
            <div className="border-b pb-4">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="font-medium text-gray-700">AS</span>
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">Alice Smith</h4>
                  <div className="text-xs text-gray-500">5 days ago</div>
                </div>
                <div className="flex text-yellow-400 text-sm ml-auto">
                  {'★'.repeat(4)}
                  {'☆'.repeat(1)}
                </div>
              </div>
              <p className="text-gray-700">
                Great product but I think the price is a bit steep for what you get. Otherwise, it's a solid device.
              </p>
            </div>
            
            <div className="pb-2">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="font-medium text-gray-700">RJ</span>
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">Robert Johnson</h4>
                  <div className="text-xs text-gray-500">1 week ago</div>
                </div>
                <div className="flex text-yellow-400 text-sm ml-auto">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-gray-700">
                This is my third Apple product and I'm never going back. The ecosystem integration is just unmatched.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleProductDetail;