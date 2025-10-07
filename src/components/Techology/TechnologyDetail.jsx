import React from "react";
import { useParams, Link } from "react-router-dom";
import { technologyData } from "./Technology";

const TechnologyDetail = () => {
  const { id } = useParams();
  const article = technologyData[parseInt(id)];

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="bg-white min-h-screen w-full px-2 md:px-8 pt-8 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/technology" className="text-blue-500 hover:underline">
            Technology
          </Link>
          <span className="text-gray-500 mx-2">›</span>
          <span className="text-gray-700">Article Detail</span>
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
          <div className="text-sm text-gray-500 mb-4">
            {article.date} By <span className="font-semibold">{article.author}</span>
          </div>
          <img 
            src={article.img} 
            alt={article.title} 
            className="w-full h-64 object-cover rounded-lg mb-6" 
          />
        </div>

        {/* Article Content */}
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            {article.summary}
          </p>
          
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              The technological landscape is evolving at an unprecedented pace, bringing innovations that seemed like science fiction just a few years ago into our daily reality. This transformation is reshaping industries, changing how we work and communicate, and opening up new possibilities that we're only beginning to explore.
            </p>
            
            <p>
              As we delve deeper into this technological revolution, it's important to understand not just what these innovations can do, but how they will impact our lives in practical ways. From improving efficiency in our daily tasks to solving complex global challenges, technology continues to be a driving force for positive change.
            </p>
            
            <p>
              The implications extend far beyond individual convenience. These technological advances are creating new economic opportunities, enabling more sustainable practices, and fostering global connectivity in ways that were previously impossible. As we embrace these changes, we're witnessing the emergence of a more connected and capable world.
            </p>
            
            <p>
              Looking ahead, the convergence of different technologies promises even more exciting possibilities. The integration of artificial intelligence, advanced materials, and new computing paradigms is creating synergies that could lead to breakthrough solutions for some of humanity's most pressing challenges.
            </p>
            
            <p>
              As these technologies mature and become more accessible, we can expect to see their impact grow exponentially. The key is to remain informed about these developments and understand how they might shape our future, ensuring we can harness their potential while addressing any challenges they may present.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Technology Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technologyData
              .filter((_, index) => index !== parseInt(id))
              .slice(0, 4)
              .map((relatedArticle, index) => (
                <Link
                  key={index}
                  to={`/technology/${technologyData.indexOf(relatedArticle)}`}
                  className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={relatedArticle.img}
                    alt={relatedArticle.title}
                    className="w-full h-32 object-cover rounded mb-3"
                  />
                  <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {relatedArticle.title}
                  </h4>
                  <p className="text-sm text-gray-500">{relatedArticle.date}</p>
                </Link>
              ))}
          </div>
        </div>

        {/* Back to Technology */}
        <div className="mt-8">
          <Link
            to="/technology"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Back to Technology
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TechnologyDetail;