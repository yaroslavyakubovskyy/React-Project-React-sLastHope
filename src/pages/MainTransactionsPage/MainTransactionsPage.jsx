import TransactionForm from "../../components/TransactionForm/TransactionForm";
import { TransactionsTotalAmount } from "../../components/TransactionsTotalAmount/TransactionsTotalAmount";
import { TransactionsChart } from "../../components/TransactionsChart/TransactionsChart.jsx";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MainTransactionsPage = () => {
  const navigate = useNavigate();
  const selectedType = useSelector((state) => state.transactions.selectedType);

  useEffect(() => {
    navigate(`/transactions/${selectedType}`);
  }, [selectedType, navigate]);

  return (
    <>
      <TransactionsTotalAmount />
      <TransactionsChart />
      <TransactionForm transaction={null} isModal={false} />
    </>
  );
};

export default MainTransactionsPage;
