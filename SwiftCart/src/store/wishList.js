import { defineStore } from "pinia";

export const useWishListStore = defineStore("wishList", {
    state: () => ({
        wishList: JSON.parse(localStorage.getItem("wishList")) || [],
    }),
    actions: {
        addToWishList(product) {
            if (!this.isInWishList(product.id)) {
                this.wishList.push(product);
                this.saveWishList();
            }
        },
        removeFromWishList(productId) {
            this.wishList = this.wishList.filter(
                (item) => item.id !== productId
            );
            this.saveWishList();
        },
        clearWishList() {
            this.wishList = [];
            localStorage.removeItem("wishList");
        },
        saveWishList() {
            localStorage.setItem("wishList", JSON.stringify(this.wishList));
        },
    },
    getters: {
        getWishList: (state) => state.wishList,
        isInWishList: (state) => (productId) => {
            return state.wishList.some((item) => item.id === productId);
        },
    },
});
