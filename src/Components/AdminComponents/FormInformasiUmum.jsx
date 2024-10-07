import React, { useRef, useState } from "react";
import EditAkun from "./EditAkun";
export default function FormEdit() {
  const NameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const adressRef = useRef(null);
  const passwordRef = useRef(null);

  const handleKeyDown = (event, nextInputRef) => {
    if (event.key === "Enter") {
      event.preventDefault();
      nextInputRef.current.focus();
    }
  };

  return (
    <form action="" className="flex flex-col w-full  justify-center ">
      <h1 className="font-montserrat text-[20px] font-bold">Informasi Umum</h1>
      <EditAkun
        type="text"
        placeholder="your name"
        name="Nama"
        onKeyDown={(event) => handleKeyDown(event, emailRef)}
        ref={NameRef}
      />

      <EditAkun
        type="email"
        placeholder="example@gmail.com "
        name="Email"
        onKeyDown={(event) => handleKeyDown(event, passwordRef)}
        ref={emailRef}
      />
      <EditAkun
        type="password"
        placeholder="123456789 "
        name="password"
        onKeyDown={(event) => handleKeyDown(event, phoneNumberRef)}
        ref={passwordRef}
      />
      <EditAkun
        type="text"
        placeholder="+62.... "
        name="Nomor Handphone"
        onKeyDown={(event) => handleKeyDown(event, adressRef)}
        ref={phoneNumberRef}
      />
      <div className="mb-2 ">
        <label
          htmlFor="Alamat"
          className="block ml-1 text-[14px]  font-monserrat "
        >
          Alamat
        </label>
        <textarea
          placeholder="Jl. ..."
          className={` rounded-[4px] h-[80px] text-[12px] md:text-[16px] py-1 px-1 w-full active:bg-[#D9D9D9] ring-1 ring-[#C2C2C2] placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-[10px] placeholder:italic focus:outline-black `}
          id="Alamat"
          ref={adressRef}
          onKeyDown={(event) => handleKeyDown(event, null)}
          //   onChange={onChange} // Mendukung onChange untuk input nilai
          //   value={value} // Mendukung value untuk kontrol input
        />
      </div>
      <div className="flex justify-center mt-5 ">
        <button
          type="submit"
          className="px-6 py-2  bg-[#BB8360] rounded-lg text-white font-medium text-[14px]  shadow-md shadow-slate-400"
        >
          Simpan
        </button>
      </div>
    </form>
  );
}
