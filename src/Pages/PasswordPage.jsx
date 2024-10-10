import React from "react";
import { useNavigate } from "react-router-dom";
import FormEdit from "../Components/ProfileComponent/FormPassword";

function PasswordPage() {
  const navigate = useNavigate();
  const toProfile = () => {
    navigate("/profile");
  };
  return (
    <div className="flex flex-col justify-center items-center my-[20px] md:my-[40px] gap-5 md:gap-8 font-montserrat">
      <div className="flex flex-col gap-3 items-center justify-center">
        <div className="w-[130px] h-[130px] md:w-[250px] md:h-[250px] rounded-full bg-slate-300 shadow-lg shadow-slate-400 "></div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[15px] md:text-[25px]">Fulan Fulanan Filuna</h1>
          <h3 className="text-[10px] md:text-[15px]">Fulan123@gmail.com</h3>
        </div>
      </div>
      <FormEdit />
    </div>
  );
}

export default PasswordPage;
