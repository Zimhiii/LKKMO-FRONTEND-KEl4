import React, { useRef, useState } from "react";
import EditAkun from "./EditAkun";
export default function FormEdit() {
  const phoneNumberRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const passwordRef = useRef(null);

  const handleKeyDown = (event, nextInputRef) => {
    if (event.key === "Enter") {
      event.preventDefault();
      nextInputRef.current.focus();
    }
  };

  return (
    <form action="" className="flex flex-col w-full  justify-center ">
      <h1 className="font-montserrat text-[20px] font-bold">Reset Password</h1>
      <EditAkun
        type="password"
        placeholder="Admin Kece Aja "
        name="Password Baru"
        onKeyDown={(event) => handleKeyDown(event, confirmPasswordRef)}
        ref={passwordRef}
      />
      <EditAkun
        type="password"
        placeholder="Admin Paling Kece"
        name="Konfirmasi Password"
        onKeyDown={(event) => handleKeyDown(event, null)}
        ref={confirmPasswordRef}
      />

      <div className="flex justify-end mt-5 ">
        <button
          type="submit"
          className="px-6 py-2  bg-[#BB8360] rounded-lg text-white font-medium text-[14px]  shadow-md shadow-slate-400"
        >
          Ubah Password
        </button>
      </div>
    </form>
  );
}
