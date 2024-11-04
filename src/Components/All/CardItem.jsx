import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { BiSolidCart } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import useWishlistStore from "../../stores/wishlistManagementStore";
import useProductManagementStore from "../../stores/productManagementStore";

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

  // const { product, fetchProductById, loading } = useProductManagementStore();

  // useEffect(() => {
  //   fetchProductById(id);
  // }, [fetchProductById, id]);
  const [product, setProduct] = useState(null); // State untuk menyimpan data produk
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://lkkmo-backend-production-3ab2.up.railway.app/api/v1/products/${id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`, // Menambahkan token di sini
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setProduct(data); // Menyimpan data produk di state
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const selectedProduct = product ? product.products : {};

  const sumRating = selectedProduct?.reviews
    ? selectedProduct.reviews.reduce(
        (acc, review) => acc + (review.rating || 0),
        0
      )
    : 0;

  // Menghitung rata-rata rating
  const avgRating =
    selectedProduct?.reviews && selectedProduct.reviews.length > 0
      ? parseFloat((sumRating / selectedProduct.reviews.length).toFixed(1))
      : 0;

  const navigate = useNavigate();

  const [isProductInWishlist, setIsProductInWishlist] = useState(false);
  const [wishlistId, setWishlistId] = useState(null);
  const [isActionDisabled, setIsActionDisabled] = useState(false); // State untuk mengunci aksi

  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);

  useEffect(() => {
    const foundWishlistItem = wishlist.find((item) => item.product_id === id);
    if (foundWishlistItem) {
      setIsProductInWishlist(true);
      setWishlistId(foundWishlistItem.id);
    } else {
      setIsProductInWishlist(false);
      setWishlistId(null);
    }
  }, [wishlist, id]);

  const handleWishlistToggle = async () => {
    if (isActionDisabled) return; // Mencegah aksi jika sedang dikunci
    setIsActionDisabled(true); // Mengunci aksi sementara

    try {
      if (isProductInWishlist && wishlistId) {
        await removeFromWishlist(wishlistId);
        // alert("Item berhasil dihapus dari wishlist!");
      } else {
        await addToWishlist({ product_id: id });
        // alert("Item berhasil ditambahkan ke wishlist!");
      }

      // Refetch wishlist agar perubahan ter-update
      await fetchWishlist();
    } catch (err) {
      console.error("Terjadi kesalahan pada wishlist:", err);
    } finally {
      setIsActionDisabled(false); // Membuka kembali aksi setelah selesai
    }
  };

  const toProduct = (e) => {
    e.preventDefault();
    navigate(`/product/${id}`);
  };

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  function truncateText(text, maxLength) {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }

  // if (loading || !selectedProduct) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div
      typeof="button"
      onClick={toProduct}
      className="cursor-pointer hover:scale-105 transition-all "
    >
      <div
        className={`${classname} gap-3 shadow-[8px_8px_10px_rgba(0,0,0,0.25)] md:mb-10 rounded-xl px-4 py-4 md:px-5 md:py-[30px]  hover:shadow-[8px_8px_20px_rgba(0,0,0,0.25)]`}
      >
        <div className="relative z-1 bg-[#D9D9D9] px-3 py-3 md:px-6 md:py-6 rounded-xl">
          <div
            className={`group absolute z-99 px-[2px] py-[2px] md:p-[6px] text-[16px] md:text-[30px] top-0 -right-1 md:-top-4 md:-right-3 rounded-[6px] md:rounded-[14px] shadow-lg shadow-slate-500 ${
              isProductInWishlist
                ? "bg-pink-500 "
                : "bg-white hover:bg-pink-500"
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

          <div className="flex text-[10px] text-wrap justify-center items-center">
            <img
              src={`https://lkkmo-backend-production-3ab2.up.railway.app/storage/${image}`}
              alt={truncateText(name, 13)}
              className="w-[82px] h-[99px] md:w-[231px] md:h-[278px] object-cover object-center"
            />
          </div>
        </div>
        <div className="relative font-montserrat text-[10px] md:text-[20px]">
          <h2 className="font-semibold">{truncateText(name, 13)}</h2>
          <div className="flex gap-2 items-center">
            <span>⭐</span>
            <p className="md:text-[15px]">
              {loading ? "..." : selectedProduct?.rating ? avgRating : 0}/
              <span className="text-[#000000] text-opacity-60">5</span>
            </p>
          </div>
          <h2 className="text-[#000000] md:text-[17px] text-opacity-60 font-semibold">
            {rupiah(price)}/ hari
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
