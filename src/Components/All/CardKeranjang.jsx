import React, { useEffect, useState } from "react";
import img from "../../assets/HistoryImageEx.jpg";
import imgMD from "../../assets/CardkategoriMD.png";
import { FaCarSide } from "react-icons/fa";
import { HiTrash } from "react-icons/hi2";
import useProductManagementStore from "../../stores/productManagementStore";
import useOrderManagementStore from "../../stores/orderManagementStore";

export default function CardKeranjang({
  product_id,
  price,
  size,
  total_price,
  key,
  order_id,
  rental_start,
  rental_end,
  date,
  status,
}) {
  const { fetchProducts, products } = useProductManagementStore();
  const { deleteOrder } = useOrderManagementStore();
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

  const handdleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      try {
        await deleteOrder(order_id);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const selectedProduct = products.find((product) => product.id == product_id);

  if (!selectedProduct) {
    return (
      <div>
        <h1>{product_id}</h1>
        <h1>Product telah dihapus</h1>
      </div>
    );
  }

  return (
    <div className=" p-[5px] font-montserrat  rounded-[10px]  ring-2 ring-[#D9D9D9] flex justify-between">
      <div className="flex gap-[5px]">
        <div className="img p-[7px] bg-white rounded-[6px] flex justify-center items-center ">
          <img
            src={`https://lkkmo-backend-production-3ab2.up.railway.app/storage/${selectedProduct.image}`}
            alt="img"
            className=" md:hidden w-[100px] h-[100px] object-cover object-center "
          />
          <img
            src={`https://lkkmo-backend-production-3ab2.up.railway.app/storage/${selectedProduct.image}`}
            alt="img"
            className="md:w-[189px] md:h-[217px] hidden md:block"
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-[9px] font-semibold md:text-[24px]">
            {selectedProduct?.name}
          </h1>
          <div className="text-[6px] md:text-[14px] text-[#000000] text-opacity-70 flex flex-col gap-[10px]">
            <h2 className="">
              Ukuran :{" "}
              <span className="text-[#000000] text-opacity-50">{size}</span>{" "}
            </h2>

            <h2 className="text-[8px] md:text-[20px] font-semibold ">
              {rupiah(selectedProduct?.price)} / hari
            </h2>
            <h2 className="text-[8px] md:text-[20px] font-semibold ">
              Rental Start : {rental_start}
            </h2>
            <h2 className="text-[8px] md:text-[20px] font-semibold ">
              Rental End : {rental_end}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end font-montserrat p-[3px] md:p-[25px] md:gap-5">
        <button onClick={handdleDelete} className="flex justify-end ">
          <HiTrash className=" text-[#FF3333]  w-[10px] md:w-[30px] md:h-[30px]" />
        </button>
      </div>
    </div>
  );
}
