import React, { useCallback, useEffect } from "react";
import Content from "./Content";
import { useParams } from "react-router-dom";
import useProductManagementStore from "../../stores/productManagementStore";
import useCategoryManagementStore from "../../stores/categoryManagementStore";
import useSubcategoryManagementStore from "../../stores/subCategoryManagementStore";

export default function ContainerContenCategory() {
  const category_params = useParams().category.toLowerCase();
  const { categories, fetchCategories, loading } = useCategoryManagementStore();
  const { productByCategory, fetchProductsByCategory } =
    useProductManagementStore();
  const { fetchSubcategoryById, subcategory } = useSubcategoryManagementStore();
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // const fetchCategoriess = useCallback(() => {
  //   fetchCategories();
  // }, [fetchCategories]);

  // const category_id = categories[0].filter((category) => {
  //   const categoryName = toString(category.name).toLowerCase();
  //   if (categoryName == category_params) {
  //     console.log(categoryName);
  //     console.log(category_params.toLocaleLowerCase());
  //     return category.id;
  //   }
  // });

  const categoryData = categories[0].find(
    (category) => category.name.toLowerCase() === category_params
  );
  const category_id = categoryData ? categoryData.id - 1 : null;
  const subCategoryArray = categoryData
    ? categories[0][category_id].subcategories
    : [];
  useEffect(() => {
    if (category_id) {
      fetchSubcategoryById(category_id);
    }
  }, [category_id, fetchSubcategoryById]);

  return (
    <div className="md:px-[116px]">
      {loading && (
        <div className="flex justify-center grow m-[100px]">
          <p className="text-2xl font-cerotta">Loading...</p>
        </div>
      )}

      {categories && !loading && (
        <>
          {subCategoryArray.map((subcategory) => (
            <Content key={subcategory.id} subcategory={subcategory.name} />
          ))}
          {/* <Content subcategory="anime" />
          <Content subcategory="comic" />
          <Content subcategory="game" /> */}

          <button
            className="rounded-sm p-5 ring-1 ring-slate-500"
            onClick={() => {
              // console.log("productByCategory", productByCategory);
              console.log("category_params :", category_params);
              console.log("categories_id :", category_id);
              console.log("categories_id :", categories[0][category_id]);
              console.log("subcategories[] :", subCategoryArray);
            }}
          >
            a
          </button>
        </>
      )}
    </div>
  );
}
