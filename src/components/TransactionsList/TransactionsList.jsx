import { useDispatch, useSelector } from "react-redux";
import s from "./TransactionsList.module.css";
import {
  selectFilteredTransactions,
  selectIsDeleteModalOpen,
  selectIsEditModalOpen,
  selectUserCurrecy,
} from "../../redux/transactions/selectors";
import clsx from "clsx";
import EditTransactionButtons from "../EditTransactionButtons/EditTransactionButtons";
import Modal from "react-modal";
import { useCallback } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const TransactionsList = () => {
  const dispatch = useDispatch();

  const transactions = useSelector(selectFilteredTransactions);
  const currency = useSelector(selectUserCurrecy);

  let isDeleteModalOpen = useSelector(selectIsDeleteModalOpen);
  let isEditModalOpen = useSelector(selectIsEditModalOpen);

  const closeDeleteModal = useCallback(() => {
    dispatch(closeDeleteModal());
  }, [dispatch]);
  return (
    <div className={s.tableWrapper}>
      {/* <div className={s.tableHeader}>
        <span className={clsx(s.category, s.title)}>Category</span>
        <span className={clsx(s.comment, s.title)}>Comment</span>
        <span className={clsx(s.date, s.title)}>Date</span>
        <span className={clsx(s.time, s.title)}>Time</span>
        <span className={clsx(s.sum, s.title)}>Sum</span>
      </div> */}
      <div className={s.tableInner}>
        <table className={s.table}>
          <thead>
            <tr>
              <th className={s.colCategory}>Category</th>
              <th className={s.colComment}>Comment</th>
              <th className={s.colDate}>Date</th>
              <th className={s.colTime}>Time</th>
              <th className={s.colSumm}>Sum</th>
              <th className={s.colActions}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions?.map((transaction) => (
              <tr key={transaction._id}>
                <td className={s.colCategory}>
                  {transaction.category.categoryName}
                </td>
                <td className={s.colComment}>{transaction.comment}</td>
                <td className={s.colDate}>{transaction.date}</td>
                <td className={s.colTime}>{transaction.time}</td>
                <td className={s.colSum}>
                  {transaction.sum}/{currency}
                </td>
                <td className={s.colActions}>
                  <EditTransactionButtons transaction={transaction} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={Boolean(isDeleteModalOpen)}
        onRequestClose={closeDeleteModal}
        style={customStyles}
        contentLabel={"transaction._id"}
      >
        <button type="button">Delete</button>
        <button type="button">Cancel</button>
      </Modal>
    </div>
  );
};

export default TransactionsList;
