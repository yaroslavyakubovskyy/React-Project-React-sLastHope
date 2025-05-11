import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors.js";

const RestrictedRoute = ({ component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) return <Navigate to="/transactions/expenses" replace />;
  return component;
};

export default RestrictedRoute;
