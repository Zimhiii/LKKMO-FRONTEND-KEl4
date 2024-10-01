import React from "react";
import Content from "../Components/CategoryComponents/Content";

export default function CategoryPage() {
  document.title = "CategoryPage";
  return (
    <div>
        <div className="flex flex-col items-center text-center bg-[#D9D9D9] pt-[86px] pb-[64px] rounded-b-[50px]">
            <h1 className="font-cerotta text-[#BB8360] text-[39px] font-bold">SEWA COSPLAY IMPIANMU DI SINI, SIAP TAMPIL MEMUKAU!</h1>
            <p className="font-montserrat text-[20px] mt-[24px]">RentUrStyle menyediakan beberapa katergori kostum yang bisa anda pilih. <br />
            Sesuaikan kategori dengan kebutuhan dan hobby anda!</p>
        </div>
        <div className="">
            <p className="font-montserrat text-[14px] ml-[39px]">
                <span className="text-[#666666]">Kategori{'>'}</span> Cosplay</p>
            <div className="px-[116px]">
                <h1 className="font-cerotta text-[61px] text-center">Cosplay</h1>
                <Content subcategory="anime"/>
                <Content subcategory="comic"/>
                <Content subcategory="game"/>
            </div>
        </div>
    </div>
  );
}
