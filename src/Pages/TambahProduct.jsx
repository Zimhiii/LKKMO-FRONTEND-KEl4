import React from "react";
import FormTambahProduct from "../Components/AdminComponents/FormTambahProduct";

export default function TambahProduct() {
  useEffect(() => {
    document.title = "Tambah Product";
  });
  return (
    <div className="w-full h-full px-[67px] py-[80px]">
      <header className="mb-[75px]">
        <h1 className="font-cerotta text-[20px]">Tambah Produk</h1>
      </header>
      <div className="w-full flex gap-10 ">
        <div className="w-full">
          <FormTambahProduct />
        </div>
      </div>
    </div>
  );
}
