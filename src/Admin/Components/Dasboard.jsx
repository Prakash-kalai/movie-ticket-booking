// File: src/pages/AdminDashboard.jsx

import React from "react";
import { FaTicketAlt, FaDollarSign, FaFilm, FaUsers, FaStar } from "react-icons/fa";
import { Sidebar } from "./Sidebar";
//import Sidebar from "./Components/Sidebar";
//import moviePoster from "../assets/movie.jpg"; // Replace with correct image path


const stats = [
  { label: "Total Bookings", value: 73, icon: <FaTicketAlt /> },
  { label: "Total Revenue", value: "$1,060", icon: <FaDollarSign /> },
  { label: "Active Movies", value: 3, icon: <FaFilm /> },
  { label: "Total Users", value: 43, icon: <FaUsers /> },
];

const activeMovies = [
  {
    id: 1,
    title: "Alita Battle Angel 4k 2019 Movies",
    price: "$29",
    rating: 4.5,
    poster: 'moviePoster',
  },
  {
    id: 2,
    title: "Alita Battle Angel 4k 2019 Movies",
    price: "$29",
    rating: 4.5,
    poster: 'moviePoster',
  },
  {
    id: 3,
    title: "Alita Battle Angel 4k 2019 Movies",
    price: "$29",
    rating: 4.5,
    poster: 'moviePoster',
  },
];

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen  text-white">      
      <div className="flex-1 px-10 py-6">
        <h1 className="text-3xl font-bold text-white">
          Admin <span className="text-pink-500">Dashboard</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#2f0c20] to-[#3f0b2c] p-4 rounded-xl flex items-center gap-4"
            >
              <div className="text-pink-500 text-xl">{stat.icon}</div>
              <div>
                <p className="text-sm text-gray-300">{stat.label}</p>
                <h2 className="text-xl font-bold text-white">{stat.value}</h2>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Active Movies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeMovies.map((movie) => (
              <div
                key={movie.id}
                className="bg-[#1b1b1b] rounded-xl overflow-hidden shadow-md hover:shadow-lg"
              >
                <img src={movie.poster} alt={movie.title} className="w-full h-60 object-cover" />
                <div className="p-4">
                  <h3 className="text-white text-md font-semibold mb-2">{movie.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <span>{movie.price}</span>
                    <span className="flex items-center text-pink-500">
                      <FaStar className="mr-1" /> {movie.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
