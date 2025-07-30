import React from 'react'
import Navbar from '../components/First_Layer1/Navbar'
import Hero from '../components/First_Layer1/Hero'
import NowShowing from '../components/First_Layer1/NowShowing'
import Trailers from '../components/First_Layer1/Trailers'
import Footer from '../components/First_Layer1/Footer'
const backroundImage = "src/assets/backgroundImage.png"
const Home = () => {
  return (
    <div>
        <div className='bg-amber-400 text-white'
      style={backroundImage ? { backgroundImage: `url(${backroundImage})` } : {}}>      
      <Hero/>
      </div>
      <NowShowing/>
      <Trailers/>
      
    </div>
  )
}

export default Home