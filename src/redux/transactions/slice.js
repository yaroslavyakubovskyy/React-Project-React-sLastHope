import { createSlice } from "@reduxjs/toolkit";
import { getTransactions, addTransaction } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTransactions.fulfilled, (state, { payload }) => {
        state.transactions = payload;
      })
      .addCase(addTransaction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
  selectors: {
    selectTransactions: (state) => state.transactions,
  },
});

export default transactionSlice.reducer;

export const { selectTransactions } = transactionSlice.selectors;
