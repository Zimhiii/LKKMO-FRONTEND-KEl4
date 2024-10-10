import { create } from "zustand";

export const useStore = create((set) => ({
  keranjang: [],
  addKeranjang: (item) =>
    set((state) => ({
      keranjang: [...state.keranjang, item],
    })),
}));
