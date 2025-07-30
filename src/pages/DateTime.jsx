import { dummyDateTimeData } from "../assets/assets/"; 
import { useState } from "react";
import { format } from "date-fns";

const DateTime = () => {
  const [selectedDate, setSelectedDate] = useState(Object.keys(dummyDateTimeData)[0]);
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div className="mt-12 bg-gradient-to-r from-[#250d1f] to-[#1d1a20] p-6 rounded-xl">
      <h3 className="text-sm font-semibold mb-4">Choose Date</h3>
      <div className="flex flex-wrap gap-3 mb-6">
        {Object.keys(dummyDateTimeData).map((dateStr) => {
          const dateObj = new Date(dateStr);
          return (
            <button
              key={dateStr}
              onClick={() => {
                setSelectedDate(dateStr);
                setSelectedTime(null);
              }}
              className={`px-4 py-2 rounded-md text-sm ${
                selectedDate === dateStr ? "bg-pink-600 text-white" : "bg-gray-800 text-gray-300"
              }`}
            >
              {format(dateObj, "EEE dd")}
            </button>
          );
        })}
      </div>

      {/* Show time buttons */}
      <div className="flex flex-wrap gap-3 mb-4">
        {dummyDateTimeData[selectedDate].map((show) => {
          const time = new Date(show.time);
          return (
            <button
              key={show.showId}
              onClick={() => setSelectedTime(show.showId)}
              className={`px-4 py-2 rounded-md text-sm ${
                selectedTime === show.showId ? "bg-pink-600 text-white" : "bg-gray-700 text-gray-300"
              }`}
            >
              {format(time, "hh:mm a")}
            </button>
          );
        })}
      </div>

    </div>
  );
};

export default DateTime;
