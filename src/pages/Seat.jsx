import React from "react";

const Seat = ({ row,selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-6 h-6 border rounded-sm cursor-pointer p-3 flex items-center justify-center text-[10px] ${
        selected ? "bg-pink-500" : "border-pink-500"
      }`}
      
    >
        {row}
    </div>
  );
};

export default Seat;
