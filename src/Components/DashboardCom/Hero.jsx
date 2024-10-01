import React from "react";
import HeroBody from "./HeroBody";

export default function Hero() {
  return (
    <div className="bg-[#F2F2F2] w-full md:rounded-b-[80px] mb-[35px] md:mb-[142px]">
      <div className="w-full flex  justify-center items-center rounded-b-md">
        <div className="w-7/12 flex flex-col items-center ">
          <h1 className="text-[16px] lg:text-[53px] md:text-[43px] font-cerotta">
            SELAMAT DATANG DI
          </h1>
          <h1 className="text-[21px] md:text-[60px] text-[#BB8360] font-boruna">
            Rent Ur Style
          </h1>
          <h2 className="text-[10px] md:text-[30px] text-opacity-60 text-[#000000]  italic mb-1">
            Your Style, Your Fashion!
          </h2>
          <div className="hidden md:block">
            <HeroBody />
          </div>
        </div>
        <div className="w-5/12 md:flex md:justify-end">
          <div className="md:hidden">
            <img
              src="imgHeroDasboard.svg"
              alt="imgHero "
              className="filter contrast-105 brightness-105"
            />
          </div>
          <div className="hidden md:flex md:justify-end">
            <img
              src="ImgHeroDashboardMD.svg"
              alt="imgHero "
              className="filter contrast-105 brightness-105"
            />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <HeroBody />
      </div>
    </div>
  );
}
