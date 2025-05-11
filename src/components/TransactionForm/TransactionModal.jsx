import Modal from "react-modal";
import TransactionForm from "./TransactionForm";
import s from "./TransactionModal.module.css";

Modal.setAppElement("#root");

const TransactionModal = ({ isOpen, onClose, transaction }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Edit Transaction"
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div className={s.modalContent}>
        <TransactionForm
          transaction={transaction}
          onClose={onClose}
          isModal={true}
        />
      </div>
    </Modal>
  );
};

export default TransactionModal;
