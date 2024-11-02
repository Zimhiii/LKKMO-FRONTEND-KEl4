import React, { forwardRef } from "react";

const InputSetting = forwardRef(
  ({ type, placeholder, name, onKeyDown, onChange, value, className }, ref) => {
    return (
      <div className="mb-2 w-full">
        <label
          htmlFor={name}
          className={`block ml-1 text-[15px] md:text-[20px] font-monserrat ${className}`}
        >
          {name} <span className="text-red-500">*</span>
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className={` rounded-[4px] text-[12px] md:text-[16px] py-1 px-1 md:py-2 md:px-4 w-full active:bg-[#D9D9D9] ring-1 ring-[#000000] placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-[10px] md:placeholder:text-[16px] placeholder:italic focus:outline-black ${className}`}
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

export default InputSetting;
