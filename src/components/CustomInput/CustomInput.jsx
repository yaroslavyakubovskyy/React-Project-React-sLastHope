import React from "react";

const CustomInput = React.forwardRef(
  (
    {
      value,
      onClick,
      onChange,
      placeholder,
      readOnly,
      icon: IconComponent,
      classNames = {},
    },
    ref
  ) => (
    <div className={classNames.wrapper || ""} onClick={onClick}>
      <input
        type="text"
        ref={ref}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        className={classNames.input || ""}
      />
      {IconComponent && <IconComponent className={classNames.icon || ""} />}
    </div>
  )
);

export default CustomInput;
