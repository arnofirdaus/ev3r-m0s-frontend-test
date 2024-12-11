import { create } from "zustand";

interface ProductState {
  searchProduct: string;
  setSearchProduct: (value: string) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  searchProduct: "",
  setSearchProduct: (value) => set(() => ({ searchProduct: value })),
}));
