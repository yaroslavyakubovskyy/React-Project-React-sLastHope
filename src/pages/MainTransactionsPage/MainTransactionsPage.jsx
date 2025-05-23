import TransactionForm from "../../components/TransactionForm/TransactionForm";
import { TransactionsTotalAmount } from "../../components/TransactionsTotalAmount/TransactionsTotalAmount";
import { TransactionsChart } from "../../components/TransactionsChart/TransactionsChart.jsx";

import s from "./MainTransactionsPage.module.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectSelectedType } from "../../redux/transactions/selectors.js";

const MainTransactionsPage = () => {
  const navigate = useNavigate();
  const selectedType = useSelector(selectSelectedType);

  useEffect(() => {
    navigate(`/transactions/${selectedType}`);
  }, [selectedType, navigate]);

  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__text}>
        <p className={s.header}>Expense Log</p>
        <p className={s.text}>
          Capture and organize every penny spent with ease! A clear view of your
          financial habits at your fingertips.
        </p>
      </div>
      <TransactionsTotalAmount />
      <TransactionForm transaction={null} isModal={false} />
      <TransactionsChart />
    </div>
  );
};

export default MainTransactionsPage;
