import React from "react";
// import s from "./TransactionForm.module.css";

const CustomInput = React.forwardRef(({ value, onClick, placeholder }, ref) => (
  <input
    onClick={onClick}
    ref={ref}
    value={value || ""}
    placeholder={placeholder}
    readOnly
  />
));

export default CustomInput;
