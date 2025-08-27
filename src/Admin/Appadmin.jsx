import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dasboard from './Components/Dasboard'
import { Sidebar } from './Components/Sidebar'
import AddShows from './Components/AddShows'
import ListShows from './Components/ListShows'
import ListBookings from './Components/ListBookings'
import All_movies from './Components/All_movies'
const Appadmin = () => {
  return (
    <div className=' min-h-screen bg-black text-white w-[100%]'>
      <div className=' bg-gradient-to-r from-[#100c0e] to-[#3f0b2c] h-15 flex items-center p-5 font-bold text-2xl'>
        <h1>Online <span className='text-pink-500'>Ticket Booking</span></h1>        
      </div>
      <hr/>
      <div className='flex w-full bg-gradient-to-r from-[#100c0e] to-[#3f0b2c]'>
        <div className='overflow-hidden'>
      <Sidebar/>        
      </div>
      <div className='p-5 w-full overflow-auto'>
        <Routes>
            <Route path="/" element={<Dasboard />} /> || <Route path="/dashboard" element={<Dasboard />} /> 
            <Route path="/add-shows" element={<AddShows />} />
            <Route path="/list-shows" element={<ListShows/>} />
            <Route path="/list-bookings" element={<ListBookings />} />
            <Route path="/list-movies" element={<All_movies />} />
        </Routes>
    </div>
    </div>
    </div>
  )
}

export default Appadmin