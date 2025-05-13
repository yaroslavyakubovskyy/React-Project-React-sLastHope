import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsToken } from "../redux/auth/selectors.js";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isToken = useSelector(selectIsToken);
  if (!isLoggedIn && !isToken) return <Navigate to="/"/>;
  return children;
};

export default PrivateRoute;
