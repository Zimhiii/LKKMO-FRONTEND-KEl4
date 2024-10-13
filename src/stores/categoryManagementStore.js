// src/stores/categoryManagementStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "../api"; // Sesuaikan path dengan api.js yang Anda gunakan
import { useAuthUserStore } from "./authStore"; // Pastikan sudah ada authstore

const useCategoryManagementStore = create(
  persist(
    (set) => ({
      categories: [],
      category: null,
      loading: false,
      error: null,
      setCategory: (category) => set({ category }),

      // Fetch all categories (accessible by authenticated users)
      fetchCategories: async () => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState(); // Ambil token dari auth store
        try {
          const response = await api.get("/categories", {
            headers: { Authorization: `Bearer ${token}` },
          });
          set({ categories: response.data.data, loading: false });
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error fetching categories",
            loading: false,
          });
        }
      },

      showCategories: async (id) => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState(); // Ambil token dari auth store
        try {
          const response = await api.get(`/categories/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          set({
            category: response.data.data[0],
            loading: false,
          });
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error fetching product",
            loading: false,
          });
        }
      },

      // Add new category (admin only)
      addCategory: async (categoryData) => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState(); // Ambil token dari auth store
        try {
          const response = await api.post("/categories", categoryData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
          set((state) => ({
            categories: [...state.categories, response.data.data],
            loading: false,
          }));
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error adding category",
            loading: false,
          });
        }
      },

      // Update category (admin only)
      updateCategory: async (id, categoryData) => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState(); // Ambil token dari auth store
        try {
          const response = await api.put(`/categories/${id}`, categoryData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
          set((state) => ({
            categories: state.categories.map((category) =>
              category.id === id ? response.data.data : category
            ),
            loading: false,
          }));
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error updating category",
            loading: false,
          });
        }
      },

      // Delete category (admin only)
      deleteCategory: async (id) => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState(); // Ambil token dari auth store
        try {
          await api.delete(`/categories/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          // Hapus kategori dari state
          set((state) => ({
            categories: state.categories.filter(
              (category) => category.id !== id
            ),
            loading: false,
          }));
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error deleting category",
            loading: false,
          });
        }
      },
    }),
    {
      name: "category-management-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useCategoryManagementStore;
