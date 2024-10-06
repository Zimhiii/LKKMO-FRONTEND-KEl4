import React from "react";
import { Outlet, useParams } from "react-router-dom";

export default function CategoryLayout() {
  const { category, subcategory } = useParams(); // Destructuring untuk params

  // Tentukan mana yang harus ditampilkan di h1
  const pageTitle = subcategory || category; // Tampilkan subcategory jika ada, jika tidak tampilkan category

  return (
    <div>
      <div className="flex flex-col items-center text-center bg-[#D9D9D9] pb-[25px] pt-[25px] md:pt-[86px] md:pb-[64px] rounded-b-[41px] md:rounded-b-[50px] shadow-lg shadow-zinc-400 px-[35px]">
        <h1 className="font-cerotta text-[#BB8360] text-[12px] md:text-[39px] font-medium">
          SEWA COSPLAY IMPIANMU DI SINI, SIAP TAMPIL MEMUKAU!
        </h1>
        <p className="font-montserrat text-[9px] md:text-[20px] mt-[24px]">
          RentUrStyle menyediakan beberapa katergori kostum yang bisa anda
          pilih. <br className="hidden md:block" />
          Sesuaikan kategori dengan kebutuhan dan hobby anda!
        </p>
      </div>

      {/* Breadcrumb dengan params */}
      <p className="font-montserrat text-[8px] mt-[4px] md:text-[14px] ml-[12px] md:ml-[39px]">
        <span className="text-[#666666]">Kategori{">"}</span> {category}
        {subcategory && ` > ${subcategory}`}
      </p>

      {/* h1 untuk menampilkan title berdasarkan params terakhir */}
      <h1 className="container-layout font-cerotta text-[23px] md:text-[61px] text-center px-[116px]">
        {pageTitle}
      </h1>

      <Outlet />
    </div>
  );
}
