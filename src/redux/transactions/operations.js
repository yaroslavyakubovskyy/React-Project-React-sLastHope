import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../api/api";

const handleError = (error, thunkAPI) => {
  const message = error.response?.data?.message || "Something went wrong";
  return thunkAPI.rejectWithValue(message);
};

export const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async (transactionData, thunkAPI) => {
    try {
      const { data } = await instance.post("/transactions", transactionData);
      return data;
    } catch (error) {
      return handleError(error, thunkAPI);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  "transactions/updateTransaction",
  async ({ type, id, data }, thunkAPI) => {
    try {
      const { data: updatedTransaction } = await instance.patch(
        `/transactions/${type}/${id}`,
        data
      );
      return updatedTransaction;
    } catch (error) {
      return handleError(error, thunkAPI);
    }
  }
);

export const getTransactions = createAsyncThunk(
  "transactions/getTransactions",
  async ({ type, date }, thunkAPI) => {
    try {
      const params = date ? { date } : {};

      const { data } = await instance.get(`/transactions/${type}`, { params });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//
//TransactionHistoryPage
//

export const fetchIncomes = createAsyncThunk(
  "transactions/fetchIncomes",
  async (signal, thunkAPI) => {
    try {
      const response = await instance.get("/transactions/incomes", {
        signal,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchExpenses = createAsyncThunk(
  "transactions/fetchExpenses",
  async (signal, thunkAPI) => {
    try {
      const response = await instance.get("/transactions/expenses", {
        signal,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchIncomesByDate = createAsyncThunk(
  "transactions/fetchIncomesByDate",
  async (date, thunkAPI) => {
    try {
      const response = await instance.get(`/transactions/incomes?date=${date}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchExpensesByDate = createAsyncThunk(
  "transactions/fetchExpensesByDate",
  async (date, thunkAPI) => {
    try {
      const response = await instance.get(
        `/transactions/expenses?date=${date}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
