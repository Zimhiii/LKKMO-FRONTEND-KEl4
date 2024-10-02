import React from "react";
import { Link } from "react-router-dom";

export default function NavLink() {
  return (
    <div className="hidden md:block">
      <div className="flex  text-[#736455] font-montserrat text-[20px] gap-4 ">
        <Link to="/" className="text-[20px] ">
          Beranda
        </Link>

        <Link to="/category" className="text-[20px]">
          Kategori
        </Link>
        <Link to="/" className="text-[20px]">
          Tentang Kami
        </Link>
      </div>
    </div>
  );
}
