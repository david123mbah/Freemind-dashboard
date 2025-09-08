import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideMenu from "./SideMenu";

export const newsData = [
  {
    title: "iPhone 17 Pro is Coming: 10 Leaks You NEED to See",
    author: "Roland Hutchinson",
    date: "September 8, 2025",
    img: "ions/homeImages/mannete.png",
    summary:
      "The iPhone 17 Pro and Pro Max are poised to set a new benchmark in the smartphone industry. Leaks surrounding these devices highlight significant advancements in design, camera technology, battery performance, and more. These updates suggest that Apple is not only refining its flagship lineup but ...",
  },
  {
    title: "Is This the Real iPhone 17 Pro Max? Hands-On Video Leaked",
    author: "Roland Hutchinson",
    date: "September 8, 2025",
    img: "ions/homeImages/camera.png",
    summary:
      "A recently leaked hands-on video has provided an early glimpse of the iPhone 17 Pro Max, Apple’s latest flagship device. This model, part of the iPhone 17 lineup, highlights Apple’s ongoing commitment to innovation with significant advancements in design, performance, and user experience. Whether ...",
  },
  {
    title: "GitHub’s New SpecKit Guide : The Future of AI-Assisted Software Development",
    author: "Julian Horsey",
    date: "September 8, 2025",
    img: "ions/homeImages/sssssssssssssss.png",
    summary:
      "GitHub’s SpecKit Guide introduces new AI-assisted workflows for developers, making coding more efficient and collaborative. The guide covers automation, data processing, and integration with popular tools ...",
  },
  {
    title: "Apple Watch 11: 7 Last-Minute Leaks Revealed!",
    author: "Roland Hutchinson",
    date: "September 8, 2025",
    img: "ions/homeImages/Iphone Image.png",
    summary:
      "The Apple Watch Series 11 is shaping up to be a year of refinements and enhancements, focusing on improving performance, connectivity, and health tracking while maintaining the familiar design of its predecessor ...",
  },
  {
    title: "AirPods Pro 3: The FINAL Leaks Before the Apple Event",
    author: "Roland Hutchinson",
    date: "September 8, 2025",
    img: "/ions/homeImages/news5.png",
    summary:
      "Apple’s AirPods Pro 3 are expected to debut with improved sound quality, longer battery life, and new features. Leaks suggest a major update to the charging case and integration with Apple’s ecosystem ...",
  },
  {
    title: "Apple Event 2025: iPhone 17, Apple Watch 11, and More",
    author: "Roland Hutchinson",
    date: "September 8, 2025",
    img: "/ions/homeImages/news6.png",
    summary:
      "Apple’s 2025 event will showcase the latest iPhone 17, Apple Watch 11, and other exciting products. Stay tuned for live updates and exclusive coverage ...",
  },
  {
    title: "Orange Pi RV2 $40 SBC: Friendly Gateway to IoT and AI Projects",
    author: "Julian Horsey",
    date: "September 8, 2025",
    img: "/ions/homeImages/news7.png",
    summary:
      "Orange Pi RV2 offers a budget-friendly single-board computer for IoT and AI projects. Its compact design and powerful features make it ideal for developers and hobbyists ...",
  },
  {
    title: "11 Mac Apps to Supercharge Your Productivity",
    author: "Julian Horsey",
    date: "September 8, 2025",
    img: "/ions/homeImages/news8.png",
    summary:
      "Discover 11 essential Mac apps that can boost your productivity, streamline your workflow, and help you get more done in less time ...",
  },
  {
    title: "ChatGPT Hidden Features: Changing How We Work, Create and Innovate",
    author: "Julian Horsey",
    date: "September 8, 2025",
    img: "/ions/homeImages/news9.png",
    summary:
      "Explore the hidden features of ChatGPT that are transforming the way we work, create, and innovate. Learn how to leverage AI for better results ...",
  },
  {
    title: "Future of AI-Assisted Software Development",
    author: "Julian Horsey",
    date: "September 8, 2025",
    img: "/ions/homeImages/news10.png",
    summary:
      "AI-assisted software development is revolutionizing the tech industry. Discover the latest trends, tools, and best practices for integrating AI into your workflow ...",
  },
];

const pageSize = 10;

const TopNews = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(newsData.length / pageSize);
  const paginatedNews = newsData.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="bg-white min-h-screen w-full px-2 md:px-8 pt-8 py-20 flex flex-col md:flex-row gap-8">
      {/* Main News Section */}
      <div className="flex-1">
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Top News</h2>
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
              <Link to={`/top-news/${(page - 1) * pageSize + idx}`} className="text-blue-500 text-sm font-medium">[Read more...]</Link>
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
      <SideMenu newsData={newsData} />
    </div>
  );
};

export default TopNews;
