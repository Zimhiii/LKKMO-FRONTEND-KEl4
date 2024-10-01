import React, { forwardRef } from "react";

const InputLogin = forwardRef(
  ({ type, placeholder, name, onKeyDown, classname = "" }, ref) => {
    return (
      <div className="mb-2">
        <label htmlFor={name} className={`block ml-2 text-lg ${classname}`}>
          {name}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className="bg-[#D9D9D9] rounded-xl text-sm py-2 px-2 w-full active:bg-[#D9D9D9] focus:outline-slate-400"
          id={name}
          ref={ref}
          onKeyDown={onKeyDown}
        />
      </div>
    );
  }
);

export default InputLogin;
