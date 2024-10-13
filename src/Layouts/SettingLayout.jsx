import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdManageAccounts } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import { useAuthUserStore } from "../stores/authStore";

export default function SettingLayout() {
  const logout = useAuthUserStore((state) => state.logout);

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="p-[14px]">
      <h1 className="font-cerotta  text-[16px] md:text-[39px] font-medium mb-[10px]">
        Pengaturan
      </h1>
      <nav className="font-montserrat text-[12px] md:text-[24px] flex  justify-evenly gap-2 md:gap-5 px-5 py-4 shadow-md shadow-slate-400">
        <Link to="profileuser" className="flex items-center gap-2">
          <span>
            <MdManageAccounts className="text-[#545454]" />
          </span>
          <span>Akun</span>
        </Link>
        <Link to="passwordsetting" className="flex items-center gap-2">
          <span>
            <TbPasswordUser className="text-[#545454]" />
          </span>
          <span>Password</span>
        </Link>
        <Link
          onClick={() => {
            handleLogout();
          }}
          to="/"
          className="flex items-center gap-2"
        >
          <span>
            <MdLogout className="text-[#545454]" />
          </span>
          <span>Logout</span>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
