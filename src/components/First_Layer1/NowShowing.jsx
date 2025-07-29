import React, { useState } from "react";
import { dummyShowsData } from "../../assets/assets";
import { Navigate, useNavigate } from "react-router-dom";

const NowShowing = () => {
  const navigate=useNavigate();
  return (
    <section className="px-6 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Now Showing</h2>
        <button className="text-sm text-pink-500">View All →</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {dummyShowsData.map((movie, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-3">
            <div className="bg-gray-700 h-40 rounded-lg mb-3">
                <img src={movie.backdrop_path} alt="" />
            </div>
            <h3 className="text-sm font-medium">{movie.title}</h3>
            <p className="text-xs text-gray-400 mb-2">
                {new Date(movie.release_date).getFullYear()} - {movie.genres.slice(0, 2).map((genre) => genre.name).join(" | ")} - {movie.runtime}
            </p>
            <div className="flex justify-between items-center text-sm">
              <button className="bg-pink-500 px-2 py-1 rounded-full text-white text-xs hover:bg-pink-600 cursor-pointer" onClick={()=>navigate(`/movies/${movie._id}`)}>
                Buy Ticket
              </button>
              <span className="text-yellow-400">★ {movie.rating}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-full cursor-pointer" >
          Show more
        </button>
      </div>
    </section>
  );
};

export default NowShowing;
