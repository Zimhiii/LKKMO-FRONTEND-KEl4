import React, { useRef } from "react";
import Sidebar from "../Components/AdminComponents/Sidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-10/12">
        <Outlet />
      </div>
    </div>
  );
}
