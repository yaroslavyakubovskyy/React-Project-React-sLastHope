import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../redux/auth/selectors.js";

const RestrictedRoute = ({ component, redirect }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  if (isLoggedIn) return <Navigate to="/transactions/expenses" />;
  return component;
};

export default RestrictedRoute;
