import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from '../../api/api.js'

export const singUp = createAsyncThunk('signUp', async (data, thunkAPI)=>{
    try{
        const {data} = await instance.post('auth/register', data)
        return data
    }catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }
})