import TransactionsHistoryNav from "../TransactionsHistoryNav/TransactionsHistoryNav";
import UserBarBtn from "../UserBarBtn/UserBarBtn";

const BurgerMenu = () => {
  return (
    <div className="burger-menu">
      <UserBarBtn />
      <TransactionsHistoryNav />
    </div>
  );
};

export default BurgerMenu;
