import React from "react";
import img from "../../assets/HistoryImageEx.jpg";
import imgMD from "../../assets/CardkategoriMD.png";

export default function CardHistory() {
  return (
    <div className="bg-[#D9D9D9] p-[5px] md:px-[35px] md:py-[12px] font-montserrat flex rounded-[10px] gap-[5px] md:gap-[75px]">
      <div>
        <div className="img p-[7px] bg-white rounded-[6px] flex justify-center items-center">
          <img src={img} alt="img" className="md:hidden" />
          <img src={imgMD} alt="img" className="hidden md:block" />
        </div>
        <p className="text-[4px] md:text-[14px] md:pt-[12px] mt-[3px] text-[#6B6B6B]">
          Pesanan dibatalkan
        </p>
      </div>
      <div className="w-full">
        <h1 className="text-[9px] md:text-[20px] font-semibold mb-[9px]">
          Nezuko Kamao
        </h1>
        <div className="text-[6px] md:text-[20px] text-[#000000] text-opacity-70 flex justify-between items-center">
          <h2 className="">Rp.5.000.000,00 / hari</h2>
          <h2>XL</h2>
          <h2>3 hari</h2>
          <h2>15.0000.000,00</h2>
          <button className="text-[#ffffff] text-opacity-100 bg-[#BB8360] rounded-[4px] px-[4px] py-[2px]">
            Lihat Penilaian
          </button>
          <button className="text-[#000000] text-opacity-100 border border-[#BB8360] rounded-[4px] px-[4px] py-[2px]">
            Beli Lagi
          </button>
        </div>
      </div>
    </div>
  );
}
