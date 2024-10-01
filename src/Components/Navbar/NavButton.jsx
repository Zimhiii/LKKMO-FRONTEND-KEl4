import React from "react";
import { Link } from "react-router-dom";

export default function NavButton() {
  return (
    <div className="hidden md:block">
      <div className="flex gap-2 font-montserrat ">
        <Link
          to="/login"
          className="bg-[#BB8360] py-[5px] px-[40px] text-[#000000] rounded-[10px]"
        >
          Masuk
        </Link>
        <Link
          to="/signup"
          className="border border-[#BB8360] py-[5px] px-[40px] text-[#000000] rounded-[10px]"
        >
          Daftar
        </Link>
      </div>
    </div>
  );
}
