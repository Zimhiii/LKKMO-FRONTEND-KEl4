import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "../api"; // Ensure this points to your configured axios instance
import { useAuthUserStore } from "./authStore"; // Assuming you have an auth store for user authentication

const useReviewStore = create(
  persist(
    (set) => ({
      loading: false,
      error: null,
      successMessage: null,

      // Function to add a new review
      addReview: async (reviewData) => {
        set({ loading: true, error: null, successMessage: null });

        const { token } = useAuthUserStore.getState(); // Retrieve token from auth store
        try {
          const response = await api.post("/review", reviewData, {
            headers: { Authorization: `Bearer ${token}` },
          });
          set({
            successMessage: "Review submitted successfully!",
            loading: false,
          });
        } catch (error) {
          set({
            error: error.response?.data?.message || "Failed to submit review",
            loading: false,
          });
        }
      },

      // Function to clear success or error messages
      clearMessages: () => set({ error: null, successMessage: null }),
    }),
    {
      name: "review-store",
      getStorage: () => localStorage, // Persist the store to localStorage
    }
  )
);

export default useReviewStore;
