import React from "react";
import { FaCar, FaChevronLeft } from "react-icons/fa";
import CardPayment from "../Components/PaymentComponents/CardPayment";
import InputLogin from "../Components/LoginComponents/LoginInput";
import { FaCarSide } from "react-icons/fa";
import { BiSolidCart } from "react-icons/bi";

export default function PaymentPage() {
  return (
    <div className="px-4 w-full py-2 md:py-[40px] md:px-[39px]">
      <span className="flex gap-1 mb-[22px] md:mb-[44px] items-center text-[16px] md:text-[40px]">
        <FaChevronLeft /> <h1 className="font-cerotta">PEMBAYARAN</h1>{" "}
      </span>
      <div className="md:flex  md:w-full">
        <div className="md:w-6/12">
          <CardPayment />
          <CardPayment />
          <CardPayment />
        </div>

        <div className="md:w-6/12 rounded-[23px] md:ml-[71px] ring-1 ring-[#D9D9D9] flex flex-col items-center font-montserrat ">
          <h1 className="font-semibold mb-[11px] mt-[14px] text-[16px] md:text-[26px]">
            Detail Pembayaran
          </h1>
          <div className="w-9/12 mb-[26px]">
            <form action="" className="">
              <InputLogin
                type="text"
                placeholder="John Mark"
                name="Nama"
                classname="text-[9px] md:text-[15px]"
              />
              <InputLogin
                type="date"
                placeholder="hh/bb/tttt"
                name="Tanggal Sewa"
                classname="text-[9px] md:text-[15px]"
              />
              <InputLogin
                type="date"
                placeholder="John Mark"
                name="Tanggal Pengembalian"
                classname="text-[9px] md:text-[15px]"
              />
            </form>
          </div>

          <div className="w-9/12 flex justify-between font-semibold text-[13px] md:text-[20px]">
            <div className="w-full flex flex-col">
              <span> Durasi Sewa :</span>
              <span> Total Harga :</span>
            </div>
            <div className="w-full flex flex-col mb-[45px]">
              <span className="text-[#000000] text-opacity-60"> 3 Hari</span>
              <span> Rp 15.000.000,00</span>
            </div>
          </div>
          <div className="w-full flex justify-evenly px-[20px]">
            <button className=" font-montserrat font-medium flex justify-center items-center ring-1 ring-[#BB8360] px-[5px] py-[5px] rounded-lg gap-1 md:gap-2 md:px-[8px] mb-[20px] mr-[20px] shadow-lg shadow-slate-400">
              <BiSolidCart className="md:w-8 md:h-8 md:align-middle" />
              <h1 className="text-[10px] md:text-[16px]">
                Tambahkan Keranjang
              </h1>
            </button>
            <button className=" font-montserrat font-medium flex justify-center  items-center bg-[#BB8360] px-[5px] py-[5px] rounded-lg gap-1 md:gap-2 md:px-[8px] mb-[20px]  shadow-lg shadow-slate-400">
              <FaCarSide className="md:w-8 md:h-8 md:align-middle" />
              <h1 className="text-[10px] md:text-[16px]">Rental Sekarang</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
