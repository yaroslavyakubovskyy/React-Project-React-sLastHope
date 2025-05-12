import { useState, useRef, useEffect } from "react";
import s from "./CustomSelect.module.scss";

const options = [
  { value: "uah", label: "UAH" },
  { value: "usd", label: "USD" },
  { value: "eur", label: "EUR" },
];

const CustomSelect = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const current = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={s["custom-select"]} ref={wrapperRef}>
      <div
        className={s["custom-select__selected"]}
        onClick={() => setIsOpen(!isOpen)}
      >
        {current?.label}
      </div>
      {isOpen && (
        <ul className={s["custom-select__dropdown"]}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`${s["custom-select__option"]} ${
                opt.value === value ? s["custom-select__option--active"] : ""
              }`}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
