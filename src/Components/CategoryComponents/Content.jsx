import React from "react";
import CardItem from "../All/CardItem";
import { Link, useParams } from "react-router-dom";

export default function Content({ subcategory }) {
  const { category } = useParams();
  return (
    <div className="flex flex-col items-center my-[30px]">
      <h2 className="self-start font-boruna text-[11px] md:text-[31px] px-[23px] capitalize ">
        {subcategory}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-[100px]">
        <CardItem />
        <CardItem />
        <CardItem classname="hidden md:block" />
      </div>
      <Link
        className="font-montserrat text-[11px] md:text-[16px] px-[6px] py-[5px] md:px-[12px] md:py-[11px] border-[#BB8360] border-[1px] border-solid rounded-[11px]"
        to={`/category/${category}/${subcategory}`}
      >
        Lihat Semua
      </Link>
    </div>
  );
}
