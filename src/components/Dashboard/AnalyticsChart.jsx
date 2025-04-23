import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { analyticsData } from "./data";

const AnalyticsChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm lg:col-span-3">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-700">Analytics</h2>
        <div className="flex items-center text-sm text-gray-500">
          <span>Last 6 months</span>
          <svg
            className="ml-1 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-baseline">
        <div className="text-3xl font-bold text-gray-800">540</div>
        <div className="ml-2 px-2 py-1 bg-[#2b3555]/10 text-[#2b3555] text-xs rounded-full">
          +8%
        </div>
      </div>
      <div className="text-sm text-gray-500 mb-4">Last 6 months</div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={analyticsData}
            margin={{ top: 5, right: 0, left: -20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar dataKey="consultations" fill="#2b3555" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsChart;
