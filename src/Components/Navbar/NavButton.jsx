import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useLoginStore } from "../../Store/stored";
import { BiSolidCart } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export default function NavButton() {
  const { login } = useLoginStore();
  return (
    <div className="hidden md:block">
      {!login && (
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
      )}
      {login && (
        <div className="flex items-center gap-4 font-montserrat ">
          <NavLink
            to="/history"
            className={({ isActive }) =>
              isActive ? "text-[#BB8360]" : "text-black"
            }
          >
            <BiSolidCart size={30} />
          </NavLink>
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive
                ? "border border-[#BB8360] px-[4px] py-[4px] rounded-[10px] bg-gray-200 group"
                : "border border-[#000000] px-[4px] py-[4px] rounded-[10px]"
            }
          >
            <FaHeart
              className="text-black group-focus-within:text-[#BB8360]"
              size={20}
            />
          </NavLink>
          <NavLink
            to="/settinguser"
            className={({ isActive }) =>
              isActive ? "text-[#BB8360]" : "text-black"
            }
          >
            <CgProfile size={30} />
          </NavLink>
        </div>
      )}
    </div>
  );
}
