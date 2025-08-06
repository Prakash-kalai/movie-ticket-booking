import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

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
      console.log(response.data);      
      return response.data; // Return the booking data
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle error
    }
  }
);

export const addBookingSeat = createAsyncThunk(
  'booking/addBookingSeat',
  async ({id,seat}, { rejectWithValue }) => {
    try {
      console.log(seat);
      
      const response = await axios.post(`http://localhost:3000/api/bookings/bookingTicket/${id}`,seat);
      console.log(response.data);      
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
    reducers: {},
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
        state.bookings = action.payload; 
      })
      .addCase(getAllBookingData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
}); 

export default bookingSlice.reducer;
