import TransactionForm from "../../components/TransactionForm/TransactionForm";
import { TransactionsTotalAmount } from "../../components/TransactionsTotalAmount/TransactionsTotalAmount";
import { TransactionsChart } from "../../components/TransactionsChart/TransactionsChart.jsx";
import s from "./MainTransactionsPage.module.scss";

const MainTransactionsPage = () => {
  return (
    <div className={s.wrapper}>
      <div>
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
