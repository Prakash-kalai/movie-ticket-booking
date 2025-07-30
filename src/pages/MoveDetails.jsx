import React from "react";
import { useParams } from "react-router-dom";
import { dummyShowsData } from "../assets/assets";
import DateTime from "./DateTime";
import MovieCard from "./MovieCard";
const MovieDetails = () => {
  const { id } = useParams();
  const data = dummyShowsData.find((e) => String(e.id) === id);

  if (!data) {
    return <div className="text-center text-red-500 mt-10">Movie not found</div>;
  }

  return (
    <div className="w-[90%] m-auto flex flex-col gap-15">
    <section className="flex flex-col md:flex-row gap-8 p-6">
      <img
        src={data.backdrop_path}
        alt={data.title}
        className="w-72 h-auto object-cover rounded-xl"
      />
      <div>
        <p className="text-sm text-red-400 font-bold">{data.language?.toUpperCase()}</p>
        <h2 className="text-3xl font-semibold mb-2">{data.title}</h2>
        <p className="text-yellow-400 text-sm mb-2">★ {data.vote_average} IMDb Rating</p>
        <p className="text-gray-300 text-sm mb-4 max-w-xl">{data.overview}</p>
        <p className="text-sm text-gray-500 mb-4">
          {Math.floor(data.runtime / 60)}h {data.runtime % 60}m •{" "}
          {data.genres.map((g) => g.name).join(" | ")} •{" "}
          {new Date(data.release_date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
        <div className="flex gap-4">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
            ▶ Watch Trailer
          </button>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-md">
            🎟 Buy Tickets
          </button>
        </div>
      </div>
    </section>
    <section>
      <div className="mt-12">
        
        <h3 className="text-xl font-semibold mb-4 text-white">Your Favorite Cast</h3>
        <div className="flex overflow-x-auto gap-2 justify-center">
          {data?.casts.slice(0,12).map((actor, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={actor.profile_path} alt={actor.name} className="w-16 h-16 rounded-full mb-2" />
              <p className="text-sm text-white">{actor.name}</p>
              <p className="text-xs text-gray-500">{actor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section>
       <div className="mt-12 bg-gradient-to-r from-[rgb(37,13,31)] to-[#1d1a20] p-6 rounded-xl">
        <h3 className="text-sm font-semibold text-white mb-4">Choose Date</h3>
        <div className="flex items-center gap-4">
          <DateTime/>
          <button className="ml-auto bg-pink-600 text-white px-6 py-2 rounded-full">Book Now</button>
        </div>
      </div>
    </section>
    <section>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {dummyShowsData.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
        </div>
    </section>
    </div>
  );
};

export default MovieDetails;
