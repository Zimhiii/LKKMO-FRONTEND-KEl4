import React, { useEffect, useState } from "react";
import CardItem from "../All/CardItem";
import { Link } from "react-router-dom";
import useProductManagementStore from "../../stores/productManagementStore";

export default function Content({ category = "Koleksi", id, idsubcategory }) {
  const urlcategory = category.toLowerCase();
  const {
    productsBySubCategory,
    fetchProductsBySubCategory,
    loading,
    error,
    products,
  } = useProductManagementStore();

  // State untuk menampung status loading dan error
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (idsubcategory) {
  //       setLoading(true); // Mulai loading
  //       setError(null); // Reset error
  //       try {
  //         await fetchProductsBySubCategory(idsubcategory);
  //       } catch (e) {
  //         setError("Failed to fetch products");
  //       } finally {
  //         setLoading(false); // Selesai loading
  //       }
  //     }
  //   };
  //   fetchData();
  // }, [fetchProductsBySubCategory]);

  // Filter data hanya jika productsBySubCategory tidak null atau undefined
  const filteredProducts = (products || []).filter(
    (product) => product.subcategory_id === idsubcategory
  );

  const mappedProduct = filteredProducts
    .slice(0, 3)
    .map((product) => (
      <CardItem
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        description={product.description}
        image={product.image}
      />
    ));

  return (
    <div className="flex flex-col items-center mb-[44px] md:mb-[84px]">
      <div className="flex flex-col w-full items-start ">
        <h1 className="font-boruna text-[25px] text-start mb-5 md:text-[50px]">
          {category}
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-3 md:gap-[100px]">
        {loading ? (
          <div className="text-center text-4xl font-cerotta">Loading...</div>
        ) : error ? (
          <div className="text-center text-4xl font-cerotta">{error}</div>
        ) : mappedProduct.length > 0 ? (
          <>
            {mappedProduct}
            <button>test</button>
          </>
        ) : (
          <div className="text-center text-4xl font-cerotta">
            Produk tidak ditemukan
          </div>
        )}
      </div>
      <Link
        to={`/category/${urlcategory}`}
        className="ring-1 ring-[#BB8360] text-[14px] px-4 py-2 rounded-lg mt-5"
      >
        Lihat Semua
      </Link>
      <button
        className="px-10 py-6 ring-1 ring-slate-500 "
        onClick={() => {
          console.log(
            `product sub ${category} ${idsubcategory} : `,
            productsBySubCategory
          );
          console.log(`product ${category} : `, products);
        }}
      >
        test
      </button>
    </div>
  );
}
