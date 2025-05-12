// // import clsx from "clsx";
// import { Link, NavLink } from "react-router-dom";
// import s from "./TransactionsHistoryNav.module.css";
// const TransactionsHistoryNav = ({ onNavigate }) => {
//   return (
//     <nav className={s.transactionsHistoryNav}>
//       <NavLink
//         to="/transactions/history/expenses"
//         className={({ isActive }) =>
//           isActive ? `${s.navLink} ${s.active}` : s.navLink
//         }
//         onClick={onNavigate}
//       >
//         All Expense
//       </NavLink>
//       <NavLink
//         to="/transactions/history/incomes"
//         className={({ isActive }) =>
//           isActive ? `${s.navLink} ${s.active}` : s.navLink
//         }
//         onClick={onNavigate}
//       >
//         All Income
//       </NavLink>
//     </nav>
//   );
// };

// export default TransactionsHistoryNav;
import { NavLink } from "react-router-dom";
import s from "./TransactionsHistoryNav.module.css";

const TransactionsHistoryNav = ({ onNavigate }) => {
  return (
    <nav className={s.transactionsHistoryNav}>
      <NavLink
        to="/transactions/history/expenses"
        className={({ isActive }) =>
          isActive ? `${s.navLink} ${s.active}` : s.navLink
        }
        onClick={onNavigate}
      >
        All Expense
      </NavLink>
      <NavLink
        to="/transactions/history/incomes"
        className={({ isActive }) =>
          isActive ? `${s.navLink} ${s.active}` : s.navLink
        }
        onClick={onNavigate}
      >
        All Income
      </NavLink>
    </nav>
  );
};

export default TransactionsHistoryNav;
