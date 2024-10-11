import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import SectionComment from "../Components/ProductComponents/SectionComment";
import img from "../assets/ProductImg.png";

export default function CategoryPage() {
  const [count, setCount] = useState(0);

  const countPlus = () => {
    setCount(count + 1);
  };
  const countMinus = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  document.title = "CategoryPage";
  return (
    <div className="px-[19px] py-[17px] md:mx-[91px]">
      <div className="font-montserrat">
        <h1 className="font-cerotta text-[12px] md:text-[30px] font-bold">
          Detail Produk
        </h1>
        <div className=" md:flex ">
          <div className="w-6/12 hidden md:flex items-center justify-center ">
            <div className="mt-[24px]  justify-center items-center w-[224px] md:py-[100px] h-[189px] md:w-[475px] md:h-[396px] bg-[#E8E7E7] rounded-[26px] hidden md:flex">
              <img
                className="object-cover w-[296px] hidden md:block"
                src={img}
                alt=""
              />
            </div>
          </div>

          <div className="md:w-6/12 w-full">
            <div>
              <h1 className="text-[#736455] font-cerotta text-[12px] md:text-[26px] font-extrabold mt-[18px] stroke-[#736455]">
                MAJESTIC OFFICER UNIFORM
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
                  src={img}
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
                Rp5.000.000,00 / hari
              </h3>
              <p className="text-[12px] md:text-[14px] opacity-55 w-[95%] mt-[10px] text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                commodo justo in orci ullamcorper, a faucibus nisi congue.
                Curabitur facilisis sem id nisl lacinia, vel convallis lectus
                eleifend. Fusce vehicula felis sit amet eros placerat, ac
                fermentum libero interdum. Pellentesque non eros et odio
                hendrerit tristique.
              </p>
              <div className="flex mt-[12px] gap-[10px] ">
                <h2 className="font-bold text-[12px] md:text-[20px]">
                  Warna :{" "}
                </h2>
                <div className="flex items-center space-x-4">
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
                </div>
              </div>

              <div className="flex mt-[12px] gap-[10px]">
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
              </div>

              <div className="mt-[25px] text-[10px] md:text-[20px] flex items-center  h-[23px] md:h-[43px] gap-[16px] md:gap-[46px]">
                <div className="ring-1 ring-[#BB8360] w-fit overflow-hidden flex items-center justify-center gap-[2px] rounded-[5px] h-full">
                  <span
                    className="px-[7px] md:px-[12px] py-[2px] h-full bg-white rounded-l-[2px] cursor-pointer hover:bg-[#BB8360] rounded-r-[2px] flex items-center"
                    onClick={countMinus}
                  >
                    -
                  </span>
                  <span className="px-[7px] md:px-[20px] py-[2px] bg-white">
                    {count}
                  </span>
                  <span
                    className="px-[7px] md:px-[10px] py-[2px] h-full bg-white cursor-pointer hover:bg-[#BB8360] rounded-r-[2px] flex items-center"
                    onClick={countPlus}
                  >
                    +
                  </span>
                </div>
                <button className="flex items-center bg-white h-full px-[7px] py-[2px] rounded-[3px] text-[8px] md:text-[14px] border-solid border-[1px] border-[#BB8360]">
                  Tambahkan Keranjang
                </button>
                <button className="flex items-center bg-[#BB8360] h-full w-fit p-[1px] rounded-[5px] text-[8px] md:text-[14px] text-white px-[6px] ">
                  Rental Sekarang
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
          <SectionComment />
          <SectionComment />
          <SectionComment />
          <SectionComment />
          <SectionComment />
          <SectionComment />
        </div>
      </div>
    </div>
  );
}
