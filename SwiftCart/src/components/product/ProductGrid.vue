<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6">
    <ProductCard 
      v-for="product in products" 
      :key="product.id" 
      :product="product" 
    />
  </div>
</template>



<script>
import { defineComponent, onMounted } from 'vue';
import { useProductsStore } from '../../store/modules/products'; // Correct path to your Pinia store
import ProductCard from './ProductCard.vue';

export default defineComponent({
  name: 'ProductGrid',
  components: { ProductCard },
  setup() {
    const productsStore = useProductsStore();

    onMounted(() => {
      productsStore.fetchProducts();
    });

    return {
      products: productsStore.products,
    };
  },
});
</script>
