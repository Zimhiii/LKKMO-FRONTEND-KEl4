import React from "react";

import { useParams } from "react-router-dom";
import CardItem from "../Components/All/CardItem";
import Content from "../Components/DashboardCom/Content";

export default function SubCategoryPage() {
  const { subcategory } = useParams();
  document.title = "Category - " + subcategory;
  return (
    <div>
      <div className="flex flex-col items-center text-center bg-[#D9D9D9] pb-[25px] pt-[25px] md:pt-[86px] md:pb-[64px] rounded-b-[41px] md:rounded-b-[50px] shadow-lg shadow-zinc-400 px-[35px]">
        <h1 className="font-cerotta text-[#BB8360] text-[12px] md:text-[39px] font-bold">
          SEWA COSPLAY IMPIANMU DI SINI, SIAP TAMPIL MEMUKAU!
        </h1>
        <p className="font-montserrat text-[9px] md:text-[20px] mt-[24px]">
          RentUrStyle menyediakan beberapa katergori kostum yang bisa anda
          pilih. <br className="hidden md:block" />
          Sesuaikan kategori dengan kebutuhan dan hobby anda!
        </p>
      </div>
      <div className="">
        <p className="font-montserrat text-[7px] md:text-[14px] ml-[12px] mt-[5px] md:ml-[39px]">
          <span className="text-[#666666]">Kategori{">"}</span>{" "}
          <span className="text-[#666666]">Cosplay {"> "}</span>{" "}
          <span className="">{subcategory}</span>
        </p>
        <div className="px-[116px]">
          <h1 className="font-cerotta text-[23px] md:text-[61px] text-center">
            {subcategory}
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center mb-[44px] md:mb-[84px]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-[100px]">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>

      {/* <div className="grid grid-cols-2  md:grid-cols-3 gap-3 md:gap-[100px]">
        <CardItem />
        <CardItem />
        <CardItem classname="hidden md:block" />
      </div> */}
    </div>
  );
}
