import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export default function Sidebar() {
  return (
    <div className="w-full h-full py-[24px] bg-[#BB8360] text-white font-inter">
      <h1 className="text-[24px] mb-[24px] px-[10px] font-semibold">Admin</h1>
      <div className="self-start  flex flex-col">
        <Link
          to="/"
          className="py-[11px] px-[10px] text-[18px] hover:bg-[#8d6349] flex justify-start items-center gap-2 mb-3 "
        >
          <BiArrowBack />
          <div>Dashboard</div>
        </Link>
        <Link
          to={"daftarcategory"}
          className="py-[11px] px-[20px] text-[14px] hover:bg-[#8d6349]"
        >
          Kategori
        </Link>

        <Link
          to="daftarproduk"
          className="py-[11px] px-[20px] text-[14px] hover:bg-[#8d6349]"
        >
          Produk
        </Link>
        {/* <Link
          to="manajemenakun"
          className="py-[11px] px-[20px] text-[14px] hover:bg-[#8d6349]"
        >
          Manajemen Akun
        </Link> */}
        <Link
          to="daftarorder"
          className="py-[11px] px-[20px] text-[14px] hover:bg-[#8d6349]"
        >
          Transaksi
        </Link>
        {}
      </div>
    </div>
  );
}
