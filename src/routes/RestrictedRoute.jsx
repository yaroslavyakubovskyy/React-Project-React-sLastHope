import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors.js";

const RestrictedRoute = ({ component, redirect }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) return <Navigate to="/transactions/expenses" />;
  return component;
};

export default RestrictedRoute;
