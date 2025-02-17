import { create } from "zustand";

interface User {
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: { name: "John Doe", email: "johndoe@example.com" },
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
