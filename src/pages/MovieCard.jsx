import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  const navigate = useNavigate()
  
  return (
    <div className="bg-gray-800 rounded-xl p-3 mb-4">
      <div className="bg-gray-700 h-40 rounded-lg mb-3 flex items-center justify-center">
        <img src={movie.backdrop_path} alt={movie.title} className="h-full w-auto rounded-lg" />
      </div>
      <h3 className="text-sm font-medium">{movie.title}</h3>
      <p className="text-xs text-gray-400 mb-2">
        {new Date(movie.release_date).getFullYear()} - {movie.genres.slice(0, 2).map((genre) => genre.name).join(" | ")} - {movie.runtime} min
      </p>
      <div className="flex justify-between items-center text-sm">
        <button
          className="bg-pink-500 px-2 py-1 rounded-full text-white text-xs hover:bg-pink-600 cursor-pointer"
          onClick={() => navigate(`/movies/${movie._id}`)}
        >
          Buy Ticket
        </button>
        <span className="text-yellow-400">★ {movie.vote_average}</span>
      </div>
    </div>
  )
}

export default MovieCard
