// src/api.js
import axios from "axios";
import { useAuthUserStore } from "./stores/authstore";

// Buat instance Axios dengan konfigurasi dasar
const api = axios.create({
  baseURL: "https://lkkmo-backend-production.up.railway.app/api/v1", // Ganti dengan base URL API-mu
  timeout: 3000, // Timeout request (opsional)
});

// Interceptor untuk menyisipkan token JWT di setiap request (jika ada)
api.interceptors.request.use(
  (config) => {
    const { token } = useAuthUserStore.getState(); // Ambil token dari Zustand store
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor untuk menangani error secara global
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Tangani kasus token yang tidak valid atau kadaluarsa
      console.error(
        "Token tidak valid atau kadaluarsa. Silakan login kembali."
      );
      // Bisa redirect ke halaman login atau reset state autentikasi
      useAuthUserStore.getState().logout();
    }
    return Promise.reject(error);
  }
);

export default api;
