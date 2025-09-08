import React from "react";



const SideMenu = ({ newsData }) => (
  <aside className="w-full md:w-[340px] flex-shrink-0 flex flex-col gap-8">
    
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search the site ..."
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-yellow-400"
      />
    </div>
    {/* Top News List */}
    <div className="mb-8">
      <div className="bg-black text-white px-4 py-2 rounded-t font-semibold">TOP NEWS</div>
      <ul className="bg-white border border-gray-200 rounded-b divide-y">
        {newsData.slice(0, 4).map((news, idx) => (
          <li key={idx} className="flex items-center gap-3 px-4 py-3">
            <img src={news.img} alt={news.title} className="w-12 h-12 object-cover rounded" />
            <div>
              <a href="#" className="text-sm font-medium text-gray-900 hover:text-yellow-400">
                {news.title}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
    {/* Guides List */}
    <div className="mb-8">
      <div className="bg-black text-white px-4 py-2 rounded-t font-semibold">GUIDES</div>
      <ul className="bg-white border border-gray-200 rounded-b divide-y">
        <li className="flex items-center gap-3 px-4 py-3">
          <img src="/ions/homeImages/guides1.png" alt="Guide" className="w-12 h-12 object-cover rounded" />
          <a href="#" className="text-sm font-medium text-gray-900 hover:text-yellow-400">
            Build Your Own Personal Cloud Storage at Home and Say Goodbye to Monthly Fees
          </a>
        </li>
        <li className="flex items-center gap-3 px-4 py-3">
          <img src="/ions/homeImages/guides2.png" alt="Guide" className="w-12 h-12 object-cover rounded" />
          <a href="#" className="text-sm font-medium text-gray-900 hover:text-yellow-400">
            iOS 26 & iPadOS 26: The Shortcuts That Will Change Your Workflow
          </a>
        </li>
        <li className="flex items-center gap-3 px-4 py-3">
          <img src="/ions/homeImages/guides3.png" alt="Guide" className="w-12 h-12 object-cover rounded" />
          <a href="#" className="text-sm font-medium text-gray-900 hover:text-yellow-400">
            MS Excel Copilot : New AI Workflow Automations or Easier Data Processing
          </a>
        </li>
      </ul>
    </div>
    {/* Apple News List */}
    <div className="mb-8">
      <div className="bg-black text-white px-4 py-2 rounded-t font-semibold">APPLE NEWS</div>
      <ul className="bg-white border border-gray-200 rounded-b divide-y">
        {newsData.slice(0, 4).map((news, idx) => (
          <li key={idx} className="flex items-center gap-3 px-4 py-3">
            <img src={news.img} alt={news.title} className="w-12 h-12 object-cover rounded" />
            <div>
              <a href="#" className="text-sm font-medium text-gray-900 hover:text-yellow-400">
                {news.title}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
    {/* Android News List */}
    <div className="mb-8">
      <div className="bg-black text-white px-4 py-2 rounded-t font-semibold">ANDROID NEWS</div>
      <ul className="bg-white border border-gray-200 rounded-b divide-y">
        {newsData.slice(4, 8).map((news, idx) => (
          <li key={idx} className="flex items-center gap-3 px-4 py-3">
            <img src={news.img} alt={news.title} className="w-12 h-12 object-cover rounded" />
            <div>
              <a href="#" className="text-sm font-medium text-gray-900 hover:text-yellow-400">
                {news.title}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </aside>
);

export default SideMenu;
