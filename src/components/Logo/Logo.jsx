import { Link } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const Logo = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Link to={isLoggedIn ? "/transactions/expenses" : "/"} className="logo">
      <p>ExpenseTracker</p>
    </Link>
  );
};

export default Logo;
