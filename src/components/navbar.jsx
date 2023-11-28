import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";
import SignOut from "../navbar-pages/SignOut";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useContext(UserContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Hamburger Button - Visible only on small and medium screens */}
      <p>{user ? `Username: ${user.displayName}` : ""}</p>
      <button
        className="p-4 text-white bg-red-900 w-full md:hidden"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed w-64 bg-red-900/50 text-white h-screen flex flex-col justify-between transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="py-4 px-3 flex flex-col justify-between h-full">
          <div>
            <NavLink to="/" className="flex items-center space-x-2 px-4 py-2">
              <img
                src="/Logo.png"
                alt="Logo"
                className="h-16 w-16 rounded-full shadow-lg"
              />
            </NavLink>
            <nav className="flex flex-col mt-4 space-y-2">
              <NavLink
                to="/dashboard"
                className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-blue-700"
              >
                <span>Dashboard</span>
              </NavLink>
              <NavLink
                to="/vehicles"
                className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-blue-700"
              >
                <span>Vehicles</span>
              </NavLink>
              <NavLink
                to="/about-us"
                className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-blue-700"
              >
                <span>About Us</span>
              </NavLink>
              <NavLink
                to="/location"
                className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-blue-700"
              >
                <span>Location</span>
              </NavLink>
            </nav>
            <div className="flex flex-col space-y-2">
              {user ? (
                <SignOut className="text-center px-4 py-2 border border-white rounded-md hover:bg-blue-700" />
              ) : (
                <>
                  <NavLink
                    to="/sign-up"
                    className="text-center px-4 py-2 border border-white rounded-md hover:bg-blue-700"
                  >
                    Sign Up
                  </NavLink>
                  <NavLink
                    to="/sign-in"
                    className="text-center px-4 py-2 border border-white rounded-md hover:bg-blue-700"
                  >
                    Sign In
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
