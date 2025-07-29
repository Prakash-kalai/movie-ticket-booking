import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-opacity-30 backdrop-blur-md z-50 sticky top-0 ">
      <h1 className="text-xl font-bold text-white">
        <span className="text-red-500">Quick</span>Show
      </h1>
      <ul className="flex space-x-6 text-sm">
        <li>Home</li>
        <li>
          <Link>Movies</Link>
        </li>
        <li>Theatres</li>
        <li>Releases</li>
      </ul>
      <button className="bg-pink-500 text-white px-4 py-1 rounded-full hover:bg-pink-600">
        Log in
      </button>
    </nav>
  );
};

export default Navbar;
