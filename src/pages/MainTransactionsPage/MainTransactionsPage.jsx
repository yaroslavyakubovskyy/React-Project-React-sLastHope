import TransactionForm from "../../components/TransactionForm/TransactionForm";

const MainTransactionsPage = () => {
  return (
    <div>
      <TransactionForm transaction={null} isModal={false} />
    </div>
  );
};

export default MainTransactionsPage;
