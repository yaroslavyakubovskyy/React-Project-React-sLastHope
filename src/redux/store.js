import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice.js";
import categoryReducer from "./category/slice.js";
import transactionReducer from "./transactions/slice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoryReducer,
    transactions: transactionReducer,
  },
});

export default store;
