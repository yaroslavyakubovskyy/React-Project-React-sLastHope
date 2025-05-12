import { useState } from "react";
import s from "./TransactionsSearchTools.module.css";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getTransactions } from "../../redux/transactions/operations";
import { LuCalendar } from "react-icons/lu";
import { format } from "date-fns";
import "./datePiker.css";
import CustomInput from "../CustomInput/CustomInput";

const TransactionsSearchTools = ({ searchInput, handleSearchInput }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();
  const { transactionsType } = useParams();

  const handleDateSelect = (date) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    formattedDate === "1970-01-01"
      ? dispatch(getTransactions({ type: transactionsType }))
      : dispatch(
          getTransactions({ type: transactionsType, date: formattedDate })
        );
    setSelectedDate(date);
    console.log(formattedDate);
  };
  return (
    <div className={s.searchWrapper}>
      <input
        type="text"
        name="search"
        value={searchInput}
        onChange={handleSearchInput}
        className={s.searchInput}
        placeholder="Search for anything.."
      />
      <DatePicker
        selected={selectedDate}
        onChange={(date) => handleDateSelect(date)}
        closeOnScroll={true}
        maxDate={new Date()}
        withPortal
        dateFormat="dd/MM/yyyy"
        locale="en-GB"
        customInput={
          <CustomInput
            icon={LuCalendar}
            classNames={{
              wrapper: s["h-input-wrapper"],
              input: s["h-input"],
              icon: s["h-icon"],
            }}
          />
        }
      />
    </div>
  );
};

export default TransactionsSearchTools;
