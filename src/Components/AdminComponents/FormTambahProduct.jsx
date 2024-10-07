import React, { useRef, useState } from "react";
import Select from "./Select";
import EditAkun from "./EditAkun";
import { IoOpenOutline } from "react-icons/io5";

export default function FormTambahProduct() {
  const [selectedOption, setSelectedOption] = useState("");
  const nameProductRef = useRef(null);
  const priceRef = useRef(null);
  const passwordRef = useRef(null);

  const handleKeyDown = (event, nextInputRef) => {
    if (event.key === "Enter") {
      event.preventDefault();
      nextInputRef.current.focus();
    }
  };
  const options = [
    { value: "cosplay", label: "Cosplay" },
    { value: "karnaval", label: "Karnaval" },
    { value: "game", label: "Game" },
  ];
  return (
    <form className="w-full font-inter">
      <h2 className="text-[20px] mb-[30px]">Informasi Produk</h2>
      <Select
        name="Kategori"
        options={options}
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      />
      <EditAkun
        type="text"
        placeholder="Admin Paling Kece"
        name="Nama Produk"
        onKeyDown={(event) => handleKeyDown(event, priceRef)}
        ref={nameProductRef}
      />
      <EditAkun
        type="text"
        placeholder="1000000"
        name="Harga"
        onKeyDown={(event) => handleKeyDown(event, null)}
        ref={priceRef}
      />
      <div className="flex gap-2">
        <div className="mb-2 w-full">
          <label
            htmlFor="Warna"
            className={`block ml-1 text-[14px]  font-inter`}
          >
            Warna
          </label>
          <div className="rounded-[4px] text-[12px] md:text-[16px] flex justify-between items-center py-1 px-1 md:py-2 md:px-4 w-full active:bg-[#D9D9D9] ring-1 ring-[#CBD5E1]">
            <input
              typeof="button"
              disabled
              placeholder={"biru"}
              className={`  placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-[10px] md:placeholder:text-[16px]  focus:outline-black `}
              id={"Warna"}
              // ref={}
              // onKeyDown={}
              onChange={"biru"} // Mendukung onChange untuk input nilai
              //   value={value} // Mendukung value untuk kontrol input
            />
            <IoOpenOutline className="w-6 h-6" />
          </div>
        </div>
        <div className="mb-2 w-full">
          <label
            htmlFor="Ukuran"
            className={`block ml-1 text-[14px]  font-inter`}
          >
            Ukuran
          </label>
          <div className="rounded-[4px] text-[12px] md:text-[16px] flex justify-between items-center py-1 px-1 md:py-2 md:px-4 w-full active:bg-[#D9D9D9] ring-1 ring-[#CBD5E1]">
            <input
              typeof="button"
              disabled
              placeholder={"5XL"}
              className={`  placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-[10px] md:placeholder:text-[16px]  focus:outline-black `}
              id={"Ukuran"}
              // ref={}
              // onKeyDown={}
              onChange={"biru"} // Mendukung onChange untuk input nilai
              //   value={value} // Mendukung value untuk kontrol input
            />
            <IoOpenOutline className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="flex gap-6 mt-[40px]">
        <button className="bg-[#BB8360] px-6 py-2 rounded-[6px] text-[14px] text-white">
          Tambah
        </button>
        <button className="ring-1 ring-red-500 px-4 text-red-500 py-2  rounded-[6px]">
          Hapus
        </button>
      </div>
    </form>
  );
}
