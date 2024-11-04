// src/stores/authUserStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "../api";
import { useNavigate } from "react-router-dom";
import useProductManagementStore from "./productManagementStore";

export const useAuthUserStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      token: null,
      user: null,
      loading: false,

      // Set data pengguna
      setUser: (user) => set(() => ({ user })),

      // Set status login
      setLogin: (value) => set(() => ({ isLoggedIn: value })),

      // Login dan mendapatkan token
      // login: async (credentials) => {
      //   try {
      //     const response = await api.post("/login", credentials);
      //     if (response.data && response.data.status === "200") {
      //       const { token, user } = response.data; // Ambil user dari respons
      //       set({
      //         isLoggedIn: true,

      //         token,
      //         user, // Simpan user di store
      //       });
      //       localStorage.setItem("token", token);
      //       // Simpan token di localStorage (opsional)
      //       alert("Login Berhasil");
      //       window.location.href = "/";
      //     } else {
      //       console.error("Login failed:", response.data);
      //     }
      //   } catch (error) {
      //     console.error("Error during login:", error);
      //     console.log(response.data);
      //   }
      // },
      login: async (credentials) => {
        try {
          // Set loading state before API call
          set({ loading: true }); // Tambahkan loading state di store jika perlu

          const response = await api.post("/login", credentials);
          if (response.data && response.data.status === "200") {
            const { token, user } = response.data; // Ambil user dari respons
            set({
              isLoggedIn: true,
              token,
              user, // Simpan user di store
            });
            localStorage.setItem("token", token); // Simpan token di localStorage
            // alert("Login Berhasil");
            // Gunakan navigate dari react-router-dom
            window.location.href = "/"; // Pastikan Anda menggunakan useNavigate di komponen
          } else {
            console.error("Login failed:", response.data);
            alert("Login gagal. Silakan coba lagi.");
          }
        } catch (error) {
          console.error("Error during login:", error);
          alert("Terjadi kesalahan saat login. Silakan coba lagi.");
        } finally {
          // Reset loading state after API call
          set({ loading: false }); // Reset loading state
        }
      },
      // Logout dan reset state
      logout: () => {
        set({
          isLoggedIn: false,
          token: null,
          user: null, // Reset user saat logout
        });
        localStorage.removeItem("token"); // Hapus token dari localStorage
        const { setProducts, setProduct } =
          useProductManagementStore.getState(); // Akses fungsi dari store
        setProducts([]);
        setProduct({});
        localStorage.clear();
        // window.location.href = "/"; // Hapus token dari localStorage
      },

      // Mengambil data pengguna (biasanya setelah login berhasil)
      fetchUser: async () => {
        try {
          const token = localStorage.getItem("token"); // Ambil token dari localStorage
          if (!token) throw new Error("No token found");

          const response = await api.get("/user", {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (response.data) {
            set(() => ({ user: response.data })); // Simpan user di store
          } else {
            console.error("Failed to fetch user:", response.data);
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      },
    }),
    {
      name: "auth-user-storage", // Nama di localStorage
      partialize: (state) => ({
        isLoggedIn: state.isLoggedIn,
        token: state.token,
        user: state.user, // Simpan user dalam state yang relevan
      }), // Menyimpan state yang relevan
    }
  )
);
