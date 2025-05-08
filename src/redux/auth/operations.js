import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../api/api.js";

const addToken = (token) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const signUp = createAsyncThunk("signUp", async (userData, thunkAPI) => {
  try {
    const { data } = await instance.post("auth/register", userData);
    const { email, name } = data;
    return { email, name };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const loginThunk = createAsyncThunk(
  "login",
  async (userData, thunkAPI) => {
    try {
      const { data } = await instance.post("auth/login", userData);
      addToken(data.token);
      const {
        user: { email, name },
        accessToken,
        refreshToken,
      } = data;
      return { user: { email, name }, accessToken, refreshToken };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
