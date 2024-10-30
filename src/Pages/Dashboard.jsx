import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/DashboardCom/Hero";
import HeroBody from "../Components/DashboardCom/HeroBody";
import Content from "../Components/DashboardCom/Content";
import useProductManagementStore from "../stores/productManagementStore";
import useCategoryManagementStore from "../stores/categoryManagementStore";
import { Link } from "react-router-dom";

export default function Dashboard() {
  document.title = "Dashboard";
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
        <div className="flex flex-col font-bold gap-5 justify-center items-center font-center font-cerotta text-[18px] md:text-[35px]">
          <h1>No categories found</h1>
          <div className="flex flex-col gap-2 items-center">
            <h2>Login First to See Products</h2>
            <Link
              to="/login"
              className="bg-[#BB8360] text-center  text-[16px] md:text-[30px]  font-normal font-montserrat text-white p-2 md:p-4 rounded-md "
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
