import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-4/12 min-h-screen bg-[#BB8360] text-white font-inter">
      <h1 className="text-[24px] my-[24px] px-[8px] font-semibold">Admin</h1>
      <div className="self-start  flex flex-col">
        <Link className="py-[11px] px-[20px] text-[14px] hover:bg-[#8d6349]">
          Tambah Kategori
        </Link>
        <Link className="py-[11px] px-[20px] text-[14px] hover:bg-[#8d6349]">
          Edit Produk
        </Link>
        <Link className="py-[11px] px-[20px] text-[14px] hover:bg-[#8d6349]">
          Manajemen Akun
        </Link>
      </div>
    </div>
  );
}
