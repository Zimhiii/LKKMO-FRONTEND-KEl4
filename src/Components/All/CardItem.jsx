import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import cardImg from "../../assets/cardImgEX.png";
import { BiSolidCart } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { useParams } from "react-router-dom";
export default function CardItem({ classname = "" }) {
  return (
    <div>
      <div
        className={`${classname} gap-3 shadow-[8px_8px_10px_rgba(0,0,0,0.25)] md:mb-10 rounded-xl px-4 py-4 md:px-5 md:py-[30px] `}
      >
        <div className="relative z-1 bg-[#D9D9D9] px-6 py-6  rounded-xl">
          <div className="absolute px-[3px] py-[2px] md:p-[6px] text-[16px] md:text-[30px] top-0 -right-1 md:-top-4 md:-right-3 bg-white rounded-[6px] md:rounded-[14px] shadow-lg shadow-slate-500">
            <CiHeart className="  text-[#000000]" />
          </div>

          <div className="flex justify-center items-center">
            <img
              src={cardImg}
              alt="Card"
              className="w-[82px] h-[99px] md:w-[231px] md:h-[278px]  "
            />
          </div>
        </div>
        <div className="relative font-montserrat text-[10px] md:text-[20px]">
          <h2 className="font-semibold ">Majestic Officer Uniform</h2>
          <div className="flex gap-2">
            <span>⭐⭐⭐⭐⭐</span>
            <p className="md:text-[15px]">
              5/<span className="text-[#000000] text-opacity-60">5</span>
            </p>
          </div>
          <h2 className="text-[#000000] md:text-[17px] text-opacity-60 font-semibold">
            Rp.5.000.000 / hari
          </h2>
          <div className="absolute p-[3px] -bottom-2 -right-2 md:bottom-0 md:-right-0 bg-transparent rounded-[6px] text-[20px] md:text-[35px]">
            <BiSolidCart />
          </div>
        </div>
      </div>
    </div>
  );
}
