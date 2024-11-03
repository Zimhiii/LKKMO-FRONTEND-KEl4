// src/stores/subcategoryManagementStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "../api"; // Sesuaikan path dengan api.js yang Anda gunakan
import { useAuthUserStore } from "./authStore"; // Pastikan sudah ada authStore

const useSubcategoryManagementStore = create(
  persist(
    (set) => ({
      subcategories: [],
      subcategory: null,
      loading: false,
      error: null,
      setError: (error) => set({ error }),

      // Fetch subcategory by ID
      fetchSubcategoryById: async (id) => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState(); // Ambil token dari auth store
        try {
          const response = await api.get(`/subcategories/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          set({ subcategory: response.data.data[0], loading: false });
        } catch (error) {
          set({
            error:
              error.response?.data?.message || "Error fetching subcategory",
            loading: false,
          });
        }
      },

      // Add new subcategory (admin only)
      addSubcategory: async (subcategoryData) => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState();
        try {
          const response = await api.post("/subcategories", subcategoryData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
          set((state) => ({
            subcategories: [...state.subcategories, response.data.data],
            loading: false,
          }));
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error adding subcategory",
            loading: false,
          });
          // console.log(
          //   "Error adding subcategory:",
          //   error.response?.data?.message
          // );
        }
      },

      // Update subcategory (admin only)
      updateSubcategory: async (id, subcategoryData) => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState(); // Ambil token dari auth store
        try {
          const response = await api.put(
            `/subcategories/${id}`,
            subcategoryData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
          set((state) => ({
            subcategories: state.subcategories.map((subcategory) =>
              subcategory.id === id ? response.data.data : subcategory
            ),
            loading: false,
          }));
        } catch (error) {
          set({
            error:
              error.response?.data?.message || "Error updating subcategory",
            loading: false,
          });
        }
      },

      // Delete subcategory (admin only)
      deleteSubcategory: async (id) => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState(); // Ambil token dari auth store
        try {
          await api.delete(`/subcategories/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          // Hapus subkategori dari state
          set((state) => ({
            subcategories: state.subcategories.filter(
              (subcategory) => subcategory.id !== id
            ),
            loading: false,
          }));
          window.location.reload();
        } catch (error) {
          set({
            error:
              error.response?.data?.message || "Error deleting subcategory",
            loading: false,
          });
        }
      },
    }),
    {
      name: "subcategory-management-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useSubcategoryManagementStore;
