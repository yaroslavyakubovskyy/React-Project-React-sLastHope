import { Link } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import s from "./Logo.module.css";
import { Icon } from "../Icon/Icon";
const Logo = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Link to={isLoggedIn ? "/transactions/expenses" : "/"} className="logo">
      <span>
        <Icon
          name="default"
          className={s.bgImageWrapper__iconItem0}
          size="28"
        />
      </span>
      <p>ExpenseTracker</p>
    </Link>
  );
};

export default Logo;
