import React, { useEffect, useState } from "react";
import axios from "axios";

const TestApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ambil token dari local storage
    const token = localStorage.getItem("token");

    // Melakukan GET request menggunakan Axios dengan header Authorization
    axios
      .get(
        "https://lkkmo-backend-production-3ab2.up.railway.app/api/v1/products",
        {
          headers: {
            Authorization: `Bearer ${token}`, // Tambahkan token ke header
          },
        }
      )
      .then((response) => {
        console.log("Data fetched successfully:", response.data);
        setData(response.data); // Menyimpan data dari API ke state
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

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default TestApi;
