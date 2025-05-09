import React from "react";
import s from "./TransactionForm.module.css";

const CustomInput = React.forwardRef(
  ({ value, onClick, placeholder, icon: IconComponent }, ref) => (
    <div className={s["t-input-wrapper"]} onClick={onClick}>
      <input
        type="text"
        ref={ref}
        value={value || ""}
        placeholder={placeholder}
        readOnly
        className={s["t-input"]}
      />
      {IconComponent && <IconComponent className={s["t-icon"]} />}
    </div>
  )
);

export default CustomInput;
