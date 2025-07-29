import React from 'react'
import { dummyBookingData, dummyShowsData } from '../assets/assets';
import NowShowing from '../components/First_Layer1/NowShowing';
const Movies = () => {    
        
  return dummyBookingData>0?(
    <div>
        <h1>Now Showing</h1>
        <div>
            <NowShowing/>
        </div>
    </div>
  ):(
    <div></div>
  );
}

export default Movies