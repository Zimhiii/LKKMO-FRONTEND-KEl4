import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useParams } from "react-router-dom";
import Footer from "../Pages/Footer";
import { useLoginStore, useUserStore } from "../Store/stored";
import useProductManagementStore from "../stores/productManagementStore";

const DefaultLayout = () => {
  const { fetchProducts, fetchProductById, product, products } =
    useProductManagementStore();
  const user = useUserStore((state) => state.user);
  const { setLogin } = useLoginStore();
  const { id } = useParams();

  const handleLogin = () => {
    if (localStorage.getItem("token")) {
      setLogin(true);
    }
  };

  useEffect(() => {
    // Panggil fetchProducts saat komponen pertama kali dirender
    fetchProducts();

    // Hanya panggil fetchProductById jika ada ID
    if (id) {
      fetchProductById(id);
    }
  }, [fetchProducts, fetchProductById, id]);

  useEffect(() => {
    handleLogin(); // Panggil fungsi handleLogin dengan benar
  }, []); // Kosongkan array dependensi agar hanya dijalankan sekali saat komponen dirender

  console.log("Product by ID:", product);
  console.log("All Products:", products);

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      {console.log("User:", user)}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
