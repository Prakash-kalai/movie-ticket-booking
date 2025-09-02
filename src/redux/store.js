import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./bookingTicket/bookingSlice"
import signReducer from "./signUp/signSlice";
import loginReducer from "./signUp/loginSlice";
import addshowReducer from "../Admin/redux/addshowSlice";

export const store = configureStore({
  reducer: {   
    signUp: signReducer,
    login: loginReducer,
    booking:bookingReducer,
    show:addshowReducer
    },
}); 
export default store;
