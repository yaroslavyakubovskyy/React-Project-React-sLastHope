import { createSlice } from "@reduxjs/toolkit";
import { signUp } from "./operations.js";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  error: null,
  isLoading: false,
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
      });
  },
});

export const authReducer = slice.reducer;
