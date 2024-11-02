import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "../api"; // Sesuaikan path dengan api.js yang Anda gunakan
import { useAuthUserStore } from "./authStore"; // Pastikan sudah ada authstore

const useProductManagementStore = create(
  persist(
    (set) => ({
      products: [],
      productsByCategory: [],
      productsBySubCategory: [],
      productsBySearch: [],
      product: null,
      loading: false,
      error: null,
      setProducts: (products) => set({ products }),
      setProduct: (product) => set({ product }),

      // Fetch all products (accessible by authenticated users)
      fetchProducts: async () => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState(); // Ambil token dari auth store
        try {
          const response = await api.get("/products", {
            headers: { Authorization: `Bearer ${token}` },
          });
          set({ products: response.data.data[0], loading: false });
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error fetching products",
            loading: false,
          });
        }
      },

      // Fetch product by ID
      fetchProductById: async (id) => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState(); // Ambil token dari auth store
        try {
          const response = await api.get(`/products/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          set({
            product: response.data.data[0],
            loading: false,
          });
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error fetching product",
            loading: false,
          });
        }
      },

      // Fetch products by category ID
      //   fetchProductsByCategory: async (categoryId) => {
      //     set({ loading: true, error: null });
      //     const { token } = useAuthUserStore.getState(); // Ambil token dari auth store
      //     try {
      //       const response = await api.get(`/products/category/${categoryId}`, {
      //         headers: { Authorization: `Bearer ${token}` },
      //       });
      //       set({ productsByCategory: response.data.products, loading: false });
      //     } catch (error) {
      //       set({
      //         error:
      //           error.response?.data?.message ||
      //           "Error fetching products by category",
      //         loading: false,
      //       });
      //     }
      //   },
      fetchProductsByCategory: async (categoryId) => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState(); // Ambil token dari auth store
        try {
          const response = await api.get(`/products/category/${categoryId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          // Akses struktur data produk yang benar
          set({
            productsByCategory: response.data.data[0].products,
            loading: false,
          });
        } catch (error) {
          set({
            error:
              error.response?.data?.message ||
              "Error fetching products by category",
            loading: false,
          });
        }
      },

      // Fetch products by subcategory ID
      fetchProductsBySubCategory: async (subcategoryId) => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState(); // Ambil token dari auth store
        // console.log("subcategory id fetch", subcategoryId);
        // set({ productsBySubCategory: [], loading: true, error: null });
        try {
          const response = await api.get(
            `/products/subcategory/${subcategoryId}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          set({
            productsBySubCategory: response.data.data[0].products,
            loading: false,
          });
        } catch (error) {
          set({
            error:
              error.response?.data?.message ||
              "Error fetching products by subcategory",
            loading: false,
          });
        }
      },

      searchProducts: async (query) => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState(); // Ambil token dari auth store
        try {
          const response = await api.get(`/products/search/${query}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          set({
            productsBySearch: response.data.data[0], // Sesuaikan sesuai dengan respons API
            loading: false,
          });
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error searching products",
            loading: false,
          });
        }
      },

      // fetchProductsBySubCategory: async (subcategoryId) => {
      //   if (!subcategoryId) return;
      //   // Hentikan jika subcategoryId tidak valid
      //   console.log(
      //     "Memanggil fetchProductsBySubCategory dengan subcategoryId:",
      //     subcategoryId
      //   );

      //   set({ productsBySubCategory: [], loading: true, error: null }); // Reset sebelum fetch
      //   const { token } = useAuthUserStore.getState();
      //   try {
      //     const response = await api.get(
      //       `/products/subcategory/${subcategoryId}`,
      //       {
      //         headers: { Authorization: `Bearer ${token}` },
      //       }
      //     );
      //     console.log(
      //       "Response dari fetchProductsBySubCategory:",
      //       response.data
      //     );
      //     set({
      //       productsBySubCategory: response.data.data[0].products, // Pastikan struktur ini benar
      //       loading: false,
      //     });
      //   } catch (error) {
      //     set({
      //       error:
      //         error.response?.data?.message ||
      //         "Error fetching products by subcategory",
      //       loading: false,
      //     });
      //   }
      // },

      // Add new product (admin only)
      addProduct: async (productData) => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState(); // Ambil token dari auth store
        try {
          const response = await api.post("/products", productData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
              // "Content-Type": "application/json",
            },
          });
          set(
            (state) => ({
              products: [...state.products, response.data.data],
              loading: false,
            }),
            // console.log("Product added successfully :,", response.data.data),
            // console.log("product", response),
            alert(response.data.message)
          );
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error adding product",
            loading: false,
          });
          // console.log("Error adding product:", error.response?.data?.message);
          // console.log("product", state.products);
        }
      },

      // Update product (admin only)
      updateProduct: async (id, productData) => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState(); // Ambil token dari auth store
        try {
          const response = await api.post(`/products/${id}`, productData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          });
          set((state) => ({
            products: state.products.map((product) =>
              product.id === id ? response.data.data : product
            ),
            loading: false,
          }));
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error updating product",
            loading: false,
          });
          // console.log("Error updating product:", error.response?.data?.message);
        }
      },

      // Delete product (admin only)
      // Di dalam store (productManagementStore.js)
      deleteProduct: async (id) => {
        set({ loading: true, error: null });
        const { token } = useAuthUserStore.getState(); // Ambil token dari auth store
        try {
          await api.delete(`/products/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          // Filter produk yang dihapus dan update state
          set((state) => ({
            products: state.products.filter((product) => product.id !== id),
            loading: false,
          }));
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error deleting product",
            loading: false,
          });
        }
      },
    }),
    {
      name: "product-management-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useProductManagementStore;
