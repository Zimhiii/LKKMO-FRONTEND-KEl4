import React, { useRef, useState } from "react";
import InputLogin from "./LoginInput";

const FormLogin = () => {
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
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
      <form action="">
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
          onKeyDown={(event) => handleKeyDown(event, passwordRef)}
          ref={passwordRef}
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
      </form>
    </div>
  );
};

export default FormLogin;
