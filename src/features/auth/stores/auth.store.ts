import { create } from "zustand"
import { User } from "../types/user.types"

type AuthState = {
    user: User | null,
    login: (user: User) => void,
    logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    login: (user) => { set({ user }) },
    logout: () => { set({ user: null }) },
    updateUser: (newUser: User) => set((state) => ({
        user: {
            name: newUser.name,
            email: state.user?.email || ""
        }
    }))
}))