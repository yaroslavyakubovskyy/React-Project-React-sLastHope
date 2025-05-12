import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";

import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Icon } from "../Icon/Icon";
import s from "./Logo.module.css";

const Logo = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Link
      to={isLoggedIn ? "/transactions/expenses" : "/"}
      className={clsx(isLoggedIn ? s.logo : s.guestLogo)}
    >
      <span className={s.logoWrap}>
        <Icon
          name="default"
          className={s.bgImageWrapper__iconItem0}
          size="100%"
        />
      </span>
      ExpenseTracker
    </Link>
  );
};

export default Logo;
