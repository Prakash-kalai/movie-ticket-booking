import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { Immer } from "immer";
// Define an initial state for the booking slice
// This state will hold the bookings data
const initialState = {
  bookings: [],
  loading: false,
  error: null,
};
// Create a slice for booking management
export const addBookingServer = createAsyncThunk(
  'booking/addBooking',
  async (bookingData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3000/api/bookings/bookingTicket', bookingData);
      return response.data; // Return the booking data
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle error
    }
  }
);
//get all booking data
export const getAllBookingData = createAsyncThunk(
  'booking/getAllBookingData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:3000/api/bookings/bookingTicket');
      return response.data; // Return the bookings data
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle error
    }
  }
);  

const bookingSlice = createSlice({
  name: "booking",
    initialState,    
    reducers: {
    getAllData:(state,action)=>{
        return state.bookings;
    },
    addBooking: (state, action) => {
        state.bookings.push(action.payload);
        },
addUpdte: (state, action) => {
  const newBooking = action.payload;
  console.log(action.payload);
  
  const index = state.bookings?.findIndex(b => b._id === newBooking?._id);
  console.log(index,'dsd');

  if (index !== -1) {
    // Replace the existing booking with the new one
    state.bookings[index] = newBooking;
  } else {    
    state.bookings.push(newBooking);
  }
  console.log(state.bookings);
}
    },
  extraReducers: (builder) => {
    builder
      .addCase(addBookingServer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBookingServer.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings.push(action.payload);
      })
      .addCase(addBookingServer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAllBookingData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllBookingData.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = action.payload; // Update bookings with fetched data
      })
      .addCase(getAllBookingData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Handle error
      })
  }
}); 

export const {getAllData, addBooking ,addUpdte} = bookingSlice.actions;
export default bookingSlice.reducer;
