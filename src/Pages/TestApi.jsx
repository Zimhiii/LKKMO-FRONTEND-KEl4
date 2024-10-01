import React, { useEffect, useState } from "react";
import axios from "axios";

const TestApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Melakukan GET request menggunakan Axios
    axios
      .get("https://lkkmo-backend-production.up.railway.app/api/v1/")
      .then((response) => {
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
      <pre>{JSON.stringify(data, null, 2)}</pre>{" "}
      {/* Menampilkan data dalam format JSON */}
    </div>
  );
};

export default TestApi;
