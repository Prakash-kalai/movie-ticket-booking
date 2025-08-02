import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
    initialState: {
    bookings: [],
  },    
    reducers: {
    getAllData:(state,action)=>{
        return state.bookings;
    },
    addBooking: (state, action) => {
        state.bookings.push(action.payload);
        },
    addUpdte:(state,action)=>{
        const newBooking = action.payload;
        const index = state.bookings.findIndex(b => b.id === newBooking.id);

        if (index !== -1) {    
             state.bookings[index] = { ...state.bookings[index], ...newBooking };
        } else {    
            state.bookings.push(newBooking);
    }               
    }
    },
}); 

export const {getAllData, addBooking ,addUpdte} = bookingSlice.actions;
export default bookingSlice.reducer;
