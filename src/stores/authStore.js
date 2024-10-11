// src/stores/authUserStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "../api";

export const useAuthUserStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      token: null,
      user: null,

      // Set data pengguna
      setUser: (user) => set(() => ({ user })),

      // Set status login
      setLogin: (value) => set(() => ({ isLoggedIn: value })),

      // Login dan mendapatkan token
      login: async (credentials) => {
        try {
          const response = await api.post("/login", credentials);
          if (response.data && response.data.status === "200") {
            const { token, user } = response.data; // Ambil user dari respons
            set({
              isLoggedIn: true,
              token,
              user, // Simpan user di store
            });
            localStorage.setItem("token", token); // Simpan token di localStorage (opsional)
          } else {
            console.error("Login failed:", response.data);
          }
        } catch (error) {
          console.error("Error during login:", error);
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
