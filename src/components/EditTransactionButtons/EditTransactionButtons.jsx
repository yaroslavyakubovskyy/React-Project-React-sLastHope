import { useDispatch } from "react-redux";
import s from "./EditTransactionButtons.module.css";
import { useParams } from "react-router-dom";
import { deleteTransaction } from "../../redux/transactions/operations";
import { FiEdit2 } from "react-icons/fi";
import { PiTrashLight } from "react-icons/pi";
import { openDeleteModal } from "../../redux/transactions/slice";

const EditTransactionButtons = ({ transaction, onEditClick }) => {
  const { transactionsType } = useParams();
  const dispatch = useDispatch();

  const handleDeleteBtn = (_id) => {
    dispatch(openDeleteModal(_id));
  };

  return (
    <div className={s.buttonsWrapper}>
      <button
        type="button"
        className={s.editBtn}
        onClick={() => onEditClick(transaction)}
      >
        <FiEdit2 className={s.editIcon} />{" "}
        <span className={s.editText}>Edit</span>
      </button>
      <button
        type="button"
        className={s.deletetBtn}
        onClick={() => handleDeleteBtn(transaction._id)}
      >
        <PiTrashLight className={s.deletIcon} />
        <span className={s.deleteText}>Delete</span>
      </button>
    </div>
  );
};

export default EditTransactionButtons;
