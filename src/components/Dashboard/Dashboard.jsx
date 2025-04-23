import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  const analyticsData = [
    { month: "Jan", patients: 280, consultations: 420 },
    { month: "Feb", patients: 305, consultations: 450 },
    { month: "Mar", patients: 340, consultations: 480 },
    { month: "Apr", patients: 355, consultations: 495 },
    { month: "May", patients: 370, consultations: 510 },
    { month: "Jun", patients: 396, consultations: 540 },
  ];

  const doctorData = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Clinical Psychologist",
      patients: "42 active patients",
      consultations: "#385-475-22-90",
      rating: 92,
    },
    {
      id: 2,
      name: "Dr. Amanda Wilson",
      specialization: "Psychiatrist",
      patients: "38 active patients",
      consultations: "#234-002-57-29",
      rating: 88,
    },
    {
      id: 3,
      name: "Dr. Christopher Martinez",
      specialization: "Child Psychiatrist",
      patients: "35 active patients",
      consultations: "#023-569-83-76",
      rating: 85,
    },
    {
      id: 4,
      name: "Dr. Jennifer Davis",
      specialization: "Neuropsychiatrist",
      patients: "31 active patients",
      consultations: "#340-001-38-13",
      rating: 90,
    },
    {
      id: 5,
      name: "Dr. William Anderson",
      specialization: "Addiction Specialist",
      patients: "29 active patients",
      consultations: "#513-393-12-98",
      rating: 87,
    },
    {
      id: 6,
      name: "Dr. Michael Brown",
      specialization: "Clinical Psychologist",
      patients: "45 active patients",
      consultations: "#563-564-27-30",
      rating: 94,
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const filterOptions = ["All", "Available", "In Session", "On Leave", "Emergency"];

  const getProgressColor = (value) => {
    if (value >= 80) return "bg-green-400";
    if (value >= 60) return "bg-blue-400";
    if (value >= 40) return "bg-yellow-400";
    return "bg-orange-400";
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-64">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {/* Header section */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-semibold text-gray-800">Mental Health</h1>
            <div className="flex items-center">
              <div className="relative mr-4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F15A2B] focus:border-[#F15A2B]"
                />
              </div>
              <button className="bg-[#F15A2B] hover:bg-[#F15A2B]/80 text-white font-medium py-2 px-4 rounded-lg flex items-center">
                Add new
                <span className="ml-2 bg-white rounded-full p-1">
                  <svg
                    className="h-4 w-4 text-[#F15A2B]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Analytics and stats section */}
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
              <div className="text-5xl font-bold text-gray-800 mt-2">324</div>
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>

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
              <div className="text-5xl font-bold text-gray-800 mt-2">78%</div>
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Analytics chart */}
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
                    margin={{
                      top: 5,
                      right: 0,
                      left: -20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar
                      dataKey="consultations"
                      fill="#2b3555"
                      radius={[5, 5, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Filter section */}
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

          {/* Doctors table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <th className="px-6 py-3">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-[#2b3555] rounded"
                    />
                  </th>
                  <th className="px-6 py-3">Doctor Name</th>
                  <th className="px-6 py-3">Specialization</th>
                  <th className="px-6 py-3">Active Patients</th>
                  <th className="px-6 py-3">Consultation ID</th>
                  <th className="px-6 py-3">Rating</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {doctorData.map((doctor) => (
                  <tr key={doctor.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-[#2b3555] rounded"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 mr-3">
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                            {doctor.name.charAt(3)}
                          </div>
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                          {doctor.name}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {doctor.specialization}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {doctor.patients}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {doctor.consultations}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className={`h-2.5 rounded-full ${getProgressColor(
                              doctor.rating
                            )}`}
                            style={{ width: `${doctor.rating}%` }}
                          ></div>
                        </div>
                        <span className="ml-2 text-sm text-gray-500">
                          {doctor.rating}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-blue-600 mr-3">
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
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-red-600 mr-3">
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
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
