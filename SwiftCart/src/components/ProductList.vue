<template>
  <div class="grid grid-cols-3 gap-4">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue';

const props = defineProps({
  products: Array
});
</script>
