import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function NavSearch() {
  // const
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handdleSearch = () => {
    navigate(`/search/${search}`);
  };

  return (
    <div className="w-2/3 md:w-auto bg-[#A7A7A7]  font-montserrat px-2 py-1 md:px-4 md:py-2 rounded-full shadow-slate-400 shadow-md">
      <form
        action=""
        className="w-full flex  justify-start items-center text-white"
      >
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            // console.log(search);
            handdleSearch();
          }}
          className="text-[#736455] mr-2 bg-white rounded-full w-[20px] h-[20px]  md:w-[40px] md:h-[40px]   flex items-center justify-center"
        >
          <FaSearch className="text-[#736455] text-[12px] md:text-[24px]" />
        </button>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" bg-transparent text-[10px] md:text-[20px] placeholder:text-white focus:outline-none focus:ring-0"
          type="search"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handdleSearch();
            }
          }}
          placeholder="Cari Kostum kamu"
        />
      </form>
    </div>
  );
}
