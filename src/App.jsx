import "./App.css";
import SharedLayout from "./pages/SharedLayout/SharedLayout.jsx";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import MainTransactionsPage from "./pages/MainTransactionsPage/MainTransactionsPage.jsx";
import TransactionsHistoryPage from "./pages/TransactionsHistoryPage/TransactionsHistoryPage.jsx";
import NotFoundPage from "./routes/NotFoundPage/NotFoundPage.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import RestrictedRoute from "./routes/RestrictedRoute.jsx";
import { Toaster } from "react-hot-toast";

import { selectIsRefreshing } from "./redux/auth/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk, refreshToken } from "./redux/auth/operations.js";

import { useEffect } from "react";

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  if (isRefreshing) return null;
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={<RestrictedRoute component={<WelcomePage />} />}
          />
          <Route
            path="register"
            element={<RestrictedRoute component={<RegisterPage />} />}
          />
          <Route
            path="login"
            element={<RestrictedRoute component={<LoginPage />} />}
          />
          <Route
            path="transactions/:transactionType"
            element={
              <PrivateRoute>
                <MainTransactionsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="transactions/history/:transactionsType"
            element={
              <PrivateRoute>
                <TransactionsHistoryPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
