import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideMenu from "../News/SideMenu";

export const aiNewsData = [
  {
    title: "AI Revolutionizes Smartphone Photography",
    author: "Alex Kim",
    date: "September 8, 2025",
    img: "/ions/homeImages/ai1.png",
    summary: "Artificial intelligence is transforming how smartphones capture and process images, delivering professional-grade results to everyday users ...",
  },
  {
    title: "ChatGPT-5: What’s New in Conversational AI?",
    author: "Sam Lee",
    date: "September 8, 2025",
    img: "/ions/homeImages/ai2.png",
    summary: "The latest version of ChatGPT brings smarter, more natural conversations and new integrations for productivity and creativity ...",
  },
  {
    title: "AI-Powered Health Apps: The Future of Wellness",
    author: "Jamie Fox",
    date: "September 8, 2025",
    img: "/ions/homeImages/ai3.png",
    summary: "Discover how AI is helping users track, analyze, and improve their health with personalized recommendations and real-time monitoring ...",
  },
  {
    title: "How AI Is Changing Mobile Gaming",
    author: "Chris Park",
    date: "September 8, 2025",
    img: "/ions/homeImages/ai4.png",
    summary: "Mobile games are getting smarter and more engaging thanks to AI-driven opponents, adaptive difficulty, and immersive experiences ...",
  },
  {
    title: "AI Security: Protecting Your Data on the Go",
    author: "Morgan Lee",
    date: "September 8, 2025",
    img: "/ions/homeImages/ai5.png",
    summary: "Learn how AI is being used to detect threats, prevent hacks, and keep your mobile data safe ...",
  },
  {
    title: "AI Assistants: Beyond Siri and Google Assistant",
    author: "Taylor Smith",
    date: "September 8, 2025",
    img: "/ions/homeImages/ai6.png",
    summary: "Explore the next generation of AI assistants that can anticipate your needs and automate daily tasks ...",
  },
  {
    title: "AI in Mobile Payments: Faster, Safer Transactions",
    author: "Jordan Lee",
    date: "September 8, 2025",
    img: "/ions/homeImages/ai7.png",
    summary: "AI is streamlining mobile payments, reducing fraud, and making transactions more secure for users worldwide ...",
  },
  {
    title: "AI-Powered Translation Apps: Breaking Language Barriers",
    author: "Patricia Gomez",
    date: "September 8, 2025",
    img: "/ions/homeImages/ai8.png",
    summary: "Real-time translation powered by AI is making global communication easier and more accurate than ever ...",
  },
  {
    title: "AI and Augmented Reality: The Next Big Thing",
    author: "Ravi Patel",
    date: "September 8, 2025",
    img: "/ions/homeImages/ai9.png",
    summary: "See how AI is enhancing AR experiences on mobile devices, from gaming to shopping and education ...",
  },
  {
    title: "AI Trends to Watch in 2025",
    author: "Dana White",
    date: "September 8, 2025",
    img: "/ions/homeImages/ai10.png",
    summary: "A look at the most important AI trends shaping mobile technology and user experiences in the coming year ...",
  },
];

const pageSize = 10;

const AINews = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(aiNewsData.length / pageSize);
  const paginatedNews = aiNewsData.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="bg-white min-h-screen w-full px-2 md:px-8 pt-8 py-20 flex flex-col md:flex-row gap-8">
      {/* Main AI News Section */}
      <div className="flex-1">
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">AI News</h2>
        </div>
        {paginatedNews.map((news, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-6 mb-8 border-b pb-6">
            <img src={news.img} alt={news.title} className="w-full md:w-56 h-40 object-cover rounded-lg mb-4 md:mb-0" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{news.title}</h3>
              <div className="text-xs text-gray-500 mb-2">
                {news.date} By <span className="font-semibold">{news.author}</span>
              </div>
              <p className="text-gray-700 mb-2">{news.summary}</p>
              <Link to={`/ai-news/${(page - 1) * pageSize + idx}`} className="text-blue-500 text-sm font-medium">[Read more...]</Link>
            </div>
          </div>
        ))}
        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="text-gray-600 text-sm">
            Page {page} of {totalPages}
          </span>
          <button
            className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
      <SideMenu newsData={aiNewsData} />
    </div>
  );
};

export default AINews;
