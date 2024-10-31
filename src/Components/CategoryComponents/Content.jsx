import React, { useEffect, useState } from "react";
import CardItem from "../All/CardItem";
import { Link } from "react-router-dom";
import useProductManagementStore from "../../stores/productManagementStore";

export default function Content({
  category = "Koleksi",
  id,
  idsubcategory,
  subcategory,
}) {
  const urlcategory = category.toLowerCase();
  const urlsubcategory = subcategory.toLowerCase();
  const token = localStorage.getItem("token");
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
        <h1 className="font-boruna text-[25px] text-start mb-5 md:text-[50px] ml-[20px]">
          {subcategory}
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-3 md:gap-[100px]">
        {loading ? (
          <div className="text-center text-[20px] md:text-4xl font-cerotta">
            Loading...
          </div>
        ) : error ? (
          <div className="text-center  text-[20px] md:text-4xl font-cerotta">
            <div>{error}</div>
            <br />
            <div className="">
              {!token && (
                <>
                  <h1>
                    Silahkan Login Terlebih Dahulu untuk melihat lebih lanjut
                  </h1>
                  <Link
                    to="/login"
                    className="bg-[#BB8360] transition-all duration-150 text-[20px] text-black font-montserrat md:px-4 md:py-3 px-2 py-1 rounded-md hover:bg-white hover:text-[#BB8360] hover:ring-1 hover:ring-[#BB8360] "
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        ) : mappedProduct.length > 0 ? (
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-wrap justify-evenly md:justify-center gap-[30px] md:gap-[100px]">
              {mappedProduct}
            </div>
            <Link
              to={`/category/${urlcategory}/${urlsubcategory}`}
              // className="ring-1 ring-[#BB8360] text-[14px] px-4 py-2 rounded-lg mt-5"
              className="ring-1 ring-[#BB8360] text-[14px] px-4 py-2 rounded-lg mt-5 backdrop-blur-sm drop-shadow-[0px_0px_4px_rgba(0,0,0,0.25)] shadow-slate-900 hover:backdrop-blur-none hover:bg-[#BB8360] hover:text-white"
            >
              Lihat Semua
            </Link>
          </div>
        ) : (
          <div className="text-center flex items-center justify-center text-[20px] md:text-4xl font-cerotta h-[500px]">
            <h1>Produk Kosong, Silahkan Pilih Kategori Lain</h1>
          </div>
        )}
      </div>
      {/* <button
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
      </button> */}
    </div>
  );
}
