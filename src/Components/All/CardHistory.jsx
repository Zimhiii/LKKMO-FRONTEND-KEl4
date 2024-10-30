import React, { useEffect } from "react";
import img from "../../assets/HistoryImageEx.jpg";
import imgMD from "../../assets/CardkategoriMD.png";
import useProductManagementStore from "../../stores/productManagementStore";

export default function CardHistory({
  product_id,
  days,
  price,
  total_price,
  size,
}) {
  const { fetchProductById, product } = useProductManagementStore();
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  useEffect(() => {
    fetchProductById(product_id);
  }, [fetchProductById]);

  const selectedProduct = product.products;

  return (
    <div className="bg-[#D9D9D9] p-[5px] md:px-[35px] md:py-[12px] font-montserrat flex rounded-[10px] gap-[5px] md:gap-[75px]">
      <div>
        <div className="img p-[7px] bg-white rounded-[6px] flex justify-center items-center">
          <img
            src={`https://lkkmo-backend-production.up.railway.app/storage/${selectedProduct.image}`}
            alt="img"
            className="md:hidden"
          />
          <img
            src={`https://lkkmo-backend-production.up.railway.app/storage/${selectedProduct.image}`}
            alt="img"
            className="hidden md:block w-[250px]"
          />
        </div>
        <p className="text-[4px] md:text-[14px] md:pt-[12px] mt-[3px] text-[#6B6B6B]">
          {/* Pesanan dibatalkan */}
        </p>
      </div>
      <div className="w-full">
        <h1 className="text-[9px] md:text-[20px] font-semibold mb-[9px]">
          {selectedProduct.name}
        </h1>
        <div className="text-[6px] md:text-[20px] text-[#000000] text-opacity-70 flex justify-between items-center">
          <h2 className="">{rupiah(selectedProduct.price)} / hari</h2>
          <h2 className="">{selectedProduct.size}</h2>
          <h2>{total_price / selectedProduct.price} hari</h2>
          <h2>{rupiah(total_price)}</h2>
          <button
            onClick={() => console.log(product)}
            className="text-[#ffffff] text-opacity-100 bg-[#BB8360] rounded-[4px] px-[4px] py-[2px]"
          >
            Lihat Penilaian
          </button>
          <button className="text-[#000000] text-opacity-100 border border-[#BB8360] rounded-[4px] px-[4px] py-[2px]">
            Sewa Lagi
          </button>
        </div>
      </div>
    </div>
  );
}
