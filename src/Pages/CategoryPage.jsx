import React from "react";
import Content from "../Components/CategoryComponents/Content";
import { Outlet, useParams } from "react-router-dom";

export default function CategoryPage() {
  document.title = "CategoryPage";
  return (
    <div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
