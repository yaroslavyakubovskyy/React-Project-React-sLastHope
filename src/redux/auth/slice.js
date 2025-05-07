import {createSlice} from "@reduxjs/toolkit";
import {singUp} from "./operations.js";


const initialState = {
    user:{
        name: '',
        email: ''
    },
    error: null,
    isLoading: false,
    isRefreshing: false
}

 const slice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(singUp.fulfilled, (state, action)=>{
            state.user = action.payload
            state.isLoading = false
            state.error = null
        })
            .addCase(singUp.rejected, (state, action)=>{
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(singUp.pending, (state)=>{
                state.isLoading = true
            })
    }
})

export const authReducer = slice.reducer