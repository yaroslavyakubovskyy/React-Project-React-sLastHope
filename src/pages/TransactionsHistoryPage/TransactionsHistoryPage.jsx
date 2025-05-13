import { useDispatch, useSelector } from "react-redux";
import s from "./TransactionsHistoryPage.module.css";
import { Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { TransactionsTotalAmount } from "../../components/TransactionsTotalAmount/TransactionsTotalAmount";
import TransactionsList from "../../components/TransactionsList/TransactionsList";
import TransactionsSearchTools from "../../components/TransactionsSearchTools/TransactionsSearchTools";

import { getTransactions } from "../../redux/transactions/operations";
import { fetchCurrentUser } from "../../redux/user/operations";
import { setFilter } from "../../redux/transactions/slice";
import { selectIsRefreshing } from "../../redux/auth/selectors";

const TransactionsHistoryPage = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  const { transactionsType } = useParams();

  useEffect(() => {
    if (isRefreshing) return;

    dispatch(getTransactions({ type: transactionsType }));
    dispatch(fetchCurrentUser());
  }, [dispatch, isRefreshing, transactionsType]);

  const handleSearchInput = (e) => {
    const value = e.target.value;
    dispatch(setFilter(value));
  };

  const isValidAdress =
    transactionsType === "incomes" || transactionsType === "expenses";

  const pageDescription = {
    incomes: (
      <div className={s.titleWrapper}>
        <h3 className={s.title}>All Income</h3>
        <p className={s.description}>
          Track and celebrate every bit of earnings effortlessly! Gain insights
          into your total revenue in a snap.
        </p>
      </div>
    ),
    expenses: (
      <div className={s.titleWrapper}>
        <h3 className={s.title}>All Expenses</h3>
        <p className={s.description}>
          View and manage every transaction seamlessly! Your entire financial
          landscape, all in one place.
        </p>
      </div>
    ),
  };

  return (
    <div className={s.mainWrapper}>
      {!isValidAdress && <Navigate to="/transactions/history/incomes" />}
      <div className={s.infoWrapper}>
        {pageDescription[transactionsType]} <TransactionsTotalAmount />
      </div>

      <div className={s.trasactionsWrapper}>
        <TransactionsSearchTools handleSearchInput={handleSearchInput} />
        <TransactionsList />
      </div>
    </div>
  );
};

export default TransactionsHistoryPage;
