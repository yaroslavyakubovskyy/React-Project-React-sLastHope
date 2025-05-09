import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice.js";
import categoryReducer from "./category/slice.js";
import transactionReducer from "./transactions/slice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./user/slice.js";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["accessToken", "refreshToken", "sid"],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    categories: categoryReducer,
    transactions: transactionReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
