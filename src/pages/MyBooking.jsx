import React from "react";

const bookings = [
  {
    id: 1,
    title: "Alita Battle Angel 2024",
    duration: "2 hours 5 minutes",
    dateTime: "13th May 2025 - 5:00 PM",
    amount: "₹700",
    tickets: 2,
    seats: ["B12", "B13"],
    image: "https://i.imgur.com/z7bZGZL.jpeg", // Replace with your actual movie image
  },
  {
    id: 2,
    title: "Alita Battle Angel 2024",
    duration: "2 hours 5 minutes",
    dateTime: "13th May 2025 - 5:00 PM",
    amount: "₹700",
    tickets: 2,
    seats: ["B12", "B13"],
    image: "https://i.imgur.com/z7bZGZL.jpeg",
  },
];

const BookingCard = ({ booking }) => (
  <div className="bg-gradient-to-r from-[#3c0b1f] to-[#1c0e1f] text-white rounded-xl flex p-4 mb-4 shadow-lg w-[50%] ">
    <img
      src={booking.image}
      alt={booking.title}
      className="w-24 h-32 object-cover rounded-md mr-4"
    />
    <div className="flex flex-col justify-between w-full">
      <div>
        <h3 className="text-lg font-semibold">{booking.title}</h3>
        <p className="text-sm text-gray-300">{booking.duration}</p>
        <p className="text-sm text-gray-300 mt-1">{booking.dateTime}</p>
      </div>
      <div className="flex justify-between items-end mt-4">
        <div className="text-sm text-gray-300">
          <p>Total Tickets: {booking.tickets}</p>
          <p>
            Seat Number:{" "}
            <span className="text-white font-medium">
              {booking.seats.join(", ")}
            </span>
          </p>
        </div>
        <p className="text-lg font-semibold">{booking.amount}</p>
      </div>
    </div>
  </div>
);

const MyBookings = () => {
  return (
    <section className="min-h-screen bg-black px-6 py-10">
      <h2 className="text-white text-xl font-semibold mb-6">My Bookings</h2>
      {bookings.map((booking) => (
        <BookingCard key={booking.id} booking={booking} />
      ))}
    </section>
  );
};

export default MyBookings;
