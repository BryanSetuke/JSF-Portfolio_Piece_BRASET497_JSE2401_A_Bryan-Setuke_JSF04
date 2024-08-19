<template>
  <DefaultLayout>
    <div class="home">
      <h2>Featured Products</h2>
      <div class="product-grid">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import ProductCard from '@/components/ProductCard.vue';
import ProductService from '@/services/productservice';

export default {
  components: {
    DefaultLayout,
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    this.products = await ProductService.getFeaturedProducts();
  },
};
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}
</style>
