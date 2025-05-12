import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

import { Chart } from "../PieChart/PieChart";
import { countCategories } from "../../utils/countCategories";
import {
  selectIsLoading,
  selectTransactions,
} from "../../redux/transactions/selectors.js";
import { selectIsLoadingUser, selectUser } from "../../redux/user/selectors.js";
import { fetchCurrentUser } from "../../redux/user/operations";
import { getTransactions } from "../../redux/transactions/operations";

import warningImg from "../../assets/no_data.jpeg";
import s from "./TransactionsChart.module.css";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner.jsx";
import { selectIsLoadingLogin } from "../../redux/auth/selectors.js";

export const TransactionsChart = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  const isLoading = useSelector(selectIsLoading);
  const isLoadingLogin = useSelector(selectIsLoadingLogin);
  const isLoadingUser = useSelector(selectIsLoadingUser);
  const { totalExpenses } = useSelector(selectUser);

  useEffect(() => {
    dispatch(getTransactions({ type: "expenses" }));
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (!transactions?.length || !totalExpenses) return;

    const expenses = transactions.filter(
      (transaction) => transaction.type === "expenses",
    );

    const categories = countCategories(expenses, totalExpenses);
    setCategoriesData(categories);
  }, [transactions, totalExpenses]);

  if (isLoading || isLoadingLogin || isLoadingUser)
    return (
      <div className={s.loaderWrapper}>
        <LoaderSpinner />
      </div>
    );

  if (transactions === null || categoriesData === null) return;

  if (!categoriesData.length) {
    return (
      <div className={s.warningWrapper}>
        <h2 className={s.warningTitle}>
          You don't have any expenses in this month.
        </h2>
        <img className={s.imgNoTransactions} src={warningImg} alt="No data" />
      </div>
    );
  }

  return (
    <div className={s.chartContainer}>
      <h3 className={s.title}>Expenses categories</h3>
      <div className={s.statsWrapper}>
        <div className={s.pieChartWrapper}>
          <Chart data={categoriesData} />
          <p className={s.chartDescr}>100%</p>
        </div>
        <ul className={`${s.list} scroll scrollA`}>
          {categoriesData.map((item, index) => (
            <li className={s.listItem} key={index}>
              <div
                className={s.wrapperMarker}
                style={{ backgroundColor: item.color }}
              ></div>
              <p className={s.itemDescr}>{item.name}</p>
              <p className={s.itemSpan}>{item.value}%</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
