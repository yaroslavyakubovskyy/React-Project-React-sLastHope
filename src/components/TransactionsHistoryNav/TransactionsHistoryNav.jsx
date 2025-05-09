import { Link } from "react-router-dom";

const TransactionsHistoryNav = () => {
  return (
    <nav className="transactions-nav">
      <Link to="/transactions/history/expense" className="nav-link">
        All Expense
      </Link>
      <Link to="/transactions/history/income" className="nav-link">
        All Income
      </Link>
    </nav>
  );
};

export default TransactionsHistoryNav;
