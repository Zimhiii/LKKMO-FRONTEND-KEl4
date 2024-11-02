import React from "react";

export default function SectionComment({ id, comment, rating }) {
  return (
    <div className="text-[7px] md:text-[14px] ring-1 ring-[#BB8360] rounded-[15px] px-[13px] py-[4px] ">
      <div className="font-montserrat   items-center flex">
        <span>⭐</span>
        <p className="text-[#000000] text-opacity-50"> {rating}</p>
      </div>
      <h3 className="font-medium mt-[3.5px] mb-[7px]">Elsa Elisa Yohana</h3>
      <p className="text-justify text-[#000000] text-opacity-70 mb-1">
        {comment}
      </p>
    </div>
  );
}
