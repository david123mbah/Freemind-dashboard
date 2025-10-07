import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideMenu from "../News/SideMenu";

export const technologyData = [
  {
    title: "5G Technology: How It's Changing Mobile Connectivity",
    author: "Michael Chen",
    date: "September 8, 2025",
    img: "/ions/homeImages/mannete.png",
    summary:
      "The rollout of 5G networks is revolutionizing how we connect, work, and communicate on mobile devices. From ultra-fast downloads to low-latency gaming, discover how 5G technology is transforming the mobile landscape and enabling new possibilities for users worldwide ...",
  },
  {
    title: "Quantum Computing Breakthrough: What It Means for Tech",
    author: "Sarah Rodriguez",
    date: "September 8, 2025",
    img: "/ions/homeImages/camera.png",
    summary:
      "Scientists have achieved a major quantum computing milestone that could revolutionize everything from cryptography to drug discovery. This breakthrough brings us closer to practical quantum computers that could solve complex problems exponentially faster than traditional computers ...",
  },
  {
    title: "The Rise of Foldable Displays: Tech That Bends Reality",
    author: "David Park",
    date: "September 8, 2025",
    img: "/ions/homeImages/sssssssssssssss.png",
    summary:
      "Foldable display technology is advancing rapidly, with new materials and manufacturing techniques making flexible screens more durable and affordable. From smartphones to laptops, flexible displays are reshaping device design and user interaction patterns ...",
  },
  {
    title: "Edge Computing: Bringing Data Processing Closer to Home",
    author: "Lisa Wang",
    date: "September 8, 2025",
    img: "/ions/homeImages/Iphone Image.png",
    summary:
      "Edge computing is transforming how data is processed and delivered, reducing latency and improving performance for mobile applications. By processing data closer to users, edge computing enables real-time responses and better user experiences ...",
  },
  {
    title: "Blockchain Beyond Bitcoin: Real-World Applications",
    author: "James Thompson",
    date: "September 8, 2025",
    img: "/ions/homeImages/airports.png",
    summary:
      "Blockchain technology is finding applications far beyond cryptocurrency, from supply chain management to digital identity verification. Explore how this distributed ledger technology is solving real-world problems across various industries ...",
  },
  {
    title: "Neural Interface Technology: Controlling Devices with Thoughts",
    author: "Emily Zhang",
    date: "September 8, 2025",
    img: "/ions/homeImages/drone.png",
    summary:
      "Brain-computer interfaces are making it possible to control devices using only thoughts. This emerging technology promises to help people with disabilities and could eventually change how we all interact with computers and smartphones ...",
  },
  {
    title: "Sustainable Tech: Green Innovation in Electronics",
    author: "Robert Green",
    date: "September 8, 2025",
    img: "/ions/homeImages/aniks.png",
    summary:
      "Technology companies are embracing sustainable practices, from using recycled materials in devices to developing more energy-efficient processors. Learn how the tech industry is working to reduce its environmental impact while maintaining innovation ...",
  },
  {
    title: "Augmented Reality Glasses: The Future of Mobile Computing",
    author: "Anna Kim",
    date: "September 8, 2025",
    img: "/ions/homeImages/amkol.png",
    summary:
      "AR glasses are evolving from bulky prototypes to sleek, everyday wearables that could replace smartphones. With advances in display technology and miniaturization, augmented reality glasses are becoming a viable mobile computing platform ...",
  },
  {
    title: "Biometric Security: Beyond Fingerprints and Face ID",
    author: "Thomas Liu",
    date: "September 8, 2025",
    img: "/ions/homeImages/handsai.png",
    summary:
      "Biometric authentication is expanding beyond traditional fingerprints and facial recognition to include voice patterns, gait analysis, and even heartbeat signatures. These new methods promise enhanced security and convenience for mobile device users ...",
  },
  {
    title: "Internet of Things: Smart Cities and Connected Living",
    author: "Maria Gonzalez",
    date: "September 8, 2025",
    img: "/ions/homeImages/kkll.png",
    summary:
      "IoT technology is creating smarter cities and more connected homes, with sensors and smart devices improving everything from traffic management to energy efficiency. Discover how the Internet of Things is making urban living more sustainable and convenient ...",
  },
  {
    title: "Photonic Computing: Light-Speed Data Processing",
    author: "Kevin O'Brien",
    date: "September 8, 2025",
    img: "/ions/homeImages/pjid.png",
    summary:
      "Photonic computing uses light instead of electricity to process data, promising unprecedented speed and efficiency. This revolutionary technology could solve the growing energy demands of data centers and enable new applications in AI and machine learning ...",
  },
  {
    title: "Digital Twins: Virtual Replicas Transforming Industries",
    author: "Rachel Adams",
    date: "September 8, 2025",
    img: "/ions/homeImages/Image 1as.png",
    summary:
      "Digital twin technology creates virtual replicas of physical objects and systems, enabling better design, monitoring, and optimization. From manufacturing to healthcare, digital twins are revolutionizing how industries operate and innovate ...",
  },
];

const pageSize = 10;

const Technology = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(technologyData.length / pageSize);
  const paginatedNews = technologyData.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="bg-white min-h-screen w-full px-2 md:px-8 pt-8 py-20 flex flex-col md:flex-row gap-8">
      {/* Main Technology News Section */}
      <div className="flex-1">
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Technology</h2>
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
              <Link to={`/technology/${(page - 1) * pageSize + idx}`} className="text-blue-500 text-sm font-medium">[Read more...]</Link>
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
      <SideMenu newsData={technologyData} />
    </div>
  );
};

export default Technology;
