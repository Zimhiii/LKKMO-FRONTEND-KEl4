import React from "react";
import { FaCar, FaChevronLeft } from "react-icons/fa";
import CardPayment from "../Components/PaymentComponents/CardPayment";
import InputLogin from "../Components/LoginComponents/LoginInput";
import { FaCarSide } from "react-icons/fa";

export default function PaymentPage() {
  return (
    <div className="px-4 w-full py-2 ">
      <span className="flex gap-1 mb-[22px] items-center text-[16px] ">
        <FaChevronLeft /> <h1 className="font-cerotta">PEMBAYARAN</h1>{" "}
      </span>
      <CardPayment />
      <CardPayment />
      <CardPayment />

      <div className="rounded-[23px] ring-1 ring-[#D9D9D9] flex flex-col items-center font-montserrat ">
        <h1 className="font-semibold mb-[11px] mt-[14px] text-[16px]">
          Detail Pembayaran
        </h1>
        <div className="w-9/12 mb-[26px]">
          <form action="" className="">
            <InputLogin
              type="text"
              placeholder="John Mark"
              name="Nama"
              classname="text-[15px]"
            />
            <InputLogin
              type="date"
              placeholder="hh/bb/tttt"
              name="Tanggal Sewa"
              classname="text-[15px]"
            />
            <InputLogin
              type="date"
              placeholder="John Mark"
              name="Tanggal Pengembalian"
              classname="text-[15px]"
            />
          </form>
        </div>

        <div className="w-9/12 flex justify-between font-semibold text-[13px]">
          <div className="w-full flex flex-col">
            <span> Durasi Sewa :</span>
            <span> Total Harga :</span>
          </div>
          <div className="w-full flex flex-col mb-[45px]">
            <span className="text-[#000000] text-opacity-60"> 3 Hari</span>
            <span> Rp 15.000.000,00</span>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button className=" font-montserrat font-medium flex justify-center bg-[#BB8360] px-[5px] py-[5px] rounded-lg gap-1 mb-[20px] mr-[20px] shadow-lg shadow-slate-400">
            <FaCarSide />
            <h1 className="text-[10px]">Rental Sekarang</h1>
          </button>
        </div>
      </div>
    </div>
  );
}
