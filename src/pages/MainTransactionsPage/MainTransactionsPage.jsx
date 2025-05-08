import TransactionForm from "../../components/TransactionForm/TransactionForm";
import { TransactionsTotalAmount } from "../../components/TransactionsTotalAmount/TransactionsTotalAmount";

const MainTransactionsPage = () => {
  return (
    <div>
      <TransactionsTotalAmount />
      <TransactionForm />
    </div>
  );
};

export default MainTransactionsPage;
