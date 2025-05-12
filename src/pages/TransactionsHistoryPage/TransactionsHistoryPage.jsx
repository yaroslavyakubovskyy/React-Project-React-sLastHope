import { useDispatch, useSelector } from "react-redux";
import s from "./TransactionsHistoryPage.module.css";
import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TransactionsTotalAmount } from "../../components/TransactionsTotalAmount/TransactionsTotalAmount";
import TransactionsList from "../../components/TransactionsList/TransactionsList";
import TransactionsSearchTools from "../../components/TransactionsSearchTools/TransactionsSearchTools";

import {
  selectIsRefreshing,
  selectIsToken,
} from "../../redux/transactions/selectors";
import { filterTransactions } from "../../redux/transactions/slice";
import clsx from "clsx";
import { getTransactions } from "../../redux/transactions/operations";
import { fetchCurrentUser } from "../../redux/user/operations";

const TransactionsHistoryPage = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const isRefreshing = useSelector(selectIsRefreshing);
  const isToken = useSelector(selectIsToken);

  const { transactionsType } = useParams();

  useEffect(() => {
    if (isRefreshing || !isToken) return;

    dispatch(getTransactions({ type: transactionsType }));
    dispatch(fetchCurrentUser());
  }, [dispatch, isRefreshing, isToken, transactionsType]);

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    dispatch(filterTransactions(value));
  };

  const isValidAdress =
    transactionsType === "incomes" || transactionsType === "expenses";

  const pageDescription = {
    incomes: (
      <>
        <h3 className={s.title}>All Income</h3>
        <p className={s.description}>
          Track and celebrate every bit of earnings effortlessly! Gain insights
          into your total revenue in a snap.
        </p>
      </>
    ),
    expenses: (
      <>
        <h3 className={s.title}>All Expenses</h3>
        <p className={s.description}>
          View and manage every transaction seamlessly! Your entire financial
          landscape, all in one place.
        </p>
      </>
    ),
  };

  return (
    <div className={s.mainWrapper}>
      {!isValidAdress && <Navigate to="/transactions/history/incomes" />}
      {pageDescription[transactionsType]}
      <TransactionsTotalAmount />
      <div className={s.trasactionsWrapper}>
        <TransactionsSearchTools
          searchInput={searchInput}
          handleSearchInput={handleSearchInput}
        />
        <TransactionsList />
      </div>
    </div>
  );
};

export default TransactionsHistoryPage;
