import React, { useRef, useState } from "react";
import axios from "axios";
import InputLogin from "./LoginInput";
import { useNavigate } from "react-router-dom";

const FormSignUp = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Fungsi untuk menangani tombol Enter dan pindah ke input berikutnya
  const handleKeyDown = (event, nextInputRef) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Mencegah form submit
      nextInputRef?.current?.focus(); // Pindah ke input berikutnya jika ada
    }
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Mencegah form refresh halaman
    setLoading(true); // Setel state loading menjadi true sebelum memanggil API
    setError(null); // Reset error sebelumnya jika ada

    // Mengumpulkan data dari form
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      // Permintaan API menggunakan Axios
      const response = await axios.post(
        "https://lkkmo-backend-production.up.railway.app/api/v1/register",
        {
          name,
          email,
          password,
        }
      );
      alert("Registrasi Berhasil");
      console.log(response.data);
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError("Registrasi gagal. Silakan coba lagi.");
    } finally {
      setLoading(false); // Reset state loading setelah permintaan API selesai
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputLogin
          type="text"
          placeholder="John Mark"
          name="Nama"
          onKeyDown={(event) => handleKeyDown(event, emailRef)}
          ref={nameRef}
        />
        <InputLogin
          type="email"
          placeholder="contoh@gmail.com"
          name="E-mail"
          onKeyDown={(event) => handleKeyDown(event, passwordRef)}
          ref={emailRef}
        />
        <InputLogin
          type={showPassword ? "text" : "password"}
          placeholder="Masukkan Kata Sandi"
          name="Kata Sandi"
          ref={passwordRef}
          onKeyDown={(event) => handleKeyDown(event, null)}
        />
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
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <div className="flex justify-center mt-5">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-[#BB8360] rounded-lg text-white font-medium text-sm shadow-md shadow-slate-400"
          >
            {loading ? "Loading..." : "Daftar Akun"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;
