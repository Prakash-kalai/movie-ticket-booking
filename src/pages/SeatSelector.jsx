import React, { useEffect, useState } from "react";
import Seat from "./Seat"; // Component shown below
import {
  addBookingServer,
  addUpdte,
  getAllData,
} from "../redux/bookingTicket/bookingSlice";
import { useDispatch, useSelector } from "react-redux";

const SeatSelector = () => {
  const timings = ["06:30", "09:30", "12:00", "16:30", "20:00"];
  const dispatch = useDispatch();
  const data = useSelector((state) => state.booking.bookings);

  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);
console.log(data);

  const [selectedTime, setSelectedTime] = useState(timings[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const rows = ["A", "B", "C", "D", "E", "F", "G"];
  const cols = 18;

  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };

  const handleSubmit = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }

    const update = {
      time: selectedTime,
      seats: selectedSeats,
      tickets: selectedSeats.length,
    };
    console.log(update);    
    dispatch(addBookingServer(update));
    dispatch(addUpdte(update));
    setSelectedSeats([]);
  };
console.log(data);

  const bookedSeats = data?.bookedSeats || [];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="flex gap-12">
        {/* Timings */}
        <div className="bg-[#1d1b1f] p-4 rounded-md">
          <h3 className="mb-4 text-sm">Available Timings</h3>
          {timings.map((time) => (
            <div
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`mb-2 px-3 py-1 rounded-md cursor-pointer text-sm ${
                selectedTime === time
                  ? "bg-pink-500 text-white"
                  : "hover:bg-gray-700"
              }`}
            >
              <input type="radio" checked={selectedTime === time} readOnly />
              <span className="ml-2">
                {time} {parseInt(time.split(":")[0], 10) < 12 ? "AM" : "PM"}
              </span>
            </div>
          ))}
        </div>

        {/* Seat layout */}
        <div className="flex-1 text-center">
          <h2 className="text-lg font-semibold mb-2">Select Your Seat</h2>
          <div className="text-[10px] mb-4">SCREEN SIDE</div>

          <div className="flex flex-col items-center space-y-2">
            {rows.map((row) => (
              <div key={row} className="flex items-center gap-2">
                <span className="w-4 text-xs">{row}</span>
                {Array.from({ length: cols }).map((_, colIndex) => {
                  const seatId = `${row}${colIndex + 1}`;
                  const isBooked = bookedSeats?.includes(seatId);
                  return (
                    <Seat
                      key={seatId}
                      seatId={seatId}
                      selected={selectedSeats?.includes(seatId)}
                      disabled={isBooked}
                      onClick={() => !isBooked && toggleSeat(seatId)}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          <button
            className="mt-8 px-6 py-2 bg-pink-500 rounded-full text-sm hover:bg-pink-600 transition"
            onClick={handleSubmit}
          >
            Proceed to checkout →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatSelector;
