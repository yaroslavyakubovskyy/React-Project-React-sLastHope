import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.items = state.items.map((category) =>
          category.id === action.payload.id ? action.payload : category
        );
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (category) => category.id !== action.payload
        );
      })
      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("fulfilled"),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export default categorySlice.reducer;
