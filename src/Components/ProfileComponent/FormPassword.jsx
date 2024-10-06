import React, { useRef, useState } from "react";
import EditInput from "./EditInput";

const FormPassword = () => {
const currentPasswordRef = useRef(null);
const newPasswordRef = useRef(null);
const confirmPasswordRef = useRef(null);
const [showPassword, setShowPassword] = useState(false);

const handleKeyDown = (event, nextInputRef) => {
    if (event.key === "Enter") {
        event.preventDefault(); 
        nextInputRef.current.focus(); 
    }
};

const handlePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
};

    return (
        <div className="mb:mt-10">
            <form onSubmit={(event) => event.preventDefault()}>
                <EditInput
                type={showPassword ? "text" : "password"}
                placeholder="Kata Sandi Saat Ini"
                name="Kata Sandi Saat Ini"
                onKeyDown={(event) => handleKeyDown(event, newPasswordRef)}
                ref={currentPasswordRef}
                />
                <EditInput
                type={showPassword ? "text" : "password"}
                placeholder="Kata Sandi Baru"
                name="Kata Sandi Baru"
                onKeyDown={(event) => handleKeyDown(event, confirmPasswordRef)}
                ref={newPasswordRef}
                />
                <EditInput
                type={showPassword ? "text" : "password"}
                placeholder="Konfirmasi Kata Sandi Baru"
                name="Konfirmasi Kata Sandi Baru"
                onKeyDown={(event) => handleKeyDown(event, null)}
                ref={confirmPasswordRef}
                />
        <div className="flex items-center mt-5 ml-2">
            <input
            type="checkbox"
            value="True"
            name="PasswordReveal"
            id="PasswordReveal"
            onClick={handlePassword}
            />
                <label htmlFor="PasswordReveal" className="text-[12px] ml-2">
                Tampilkan Kata Sandi
                </label>
        </div>
        <div className="flex justify-center mt-5 ">
            <button
            type="submit"
            className="px-6 py-2 bg-[#BB8360] rounded-lg text-white font-medium text-sm shadow-md shadow-slate-400"
            >
                Ubah Kata Sandi
            </button>
        </div>
            </form>
        </div>
    );
};

export default FormPassword;