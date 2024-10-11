import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";
import { useLoginStore, useUserStore } from "../Store/stored";

const DefaultLayout = () => {
  const user = useUserStore((state) => state.user);
  const { setLogin } = useLoginStore();

  const handleLogin = () => {
    if (localStorage.getItem("token")) {
      setLogin(true);
    }
  };

  useEffect(() => {
    handleLogin;
  });

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      {console.log("user:", user)}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
