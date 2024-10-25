import React from "react";

import { useParams } from "react-router-dom";
import CardItem from "../Components/All/CardItem";
import Content from "../Components/DashboardCom/Content";

export default function SubCategoryPage() {
  const { category } = useParams();
  const { subcategory } = useParams();
  document.title = "Category - " + subcategory;
  return (
    <div>
      <div className="flex flex-col items-center mb-[44px] md:mb-[84px]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-[100px]">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
      <button
        className="rounded-sm p-5 ring-1 ring-slate-500"
        onClick={() => console.log("test", category)}
      >
        a
      </button>

      {/* <div className="grid grid-cols-2  md:grid-cols-3 gap-3 md:gap-[100px]">
        <CardItem />
        <CardItem />
        <CardItem classname="hidden md:block" />
      </div> */}
    </div>
  );
}
