import { Icon } from "../Icon/Icon";
import s from "./LogoutConfirmModal.module.css";

const LogoutConfirmModal = ({ onConfirm, onCancel }) => {
  console.log("LogoutConfirmModal rendered");
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains(s.backdrop)) onCancel();
  };

  return (
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <button className={s.closeBtn} onClick={onCancel}>
          <Icon name="close" size="24" />
        </button>
        <p className={s.message}>Are you sure you want to log out?</p>
        <div className={s.buttons}>
          <button className={s.logoutBtn} onClick={onConfirm}>
            Log out
          </button>
          <button className={s.cancelBtn} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmModal;
