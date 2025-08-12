import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./bookingTicket/bookingSlice"
import signReducer from "./signUp/signSlice";
import loginReducer from "./signUp/loginSlice";

export const store = configureStore({
  reducer: {   
    signUp: signReducer,
    login: loginReducer,
    booking:bookingReducer,
    },
}); 
export default store;
