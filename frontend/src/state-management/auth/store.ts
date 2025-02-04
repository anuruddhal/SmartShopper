import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

export interface Credentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  jwtToken: string;
}

export interface User {
  username: string;
  role: string;
  password?: string;
}

export interface AuthStore {
  user: User | null;
  login: (formData: LoginResponse) => User | null;
  logout: () => void;
}

const authStore: StateCreator<AuthStore> = (set) => ({
  user: null,

  login: (res: LoginResponse) => {
    if (!res.user) return null;
    document.cookie = `token=${res.jwtToken}`;
    set(() => ({ user: res.user }));
    return res.user;
  },
  logout: () => {
    (document.cookie = `token=""`), set(() => ({ user: null }));
  },
});

const persistedAuthStore = persist<AuthStore>(authStore, {
  name: "auth-store",
});

const useAuthStore = create(persistedAuthStore);

export default useAuthStore;
