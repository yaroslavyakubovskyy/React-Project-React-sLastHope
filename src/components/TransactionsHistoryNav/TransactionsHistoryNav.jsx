// import clsx from "clsx";
import { Link } from "react-router-dom";
import s from "./TransactionsHistoryNav.module.css";
const TransactionsHistoryNav = () => {
  return (
    <nav className={s.transactionsHistoryNav}>
      <Link to="/transactions/history/expense" className={s.navLink}>
        All Expense
      </Link>
      <Link to="/transactions/history/income" className={s.navLink}>
        All Income
      </Link>
    </nav>
  );
};

export default TransactionsHistoryNav;
