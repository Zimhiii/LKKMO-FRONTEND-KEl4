import React, { useEffect } from "react";
import CardItem from "../All/CardItem";
import { Link } from "react-router-dom";
import useProductManagementStore from "../../stores/productManagementStore";

export default function Content({ category = "Koleksi", id }) {
  const urlcategory = category.toLowerCase();
  const idCategory = id;
  const { products } = useProductManagementStore();

  // Filter products based on category_id
  const productsCategory = products.filter(
    (product) => product.category.id == idCategory
  );

  const mappedProduct = productsCategory.slice(0, 3).map((product) => (
    <>
      <CardItem
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        description={product.description}
        image={product.image}
      />
      {console.log(`cek isi product dari ${category}`, products)}
    </>
  ));

  return (
    <div className="flex flex-col items-center pb-[44px] md:pb-[84px]">
      <h1 className="font-cerotta text-[25px] mb-5 md:text-[50px]">
        {category}
      </h1>
      {mappedProduct.length > 0 ? (
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[40px] md:gap-[100px]">
            {mappedProduct}
          </div>
          <Link
            to={`/category/${urlcategory}`}
            className="ring-1 ring-[#BB8360] text-[14px] px-4 py-2 rounded-lg mt-5 backdrop-blur-sm drop-shadow-[0px_0px_4px_rgba(0,0,0,0.25)] shadow-slate-900 hover:backdrop-blur-none hover:bg-[#BB8360] hover:text-white"
          >
            Lihat Semua
          </Link>
        </div>
      ) : (
        <div className="text-center text-4xl font-cerotta">
          Produk tidak ditemukan
        </div>
      )}

      {console.log(`${category}`, products)}
    </div>
  );
}
