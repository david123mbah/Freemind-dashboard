import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaTachometerAlt, FaHome, FaNotesMedical, FaUserMd, FaFileMedical, FaRobot, FaFolderOpen, FaQuestionCircle, FaUserCog, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const menuItems = [
  {
    id: "dashboard",
    icon: FaHome,
    label: "Dashboard",
    link: "/Dashboard",
  },
  {
    id: "appointments",
    icon: FaNotesMedical,
    label: "Appointments",
    link: "/appointments",
    badge: "52",
  },
  {
    id: "prescription",
    icon: FaUserMd,
    label: "Prescription",
    link: "/prescription",
  },
  {
    id: "medicalTests",
    icon: FaFileMedical,
    label: "Medical Tests",
    link: "/medical-tests",
  },
  {
    id: "wellnessChatbot",
    icon: FaRobot,
    label: "Wellness Chatbot AI",
    link: "/wellness-chatbot",
    badge: "Beta",
  },
  {
    id: "healthRecords",
    icon: FaFolderOpen,
    label: "Health Records",
    link: "/health-records",
  },
];

const footerItems = [
  {
    id: "help",
    icon: FaQuestionCircle,
    label: "Help",
    link: "/help",
  },
  {
    id: "profileSettings",
    icon: FaUserCog,
    label: "Profile Settings",
    link: "/profile-settings",
  },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          isCollapsed ? "w-20" : "w-[265px]"
        } fixed top-[2px] left-[20px] bg-white rounded-[40px] p-[24px] flex flex-col shadow-lg overflow-y-auto transition-all duration-300 z-10`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between p-4 bg-white">
          {!isCollapsed && (
            <div className="flex items-center space-x-2 text-[#4CAF50] font-bold text-2xl">
              <span className="text-3xl">✚</span>
              <span>osler</span>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:bg-gray-200 p-2 rounded-full focus:outline-none"
          >
            {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        </div>

        {/* Main Menu */}
        <div className="flex-1 py-2 overflow-y-auto">
          <nav className="space-y-4">
            {menuItems.map((item) => (
              <div key={item.id} className="px-2">
                <Link to={item.link}>
                  <div
                    className={`flex items-center px-2 py-2 rounded-lg cursor-pointer transition-colors ${
                      location.pathname === item.link
                        ? "bg-gray-100 text-black font-semibold"
                        : "text-gray-400 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {!isCollapsed && (
                      <span className="ml-3 text-sm truncate">
                        {item.label}
                      </span>
                    )}
                    {item.badge && (
                      <span
                        className={`ml-auto text-xs px-2 py-1 rounded-full ${
                          item.badge === "Beta"
                            ? "bg-green-200 text-green-700"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="py-6">
          {footerItems.map((item) => (
            <div key={item.id} className="px-2">
              <Link to={item.link}>
                <div className="flex items-center px-2 py-2 rounded-lg cursor-pointer text-gray-400 transition-colors hover:bg-gray-100">
                  <item.icon className="w-5 h-5" />
                  {!isCollapsed && (
                    <span className="ml-3 text-sm truncate">{item.label}</span>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Invite Friends */}
        <div className="mt-auto bg-gray-100 p-4 rounded-xl text-center relative">
          <p className="text-gray-700 font-semibold">Invite Friends!</p>
          <p className="text-gray-500 text-sm">$50 OFF!</p>
          <button className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-3 rounded-full shadow-md">
            <IoMdAdd className="text-xl" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          isCollapsed ? "ml-20" : "ml-[265px]"
        } flex-1 p-4`}
      >
        {/* Main content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
