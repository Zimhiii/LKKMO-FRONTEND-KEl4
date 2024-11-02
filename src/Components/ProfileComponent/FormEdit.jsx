import React, { useRef, useState, useEffect } from "react";
import EditInput from "./EditInput";
import useProfileStore from "../../stores/profileManagementStore";

export default function FormEdit() {
  const NameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const adressRef = useRef(null);

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  // State untuk setiap input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const { profile, fetchProfile, updateProfile, loading } = useProfileStore();

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  useEffect(() => {
    if (profile) {
      setName(profile.name || "");
      setEmail(profile.email || "");
      setPhone(profile.phone || "");
      setAddress(profile.alamat || "");
      // Cek apakah profilePicture ada dan set preview dengan URL lengkap
      setPreview(
        profile.profile_photo_path
          ? `https://lkkmo-backend-production-3ab2.up.railway.app/storage/${profile.profile_photo_path}`
          : null
      );
    }
  }, [profile]);

  const handleKeyDown = (event, nextInputRef) => {
    if (event.key === "Enter") {
      event.preventDefault();
      nextInputRef?.current?.focus();
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    // Create a preview URL for the selected image
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("alamat", address);
    if (file) {
      formData.append("image", file); // Hanya menambahkan gambar baru jika ada
    }

    console.log(
      "Data dikirim:",
      formData.get("name"),
      formData.get("phone"),
      formData.get("alamat"),
      formData.get("image")
    );
    updateProfile(formData);
    await fetchProfile();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full justify-center md:w-3/4"
      >
        <div className="flex flex-col gap-5 justify-center items-center mb-5 md:gap-8">
          <div className="w-[130px] h-[130px] md:w-[250px] md:h-[250px] overflow-hidden rounded-full bg-slate-300 shadow-lg shadow-slate-400 flex justify-center items-center">
            {preview ? (
              <img
                src={preview}
                alt="Profil Gambar"
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="text-gray-500">No Image</div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="profile-picture"
          />
          <label
            htmlFor="profile-picture"
            className="px-6 py-2 bg-[#BB8360] rounded-lg text-white font-medium text-sm shadow-md shadow-slate-400 md:text-[20px] cursor-pointer"
          >
            Ubah Profil Gambar
          </label>
          <button
            type="button"
            onClick={() => {
              setFile(null);
              setPreview(null);
            }}
            className="px-6 py-2 bg-[#BB8360] rounded-lg text-white font-medium text-sm shadow-md shadow-slate-400 md:text-[20px] cursor-pointer"
          >
            Hapus
          </button>
        </div>

        <EditInput
          type="text"
          placeholder="Nama"
          name="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(event) => handleKeyDown(event, emailRef)}
          ref={NameRef}
        />
        <EditInput
          type="email"
          placeholder="Email"
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(event) => handleKeyDown(event, phoneNumberRef)}
          ref={emailRef}
        />
        <EditInput
          type="text"
          placeholder="+62...."
          name="Nomor Handphone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onKeyDown={(event) => handleKeyDown(event, adressRef)}
          ref={phoneNumberRef}
        />

        <div className="mb-2">
          <label
            htmlFor="Alamat"
            className="block ml-1 text-[15px] md:text-[20px] font-monserrat"
          >
            Alamat <span className="text-red-500">*</span>
          </label>
          <textarea
            placeholder="Jl. ..."
            className="rounded-[4px] h-[80px] text-[12px] md:text-[16px] py-1 px-3 w-full active:bg-[#D9D9D9] ring-1 ring-[#000000] placeholder:text-[#000000] placeholder:text-opacity-30 placeholder:text-[10px] placeholder:italic focus:outline-black"
            id="Alamat"
            ref={adressRef}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onKeyDown={(event) => handleKeyDown(event, null)}
          />
        </div>
        <div className="flex justify-center mt-5">
          <button
            type="submit"
            className="px-6 py-2 bg-[#BB8360] rounded-lg text-white font-medium text-[14px] md:text-[20px] shadow-md shadow-slate-400"
          >
            Simpan
          </button>
        </div>
      </form>
      {/* <div>
        <button
          onClick={() => 
            // console.log("profile", profile)
          }
          className="mt-10 text-[50px]"
        >
          debuggin
        </button>
      </div> */}
    </div>
  );
}
