import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, signUp } from "./operations.js";
import toast from "react-hot-toast";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: null,
  refreshToken: null,
  error: null,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
  isRegistered: false,
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
        state.isRegistered = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(state.error);
        state.isRegistered = false;
      })
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = slice.reducer;
