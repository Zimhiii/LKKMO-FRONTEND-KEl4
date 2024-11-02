import React, { useEffect, useState } from "react";
import useProductManagementStore from "../../stores/productManagementStore";
// import ReviewPopup from "./ReviewPopup"; // Import the popup component
import api from "../../api"; // Import your API configuration
import ReviewPopup from "../ReviewComp/ReviewPopup";
// import ReviewPopup from "../ReviewComp/ReviewPopUp";

export default function CardHistory({
  product_id,
  days,
  price,
  total_price,
  size,
  status,
  rental_start,
  rental_end,
}) {
  const { fetchProducts, products } = useProductManagementStore();
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the popup visibility
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductById = async () => {
      setLoading(true);
      try {
        const response = await api.get(`/products/${product_id}`, {
          headers: { Authorization: `Bearer YOUR_TOKEN` }, // Update with your token logic
        });
        setProduct(response.data.data[0]);
        setLoading(false);
      } catch (err) {
        setError("Error fetching product");
        setLoading(false);
      }
    };

    if (product_id) fetchProductById();
  }, [product_id]);

  useEffect(() => {
    if (!products) {
      fetchProducts();
    }
  }, [fetchProducts, products]);

  const selectedProduct = products.find((product) => product.id == product_id);

  if (!selectedProduct) {
    return (
      <div>
        <h1>{product_id}</h1>
        <h1>Product telah dihapus</h1>
      </div>
    );
  }

  const tanggal1 = new Date(rental_start);

  // Tanggal kedua
  const tanggal2 = new Date(rental_end);

  // Menghitung selisih waktu dalam milidetik
  const selisihWaktu = tanggal2 - tanggal1;

  // Mengonversi selisih waktu ke dalam hari
  const day = selisihWaktu / (1000 * 60 * 60 * 24);
  return (
    <div className="bg-[#D9D9D9] p-[5px] md:px-[35px] md:py-[12px] font-montserrat flex rounded-[10px] gap-[5px] md:gap-[75px]">
      <div>
        <div className="img p-[7px] bg-white rounded-[6px] flex justify-center items-center">
          <img
            src={`https://lkkmo-backend-production-3ab2.up.railway.app/storage/${selectedProduct.image}`}
            alt="img"
            className="md:hidden"
          />
          <img
            src={`https://lkkmo-backend-production-3ab2.up.railway.app/storage/${selectedProduct.image}`}
            alt="img"
            className="hidden md:block w-[250px] h-[250px] object-cover"
          />
        </div>
      </div>
      <div className="w-full">
        <div>
          <h1 className="text-[9px] md:text-[20px] font-semibold mb-[9px]">
            {selectedProduct.name}
          </h1>
          <div className="text-[6px] md:text-[20px] text-[#000000] text-opacity-70 flex justify-between items-center">
            {/* <h1>{product_id}</h1> */}
            <h2 className="">{rupiah(selectedProduct.price)} / hari</h2>
            <h2 className="">{selectedProduct.size}</h2>
            <h2>{day} hari</h2>
            <h2>{rupiah(total_price)}</h2>

            {/* Button to open the review popup */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-[#ffffff] bg-[#BB8360] rounded-[4px] px-[4px] py-[2px]"
            >
              {selectedProduct.review ? "Lihat Penilaian" : "Tambah Penilaian"}
            </button>

            <Link
              to={`/product/${selectedProduct.id}`}
              className="text-[#000000] border border-[#BB8360] rounded-[4px] px-[4px] py-[2px]"
            >
              Sewa Lagi
            </Link>
          </div>
          <div>
            <h1 className="text-[6px] md:text-[20px] text-[#000000] text-opacity-70">
              Rental Start: {rental_start}
            </h1>
            <h1 className="text-[6px] md:text-[20px] text-[#000000] text-opacity-70">
              Rental End: {rental_end}
            </h1>
          </div>
          <div>
            <h1>{status}</h1>
          </div>
        </div>
      </div>

      {/* Review Popup Component */}
      {isModalOpen && (
        <ReviewPopup
          productId={selectedProduct.id}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
