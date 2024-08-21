// src/store/modules/auth.js
import { defineStore } from "pinia";
import authService from "../../services/authService";
import { storage } from "../../utils/storage";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: storage.get("user"), // Get user from localStorage if available
        token: storage.get("token"), // Get token from localStorage if available
    }),
    getters: {
        isAuthenticated: (state) => !!state.token,
        user: (state) => state.user,
    },
    actions: {
        async login(credentials) {
            try {
                const response = await authService.login(credentials);
                this.token = response.token;
                this.user = response.user;
                storage.set("token", response.token);
                storage.set("user", response.user);
                return true;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        logout() {
            this.user = null;
            this.token = null;
            storage.remove("token");
            storage.remove("user");
        },
    },
});
