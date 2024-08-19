import ProductService from "@/services/productservice";

const state = {
    products: [],
    isLoading: false,
    error: null,
};

const getters = {
    allProducts: (state) => state.products,
    isLoading: (state) => state.isLoading,
    error: (state) => state.error,
};

const actions = {
    async fetchProducts({ commit }) {
        commit("setLoading", true);
        try {
            const products = await ProductService.getProducts();
            commit("setProducts", products);
        } catch (error) {
            commit("setError", error);
        } finally {
            commit("setLoading", false);
        }
    },
};

const mutations = {
    setProducts(state, products) {
        state.products = products;
    },
    setLoading(state, isLoading) {
        state.isLoading = isLoading;
    },
    setError(state, error) {
        state.error = error;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
