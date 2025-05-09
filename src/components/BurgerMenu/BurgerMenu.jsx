import TransactionsHistoryNav from "../TransactionsHistoryNav/TransactionsHistoryNav";
import UserBarBtn from "../UserBarBtn/UserBarBtn";

const BurgerMenu = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <div>
      <div className="burger-menu">
        <button onClick={handleClose}>Close</button>
        <UserBarBtn />
        <TransactionsHistoryNav />
      </div>
    </div>
  );
};

export default BurgerMenu;
