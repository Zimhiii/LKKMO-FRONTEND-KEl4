import React from "react";

import { useParams } from "react-router-dom";
import CardItem from "../Components/All/CardItem";
import Content from "../Components/DashboardCom/Content";
import useProductManagementStore from "../stores/productManagementStore";
import useCategoryManagementStore from "../stores/categoryManagementStore";

export default function SubCategoryPage() {
  const categoryparams = useParams().category.toLowerCase();
  const subcategory = useParams().subcategory.toLowerCase();
  document.title = "Category - " + subcategory;
  const { loading, error, products } = useProductManagementStore();
  const { categories, fetchCategories } = useCategoryManagementStore();
  const category = categories[0].find(
    (cat) => cat.name.toLowerCase() === categoryparams
  );
  // const idCategory = category ? category.id : null;

  const arrsubcategory = category.subcategories.find((sub) => {
    const subname = sub.name.toLowerCase();
    return subname === subcategory;
  });
  // const idsubcategory = 1;

  const filteredProducts = (products || []).filter(
    (product) => product.subcategory_id === arrsubcategory.id
  );

  const mappedProduct = filteredProducts
    // .slice(0, 3)
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
    <div>
      <div className="flex flex-col justify-center items-center mb-[44px] md:mb-[84px] mt-[50px]">
        {loading ? (
          <div className="text-center text-4xl font-cerotta">Loading...</div>
        ) : error ? (
          <div className="text-center text-4xl font-cerotta">{error}</div>
        ) : mappedProduct.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-[100px] place-items-center">
            {mappedProduct}
          </div>
        ) : (
          <div className="text-center text-4xl font-cerotta flex justify-center items-center">
            <h1>
              Produk Kosong, Silahkan Pilih Kategori Lain Atau Login Terlebih
              Dahulu
            </h1>
          </div>
        )}
      </div>
      {/* <button
        className="rounded-sm p-5 ring-1 ring-slate-500"
        onClick={() => {
          console.log("categories : ", categories[0]);
          console.log("category : ", category.subcategories);
          console.log("idcategories : ", categoryparams);
          console.log("subcategory : ", subcategory);
          console.log("idsubcategories : ", arrsubcategory);
        }}
      >
        a
      </button> */}

      {/* <div className="grid grid-cols-2  md:grid-cols-3 gap-3 md:gap-[100px]">
        <CardItem />
        <CardItem />
        <CardItem classname="hidden md:block" />
      </div> */}
    </div>
  );
}
