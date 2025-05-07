import toast from "react-hot-toast";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../api/api";

const handleError = (error, thunkAPI) => {
  const message = error.response?.data?.message || "Something went wrong";
  toast.error(message);
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
      toast.success("Category added successfully");
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
      toast.success("Category updated successfully");
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
      toast.success("Category deleted successfully");
      return id;
    } catch (error) {
      return handleError(error, thunkAPI);
    }
  }
);
