import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors.js";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) return <Navigate to="/" />;
  return children;
};

export default PrivateRoute;
