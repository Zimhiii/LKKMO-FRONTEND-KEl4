import React, { useEffect, useRef, useState } from "react";
import Select from "./Select";
import EditAkun from "./EditAkun";
import useProductManagementStore from "../../stores/productManagementStore";
import { useParams } from "react-router-dom";
import useCategoryManagementStore from "../../stores/categoryManagementStore";

export default function FormEditProduct() {
  const { id } = useParams();
  const { product, updateProduct } = useProductManagementStore();
  const { categories } = useCategoryManagementStore();

  useEffect(() => {
    document.title = "Edit Product - " + id;
  });

  const selectedProduct = product?.products || {};
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
  const [preview, setPreview] = useState(
    selectedProduct.image
      ? `https://lkkmo-backend-production-3ab2.up.railway.app/storage/${selectedProduct.image}`
      : ""
  );
  const [file, setFile] = useState(selectedProduct.image || null);

  const nameProductRef = useRef("null");
  const priceRef = useRef(null);
  const stockRef = useRef(null);
  const sizeRef = useRef(null);

  const allCategory = categories?.[0] || {};
  const availableSubCategories =
    allCategory[selectedCategory - 1]?.subcategories || [];

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const token = localStorage.getItem("token"); // Ambil token dari localStorage
  //   const formData = new FormData();
  //   formData.append("name", name);
  //   formData.append("price", price);
  //   formData.append("description", description);
  //   formData.append("stock", stock);
  //   if (file) {
  //     formData.append("image", file);
  //   }
  //   formData.append("category_id", selectedCategory);
  //   formData.append("subcategory_id", selectedSubCategory);

  //   const updateProducts = async (id, formData) => {
  //     try {
  //       const response = await fetch(
  //         `https://lkkmo-backend-production-3ab2.up.railway.app/api/v1/products/${id}`,
  //         {
  //           method: "PUT",
  //           body: JSON.stringify(formData),
  //           headers: {
  //             Authorization: `Bearer ${token}`, // Gunakan token dalam header
  //           },
  //         }
  //       );
  //       if (!response.ok) throw new Error("Update failed");
  //       const data = await response.json();
  //       return data;
  //     } catch (error) {
  //       console.error("Error updating product:", error);
  //     }
  //   };

  //   // const jsondata = {
  //   //   name: name ? name : selectedProduct.name,
  //   //   price: price ? price : selectedProduct.price,
  //   //   description: description ? description : selectedProduct.description,
  //   //   stock: stock ? stock : selectedProduct.stock,
  //   //   category_id: selectedCategory
  //   //     ? selectedCategory
  //   //     : selectedProduct.category_id,
  //   //   subcategory_id: selectedSubCategory
  //   //     ? selectedSubCategory
  //   //     : selectedProduct.subcategory_id,
  //   //   file: file,
  //   // };

  //   await updateProducts(id, formData);
  //   // console.log("Product updated:", FormData); // Tunggu hingga update selesai
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("name", name); // Tanpa spasi
    formData.append("price", price); // Tanpa spasi
    formData.append("description", description); // Tanpa spasi
    formData.append("stock", stock); // Tanpa spasi
    if (file) {
      formData.append("image", file); // Tanpa spasi
    }
    formData.append("category_id", selectedCategory);
    formData.append("subcategory_id", selectedSubCategory);

    const updateProducts = async (id, formData) => {
      try {
        const response = await fetch(
          `https://lkkmo-backend-production-3ab2.up.railway.app/api/v1/products/${id}`,
          {
            method: "POST",
            body: formData, // Kirim objek formData
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`Update failed: ${response.status} ${errorMessage}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error updating product:", error);
      }
    };

    await updateProducts(id, formData);
  };

  // console.log({
  //   name,
  //   price,
  //   description,
  //   stock,
  //   selectedCategory,
  //   selectedSubCategory,
  //   file,
  // });

  // console.log(name);

  return (
    <form className="w-full p-5 flex font-inter" onSubmit={handleSubmit}>
      <div className="w-7/12">
        <h2 className="text-[20px] mb-[30px]">Informasi Produk</h2>
        <Select
          name="Kategori"
          options={allCategory.map((cat) => ({
            value: cat.id,
            label: cat.name,
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
            value: sub.id,
            label: sub.name,
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
        <div className="w-[215px] flex flex-col gap-2">
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
