import React, { useEffect } from "react";
import Sidebar from "../Components/AdminComponents/Sidebar";
import { Outlet, useParams } from "react-router-dom";
import { useAuthUserStore } from "../stores/authStore";
import useProductManagementStore from "../stores/productManagementStore";

export default function AdminLayout() {
  const user = useAuthUserStore((state) => state.user); // Ambil user dari store
  const { fetchProducts, fetchProductById, product } =
    useProductManagementStore();
  const { id } = useParams();

  useEffect(() => {
    if (!user || user.role_id !== 2) {
      window.location.href = "/";
    }
  }, [user]);

  return (
    <div className="flex w-full min-h-screen">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-10/12">
        <Outlet />
      </div>
    </div>
  );
}
