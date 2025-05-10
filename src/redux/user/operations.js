import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../api/api";

export const fetchCurrentUser = createAsyncThunk(
  "user/current",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  "user/updateInfo",
  async (body, thunkAPI) => {
    try {
      const { data } = await instance.patch("/users/info", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);
// export const updateUserAvatar = createAsyncThunk(
//   "user/updateAvatar",
//   async (formData, thunkAPI) => {
//     try {
//       const { data } = await instance.patch("/users/avatar", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response.data.message || error.message
//       );
//     }
//   }
// );
export const updateUserAvatar = createAsyncThunk(
  "user/updateAvatar",
  async (file, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("avatar", file);

      const { data } = await instance.patch("/users/avatar", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return data.avatarUrl;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteUserAvatar = createAsyncThunk(
  "user/deleteAvatar",
  async (avatarId, thunkAPI) => {
    try {
      await instance.delete(`/users/avatar/${avatarId}`);
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);
