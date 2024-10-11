import React, { forwardRef } from "react";

const InputTambahAkun = forwardRef(
  (
    {
      type,
      placeholder,
      name,
      onKeyDown,
      onChange,
      value = "",
      className = "",
    },
    ref
  ) => {
    return (
      <div className="mb-2 w-full">
        <label
          htmlFor={name}
          className={`block ml-1 text-[14px]  font-inter ${className}`}
        >
          {name}
        </label>
        <input
          type={type}
          // value={value}
          placeholder={placeholder}
          className={` rounded-[4px] text-[12px] md:text-[16px] py-1 px-1 md:py-2 md:px-4 w-full active:bg-[#D9D9D9] ring-1 ring-[#CBD5E1] placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-[10px] md:placeholder:text-[16px]  focus:outline-black ${className}`}
          id={name}
          ref={ref}
          onKeyDown={onKeyDown}
          // onChange={onChange} // Mendukung onChange untuk input nilai
        />
      </div>
    );
  }
);

export default InputTambahAkun;
