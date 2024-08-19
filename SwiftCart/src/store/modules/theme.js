const state = {
    theme: localStorage.getItem("theme") || "light",
};

const getters = {
    currentTheme: (state) => state.theme,
};

const actions = {
    toggleTheme({ commit }) {
        const newTheme = state.theme === "light" ? "dark" : "light";
        commit("setTheme", newTheme);
    },
    setTheme({ commit }, theme) {
        commit("setTheme", theme);
    },
};

const mutations = {
    setTheme(state, theme) {
        state.theme = theme;
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
