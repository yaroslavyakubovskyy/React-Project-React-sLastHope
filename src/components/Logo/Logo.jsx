import { Link } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import s from "./Logo.module.css";
import { Icon } from "../Icon/Icon";
const Logo = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Link to={isLoggedIn ? "/transactions/expenses" : "/"} className={s.logo}>
      <span className={s.logoWrap}>
        <Icon
          name="default"
          className={s.bgImageWrapper__iconItem0}
          size="27"
        />
      </span>
      ExpenseTracker
    </Link>
  );
};

export default Logo;
