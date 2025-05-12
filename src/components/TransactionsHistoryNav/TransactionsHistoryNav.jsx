// import clsx from "clsx";
import { Link } from "react-router-dom";
import s from "./TransactionsHistoryNav.module.css";
const TransactionsHistoryNav = ({ onNavigate }) => {
  return (
    <nav className={s.transactionsHistoryNav}>
      <Link
        to="/transactions/history/expenses"
        className={s.navLink}
        onClick={onNavigate}
      >
        All Expense
      </Link>
      <Link
        to="/transactions/history/incomes"
        className={s.navLink}
        onClick={onNavigate}
      >
        All Income
      </Link>
    </nav>
  );
};

export default TransactionsHistoryNav;
