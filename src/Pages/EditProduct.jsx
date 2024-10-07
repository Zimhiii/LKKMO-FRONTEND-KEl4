import React from "react";
import FormTambahProduct from "../Components/AdminComponents/FormTambahProduct";

export default function EditProduct() {
  return (
    <div className="w-full h-full px-[67px] py-[80px]">
      <header className="mb-[75px]">
        <h1 className="font-cerotta text-[20px]">Tambah Produk</h1>
      </header>
      <div className="w-full flex gap-10 ">
        <div className="w-7/12">
          <FormTambahProduct />
        </div>
        <div className="w-5/12 flex justify-center items-center">
          <div className="w-[215px] flex flex-col gap-2 ">
            <div className="w-full h-[235px] ring-1  ring-[#C2C2C2] rounded-[8px]"></div>
            <button className="ring-1 py-[8px] rounded-[6px] w-full text-center ring-slate-900">
              Tambah Foto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
