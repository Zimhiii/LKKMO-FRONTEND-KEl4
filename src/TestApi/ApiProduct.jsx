import React, { useEffect, useState } from "react";
import axios from "axios";

const TestApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("https://lkkmo-backend-production.up.railway.app/api/v1/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Data fetched successfully:", response.data);
        // Pastikan mengambil array yang tepat dari response
        setData(response.data.data[0]); // Mengambil array produk dari response
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // Dependency array kosong untuk menjalankan sekali ketika komponen mount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(data)) {
    return <div>Data tidak valid.</div>;
  }

  return (
    <div>
      <h1>Daftar Produk</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>Harga: {item.price}</p>
            <p>Deskripsi: {item.description}</p>
            <p>Ukuran: {item.size}</p>
            <p>Stok: {item.stock}</p>
            <p>Category: {item.category_id}</p>
            <p>Subcategoty: {item.subcategory_id}</p>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100px", height: "100px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestApi;
