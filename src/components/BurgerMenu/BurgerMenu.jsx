import { useSelector } from "react-redux";
import TransactionsHistoryNav from "../TransactionsHistoryNav/TransactionsHistoryNav";
import UserBarBtn from "../UserBarBtn/UserBarBtn";
import s from "./BurgerMenu.module.css";
const BurgerMenu = ({ onOpenModal, onClose }) => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div
      className={s.backdrop}
      onClick={(e) => e.target.classList.contains(s.backdrop) && onClose()}
    >
      <div className={s.burgerMenu}>
        <button onClick={onClose} className={s.closeBtn}>
          Close
        </button>
        <UserBarBtn user={user} onOpenModal={onOpenModal} />
        <TransactionsHistoryNav />
      </div>
    </div>
  );
};

export default BurgerMenu;
