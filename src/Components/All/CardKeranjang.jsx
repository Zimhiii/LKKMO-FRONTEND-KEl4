import React from "react";
import img from "../../assets/HistoryImageEx.jpg";
import { FaCarSide } from "react-icons/fa";
import { HiTrash } from "react-icons/hi2";

export default function CardKeranjang() {
  return (
    <div className=" p-[5px] font-montserrat  rounded-[10px]  ring-2 ring-[#D9D9D9] flex justify-between">
      <div className="flex gap-[5px]">
        <div className="img p-[7px] bg-white rounded-[6px] flex justify-center items-center">
          <img src={img} alt="img" />
        </div>
        <div className="">
          <h1 className="text-[9px] font-semibold">Nezuko Kamao</h1>
          <div className="text-[6px] text-[#000000] text-opacity-70 flex flex-col">
            <h2 className="">
              Ukuran : <span className="text-[#000000] text-opacity-50">L</span>{" "}
            </h2>
            <h2 className="">
              Warna :{" "}
              <span className="text-[#000000] text-opacity-50">Biru</span>{" "}
            </h2>
            <h2 className="text-[8px] font-semibold ">
              Rp.5.000.000,00 / hari
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between font-montserrat p-[3px]">
        <div className="flex justify-end ">
          <HiTrash className=" text-[#FF3333]  w-[10px] md:w-[20px] md:h-[20px]" />
        </div>
        <div className="flex justify-end shadow shadow-slate-600 rounded-[3px] overflow-hidden">
          <button className="flex gap-[0.5px] bg-[#BB8360] px-[3px] py-[3px]  justify-center items-center ">
            <FaCarSide className="bg-[#BB8360] text-[5px]" />
            <p className="text-[4px] ">Rental Sekarang</p>
          </button>
        </div>
      </div>
    </div>
  );
}
