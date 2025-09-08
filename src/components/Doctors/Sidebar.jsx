import React from "react";
import { NavLink } from "react-router-dom";

// Custom SVGs for icons to match the image
const icons = {
  overview: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="3" width="8" height="8" rx="2" fill="#D6D96A" />
      <rect x="3" y="17" width="8" height="8" rx="2" fill="#53562D" />
      <rect x="17" y="3" width="8" height="8" rx="2" fill="#53562D" />
      <rect x="17" y="17" width="8" height="8" rx="2" fill="#D6D96A" />
    </svg>
  ),
  messages: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect
        x="4"
        y="6"
        width="20"
        height="16"
        rx="4"
        stroke="#fff"
        strokeWidth="2"
      />
      <path
        d="M4 10l10 6 10-6"
        stroke="#fff"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  statistics: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect
        x="6"
        y="14"
        width="3"
        height="8"
        rx="1.5"
        stroke="#fff"
        strokeWidth="2"
      />
      <rect
        x="12.5"
        y="8"
        width="3"
        height="14"
        rx="1.5"
        stroke="#fff"
        strokeWidth="2"
      />
      <rect
        x="19"
        y="4"
        width="3"
        height="18"
        rx="1.5"
        stroke="#fff"
        strokeWidth="2"
      />
    </svg>
  ),
  patients: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="10" r="4" stroke="#fff" strokeWidth="2" />
      <ellipse cx="14" cy="20" rx="7" ry="4" stroke="#fff" strokeWidth="2" />
    </svg>
  ),
  payment: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect
        x="4"
        y="8"
        width="20"
        height="12"
        rx="3"
        stroke="#fff"
        strokeWidth="2"
      />
      <rect x="7" y="13" width="4" height="2" rx="1" fill="#fff" />
      <text
        x="16"
        y="19"
        fill="#fff"
        fontSize="8"
        fontWeight="bold"
        textAnchor="middle"
      >
        $
      </text>
    </svg>
  ),
  settings: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="4" stroke="#fff" strokeWidth="2" />
      <path
        d="M14 2v4M14 22v4M2 14h4M22 14h4M5.636 5.636l2.828 2.828M19.536 19.536l2.828 2.828M5.636 22.364l2.828-2.828M19.536 8.464l2.828-2.828"
        stroke="#fff"
        strokeWidth="2"
      />
    </svg>
  ),
  support: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect
        x="5"
        y="5"
        width="18"
        height="18"
        rx="5"
        stroke="#fff"
        strokeWidth="2"
      />
      <text
        x="9"
        y="19"
        fill="#fff"
        fontSize="10"
        fontWeight="bold"
        textAnchor="middle"
      >
        24
      </text>
    </svg>
  ),
};

const menu = [
  { title: "Overview", icon: icons.overview, path: "/dashboard" },
  { title: "Messages", icon: icons.messages, path: "/chats" },
  { title: "Doctors", icon: icons.patients, path: "/doctors" },
  { title: "Settings", icon: icons.settings, path: "/settings" },
  { title: "Logout", icon: icons.support, path: "/" },
];

const Sidebar = () => (
  <aside className="flex flex-col h-screen w-[240px] bg-[#151515] text-white font-sans font-normal fixed left-0 top-0 z-40 rounded-[40px]">
    {/* Top Logo and Sun */}
    <div className="flex items-center justify-between px-5 pt-10 pb-6">
      <div className="flex items-center gap-3">
        <span className="text-2xl font-extrabold flex items-center">
          <span className="inline-block bg-white rounded-full w-7 h-7 flex items-center justify-center mr-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="1" y="1" width="16" height="16" rx="8" fill="#151515" />
              <path
                d="M9 4v5l4 2"
                stroke="#F7F96A"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          Doctor<span className="text-[#F7F96A] ml-1">+</span>
        </span>
      </div>
      <span>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="7" fill="#F7F96A" />
          {[...Array(8)].map((_, i) => (
            <circle
              key={i}
              cx={16 + 12 * Math.cos((i * Math.PI) / 4)}
              cy={16 + 12 * Math.sin((i * Math.PI) / 4)}
              r="1.5"
              fill="#F7F96A"
            />
          ))}
        </svg>
      </span>
    </div>
    {/* Active indicator */}
    <div className="flex items-center h-8 pl-3 mb-2">
      <span className="w-3 h-3 bg-[#F7F96A] rounded-full mr-2"></span>
      <span className="w-2 h-2 bg-[#F7F96A] rounded-full"></span>
    </div>
    {/* Menu */}
    <nav className="flex-1 flex flex-col gap-2 mt-2">
      {menu.map((item, idx) => (
        <NavLink
          key={item.title}
          to={item.path}
          className={({ isActive }) =>
            `flex items-center gap-4 px-6 py-3 rounded-[14px] transition-colors duration-200 text-[1.1rem] font-medium
            ${
              isActive
                ? "bg-[#232323] text-[#F7F96A] font-bold"
                : "hover:bg-[#232323] hover:text-[#F7F96A] text-white"
            }`
          }
          style={({ isActive }) =>
            isActive
              ? { boxShadow: "0 0 0 3px #F7F96A33" }
              : {}
          }
        >
          <span className="w-7 h-7 flex items-center justify-center">
            {item.icon}
          </span>
          <span className="tracking-tight">{item.title}</span>
        </NavLink>
      ))}
    </nav>
    {/* Spacer */}
    <div className="flex-1"></div>
  </aside>
);

export default Sidebar;
