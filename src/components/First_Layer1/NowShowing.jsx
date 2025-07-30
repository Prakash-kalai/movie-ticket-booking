import React from "react";
import { dummyShowsData } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import Movies from "../../main/Movies";
import MovieCard from "../../pages/MovieCard";

const NowShowing = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Now Showing</h2>
        <button
          onClick={() => navigate("/all-movies")}
          className="text-sm text-pink-500"
        >
          View All →
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {dummyShowsData.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-full cursor-pointer">
          Show more
        </button>
      </div>
    </section>
  );
};

export default NowShowing;
