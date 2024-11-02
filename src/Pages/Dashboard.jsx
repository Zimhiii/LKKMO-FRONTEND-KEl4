import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/DashboardCom/Hero";
import HeroBody from "../Components/DashboardCom/HeroBody";
import Content from "../Components/DashboardCom/Content";
import useProductManagementStore from "../stores/productManagementStore";
import useCategoryManagementStore from "../stores/categoryManagementStore";
import { Link } from "react-router-dom";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Home";
  });
  const { products } = useProductManagementStore();
  const { fetchCategories, categories, loading } = useCategoryManagementStore();
  useEffect(() => {
    fetchCategories(); // Pastikan fungsi dipanggil dengan tanda kurung
  }, [fetchCategories]);

  // Periksa apakah `categories` ada dan memiliki setidaknya satu elemen
  const categoryData =
    categories && categories.length > 0 ? categories[0] : null;

  console.log(products);

  return (
    <div className="min-h-screen">
      <Hero />
      {loading ? (
        <div className="flex justify-center items-center h-screen font-center font-cerotta text-[18px] md:text-[35px]">
          <h1>Loading...</h1>
        </div>
      ) : categoryData ? (
        categoryData.map((category) => (
          <Content
            key={category.id} // Menambahkan `key` untuk setiap elemen
            category={category.name}
            products={products}
            id={category.id}
          />
        ))
      ) : (
        <div className="flex py-[100px] flex-col font-bold gap-5 justify-center items-center font-center font-cerotta text-[18px] md:text-[35px]">
          <h1>No Products found</h1>
          <div className="flex flex-col gap-7 items-center">
            <h2>Login First to See Products</h2>
            <Link
              to="/login"
              className="bg-[#BB8360] text-center shadow-[0px_5px_10px_rgba(0,0,0,0.25)] text-[16px] md:text-[30px]  font-normal font-montserrat text-white px-3 py-1 md:px-6 md:py-2 rounded-md hover:bg-[#9c6d50] active:text-[#BB8360] active:bg-transparent active:ring-1 active:ring-[#BB8360]"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
