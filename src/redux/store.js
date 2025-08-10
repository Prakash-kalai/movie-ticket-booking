import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./bookingTicket/bookingSlice"
import signReducer from "./signUp/signSlice";

export const store = configureStore({
  reducer: {   
    signUp: signReducer,
    booking:bookingReducer,
    },
}); 
export default store;
