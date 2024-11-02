import React, { useEffect, useState } from "react";
import img from "../../src/assets/AboutMeImg.png";
import LoginBerhasil from "../Components/PopUpComponent.jsx/LoginBerhasil";

export default function AboutMe() {
  const [isPopVisible, setIsPopVisible] = useState(false);

  useEffect(() => {
    document.title = "About Us";
  });

  const handlePop = () => {
    setIsPopVisible(true);
  };

  return (
    <div className="px-[30px] md:px-[0] pb-[25px]">
      {/* {isPopVisible && (
        <LoginBerhasil boolean={isPopVisible} setPop={setIsPopVisible} />
      )} */}
      <div className="md:flex md:gap-[25px] md:justify-start md:mb-[70px] ">
        <div className="flex justify-center w-full md:w-4/12">
          <img src={img} alt="" className="w-[131px] md:w-auto" />
        </div>
        <div className="flex flex-col gap-[39px] md:gap-[80px] mt-[25px] md:pr-[150px] w-full md:w-8/12">
          <div className="bg-[#D9D9D9] rounded-tl-[55px] rounded-br-[55px] shadow-[0px_4px_30px_rgba(0,0,0,0.25)] backdrop-blur-[35px] backdrop-opacity-25 px-[18px] py-[18px] flex flex-col items-center w-full">
            <h1 className="text-[#BB8360] font-boruna text-[20px] md:text-[60px]">
              Rent Ur Style
            </h1>
            <h2 className="text-[15px] md:text-[30px] text-[#000000] text-opacity-60 font-montserrat italic">
              Your Style, Your Fashion!
            </h2>
          </div>
          <div className="px-[20px] md:text-[50px]">
            <p className="font-montserrat text-[10px] italic md:text-[20px] font-medium text-center">
              Kami adalah platform perentalan baju yang menawarkan berbagai
              pilihan gaya unik untuk setiap momen spesial. Dari cosplay
              karakter favorit, pakaian adat tradisional, hingga busana Natal
              dan kostum peringatan acara, Rent Ur Style hadir untuk memudahkan
              Anda mengekspresikan diri tanpa harus membeli.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[34px] md:mb-[70px] pb-2 md:px-[390px]">
        <h3 className="font-cerotta font-bold text-[#BB8360] text-[20px] md:text-[40px] text-center border-b border-[#000000] md:px-[100px]">
          Ekspresikan gaya Anda Rayakan momen dengan Rent Ur Style!!!
        </h3>
        {/* <button
          onClick={handlePop}
          className="px-6 py-1 border border-[#BB8360] rounded-lg text-[#BB8360] font-medium text-[18px] mt-8 md:py-3 md:px-6 hover:bg-[#BB8360] hover:text-white active:bg-[#BB8360] active:text-white"
        >
          Coba Sekarang
        </button> */}
      </div>
    </div>
  );
}
