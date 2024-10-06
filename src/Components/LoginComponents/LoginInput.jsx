import React, { forwardRef } from "react";

const InputLogin = forwardRef(
  (
    { type, placeholder, name, onKeyDown, onChange, value, className = "" },
    ref
  ) => {
    return (
      <div className="mb-2">
        <label htmlFor={name} className={`block ml-2 ${className}`}>
          {name}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className={`bg-[#D9D9D9] rounded-xl py-2 px-2 w-full active:bg-[#D9D9D9] focus:outline-slate-400 ${className}`}
          id={name}
          ref={ref}
          onKeyDown={onKeyDown}
          onChange={onChange} // Mendukung onChange untuk input nilai
          value={value} // Mendukung value untuk kontrol input
        />
      </div>
    );
  }
);

export default InputLogin;
