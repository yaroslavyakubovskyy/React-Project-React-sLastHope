import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../api/api";

const handleError = (error, thunkAPI) => {
  const message = error.response?.data?.message || "Something went wrong";
  return thunkAPI.rejectWithValue(message);
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/categories");
      return data;
    } catch (error) {
      return handleError(error, thunkAPI);
    }
  }
);

export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async (category, thunkAPI) => {
    try {
      const { data } = await instance.post("/categories", category);
      return data;
    } catch (error) {
      return handleError(error, thunkAPI);
    }
  }
);

export const updateCategory = createAsyncThunk(
  "categories/updateCategory",
  async ({ categoryName, categoryId }, thunkAPI) => {
    try {
      const { data } = await instance.patch(`/categories/${categoryId}`, {
        categoryName,
      });
      return data;
    } catch (error) {
      return handleError(error, thunkAPI);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async ({ id, type }, thunkAPI) => {
    try {
      await instance.delete(`/categories/${id}`);
      return { id, type };
    } catch (error) {
      return handleError(error, thunkAPI);
    }
  }
);
