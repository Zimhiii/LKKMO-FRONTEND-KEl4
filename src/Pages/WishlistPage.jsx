import React, { useEffect, useState } from "react";
import CardItem from "../Components/All/CardItem";
import useWishlistStore from "../stores/wishlistManagementStore";
import useProductManagementStore from "../stores/productManagementStore";

export default function WishlistPage() {
  const { wishlist, fetchWishlist } = useWishlistStore();
  const { fetchProductById, products } = useProductManagementStore();
  const [wishlistProducts, setWishlistProducts] = useState([]);

  // useEffect(() => {
  //   // Fetch wishlist saat komponen pertama kali dirender
  //   fetchWishlist();
  // }, [fetchWishlist]);

  useEffect(() => {
    // Jika wishlist sudah terisi, ambil detail produk berdasarkan product_id
    if (wishlist.length > 0) {
      const fetchProducts = async () => {
        const productDetails = await Promise.all(
          wishlist.map(async (productId) => {
            await fetchProductById(productId.product_id); // Mengambil data produk berdasarkan product_id
            return products.find(
              (product) => product.id === productId.product_id
            );
          })
        );
        setWishlistProducts(productDetails);
      };

      fetchProducts();
    }
  }, [wishlist, fetchProductById, products]);

  return (
    <div className="py-[18px] w-full">
      <h1 className="font-cerotta text-[23px] text-center md:text-[50px] font-semibold">
        Wishlist
      </h1>

      <div className="flex flex-col items-center mb-[12px] mt-[12px] md:mt-[40px] md:mb-[31px]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-[100px]">
          {/* Render detail produk berdasarkan wishlist */}
          {wishlistProducts.length > 0 ? (
            wishlistProducts.map((product) => (
              <CardItem
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                image={product.image}
              />
            ))
          ) : (
            <p>No items in wishlist</p>
          )}
        </div>

        <button
          className="rounded-[9px] ring-1 ring-[#BB8360] text-[11px] md:text-[20px] px-2 py-1 mt-5"
          on
        >
          Lihat Semua
        </button>
      </div>
    </div>
  );
}
