import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, signUp } from "./operations.js";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  error: null,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const authReducer = slice.reducer;
