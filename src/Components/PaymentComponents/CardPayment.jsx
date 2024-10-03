import React from "react";
import { HiTrash } from "react-icons/hi2";

export default function CardPayment() {
  return (
    <div className="font-montserrat flex ring-1 p-1 ring-[#D9D9D9] rounded-[15px] mb-[12px] justify-between">
      <div className="flex">
        <div className="mr-2 flex justify-center items-center">
          <img src="imgPayment.png" alt="imgPayment" className="md:w-[125px]" />
        </div>
        <div className="">
          <h1 className="font-semibold mb-[11px] text-[14px] md:text-20px">
            Nezuko Kamado
          </h1>
          <p className="text-[8px] md:text-[14px] mb-[4px]">
            Ukuran : <span className="text-[#000000] text-opacity-50">L</span>
          </p>
          <p className="text-[8px] md:text-[14px] mb-[10px] text-opacity-50">
            Warna : <span>Biru</span>
          </p>
          <h2 className="text-[10px] md:text-[20px] mb-[11px]  text-[#000000] font-semibold text-opacity-70">
            Rp5.000.000 / hari
          </h2>
        </div>
      </div>

      <div className="flex flex-col justify-between font-montserrat">
        <div className="flex justify-end mt-[6px]">
          <HiTrash className=" text-[#FF3333] md:w-[20px] md:h-[20px]" />
        </div>

        <div className="bg-[#D9D9D9] text-[8px]md:text-[14px] px-[5px] md:px-[15px] mb-[16px] py-[3px] rounded-[17px] flex gap-2">
          <span>-</span> 3 <span>+</span>
        </div>
      </div>
    </div>
  );
}
