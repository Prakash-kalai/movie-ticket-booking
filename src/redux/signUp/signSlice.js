import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendUrl } from '../../API/signUpApi';

const initialState = {
  signUpData: null,
  loading: false,
  error: null,
};

// Async thunk for signup
export const signUpUser = createAsyncThunk(
  'signUp/signUpUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(backendUrl.signIn.url, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Signup failed");
    }
  }
);

// Redux slice
const signSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {}, // if you want to add resetSignup state later, you can add here
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.signUpData = action.payload;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

// Selectors to use in components
export const selectSignUpData = (state) => state.signUp.signUpData;
export const selectSignUpLoading = (state) => state.signUp.loading;
export const selectSignUpError = (state) => state.signUp.error;

export default signSlice.reducer;
