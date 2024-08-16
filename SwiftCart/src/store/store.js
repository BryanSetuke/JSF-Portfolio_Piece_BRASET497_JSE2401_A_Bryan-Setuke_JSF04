import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore", {
    state: () => ({
        cart: [],
        wishlist: [],
        products: [],
        isLoading: true,
    }),
    actions: {
        async fetchProducts() {
            try {
                const response = await axios.get(
                    "https://fakestoreapi.com/products"
                );
                this.products = response.data;
            } finally {
                this.isLoading = false;
            }
        },
        addToCart(product) {
            this.cart.push(product);
        },
        removeFromCart(productId) {
            this.cart = this.cart.filter((item) => item.id !== productId);
        },
        addToWishlist(product) {
            this.wishlist.push(product);
        },
        removeFromWishlist(productId) {
            this.wishlist = this.wishlist.filter(
                (item) => item.id !== productId
            );
        },
        sortProducts(criteria) {
            if (criteria === "price") {
                this.products.sort((a, b) => a.price - b.price);
            } else if (criteria === "rating") {
                this.products.sort((a, b) => b.rating.rate - a.rating.rate);
            }
        },
    },
});
