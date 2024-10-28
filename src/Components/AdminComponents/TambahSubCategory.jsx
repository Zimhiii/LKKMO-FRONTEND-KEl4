import React, { useState } from "react";
import useSubcategoryManagementStore from "../../stores/subCategoryManagementStore";
import { useParams } from "react-router-dom";

export default function TambahSubCategory() {
  const [name, setName] = useState("");
  const addSubcategory = useSubcategoryManagementStore(
    (state) => state.addSubcategory
  );
  const id = useParams().id;
  const loading = useSubcategoryManagementStore((state) => state.loading);
  const error = useSubcategoryManagementStore((state) => state.error);
  const setError = useSubcategoryManagementStore((state) => state.setError);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, " test ", id);
    // Lakukan pengecekan terhadap input
    const subcategoryData = {
      name,
      category_id: id,
    };
    await addSubcategory(subcategoryData);
    setName("");
    setError(null);
    // window.location.href = "/admin/daftarcategory/category/" + categoryId;
  };

  return (
    <form className="w-full p-5" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Nama Subkategori
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Masukkan nama subkategori"
          required
        />
      </div>

      <div className="mb-4">
        {/* <label
          htmlFor="categoryId"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          ID Kategori
        </label> */}
        {/* <input
          type="number"
          id="categoryId"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Masukkan ID kategori"
          required
        /> */}
      </div>

      {error && <p className="text-red-500 text-xs italic">{error}</p>}

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={loading} // Disabled button saat loading
        >
          {loading ? "Menambahkan..." : "Tambahkan Subkategori"}
        </button>
      </div>
    </form>
  );
}
