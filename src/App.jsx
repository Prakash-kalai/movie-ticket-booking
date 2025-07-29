import React from 'react'
import Home from './main/Home'
import Movies from './main/Movies'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />   
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>      
    </div>
  )
}

export default App