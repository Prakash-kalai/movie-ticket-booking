// File: src/pages/ListShows.jsx

import React from "react";

const showData = [
  {
    movieName: "Avatar 2",
    showTime: "2025-05-12 7:00PM",
    totalBooking: 221,
    earning: "$30",
  },
  {
    movieName: "Avatar 2",
    showTime: "2025-05-12 7:00PM",
    totalBooking: 343,
    earning: "$30",
  },
  {
    movieName: "Avatar 2",
    showTime: "2025-05-12 7:00PM",
    totalBooking: 542,
    earning: "$30",
  },
  {
    movieName: "Avatar 2",
    showTime: "2025-05-12 7:00PM",
    totalBooking: 123,
    earning: "$30",
  },
];

const ListShows = () => {
  return (
    <div className="w-full">      
      <div className="flex-1 p-10 min-h-screen bg-black text-white ">
        <h1 className="text-3xl font-bold mb-6">
          List <span className="text-pink-500">Shows</span>
        </h1>

        <div className="bg-gradient-to-br from-[#2f0c20] to-[#3f0b2c] rounded-lg overflow-hidden w-full">
          <table className="w-full text-left">
            <thead className="text-white text-sm uppercase bg-[#3f0b2c]">
              <tr>
                <th className="px-6 py-4">Movie Name</th>
                <th className="px-6 py-4">Show Time</th>
                <th className="px-6 py-4">Total Booking</th>
                <th className="px-6 py-4">Earning</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {showData.map((show, index) => (
                <tr key={index} className="border-t border-gray-700 hover:bg-[#2c0a1b]">
                  <td className="px-6 py-4">{show.movieName}</td>
                  <td className="px-6 py-4">{show.showTime}</td>
                  <td className="px-6 py-4">{show.totalBooking}</td>
                  <td className="px-6 py-4">{show.earning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListShows;
