import { defineStore } from "pinia";
import ProductService from "../../services/productService";

export const useProductsStore = defineStore("products", {
    state: () => ({
        products: [],
        categories: [],
        isLoading: false,
        error: null,
        currentCategory: null,
        currentSort: null,
    }),
    getters: {
        allProducts: (state) => state.products,
        error: (state) => state.error,
        categoriesList: (state) => state.categories,
        sortedAndFilteredProducts: (state) => {
            let filteredProducts = state.currentCategory
                ? state.products.filter(
                      (product) => product.category === state.currentCategory
                  )
                : state.products;

            if (state.currentSort) {
                return [...filteredProducts].sort((a, b) => {
                    return state.currentSort === "asc"
                        ? a.price - b.price
                        : b.price - a.price;
                });
            }

            return filteredProducts;
        },
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
            this.currentCategory = category;
        },
        sortByPrice(sort) {
            this.currentSort = sort;
        },
        resetFilters() {
            this.currentCategory = null;
            this.currentSort = null;
        },
    },
});
