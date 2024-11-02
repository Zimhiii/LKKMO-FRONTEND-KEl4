import { useEffect } from "react";
import ButtonLogin from "../Components/LoginComponents/ButtonLogin";
import FormSignUp from "../Components/LoginComponents/FormSignUp";
import HeaderLogin from "../Components/LoginComponents/LoginHeader";
import { Link, useNavigate } from "react-router-dom";

function SignupPage() {
  document.title = "Signup";
  const navigate = useNavigate();
  const toLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  });

  return (
    <div className="md:flex font-montserrat">
      <HeaderLogin
        title="Welcome Back!"
        body="Masuk ke dalam akun Anda untuk menggunakan semua fitur"
        content="Masuk"
        image={"Signup.png"}
        onClick={toLogin}
        classnameimg={"top-0 md:bottom-0 md:left-0 md:top-auto md:h-2/5"}
        classname={
          "md:rounded-l-none md:rounded-tr-[74px] md:rounded-br-[74px]"
        }
      />

      <div className="container w-3/4  mx-auto md:w-1/2 md:px-8 md:min-h-screen">
        <h1 className="text-[25px] font-bold text-center py-6 md:text-[30px]">
          Buat Akun
        </h1>
        <FormSignUp />

        <div className="flex justify-center items-center mt-10">
          <hr class="w-full border-t border-slate-600" />
          <span class="mx-1 text-slate-500">atau</span>
          <hr class="w-full border-t border-slate-600" />
        </div>

        <div className=" w-11/12 mx-auto mt-8 mb-20 flex justify-center">
          {/* <ButtonLogin img="Google.svg">Google</ButtonLogin>
        
          <ButtonLogin img="Facebook.svg">Facebook</ButtonLogin> */}

          <Link
            to={"/"}
            className="hover:border text-center w-fit hover:border-[#BB8360] hover:bg-transparent hover:text-[#BB8360] hover:font-medium  rounded-lg px-6 py-2 flex justify-center items-center gap-2 mb-4 shadow-[0px_4px_30px_rgba(0,0,0,0.25)] bg-[#BB8360] text-white transition-all duration-150 ease-in-out"
          >
            Stay Logged In as Anonymous
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
