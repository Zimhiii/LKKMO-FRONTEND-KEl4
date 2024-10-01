import React, { useRef, useState } from "react";
import InputLogin from "./LoginInput";

const FormSignUp = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  // Function to handle key down and move to the next input
  const handleKeyDown = (event, nextInputRef) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      nextInputRef.current.focus(); // Move to the next input
    }
  };

  const handlePasword = () => {
    setShowPassword(() => !showPassword);
  };
  return (
    <div>
      <form onSubmit={() => alert("Form Submitted")}>
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
            onClick={handlePasword}
          />
          <label htmlFor="PasswordReveal" className="text-[12px] ml-2">
            Tampilkan Kata Sandi
          </label>
        </div>
        <div className="flex justify-center mt-5 ">
          <button
            type="submit"
            // onClick={() => alert("Form Submitted")}
            className="px-6 py-2 bg-[#BB8360] rounded-lg text-white font-medium text-sm shadow-md shadow-slate-400"
          >
            Daftar Akun
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;
