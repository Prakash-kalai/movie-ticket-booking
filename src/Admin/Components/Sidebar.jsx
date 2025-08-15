// File: src/components/Sidebar.jsx

import React from "react";
import { FaHome, FaPlusCircle, FaListAlt, FaClipboardList } from "react-icons/fa";
import profileImage from "../../assets/profile.png"; // Replace with actual profile image path
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gradient-to-b from-[#1f1523] to-[#170d0d] text-white p-6 min-h-screen flex flex-col justify-between">
      <div>
        <div className="flex flex-col items-center mb-10">
          <img
            src={profileImage}
            alt="Admin Profile"
            className="w-20 h-20 rounded-full border-2 border-pink-500"
          />
          <h3 className="mt-4 font-semibold text-lg">Prakash K</h3>
        </div>

        <nav className="space-y-4">
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 text-sm font-medium hover:text-pink-500"
          >
            <FaHome /> Dashboard
          </Link>
          <Link
            to="/admin/add-shows"
            className="flex items-center gap-3 text-sm font-medium hover:text-pink-500"
          >
            <FaPlusCircle /> Add Shows
          </Link>
          <Link
            to="/admin/list-shows"
            className="flex items-center gap-3 text-sm font-medium hover:text-pink-500"
          >
            <FaListAlt /> List Shows
          </Link>
          <Link
            to="/admin/list-bookings"
            className="flex items-center gap-3 text-sm font-medium hover:text-pink-500"
          >
            <FaClipboardList /> List Bookings
          </Link>
        </nav>
      </div>

      <footer className="text-xs text-gray-500 text-center mt-10">
        <p className="text-pink-500 font-bold text-lg">QuickShow</p>
        <p className="mt-2">Lorem Ipsum has been the industry's standard dummy text since the 1500s.</p>
        <div className="flex justify-center gap-4 mt-3">
          <img src="/googleplay.png" alt="Google Play" className="h-8" />
          <img src="/appstore.png" alt="App Store" className="h-8" />
        </div>
      </footer>
    </div>
  );
};

export { Sidebar };
