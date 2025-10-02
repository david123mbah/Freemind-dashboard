import React from "react";

const FilterSection = ({ activeFilter, setActiveFilter }) => {
  const filterOptions = [
    "All",
    "Available",
    "In Session",
    "On Leave",
    "Emergency",
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm mb-6">
      <div className="flex overflow-x-auto p-4">
        {filterOptions.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 text-sm font-medium rounded-full mr-2 ${
              activeFilter === filter
                ? "bg-[#2b3555]/10 text-[#2b3555]"
                : "text-gray-500 hover:bg-gray-100"
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
        <div className="ml-auto flex">
          <button className="flex items-center px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 rounded-md mr-2">
            <svg
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            Export
          </button>
          <button className="flex items-center px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 rounded-md">
            <svg
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Import
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
