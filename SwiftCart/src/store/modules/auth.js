// src/store/modules/auth.js
import { defineStore } from "pinia";
import { storage } from "../../utils/storage";
import router from "../../router/index";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: storage.get("token") || null,
        redirectPath: null,
    }),
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
    actions: {
        async login(credentials) {
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/auth/login",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            username: credentials.username,
                            password: credentials.password,
                        }),
                    }
                );

                if (!response.ok) {
                    throw new Error("Login failed");
                }

                const data = await response.json();
                this.token = data.token;
                storage.set("token", data.token);

                // Redirect to the stored path or default to home
                const path = this.redirectPath || "/";
                router.push(path);
                this.redirectPath = null; // Clear the stored path

                return true;
            } catch (error) {
                console.error("Login error:", error);
                throw new Error(error.message);
            }
        },
        logout() {
            this.token = null;
            storage.remove("token");
            router.push("/login");
        },
        setRedirectPath(path) {
            this.redirectPath = path;
        },
    },
});
