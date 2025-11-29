import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png"; // Ensure this path is correct

import avatar from "../../assets/avatar.png"

const Navbar = () => {
  const location = useLocation();

  // Logic: Hide navigation items on specific routes (e.g. Login)
  const onlyLogoRoutes = ["/login", "/register"];
  const isOnlyLogo = onlyLogoRoutes.includes(location.pathname);

  // Styling: Common classes for all links
  const baseLinkClass =
    "transition-colors duration-300 decoration-2 underline-offset-8 decoration-blue-500 font-medium";

  // Logic: Switch classes based on whether the link is Active or Inactive
  const getLinkClass = ({ isActive }) => {
    return isActive
      ? `${baseLinkClass} text-white underline` // Active: Bright White + Underline
      : `${baseLinkClass} text-slate-300 hover:text-white`; // Inactive: Grey + Hover White
  };

  const baseAvatarClass = "w-10 h-10 rounded-full border-2 object-cover mr-3";
  const getAvatarClass = ({ isActive }) => {
    return isActive
    ? `${baseAvatarClass} border-blue-500` // Active: Bright White + Underline
    : `${baseAvatarClass} border-slate-300 hover:border-white`; // Inactive: Grey + Hover White
  };

  return (
    <div className="top-0 sticky w-full bg-primary shadow-md mb-auto">
      <nav className="mx-auto flex h-[10vh] max-w-6xl items-center justify-between px-6 text-white">
        {/* LOGO SECTION */}
        {isOnlyLogo ? (
          <div className="flex-shrink-0">
            <img className="w-16 object-contain" src={logo} alt="Logo" />
          </div>
        ) : (
          <div className="flex-shrink-0">
            <NavLink to="/">
              <img className="w-16 object-contain" src={logo} alt="Logo" />
            </NavLink>
          </div>
        )}

        {/* HIDE LINKS ON LOGIN PAGE */}
        {!isOnlyLogo && (
          <>
            {/* CENTER NAVIGATION */}
            <div className="hidden flex-1 justify-center md:flex">
              <ul className="flex items-center gap-8 text-sm">
                <li>
                  <NavLink to="/" className={getLinkClass}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard" className={getLinkClass}>
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/mylinks" className={getLinkClass}>
                    Links Center
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/discovery" className={getLinkClass}>
                    Discovery
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE ACTIONS */}
            <div className="flex items-center gap-4">
              {/* Notification Button */}

              {/* TODO: MAKE THIS BUTTON WORKS */}
              <button
                type="button"
                className="text-slate-300 transition-colors hover:text-white"
                aria-label="Notifications"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>

              {/* Profile Button */}
              <NavLink
                to="/profile"
                className={getAvatarClass}
              >
                <img src={avatar} alt="avatar" className="rounded-full" />
              </NavLink>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
