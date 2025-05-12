import { useState, useRef, useEffect } from "react";
import s from "./CustomSelect.module.scss";

const options = [
  { value: "uah", label: "₴ UAH" },
  { value: "usd", label: "$ USD" },
  { value: "eur", label: "€ EUR" },
];

const CustomSelect = ({ value, onChange, onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const current = options.find((opt) => opt.value === value);
  const toggleDropdown = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle?.(newState);
  };
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
      <div className={s["custom-select__selected"]} onClick={toggleDropdown}>
        {current?.label}
      </div>
      {isOpen && (
        <ul
          className={`${s["custom-select__dropdown"]} ${
            isOpen ? s["custom-select__dropdown--open"] : ""
          }`}
        >
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`${s["custom-select__option"]} ${
                opt.value === value ? s["custom-select__option--active"] : ""
              }`}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
                onToggle?.(false);
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
