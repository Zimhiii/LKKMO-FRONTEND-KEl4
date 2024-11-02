import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import SectionComment from "../Components/ProductComponents/SectionComment";
import { useNavigate, useParams } from "react-router-dom";
import useProductManagementStore from "../stores/productManagementStore";
import useOrderManagementStore from "../stores/orderManagementStore";

export default function CategoryPage() {
  const [count, setCount] = useState(1);
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");
  const { fetchProductById, product, products } = useProductManagementStore();
  const { id } = useParams();
  const [activeSize, setActiveSize] = useState(null); // State untuk menyimpan ukuran yang dipilih
  const { createOrder, isOrder, error, setIsOrder, setError, loading } =
    useOrderManagementStore();

  const handleSizeClick = (size) => {
    setActiveSize(size); // Menyetel ukuran yang dipilih sebagai active
  };

  // const selectedProduct = products
  //   ? products.find((product) => product.id == id)
  //   : null;

  useEffect(() => {
    if (id) {
      fetchProductById(id); // Fetch product based on the ID from the URL
    }
    setError(null);
  }, [id, fetchProductById]);

  const selectedProduct = product?.products;
  useEffect(() => {
    document.title = "Page-Product-" + selectedProduct.name; // Set document title on component mount
  }, []);

  const countPlus = () => {
    setCount(count + 1);
  };

  const countMinus = () => {
    if (count > 1) {
      setCount((prevCount) => Math.max(prevCount - 1, 0));
    }
  };

  const handdleError = setTimeout(() => {
    setError(null);
  }, 5000);

  useEffect(() => {
    if (error) {
      handdleError;
    } else {
      setError(null);
    }
  }, [error]);

  // const

  const handleRentalNow = async () => {
    // Hitung total harga
    const totalPrice = count * selectedProduct.price;

    // Data order yang akan dikirim
    const orderData = {
      quantity: count,
      product_id: id,
      size: activeSize,
      rental_start: selectedStartDate,
      rental_end: selectedEndDate,
      total_price: totalPrice,
      status: "Belum",
    };

    console.log(orderData);
    try {
      await createOrder(orderData); // Panggil fungsi createOrder
      if (isOrder) {
        setIsOrder(false);
        useNavigate("/history");
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (!selectedProduct) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <p className="text-4xl font-cerotta ">Loading...</p>;
      </div>
    );
  }
  if (selectedProduct === undefined) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <p className="text-4xl font-cerotta ">Loading...</p>;
      </div>
    );
  }

  return (
    <div className="px-[19px] py-[17px] md:mx-[91px]">
      <div className="font-montserrat">
        <h1 className="font-cerotta text-[12px] md:text-[30px] font-bold">
          Detail Produk
        </h1>
        <div className=" md:flex ">
          <div className="w-6/12 hidden md:flex items-center justify-center ">
            <div className="mt-[24px] overflow-hidden justify-center items-center w-[224px] md:py-[100px] h-[189px] md:w-[475px] md:h-[396px] bg-[#E8E7E7] rounded-[26px] hidden md:flex">
              <img
                className="object-cover w-[296px] hidden md:block"
                src={
                  "http://lkkmo-backend-production.up.railway.app/storage/" +
                  selectedProduct.image
                }
                alt=""
              />
            </div>
          </div>

          <div className="md:w-6/12 w-full">
            <div>
              <h1 className="text-[#736455] font-cerotta text-[12px] md:text-[26px] font-extrabold mt-[18px] stroke-[#736455]">
                {selectedProduct.name}
              </h1>
              <p>
                <span className="text-[7px] md:text-[12px] ">
                  4.5/ <span className="opacity-60 md:text-[12px]">5</span>{" "}
                </span>

                <span className="text-[6px] opacity-60 md:text-[12px]">
                  {" "}
                  (20 Tanggapan){" "}
                </span>

                <span className="text-[6px] text-[#00C838] md:text-[12px]">
                  {" "}
                  | Tersedia
                </span>
              </p>
              <div className="mt-[24px] flex justify-center items-center w-[224px] h-[189px] bg-[#E8E7E7] rounded-[26px] md:hidden ">
                <img
                  className="w-[135px] h-[177px] object-cover md:hidden"
                  src={
                    "http://lkkmo-backend-production.up.railway.app/storage/" +
                    selectedProduct.image
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="font-montserrat mt-[38px] md:mt-[0px]">
              {/* <h1>MAJESTIC OFFICER UNIFORM</h1>
            <p>
                <span>4.5/5</span>
                <span>(20 Tanggapan)</span>
                <span>| Tersedia</span>
            </p> */}
              <h3 className="font-semibold text-[16px] md:text-[18px]">
                {selectedProduct.price} / hari
              </h3>
              <p className="text-[12px] md:text-[14px] opacity-55 w-[95%] mt-[10px] text-justify">
                {selectedProduct.description}
              </p>
              <div className="flex mt-[12px] gap-[10px] ">
                {/* <h2 className="font-bold text-[12px] md:text-[20px]">
                  Warna :{" "}
                </h2> */}
                {/* Warna Kalo Jadi wkwk */}
                {/* <div className="flex items-center space-x-4">
                  <label className="relative focus-within:ring-1 focus-within:ring-black rounded-full">
                    <input className="sr-only" name="warna" type="radio" />
                    <div className="w-4 h-4 md:w-5 md:h-5 bg-[#C615CA] rounded-full"></div>
                  </label>
                  <label className="relative focus-within:ring-1 focus-within:ring-black rounded-full">
                    <input className="sr-only" name="warna" type="radio" />
                    <div className="w-4 h-4 md:w-5 md:h-5 bg-[#A0BCE0] rounded-full"></div>
                  </label>
                  <label className="relative focus-within:ring-1 focus-within:ring-black rounded-full">
                    <input className="sr-only" name="warna" type="radio" />
                    <div className="w-4 h-4 md:w-5 md:h-5 bg-[#15B4CA] rounded-full"></div>
                  </label>
                  <label className="relative focus-within:ring-1 focus-within:ring-black rounded-full">
                    <input className="sr-only" name="warna" type="radio" />
                    <div className="w-4 h-4 md:w-5 md:h-5 bg-[#C1F729] rounded-full"></div>
                  </label>
                </div> */}
              </div>

              {/* <div className="flex mt-[12px] gap-[10px]">
                <h2 className="font-bold text-[12px] md:text-[20px]">
                  Ukuran :{" "}
                </h2>
                <div className="flex items-center space-x-4">
                  <label className="relative ring-1 ring-black focus-within:ring-0 rounded-[3px] group">
                    <input className="sr-only" name="ukuran" type="radio" />
                    <div className="text-[9px] font-normal w-[16px] h-[16px] md:w-[20px] md:h-[20px]  rounded-[3px] flex items-center justify-center group-focus-within:bg-[#BB8360] group-focus-within:text-white text-black">
                      S
                    </div>
                  </label>
                  <label className="relative ring-1 ring-black focus-within:ring-0 rounded-[3px] group">
                    <input className="sr-only" name="ukuran" type="radio" />
                    <div className="text-[9px] font-normal w-[16px] h-[16px] md:w-[20px] md:h-[20px]  rounded-[3px] flex items-center justify-center group-focus-within:bg-[#BB8360] group-focus-within:text-white text-black">
                      M
                    </div>
                  </label>
                  <label className="relative ring-1 ring-black focus-within:ring-0 rounded-[3px] group">
                    <input className="sr-only" name="ukuran" type="radio" />
                    <div className="text-[9px] font-normal w-[16px] h-[16px] md:w-[20px] md:h-[20px]  rounded-[3px] flex items-center justify-center group-focus-within:bg-[#BB8360] group-focus-within:text-white text-black">
                      L
                    </div>
                  </label>
                  <label className="relative ring-1 ring-black focus-within:ring-0 rounded-[3px] group">
                    <input className="sr-only" name="ukuran" type="radio" />
                    <div className="text-[9px] font-normal w-[16px] h-[16px] md:w-[20px] md:h-[20px]  rounded-[3px] flex items-center justify-center group-focus-within:bg-[#BB8360] group-focus-within:text-white text-black">
                      XL
                    </div>
                  </label>
                </div>
              </div> */}
              <div className="flex mt-[12px] gap-[10px]">
                <h2 className="font-bold text-[12px] md:text-[20px]">
                  Ukuran :{" "}
                </h2>
                <div className="flex items-center space-x-4">
                  {["S", "M", "L", "XL"].map((size) => (
                    <label
                      key={size}
                      className={`relative ring-1 ring-black rounded-[3px] group  ${
                        activeSize === size
                          ? "bg-[#BB8360] text-white"
                          : "text-black hover:text-[#BB8360]"
                      }`} // Tambahkan style ketika active
                      onClick={() => handleSizeClick(size)} // Setel ukuran yang dipilih saat label di klik
                    >
                      <input
                        className="sr-only cursor-pointer "
                        name="ukuran"
                        type="radio"
                        checked={activeSize === size}
                        onChange={() => handleSizeClick(size)}
                        required
                      />
                      <div className="text-[9px] font-normal w-[16px] h-[16px] md:w-[20px] md:h-[20px] rounded-[3px] flex items-center justify-center cursor-pointer ">
                        {size}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              {/* Tambahkan input tanggal di sini */}
              <div className="mt-4">
                <label className="text-[12px] md:text-[18px] font-semibold">
                  Pilih Tanggal Awal:
                </label>
                <input
                  type="date"
                  value={selectedStartDate}
                  onChange={(e) => setSelectedStartDate(e.target.value)}
                  className="ml-2 px-2 py-1 border border-gray-300 rounded cursor-pointer"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="text-[12px] md:text-[18px] font-semibold">
                  Pilih Tanggal Akhir:
                </label>
                <input
                  type="date"
                  value={selectedEndDate}
                  onChange={(e) => setSelectedEndDate(e.target.value)}
                  className="ml-2 px-2 py-1 border border-gray-300 rounded cursor-pointer"
                  required
                />
              </div>

              {error && (
                <div className="text-[12px] md:text-[18px] text-red-500">
                  {error}
                  <br />
                  Silahkan isi form dengan benar
                </div>
              )}

              <div className="mt-[25px] text-[10px] md:text-[20px] flex items-center  h-[23px] md:h-[43px] gap-[16px] md:gap-[46px]">
                <div className="ring-1 ring-[#BB8360] w-fit overflow-hidden flex items-center justify-center gap-[2px] rounded-[5px] h-full">
                  <button
                    className="px-[7px] md:px-[12px] active:bg-[#805a42] py-[2px] h-full bg-white rounded-l-[2px] cursor-pointer hover:bg-[#BB8360] rounded-r-[2px] flex items-center"
                    onClick={countMinus}
                  >
                    -
                  </button>
                  <span className="px-[10px] md:px-[20px] py-[2px] bg-white">
                    {count}
                  </span>
                  <button
                    className="px-[7px] active:bg-[#805a42] md:px-[10px] py-[2px] h-full bg-white cursor-pointer hover:bg-[#BB8360] rounded-r-[2px] flex items-center"
                    onClick={countPlus}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => console.log(orderData)}
                  className="flex items-center bg-white h-full px-[7px] py-[2px] rounded-[3px] text-[8px] md:text-[14px] border-solid border-[1px] border-[#BB8360]"
                >
                  Tambahkan Keranjang
                </button>
                <button
                  onClick={handleRentalNow}
                  className="flex items-center bg-[#BB8360] h-full w-fit p-[1px] rounded-[5px] text-[8px] md:text-[14px] text-white px-[6px] hover:bg-[#9e6d50] active:border-solid active:border-[1px] active:border-[#BB8360] active:bg-white active:text-[#BB8360] active:scale-95 transition duration-100 ease-in-out"
                >
                  {loading ? "Loading..." : "Rental Sekarang"}
                  {/* Rental Sekarang */}
                </button>
                <div className=" px-[3px] py-[2px] md:p-[6px] text-[16px] md:text-[30px] top-0 -right-1 md:-top-4 md:-right-3 bg-white rounded-[6px] md:rounded-[0px] border-black border-[1px]">
                  <CiHeart className="  text-[#000000]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 font-montserrat">
        <div className="text-[12px] md:text-[14px]  ">
          <span>Semua Tanggapan</span>{" "}
          <span className="text-[#000000] text-opacity-50 ">{"(20)"}</span>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-3  md:gap-6 mt-[12px]">
          {selectedProduct.reviews.map((review) => (
            <SectionComment
              id={review.id}
              comment={review.comment}
              rating={review.rating}
            />
          ))}
          {/* <SectionComment />
          <SectionComment />
          <SectionComment />
          <SectionComment />
          <SectionComment /> */}
        </div>
      </div>
    </div>
  );
}
