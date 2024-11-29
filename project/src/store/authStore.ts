import { create } from 'zustand';

interface AuthState {
  user: null | {
    id: string;
    email: string;
    username: string;
    name: string;
    surname: string;
    artistName: string;
    role: string;
    profilePhoto: string;
    spotify?: string;
    instagram?: string;
  };
  setUser: (user: AuthState['user']) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));