import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

export const useCartStore = create((set) => ({
  keranjang: [],
  addKeranjang: (item) =>
    set((state) => ({
      keranjang: [...state.keranjang, item],
    })),
}));

export const useLoginStore = create((set) => ({
  login: false,
  setLogin: (value) => set((state) => ({ login: value })),
}));

export const useUserStore = create((set) => ({
  user: {},
  setUser: (value) => set(() => ({ user: value })),

  fetchUser: async (credentials) => {
    try {
      const response = await axios.post(
        "https://lkkmo-backend-production.up.railway.app/api/v1/login",
        credentials
      );

      if (response.data && response.data.status === "200") {
        const userData = response.data.user;
        set(() => ({ user: userData }));
        // Menyimpan token di localStorage jika diperlukan
        localStorage.setItem("token", response.data.token);
      } else {
        console.error("Login failed:", response.data);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  },
}));
