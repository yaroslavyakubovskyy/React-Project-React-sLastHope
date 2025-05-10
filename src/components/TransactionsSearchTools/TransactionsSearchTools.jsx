import { useState } from "react";
import s from "./TransactionsSearchTools.module.css";
import DatePicker from "react-datepicker";
import "../../css/react-datepicker.css";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchExpensesByDate,
  fetchIncomesByDate,
} from "../../redux/transactions/operations";
import { LuCalendar } from "react-icons/lu";
import { format } from "date-fns";

const TransactionsSearchTools = ({ searchInput, handleSearchInput }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();
  const { transactionsType } = useParams();

  const handleDateSelect = (date) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    if (transactionsType === "incomes") {
      dispatch(fetchIncomesByDate(formattedDate));
    } else dispatch(fetchExpensesByDate(formattedDate));
    setSelectedDate(date);
    console.log(formattedDate);
  };
  return (
    <div>
      <input
        type="text"
        name="search"
        value={searchInput}
        onChange={handleSearchInput}
        className={s.searchInput}
        placeholder="Search for anything.."
      />
      <DatePicker
        showIcon
        icon={<LuCalendar />}
        toggleCalendarOnIconClick
        selected={selectedDate}
        onChange={(date) => handleDateSelect(date)}
        closeOnScroll={true}
        maxDate={new Date()}
        withPortal
        dateFormat="dd/MM/yyyy"
        className={s.dateInput}
      />
    </div>
  );
};

export default TransactionsSearchTools;
