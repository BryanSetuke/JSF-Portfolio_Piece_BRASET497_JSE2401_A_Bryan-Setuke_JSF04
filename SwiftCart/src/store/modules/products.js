// src/stores/products.js
import { defineStore } from "pinia";
import ProductService from "../../services/productService";

export const useProductsStore = defineStore("products", {
    state: () => ({
        products: [],
        categories: [],
        isLoading: false,
        error: null,
    }),
    getters: {
        allProducts: (state) => state.products,
        isLoading: (state) => state.isLoading,
        error: (state) => state.error,
        categories: (state) => state.categories,
    },
    actions: {
        async fetchProducts() {
            this.isLoading = true;
            try {
                const products = await ProductService.getProducts();
                this.products = products;
                this.categories = [
                    ...new Set(products.map((product) => product.category)),
                ];
            } catch (error) {
                this.error = error;
            } finally {
                this.isLoading = false;
            }
        },
        filterByCategory(category) {
            this.products = category
                ? this.products.filter(
                      (product) => product.category === category
                  )
                : this.products;
        },
    },
});
