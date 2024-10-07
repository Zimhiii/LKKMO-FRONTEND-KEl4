import React, { forwardRef } from "react";

const Select = forwardRef(
  ({ name, options = [], onChange, value = "", className = "" }, ref) => {
    return (
      <div className="mb-2 w-full">
        <label
          htmlFor={name}
          className={`block ml-1 text-[14px] font-inter ${className}`}
        >
          {name}
        </label>
        <select
          className={`rounded-[4px] text-[12px] md:text-[16px] py-1 px-1 md:py-2 md:px-4 w-full active:bg-[#D9D9D9] ring-1 ring-[#CBD5E1] bg-white placeholder:text-[#000000] placeholder:text-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
          id={name}
          ref={ref}
          onChange={onChange}
          value={value}
        >
          <option value="" disabled>
            Choose an option
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Select;
