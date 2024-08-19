import { storage } from "@/utils/storage";

const state = {
    token: storage.get("token") || null,
    user: storage.get("user") || null,
};

const getters = {
    isAuthenticated: (state) => !!state.token,
    user: (state) => state.user,
};

const actions = {
    login({ commit }, { token, user }) {
        commit("setToken", token);
        commit("setUser", user);
        storage.set("token", token);
        storage.set("user", user);
    },
    logout({ commit }) {
        commit("clearAuth");
        storage.remove("token");
        storage.remove("user");
    },
};

const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    setUser(state, user) {
        state.user = user;
    },
    clearAuth(state) {
        state.token = null;
        state.user = null;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
