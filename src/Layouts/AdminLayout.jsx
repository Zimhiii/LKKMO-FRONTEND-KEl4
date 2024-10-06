import React, { useRef } from "react";
import Sidebar from "../Components/AdminComponents/Sidebar";

export default function AdminLayout() {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="bg-black w-full"> test </div>
    </div>
  );
}
