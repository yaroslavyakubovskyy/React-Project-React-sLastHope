import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "./operations";

const initialState = {
  items: {
    expenses: [],
    incomes: [],
  },
  isLoading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.items.expenses = action.payload.expenses || [];
        state.items.incomes = action.payload.incomes || [];
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        const { type } = action.payload;
        state.items[type].push(action.payload);
      })
      .addCase(updateCategory.fulfilled, (state, { payload }) => {
        state.items.expenses = state.items.expenses.map((item) =>
          item._id === payload._id ? payload : item
        );
        state.items.incomes = state.items.incomes.map((item) =>
          item._id === payload._id ? payload : item
        );
      })
      .addCase(deleteCategory.fulfilled, (state, { payload }) => {
        state.items[payload.type] = state.items[payload.type].filter(
          (item) => item._id !== payload.id
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
