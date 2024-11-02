import React, { useEffect, useState } from "react";
import useCategoryManagementStore from "../stores/categoryManagementStore";
// import useSubcategoryManagementStore from "../stores/subcategoryManagementStore";
import { useParams, Link, useNavigate } from "react-router-dom";
import useSubcategoryManagementStore from "../stores/subCategoryManagementStore";
// import useSubcategoryManagementStore from "../stores/subCategoryManagementStore";

export default function EditSubCategory() {
  const { category, updateCategory, error } = useCategoryManagementStore();
  const {
    subcategories,
    loading,
    updateSubCategory,
    fetchSubcategoryById,
    deleteSubcategory,
    subcategory,
    setError,
  } = useSubcategoryManagementStore();
  const [name, setName] = useState(subcategory?.name ?? "");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the category and its subcategories when the component mounts
    if (id) {
      fetchSubcategoryById(id);
    }
  }, [id, fetchSubcategoryById]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const subcategoryData = {
      name,
    };

    await updateSubCategory(id, subcategoryData);

    // Clear input field and navigate after submit
    setName("");
    navigate("/admin/daftarcategory");
  };

  const handleDeleteSubcategory = async (subId) => {
    try {
      await deleteSubcategory(subId);
    } catch (error) {
      setError("Error deleting subcategory");
    }
  };

  return (
    <div className="w-full p-5">
      <form
        //   onSubmit={handleSubmit}
        className="mb-8"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nama SubKategori
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
            disabled={loading}
          >
            {loading ? "Mengedit..." : "Edit Subkategori"}
          </button>
        </div>

        {/* <div>
          <button
            onClick={() => {
              console.log("debugging", subcategory);
            }}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            debuggin
          </button>
        </div> */}
      </form>

      {/* Tabel Subkategori */}
      {/* <h3 className="text-lg font-bold mt-8 mb-4">Daftar Subkategori</h3>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Nama Subkategori</th>
            <th className="border px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {subcategories.map((sub) => (
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
        <tfoot>
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
        </tfoot>
      </table> */}
    </div>
  );
}
