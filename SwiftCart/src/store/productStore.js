import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore", {
    state: () => ({
        products: [],
        cart: [],
        loading: false,
        category: "",
        sortOrder: "",
    }),
    actions: {
        async fetchProducts() {
            this.loading = true;
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products"
                );
                this.products = await response.json();
            } finally {
                this.loading = false;
            }
        },
        addToCart(product) {
            this.cart.push(product);
        },
        setCategory(category) {
            this.category = category;
        },
        setSortOrder(order) {
            this.sortOrder = order;
        },
    },
    getters: {
        filteredProducts() {
            let filtered = this.products;

            if (this.category) {
                filtered = filtered.filter(
                    (product) => product.category === this.category
                );
            }

            if (this.sortOrder === "asc") {
                filtered = filtered.sort((a, b) => a.price - b.price);
            } else if (this.sortOrder === "desc") {
                filtered = filtered.sort((a, b) => b.price - a.price);
            }

            return filtered;
        },
    },
});
