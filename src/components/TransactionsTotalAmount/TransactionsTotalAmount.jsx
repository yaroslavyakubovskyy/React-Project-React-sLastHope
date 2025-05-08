import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/slice";
import { getCurrencySymbol } from "../../utils/getCurrencySymbol";
import { s } from "./TransactionsTotalAmount.module.css";

export const TransactionsTotalAmount = () => {
  const { totalIncomes, totalExpenses, currency } = useSelector(selectUser);
  const currencySymbol = getCurrencySymbol(currency);

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        <li className={s.listItem}>
          <div className={s.iconContainer}>
            <Icon />
          </div>
          <div>
            <h3 className={s.amountTitle}>Total Income</h3>
            <p className={s.amountText}>
              {currencySymbol}
              {totalIncomes}
            </p>
          </div>
        </li>
        <li className={s.listItem}>
          <div className={s.iconContainer}>
            <Icon />
          </div>
          <div>
            <h3 className={s.amountTitle}>Total Expense</h3>
            <p className={s.amountText}>
              {currencySymbol}
              {totalExpenses}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};
