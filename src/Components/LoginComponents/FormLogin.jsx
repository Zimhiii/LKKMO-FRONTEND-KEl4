import React, { useRef, useState } from "react";
import axios from "axios";
import InputLogin from "./LoginInput";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const FormLogin = () => {
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Create a navigate object for redirection

  // Fungsi untuk menangani navigasi antar input dengan tombol Enter
  const handleKeyDown = (event, nextInputRef) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Mencegah form di-submit
      nextInputRef.current.focus(); // Pindah ke input selanjutnya
    }
  };
  const toDashboard = () => {
    navigate("/");
  };

  // Fungsi untuk menampilkan atau menyembunyikan kata sandi
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  // Fungsi untuk menangani pengiriman form login
  const handleSubmit = async (event) => {
    event.preventDefault(); // Mencegah submit otomatis
    try {
      // Mengirim permintaan POST ke API login
      const response = await axios.post(
        "https://lkkmo-backend-production.up.railway.app/api/v1/login",
        {
          name: name,
          email: email,
          password: password,
        }
      );

      // Jika login berhasil, simpan token ke localStorage
      const { token } = response.data;
      localStorage.setItem("token", token); // Menyimpan token JWT
      alert("Login berhasil!");
      navigate("/"); // Mengarahkan pengguna ke dashboard
    } catch (error) {
      // Penanganan error jika login gagal
      if (error.response) {
        setErrorMessage(error.response.data.message || "Login gagal.");
      } else if (error.request) {
        setErrorMessage("Tidak ada respon dari server. Coba lagi nanti.");
      } else {
        setErrorMessage("Terjadi kesalahan. Silakan coba lagi.");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Input untuk Name */}
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
          onKeyDown={(event) => handleKeyDown(event, passwordRef)}
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
        <h3 className="text-[10px] border-b border-black text-center w-fit mx-auto mt-8">
          Lupa Kata Sandi
        </h3>

        <div className="flex justify-center mt-3 ">
          <button
            type="submit"
            className="px-6 py-2 bg-[#BB8360] rounded-lg text-white font-medium text-sm shadow-md shadow-slate-400 "
          >
            Masuk
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
