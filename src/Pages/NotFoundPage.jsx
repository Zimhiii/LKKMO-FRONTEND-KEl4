import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">
      <div className="relative text-center z-10">
        <h1 className="text-9xl font-bold animate-bounce">404</h1>
        <h2 className="text-2xl font-semibold mt-4">
          Oops! Halaman tidak ditemukan.
        </h2>
        <p className="mt-2 text-lg">
          Sepertinya halaman yang kamu cari sudah pindah atau tidak ada. Tapi
          jangan khawatir, kamu bisa kembali ke beranda!
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-white text-gray-800 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Kembali ke Beranda
        </Link>
      </div>

      <div className="absolute bottom-0 z-0">
        <div className="ghost w-40 h-40 mx-auto bg-white rounded-full flex justify-center items-center">
          <div className="eyes flex justify-between w-12">
            <span className="w-4 h-4 bg-black rounded-full"></span>
            <span className="w-4 h-4 bg-black rounded-full"></span>
          </div>
          <div className="mouth w-8 h-2 bg-black rounded-full mt-4"></div>
        </div>
      </div>
    </div>
  );
}
