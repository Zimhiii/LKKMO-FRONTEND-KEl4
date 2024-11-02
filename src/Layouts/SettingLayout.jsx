import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { MdManageAccounts } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import { useAuthUserStore } from "../stores/authStore";

export default function SettingLayout() {
  const logout = useAuthUserStore((state) => state.logout);
  useEffect(() => {
    document.title = "Settings";
  });

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="p-[14px]">
      <h1 className="font-cerotta text-[16px] md:text-[39px] font-medium mb-[10px]">
        Pengaturan
      </h1>
      <nav className="font-montserrat text-[12px] md:text-[24px] flex justify-evenly gap-2 md:gap-5 shadow-md shadow-slate-400">
        <NavLink
          to="profileuser"
          className={({ isActive }) =>
            `flex items-center gap-2 ${
              isActive
                ? "border-b-[2px] border-[#BB8360] text-[#BB8360] font px-5 py-4 "
                : "text-[#545454] px-5 py-4"
            }`
          }
        >
          <MdManageAccounts />
          <span>Akun</span>
        </NavLink>
        <NavLink
          to="passwordsetting"
          className={({ isActive }) =>
            `flex items-center gap-2 ${
              isActive
                ? "border-b-[2px] border-[#BB8360] text-[#BB8360] font px-5 py-4 "
                : "text-[#545454] px-5 py-4"
            }`
          }
        >
          <TbPasswordUser />
          <span>Password</span>
        </NavLink>
        <NavLink
          onClick={handleLogout}
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 ${
              isActive ? "text-blue-500 font-bold" : "text-[#545454]"
            }`
          }
        >
          <MdLogout />
          <span>Logout</span>
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
