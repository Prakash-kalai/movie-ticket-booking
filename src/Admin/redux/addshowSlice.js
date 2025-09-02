
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    shows: [],
    loading: false,
    error: null,
    message: null,
    };

export const addShow = createAsyncThunk(
    'shows/addShow',
    async (showData, { rejectWithValue }) => {  
        try {
            const response = await axios.post('http://localhost:3000/api/admin/add-show', showData);
            console.log(response.data);
            return response.data; // Return the added show data
        } catch (error) {
            return rejectWithValue(error.response.data); // Handle error
        }
    }
);
export const getAllShows = createAsyncThunk(
    'shows/getAllShows',   
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:3000/api/shows/getAllShows');            
            return response.data; // Return the shows data
        } catch (error) {
            return rejectWithValue(error.response.data); // Handle error
        }
    }
);
const addshowSlice = createSlice({
    name: "shows",
    initialState,
    reducers: {
        clearMessage: (state) => {
            state.message = null;
            },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addShow.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.message = null;
            })
            .addCase(addShow.fulfilled, (state, action) => {
                state.loading = false;
                state.shows.push(action.payload); // Add the new show to the shows array
                state.message = "Show added successfully";
            }
            )
            .addCase(addShow.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }
            )
            .addCase(getAllShows.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.message = null;
            }   
            )
            .addCase(getAllShows.fulfilled, (state, action) => {
                state.loading = false;
                state.shows = action.payload; // Set the shows array with fetched data
            }   
            )
            .addCase(getAllShows.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }   
            );  
    }   
});

export const { clearMessage } = addshowSlice.actions;
export default addshowSlice.reducer;
