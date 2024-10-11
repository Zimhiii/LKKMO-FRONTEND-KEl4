import React, { useRef, useState, useEffect } from "react";
import EditInput from "./EditInput";
import { useUserStore } from "../../Store/stored";
import { useAuthUserStore } from "../../stores/authStore";
import useProductManagementStore from "../../stores/productManagementStore";
import { useParams } from "react-router-dom";

export default function FormEdit() {
  const NameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const adressRef = useRef(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const { id } = useParams(); // Ambil ID dari parameter URL
  const { fetchProductById, product, loading } = useProductManagementStore(); // Ambil fungsi fetch dan data produk
  const user = useAuthUserStore((state) => state.user);

  useEffect(() => {
    if (id) {
      fetchProductById(id);
    }
  }, [id, fetchProductById]);

  // Menghindari error jika product belum terisi
  const selectedProduct = product?.products?.[0] || {};

  const handleKeyDown = (event, nextInputRef) => {
    if (event.key === "Enter") {
      event.preventDefault();
      nextInputRef.current.focus();
    }
  };

  const handleImageChange = (event) => {
    event.preventDefault();
    setProfilePicture(event.target.files[0]);
    setImagePreview(URL.createObjectURL(event.target.files[0]));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <form action="" className="flex flex-col w-full  justify-center md:w-3/4">
      <div className="flex flex-col gap-5 justify-center items-center mb-5 md:gap-8">
        <div className="w-[130px] h-[130px] md:w-[250px] md:h-[250px] overflow-hidden rounded-full bg-slate-300 shadow-lg shadow-slate-400 flex justify-center items-center ">
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Profil Gambar"
              className="object-center "
            />
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          id="profile-picture"
        />
        <div className="flex flex-col md:flex-row gap-2 ">
          <label
            htmlFor="profile-picture"
            className="px-6 py-2 md:px-6 md:py-4 bg-[#BB8360] rounded-lg text-white font-medium text-sm shadow-md shadow-slate-400 md:text-[20px] cursor-pointer"
          >
            Ubah Profil Gambar
          </label>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              setProfilePicture(null);
              setImagePreview(null); // Menghapus preview gambar
            }}
            className="px-6 py-2 md:px-6 md:py-4 bg-[#BB8360] rounded-lg text-white font-medium text-sm shadow-md shadow-slate-400 md:text-[20px] cursor-pointer"
          >
            Hapus
          </button>
        </div>
      </div>

      <EditInput
        type="text"
        placeholder={selectedProduct.name || user.name}
        name="Nama"
        onKeyDown={(event) => handleKeyDown(event, emailRef)}
        ref={NameRef}
      />

      <EditInput
        type="email"
        placeholder={user.email}
        name="Email"
        onKeyDown={(event) => handleKeyDown(event, phoneNumberRef)}
        ref={emailRef}
      />
      <EditInput
        type="text"
        placeholder={selectedProduct.phone || "+62.... "}
        name="Nomor Handphone"
        onKeyDown={(event) => handleKeyDown(event, adressRef)}
        ref={phoneNumberRef}
      />
      <div className="mb-2 ">
        <label
          htmlFor="Alamat"
          className="block ml-1 text-[15px] md:text-[20px] font-monserrat "
        >
          Alamat <span className="text-red-500">*</span>
        </label>
        <textarea
          placeholder={selectedProduct.address || "Jl. ..."}
          className={` rounded-[4px] h-[80px] text-[12px] md:text-[16px] py-1 px-1 w-full active:bg-[#D9D9D9] ring-1 ring-[#000000] placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-[10px] placeholder:italic focus:outline-black `}
          id="Alamat"
          ref={adressRef}
          onKeyDown={(event) => handleKeyDown(event, null)}
        />
      </div>
      <div className="flex justify-center mt-5 ">
        <button
          type="submit"
          className="px-6 py-2  bg-[#BB8360] rounded-lg text-white font-medium text-[14px] md:text-[20px] shadow-md shadow-slate-400"
        >
          Simpan
        </button>
      </div>
    </form>
  );
}
