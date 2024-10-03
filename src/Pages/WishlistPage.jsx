import React from "react";
import CardItem from "../Components/All/CardItem";

export default function WishlistPage() {
  return (
    <div className="py-[18px] w-full">
      <h1 className="font-cerotta text-[23px] text-center md:text-[50px] font-semibold">
        Wishlist
      </h1>
      <div className="flex flex-col items-center mb-[12px] mt-[12px] md:mt-[40px] md:mb-[31px] ">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-[100px]">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
        <button className="rounded-[9px] ring-1 ring-[#BB8360] text-[11px] md:text-[20px] px-2 py-1 mt-5">
          {" "}
          Lihat Semua
        </button>
      </div>
    </div>
  );
}
