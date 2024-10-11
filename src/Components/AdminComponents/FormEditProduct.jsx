import React, { useEffect, useRef, useState } from "react";
import Select from "./Select";
import EditAkun from "./EditAkun";
import useProductManagementStore from "../../stores/productManagementStore";
import { useParams } from "react-router-dom";

export default function FormEditProduct() {
  const { id } = useParams();
  const { fetchProductById, product } = useProductManagementStore();
  console.log(product);
  const selectedProduct = product;
  const [selectedCategory, setSelectedCategory] = useState(
    selectedProduct.category_id
  );
  const [name, setName] = useState(selectedProduct.name);
  const [price, setPrice] = useState(selectedProduct.price);
  const [stock, setStock] = useState(selectedProduct.stock);
  const [size, setSize] = useState(selectedProduct.size);
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    selectedProduct.subcategory_id
  );
  const [description, setDescription] = useState(selectedProduct.description);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(
    `https://lkkmo-backend-production.up.railway.app/storage/${selectedProduct.image}`
  );

  const nameProductRef = useRef("null");
  const priceRef = useRef(null);
  const stockRef = useRef(null);
  const sizeRef = useRef(null);

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
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const category_id = categories.find(
      (cat) => cat.label.toLowerCase() === selectedCategory
    )?.id;
    const subcategory_id = availableSubCategories.find(
      (sub) => sub.label.toLowerCase() === selectedSubCategory
    )?.id;

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
    console.log(formData);
    // Call updateProduct function to update the product
    await updateProduct(id, formData);
  };

  return (
    <form className="w-full p-5 flex font-inter" onSubmit={handleSubmit}>
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
        <EditAkun
          type="text"
          placeholder="Nama Produk"
          name="Nama Produk"
          value={name}
          ref={nameProductRef}
          onChange={(e) => setName(e.target.value)}
        />
        <EditAkun
          type="number"
          placeholder="Harga"
          value={price}
          name="Harga"
          onChange={(e) => setPrice(e.target.value)}
          ref={priceRef}
        />
        <EditAkun
          type="text"
          placeholder="Ukuran"
          value={size}
          name="Ukuran"
          ref={sizeRef}
          onChange={(e) => setSize(e.target.value)}
        />
        <EditAkun
          type="number"
          value={stock}
          placeholder="Stok"
          onChange={(e) => setStock(e.target.value)}
          name="Stok"
          ref={stockRef}
        />
        <textarea
          className="w-full border rounded p-2 mt-4"
          placeholder="Deskripsi Produk"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex gap-6 mt-[40px]">
          <button
            type="submit"
            className="bg-[#BB8360] px-6 py-2 rounded-[6px] text-[14px] text-white"
          >
            Update
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
