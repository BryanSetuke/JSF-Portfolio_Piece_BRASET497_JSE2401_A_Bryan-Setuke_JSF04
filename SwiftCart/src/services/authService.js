import api from "./api";

const authService = {
    async login(username, password) {
        const data = await api.post("/auth/login", { username, password });
        localStorage.setItem("token", data.token);
        return data;
    },
    logout() {
        localStorage.removeItem("token");
    },
    getToken() {
        return localStorage.getItem("token");
    },
    isAuthenticated() {
        return !!this.getToken();
    },
};

export default authService;
