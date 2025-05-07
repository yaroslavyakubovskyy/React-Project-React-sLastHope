import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../api/api";

const handleError = (error, thunkAPI) => {
  const message = error.response?.data?.message || "Something went wrong";
  return thunkAPI.rejectWithValue(message);
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (type = "expenses", thunkAPI) => {
    try {
      const { data } = await instance.get(`/categories?type=${type}`);
      return data;
    } catch (error) {
      return handleError(error, thunkAPI);
    }
  }
);

export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async (newCategory, thunkAPI) => {
    try {
      const { data } = await instance.post("/categories", newCategory);
      return data;
    } catch (error) {
      return handleError(error, thunkAPI);
    }
  }
);

export const updateCategory = createAsyncThunk(
  "categories/updateCategory",
  async ({ id, updatedCategory }, thunkAPI) => {
    try {
      const { data } = await instance.patch(
        `/categories/${id}`,
        updatedCategory
      );
      return data;
    } catch (error) {
      return handleError(error, thunkAPI);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (id, thunkAPI) => {
    try {
      await instance.delete(`/categories/${id}`);
      return id;
    } catch (error) {
      return handleError(error, thunkAPI);
    }
  }
);
