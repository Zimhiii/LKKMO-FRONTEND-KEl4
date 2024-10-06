import React from "react";
import { useNavigate } from "react-router-dom";
import FormEdit from "../Components/ProfileComponent/FormPassword";

function PasswordPage() {
const navigate = useNavigate();
const toProfile = () => {
navigate("/profile");
};
        return (
            <div>
            <div className="">
                <h1 className="text-[25px] font-cerotta text-left mx-10 py-6 md:text-[40px]">
                    Pengaturan
                </h1>
            </div>
            <div className="justify-center text-[10px] flex items-center h-[23px] gap-[16px]">
                <div className="bg-[#BB8360] w-fit p-[2px] flex gap-[2px] rounded-[5px] h-full">
                    <button
                    onClick={toProfile}
                    className="flex items-center bg-white h-full px-[7px] py-[2px] rounded-[3px] text-[8px] border-solid border-[1px] border-[#BB8360]"
                    >
                    Akun
                    </button>
                    <button
                    onClick={toProfile}
                    className="flex items-center bg-white h-full px-[7px] py-[2px] rounded-[3px] text-[8px] border-solid border-[1px] border-[#BB8360]"
                    >
                    Sandi
                    </button>
                </div>
                </div>
            <div className="justify-center w-3/4 mx-auto">
            <FormEdit />
            </div>
        </div>
    );
}
    
export default PasswordPage;