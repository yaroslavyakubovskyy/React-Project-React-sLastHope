import { createSlice } from "@reduxjs/toolkit";
import {
  addTransaction,
  updateTransaction,
  getTransactions,
} from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  selectedType: "expenses",
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setSelectedType(state, action) {
      state.selectedType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTransactions.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addTransaction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(addTransaction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateTransaction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateTransaction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const index = state.items.findIndex((item) => item._id === payload._id);
        if (index !== -1) {
          state.items[index] = payload;
        }
      })
      .addCase(updateTransaction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { setSelectedType } = transactionSlice.actions;
export default transactionSlice.reducer;
