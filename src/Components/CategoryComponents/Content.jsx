import React from "react";
import CardItem from "../All/CardItem";
import { Link } from "react-router-dom";

export default function Content({ subcategory }) {
  return (
    <div className="flex flex-col items-center my-[30px]">
      <h2 className="self-start font-boruna text-[31px] capitalize font-bold">
        {subcategory}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-[100px]">
        <CardItem />
        <CardItem />
        <CardItem classname="hidden md:block" />
      </div>
      <Link
        className="font-montserrat text-[16px] px-[12px] py-[11px] border-[#BB8360] border-[1px] border-solid rounded-[11px]"
        to={`/${subcategory}`}
      >
        Lihat Semua
      </Link>
    </div>
  );
}
