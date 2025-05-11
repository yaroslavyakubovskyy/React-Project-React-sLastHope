import { createSlice } from "@reduxjs/toolkit";
import {
  addTransaction,
  updateTransaction,
  getTransactions,
  fetchIncomes,
  fetchExpenses,
  fetchIncomesByDate,
  fetchExpensesByDate,
} from "./operations";

const initialState = {
  items: [],
  filteredItems: [],
  isLoading: false,
  error: null,
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
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
      })

      //
      // TransactionsHistoryPage
      //
      .addCase(fetchIncomes.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchIncomes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchIncomes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchExpenses.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.filteredItems = action.payload;
      })

      //
      //ByDate
      .addCase(fetchIncomesByDate.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchIncomesByDate.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchIncomesByDate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchExpensesByDate.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchExpensesByDate.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchExpensesByDate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      });
  },
});

export default transactionSlice.reducer;
export const { filterTransactions } = transactionSlice.actions;
