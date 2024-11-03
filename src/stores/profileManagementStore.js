import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useAuthUserStore } from "./authStore";
import api from "../api";

const useProfileStore = create(
  persist(
    (set) => ({
      profile: null,
      loading: false,
      error: null,

      // Fetch profile data
      fetchProfile: async () => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState(); // Mengambil token dari auth store
        try {
          const response = await api.get("/profile", {
            headers: { Authorization: `Bearer ${token}` },
          });
          set({ profile: response.data.data[0], loading: false });
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error fetching profile",
            loading: false,
          });
        }
      },

      // Update profile data
      updateProfile: async (updatedData) => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState(); // Mengambil token dari auth store
        try {
          const response = await api.post("/profile/update", updatedData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          });
          set({ profile: response.data.data, loading: false });
          //   alert("Profile updated successfully");
          // window.location.reload();
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error updating profile",
            loading: false,
          });
        }
      },
    }),
    {
      name: "profile-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useProfileStore;
