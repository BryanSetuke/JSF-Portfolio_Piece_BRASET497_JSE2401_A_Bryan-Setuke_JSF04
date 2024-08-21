// src/stores/comparison.js
import { defineStore } from "pinia";
import { storage } from "../../utils/storage";

export const useComparisonStore = defineStore("comparison", {
    state: () => ({
        items: storage.get("comparison") || [],
    }),
    getters: {
        comparisonItems: (state) => state.items,
    },
    actions: {
        addToComparison(product) {
            if (!this.items.some((item) => item.id === product.id)) {
                this.items.push(product);
                storage.set("comparison", this.items);
            }
        },
        removeFromComparison(productId) {
            this.items = this.items.filter((item) => item.id !== productId);
            storage.set("comparison", this.items);
        },
        clearComparison() {
            this.items = [];
            storage.set("comparison", this.items);
        },
    },
});
