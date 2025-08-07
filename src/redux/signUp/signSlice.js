import createSlice from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp } from '../../API/signUpApi';

export const signUpUser = createAsyncThunk(
  'signUp/signUpUser',
    async (userData, { rejectWithValue }) => {
    try {
      const response = await signUp(userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
    })            
const signSlice = createSlice({
  name: 'signUp',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        resetState: (state) => {
            state.user = null;
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUpUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});
export const { resetState } = signSlice.actions;
export default signSlice.reducer;
