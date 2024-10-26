import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/DashboardCom/Hero";
import HeroBody from "../Components/DashboardCom/HeroBody";
import Content from "../Components/DashboardCom/Content";
import useProductManagementStore from "../stores/productManagementStore";
import useCategoryManagementStore from "../stores/categoryManagementStore";

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
    <div>
      <Hero />
      {loading ? (
        <div>Loading...</div>
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
        <div>No categories found</div>
      )}
    </div>
  );
}
