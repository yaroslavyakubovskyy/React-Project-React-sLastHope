import { useDispatch, useSelector } from "react-redux";
import s from "./TransactionsHistoryPage.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { TransactionsTotalAmount } from "../../components/TransactionsTotalAmount/TransactionsTotalAmount";
import TransactionsList from "../../components/TransactionsList/TransactionsList";
import TransactionsSearchTools from "../../components/TransactionsSearchTools/TransactionsSearchTools";
import {
  fetchExpenses,
  fetchIncomes,
} from "../../redux/transactions/operations";
import {
  selectIsLoading,
  selectIsRefreshing,
  selectIsToken,
} from "../../redux/transactions/selectors";
import { filterTransactions } from "../../redux/transactions/slice";
import clsx from "clsx";

const TransactionsHistoryPage = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const isRefreshing = useSelector(selectIsRefreshing);
  const isToken = useSelector(selectIsToken);

  const { transactionsType } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    if (isRefreshing || !isToken) return;

    if (transactionsType === "incomes") {
      dispatch(fetchIncomes(controller.signal));
    } else dispatch(fetchExpenses(controller.signal));
    return () => {
      controller.abort();
    };
  }, [dispatch, isRefreshing, isToken, transactionsType]);

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    dispatch(filterTransactions(value));
  };

  return (
    <div className={s.mainWrapper}>
      <h3 className={s.title}>All Income</h3>
      <p className={s.description}>
        Track and celebrate every bit of earnings effortlessly! Gain insights
        into your total revenue in a snap.
      </p>
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
