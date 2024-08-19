import { storage } from "@/utils/storage";

const state = {
    items: storage.get("comparison") || [],
};

const getters = {
    comparisonItems: (state) => state.items,
};

const actions = {
    addToComparison({ commit }, product) {
        commit("addItem", product);
    },
    removeFromComparison({ commit }, productId) {
        commit("removeItem", productId);
    },
    clearComparison({ commit }) {
        commit("clearComparison");
    },
};

const mutations = {
    addItem(state, product) {
        if (!state.items.some((item) => item.id === product.id)) {
            state.items.push(product);
        }
        storage.set("comparison", state.items);
    },
    removeItem(state, productId) {
        state.items = state.items.filter((item) => item.id !== productId);
        storage.set("comparison", state.items);
    },
    clearComparison(state) {
        state.items = [];
        storage.set("comparison", state.items);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
