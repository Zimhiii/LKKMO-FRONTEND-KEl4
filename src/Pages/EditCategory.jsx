import React, { useEffect, useState } from "react";
import useCategoryManagementStore from "../stores/categoryManagementStore";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function EditCategory() {
  const { category, updateCategory, loading, error } =
    useCategoryManagementStore();
  const [name, setName] = useState(category?.name ?? ""); // State untuk nama kategori
  const { id } = useParams();
  const subcategories = category?.subcategories ?? [];
  console.log(category);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const categoryData = {
      name, // Data yang dikirim hanya berisi field `name`
    };

    await updateCategory(id, categoryData); // Panggil fungsi `updateCategory`

    // Clear input field setelah submit
    setName("");
    // window.location.href = "/admin/daftarcategory";
    navigate("/admin/daftarcategory");
  };

  return (
    <div className="w-full p-5">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nama Kategori
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Masukkan nama kategori"
            required
          />
        </div>

        {error && <p className="text-red-500 text-xs italic">{error}</p>}

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loading} // Disabled button saat loading
          >
            {loading ? "Mengedit..." : "Edit Kategori"}
          </button>
        </div>
      </form>

      {/* Tabel Subkategori */}
      <h3 className="text-lg font-bold mt-8 mb-4">Daftar Subkategori</h3>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Nama Subkategori</th>
            <th className="border px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {subcategories &&
            subcategories.map((sub) => (
              <tr key={sub.id} className="hover:bg-gray-100">
                <td className="border text-center px-4 py-2">{sub.id}</td>
                <td className="border text-center px-4 py-2">{sub.name}</td>
                <td className="border text-center px-4 py-2">
                  <div className="flex space-x-2 justify-evenly">
                    <Link
                      to={`/admin/editsubcategory/${sub.id}`}
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteSubcategory(sub.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
        <tr className="text-end">
          <td colSpan={3} className="p-6">
            <Link
              to={`/admin/tambahsubcategory/${id}`}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Tambah Subkategori
            </Link>
          </td>
        </tr>
      </table>
    </div>
  );
}
