import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useCategoryManagementStore from "../stores/categoryManagementStore";

const DaftarCategory = () => {
  useEffect(() => {
    document.title = "Daftar Category";
  });
  const { categories, deleteCategory, loading, error, fetchCategories } =
    useCategoryManagementStore();
  // useEffect(() => {
  //   fetchCategories();
  // }, [categories, fetchCategories]);
  const baseUrl = "https://lkkmo-backend-production-3ab2.up.railway.app/api/v1";

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteCategory(id);
    }

    window.location.href = "/admin/daftarcategory";
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="overflow-x-auto p-5">
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-bold mb-4">Daftar Kategori</h1>
        <Link
          to="/admin/tambahcategory"
          className="bg-green-500 text-white px-2 py-1 rounded hover:bg-red-700"
        >
          Tambah Kategori
        </Link>
      </div>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {categories[0].map((category) => (
            <tr key={category.id} className="hover:bg-gray-100">
              <td className="border text-center border-gray-300 p-2">
                {category.id}
              </td>
              <td className="border text-center border-gray-300 p-2">
                {category.name}
              </td>
              <td className="border text-center border-gray-300 p-2">
                <div className="flex justify-evenly items-center">
                  <Link
                    to={"/admin/editcategory/" + category.id}
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                  >
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DaftarCategory;
