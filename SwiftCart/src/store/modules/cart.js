import { storage } from "@/utils/storage";

const state = {
    items: storage.get("cart") || [],
};

const getters = {
    cartItems: (state) => state.items,
    cartTotal: (state) =>
        state.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        ),
    cartCount: (state) =>
        state.items.reduce((count, item) => count + item.quantity, 0),
};

const actions = {
    addToCart({ commit }, product) {
        commit("addItem", product);
    },
    removeFromCart({ commit }, productId) {
        commit("removeItem", productId);
    },
    updateCart({ commit }, { productId, quantity }) {
        commit("updateItem", { productId, quantity });
    },
    clearCart({ commit }) {
        commit("clearCart");
    },
};

const mutations = {
    addItem(state, product) {
        const existingItem = state.items.find((item) => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            state.items.push({ ...product, quantity: 1 });
        }
        storage.set("cart", state.items);
    },
    removeItem(state, productId) {
        state.items = state.items.filter((item) => item.id !== productId);
        storage.set("cart", state.items);
    },
    updateItem(state, { productId, quantity }) {
        const item = state.items.find((item) => item.id === productId);
        if (item) {
            item.quantity = quantity;
            if (item.quantity <= 0) {
                state.items = state.items.filter(
                    (item) => item.id !== productId
                );
            }
            storage.set("cart", state.items);
        }
    },
    clearCart(state) {
        state.items = [];
        storage.set("cart", state.items);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
