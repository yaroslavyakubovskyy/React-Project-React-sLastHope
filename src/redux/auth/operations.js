import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../api/api.js";

const addToken = (token) => {
  console.log(token);
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const signUp = createAsyncThunk("signUp", async (userData, thunkAPI) => {
  try {
    const { data } = await instance.post("/auth/register", userData);
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
      const { data } = await instance.post("/auth/login", userData);
      addToken(data.accessToken);
      const {
        user: { email, name },
        accessToken,
        refreshToken,
        sid,
      } = data;
      return { user: { email, name }, accessToken, refreshToken, sid };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const refreshToken = createAsyncThunk("refresh", async (_, thunkAPI) => {
  const sid = thunkAPI.getState().auth.sid;

  if (!sid) return thunkAPI.rejectWithValue("No sid");

  try {
    const { data } = await instance.post(
      "/auth/refresh",
      { sid },
      {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().auth.refreshToken}`,
        },
      },
    );

    addToken(data.accessToken);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
