import React, { useState } from "react";
import Content from "../Components/CategoryComponents/Content";
import { CiHeart } from "react-icons/ci";
import cardImg from "../assets/cardImgEX.png";

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
    <div className="px-[19px] py-[17px]">
      <div className="font-montserrat">
        <h1 className="font-cerotta text-[12px] font-bold">Detail Produk</h1>
        <h1 className="text-[#736455] font-cerotta text-[12px] font-extrabold mt-[18px] stroke-[#736455]">
          MAJESTIC OFFICER UNIFORM
        </h1>
        <p>
          <span className="text-[7px]">
            4.5/ <span className="opacity-60">5</span>{" "}
          </span>
          <span className="text-[6px] opacity-60"> (20 Tanggapan) </span>
          <span className="text-[6px] text-[#00C838]"> | Tersedia</span>
        </p>
        <div className="mt-[24px] flex justify-center items-center w-[224px] h-[189px] bg-[#E8E7E7] rounded-[26px]">
          <img
            className="w-[135px] h-[177px] object-cover"
            src={cardImg}
            alt=""
          />
        </div>
      </div>
      <div className="font-montserrat mt-[38px]">
        {/* <h1>MAJESTIC OFFICER UNIFORM</h1>
            <p>
                <span>4.5/5</span>
                <span>(20 Tanggapan)</span>
                <span>| Tersedia</span>
            </p> */}
        <h3 className="font-semibold text-[16px]">Rp5.000.000,00 / hari</h3>
        <p className="text-[12px] opacity-55 w-[95%] mt-[10px] text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          commodo justo in orci ullamcorper, a faucibus nisi congue. Curabitur
          facilisis sem id nisl lacinia, vel convallis lectus eleifend. Fusce
          vehicula felis sit amet eros placerat, ac fermentum libero interdum.
          Pellentesque non eros et odio hendrerit tristique.
        </p>
        <div className="flex mt-[12px] gap-[10px] ">
          <h2 className="font-bold text-[12px]">Warna : </h2>
          <div class="flex items-center space-x-4">
            <label class="relative focus-within:ring-1 focus-within:ring-black rounded-full">
              <input class="sr-only" name="warna" type="radio" />
              <div class="w-4 h-4 bg-[#C615CA] rounded-full"></div>
            </label>
            <label class="relative focus-within:ring-1 focus-within:ring-black rounded-full">
              <input class="sr-only" name="warna" type="radio" />
              <div class="w-4 h-4 bg-[#A0BCE0] rounded-full"></div>
            </label>
            <label class="relative focus-within:ring-1 focus-within:ring-black rounded-full">
              <input class="sr-only" name="warna" type="radio" />
              <div class="w-4 h-4 bg-[#15B4CA] rounded-full"></div>
            </label>
            <label class="relative focus-within:ring-1 focus-within:ring-black rounded-full">
              <input class="sr-only" name="warna" type="radio" />
              <div class="w-4 h-4 bg-[#C1F729] rounded-full"></div>
            </label>
          </div>
        </div>

        <div className="flex mt-[12px] gap-[10px] ">
          <h2 className="font-bold text-[12px]">Ukuran : </h2>
          <div class="flex items-center space-x-4">
            <label class="relative ring-1 ring-black focus-within:ring-0 rounded-[3px] group">
              <input class="sr-only" name="ukuran" type="radio" />
              <div class="text-[9px] font-normal w-[16px] h-[16px] rounded-[3px] flex items-center justify-center group-focus-within:bg-[#BB8360] group-focus-within:text-white text-black">
                S
              </div>
            </label>
            <label class="relative ring-1 ring-black focus-within:ring-0 rounded-[3px] group">
              <input class="sr-only" name="ukuran" type="radio" />
              <div class="text-[9px] font-normal w-[16px] h-[16px] rounded-[3px] flex items-center justify-center group-focus-within:bg-[#BB8360] group-focus-within:text-white text-black">
                M
              </div>
            </label>
            <label class="relative ring-1 ring-black focus-within:ring-0 rounded-[3px] group">
              <input class="sr-only" name="ukuran" type="radio" />
              <div class="text-[9px] font-normal w-[16px] h-[16px] rounded-[3px] flex items-center justify-center group-focus-within:bg-[#BB8360] group-focus-within:text-white text-black">
                L
              </div>
            </label>
            <label class="relative ring-1 ring-black focus-within:ring-0 rounded-[3px] group">
              <input class="sr-only" name="ukuran" type="radio" />
              <div class="text-[9px] font-normal w-[16px] h-[16px] rounded-[3px] flex items-center justify-center group-focus-within:bg-[#BB8360] group-focus-within:text-white text-black">
                XL
              </div>
            </label>
          </div>
        </div>

        <div className="mt-[25px] text-[10px] flex items-center h-[23px] gap-[16px]">
          <div className="bg-[#BB8360] w-fit p-[2px] flex gap-[2px] rounded-[5px] h-full">
            <span
              className="px-[7px] py-[2px] bg-white rounded-l-[2px] cursor-pointer"
              onClick={countMinus}
            >
              -
            </span>
            <span className="px-[7px] py-[2px] bg-white">{count}</span>
            <span className="px-[7px] py-[2px] text-white" onClick={countPlus}>
              +
            </span>
          </div>
          <h1 className="flex items-center bg-white h-full px-[7px] py-[2px] rounded-[3px] text-[8px] border-solid border-[1px] border-[#BB8360]">
            Tambahkan Keranjang
          </h1>
          <h1 className="flex items-center bg-[#BB8360] h-full w-fit p-[1px] rounded-[5px] text-[8px] text-white px-[6px]">
            Rental Sekarang
          </h1>
          <div className=" px-[3px] py-[2px] md:p-[6px] text-[16px] md:text-[30px] top-0 -right-1 md:-top-4 md:-right-3 bg-white rounded-[6px] md:rounded-[14px] border-black border-[1px]">
            <CiHeart className="  text-[#000000]" />
          </div>
        </div>
      </div>
    </div>
  );
}
