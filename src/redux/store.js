import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./bookingTicket/bookingSlice"
export const store = configureStore({
  reducer: {   
    booking:bookingReducer,
    },
}); 
export default store;
