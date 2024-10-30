import React from "react";
import { Link } from "react-router-dom";

export default function HeroBody() {
  const fill = [
    {
      id: 1,
      sum: "2.000+",
      title: "Penyewa Setiap Bulan",
    },
    {
      id: 2,
      sum: "30.000+",
      title: "Pelanggan Puas😁",
    },
    {
      id: 3,
      sum: "1.000+",
      title: "Berbagi Koleksi Baju",
    },
  ];
  return (
    <div>
      <div className="mt-2">
        <div className="">
          <div className="px-9 md:hidden">
            <hr className="border-t border-stone-400" />
          </div>
          <p className="text-[10px] md:text-[20px] text-center font-medium italic font-montserrat text-[#000000] text-opacity-60 mt-2 px-6 leading-relaxed mb">
            Temukan berbagai pilihan baju untuk setiap momen istimewa Anda! Di
            RentUrSTyle, kami menghadirkan berbagai koleksi baju terkini dengan
            kualitas premium yang bisa Anda sewa sesuai kebutuhan, tanpa harus
            membeli. Nikmati kemudahan bergaya mewah tanpa khawatir biaya
            berlebih.
          </p>
        </div>
        <div className="w-full flex justify-center items-center mt-[42px]">
          <Link
            to="/allproduct"
            className="px-6 py-2 mb-[45px] md:text-[16px] bg-[#BB8360] rounded-lg text-[#255255255] font-normal font-montserrat text-[13px] shadow-md shadow-slate-400 hover:bg-[#a97758] hover:text-white transition-all duration-100 hover:ring-1 hover:ring-[#BB8360] active:bg-white active:text-[#BB8360] active:ring-1 active:ring-[#BB8360]"
          >
            Sewa Sekarang
          </Link>
        </div>
        <div className="w-full flex flex-col justify-center items-center md:flex-row">
          {fill.map((item) => (
            <div
              key={item.id}
              className="w-5/12 font-montserrat flex flex-col justify-center items-center mb-[30px]  "
            >
              <h1 className="text-[35px] md:text-[40px] font-medium">
                {item.sum}
              </h1>
              <p className="text-[12px] md:text-[15px] text-[#000000] text-opacity-55 -mt-1 mb-3">
                {item.title}
              </p>

              <hr className="border-t md:hidden border-stone-400 w-[80%]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
