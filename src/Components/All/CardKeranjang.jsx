import React from "react";
import img from "../../assets/HistoryImageEx.jpg";
import imgMD from "../../assets/CardkategoriMD.png";
import { FaCarSide } from "react-icons/fa";
import { HiTrash } from "react-icons/hi2";

export default function CardKeranjang() {
  return (
    <div className=" p-[5px] font-montserrat  rounded-[10px]  ring-2 ring-[#D9D9D9] flex justify-between">
      <div className="flex gap-[5px]">
        <div className="img p-[7px] bg-white rounded-[6px] flex justify-center items-center">
          <img src={img} alt="img" className=" md:hidden" />
          <img
            src={imgMD}
            alt="img"
            className="md:w-[189px] md:h-[217px] hidden md:block"
          />
        </div>
        <div className="">
          <h1 className="text-[9px] font-semibold md:text-[24px]">
            Nezuko Kamao
          </h1>
          <div className="text-[6px] md:text-[14px] text-[#000000] text-opacity-70 flex flex-col">
            <h2 className="">
              Ukuran : <span className="text-[#000000] text-opacity-50">L</span>{" "}
            </h2>
            <h2 className="">
              Warna :{" "}
              <span className="text-[#000000] text-opacity-50">Biru</span>{" "}
            </h2>
            <h2 className="text-[8px] md:text-[20px] font-semibold ">
              Rp.5.000.000,00 / hari
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end font-montserrat p-[3px] md:p-[25px] md:gap-5">
        <div className="flex justify-end ">
          <HiTrash className=" text-[#FF3333]  w-[10px] md:w-[30px] md:h-[30px]" />
        </div>
        <div className="bg-[#D9D9D9] text-[8px] md:text-[14px] px-[5px] w-fit md:px-[15px] mb-[16px] py-[3px] rounded-[17px] flex gap-2 justify-center">
          <span>-</span> 3 <span>+</span>
        </div>
        <div className="flex justify-end shadow shadow-slate-600 rounded-[3px] overflow-hidden">
          <button className="flex gap-[0.5px] bg-[#BB8360] px-[3px] md:px-[6px] py-[3px]  md:py-[6px] justify-center items-center ">
            <FaCarSide className="bg-[#BB8360] text-[5px] md:text-[20px]" />
            <p className="text-[4px] md:text-[14px] ">Rental Sekarang</p>
          </button>
        </div>
      </div>
    </div>
  );
}
