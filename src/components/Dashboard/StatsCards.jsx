import React from "react";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-gray-500">Mental Health Doctors</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>
        </div>
        <div className="text-5xl font-bold text-gray-800 mt-2">156</div>
        <div className="flex items-center mt-auto">
          <button className="p-2 rounded-full bg-[#2b3555]/10 text-[#2b3555]">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Active Consultations Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-gray-500">Active Consultations</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>
        </div>
        <div className="text-5xl font-bold text-gray-800 mt-2">89</div>
        <div className="flex items-center mt-auto">
          <button className="p-2 rounded-full bg-[#2b3555]/10 text-[#2b3555]">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Recovery Rate Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-gray-500">Recovery Rate</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>
        </div>
        <div className="text-5xl font-bold text-gray-800 mt-2">76%</div>
        <div className="flex items-center mt-auto">
          <button className="p-2 rounded-full bg-[#2b3555]/10 text-[#2b3555]">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
