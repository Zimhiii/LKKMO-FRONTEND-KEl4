import { useNavigate } from "react-router-dom";
import ButtonLogin from "../Components/LoginComponents/ButtonLogin";
import FormLogin from "../Components/LoginComponents/FormLogin";
import HeaderLogin from "../Components/LoginComponents/LoginHeader";
import { useEffect } from "react";

function LoginPage() {
  document.title = "Login";
  const navigate = useNavigate();
  const toSignup = () => {
    navigate("/signup");
  };
  const toDashboard = () => {
    navigate("/");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  });

  return (
    <div className="md:flex md:flex-row-reverse font-montserrat">
      <HeaderLogin
        title="Halo Teman!"
        body="Daftarkan akun Anda untuk mendapatkankan pengalaman yang lebih dan menggunakan semua fitur"
        content={"Daftar Akun"}
        image={"Login.png"}
        onClick={toSignup}
        classnameimg={
          "bottom-0 md:bottom-0 md:-right-14 md:h-[350px] md:top-auto md:end"
        }
        classname="md:min-h-screen  md:rounded-br-none md:rounded-tl-[74px] md:rounded-tr-none"
      />

      <div className="container w-3/4 mx-auto md:w-1/2 md:px-10 ">
        <h1 className="text-[25px] font-bold text-center py-6 md:text-[40px]">
          Masuk
        </h1>
        <FormLogin />

        <div className="flex justify-center items-center mt-8">
          <hr class="w-full border-t border-slate-600" />
          <span class="mx-1 text-slate-500">atau</span>
          <hr class="w-full border-t border-slate-600" />
        </div>

        <div className=" w-11/12 mx-auto mt-5 mb-24">
          <ButtonLogin img="Google.svg">Google</ButtonLogin>
          <ButtonLogin img="Facebook.svg">Facebook</ButtonLogin>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
