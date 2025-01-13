import React, { useId } from "react";

function Select({ options, label, className = "", ...props }) {
  const id = useId();
  return (
    <div className="">
      {label && <lable htmlFor={id}>{label}</lable>}
      <select
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-200 w-full ${className}`}
        id={id}
        {...props}
        ref={ref}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
