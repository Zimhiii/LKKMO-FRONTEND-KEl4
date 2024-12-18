import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputLogin from "./LoginInput";
import { useAuthUserStore } from "../../stores/authStore";
import LoginBerhasil from "../PopUpComponent.jsx/LoginBerhasil";

const FormLogin = () => {
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { login, isLoggedIn, loading } = useAuthUserStore();

  // Ambil fungsi login dan status dari useAuthUserStore

  // Fungsi untuk menangani navigasi antar input dengan tombol Enter
  const handleKeyDown = (event, nextInputRef) => {
    if (event.key === "Enter") {
      event.preventDefault();
      nextInputRef.current.focus();
    }
  };
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  // Fungsi untuk menampilkan atau menyembunyikan kata sandi
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  // Fungsi untuk menangani pengiriman form login
  const handleSubmit = async (event) => {
    event.preventDefault();
    const credentials = {
      name,
      email,
      password,
    };

    try {
      // Memanggil login function dari useAuthUserStore untuk login
      await login(credentials);

      // Jika login berhasil, arahkan pengguna ke dashboard
      if (isLoggedIn) {
        // alert("Login berhasil!");
        // <LoginBerhasil />;
        // navigate("/"); // Arahkan ke halaman utama atau dashboard
      }
    } catch (error) {
      setErrorMessage("Login gagal. Silakan coba lagi.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Input untuk Nama */}
        <InputLogin
          type="text"
          placeholder="Nama Lengkap"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(event) => handleKeyDown(event, emailRef)}
          ref={nameRef}
        />
        {/* Input untuk Email */}
        <InputLogin
          type="email"
          placeholder="contoh@gmail.com"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(event) => handleKeyDown(event, passwordRef)}
          ref={emailRef}
        />
        {/* Input untuk Password */}
        <InputLogin
          type={showPassword ? "text" : "password"}
          placeholder="Masukkan Kata Sandi"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(event) => {
            // handleKeyDown(event, null);
            if (event.key === "Enter") {
              event.preventDefault();
              handleSubmit(event);
            }
          }}
          ref={passwordRef}
        />
        {/* Checkbox untuk menampilkan kata sandi */}
        <div className="flex items-center mt-5 ml-2">
          <input
            type="checkbox"
            value="True"
            name="PasswordReveal"
            id="PasswordReveal"
            onClick={handlePasswordToggle}
          />
          <label htmlFor="PasswordReveal" className="text-[12px] ml-2">
            Tampilkan Kata Sandi
          </label>
        </div>

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        {/* Tombol Submit */}
        {/* <h3 className="text-[10px] border-b border-black text-center w-fit mx-auto mt-8">
          Lupa Kata Sandi
        </h3> */}

        <div className="flex justify-center mt-3 ">
          <button
            type="submit"
            className="px-6 py-2 bg-[#BB8360] rounded-lg text-white font-medium text-sm shadow-[0px_0px_4px_rgba(0,0,0,0.25)] shadow-slate-400 hover:bg-white hover:text-[#BB8360] active:bg-white active:text-[#BB8360] active:shadow-[0px_0px_4px_rgba(0,0,0,0.25)] hover:ring-1 hover:ring-[#BB8360] "
          >
            {loading ? <p>Try to login...</p> : "Masuk"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
