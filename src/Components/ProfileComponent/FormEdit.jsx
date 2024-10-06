import React, { useRef, useState } from "react";
import EditInput from "./EditInput";

const FormEdit = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleKeyDown = (event, nextInputRef) => {
    if (event.key === "Enter") {
      event.preventDefault();
      nextInputRef.current.focus();
    }
  };

  const handlePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleImageChange = (event) => {
    setProfilePicture(event.target.files[0]);
    setImagePreview(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="mb:mt-10">
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="flex justify-center items-center mt-5">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="profile-picture"
          />
          <label
            htmlFor="profile-picture"
            className="px-6 py-2 bg-[#BB8360] rounded-lg text-white font-medium text-sm shadow-md shadow-slate-400 cursor-pointer"
          >
            Ubah Profil Gambar
          </label>
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Profil Gambar"
              className="w-20 h-20 rounded-full ml-5"
            />
          )}
        </div>
        <EditInput
          type="text"
          placeholder="John Mark"
          name="Nama"
          onKeyDown={(event) => handleKeyDown(event, emailRef)}
          ref={nameRef}
        />
        <EditInput
          type="email"
          placeholder="contoh@gmail.com"
          name="E-mail"
          onKeyDown={(event) => handleKeyDown(event, passwordRef)}
          ref={emailRef}
        />
        <EditInput
          type="tel"
          placeholder="08123456789"
          name="No. HP"
          onKeyDown={(event) => handleKeyDown(event, null)}
        />
        <EditInput
          type="text"
          placeholder="Jalan, Kecamatan, Kota"
          name="Alamat"
          onKeyDown={(event) => handleKeyDown(event, null )}
        />
        <div className="flex justify-center mt-5 ">
          <button
            type="submit"
            className="px-6 py-2 bg-[#BB8360] rounded-lg text-white font-medium text-sm shadow-md shadow-slate-400"
          >
            Simpan Perubahan
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEdit;