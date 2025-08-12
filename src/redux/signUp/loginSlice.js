import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url="http://localhost:3000/api/signin/login";

const initialState={
    isLogin:false,
    userData:{},
    error:null,    
}


export const isLoginCheck=createAsyncThunk(async()=>{
    try{
        const response=await axios.post(url,data);
        return response.data;
    }catch(err){
        return err.message;
    }
})

const loginSlice=createSlice({
    name:"login",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder            
            .addCase(isLoginCheck.fulfilled,(state,action)=>{  
                state.userData=action.payload;
                state.isLogin=true;                
                state.error=null;
            })
            .addCase(isLoginCheck.rejected,(state,action)=>{
                state.isLogin=false;
                state.error=action.error.message;
            })
            .addCase(isLoginCheck.pending,(state)=>{
                state.isLogin=false;
                state.error=null;
            })  
    }

})


export default loginSlice.reducer  ;