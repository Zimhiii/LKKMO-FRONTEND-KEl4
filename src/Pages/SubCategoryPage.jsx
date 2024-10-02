import React from "react";
import Content from "../Components/CategoryComponents/Content";
import { useParams } from "react-router-dom";

export default function SubCategoryPage() {
  const { subcategory } = useParams();
  document.title = "subCategoryPage - " + subcategory;
  return (
    <div>
      <div className="flex flex-col items-center text-center bg-[#D9D9D9] pt-[86px] pb-[64px] rounded-b-[50px]">
        <h1 className="font-cerotta text-[#BB8360] text-[39px] font-bold">
          SEWA COSPLAY IMPIANMU DI SINI, SIAP TAMPIL MEMUKAU!
        </h1>
        <p className="font-montserrat text-[20px] mt-[24px]">
          RentUrStyle menyediakan beberapa katergori kostum yang bisa anda
          pilih. <br />
          Sesuaikan kategori dengan kebutuhan dan hobby anda!
        </p>
      </div>
      <div className="">
        <p className="font-montserrat text-[14px] ml-[39px]">
          <span className="text-[#666666]">Kategori{">"}</span> Cosplay {"> "}{" "}
          {subcategory}
        </p>
        <div className="px-[116px]">
          <h1 className="font-cerotta text-[61px] text-center">
            {subcategory}
          </h1>
        </div>
      </div>
    </div>
  );
}
