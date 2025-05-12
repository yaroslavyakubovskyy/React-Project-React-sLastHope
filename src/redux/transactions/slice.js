import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {
  addTransaction,
  updateTransaction,
  getTransactions,
  deleteTransaction,
} from "./operations";
import { logOut } from "../auth/operations.js";

const initialState = {
  items: [],
  filter: "",
  isLoading: false,
  error: null,
  selectedType: "expenses",
  editModal: false,
  deleteModal: false,
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },

    openDeleteModal: (state, action) => {
      state.deleteModal = action.payload;
    },

    closeDeleteModal: (state, action) => {
      state.deleteModal = false;
    },
    setSelectedType(state, action) {
      state.selectedType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTransactions.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(getTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getTransactions.pending, (state) => {
        state.isLoading = true;
        state.items = [];
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
      .addCase(deleteTransaction.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          (transaction) => transaction._id !== action.payload
        );
        state.deleteModal = false;
        toast.success("Delete transaction successfully!");
      })
      .addCase(logOut.fulfilled, (state) => initialState);
  },
});

export const { setSelectedType } = transactionSlice.actions;
export default transactionSlice.reducer;
export const { setFilter, openDeleteModal, closeDeleteModal } =
  transactionSlice.actions;
