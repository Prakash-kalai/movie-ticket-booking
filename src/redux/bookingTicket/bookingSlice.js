import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  bookings: [],
  loading: false,
  error: null,
};

export const addBookingServer = createAsyncThunk(
  'booking/addBooking',
  async (bookingData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3000/api/bookings/bookingTicket', bookingData);
      console.log(response.data);      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data); 
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
export const getAllData = createAsyncThunk(
  'booking/getAllData',
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
      .addCase(getAllData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllData.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        
        state.bookings = action.payload; 
      })
      .addCase(getAllData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
}); 

export default bookingSlice.reducer;
