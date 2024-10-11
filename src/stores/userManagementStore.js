// src/stores/userManagementStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "../api"; // Import axios instance dari api.js

export const useUserManagementStore = create(
  persist(
    (set, get) => ({
      users: [], // Menyimpan daftar pengguna
      isAdmin: false, // Status admin

      // Mengambil daftar pengguna
      fetchUsers: async (token) => {
        try {
          const response = await api.get("/users", {
            headers: { Authorization: `Bearer ${token}` },
          });
          set({ users: response.data }); // Simpan daftar pengguna ke dalam state
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      },

      // Menambah pengguna baru
      addUser: async (userData, token) => {
        if (!get().isAdmin)
          return console.error("Unauthorized: Admin access required.");

        try {
          const response = await api.post("/users", userData, {
            headers: { Authorization: `Bearer ${token}` },
          });
          set((state) => ({ users: [...state.users, response.data] })); // Tambah pengguna ke state
        } catch (error) {
          console.error("Error adding user:", error);
        }
      },

      // Memperbarui pengguna yang ada
      updateUser: async (id, userData, token) => {
        if (!get().isAdmin)
          return console.error("Unauthorized: Admin access required.");

        try {
          const response = await api.put(`/users/${id}`, userData, {
            headers: { Authorization: `Bearer ${token}` },
          });
          set((state) => ({
            users: state.users.map((user) =>
              user.id === id ? response.data : user
            ),
          })); // Perbarui pengguna di state
        } catch (error) {
          console.error("Error updating user:", error);
        }
      },

      // Menghapus pengguna
      deleteUser: async (id, token) => {
        if (!get().isAdmin)
          return console.error("Unauthorized: Admin access required.");

        try {
          await api.delete(`/users/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          set((state) => ({
            users: state.users.filter((user) => user.id !== id), // Hapus pengguna dari state
          }));
        } catch (error) {
          console.error("Error deleting user:", error);
        }
      },

      // Set status admin
      setAdminStatus: (status) => {
        set({ isAdmin: status });
      },
    }),
    {
      name: "user-management-storage", // Nama di localStorage
      partialize: (state) => ({
        users: state.users,
        isAdmin: state.isAdmin,
      }), // Menyimpan state yang relevan
    }
  )
);
