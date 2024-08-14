import { create } from "zustand";

const useStore = create((set) => ({
  user: null,
  cartQuantity: 3,
  setUser: (user) => set({ user }),
}));

export default useStore;

// dùng persist để dữ liệu lưu trữ vào Local Storage ?
