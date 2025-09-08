import React from "react";
import { NavLink } from "react-router-dom";

const menu = [
  {
    title: "Overview",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" />
        <circle cx="12" cy="12" r="4" fill="currentColor" />
      </svg>
    ),
    path: "/dashboard",
  },
  {
    title: "Messages",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    path: "/messages",
  },
  {
    title: "Statistics",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M3 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m4 0v-4a2 2 0 012-2h2a2 2 0 012 2v4" />
      </svg>
    ),
    path: "/statistics",
  },
  {
    title: "Patients",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    path: "/patients",
  },
  {
    title: "Payment",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <rect x="2" y="7" width="20" height="10" rx="2" />
        <path d="M16 11h.01" />
      </svg>
    ),
    path: "/payment",
  },
  {
    title: "Settings",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
    path: "/settings",
  },
  {
    title: "Support",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M18.364 5.636a9 9 0 11-12.728 0M12 3v9" />
      </svg>
    ),
    path: "/support",
  },
];

const Sidebar = () => (
  <aside className="flex flex-col h-screen w-[230px] bg-sidebar text-sidebarText font-sans font-normal fixed left-0 top-0 z-40">
    <div className="flex items-center justify-between px-6 py-7">
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold text-white">
          Doctor
          <span className="text-sidebarActive">+</span>
        </span>
        <span className="ml-2">
          <svg
            className="w-5 h-5 text-sidebarActive"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <circle cx="10" cy="10" r="10" />
            <circle cx="10" cy="10" r="5" fill="#111215" />
          </svg>
        </span>
      </div>
      <button className="p-2 rounded-full bg-sidebarActive/10 hover:bg-sidebarActive/20">
        <svg
          className="w-5 h-5 text-sidebarActive"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M12 3v1m0 16v1m8.485-8.485l-.707.707M4.222 19.778l-.707-.707M21 12h-1M4 12H3m16.485-4.485l-.707-.707M4.222 4.222l-.707.707" />
        </svg>
      </button>
    </div>
    <nav className="flex-1 flex flex-col gap-1 mt-2">
      {menu.map((item, idx) => (
        <NavLink
          key={item.title}
          to={item.path}
          className={({ isActive }) =>
            `flex items-center gap-4 px-7 py-3 rounded-l-full transition-colors duration-200
            ${
              isActive
                ? "bg-sidebarActive text-sidebar font-semibold"
                : "hover:bg-[#23242A] hover:text-white"
            }`
          }
          style={({ isActive }) =>
            isActive ? { color: "#111215", background: "#F7E924" } : {}
          }
        >
          <span className="w-6 h-6 flex items-center justify-center">
            {item.icon}
          </span>
          <span className="text-base">{item.title}</span>
        </NavLink>
      ))}
    </nav>
    <div className="mt-auto px-7 pb-8">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="7" r="4" />
            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
          </svg>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">
            Ashley Lars
          </div>
          <div className="text-xs text-sidebarActive">
            Receptionist
          </div>
        </div>
      </div>
      <button className="w-full flex items-center justify-center gap-2 text-sm text-sidebarActive hover:text-white hover:bg-sidebarActive/20 py-2 rounded-lg transition">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M17 16l4-4m0 0l-4-4m4 4H7" />
        </svg>
        Sign Out
      </button>
    </div>
  </aside>
);

export default Sidebar;
