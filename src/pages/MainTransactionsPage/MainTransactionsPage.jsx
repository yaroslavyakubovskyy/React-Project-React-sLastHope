import TransactionForm from "../../components/TransactionForm/TransactionForm";
import { TransactionsTotalAmount } from "../../components/TransactionsTotalAmount/TransactionsTotalAmount";
import { TransactionsChart } from "../../components/TransactionsChart/TransactionsChart.jsx";

const MainTransactionsPage = () => {
  return (

    <>
      <TransactionsTotalAmount />
      <TransactionsChart />
      <TransactionForm transaction={null} isModal={false} />
    </>
  );
};

export default MainTransactionsPage;
