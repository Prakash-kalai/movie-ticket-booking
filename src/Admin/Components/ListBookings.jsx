// File: src/pages/ListBookings.jsx

import React from "react";


const bookingData = [
  {
    userName: "Ankit Sharma",
    movieName: "Avatar 2",
    showTime: "2025-05-12 7:00PM",
    seats: "A1, A2",
    amount: "$30",
  },
  {
    userName: "Ankit Sharma",
    movieName: "Avatar 2",
    showTime: "2025-05-12 7:00PM",
    seats: "A1, A2",
    amount: "$30",
  },
  {
    userName: "Ankit Sharma",
    movieName: "Avatar 2",
    showTime: "2025-05-12 7:00PM",
    seats: "A1, A2",
    amount: "$30",
  },
  {
    userName: "Ankit Sharma",
    movieName: "Avatar 2",
    showTime: "2025-05-12 7:00PM",
    seats: "A1, A2",
    amount: "$30",
  },
];

const ListBookings = () => {
  return (
    <div className="flex min-h-screen text-white w-full">      
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">
          List <span className="text-pink-500">Bookings</span>
        </h1>

        <div className="bg-gradient-to-br from-[#2f0c20] to-[#3f0b2c] rounded-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="text-white text-sm uppercase bg-[#3f0b2c]">
              <tr>
                <th className="px-6 py-4">User Name</th>
                <th className="px-6 py-4">Movie Name</th>
                <th className="px-6 py-4">Show Time</th>
                <th className="px-6 py-4">Seats</th>
                <th className="px-6 py-4">Amount</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {bookingData.map((booking, index) => (
                <tr key={index} className="border-t border-gray-700 hover:bg-[#2c0a1b]">
                  <td className="px-6 py-4">{booking.userName}</td>
                  <td className="px-6 py-4">{booking.movieName}</td>
                  <td className="px-6 py-4">{booking.showTime}</td>
                  <td className="px-6 py-4">{booking.seats}</td>
                  <td className="px-6 py-4">{booking.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListBookings;