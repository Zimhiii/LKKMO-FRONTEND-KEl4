import React, { useRef, useState } from "react";
import Select from "./Select";
import { IoOpenOutline } from "react-icons/io5";
import useProductManagementStore from "../../stores/productManagementStore";
import InputTambahAkun from "./inputTambahAkun";

export default function FormTambahProduct() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null); // State for image preview
  const nameProductRef = useRef(null);
  const priceRef = useRef(null);
  const stockRef = useRef(null);
  const sizeRef = useRef(null);
  const { addProduct } = useProductManagementStore();

  const handleKeyDown = (event, nextInputRef) => {
    if (event.key === "Enter") {
      event.preventDefault();
      nextInputRef?.current?.focus();
    }
  };

  const categories = [
    { id: 1, label: "Cosplay" },
    { id: 2, label: "Karnaval" },
  ];

  const subCategories = {
    cosplay: [
      { id: 1, label: "Anime" },
      { id: 2, label: "Comic" },
      { id: 3, label: "Game" },
    ],
    karnaval: [
      { id: 1, label: "Adat" },
      { id: 2, label: "Peringatan" },
    ],
  };

  const availableSubCategories = subCategories[selectedCategory] || [];

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    // Create a preview URL for the selected image
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ambil nilai dari input refs
    const name = nameProductRef.current.value;
    const price = parseFloat(priceRef.current.value);
    const stock = parseInt(stockRef.current.value);
    const size = sizeRef.current.value;

    const category_id = categories.find(
      (cat) => cat.label.toLowerCase() === selectedCategory
    )?.id;
    const subcategory_id = availableSubCategories.find(
      (sub) => sub.label.toLowerCase() === selectedSubCategory
    )?.id;

    // Buat form data untuk mengirim file
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("stock", stock);
    if (file) {
      formData.append("image", file);
    }
    formData.append("category_id", category_id);
    formData.append("size", size);
    formData.append("subcategory_id", subcategory_id);

    // Panggil fungsi addProduct dari store
    await addProduct(formData);
  };

  return (
    <form className="w-full flex font-inter" onSubmit={handleSubmit}>
      <div className="w-7/12">
        <h2 className="text-[20px] mb-[30px]">Informasi Produk</h2>
        <Select
          name="Kategori"
          options={categories.map((cat) => ({
            value: cat.label.toLowerCase(),
            label: cat.label,
          }))}
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setSelectedSubCategory("");
          }}
        />
        <Select
          name="Subkategori"
          options={availableSubCategories.map((sub) => ({
            value: sub.label.toLowerCase(),
            label: sub.label,
          }))}
          value={selectedSubCategory}
          onChange={(e) => setSelectedSubCategory(e.target.value)}
          disabled={!selectedCategory}
        />
        <InputTambahAkun
          type="text"
          placeholder="Nama Produk"
          name="Nama Produk"
          onKeyDown={(event) => handleKeyDown(event, priceRef)}
          ref={nameProductRef}
        />
        <InputTambahAkun
          type="number"
          placeholder="Harga"
          name="Harga"
          onKeyDown={(event) => handleKeyDown(event, stockRef)}
          ref={priceRef}
        />
        <InputTambahAkun
          type="text"
          placeholder="Ukuran"
          name="Ukuran"
          onKeyDown={(event) => handleKeyDown(event, null)}
          ref={sizeRef} // Tambahkan useRef untuk size
        />
        <InputTambahAkun
          type="number"
          placeholder="Stok"
          name="Stok"
          onKeyDown={(event) => handleKeyDown(event, null)}
          ref={stockRef}
        />
        <textarea
          className="w-full border rounded p-2 mt-4"
          placeholder="Deskripsi Produk"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Preview image */}

        <div className="flex gap-6 mt-[40px]">
          <button
            type="submit"
            className="bg-[#BB8360] px-6 py-2 rounded-[6px] text-[14px] text-white"
          >
            Tambah
          </button>
          <button
            type="button"
            className="ring-1 ring-red-500 px-4 text-red-500 py-2 rounded-[6px]"
          >
            Hapus
          </button>
        </div>
      </div>
      <div className="w-5/12 flex justify-center items-center">
        <div className="w-[215px] flex flex-col gap-2 ">
          <div className="w-full h-[235px] ring-1 ring-[#C2C2C2] overflow-hidden rounded-[8px] flex justify-center items-center">
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-auto object-cover rounded-[8px]"
              />
            )}
          </div>
          <div className="mt-4">
            <input type="file" onChange={handleFileChange} />
          </div>
        </div>
      </div>
    </form>
  );
}
