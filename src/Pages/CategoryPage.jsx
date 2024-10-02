import React from "react";
import Content from "../Components/CategoryComponents/Content";
import { Outlet } from "react-router-dom";

export default function CategoryPage() {
  document.title = "CategoryPage";
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
      <div className="">
        <p className="font-montserrat text-[14px] ml-[39px]">
          <span className="text-[#666666]">Kategori{">"}</span> Cosplay
        </p>
        <div className="px-[116px]">
          <h1 className="font-cerotta text-[61px] text-center">Cosplay</h1>
          <Content subcategory="anime" />
          <Content subcategory="comic" />
          <Content subcategory="game" />
        </div>
      </div>
    </div>
  );
}
