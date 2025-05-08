import TransactionForm from "../../components/TransactionForm/TransactionForm";
import { TransactionsTotalAmount } from "../../components/TransactionsTotalAmount/TransactionsTotalAmount";
import { TransactionsChart } from "../../components/TransactionsChart/TransactionsChart.jsx";

const MainTransactionsPage = () => {
  return (
    <div>
      <TransactionsTotalAmount />
      <TransactionsChart />
      <TransactionForm />
    </div>
  );
};

export default MainTransactionsPage;
