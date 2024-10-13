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

  const mappedProduct = productsCategory.map((product) => (
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
      <h1 className="font-cerotta text-[25px] mb-5 md:text-[50px]">
        {category}
      </h1>
      <div className="flex flex-wrap gap-3 md:gap-[100px]">
        {mappedProduct.length > 0 ? (
          mappedProduct
        ) : (
          <div className="text-center text-4xl font-cerotta">
            Produk tidak ditemukan
          </div>
        )}

        {console.log(`${category}`, products)}
      </div>
      <Link
        to={`/category/${urlcategory}`}
        className="ring-1 ring-[#BB8360] text-[14px] px-4 py-2 rounded-lg mt-5"
      >
        Lihat Semua
      </Link>
    </div>
  );
}
