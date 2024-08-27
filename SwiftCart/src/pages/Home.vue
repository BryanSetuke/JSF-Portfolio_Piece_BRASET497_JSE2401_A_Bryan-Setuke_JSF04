<template>
    <DefaultLayout>
        <div class="home">
            <!-- <h2>Featured Products</h2> -->
            <!-- Filters and Search -->
            <div
                class="flex flex-col md:flex-row justify-between items-center mb-6"
            >
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
    grid-template-columns: repeat(3, 1fr); 
    gap: 16px; 
}

</style>
