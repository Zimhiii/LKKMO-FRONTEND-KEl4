import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { BiSolidCart } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import useWishlistStore from "../../stores/wishlistManagementStore";

export default function CardItem({
  classname = "",
  key,
  name,
  price,
  id,
  image,
  description,
  stock,
  size,
}) {
  const { addToWishlist, removeFromWishlist, wishlist, fetchWishlist } =
    useWishlistStore();
  const navigate = useNavigate();

  // State untuk melacak apakah produk ada di wishlist
  const [isProductInWishlist, setIsProductInWishlist] = useState(false);
  const [wishlistId, setWishlistId] = useState(null); // Untuk menyimpan id wishlist

  useEffect(() => {
    // Cek apakah produk ada di wishlist saat komponen dirender pertama kali
    fetchWishlist();
  }, [fetchWishlist]);

  useEffect(() => {
    // Update state isProductInWishlist jika wishlist berubah
    const foundWishlistItem = wishlist.find((item) => item.product_id === id);

    if (foundWishlistItem) {
      setIsProductInWishlist(true);
      setWishlistId(foundWishlistItem.id); // Simpan id wishlist
    } else {
      setIsProductInWishlist(false);
      setWishlistId(null);
    }
  }, [wishlist, id]);

  const handleWishlistToggle = async () => {
    if (isProductInWishlist && wishlistId) {
      // Jika produk ada di wishlist, hapus dari wishlist menggunakan wishlistId
      try {
        await removeFromWishlist(wishlistId);
        setIsProductInWishlist(false); // Update state lokal
        alert("Item berhasil dihapus dari wishlist!");
      } catch (err) {
        console.error("Gagal menghapus dari wishlist:", err);
      }
    } else {
      // Jika produk tidak ada di wishlist, tambahkan ke wishlist
      const credentials = { product_id: id };
      try {
        await addToWishlist(credentials);
        setIsProductInWishlist(true); // Update state lokal
        alert("Item berhasil ditambahkan ke wishlist!");
      } catch (err) {
        console.error("Gagal menambah ke wishlist:", err);
      }
    }
  };

  const toProduct = (e) => {
    e.preventDefault();
    navigate(`/product/${id}`);
  };

  return (
    <div
      typeof="button"
      onClick={toProduct}
      className="cursor-pointer hover:scale-105 transition-all "
    >
      <div
        className={`${classname} gap-3 shadow-[8px_8px_10px_rgba(0,0,0,0.25)] md:mb-10 rounded-xl px-4 py-4 md:px-5 md:py-[30px]  hover:shadow-[8px_8px_20px_rgba(0,0,0,0.25)]`}
      >
        <div className="relative z-1 bg-[#D9D9D9] px-6 py-6  rounded-xl">
          <div
            className={`group absolute z-99 px-[3px] py-[2px] md:p-[6px] text-[16px] md:text-[30px] top-0 -right-1 md:-top-4 md:-right-3 bg-white rounded-[6px] md:rounded-[14px] shadow-lg shadow-slate-500 ${
              isProductInWishlist
                ? "bg-pink-500 text-white"
                : "hover:bg-pink-500"
            } transition-all ease-in`}
          >
            <Link
              className="hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleWishlistToggle();
              }}
            >
              <CiHeart
                className={`${
                  isProductInWishlist ? "text-white" : "text-[#000000]"
                } group-hover:text-white`}
              />
            </Link>
          </div>

          <div className="flex justify-center items-center">
            <img
              src={`https://lkkmo-backend-production.up.railway.app/storage/${image}`}
              alt="Card"
              className="w-[82px] h-[99px] md:w-[231px] md:h-[278px] object-cover object-center"
            />
          </div>
        </div>
        <div className="relative font-montserrat text-[10px] md:text-[20px]">
          <h2 className="font-semibold">{name}</h2>
          <div className="flex gap-2">
            <span>⭐⭐⭐⭐⭐</span>
            <p className="md:text-[15px]">
              5/<span className="text-[#000000] text-opacity-60">5</span>
            </p>
          </div>
          <h2 className="text-[#000000] md:text-[17px] text-opacity-60 font-semibold">
            Rp.{price} / hari
          </h2>
          <div className="absolute p-[3px] -bottom-2 -right-2 md:bottom-0 md:-right-0 bg-transparent rounded-[6px] text-[20px] md:text-[35px] ">
            <Link
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <BiSolidCart />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
