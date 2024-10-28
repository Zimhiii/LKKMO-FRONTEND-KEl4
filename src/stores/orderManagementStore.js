import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "../api";
import { useAuthUserStore } from "./authStore";

const useOrderManagementStore = create(
  persist(
    (set) => ({
      orders: [],
      orderHistory: [],
      loading: false,
      error: null,

      // Fetch all orders for user
      fetchOrders: async () => {
        set({ loading: true, error: null });
        try {
          const response = await api.get("/orders");
          set({ orders: response.data.data, loading: false });
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error fetching orders",
            loading: false,
          });
        }
      },

      // Fetch order history
      fetchOrderHistory: async () => {
        set({ loading: true, error: null });
        try {
          const response = await api.get("/orders/history");
          set({ orderHistory: response.data.data, loading: false });
        } catch (error) {
          set({
            error:
              error.response?.data?.message || "Error fetching order history",
            loading: false,
          });
        }
      },

      // Create a new order
      createOrder: async (orderData) => {
        set({ loading: true, error: null });
        try {
          const response = await api.post("/orders", orderData);
          set((state) => ({
            orders: [...state.orders, response.data.data],
            loading: false,
          }));
          alert(response.data.message); // Notifikasi berhasil
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error creating order",
            loading: false,
          });
        }
      },

      // Update an order (admin only)
      updateOrder: async (id, orderData) => {
        set({ loading: true, error: null });
        try {
          const response = await api.put(`/orders/${id}`, orderData);
          set((state) => ({
            orders: state.orders.map((order) =>
              order.id === id ? response.data.data : order
            ),
            loading: false,
          }));
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error updating order",
            loading: false,
          });
        }
      },

      // Delete an order (admin only)
      deleteOrder: async (id) => {
        set({ loading: true, error: null });
        try {
          await api.delete(`/orders/${id}`);
          set((state) => ({
            orders: state.orders.filter((order) => order.id !== id),
            loading: false,
          }));
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error deleting order",
            loading: false,
          });
        }
      },
    }),
    {
      name: "order-management-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useOrderManagementStore;
