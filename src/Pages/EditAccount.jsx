import React from "react";
import { BsSortDown } from "react-icons/bs";
import FormEdit from "../Components/AdminComponents/FormInformasiUmum";
import FormResetPassword from "../Components/AdminComponents/FormResetPassword";

export default function EditAccount() {
  return (
    <div className="w-full h-full px-[67px] py-[80px]">
      <header className="flex justify-between  font-inter">
        <h1 className="font-cerotta text-[31px]">Edit AKUN</h1>

        <div action="" className="flex gap-2">
          <button className="bg-[#BB8360] px-4 rounded-[6px] text-[14px] text-white">
            Simpan Perubahan
          </button>
          <button className="bg-[#BB8360] px-4 rounded-[6px] text-[14px] text-white">
            Batal
          </button>
          <button className="ring-1 ring-red-500 px-4 text-red-500 py-2  rounded">
            Hapus Akun
          </button>
        </div>
      </header>

      <div className="text-[16px] flex gap-10 mt-[80px] font-inter font-normal w-full">
        <div className="w-3/12 flex flex-col gap-2 ">
          <div className="w-full h-[235px] ring-1  ring-[#C2C2C2] rounded-[8px]"></div>
          <button className="ring-1 py-[8px] rounded-[6px] w-full text-center ring-slate-900">
            Edit Foto
          </button>
        </div>
        <div className="w-9/12 flex gap-5">
          <div className="w-6/12 ring-1 ring-[#C2C2C2] rounded-[8px] px-[16px] py-[15px]">
            <FormEdit />
          </div>
          <div className="w-6/12 ring-1 ring-[#C2C2C2] rounded-[8px] px-[16px] py-[15px]">
            <FormResetPassword />
          </div>
        </div>
      </div>
    </div>
  );
}
