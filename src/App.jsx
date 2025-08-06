import React, { useEffect } from 'react'
import Home from './main/Home'
import Movies from './main/Movies'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/First_Layer1/Navbar'
import Footer from './components/First_Layer1/Footer'
import MovieDetails from './pages/MoveDetails'
import SeatSelector from './pages/SeatSelector'
import MyBookings from './pages/MyBooking'
import { useDispatch, useSelector } from 'react-redux'


const App = () => {
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.booking.bookings)
  console.log(data);
  
  return (
    <BrowserRouter>
    <div className='bg-black'>            
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />   
          <Route path="/movies" element={<Movies />}/>          
          <Route path="/movies/:id" element={<MovieDetails />}/>          
          <Route path="/movies/:id/:date" element={<SeatSelector />} />
          <Route path="/movies/my-booking" element={<MyBookings/>} />

        </Routes>      
        <Footer/>
    </div>
    </BrowserRouter>      
  )
}

export default App