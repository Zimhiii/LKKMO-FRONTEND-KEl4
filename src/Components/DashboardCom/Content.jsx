import React from "react";
import CardItem from "../All/CardItem";

export default function Content({ category = "Koleksi" }) {
  return (
    <div className="flex flex-col items-center mb-[44px] md:mb-[84px]">
      <h1 className="font-cerotta text-[25px] mb-5 md:text-[50px]">
        {category}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-[100px]">
        <CardItem />
        <CardItem />
        <CardItem classname="hidden md:block" />
      </div>
      <button className="ring-1 ring-[#BB8360] text-[14px] px-4 py-2 rounded-lg mt-5">
        Lihat Semua
      </button>
    </div>
  );
}
