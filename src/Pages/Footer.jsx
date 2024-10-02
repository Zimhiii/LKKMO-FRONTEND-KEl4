import React from "react";
import Logo from "../Components/Navbar/Logo";

export default function Footer() {
  return (
    <div className="font-montserrat text-[#736455] py-[15px] flex flex-col justify-between items-center gap-y-2 bg-[#D9D9D9] ">
      <div className="flex flex-col items-center justify-between gap-y-2 md:flex-row md:px-[72px] md:py-[70px] md:w-full">
        {" "}
        <div className="flex flex-col items-center">
          <div className="md:hidden">
            <Logo width={87} height={58} />
          </div>
          <div className="hidden md:block">
            <Logo />
          </div>

          <h1 className="text-[12px] md:text-[20px]">Ur Style Ur Choice</h1>
        </div>
        <div>
          <h1 className="text-[12px] md:text-[20px] font-bold ">
            Segera Kunjungi Gerai Kami
          </h1>
          <p className="flex flex-col text-[10px] md:text-[20px] items-center">
            <span>Jalan Abianyu Gang Sirih LK II</span> <span>Jagabaya I</span>{" "}
            <span>Buka Setiap Hari</span> <span>08.00 - 17.00</span>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[12px] font-bold md:text-[20px] ">
            Temukan Kami
          </h1>
          <a href="#" className="text-[11px] md:text-[20px] ">
            Instagram
          </a>
          <a href="#" className="text-[11px] md:text-[20px] ">
            Youtube
          </a>
          <a href="#" className="text-[11px] md:text-[20px] ">
            TikTok
          </a>
        </div>
      </div>
      <div className="md:w-full md:flex md:justify-end ">
        <h1 className="text-[20px] md:mx-[75px] ">LKKMO DEVELOPER TEAM 4th</h1>
      </div>
    </div>
  );
}
