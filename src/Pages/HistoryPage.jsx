import React, { useEffect, useState } from "react";
import CardHistory from "../Components/All/CardHistory";
import CardKeranjang from "../Components/All/CardKeranjang";

export default function HistoryPage() {
  const [isHistory, setIsHistory] = useState(true);

  return (
    <div className="mx-[20px]">
      <div className=" relative flex font-montserrat text-[10px] md:text-[31px] justify-center py-[25px]">
        {isHistory && (
          <div className="flex bg-[#BB8360] rounded-[10px] cursor-pointer w-fit ">
            <div
              className=" py-[9px] px-[39px]   bg-[#BB8360] rounded-[10px] text-white"
              onClick={() => setIsHistory(true)}
            >
              History
            </div>
            <div
              className="py-[9px]  px-[39px] border-[2px] border-[#BB8360] bg-white rounded-[10px]"
              onClick={() => setIsHistory(false)}
            >
              Keranjang
            </div>
          </div>
        )}

        {!isHistory && (
          <div className="flex bg-[#BB8360] rounded-[10px]  cursor-pointer">
            <div
              className=" py-[9px] px-[39px]   bg-white 0] border-[2px] border-[#BB8360] rounded-[10px]"
              onClick={() => setIsHistory(true)}
            >
              History
            </div>
            <div
              className="py-[9px]  px-[39px]  bg-[#BB836rounded-[10px] text-white"
              onClick={() => setIsHistory(false)}
            >
              Keranjang
            </div>
          </div>
        )}
      </div>
      {isHistory && (
        <div className="flex flex-col gap-5 mb-8">
          <CardHistory />
          <CardHistory />
          <CardHistory />
        </div>
      )}
      {!isHistory && (
        <div className="flex flex-col gap-5 mb-8">
          <CardKeranjang />
          <CardKeranjang />
          <CardKeranjang />
        </div>
      )}
    </div>
  );
}
