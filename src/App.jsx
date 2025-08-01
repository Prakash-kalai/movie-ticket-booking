import React from 'react'
import Home from './main/Home'
import Movies from './main/Movies'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/First_Layer1/Navbar'
import Footer from './components/First_Layer1/Footer'
import MovieDetails from './pages/MoveDetails'
import SeatSelector from './pages/SeatSelector'

const App = () => {
  return (
    <BrowserRouter>
    <div className='bg-black'>            
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />   
          <Route path="/movies" element={<Movies />}/>          
          <Route path="/movies/:id" element={<MovieDetails />}/>          
          <Route path="/movies/:id/:date" element={<SeatSelector />} />

        </Routes>      
        <Footer/>
    </div>
    </BrowserRouter>      
  )
}

export default App