import React from 'react'
import { dummyShowsData } from '../assets/assets'
import MovieCard from '../pages/MovieCard'
const Movies = () => {
  return (
    <div className=' w-full h-full'>
      <h1 className='text-white'>Movies List</h1>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-20">
        {dummyShowsData.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      </div>
  )
}

export default Movies