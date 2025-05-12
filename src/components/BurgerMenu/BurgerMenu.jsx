// import { useSelector } from "react-redux";
// import TransactionsHistoryNav from "../TransactionsHistoryNav/TransactionsHistoryNav";
// import UserBarBtn from "../UserBarBtn/UserBarBtn";
// import s from "./BurgerMenu.module.css";
// import clsx from "clsx";
// import { Icon } from "../Icon/Icon";
// const BurgerMenu = ({
//   onOpenModal,
//   onClose,
//   isBurgerOpen,
//   onOpenLogoutModal,
// }) => {
//   const user = useSelector((state) => state.auth.user);
//   const handleOpenModal = () => {
//     onOpenModal();
//     onClose();
//   };
//   return (
//     <div
//       className={clsx(
//         s.burgerMenuBackdrop,
//         isBurgerOpen ? s.burgerMenuOpen : s.burgerMenuClose
//       )}
//       onClick={(e) => e.target === e.currentTarget && onClose()}
//     >
//       <div className={s.burgerMenu}>
//         <div className={s.burgerCloseUserBtnBar}>
//           <button onClick={onClose} className={s.closeBtn}>
//             <Icon name="close" className={s.burgerClose} size="100%" />
//           </button>
//           <UserBarBtn
//             user={user}
//             onOpenModal={handleOpenModal}
//             onOpenLogoutModal={onOpenLogoutModal}
//           />
//         </div>
//         <div className={s.transactionsHistoryNavCont}>
//           <TransactionsHistoryNav onNavigate={onClose} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BurgerMenu;
import { useSelector } from "react-redux";
import TransactionsHistoryNav from "../TransactionsHistoryNav/TransactionsHistoryNav";
import UserBarBtn from "../UserBarBtn/UserBarBtn";
import s from "./BurgerMenu.module.css";
import clsx from "clsx";
import { Icon } from "../Icon/Icon";

const BurgerMenu = ({
  onOpenModal,
  onClose,
  isBurgerOpen,
  onOpenLogoutModal,
}) => {
  const user = useSelector((state) => state.auth.user);

  const handleOpenModal = () => {
    onOpenModal();
    onClose();
  };

  return (
    <div
      className={clsx(
        s.burgerMenuBackdrop,
        isBurgerOpen ? s.burgerMenuOpen : s.burgerMenuClose
      )}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className={s.burgerMenu}>
        <div className={s.burgerCloseUserBtnBar}>
          <button onClick={onClose} className={s.closeBtn}>
            <Icon name="close" className={s.burgerClose} size="100%" />
          </button>
          <UserBarBtn
            user={user}
            onOpenModal={handleOpenModal}
            onOpenLogoutModal={onOpenLogoutModal}
          />
        </div>
        <div className={s.transactionsHistoryNavCont}>
          <TransactionsHistoryNav onNavigate={onClose} />
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
