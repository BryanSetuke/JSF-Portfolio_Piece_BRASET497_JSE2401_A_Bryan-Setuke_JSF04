<template>
    <DefaultLayout>
        <div class="home">
            <!-- Filters and Search -->
            <div class="flex flex-col md:flex-row justify-between items-center mb-6">
                <ProductFilterByCategory />
                <ProductSortByPrice />
                <ProductSearchBar />
            </div>
            <div class="product-grid">
                <ProductCard
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                />
            </div>
        </div>
    </DefaultLayout>
</template>

<script>
import DefaultLayout from "../layouts/DefaultLayout.vue";
import ProductCard from "../components/product/ProductCard.vue";
import ProductService from "../services/productService";
import ProductFilterByCategory from "../components/product/ProductFilterByCategory.vue";
import ProductSortByPrice from "../components/product/ProductSortByPrice.vue";
import ProductSearchBar from "../components/product/ProductSearchBar.vue";

export default {
    components: {
        DefaultLayout,
        ProductCard,
        ProductFilterByCategory,
        ProductSortByPrice,
        ProductSearchBar,
    },
    data() {
        return {
            products: [],
        };
    },
    async created() {
        this.products = await ProductService.getProducts();
    },
};
</script>

<style scoped>
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Responsive grid */
    gap: 16px; /* Space between cards */
}

@media (max-width: 640px) {
    .product-grid {
        grid-template-columns: repeat(1, 1fr); /* 1 card per row on small screens */
    }
}

@media (min-width: 641px) and (max-width: 768px) {
    .product-grid {
        grid-template-columns: repeat(2, 1fr); /* 2 cards per row on medium screens */
    }
}

@media (min-width: 769px) {
    .product-grid {
        grid-template-columns: repeat(3, 1fr); /* 3 cards per row on larger screens */
    }
}
</style>
