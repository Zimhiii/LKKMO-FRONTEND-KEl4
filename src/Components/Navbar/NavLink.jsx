import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

export default function NavLink() {
  const navigate = useNavigate();

  const handleNavigate = (url) => {
    navigate(url);
  };
  return (
    <div className="hidden md:block">
      <div className="flex  text-[#736455] font-montserrat text-[20px] gap-4 ">
        <Link to="/" className="text-[20px] ">
          Beranda
        </Link>

        <div
          to="/category"
          typeof="button"
          className="relative  group cursor-pointer"
        >
          <div className="flex items-center justify-center">
            <p>Kategori</p>

            <FaCaretRight className="text-[25px] group-hover:rotate-90 transition-all duration-300" />
          </div>

          <div className="bg-[#D6D6D6]  text-[20px] ring-1 ring-slate-950 hidden absolute group-hover:flex group-hover:flex-col group-hover:gap-[2px]  shadow-md shadow-slate-400 w-[200px]">
            <Link
              to="/category/cosplay"
              className=" hover:bg-[#9e9e9e] py-[5px] px-[5px] "
            >
              <div className="flex justify-between items-center">
                <p>Cosplay</p>

                <FaCaretRight className="text-[25px] " />
              </div>
            </Link>{" "}
            <Link
              to="/category/carnaval"
              className="hover:bg-[#9e9e9e] py-[5px] px-[5px] "
            >
              <div className="flex justify-between items-center">
                <p>Carnaval</p>

                <FaCaretRight className="text-[25px] " />
              </div>
            </Link>{" "}
            <Link
              to="/category/AnotherCategory"
              className="hover:bg-[#9e9e9e] py-[5px] px-[5px] "
            >
              <div className="flex justify-between items-center">
                <p>Another Category</p>

                <FaCaretRight className="text-[25px] " />
              </div>
            </Link>
          </div>
        </div>
        <Link to="/aboutme" className="text-[20px]">
          Tentang Kami
        </Link>
      </div>
    </div>
  );
}
