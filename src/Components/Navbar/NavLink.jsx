import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";
import { useLoginStore } from "../../Store/stored";
import { useAuthUserStore } from "../../stores/authStore";

export default function NavLinkComponent() {
  const user = useAuthUserStore((state) => state.user);
  const { login, setLogin } = useLoginStore();
  const token = localStorage.getItem("token");

  // if (!user || user.role_id !== 2) {
  //   window.location.href = "/";
  // }
  useEffect(() => {
    if (token) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [token, setLogin]);
  return (
    <div className="hidden md:block">
      <div className="flex text-[#736455] font-montserrat text-[20px] gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-black border-b-2 border-black"
              : "text-[#736455] hover:text-black"
          }
        >
          Beranda
        </NavLink>
        {console.log("login 2", login)}

        <div className="relative group cursor-pointer">
          <div className="flex items-center justify-center">
            <p>Kategori</p>
            <FaCaretRight className="text-[25px] group-hover:rotate-90 transition-all duration-300" />
          </div>

          <div className="bg-[#D6D6D6] text-[20px] ring-1 ring-slate-950 hidden absolute z-99 group-hover:flex group-hover:flex-col group-hover:gap-[2px] shadow-md shadow-slate-400 w-[200px]">
            <NavLink
              to="/category/cosplay"
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-[#9e9e9e] py-[5px] px-[5px] text-black border-b-2 border-black"
                  : "hover:bg-[#9e9e9e] py-[5px] px-[5px] text-[#736455]"
              }
            >
              <div className="flex justify-between items-center">
                <p>Cosplay</p>
                <FaCaretRight className="text-[25px]" />
              </div>
            </NavLink>
            <NavLink
              to="/category/karnaval"
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-[#9e9e9e] py-[5px] px-[5px] text-black border-b-2 border-black"
                  : "hover:bg-[#9e9e9e] py-[5px] px-[5px] text-[#736455]"
              }
            >
              <div className="flex justify-between items-center">
                <p>Carnaval</p>
                <FaCaretRight className="text-[25px]" />
              </div>
            </NavLink>
            <NavLink
              to="/category/AnotherCategory"
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-[#9e9e9e] py-[5px] px-[5px] text-black border-b-2 border-black"
                  : "hover:bg-[#9e9e9e] py-[5px] px-[5px] text-[#736455]"
              }
            >
              <div className="flex justify-between items-center">
                <p>Another Category</p>
                <FaCaretRight className="text-[25px]" />
              </div>
            </NavLink>
          </div>
        </div>

        <NavLink
          to="/aboutme"
          className={({ isActive }) =>
            isActive
              ? "text-black border-b-2 border-black"
              : "text-[#736455] hover:text-black"
          }
        >
          Tentang Kami
        </NavLink>

        {user && user.role_id === 2 && (
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive
                ? "text-black border-b-2 border-black"
                : "text-[#736455] hover:text-black"
            }
          >
            AdminPage
          </NavLink>
        )}
      </div>
    </div>
  );
}
