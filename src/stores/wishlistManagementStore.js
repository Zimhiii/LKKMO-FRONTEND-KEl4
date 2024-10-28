import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "../api"; // Sesuaikan path dengan api.js yang Anda gunakan
import { useAuthUserStore } from "./authStore"; // Pastikan sudah ada authstore

const useWishlistStore = create(
  persist(
    (set) => ({
      wishlist: [],
      loading: false,
      error: null,
      
      // Fetch all wishlist items
      fetchWishlist: async () => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState(); // Ambil token dari auth store
        try {
          const response = await api.get("/wishlist", {
            headers: { Authorization: `Bearer ${token}` },
          });
          set({ wishlist: response.data.data, loading: false });
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error fetching wishlist",
            loading: false,
          });
        }
      },

      fetchWishlist: async () => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState(); // Ambil token dari auth store
        try {
          const response = await api.get("/wishlist", {
            headers: { Authorization: `Bearer ${token}` },
          });

          // Akses data array pertama yang bersarang
          //   const wishlistData = response.data.data[0];
          const wishlist = response.data.data[0];

          // Ambil semua product_id dari wishlistData
          //   const wishlist = wishlistData.map((item) => item.product_id);

          // Simpan hasilnya ke state
          set({ wishlist, loading: false });
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error fetching wishlist",
            loading: false,
          });
        }
      },

      // Add item to wishlist
      addToWishlist: async (itemData) => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState(); // Ambil token dari auth store
        try {
          const response = await api.post("/wishlist", itemData, {
            headers: { Authorization: `Bearer ${token}` },
          });
          set((state) => ({
            wishlist: [...state.wishlist, response.data.data],
            loading: false,
          }));
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error adding to wishlist",
            loading: false,
          });
        }
      },

      // Remove item from wishlist
      removeFromWishlist: async (id) => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState(); // Ambil token dari auth store
        try {
          await api.delete(`/wishlist/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          await useWishlistStore.getState().fetchWishlist(),
            set((state) => ({
              wishlist: state.wishlist.filter((item) => item.id !== id),

              loading: false,
            }));
        } catch (error) {
          set({
            error:
              error.response?.data?.message || "Error removing from wishlist",
            loading: false,
          });
        }
      },
    }),
    {
      name: "wishlist-storage", // Persist wishlist di localStorage
      getStorage: () => localStorage,
    }
  )
);

export default useWishlistStore;
