import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { addBookingServer } from "../redux/bookingTicket/bookingSlice";
import { dummyDateTimeData } from "../assets/assets/";

const DateTime = ({ id,data }) => {
      
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(Object.keys(dummyDateTimeData)[0]);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (showId) => {
    setSelectedTime(showId);
  };

  const handleBooking = () => {
    if (!selectedTime) {
      alert("Please select a time slot");
      return;
    }

    const bookingDetails = {
      movieId: id,
      date: selectedDate,
      time: selectedTime,
      duration: Math.floor(data.runtime / 60)+'h'+ data?.runtime % 60+'m •'+" ",
      title: data?.title || "Unknown Movie",      
      name:"prakash",
      email:'jkprakash342@gmail.com'
    };
    console.log(bookingDetails);      
    dispatch(addBookingServer(bookingDetails));    
    navigate(`/movies/${id}/${selectedDate}`);
  };

  return (
    <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-[#250d1f] to-[#1d1a20]">
      {/* Date Selection */}
      <h3 className="text-sm font-semibold mb-4">Choose Date</h3>
      <div className="flex flex-wrap gap-3 mb-6">
        {Object.keys(dummyDateTimeData).map((dateStr) => {
          const dateObj = new Date(dateStr);
          const isSelected = selectedDate === dateStr;

          return (
            <button
              key={dateStr}
              onClick={() => handleDateSelect(dateStr)}
              className={`px-4 py-2 rounded-md text-sm transition-colors duration-200
                ${isSelected ? "bg-pink-600 text-white" : "bg-gray-800 text-gray-300"}
              `}
            >
              {format(dateObj, "EEE dd")}
            </button>
          );
        })}
      </div>

      {/* Time Slot Selection */}
      <h3 className="text-sm font-semibold mb-4">Choose Time</h3>
      <div className="flex flex-wrap gap-3 mb-6">
        {['6:30', '8:30', '10:00'].map((show) => {
  // Parse time string into a Date object for formatting
  const [hours, minutes] = show.split(':');
  const showTime = new Date();
  showTime.setHours(Number(hours));
  showTime.setMinutes(Number(minutes));
  showTime.setSeconds(0);

  const isSelected = selectedTime === show;

  return (
    <button
      key={show}
      onClick={() => handleTimeSelect(show)}
      className={`px-4 py-2 rounded-md text-sm transition-colors duration-200
        ${isSelected ? "bg-pink-600 text-white" : "bg-gray-700 text-gray-300"}
      `}
    >
      {format(showTime, "hh:mm a")}
    </button>
  );
})}
      </div>

      {/* Book Now Button */}
      <div className="flex justify-end">
        <button
          onClick={handleBooking}
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full transition duration-200"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DateTime;
