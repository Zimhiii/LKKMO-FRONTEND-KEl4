import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "../api";
import { useAuthUserStore } from "./authStore";

const useOrderManagementStore = create(
  persist(
    (set) => ({
      orders: [],
      ordersall: [],
      orderHistory: [],
      loading: false,
      loadingorder: false,
      isOrder: false,
      setIsOrder: (value) => set({ isOrder: value }),
      error: null,
      setError: (value) => set({ error: value }),
      setloadingorder: (value) => set({ loadingorder: value }),
      // Fetch all orders for user
      fetchOrders: async () => {
        set({ loading: true, error: null });
        try {
          const response = await api.get("/orders");
          set({ orders: response.data.data[0], loading: false });
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error fetching orders",
            loading: false,
          });
        }
      },
      fetchOrdersAll: async () => {
        set({ loading: true, error: null });
        try {
          const response = await api.get("/ordersall");
          set({ ordersall: response.data.data[0], loading: false });
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
          set({ orderHistory: response.data.data[0], loading: false });
        } catch (error) {
          set({
            error:
              error.response?.data?.message || "Error fetching order history",
            loading: false,
          });
        }
      },

      deleteOrder: async (id) => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState(); // Ambil token dari auth store
        try {
          await api.delete(`/orders/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          // Filter produk yang dihapus dan update state
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

      // Create a new order
      createOrder: async (orderData) => {
        set({ loading: true, error: null });
        try {
          const response = await api.post("/orders", orderData);
          set((state) => ({
            orders: [...state.orders, response.data.data],
            loading: false,
            isOrder: true,
          }));
          // alert(response.data.message); // Notifikasi berhasil
          window.location.href = "/history";
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
        const { token } = useAuthUserStore.getState();
        try {
          const response = await api.put(`/orders/${id}`, orderData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
          set((state) => ({
            orders: state.orders.map((order) =>
              order.id === id ? response.data.data : order
            ),
            loading: false,
          }));
          window.location.reload();
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
          window.location.reload();
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
