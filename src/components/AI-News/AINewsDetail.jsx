import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import SideMenu from "../News/SideMenu";
import { aiNewsData } from "./AINews";

const AINewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const news = aiNewsData[parseInt(id, 10)];
  if (!news) return <div className="p-8">News not found.</div>;

  return (
    <div className="bg-white min-h-screen w-full px-2 md:px-8 pt-8 flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <button
          className="mb-4 px-4 py-2 bg-gray-200 hover:bg-yellow-400 text-gray-800 rounded shadow-sm font-medium"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <img src={news.img} alt={news.title} className="w-full max-w-2xl mx-auto h-64 md:h-96 object-cover rounded-lg mb-6" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{news.title}</h2>
          <div className="text-xs text-gray-500 mb-4">
            {news.date} By <span className="font-semibold">{news.author}</span>
          </div>
          <p className="text-gray-700 mb-4 text-lg">{news.summary}</p>
          <div className="mt-2 text-gray-800 text-base bg-white rounded p-4 shadow-sm">
            {/* Placeholder for full article content */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Mauris euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.
          </div>
        </div>
      </div>
      <SideMenu newsData={aiNewsData} />
    </div>
  );
};

export default AINewsDetail;
