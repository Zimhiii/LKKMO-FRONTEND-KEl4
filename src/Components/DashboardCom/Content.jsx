import React from "react";
import CardItem from "../All/CardItem";
import { Link } from "react-router-dom";

export default function Content({ category = "Koleksi", children = " " }) {
  const urlcategory = category.toLowerCase();

  return (
    <div className="flex flex-col items-center mb-[44px] md:mb-[84px]">
      <h1 className="font-cerotta text-[25px] mb-5 md:text-[50px]">
        {category}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-[100px]">
        <CardItem />
        <CardItem />
        <CardItem classname="hidden md:block" />
        {children}
      </div>
      <Link
        to={`/category/${urlcategory}`}
        className="ring-1 ring-[#BB8360] text-[14px] px-4 py-2 rounded-lg mt-5"
      >
        Lihat Semua
      </Link>
    </div>
  );
}
